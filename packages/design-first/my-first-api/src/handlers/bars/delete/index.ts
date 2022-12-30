import appContext from '../../../context/app';
import { HttpReturn } from 'design-first';
import requestContext from '../../../context/request/bars/delete';
import {
} from '../../../models';

export const Handler = async (appCtx: appContext, requestCtx: requestContext): Promise<HttpReturn> => {
  let result: string;

  try {
    // your code, here...

    return new HttpReturn(200, result);
  } catch (e) {
    console.error('err in delete action of bars service', e);

    return new HttpReturn(500, 'internal server error');
  }
}