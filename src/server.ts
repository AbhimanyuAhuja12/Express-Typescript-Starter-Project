import express from 'express';
import { serverConfig } from './config';

const app = express();


app.get('/ping', (req, res) => {
    res.send('Pong');
});

app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
    console.log(`Press Ctrl+C to stop the server`);
});