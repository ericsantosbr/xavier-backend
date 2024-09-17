import { model, Schema } from "mongoose";

const schoolSchema = new Schema({
    name: String,
    address: String,
    established: Date,
    phone: String,
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'Students'
    }],
    teachers: [{
        type: Schema.Types.ObjectId,
        ref: 'Teachers'
    }]
});

const schoolModel = model ('Schools', schoolSchema);

export { schoolModel };