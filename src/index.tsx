import React from 'react';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { TodoApp } from './TodoApp';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<HashRouter>
				<TodoApp />
			</HashRouter>
		</Provider>
	</React.StrictMode>
);
