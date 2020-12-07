import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'popper.js';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client';
import store from './redux/store';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ApolloProvider client={client}>
				<App />
			</ApolloProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
