import { Router } from 'express';

import { CreateUsersController } from './src/controllers/CreateUsersController';
import { CreateTagsController } from './src/controllers/CreateTagsController';
import { CreateComplimentsController } from './src/controllers/CreateComplimentsController';
import { AuthUserController } from './src/controllers/AuthUserController';
import { ensureAuthentication } from './src/middleware/ensureAuthentication';
import { ensureAdmin } from './src/middleware/ensureAdmin';

const routes = Router();

routes.post("/users", new CreateUsersController().create);

routes.post("/tags", ensureAuthentication, ensureAdmin, new CreateTagsController().create);

routes.post("/compliments", ensureAuthentication, new CreateComplimentsController().create);

routes.post("/login", new AuthUserController().auth);

export { routes };