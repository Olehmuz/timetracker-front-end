import { AxiosResponse } from "axios";
import { $api } from "utils/axios";

export class PayslipService {
	static async getMontlyRate(userId: string, grade = 'middle'): Promise<AxiosResponse<number>> {
		return await $api.post<number>(`/payslip/rate`, { userId });
	}

	static async getVacationDays(userId: string): Promise<AxiosResponse<number>> {
		return await $api.get<number>(`/tracker/vacation/${userId}`);
	}
}