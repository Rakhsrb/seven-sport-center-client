import { Suspense } from "react";
import type { Metadata } from "next";
import type { BlogPost } from "@/types/RootTypes";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { CalendarIcon } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { ImageGallery } from "@/components/shared/image-gallery";

type PageParams = {
  params: {
    title: string;
  };
  searchParams: Record<string, string | string[] | undefined>;
};

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const title = decodeURIComponent(params.title);
  return {
    title: `Bloglar | ${title}`,
  };
}

function BlogSkeleton() {
  return (
    <div className="h-[40vh] flex justify-center items-center">
      <span className="h-16 w-16 border-[6px] border-dotted border-red-600 animate-spin rounded-full"></span>
    </div>
  );
}

async function BlogContent({ title }: { title: string }) {
  try {
    const response = await fetch(
      `http://localhost:3001/api/blog?title=${encodeURIComponent(title)}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch blog data");
    }

    const data = await response.json();

    if (!data || data.length === 0) {
      throw new Error("Blog post not found");
    }

    const blogPost: BlogPost = data[0];

    return (
      <article className="max-w-5xl mx-auto space-y-8">
        <Breadcrumb />

        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              {blogPost.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
              {blogPost.createdAt && (
                <div className="flex items-center">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <time dateTime={blogPost.createdAt}>
                    {formatDate(blogPost.createdAt)}
                  </time>
                </div>
              )}
            </div>
          </div>

          {blogPost.photos && blogPost.photos.length > 0 && (
            <ImageGallery images={blogPost.photos} alt={blogPost.title} />
          )}

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {blogPost.description}
          </p>
        </div>
      </article>
    );
  } catch (error) {
    console.error(error);
    return (
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-red-600">Ошибка</h3>
        <p className="text-gray-400">
          Не удалось загрузить данные блога. Пожалуйста, попробуйте позже или
          свяжитесь с администратором.
        </p>
      </div>
    );
  }
}

export default function BlogDetail({ params }: PageParams) {
  const decodedTitle = decodeURIComponent(params.title);

  return (
    <>
      <div className="container mx-auto py-24 px-6">
        <Suspense fallback={<BlogSkeleton />}>
          <BlogContent title={decodedTitle} />
        </Suspense>
      </div>
    </>
  );
}
