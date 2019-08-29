import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

// Auth
routes.post('/session', SessionController.store);

// Users
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

// Use middleware to authenticated routes
routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
