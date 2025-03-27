"use client";

import { fetcher } from "@/middlewares/Fetcher";
import { BlogPost } from "@/types/RootTypes";
import Link from "next/link";
import useSWR from "swr";

export default function Blogs() {
  const { data, error, isLoading } = useSWR<BlogPost[] | undefined>(
    `/blog`,
    fetcher
  );

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="h-16 w-16 border-[6px] border-dotted border-sky-600 animate-spin rounded-full"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-lg font-medium text-red-600">{error}</p>
      </div>
    );
  }
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <div className="flex justify-center items-center mb-4">
          <div className="w-16 h-[2px] bg-red-600"></div>
          <span className="mx-4 text-red-600 uppercase text-sm font-medium">
            BLOGDAN SO&apos;NGI YANGILIKLAR
          </span>
          <div className="w-16 h-[2px] bg-red-600"></div>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D2756] max-w-3xl mx-auto leading-tight">
          SIZ UCHUN BIZ TANLAGAN DZYUDO MASLAHATLARI
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <Link href={`/blog/${blog.id || "#"}`}>
              <div className="overflow-hidden">
                <img
                  src={blog.photos[0] || "/placeholder.svg"}
                  alt={blog.title}
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
                  href={`/blog/${blog.id || "#"}`}
                  className="hover:text-red-600 transition-colors duration-300"
                >
                  {blog.title}
                </Link>
              </h3>
              <p className="text-gray-600 line-clamp-2 mb-3">
                {blog.description}
              </p>
              <Link
                href={`/blog/${blog.id || "#"}`}
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
          href="/blog"
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
