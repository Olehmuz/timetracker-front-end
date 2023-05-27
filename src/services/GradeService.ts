

import { IUserProfile } from "models/userProfile/UserProfile.model";
import { $api } from "utils/axios";

export type Grades = 'junior' | 'middle' | 'senior';

export class GradeService {
	static async getGrade(userId: string): Promise<Grades> {
		return await $api.get(`/management/getGrade/${userId}`).then(res => res.data);
	}

	static async setGrade(userId: string, grade: Grades): Promise<IUserProfile> {
		return await $api.post(`/management/setGrade`, { userId, grade });
	}
}
