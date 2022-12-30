import appContext from '../../../context/app';
import { HttpReturn } from 'design-first';
import requestContext from '../../../context/request/bars/create';
import {
  Bar,
  CreateBar,
} from '../../../models';

export const Handler = async (appCtx: appContext, requestCtx: requestContext, payload: CreateBar): Promise<HttpReturn> => {
  let result: Bar;

  try {
    // your code, here...

    return new HttpReturn(200, result);
  } catch (e) {
    console.error('err in create action of bars service', e);

    return new HttpReturn(500, 'internal server error');
  }
}