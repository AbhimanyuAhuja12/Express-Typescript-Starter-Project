import express from 'express';
import { serverConfig } from './config';
import v1Router from './routers/v1/index.router';
import { genericErrorHandler , AppErrorHandler } from './middlewares/error.middleware';

const app = express();


app.use('api/v1',v1Router);

/**
 * Add the error handler middleware
 */

app.use(AppErrorHandler);
app.use(genericErrorHandler);

app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
    console.log(`Press Ctrl+C to stop the server`);
});