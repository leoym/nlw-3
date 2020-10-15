import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.get('/nlw/home/:id', (request,response) => {
    return response.json({message:'Hello World ' + request.params.id});
});

app.post('/nlw', (request,response) => {
    return response.json({message:'Hello World'});
});

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

console.log("Starting server");
app.listen(3333);
