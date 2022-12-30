import { Request, Response } from 'express';
import { HttpReturn } from 'design-first';
import appContext from '../../../context/app';
import requestContext from '../../../context/request/foos/show';
import { ShowFoo } from '../../../models';

export default async (
  appCtx: appContext,
  requestCtx: requestContext,
  payload: ShowFoo,
  req: Request,
  res: Response,
): Promise<HttpReturn | void> => {

}