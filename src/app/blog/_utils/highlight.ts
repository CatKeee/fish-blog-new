import { marked, Renderer, MarkedOptions } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css"; // 选择一个 highlight.js 主题

// 创建 renderer 实例
const renderer = new Renderer();

// 修改 renderer.code 函数来接收一个对象参数，并处理可能为 undefined 的 lang
renderer.code = ({ text, lang }: { text: string; lang?: string }) => {
  const validLanguage = hljs.getLanguage(lang ?? "plaintext")
    ? lang
    : "plaintext";
  const highlighted = hljs.highlight(text, {
    language: validLanguage ?? "plaintext",
  }).value;
  return `<pre><code class="hljs ${validLanguage}">${highlighted}</code></pre>`;
};

// 设置 marked 的选项，并使用类型断言
marked.setOptions({
  renderer,
  langPrefix: "hljs ", // 为了让代码块添加 hljs class
  highlight: function (code: string, lang?: string) {
    const language = hljs.getLanguage(lang ?? "plaintext") ? lang : "plaintext";
    return hljs.highlight(code, { language: language ?? "plaintext" }).value;
  },
} as MarkedOptions & { highlight: (code: string, lang?: string) => string });

export default marked;
