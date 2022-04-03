import { Request, Response } from 'express';
import { BaseController } from './global/base-controller';
import { Controller, Get, Post } from '../core/decorators/controller';

@Controller('/auth')
export default class AuthController extends BaseController {
  @Get('/:id')
  find(req: Request, res: Response) {
    res.json({ message: 'hello' });
  }

  @Get('/')
  get(req: Request, res: Response) {
    res.json({ message: 'hello1' });
  }

  @Post('/')
  create(req: Request, res: Response) {}
}
