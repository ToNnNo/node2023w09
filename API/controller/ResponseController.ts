import {Request, Response} from "express";

class ResponseController {

    public async methodNotAllow(req: Request, res: Response) {
        res.status(405).send();
    }
}

export default new ResponseController();
