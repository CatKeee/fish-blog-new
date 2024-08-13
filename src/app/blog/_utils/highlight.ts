import { marked, Renderer, MarkedOptions } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css"; // 选择一个 highlight.js 主题

// 创建 renderer 实例
const renderer = new Renderer();

const copyCode = () => {
  console.log(123);
};

// 修改 renderer.code 函数来接收一个对象参数，并处理可能为 undefined 的 lang
renderer.code = ({ text, lang }: { text: string; lang?: string }) => {
  const validLanguage = hljs.getLanguage(lang ?? "plaintext")
    ? lang
    : "plaintext";
  const highlighted = hljs.highlight(text, {
    language: validLanguage ?? "plaintext",
  }).value;
  return `<pre>
              <div class="absolute top-0 left-0 w-full flex items-center justify-between p-2 bg-[#343943]">
                  <div class="mac-dot"></div>
                  <div class="leading-none flex items-center gap-4">
                      <span>${validLanguage}</span>
                      <div class="flex items-center cursor-pointer hover:opacity-60 select-none" onclick="copyCode(this)">
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="#ffffff" d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1zM5.002 8L5 20h10V8zM9 6h8v10h2V4H9z"/></svg>
                          <span>copy</span>
                      </div>
                  </div>
              </div>
              <code class="hljs ${validLanguage}">${highlighted}</code>
          </pre>`;
};

renderer.codespan = ({ text }) => {
  const highlighted = hljs.highlightAuto(text).value;
  return `<code class="hljs inline-code">${highlighted}</code>`;
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
