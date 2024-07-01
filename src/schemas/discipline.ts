import { Schema, model } from "mongoose";

const disciplineSchema = new Schema({
    name: String,
    school: {
        type: Schema.Types.ObjectId,
        ref: 'Schools'
    },
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'Students'
    }],
    teacher: {
        type: Schema.Types.ObjectId,
        ref: 'Teachers'
    },
    class: String
});

const disciplineModel = model ('Disciplines', disciplineSchema);

export { disciplineModel };