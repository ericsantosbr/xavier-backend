import { Router, Request, Response, NextFunction } from "express";
import { createSchool, getSchool } from "../helpers/schoolHelpers";

export const schoolsRouter: Router = Router();

schoolsRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    let foundSchoolData = await getSchool(req.params.id);
    
    res.json(foundSchoolData);

    next();
});

schoolsRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
    let schoolCreateResult = createSchool(req.body);

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