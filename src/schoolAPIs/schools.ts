import { Router, Request, Response, NextFunction } from "express";
import { createSchool, getSchool, getStudentsInSchool, getSchoolsList } from "../helpers/schoolHelpers";

export const schoolsRouter: Router = Router({mergeParams: true});

schoolsRouter.get('/getSchool/:id', async (req: Request, res: Response, next: NextFunction) => {
    let foundSchoolData = await getSchool(req.params.id);
    
    res.json(foundSchoolData);

    next();
});

schoolsRouter.post('/createSchool', (req: Request, res: Response, next: NextFunction) => {
    let schoolCreateResult = createSchool(req.body);

    res.json(schoolCreateResult);

    next();
});

schoolsRouter.patch('/updateSchool/:id', (req: Request, res: Response, next: NextFunction) => {
    let responseJson = {
        id: req.params.id,
        name: 'Central'
    }

    res.json(responseJson);

    next();
});

schoolsRouter.get('/getStudentsInSchool/:id', async (req: Request, res: Response, next: NextFunction) => {
    let schoolId = req.params.id;

    if (typeof schoolId === 'undefined' || typeof schoolId === 'undefined') {
        return {};
    }

    let studentsListSearchResult;
    try {
        studentsListSearchResult = await getStudentsInSchool(schoolId, 10, 10);
    } catch(e) {
        return {};
    }

    res.json(studentsListSearchResult);
    
    next();
});

schoolsRouter.get('/getSchoolList', async (req: Request, res: Response, next: NextFunction) => {
    let schoolsList = await getSchoolsList();

    res.json(schoolsList);

    next();
});
