import { AxiosResponse } from "axios";
import { IProjectModel } from "models/project/Project.model";
import { $api } from "utils/axios";

export class ProjectService {
	static async getActiveProjectByUserId(userId: string): Promise<AxiosResponse<IProjectModel>> {
		return await $api.get<IProjectModel>(`/management/getActiveProject/${userId}`);
	}
}