"use client";

import React, { useEffect, useState } from "react";
import marked from "./../_utils/highlight";
import { Fancybox } from "@fancyapps/ui";
import { addDataFancybox } from "./../_utils/fancybox";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "highlight.js/styles/atom-one-dark.css"; // 选择一个 highlight.js 主题

interface PostContent {
  content: string;
}

const PostContent: React.FC<PostContent> = (post: PostContent) => {
  const [content, setContent] = useState<string | Promise<string>>(
    marked(post.content),
  );

  useEffect(() => {
    getContent();
  });
  const getContent = async () => {
    let result = await marked(post.content);
    setContent(addDataFancybox(result));
    Fancybox.bind("[data-fancybox]", {
      animated: true,
      groupAll: true,
    });
  };

  return (
    <>
      <div
        className="post-content-container prose w-auto max-w-full dark:prose-invert prose-pre:m-0 prose-pre:p-0"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </>
  );
};

export default PostContent;
