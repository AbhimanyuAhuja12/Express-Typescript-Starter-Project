import express from 'express';
import { serverConfig } from './config';
import v1Router from './routers/v1/index.router';

const app = express();


app.use('api/v1',v1Router);

app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
    console.log(`Press Ctrl+C to stop the server`);
});