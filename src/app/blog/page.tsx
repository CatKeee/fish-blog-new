import type { Metadata } from "next";
import DefaultLayout from "@/layouts/default";
import Link from "next/link";
// import { Em } from "@radix-ui/themes";

export const metadata: Metadata = {
  title: "Blog",
  description: "123",
};

interface LogEntry {
  date: string;
  title: string;
  // 假设有时候条目可能还包含更详细的描述
  description?: string;
}

const logEntries: LogEntry[] = [
  { date: "Dec 16, 2022", title: "Using the Strava API with Next.js" },
  { date: "Dec 18, 2021", title: "Using Vanilla Extract with next-themes" },
  { date: "Dec 15, 2021", title: "Styling Radix UI with CSS" },
  { date: "Sep 07, 2021", title: "Fractional SVG stars with CSS" },
  { date: "Jun 17, 2021", title: "Using Bottom Tab Bars on Safari iOS 15" },
  { date: "Jun 10, 2021", title: "Responsive Animations with Framer Motion" },
  { date: "May 17, 2021", title: "Building a blog with Notions public API" },
  {
    date: "May 10, 2021",
    title: "Generating Open Graph images with Mapbox & Canvas",
  },
  {
    date: "Apr 20, 2021",
    title: "Building a mapping platform with React and Mapbox GL",
  },
  {
    date: "Mar 16, 2021",
    title: "Spring-based Parallax with Framer motion: Step by step",
  },
  { date: "Feb 21, 2021", title: "How to create iOS chat bubbles in CSS" },
  {
    date: "Feb 15, 2021",
    title: "Segmented Control for web with Framer Motion",
  },
  { date: "Feb 08, 2021", title: "My favorite productivity hack: git newmr" },
  { date: "Feb 05, 2021", title: "Page Transitions with Framer Motion" },
  { date: "Jan 31, 2021", title: "Animated music bars with CSS" },
  {
    date: "Jan 22, 2021",
    title: "Building my personal website with Next.js backed by Notion",
  },
  { date: "Jan 22, 2021", title: "The Evolving Personal Website" },
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
                <Link href={"#"}>{item.title}</Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default Blog;
