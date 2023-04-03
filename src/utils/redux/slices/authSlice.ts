import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { AuthResponse } from "models/response/AuthResponse";
import { IAccessTokenPayload } from "models/token/Token.model";
import { AuthUser, User } from "models/user/User.model";
import { AuthService } from "services/AuthService";

interface AuthState {
	user: AuthUser;
	isAuth: boolean;
	isLoading: boolean;
}

const initialState: AuthState = {
	user: {} as AuthUser,
	isAuth: false,
	isLoading: false,
};

export const login = createAsyncThunk(
	"auth/login",
	async (user: User) => {
		const res = await AuthService.login(user);
		const tokenData = jwtDecode<IAccessTokenPayload>(res.data.access_token);
		localStorage.setItem("refreshToken", res.data.refresh_token);
		localStorage.setItem("token", res.data.access_token);
		return tokenData;
	}
);

export const checkAuth = createAsyncThunk("auth/checkAuth", async () => {
	const res = await axios.post<AuthResponse>(
		`https://itfin-back.azurewebsites.net/auth/refresh`,
		{},
		{
			headers: {
				Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
			},
		}
	);
	const tokenData = jwtDecode<IAccessTokenPayload>(res.data.access_token);
	localStorage.setItem("refreshToken", res.data.refresh_token);
	localStorage.setItem("token", res.data.access_token);
	return tokenData;
});

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<AuthUser>) => {
			state.user = action.payload;
		},
		setAuth: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		logout: (state) => {
			localStorage.removeItem("refreshToken");
			localStorage.removeItem("token");
			state.user = {} as AuthUser;
			state.isAuth = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.user = action.payload;
				state.isAuth = true;
				state.isLoading = false;
			})
			.addCase(login.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(checkAuth.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(checkAuth.fulfilled, (state, action) => {
				state.user = action.payload;
				state.isAuth = true;
				state.isLoading = false;
			})
			.addCase(checkAuth.rejected, (state) => {
				state.isLoading = false;
			});
	}
});

export const { setUser, setAuth, setLoading, logout } = authSlice.actions;

export default authSlice.reducer;
