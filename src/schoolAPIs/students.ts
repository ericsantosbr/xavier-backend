import { Router, Request, Response, NextFunction } from "express";

export const studentsRouter: Router = Router();

studentsRouter.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    let responseJson = {
        id: req.params.id,
        name: 'Eric'
    }

    res.json(responseJson);

    next();
});

studentsRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
    let responseJson = {
        id: req.params.id,
        name: 'Eric'
    }

    res.json(responseJson);

    next();
});

studentsRouter.patch('/', (req: Request, res: Response, next: NextFunction) => {
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