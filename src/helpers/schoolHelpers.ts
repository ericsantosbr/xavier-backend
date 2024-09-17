import { connect, model, Types} from "mongoose";
import { schoolModel } from "../schemas/school";
import * as dotenv from 'dotenv';
import { studentModel } from "../schemas/student";
import { classModel } from "../schemas/class"; 

dotenv.config();

export async function getSchool(schoolId: string) {
    await connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`);

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
    await connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`);

    const School = schoolModel;

    let newSchool = new School(schoolData);

    let result = newSchool.save().then(() => console.log('School created'));

    return result;
}

// Due to processing limits, pagination is required for this helper to be used
export async function getStudentsInSchool(schoolId: string, limit: number, skip: number) {
    await connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`);

    const Student = studentModel;
    let studentsQueryResults;

    try {
        const searchQuery = {
            school: new Types.ObjectId(schoolId)
        };
        studentsQueryResults = await Student.find(searchQuery);
    } catch (e) {
        console.debug(e);
    }

    return studentsQueryResults;
}


export async function getSchoolsList() {
    await connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`);

    
    const School = schoolModel;
    let schoolsSearchResult;

    try {
        schoolsSearchResult = await School.find({});
    } catch (e) {
        console.debug(e);
    }

    return schoolsSearchResult;
}

export async function getClassList(schoolID: string) {
    await connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`);

    const Class = classModel;
    let classesSearchResult;

    try {
        classesSearchResult = await Class.find({
            school: new Types.ObjectId(schoolID)
        });
    } catch (e) {
        console.debug(e);
    }

    return classesSearchResult;
}