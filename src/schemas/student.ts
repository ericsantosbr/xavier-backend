import { model, Schema } from "mongoose";

const studentSchema: Schema = new Schema({
    name: String,
    contact: String,
    email: String,
    parentContact: String,
    birthDate: Date,
    address: String,
    cpf: {type: String, unique: true },
    school: String,
    notes: Array,
    class: String
});

const studentModel = model ('Student', studentSchema);

export { studentModel };