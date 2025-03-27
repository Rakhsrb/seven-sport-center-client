import Link from "next/link";

interface BlogPostProps {
  image: string;
  title: string;
  date?: string;
}

const BlogPost = ({ image, title, date = "24.02.2025" }: BlogPostProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <img
        src={image || "/placeholder.svg"}
        alt={title}
        className="w-full aspect-[4/3] object-cover"
      />

      <div className="p-5 bg-gray-50">
        <span className="text-gray-600 text-sm">{date}</span>
        <h3 className="text-xl font-bold text-gray-900 hover:text-red-600 transition-colors duration-300">
          <Link href="#">{title}</Link>
        </h3>
      </div>
    </div>
  );
};

export default function Blogs() {
  const blogPosts = [
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vXxbbTOoyrPj14NGlV7ESzI24eLjAp.png",
      title: "Footprints in Time is perfect House in Kurashiki",
      author: "Creative director",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vXxbbTOoyrPj14NGlV7ESzI24eLjAp.png",
      title: "Footprints in Time is perfect House in Kurashiki",
      author: "Creative director",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vXxbbTOoyrPj14NGlV7ESzI24eLjAp.png",
      title: "5 Essential Exercises for Building Core Strength",
      author: "Creative director",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vXxbbTOoyrPj14NGlV7ESzI24eLjAp.png",
      title: "Nutrition Tips for Maximum Muscle Gain",
      author: "Creative director",
    },
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <div className="flex justify-center items-center mb-4">
          <div className="w-16 h-[2px] bg-red-600"></div>
          <span className="mx-4 text-red-600 uppercase text-sm font-medium">
            BLOGDAN SO‘NGI YANGILIKLAR
          </span>
          <div className="w-16 h-[2px] bg-red-600"></div>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D2756] max-w-3xl mx-auto leading-tight">
          SIZ UCHUN BIZ TANLAGAN DZUDO MASLAHATLARI
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {blogPosts.map((post, index) => (
          <BlogPost key={index} image={post.image} title={post.title} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/blog"
          className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-medium rounded hover:bg-red-700 transition-colors duration-300 group"
        >
          Barcha maqolalarni ko'rish
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
