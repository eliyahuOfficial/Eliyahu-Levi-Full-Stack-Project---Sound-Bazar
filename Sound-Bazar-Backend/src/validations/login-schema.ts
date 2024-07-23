import Joi from "joi";
import { ILogin } from "../@types/@types";
import { passwordRegex } from "./patterns";

const loginSchema = Joi.object<ILogin>({
    email: Joi.string().email().min(5).max(20).required(),
    password: Joi.string().pattern(passwordRegex).required(),
});

export default loginSchema