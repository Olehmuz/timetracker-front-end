import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <React.StrictMode>
	<GoogleOAuthProvider clientId="177032438057-pfsa61csajs93e6r2andfsav99et45qb.apps.googleusercontent.com">
		<App />
	</GoogleOAuthProvider>
  </React.StrictMode>
);
