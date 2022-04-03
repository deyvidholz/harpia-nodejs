export const isInDistDirectory = (): boolean => {
  return !!__dirname
    .replace(/(\\|\/)core(\\|\/)functions/, '')
    .match(/(\\|\/)dist$/);
};

export const parseGlob = (paths: string[]): string[] => {
  return paths.map((str) => str.replace(/^dist(\\|\/)/, ''));
};
