import { useAppSelector } from "hooks";

export function useAuth() {
	const authData = useAppSelector(state => state.auth)
	return authData;
}