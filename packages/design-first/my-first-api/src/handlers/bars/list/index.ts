import appContext from '../../../context/app';
import { HttpReturn } from 'design-first';
import requestContext from '../../../context/request/bars/list';
import {
  Bars,
  ListBars,
} from '../../../models';

export const Handler = async (appCtx: appContext, requestCtx: requestContext, payload: ListBars): Promise<HttpReturn> => {
  let result: Bars;

  try {
    // your code, here...

    return new HttpReturn(200, result);
  } catch (e) {
    console.error('err in list action of bars service', e);

    return new HttpReturn(500, 'internal server error');
  }
}