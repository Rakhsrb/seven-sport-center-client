import { BlogPost } from "@/types/RootTypes";

export async function getBlogs(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`http://localhost:3001/api/blog`);

    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export default async function BlogsData() {
  const blogs = await getBlogs();
  return { blogs };
}
