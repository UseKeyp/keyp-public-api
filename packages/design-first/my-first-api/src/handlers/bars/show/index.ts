import appContext from '../../../context/app';
import { HttpReturn } from 'design-first';
import requestContext from '../../../context/request/bars/show';
import {
  Boo,
  ShowBar,
} from '../../../models';

export const Handler = async (appCtx: appContext, requestCtx: requestContext, payload: ShowBar): Promise<HttpReturn> => {
  let result: Boo;

  try {
    // your code, here...

    return new HttpReturn(200, result);
  } catch (e) {
    console.error('err in show action of bars service', e);

    return new HttpReturn(500, 'internal server error');
  }
}