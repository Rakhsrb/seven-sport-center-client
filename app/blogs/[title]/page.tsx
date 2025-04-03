import { Breadcrumb } from "@/components/shared/breadcrumb";
import { CalendarIcon } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { ImageGallery } from "@/components/shared/image-gallery";
import type { BlogPost } from "@/types/RootTypes";
import { notFound } from "next/navigation";

async function getBlogPost(title: string): Promise<BlogPost[]> {
  try {
    const response = await fetch(
      `http://localhost:3001/api/blog?title=${encodeURIComponent(title)}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch blog post: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching blog post:", error);
    throw error;
  }
}

export default async function BlogDetail({
  searchParams,
}: {
  params: { slug: string };
  searchParams: { title?: string };
}) {
  const title = searchParams.title || "";

  try {
    const data = await getBlogPost(title);

    if (!data || data.length === 0) {
      notFound();
    }

    const post = data[0];

    return (
      <article className="max-w-5xl mx-auto space-y-8 py-24 px-4">
        <Breadcrumb />

        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              {post.title}
            </h1>

            {post.createdAt && (
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <CalendarIcon className="mr-2 h-4 w-4" />
                <time dateTime={post.createdAt}>
                  {formatDate(post.createdAt)}
                </time>
              </div>
            )}
          </div>

          {post.photos?.length > 0 && (
            <ImageGallery images={post.photos} alt={post.title} />
          )}

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {post.description}
          </p>
        </div>
      </article>
    );
  } catch (error) {
    console.log(error);
    return (
      <div className="max-w-5xl mx-auto text-center py-24">
        <h3 className="text-2xl font-bold text-red-600">Ошибка</h3>
        <p className="text-gray-400">
          Произошла ошибка при загрузке данных. Попробуйте позже.
        </p>
      </div>
    );
  }
}

export function Loading() {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <span className="h-16 w-16 border-[6px] border-dotted border-red-600 animate-spin rounded-full"></span>
    </div>
  );
}
