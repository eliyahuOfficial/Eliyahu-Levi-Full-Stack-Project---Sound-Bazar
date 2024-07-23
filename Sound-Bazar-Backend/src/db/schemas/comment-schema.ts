import { Schema, } from 'mongoose';
import { IComment } from '../../@types/@types';
import nameSchema from './name-schema';
import imageSchema from './image-schema';


const commentSchema = new Schema<IComment>({
    name: nameSchema,
    image: { type: imageSchema, required: false },
    userId: {
        type: String,
        required: true
    },
    cardId: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true

    },
    createdAt: {
        type: Date,
        default: Date.now
    },

});

export default commentSchema;
