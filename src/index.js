import { initialMongoConnection } from './db/initMongoDB.js';
import { initialServer } from './server.js';

// const bootstrap = async () => {
//   await initialMongoConnection();

//   initialServer();
// };
// bootstrap();

(async () => {
  await initialMongoConnection();
  initialServer();
})();
