import { Schema } from "mongoose";
import { ICard } from "../../@types/@types";
import addressSchema from "./address-schema";
import imageSchema from "./image-schema";
import soundSchema from "./sound-schema";



const cardSchema = new Schema<ICard>({
    title: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 256
    },
    subtitle: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 256
    },
    description: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 1024
    },
    phone: {
        type: String,
        required: true,
        minlength: 9,
        maxlength: 11
    },

    email: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 20,
        unique: true
    },
    web: {
        type: String,
        required: false,
        minlength: 14,
        maxlength: 100
    },
    address: {
        type: addressSchema, required: true
    },
    image: {
        type: imageSchema, required: false
    },
    sound: {
        type: soundSchema, required: false
    },

    likes: [{
        type: String,
    }],




    createdAt: {
        type: Date,
        required: false,
        default: new Date()
    },
    userId: {
        type: String,
        required: true
    },
    soundNumber: {
        type: Number,
        required: true,
        min: 1_000_000,
        max: 9_999_999
    },

});



export default cardSchema;