import type { Metadata } from "next";
import DefaultLayout from "@/layouts/default";
import Link from "next/link";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Projects",
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
    date: "May 10, 2021",
    title: "Generating Open Graph images with Mapbox & Canvas",
  },
];

const Projects = () => {
  return (
    <DefaultLayout>
      <div className="">
        <section className="flex flex-col items-center gap-2 pb-8 pt-4 sm:pb-12 sm:pt-8">
          <h1 className="text-edge-outline text-3xl font-bold">Projects</h1>
          <p className="text-center text-secondary-foreground/60">
            Here are some projects that I have led or participated in.
          </p>
        </section>
        <section className="mx-auto max-w-screen-lg animate-in">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {logEntries.map((item, index) => (
              <Link
                href={`/projects/${index}`}
                key={index}
                className="flex gap-4 rounded border p-4 hover:shadow-md"
              >
                <div>
                  <div className="rounded bg-secondary p-1">
                    <Icon name="ri:apps-line" size="1.6rem" />
                  </div>
                </div>
                <div>
                  <h1 className="text-lg font-medium leading-none">
                    Fish's Blog
                  </h1>
                  <p className="text-secondary-foreground/60">
                    Here are some projects that I have led or participated in.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default Projects;
