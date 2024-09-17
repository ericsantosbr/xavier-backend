import { Router, Request, Response, NextFunction } from "express";
import { getTeacher } from "../helpers/teacherHelpers";


export const teachersRouter: Router = Router({mergeParams: true});

teachersRouter.get('/getTeacher/:id', (req: Request, res: Response, next: NextFunction) => {
    // const id = typeof req.params.id !== 'undefined' ? req.params.id : null;

    let teacherSearchResult = getTeacher(req.params.id);

    res.json(teacherSearchResult);

    next();
});

teachersRouter.post('/createTeacher', (req: Request, res: Response, next: NextFunction) => {
    let responseJson = {
        id: req.params.id,
        name: 'Eric'
    }

    res.json(responseJson);

    next();
});

teachersRouter.patch('/modifyTeacher/:id', (req: Request, res: Response, next: NextFunction) => {
    let responseJson = {
        id: req.params.id,
        name: 'Eric'
    }

    res.json(responseJson);

    next();
});