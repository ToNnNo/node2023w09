import "reflect-metadata";
import { DataSource } from "typeorm";
import path from 'path';
import {Post} from "./entity/Post";
import {Category} from "./entity/Category";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: path.resolve(path.join("API", "var", "db.sqlite")),
    synchronize: false, // empeche la synchronisation automatique des tables
    logging: true, // trace dans la console les commandes sql
    entities: [Post, Category]
});

// entities: ["API/entity/**/*.ts"]

/**
 * type: "mysql",
 * host: "localhost",
 * port: 3306,
 * username: "root",
 * password: "s3cr3t"
 * database: "myDataBase"
 * */
