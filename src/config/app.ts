import type { IconName } from "@/assets/icons/index";

interface Config {
  title: string;
  description: string;
  author: string;
  url: string;
  keywords: string;
  themeColor: "light" | "dark" | "system";
  ogImage: string;
  logo: string;
  favicon: string;
  navs: NavsItem[];
}

interface NavsItem {
  icon?: IconName;
  title: string;
  path: string;
  target: boolean;
  scroll: boolean;
  enabled: boolean;
  prefetch: boolean;
  children: NavsItem[];
}

const config: Config = {
  title: "Kunio's Blog",
  description: "A blog build with NextJS",
  author: "JXDN",
  url: "https://blog.fishblog.cn",
  keywords: "Next.js,NextJS,Blog,NextJs Blog",
  themeColor: "system",
  ogImage: "",
  logo: "",
  favicon: "",
  navs: [
    {
      title: "Blog",
      path: "/blog",
      icon: "ri:file-list-2-line",
      target: false,
      enabled: true,
      scroll: true,
      prefetch: false,
      children: [],
    },
    {
      title: "Projects",
      path: "/projects",
      icon: "ri:apps-line",
      target: false,
      enabled: true,
      scroll: true,
      prefetch: false,
      children: [
        // {
        //   title: "About",
        //   path: "/about",
        //   target: false,
        //   scroll: true,
        //   enabled: true,
        // },
      ],
    },
    {
      title: "Album",
      path: "/album",
      icon: "ri:image-line",
      target: false,
      enabled: true,
      scroll: true,
      prefetch: false,
      children: [],
    },
    // {
    //   title: "Music",
    //   path: "/music",
    //   icon: "ri:music-2-line",
    //   target: false,
    //   enabled: true,
    //   scroll: true,
    //   prefetch: false,
    //   children: [],
    // },
    {
      title: "About",
      path: "/about",
      icon: "ri:information-line",
      target: false,
      enabled: true,
      prefetch: false,
      scroll: true,
      children: [],
    },
    // {
    //   title: "Doc",
    //   path: "https://nextjs.org",
    //   icon: "ri:book-2-line",
    //   target: true,
    //   enabled: true,
    //   scroll: true,
    //   children: [],
    // },
  ],
};

export default config;
