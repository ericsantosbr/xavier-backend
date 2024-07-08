import express from 'express';
import { Request, Response } from 'express';

import { studentsRouter } from './schoolAPIs/students';
import { teachersRouter } from './schoolAPIs/teachers';
import { schoolsRouter } from './schoolAPIs/schools';
import { classesRouter } from './schoolAPIs/classes';

const app = express();
const port = process.env.port || 8050;
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.use('/students', studentsRouter);
app.use('/teachers', teachersRouter);
app.use('/schools', schoolsRouter);
app.use('/classes', classesRouter);

app.listen(port, () => {
    return console.log('Listening at port ' + port);
});