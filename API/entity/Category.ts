import {Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {IsNotEmpty} from "class-validator";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty({ message: `Le champs '$property' est obligatoire`})
    name: string;
}
