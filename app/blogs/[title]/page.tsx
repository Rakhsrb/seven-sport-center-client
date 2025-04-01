"use client";

import { useSearchParams } from "next/navigation";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { CalendarIcon } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { ImageGallery } from "@/components/shared/image-gallery";
import { BlogPost } from "@/types/RootTypes";
import { fetcher } from "@/middlewares/Fetcher";
import useSWR from "swr";

export default function BlogDetail() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const { data, error, isLoading } = useSWR<BlogPost[]>(
    `/blog?title=${encodeURIComponent(title)}`,
    fetcher
  );

  if (isLoading) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <span className="h-16 w-16 border-[6px] border-dotted border-red-600 animate-spin rounded-full"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-5xl mx-auto text-center py-24">
        <h3 className="text-2xl font-bold text-red-600">Ошибка</h3>
        <p className="text-gray-400">{error}. Попробуйте позже.</p>
      </div>
    );
  }

  return (
    <article className="max-w-5xl mx-auto space-y-8 py-24">
      <Breadcrumb />

      {data && (
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              {data[0].title}
            </h1>

            {data[0].createdAt && (
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <CalendarIcon className="mr-2 h-4 w-4" />
                <time dateTime={data[0].createdAt}>
                  {formatDate(data[0].createdAt)}
                </time>
              </div>
            )}
          </div>

          {data[0].photos?.length > 0 && (
            <ImageGallery images={data[0].photos} alt={data[0].title} />
          )}

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {data[0].description}
          </p>
        </div>
      )}
    </article>
  );
}
