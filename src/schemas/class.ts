import { Schema, model } from "mongoose";

const classSchema = new Schema({
    name: String,
    students: String
});

const classModel = model ('Class', classSchema);

export { classModel };