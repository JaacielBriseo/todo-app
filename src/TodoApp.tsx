import { Navbar, NewTodoPanel } from './components';
import { Header } from './components/Header';


export const TodoApp = () => {
	return (
		<div className='h-screen bg-veryLightGrayishBlue dark:bg-veryDarkBlue font-josefin'>
			<Header />
			<NewTodoPanel/>
			{/* <TodosPanel /> */}
			{/* <CompletedTodos/> */}
			{/* <ActiveTodos/> */}
			<Navbar />
		</div>
	);
};
