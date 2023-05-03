export {}
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { useAuth } from "hooks/useAuth";
// import moment from "moment";
// import { $api } from "utils/axios";



// interface AuthState {
// 	activeDate: Date | (Date | null)[] | null;
// 	timeByDay: number;
// 	isLoading: boolean;
// }

// const initialState: AuthState = {
// 	activeDate: null,
// 	timeByDay: 0,
// 	isLoading: false
// };

// export const getTrackedTimeByDay = createAsyncThunk(
// 	"tracker/day",
// 	async () => {
// 		try {
// 			if (!(activeDate instanceof Date)) {
// 				throw new Error('Not a date.')
// 			}
// 			const formatedDate = moment(activeDate).format().split('+')[0] + 'Z'

// 			const res = await $api.post<number>(`/tracker/day`, {
// 				userId: user.id,
// 				date: formatedDate,
// 			})
// 			updateTrackedTimeByDay(res.data)
// 			console.log(res.data);
// 		} catch (e) {
// 			if (e instanceof Error) {
// 				throw new Error(e.message);
// 			}
// 		}
// 	}
// );




// export const authSlice = createSlice({
// 	name: "auth",
// 	initialState,
// 	reducers: {

// 	},
// 	extraReducers: (builder) => {
// 		builder
// 			.addCase(login.pending, (state) => {
// 				state.isLoading = true;
// 			})
// 			.addCase(login.fulfilled, (state, action) => {
// 				state.user = action.payload;
// 				state.isAuth = true;
// 				state.isLoading = false;
// 			})
// 			.addCase(login.rejected, (state) => {
// 				state.isLoading = false;
// 			})
// 	}
// });

// export const { logout } = authSlice.actions;

// export default authSlice.reducer;
