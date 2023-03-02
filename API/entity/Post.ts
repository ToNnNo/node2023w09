import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {IsNotEmpty, ValidateNested} from "class-validator";
import {Category} from "./Category";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty({ message: `Le champs '$property' est obligatoire`})
    title: string;

    @Column("text", { nullable: true })
    body: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne( () => Category, null, { nullable:true, onDelete: 'SET NULL', cascade: ['insert'] })
    @ValidateNested()
    category: Category
}
