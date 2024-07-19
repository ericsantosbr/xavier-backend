import { connect, model, Types} from "mongoose";
import { teacherModel } from "../schemas/teacher";

export async function getTeacher(id: string) {
    await connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/XavierDB`);
    let Teacher = teacherModel;
    let teacherQueryResult;

    try {
        const teacherId = new Types.ObjectId(id);
        teacherQueryResult = await Teacher.findById(teacherId);
    } catch (e) {
        console.debug(e);
    }


    return teacherQueryResult;
}