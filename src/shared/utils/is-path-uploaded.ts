export const isUrlUploaded = (path: string | null | undefined) => {
  return path?.length && !path?.includes('blob');
};
