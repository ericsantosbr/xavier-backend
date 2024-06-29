import { Router, Request, Response, NextFunction } from "express";
import { getStudent, createStudent, deleteStudent } from "../helpers/studentHelpers";

export const studentsRouter: Router = Router();

studentsRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    const studentId = req.params.id;

    let studentSearchResult = await getStudent(studentId);

    res.json(studentSearchResult);

    next();
});

studentsRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
    let responseJson = createStudent(req.body);

    res.json(responseJson);

    next();
});

studentsRouter.patch('/:id', (req: Request, res: Response, next: NextFunction) => {
    const studentId = req.params.id;
    const patchedData = req.body;

    let responseJson = {
        id: req.params.id,
        name: 'Eric'
    }

    res.json(responseJson);

    next();
});

studentsRouter.delete('/', (req: Request, res: Response, next: NextFunction) => {
    let responseJson = {
        id: req.params.id,
        name: 'Eric'
    }

    res.json(responseJson);

    next();
});