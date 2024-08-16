import type { Metadata } from "next";
import { posts } from "@/assets/posts";
import { formatDate } from "./_utils/formatDate";
import DefaultLayout from "@/layouts/default";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Here are my technical sharing and some of my life experiences.",
};

interface LogEntry {
  id: number;
  date: string;
  title: string;
  // 假设有时候条目可能还包含更详细的描述
  description?: string;
}

const Blog = () => {
  return (
    <DefaultLayout>
      <div className="">
        <section className="flex flex-col items-center gap-2 pb-8 pt-4 sm:pb-12 sm:pt-8">
          <h1 className="text-edge-outline text-3xl font-bold">Blog</h1>
          <p className="text-center text-secondary-foreground/60">
            Here are my technical sharing and some of my life experiences.
          </p>
        </section>
        <section className="mx-auto max-w-screen-sm animate-in">
          <div className="flex flex-col gap-4">
            {posts.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-x-8 sm:flex-row"
              >
                <h2 className="text-secondary-foreground/50 sm:w-28">
                  {formatDate(item.create_time)}
                </h2>
                <Link
                  className="underline-offset-4 hover:underline"
                  href={`/blog/${item.id}`}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default Blog;
