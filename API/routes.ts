import express from 'express';
import home from './controller/Home';
import post from './controller/PostController';
import category from './controller/CategoryController';
import ResponseController from "./controller/ResponseController";
import authentication from "./controller/AuthenticationController";
import isAuthenticated from "./middleware/isAuthenticated";

const router = express.Router();
export default router;

router.get('/', home.index);

router.post('/connexion', authentication.index)

router.route('/post')
    .get(post.index)
    .post(isAuthenticated, post.create)
    .options((req, res) => {
        res.setHeader('Allow', 'GET, POST, OPTIONS');
        res.status(200).send();
    })
    .all(ResponseController.methodNotAllow)
;

router.route('/post/:id')
    .get(post.detail)
    .delete(post.delete)
    .put(post.update)
    .options((req, res) => {
        res.setHeader('Allow', 'GET, DELETE, PUT, OPTIONS');
        res.status(200).send();
    })
    .all(ResponseController.methodNotAllow)
;

router.route('/category')
    .get(category.index)
    .post(category.create)
    .options((req, res) => {
        res.setHeader('Allow', 'GET, POST, OPTIONS');
        res.status(200).send();
    })
    .all(ResponseController.methodNotAllow)
;

router.route('/category/:id')
    .get(category.detail)
    .delete(category.delete)
    .put(category.update)
    .options((req, res) => {
        res.setHeader('Allow', 'GET, DELETE, PUT, OPTIONS');
        res.status(200).send();
    })
    .all(ResponseController.methodNotAllow)
;
