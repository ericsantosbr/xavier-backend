import { model, Schema } from "mongoose";

const schoolSchema = new Schema({
    name: String,
    address: String,
    established: Date
});

const schoolModel = model ('School', schoolSchema);

export { schoolModel };