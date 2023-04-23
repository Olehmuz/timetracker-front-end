import { AuthUser } from "models/user/User.model";
import { $api } from "utils/axios";

export class UserService {
	static async getUsers() {
		return await $api.get<AuthUser[]>('/user/all');
	}
}