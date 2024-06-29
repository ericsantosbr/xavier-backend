import { Schema, model } from "mongoose";

const classSchema = new Schema({
    name: String,
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'Students'
    }]
});

const classModel = model ('Classes', classSchema);

export { classModel };