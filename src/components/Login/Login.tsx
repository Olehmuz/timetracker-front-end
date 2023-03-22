import { CredentialResponse, GoogleLogin, TokenResponse, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import jwtDecode from 'jwt-decode';



const Login = () => {
	// async function handleGoogleLoginSuccess(tokenResponse: TokenResponse) {
	// 	const accessToken = tokenResponse.access_token;
	// 	console.log(accessToken)
	// 	const userInfo = await axios
    //     .get('https://www.googleapis.com/oauth2/v3/userinfo', {
    //       headers: { Authorization: `Bearer ${accessToken}` },
    //     })
    //     .then(res => res.data);

    //   console.log(userInfo);
	// }
	// const login = useGoogleLogin({onSuccess: handleGoogleLoginSuccess});
	return (
	<section className='login__wrapper'>
		<div className='login__image'></div>
		<div className='login__welcome'>
			<h1>Welcome to Keenethics</h1>
			<h2>Sign in to your account</h2>
			<div className='login__button--wrap'>
				<GoogleLogin
					onSuccess={(credentialResponse: CredentialResponse) => {
						if(credentialResponse.credential)
						console.log(jwtDecode(credentialResponse.credential));
					}}
					// onSuccess={() => login()}
						// credentialResponse => {
						// if(credentialResponse.credential){
						// 	fetch('http://localhost:3000/auth/google')
							// fetch('http://localhost:3000/auth/google/callback', {
							// 	method: 'POST',
							// 	body: JSON.stringify(credentialResponse),
							// 	headers: {
							// 		'Content-Type': 'application/json'
							// 	}
							// })

							// console.log(credentialResponse)
							// console.log(jwtDecode(credentialResponse.credential));
						
						
					
					onError={() => {
						console.log('Login Failed');
					}}
					useOneTap
				/>
			</div>
			
		</div>
	</section>
  )
}

export default Login;