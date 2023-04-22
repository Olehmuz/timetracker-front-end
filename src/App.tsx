import React from 'react';

import { Login, Profile } from './components';
import { useAppDispatch } from 'hooks';
import { checkAuth } from 'utils/redux/slices/authSlice';
import { Route, Routes } from 'react-router-dom';

import './assets/css/index.scss'
import './assets/css/main.scss'

import PrivateRoute from './utils/routes/privateRoutes';
import Layout from 'pages/Layout';
import Homepage from 'components/Homepage/Homepage';

import { useAuth } from 'hooks/useAuth';
import AboutCreator from 'pages/AboutCreator';
import { Crew } from 'pages/Crew/Crew';


function App() {
	const dispatch = useAppDispatch()
	React.useEffect(() => {
		if(localStorage.getItem('token')) {
			dispatch(checkAuth())
		}
	}, [dispatch])
	const isAuth = useAuth();
	console.log(isAuth);
	return (
		<Routes>
			<Route element={<PrivateRoute />}>
				<Route element={<Layout />}>
					<Route path="/about" element={<AboutCreator />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/crew" element={<Crew />} />
					<Route path="/" element={<Homepage />} />
				</Route>
			</Route>
			<Route path="login" element={<Login />} />
		</Routes>
	);
}

export default App;
