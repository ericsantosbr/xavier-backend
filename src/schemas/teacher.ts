import { Schema, model } from "mongoose";

const teacherSchema = new Schema({
    name: String,
    birthDate: Date,
    cpf: {type: String, unique: true},
    email: String,
});

const teacherModel = model ('Teacher', teacherSchema);

export { teacherModel };