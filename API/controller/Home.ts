import {Request, Response} from "express";

class Home {

    public index(req: Request, res: Response) {
        res.json({'message': `Bienvenue sur notre API Express TS Node`});
    }
}

export default new Home();
