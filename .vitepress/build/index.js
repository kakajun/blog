// base 统一在这改
const isDev = process.env.NODE_ENV === "development";
export function Build() {
  return isDev ? '' : '/blog';
}