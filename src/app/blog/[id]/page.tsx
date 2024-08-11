import DefaultLayout from "@/layouts/default";
import PostContent from "../_components/content";
import Icon from "@/components/Icon";

interface PostProps {
  params: {
    id: string;
  };
}

const example = `
svg图标可以直接从[https://icones.js.org/](https://icones.js.org/)获取json格式，所以你的图标库理论上可以非常丰富。具体操作如下：

找到自己喜欢的图标库之后，点击右上角的菜单按钮
![WX20240803-103602@2x.png][1]

然后点击\`json\`就会自动下载json文件，里面带有改图标库的所有的图标

![WX20240803-103508@2x.png][2]

组件内容如下
\`\`\`tsx
// SvgIcon.tsx
import React from "react";
import iconData from "@/assets/svgIcon.json";

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: keyof typeof iconData;
  size?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = "1rem",
  className = "",
  ...rest
}) => {
  const svg = iconData[name];

  if (!svg) {
    console.error(\`Icon with name "$\{name\}" not found.\`);
    return null;
  }

  const modifiedSvgContent = svg
    .replace(/width="[^"]*"/, \`width="$\{size\}"\`)
    .replace(/height="[^"]*"/, \`height="$\{size\}"\`);

  return (
    <span
      className={\`icon-$\{name\} $\{className\}\`}
      style={{ width: size, height: size }}
      dangerouslySetInnerHTML={{ __html: modifiedSvgContent }}
      aria-hidden="true"
      {...rest}
    />
  );
};

export default Icon;
\`\`\`

这里我提供一个简单的图标文件
\`\`\`json
// svgIcon.json
{
  "gitee": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.59.59 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z\"/></svg>",
  "24-hours-fill": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M12.005 13.003a3 3 0 0 1 2.08 5.162l-1.91 1.837h2.83v2h-6l-.001-1.724l3.694-3.555a1 1 0 1 0-1.693-.72h-2a3 3 0 0 1 3-3m6 0v4h2v-4h2v9h-2v-3h-4v-6zm-14-1a7.985 7.985 0 0 0 3 6.246v2.416a9.996 9.996 0 0 1-5-8.662zm8-10c5.185 0 9.449 3.946 9.95 9h-2.012A8.001 8.001 0 0 0 5.87 6.868l2.135 2.135h-6v-6L4.45 5.449a9.977 9.977 0 0 1 7.554-3.446\"/></svg>"
}
\`\`\`


  [1]: https://www.zowlsat.com/usr/uploads/2024/08/3430350954.png
  [2]: https://www.zowlsat.com/usr/uploads/2024/08/2506618291.png
  `;

// 模拟获取文章详情的函数
const getPostData = async (
  id: string,
): Promise<{ id: string; title: string; content: string }> => {
  return new Promise((resolve) => {
    resolve({
      id,
      title: `适用于React且支持渲染svg字符串的图标组件`,
      content: example,
    });
  });
};

const PostPage = async ({ params }: PostProps) => {
  const { id } = params;

  // 获取文章数据
  const post = await getPostData(id);

  return (
    <DefaultLayout>
      <div className="relative mx-auto max-w-screen-md">
        <div className="flex cursor-pointer items-center gap-1 underline underline-offset-4 hover:opacity-50">
          <Icon name="ri:arrow-right-s-line" />
          <span className="font-mono">cd ..</span>
        </div>
        <div className="mb-4 mt-4">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <p className="opacity-50">Jan 22, 2021</p>
        </div>
        <PostContent content={post.content} />
      </div>
    </DefaultLayout>
  );
};

export default PostPage;
