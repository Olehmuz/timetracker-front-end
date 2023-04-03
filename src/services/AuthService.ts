import { AxiosResponse } from "axios";
import { AuthResponse } from "models/response/AuthResponse";
import { User } from "models/user/User.model";
import { $api } from "utils/axios";

export class AuthService {
	static async login(user: User): Promise<AxiosResponse<AuthResponse>> {
		return await $api.post<AuthResponse>('/auth/local/google', { ...user });
	}

	static async registration(user: User): Promise<AxiosResponse<AuthResponse>> {
		return await $api.post<AuthResponse>('/auth/local/signup', { ...user });
	}

	static async logout(): Promise<void> {
		await $api.post('/auth/logout');
	}

}