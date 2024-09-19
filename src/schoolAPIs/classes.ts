import { Router, Request, Response, NextFunction } from "express";
import { createClass, getClass, getStudentsInClass } from "../helpers/classesHelpers";

export const classesRouter: Router = Router({mergeParams: true});

classesRouter.get('/getClass/:id', async (req: Request, res: Response, next: NextFunction) => {
    let foundClassData = await getClass(req.params.id);
    
    res.json(foundClassData);

    next();
});

classesRouter.post('/createClass', (req: Request, res: Response, next: NextFunction) => {
    let classCreateResult = createClass(req.body);

    res.json(classCreateResult);

    next();
});

classesRouter.patch('/modifyClass/:id', (req: Request, res: Response, next: NextFunction) => {
    let responseJson = {
        id: req.params.id,
        name: 'Central'
    }

    res.json(responseJson);

    next();
});

classesRouter.get('/getStudentsInClass/:id', async (req: Request, res: Response, next: NextFunction) => {
    const classID = req.params.id;
    let responseData = await getStudentsInClass(classID);

    res.json(responseData);

    next();
});