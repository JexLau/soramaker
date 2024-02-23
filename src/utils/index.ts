export const extractDomain = (url: string)  => {
  // 定义匹配域名的正则表达式
  const regex = /^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(?:[\/?#]|$)/;
  // 使用正则表达式匹配输入的 URL
  const match = url.match(regex);
  // 如果匹配成功，返回域名部分
  return match ? match[1] : null;
}