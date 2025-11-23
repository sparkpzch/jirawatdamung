export const getBasePath = (path: string) => {
  const isProd = process.env.NODE_ENV === "production";
  const basePath = isProd ? "/jirawatdamung" : "";
  return `${basePath}${path}`;
};
