import type { Metadata } from "next";
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

const logEntries: LogEntry[] = [
  { id: 1, date: "Dec 16, 2022", title: "react 入门教程" },
  {
    id: 2,
    date: "Dec 18, 2021",
    title: "Using Vanilla Extract with next-themes",
  },
  { id: 3, date: "Dec 15, 2021", title: "Styling Radix UI with CSS" },
  { id: 4, date: "Sep 07, 2021", title: "Fractional SVG stars with CSS" },
  {
    id: 5,
    date: "Jun 17, 2021",
    title: "Using Bottom Tab Bars on Safari iOS 15",
  },
  {
    id: 6,
    date: "Jun 10, 2021",
    title: "Responsive Animations with Framer Motion",
  },
  {
    id: 7,
    date: "May 17, 2021",
    title: "Building a blog with Notions public API",
  },
  {
    id: 8,
    date: "May 10, 2021",
    title: "Generating Open Graph images with Mapbox & Canvas",
  },
  {
    id: 9,
    date: "Apr 20, 2021",
    title: "Building a mapping platform with React and Mapbox GL",
  },
  {
    id: 10,
    date: "Mar 16, 2021",
    title: "Spring-based Parallax with Framer motion: Step by step",
  },
  {
    id: 11,
    date: "Feb 21, 2021",
    title: "How to create iOS chat bubbles in CSS",
  },
  {
    id: 12,
    date: "Feb 15, 2021",
    title: "Segmented Control for web with Framer Motion",
  },
  {
    id: 13,
    date: "Feb 08, 2021",
    title: "My favorite productivity hack: git newmr",
  },
  {
    id: 14,
    date: "Feb 05, 2021",
    title: "Page Transitions with Framer Motion",
  },
  { id: 15, date: "Jan 31, 2021", title: "Animated music bars with CSS" },
  {
    id: 16,
    date: "Jan 22, 2021",
    title: "Building my personal website with Next.js backed by Notion",
  },
  { id: 17, date: "Jan 22, 2021", title: "The Evolving Personal Website" },
];

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
            {logEntries.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-x-8 sm:flex-row"
              >
                <h2 className="text-secondary-foreground/50 sm:w-28">
                  {item.date}
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
