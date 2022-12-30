import appContext from '../../../context/app';
import { HttpReturn } from 'design-first';
import requestContext from '../../../context/request/foos/list';
import {
  Foos,
  ListFoos,
} from '../../../models';

export const Handler = async (appCtx: appContext, requestCtx: requestContext, payload: ListFoos): Promise<HttpReturn> => {
  let result: Foos;

  try {
    // your code, here...

    return new HttpReturn(200, result);
  } catch (e) {
    console.error('err in list action of foos service', e);

    return new HttpReturn(500, 'internal server error');
  }
}