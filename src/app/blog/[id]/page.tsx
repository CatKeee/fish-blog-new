import DefaultLayout from "@/layouts/default";
import PostContent from "../_components/content";
import BackButton from "@/components/Back";
import { posts, type Post } from "@/assets/posts";
import { rejects } from "assert";

interface PostProps {
  params: {
    id: string;
  };
}

// 模拟获取文章详情的函数
const getPostData = async (id: string): Promise<Post> => {
  return new Promise((resolve, rejects) => {
    const result = posts.find((post) => post.id === parseInt(id));
    if (result) {
      resolve(result);
    } else {
      rejects(new Error("文章不存在"));
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
          <p className="opacity-50">{post.create_time}</p>
        </div>
        <PostContent content={post.content} />
      </div>
    </DefaultLayout>
  );
};

export default PostPage;
