import axios from "axios";
import { AuthResponse } from "models/response/AuthResponse";

export const API_URL = 'https://itfin-back.azurewebsites.net'

const $api = axios.create({
	baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
	return config;
})

$api.interceptors.request.use((config) => {
	return config;
}, async (error) => {
	const originalRequest = error.config;
	if (error.response.status === 401) {
		try {
			const res = await axios.post<AuthResponse>(`${API_URL}/auth/refresh`, {}, {
				headers: {
					'Authorization': `Bearer ${localStorage.getItem('refreshToken')}`
				}
			});
			localStorage.setItem('token', res.data.access_token);
			return $api.request(originalRequest);
		} catch (e) {
			console.log('User not authorized');
		}
	}
})

export { $api };