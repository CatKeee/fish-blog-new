import { marked, Renderer, MarkedOptions } from "marked";
import hljs from "highlight.js";

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
  return `<pre>
              <div class="absolute top-0 left-0 w-full flex items-center justify-between p-2 bg-[#343943]">
                  <div class="mac-dot"></div>
                  <div class="leading-none flex items-center gap-4">
                      <span>${validLanguage}</span>
                      <div class="flex items-center cursor-pointer hover:opacity-60 select-none" onclick="copyCode(this)">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1zM5.002 8L5 20h10V8zM9 6h8v10h2V4H9z"/></svg>
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

renderer.link = ({ href, text }) => {
  return `<a href="${href}" target="_blank" class="text-blue-500 hover:underline inline-flex items-center gap-[1px] mx-1">
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m17.657 14.828l-1.415-1.414L17.658 12A4 4 0 1 0 12 6.343l-1.414 1.414L9.17 6.343l1.415-1.414a6 6 0 0 1 8.485 8.485zm-2.829 2.829l-1.414 1.414a6 6 0 0 1-8.485-8.485l1.414-1.414l1.414 1.414L6.343 12A4 4 0 0 0 12 17.657l1.414-1.414zm0-9.9l1.415 1.415l-7.072 7.07l-1.414-1.414z"/></svg>
  ${text}
  </a>`;
};

// <svg xmlns="http://www.w3.org/2000/svg" class="-translate-y-1" width="0.6em" height="0.6em" viewBox="0 0 24 24"><path fill="currentColor" d="m16.004 9.414l-8.607 8.607l-1.414-1.414L14.59 8H7.003V6h11v11h-2z"/></svg>

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
