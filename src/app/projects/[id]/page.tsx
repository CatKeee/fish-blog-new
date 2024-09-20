import { EmblaOptionsType } from "embla-carousel";
import React from "react";

import BackButton from "@/components/Back";
import DefaultLayout from "@/layouts/default";

import ProjectCarousel from "../_components/ProjectCarousel";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const PostPage = async () => {
  // 获取文章数据

  return (
    <DefaultLayout>
      <div className="relative mx-auto max-w-screen-md">
        <BackButton />
        <div className="mb-4 mt-4">
          {/* <h1 className="text-2xl font-bold">{post.title}</h1> */}
          <p className="opacity-50">Jan 22, 2021</p>
        </div>
        <div>
          <ProjectCarousel slides={SLIDES} options={OPTIONS} />
        </div>
        {/* <PostContent content={post.content} /> */}
      </div>
    </DefaultLayout>
  );
};

export default PostPage;
