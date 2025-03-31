import { Suspense } from "react";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { BlogPost } from "@/types/RootTypes";

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
      <div className="max-w-5xl mx-auto px-4 space-y-8">
        <div className="flex justify-between items-center">
          <Link
            href="/blogs"
            className="flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Назад к блогам
          </Link>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">{blogPost.title}</h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            {blogPost.description}
          </p>
        </div>
      </div>
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
  return (
    <>
      <div className="h-[30vh] flex items-center justify-center flex-col bg-black">
        <h1 className="text-white font-bold text-4xl">BLOGLAR</h1>
      </div>

      <div className="container mx-auto py-16 px-6">
        <Suspense fallback={<BlogSkeleton />}>
          <BlogContent title={params.title} />
        </Suspense>
      </div>
    </>
  );
}
