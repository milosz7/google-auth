import { NextFunction, Request, RequestHandler, Response } from 'express';

export const unless = (paths: string[], middleware: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (paths.some(path => path === req.path)) {
      return next();
    }
    return middleware(req, res, next);
  };
};
