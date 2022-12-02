import { Route, Routes } from 'react-router-dom';
import { ActiveTodos, CompletedTodos, TodosPanel } from '../views';

export const TodoRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<TodosPanel />} />
			<Route path='/active' element={<ActiveTodos />} />
			<Route path='/completed' element={<CompletedTodos />} />
		</Routes>
	);
};
