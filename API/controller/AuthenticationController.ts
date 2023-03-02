import {Request, Response} from "express";
import {User} from "../class/User";
import {validate} from "class-validator";
import jwt from 'jsonwebtoken';

class AuhenticationController {

    public async index(req: Request, res: Response) {
        const user = new User();
        Object.assign(user, req.body);

        const errors = await validate(user, { validationError: { target: false } });
        if(errors.length > 0) {
            res.status(400).json(errors);
            return;
        }

        // tester l'existance du username et password dans la bdd

        const payload = { id: 0, name: "John Doe" };

        const token = jwt.sign(payload, 'commentestvotreblanquette', {
            algorithm: 'HS512',
            expiresIn: 3600
        });

        res.json({ token });
    }

}

export default new AuhenticationController();
