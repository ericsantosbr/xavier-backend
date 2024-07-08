import { Schema, model } from "mongoose";

const classSchema = new Schema({
    name: String,
    school: {
        type: Schema.Types.ObjectId,
        ref: 'Schools'
    },
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'Students'
    }]
});

const classModel = model ('Classes', classSchema);

export { classModel };