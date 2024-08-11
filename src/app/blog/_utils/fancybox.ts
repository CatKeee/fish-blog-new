export const addDataFancybox = (html: string): string => {
  // 匹配所有 <img> 标签的正则表达式
  const imgTagRegex = /<img\b[^>]*>/gi;

  // 使用 replace 方法来处理每个匹配的 <img> 标签
  return html.replace(imgTagRegex, (imgTag) => {
    // 如果 <img> 标签已经包含 data-fancybox 属性，则直接返回
    if (/data-fancybox\b/.test(imgTag)) {
      return imgTag;
    }

    // 否则，添加 data-fancybox 属性
    return imgTag.replace("<img", "<img data-fancybox");
  });
};
