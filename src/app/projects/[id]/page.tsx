import { Card, CardContent } from "@/components/ui/card";
import { EmblaOptionsType } from "embla-carousel";
import Icon from "@/components/Icon";
import DefaultLayout from "@/layouts/default";
import BackButton from "@/components/Back";
import ProjectCarousel from "../_components/ProjectCarousel";

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
