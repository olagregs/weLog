import { Router } from 'express';

import { CreateUsersController } from './src/controllers/CreateUsersController';
import { CreateTagsController } from './src/controllers/CreateTagsController';
import { CreateComplimentsController } from './src/controllers/CreateComplimentsController';

const routes = Router();

routes.post("/users", new CreateUsersController().create);

routes.post("/tags", new CreateTagsController().create);

routes.post("/compliments", new CreateComplimentsController().create);

export { routes };