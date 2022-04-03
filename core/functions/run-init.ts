import glob from 'glob';
import { InitFunctionParam } from 'src/global/typing';

const getInitPaths = () => {
  const dir = 'src/**/*.init.{ts,js}';
  return glob.sync(dir);
};

export const runInit = async (params: InitFunctionParam) => {
  const initPaths = getInitPaths();

  for (const dir of initPaths) {
    const { default: initFunction } = require(`../../${dir}`);
    await initFunction(params);
  }
};
