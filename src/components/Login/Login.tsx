import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import React from 'react';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { useAppDispatch } from '../../hooks/index';
import { login } from 'utils/redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

interface GoogleDataFromJWT extends JwtPayload {
	email: string;
	family_name: string;
	given_name: string;
	picture: string;
	sub: string;
}

const Login = () => {
	const { isAuth } = useAuth();
	const nav = useNavigate();
	React.useEffect(() => {
		if(isAuth) {
			nav('/');
		}
	}, [isAuth, nav])
	const dispatch = useAppDispatch();
	return (
	<section className='login__wrapper'>
		<div className='login__image'></div>
		<div className='login__welcome'>
			<h1>Welcome to Keenethics</h1>
			<h2>Sign in to your account</h2>
			<div className='login__button--wrap'>
				<GoogleLogin
					onSuccess={async (credentialResponse: CredentialResponse) => {
						if(credentialResponse.credential){
							const user = jwtDecode<GoogleDataFromJWT>(credentialResponse.credential);
							dispatch(login({
								googleId: user.sub,
								email: user.email,
								picture: user.picture,
								name: user.given_name,
								surname: user.family_name
							}))
							nav('/');
						}
					}}
					
					onError={() => {
						console.log('Login Failed');
					}}
				/>
			</div>
			
		</div>
	</section>
  )
}

export default Login;