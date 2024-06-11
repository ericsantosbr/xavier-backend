import { Schema, model } from "mongoose";

const evaluationSchema = new Schema({
    dueDate: Date,
    createdBy: String,
    assignedDiscipline: String,
    assignedStudents: Array
});

const evaluationModel = model ('Evaluation', evaluationSchema);

export { evaluationModel };