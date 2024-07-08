import { Router, Request, Response, NextFunction } from "express";
import { getStudent, createStudent, deleteStudent } from "../helpers/studentHelpers";

export const studentsRouter: Router = Router({mergeParams: true});

studentsRouter.get('/getStudent/:id', async (req: Request, res: Response, next: NextFunction) => {
    const studentId = req.params.id;

    let studentSearchResult = await getStudent(studentId);

    res.json(studentSearchResult);

    next();
});

studentsRouter.post('/createStudent', (req: Request, res: Response, next: NextFunction) => {
    let responseJson = createStudent(req.body);

    res.json(responseJson);

    next();
});

studentsRouter.patch('/modifyStudent/:id', (req: Request, res: Response, next: NextFunction) => {
    const studentId = req.params.id;
    const patchedData = req.body;

    let responseJson = {
        id: req.params.id,
        name: 'Eric'
    }

    res.json(responseJson);

    next();
});

studentsRouter.delete('/deleteStudent', (req: Request, res: Response, next: NextFunction) => {
    let responseJson = {
        id: req.params.id,
        name: 'Eric'
    }

    res.json(responseJson);

    next();
});