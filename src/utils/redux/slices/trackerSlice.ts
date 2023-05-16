import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { TrackerService } from "services/TrackerService";



interface TrackerState {
	activeDate: string;
	timeByDay: number;
	timeByWeek: number;
	timeByMonth: number;
	isLoading: boolean;
}

const initialState: TrackerState = {
	activeDate: moment(new Date()).format().split('+')[0] + 'Z',
	timeByDay: 0,
	timeByWeek: 0,
	timeByMonth: 0,
	isLoading: false
};
export interface TrackerRequest {
	userId: string;
	activeDate: string;
}
export const getTrackedTimeByDay = createAsyncThunk(
	"tracker/day",
	async ({ userId, activeDate }: TrackerRequest) => {
		try {
			const res = await TrackerService.getTrackedTimeByDay(userId, activeDate);
			return res.data;
		} catch (e) {
			if (e instanceof Error) {
				throw new Error(e.message);
			}
		}
	}
);

export const getTrackedTimeByWeek = createAsyncThunk(
	"tracker/week",
	async ({ userId, activeDate }: TrackerRequest) => {
		try {
			const res = await TrackerService.getTrackedTimeByWeek(userId, activeDate);
			return res.data;
		} catch (e) {
			if (e instanceof Error) {
				throw new Error(e.message);
			}
		}
	}
);

export const getTrackedTimeByMonth = createAsyncThunk(
	"tracker/month",
	async ({ userId, activeDate }: TrackerRequest) => {
		try {
			const res = await TrackerService.getTimeByMonth(userId, activeDate);
			return res.data;
		} catch (e) {
			if (e instanceof Error) {
				throw new Error(e.message);
			}
		}
	}
);


export const trackerSlice = createSlice({
	name: "tracker",
	initialState,
	reducers: {
		changeActiveDate(state, action: PayloadAction<string>) {
			state.activeDate = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getTrackedTimeByDay.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getTrackedTimeByDay.fulfilled, (state, action) => {
				if (typeof action.payload === 'number') {
					state.timeByDay = action.payload;
				}
				state.isLoading = false;
			})
			.addCase(getTrackedTimeByDay.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(getTrackedTimeByMonth.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getTrackedTimeByMonth.fulfilled, (state, action) => {
				if (typeof action.payload === 'number') {
					state.timeByMonth = action.payload;
				}
				state.isLoading = false;
			})
			.addCase(getTrackedTimeByMonth.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(getTrackedTimeByWeek.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getTrackedTimeByWeek.fulfilled, (state, action) => {
				if (typeof action.payload === 'number') {
					state.timeByWeek = action.payload;
				}
				state.isLoading = false;
			})
			.addCase(getTrackedTimeByWeek.rejected, (state) => {
				state.isLoading = false;
			})
	}
});

export const { changeActiveDate } = trackerSlice.actions;

export default trackerSlice.reducer;
