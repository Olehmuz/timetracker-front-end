import { AxiosResponse } from "axios";
import { $api } from "utils/axios";

export class PayslipService {
	static async getMontlyRate(userId: string, grade = 'middle'): Promise<AxiosResponse<number>> {
		return await $api.post<number>(`/payslip/rate`, { userId });
	}
}