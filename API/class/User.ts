import {IsNotEmpty} from "class-validator";

export class User {

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;

}
