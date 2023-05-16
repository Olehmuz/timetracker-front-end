import React from 'react';

import { Login, Profile } from './components';
import { useAppDispatch } from 'hooks';
import { checkAuth } from 'utils/redux/slices/authSlice';
import { Route, Routes } from 'react-router-dom';

import './assets/css/index.scss'
import './assets/css/main.scss'

import PrivateRoute from './utils/routes/privateRoutes';

import Tracker from 'pages/Tracker/Tracker';
import Layout from 'pages/Layout/Layout';
import AboutCreator from 'pages/AboutCreator/AboutCreator';

import { Crew } from 'pages/Crew/Crew';
import Project from 'pages/Project/Project';


function App() {
	const dispatch = useAppDispatch()
	React.useEffect(() => {
		if(localStorage.getItem('token')) {
			dispatch(checkAuth())
		}
	}, [dispatch])
	
	return (
		<Routes>
			<Route element={<PrivateRoute />}>
				<Route element={<Layout />}>
					<Route path="/about" element={<AboutCreator />} />
					<Route path="/project" element={<Project />} />
					<Route path="/crew" element={<Crew />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/" element={<Tracker />} />
				</Route>
			</Route>
			<Route path="login" element={<Login />} />
		</Routes>
	);
}

export default App;
