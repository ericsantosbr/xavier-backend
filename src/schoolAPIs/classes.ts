import { Router, Request, Response, NextFunction } from "express";
import { createClass, getClass } from "../helpers/classesHelpers";

export const schoolsRouter: Router = Router();

schoolsRouter.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    let foundSchoolData = getClass(req.params.id);
    
    res.json(foundSchoolData);

    next();
});

schoolsRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
    let schoolCreateResult = createClass(req.body);

    res.json(schoolCreateResult);

    next();
});

schoolsRouter.patch('/', (req: Request, res: Response, next: NextFunction) => {
    let responseJson = {
        id: req.params.id,
        name: 'Central'
    }

    res.json(responseJson);

    next();
});