import { Schema } from "mongoose";
import { Isound } from "../../@types/@types";


const soundSchema = new Schema<Isound>({
    url: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 256
    },

});

export default soundSchema