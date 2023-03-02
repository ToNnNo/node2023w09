import {Request, Response} from "express";
import {AppDataSource} from "../data-source";
import {Category} from "../entity/Category";
import {validate} from "class-validator";

class CategoryController {

    public async index(req: Request, res: Response) {
        const categoryRepository = AppDataSource.getRepository(Category);
        const categories = await categoryRepository.find(); // select * from Category

        res.json(categories);
    }

    public async detail(req: Request, res: Response) {
        const id = +req.params.id;

        const categoryRepository = AppDataSource.getRepository(Category);
        const category = await categoryRepository.findOne({ where: { id }});

        if(!category) {
            res.status(404).json({status: 404, message: "La ressource n'existe pas"});
            return;
        }

        res.json(category);
    }

    public async create(req: Request, res: Response) {
        const category = new Category();

        Object.assign(category, req.body); // merge object

        const errors = await validate(category, { validationError: { target: false } });
        if(errors.length > 0) {
            res.status(400).json(errors);
            return;
        }

        const categoryRepository = AppDataSource.getRepository(Category);
        const categoryCreated = await categoryRepository.save(category);

        res.status(201).json(categoryCreated);
    }

    public async update(req: Request, res: Response) {
        const id = +req.params.id;
        const body = req.body;

        const categoryRepository = AppDataSource.getRepository(Category);
        const data = await categoryRepository.update(id, body);

        if(0 === data.affected) {
            res.status(404).json({status: 404, message: "La ressource n'existe pas"});
            return;
        }

        const category = await categoryRepository.findOneBy({ id });

        res.json(category);
    }

    public async delete(req: Request, res: Response) {
        const id = +req.params.id;

        const categoryRepository = AppDataSource.getRepository(Category);
        await categoryRepository.delete(id);

        res.status(204).json(); // No Content
    }

}

export default new CategoryController();
