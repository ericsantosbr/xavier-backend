import { model, Schema } from "mongoose";

const studentSchema: Schema = new Schema({
    name: String,
    contact: String,
    email: String,
    parentContact: String,
    birthDate: Date,
    address: String,
    cpf: {
        type: String,
        unique: true
    },
    school: {
        type: Schema.Types.ObjectId,
        ref: 'Schools'
    },
    notes: Array,
    class: {
        type: Schema.Types.ObjectId,
        ref: 'Class'
    },
    grades: [{
        type: Schema.Types.ObjectId,
        ref: 'EvaluationResults'
    }]
});

const studentModel = model ('Students', studentSchema);

export { studentModel };