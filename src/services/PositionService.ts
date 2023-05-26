import { AxiosResponse } from "axios";
import { IPositionModel } from "models/project/Position.model";
import { $api } from "utils/axios";

export class PositionService {
	static async getActivePositionByUserId(userId: string): Promise<AxiosResponse<IPositionModel>> {
		return await $api.get<IPositionModel>(`/management/getActivePosition/${userId}`);
	}

	static async getAllPositions(): Promise<AxiosResponse<IPositionModel[]>> {
		return await $api.get<IPositionModel[]>(`/management/positions`);
	}
}