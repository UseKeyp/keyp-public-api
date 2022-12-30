import appContext from '../../../context/app';
import { HttpReturn } from 'design-first';
import requestContext from '../../../context/request/foos/create';
import {
  Foo,
  CreateFoo,
} from '../../../models';

export const Handler = async (appCtx: appContext, requestCtx: requestContext, payload: CreateFoo): Promise<HttpReturn> => {
  let result: Foo;

  try {
    // your code, here...

    return new HttpReturn(200, result);
  } catch (e) {
    console.error('err in create action of foos service', e);

    return new HttpReturn(500, 'internal server error');
  }
}