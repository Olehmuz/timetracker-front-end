import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'utils/redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<GoogleOAuthProvider clientId="177032438057-pfsa61csajs93e6r2andfsav99et45qb.apps.googleusercontent.com">
				<App />
			</GoogleOAuthProvider>
		</BrowserRouter>
	</Provider>
);
