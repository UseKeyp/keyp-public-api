import { Request, Response } from 'express';
import { HttpReturn } from 'design-first';
import appContext from '../../../context/app';
import requestContext from '../../../context/request/bars/update';
import { UpdateBar } from '../../../models';

export default async (
  appCtx: appContext,
  requestCtx: requestContext,
  payload: UpdateBar,
  req: Request,
  res: Response,
): Promise<HttpReturn | void> => {

}