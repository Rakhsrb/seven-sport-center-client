import { Suspense } from "react";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/types/RootTypes";

export async function generateMetadata({
  params,
}: {
  params: { title: string };
}): Promise<Metadata> {
  const { title } = await params;
  return {
    title: `Bloglar | ${decodeURIComponent(title)}`,
  };
}

async function BlogContent({ title }: { title: string }) {
  try {
    const response = await fetch(
      `http://localhost:3001/api/blog?title=${encodeURIComponent(title)}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch blog data");
    }

    const malumot = await response.json();

    const template: BlogPost = malumot[0];

    return (
      <>
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          <div className="flex justify-between items-center">
            <Link
              href="/blog"
              className="flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Назад к портфолио
            </Link>
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                {template.title}
              </h1>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed">
              {template.description}
            </p>
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.log(error);
    return (
      <div className="max-w-5xl mx-auto">
        <h3>Ошибка</h3>
        <p>
          Не удалось загрузить данные портфолио. Пожалуйста, попробуйте позже
          или свяжитесь с администратором.
        </p>
      </div>
    );
  }
}

function BlogSkeleton() {
  return (
    <div className="h-[40vh] flex justify-center items-center">
      <span className="h-16 w-16 border-[6px] border-dotted border-red-600 animate-spin rounded-full"></span>
    </div>
  );
}

export default function BlogDetail({ params }: { params: { title: string } }) {
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
