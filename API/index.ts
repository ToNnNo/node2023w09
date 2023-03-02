import colors from 'colors';
import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

import routes from './routes';
import { AppDataSource } from './data-source';

const app = express();

app.use(helmet());
app.use(cors({
    origin: "http://localhost",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
}));

AppDataSource.initialize(); // connecter l'application à la bdd

// parser les données au format json se trouvant dans le corps de la requête
// content-type: application/json
app.use(bodyParser.json());

app.use(routes);

app.use('*', (req: Request, res: Response) => {
    res.status(404).json({status: 404, message: "Not Found"});
})

const port = process.env.PORT ? parseInt(process.env.PORT) : 3200;
app.listen(port, 'localhost', () => {
    console.log( colors.yellow(`Personal Node Server is listening on http://localhost:${port}`) );
    console.log( colors.yellow('Shutdown Node Server with CTRL + C') );
});
