import { Schema } from "mongoose";
import { IUser } from "../../@types/@types";
import nameSchema from "./name-schema";
import addressSchema from "./address-schema";
import imageSchema from "./image-schema";

const userSchema = new Schema<IUser>({

    name: nameSchema,

    address: addressSchema,

    image: { type: imageSchema, required: false },

    email: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 60,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: 9,
        maxlength: 256
    },

    phone: {
        type: String,
        required: true,
        minlength: 9,
        maxlength: 11
    },

    isBusiness: {
        type: Boolean,
        required: true
    },

    createdAt: {
        type: Date,
        default: new Date(),
        required: false
    },

    isAdmin: {
        type: Boolean,
        required: false,
        default: false
    },


})

export default userSchema;