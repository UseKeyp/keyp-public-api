import { Request, Response } from 'express';
import { HttpReturn } from 'design-fisrt';
import appContext from '../../../context/app';
import requestContext from '../../../context/request/foos/update';
import { UpdateFoo } from '../../../models';

export default async (
  appCtx: appContext,
  requestCtx: requestContext,
  payload: UpdateFoo,
  req: Request,
  res: Response,
): Promise<HttpReturn | void> => {

}