import { connect, model, Types} from "mongoose";
import { classModel } from "../schemas/class";
import * as dotenv from 'dotenv';

dotenv.config();

export async function getClass(classid: string) {
    await connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/XavierDB`);

    const Class = classModel;
    let schoolQueryResult;

    try {
        const id = new Types.ObjectId(classid);
        schoolQueryResult = await Class.findById(id);
    } catch (e) {
        console.debug(e);
    }

    return schoolQueryResult;
}

export async function createClass(classData: Object) {
    await connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/XavierDB`);

    const Class = classModel;

    let newSchool = new Class(classData);

    let result = newSchool.save().then(() => console.log('Class created'));

    return result;
}