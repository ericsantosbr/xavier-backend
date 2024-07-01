import { connect, model, Types} from "mongoose";
import { schoolModel } from "../schemas/school";
import * as dotenv from 'dotenv';

dotenv.config();

export async function getSchool(schoolId: string) {
    await connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/XavierDB`);

    const School = schoolModel;
    let schoolQueryResult;

    try {
        const id = new Types.ObjectId(schoolId);
        schoolQueryResult = (await School.findById(id)).toJSON();
    } catch (e) {
        console.debug(e);
    }

    return schoolQueryResult;
}

export async function createSchool(schoolData: Object) {
    await connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/XavierDB`);

    const Student = schoolModel;

    let newSchool = new Student(schoolData);

    let result = newSchool.save().then(() => console.log('School created'));

    return result;
}