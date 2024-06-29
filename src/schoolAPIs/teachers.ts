import { Router, Request, Response, NextFunction } from "express";

export const teachersRouter: Router = Router();

teachersRouter.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    let responseJson = {
        id: req.params.id,
        name: 'Eric'
    }

    res.json(responseJson);

    next();
});

teachersRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
    let responseJson = {
        id: req.params.id,
        name: 'Eric'
    }

    res.json(responseJson);

    next();
});

teachersRouter.patch('/', (req: Request, res: Response, next: NextFunction) => {
    let responseJson = {
        id: req.params.id,
        name: 'Eric'
    }

    res.json(responseJson);

    next();
});