import { Schema, model } from "mongoose";

const evaluationSchema = new Schema({
    dueDate: Date,
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'Teachers'
    },
    assignedDiscipline: {
        type: Schema.Types.ObjectId,
        ref: 'Disciplines'
    },
    evaluations: [{
        type: Schema.Types.ObjectId,
        ref: 'EvaluationResults'
    }],
    assignedStudents: [{
        type: Schema.Types.ObjectId,
        ref: 'Students'
    }]
});

const evaluationModel = model ('Evaluations', evaluationSchema);

export { evaluationModel };