import { createMiddleware } from '@mswjs/http-middleware';
import express from 'express';
import cors from 'cors';
import { handlers } from './handlers';

const app = express();
const port = 3333;
const ip = '192.168.0.2';

app.use(cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200, credentials: true }));
app.use(express.json());
app.use(createMiddleware(...handlers));
app.listen(port, ip, () => console.log(`Mock server is running on http://${ip}:${port}`));
