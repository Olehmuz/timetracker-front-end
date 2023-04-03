import { AxiosResponse } from "axios";
import { $api } from "utils/axios";

export class UserService {
	static async getUsers(): Promise<AxiosResponse> {
		return await $api.get('/user/all');
	}
}