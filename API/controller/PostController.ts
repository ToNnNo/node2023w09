import {Request, Response} from "express";
import {AppDataSource} from "../data-source";
import {Post} from "../entity/Post";
import {validate} from "class-validator";
import {Category} from "../entity/Category";
import _ from "lodash";

class PostController {

    public async index(req: Request, res: Response) {
        const postRepository = AppDataSource.getRepository(Post);
        // const posts = await postRepository.find(); // select * from post

        const posts = await postRepository.find({ // select * from post join category on ... = ...
            relations: {
                category: true
            }
        });

        res.json(posts);
    }

    public async detail(req: Request, res: Response) {
        const id = +req.params.id;

        const postRepository = AppDataSource.getRepository(Post);
        // const post = await postRepository.findOne({ where: { id }});
        const post = await postRepository.findOne({
            where: { id },
            relations: {
                category: true
            }
        });

        if(!post) {
            res.status(404).json({status: 404, message: "Not Found"});
            return;
        }

        res.json(post);
    }

    public async create(req: Request, res: Response) {
        const post = new Post();
        Object.assign(post, req.body); // merge object

        if(!_.isEmpty(req.body.category)) {
            const category = new Category();
            Object.assign(category, req.body.category);

            post.category = category;
        }

        const errors = await validate(post, { validationError: { target: false } });
        if(errors.length > 0) {
            res.status(400).json(errors);
            return;
        }

        const postRepository = AppDataSource.getRepository(Post);
        const postCreated = await postRepository.save(post);

        res.status(201).json(postCreated);
    }

    public async update(req: Request, res: Response) {
        const id = +req.params.id;
        const body = req.body;

        const postRepository = AppDataSource.getRepository(Post);
        const data = await postRepository.update(id, body);

        if(0 === data.affected) {
            res.status(404).json({status: 404, message: "La ressource n'existe pas"});
            return;
        }

        const post = await postRepository.findOneBy({ id });

        res.json(post);
    }

    public async delete(req: Request, res: Response) {
        const id = +req.params.id;

        const postRepository = AppDataSource.getRepository(Post);
        await postRepository.delete(id);

        res.status(204).json(); // No Content
    }

}

export default new PostController();
