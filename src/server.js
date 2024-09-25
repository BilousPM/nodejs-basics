import express from 'express';
import cors from 'cors';
// import pino from 'pino-http';
import { env } from './utils/env.js';
import { MONGO_DB_VARS } from './constants/index.js';
import { notFoundMiddleware } from './middlewares/notFoundHandler.js';
import { errorHandlerMiddelware } from './middlewares/errorHandler.js';
import contactsRouter from './routers/contacts.js';

const PORT = Number(env(MONGO_DB_VARS.PORT, 3000));

export const initialServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  // app.use(
  //   pino({
  //     rtansport: {
  //       target: 'pino-http',
  //     },
  //   }),
  // );

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello_World',
    });
  });

  app.use('/contacts', contactsRouter);

  app.use('*', notFoundMiddleware);
  app.use('*', errorHandlerMiddelware);

  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
};
