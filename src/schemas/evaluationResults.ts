import { Schema, model } from "mongoose";

const evaluationResult = new Schema({
    uploadDate: Date,
    createdBy: String,
    evaluation: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Evaluation'
    },
    student: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Student'
    },
    grade: String
});

const evaluationResultModel = model ('EvaluationResults', evaluationResult);

export { evaluationResultModel };