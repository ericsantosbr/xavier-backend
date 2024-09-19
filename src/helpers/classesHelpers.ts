import { connect, model, Types} from "mongoose";
import { classModel } from "../schemas/class";
import { studentModel } from "../schemas/student";
import * as dotenv from 'dotenv';

dotenv.config();

export async function getClass(classId: string) {
    await connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`);

    const Class = classModel;
    let classQueryResult;

    try {
        const id = new Types.ObjectId(classId);
        classQueryResult = (await Class.findById(id).exec()).toJSON();
        // classQueryResult = (await Class.find({ _id: new Types.ObjectId(id) }));
    } catch (e) {
        console.debug(e);
    }

    return classQueryResult;
}

export async function createClass(classData: Object) {
    await connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`);

    const Class = classModel;

    let newSchool = new Class(classData);

    let result = newSchool.save().then(() => console.log('Class created'));

    return result;
}

export async function getStudentsInClass(classID: string) {
    await connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`);

    const Student = studentModel;
    let studentsQueryResults;

    try {
        const id = new Types.ObjectId(classID);
        studentsQueryResults = (await Student.find({ class: id }));
    } catch (e) {
        console.debug(e);
    }

    return studentsQueryResults;
}