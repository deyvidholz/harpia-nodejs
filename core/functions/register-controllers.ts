import glob from 'glob';
import 'reflect-metadata';
import { Application } from 'express';
import { ControllerOptions, RouteDefinition } from '../decorators/controller';

const getControllerPaths = () => {
  const dir = 'src/**/*.controller.{ts,js}';
  return glob.sync(dir);
};

export const registerControllers = (app: Application) => {
  const controllerPaths = getControllerPaths();

  for (const dir of controllerPaths) {
    const { default: Controller } = require(`../../${dir}`);
    try {
      const instance = new Controller();
      const prefix = Reflect.getMetadata('prefix', instance);
      const options: ControllerOptions = Reflect.getMetadata(
        'options',
        instance
      );
      const routes: RouteDefinition[] =
        Reflect.getMetadata('routes', instance) || [];

      routes.forEach((route: RouteDefinition) => {
        app[route.method](
          `${prefix}${route.path}`,
          ...((options.middlewares as any) || []),
          ...(route.middlewares as any),
          instance[route.methodName]
        );
      });
    } catch (error: any) {
      console.log(error?.message);
    }
  }
};
