import DefaultLayout from "@/layouts/default";
// import PostContent from "../_components/content";
import Icon from "@/components/Icon";
import { Card, CardContent } from "@/components/ui/card";
import ProjectCarousel from "../_components/ProjectCarousel";
import { EmblaOptionsType } from "embla-carousel";

interface PostProps {
  params: {
    id: string;
  };
}

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const PostPage = async ({ params }: PostProps) => {
  const { id } = params;

  // 获取文章数据

  return (
    <DefaultLayout>
      <div className="relative mx-auto max-w-screen-md">
        <div className="flex cursor-pointer items-center gap-1 underline underline-offset-4 hover:opacity-50">
          <Icon name="ri:arrow-right-s-line" />
          <span className="font-mono">cd ..</span>
        </div>
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
