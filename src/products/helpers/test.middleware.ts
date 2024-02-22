import { Injectable, NestMiddleware } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { NextFunction, Response, Request } from 'express';

export const C_ID_HEADER = 'x-cid';
@Injectable()
export class TestMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {

    const id = randomUUID();
    req[C_ID_HEADER] = id;
    res.set(C_ID_HEADER, id);



    console.log('Request...', req.method, req.url);
    next();
  }
}
