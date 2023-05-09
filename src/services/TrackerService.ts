import { AxiosResponse } from "axios";
import { $api } from "utils/axios";

export class TrackerService {
	static async getTrackedTimeByDay(userId: string, activeDate: string): Promise<AxiosResponse<number>> {
		return await $api.post<number>(`/tracker/day`, {
			userId: userId,
			date: activeDate,
		})
	}

	static async getTimeByMonth(userId: string, activeDate: string) {
		return await $api.post<number>(`/tracker/month`, {
			userId: userId,
			date: activeDate,
			trackedTime: 8
		})
	}

	static async setTrackedTime(userId: string, activeDate: string) {
		return await $api.post(`/tracker`, {
			userId: userId,
			date: activeDate,
			trackedTime: 8
		})
	}


}