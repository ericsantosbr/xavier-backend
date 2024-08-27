import { connect, model, Types} from "mongoose";
import { studentModel } from "../schemas/student";
import * as dotenv from 'dotenv';

dotenv.config();

export async function getStudent (studentId: string) {
    // Establishes mongodb connection
    await connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/XavierDB`);

    const Student = studentModel;
    let studentSearchResult;

    try {
        const id = new Types.ObjectId(studentId);
        studentSearchResult = await (await Student.findById(id)).populate('school');
    } catch (err) {
        var test = err;
        console.log(err);
    }

    return studentSearchResult;
}

export async function createStudent (studentData: Object) {
    // Establishes mongodb connection
    await connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/XavierDB`);

    const Student = studentModel;

    let newStudent = new Student(studentData);

    let result = newStudent.save().then(() => console.log('Student created'));

    return result;
}

export async function modifyStudent (studentId: string, newStudentData: Object) {
    await connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/XavierDB`);

    const Student = studentModel;

    const returnedUpdateData = studentModel.findOneAndUpdate({_id: studentId}, newStudentData, {runValidators: true, returnDocument: 'after'});

    return returnedUpdateData;
}

export function deleteStudent (studentId: String) {

}