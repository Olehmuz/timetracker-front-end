import { Grades } from "services/GradeService";

export interface IUserProfile {
	"_id": string,
	"userId": string,
	"projectId": string,
	"grade": Grades,
	"positionId": string
}