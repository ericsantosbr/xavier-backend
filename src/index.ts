import express from 'express';
import { Request, Response } from 'express';

import { studentsRouter } from './schoolAPIs/students';
import { teachersRouter } from './schoolAPIs/teachers';
import { schoolsRouter } from './schoolAPIs/schools';

const app = express();
const port = 8050;
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.use('/students', studentsRouter);
app.use('/teachers', teachersRouter);
app.use('/schools', schoolsRouter);

app.listen(port, () => {
    return console.log('Listening at port ' + port);
});