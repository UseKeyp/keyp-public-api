/**
 * DO NOT EDIT
 * AUTO-GENERATED FILE
 * This file was generated with 'design-first'
 */

import { Router } from 'express';

// Middlewares
import DefaultAppMiddleware from '../../middleware/app';
import FoosShowMiddleware from '../../middleware/foos/show';
import FoosListMiddleware from '../../middleware/foos/list';
import FoosUpdateMiddleware from '../../middleware/foos/update';
import FoosCreateMiddleware from '../../middleware/foos/create';
import FoosDeleteMiddleware from '../../middleware/foos/delete';
import BarsShowMiddleware from '../../middleware/bars/show';
import BarsListMiddleware from '../../middleware/bars/list';
import BarsUpdateMiddleware from '../../middleware/bars/update';
import BarsCreateMiddleware from '../../middleware/bars/create';
import BarsDeleteMiddleware from '../../middleware/bars/delete';


// Handlers
import FoosShowHandler from './foos/show';
import FoosListHandler from './foos/list';
import FoosUpdateHandler from './foos/update';
import FoosCreateHandler from './foos/create';
import FoosDeleteHandler from './foos/delete';
import BarsShowHandler from './bars/show';
import BarsListHandler from './bars/list';
import BarsUpdateHandler from './bars/update';
import BarsCreateHandler from './bars/create';
import BarsDeleteHandler from './bars/delete';


// Routes
const router: Router = Router();
router.get('/foos/:fooID', DefaultAppMiddleware, FoosShowMiddleware, FoosShowHandler);
router.get('/foos', DefaultAppMiddleware, FoosListMiddleware, FoosListHandler);
router.put('/foos/:fooID', DefaultAppMiddleware, FoosUpdateMiddleware, FoosUpdateHandler);
router.post('/foos', DefaultAppMiddleware, FoosCreateMiddleware, FoosCreateHandler);
router.delete('/foos/:fooID', DefaultAppMiddleware, FoosDeleteMiddleware, FoosDeleteHandler);
router.get('/bars/:barID', DefaultAppMiddleware, BarsShowMiddleware, BarsShowHandler);
router.get('/bars', DefaultAppMiddleware, BarsListMiddleware, BarsListHandler);
router.put('/bars/:barID', DefaultAppMiddleware, BarsUpdateMiddleware, BarsUpdateHandler);
router.post('/bars', DefaultAppMiddleware, BarsCreateMiddleware, BarsCreateHandler);
router.delete('/bars/:barID', DefaultAppMiddleware, BarsDeleteMiddleware, BarsDeleteHandler);


export default router