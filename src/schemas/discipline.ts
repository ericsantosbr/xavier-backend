import { Schema, model } from "mongoose";

const disciplineSchema = new Schema({
    name: String,
    school: String,
    students: Array,
    teacher: String,
    class: String
});

const disciplineModel = model ('Discipline', disciplineSchema);

export { disciplineModel };