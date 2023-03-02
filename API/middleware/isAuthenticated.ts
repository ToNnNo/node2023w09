import {NextFunction, Request, Response} from "express";
import jwt from 'jsonwebtoken';

export default function(req: Request, res: Response, next: NextFunction) {
    // authorization: Bearer ...token...

    if(undefined !== req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];

        try {
            let payload = jwt.verify(token, 'commentestvotreblanquette', { algorithms: ['HS512'] });
            // req.locals = payload;

            next();
            return;
        } catch(e) {}
    }

    res.status(401).json({ status: 401, message: `Erreur d'authentification`});
}
