export const getBasePath = (path: string) => {
  const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
  const basePath = rawBasePath
    ? rawBasePath.startsWith("/")
      ? rawBasePath
      : `/${rawBasePath}`
    : "";

  return `${basePath}${path}`;
};
