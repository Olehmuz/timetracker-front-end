import React from 'react';

import { Login } from './components';
import { observer } from 'mobx-react-lite';
import { useAppDispatch } from 'hooks';
import { checkAuth } from 'utils/redux/slices/authSlice';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import './assets/css/index.scss'
import './assets/css/main.scss'

import Homepage from 'components/Homepage/Homepage';
import PrivateRoute from './utils/routes/privateRoutes';


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
				<Route path="/" element={<Homepage />} />
			</Route>
			<Route path="login" element={<Login />} />
		</Routes>
	);
}

export default observer(App);
