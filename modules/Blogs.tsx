"use client";

import { fetcher } from "@/middlewares/Fetcher";
import { BlogPost } from "@/types/RootTypes";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

export default function BlogsModule() {
  const { data, error, isLoading } = useSWR<BlogPost[]>("/blog", fetcher);

  if (isLoading) {
    return <BlogsModuleSkeleton />;
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-4">
              <div className="w-16 h-[2px] bg-red-600"></div>
              <span className="mx-4 text-red-600 uppercase text-sm font-medium">
                YANGILIKLAR
              </span>
              <div className="w-16 h-[2px] bg-red-600"></div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D2756] max-w-3xl mx-auto leading-tight">
              DZYUDO BO&apos;YICHA ENG SO&apos;NGGI YANGILIKLAR VA FOYDALI
              MASLAHATLAR
            </h2>
          </div>
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md">
            <p className="font-medium">
              Ma'lumotlarni yuklashda xatolik yuz berdi
            </p>
            <p className="text-sm mt-1">
              Iltimos, keyinroq qayta urinib ko'ring yoki administrator bilan
              bog'laning.
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (!data || data.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-4">
              <div className="w-16 h-[2px] bg-red-600"></div>
              <span className="mx-4 text-red-600 uppercase text-sm font-medium">
                YANGILIKLAR
              </span>
              <div className="w-16 h-[2px] bg-red-600"></div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D2756] max-w-3xl mx-auto leading-tight">
              DZYUDO BO&apos;YICHA ENG SO&apos;NGGI YANGILIKLAR VA FOYDALI
              MASLAHATLAR
            </h2>
          </div>
          <div className="flex justify-center items-center h-40">
            <p className="text-lg font-medium text-red-600">
              Hech qanday maqola topilmadi
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12 max-w-1/2 mx-auto">
        <div className="flex justify-center items-center mb-4">
          <div className="w-16 h-[2px] bg-red-600"></div>
          <span className="mx-4 text-red-600 uppercase text-sm font-medium">
            YANGILIKLAR
          </span>
          <div className="w-16 h-[2px] bg-red-600"></div>
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2D2756] leading-tight">
          DZYUDO BO&apos;YICHA ENG SO&apos;NGGI YANGILIKLAR VA FOYDALI
          MASLAHATLAR
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <Link href={`/blogs/${blog.title || "#"}`}>
              <div className="overflow-hidden">
                <Image
                  src={blog.photos?.[0] || "/placeholder.svg"}
                  alt={blog.title}
                  unoptimized={true}
                  width={100}
                  height={100}
                  className="w-full aspect-[4/3] object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
            </Link>

            <div className="p-5 bg-gray-50">
              {blog.createdAt && (
                <span className="text-gray-600 text-sm block mb-2">
                  {blog.createdAt
                    ? new Date(blog.createdAt).toLocaleDateString()
                    : ""}
                </span>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                <Link
                  href={`/blogs/${blog.title || "#"}`}
                  className="hover:text-red-600 transition-colors duration-300"
                >
                  {blog.title}
                </Link>
              </h3>
              <p className="text-gray-600 line-clamp-2 mb-3">
                {blog.description}
              </p>
              <Link
                href={`/blogs/${blog.title || "#"}`}
                className="text-red-600 font-medium inline-flex items-center hover:text-red-700"
              >
                Batafsil
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/blogs"
          className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-medium rounded hover:bg-red-700 transition-colors duration-300 group"
        >
          Barcha maqolalarni ko&apos;rish
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2 transform group-hover:translate-x-1 transition-transform"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </Link>
      </div>
    </div>
  );
}

function BlogsModuleSkeleton() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <div className="flex justify-center items-center mb-4">
          <div className="w-16 h-[2px] bg-red-600"></div>
          <span className="mx-4 text-red-600 uppercase text-sm font-medium">
            YANGILIKLAR
          </span>
          <div className="w-16 h-[2px] bg-red-600"></div>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D2756] max-w-3xl mx-auto leading-tight">
          DZYUDO BO&apos;YICHA ENG SO&apos;NGGI YANGILIKLAR VA FOYDALI
          MASLAHATLAR
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-sm animate-pulse"
          >
            <div className="w-full aspect-[4/3] bg-gray-200"></div>
            <div className="p-5 bg-gray-50">
              <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
              <div className="h-6 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-3"></div>
              <div className="h-4 w-20 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="inline-block h-10 w-48 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
}
