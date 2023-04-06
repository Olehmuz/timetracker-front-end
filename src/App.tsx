import React from 'react';

import { Login } from './components';
import { useAppDispatch } from 'hooks';
import { checkAuth } from 'utils/redux/slices/authSlice';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import './assets/css/index.scss'
import './assets/css/main.scss'

import PrivateRoute from './utils/routes/privateRoutes';
import Header from 'components/Header/Header';
import Layout from 'pages/Layout';
import Homepage from 'components/Homepage/Homepage';


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
				<Route path="/" element={<Header />} />
			</Route>
			<Route path="login" element={<Login />} />
		</Routes>
	);
}

export default App;
