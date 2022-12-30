import { Request, Response } from 'express';
import { HttpReturn } from 'design-first';
import appContext from '../../../context/app';
import requestContext from '../../../context/request/bars/delete';

export default async (
  appCtx: appContext,
  requestCtx: requestContext,
  req: Request,
  res: Response,
): Promise<HttpReturn | void> => {

}