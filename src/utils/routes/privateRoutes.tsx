
import { useAppSelector } from 'hooks';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
	
	const {isAuth} = useAppSelector(state => state.auth);
	
	return (isAuth ? <Outlet /> : <Navigate to="/login" /> );
}

export default PrivateRoute;