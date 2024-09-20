import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

import { type Post, posts } from "@/assets/posts";
import BackButton from "@/components/Back";
import DefaultLayout from "@/layouts/default";

import PostContent from "../_components/content";
import { formatDate } from "../_utils/formatDate";

export const generateMetadata = async (
  { params }: PostProps,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const { id } = params;

  const product = await getPostData(id);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.title,
    openGraph: {
      images: ["/guofu/01.jpg", ...previousImages],
    },
  };
};

interface PostProps {
  params: {
    id: string;
  };
}

// 模拟获取文章详情的函数
const getPostData = async (id: string): Promise<Post> => {
  return new Promise((resolve) => {
    const result = posts.find((post) => post.id === parseInt(id));
    if (result) {
      resolve(result);
    } else {
      notFound();
    }
  });
};

const PostPage = async ({ params }: PostProps) => {
  const { id } = params;

  // 获取文章数据
  const post = await getPostData(id);

  return (
    <DefaultLayout>
      <div className="relative mx-auto w-full max-w-screen-md">
        <BackButton />
        <div className="mb-4 mt-4">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <p className="opacity-50">{formatDate(post.create_time)}</p>
        </div>
        <PostContent content={post.content} />
        {/* <div className="mt-4 opacity-60">
          版权声明：未经作者允许，禁止转载至任意平台
        </div>
        <div className="flex items-center">
          <span className="opacity-60">分享至：</span>
          <Icon
            name="ri:wechat-fill"
            size="1.5rem"
            className="text-secondary-foreground/80 hover:text-[#07c160]"
          />

          <Icon
            name="ri:qq-fill"
            size="1.5rem"
            className="text-secondary-foreground/80 hover:text-[#09f]"
          />
        </div> */}
      </div>
    </DefaultLayout>
  );
};

export default PostPage;
