export const trimText = (text: string, charLimit: number) => {
  return text.length > charLimit ? text.slice(0, charLimit) + "..." : text;
};
