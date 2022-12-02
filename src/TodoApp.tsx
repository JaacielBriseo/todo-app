import { Navbar, NewTodoPanel, Header } from './components';

export const TodoApp = () => {
	return (
		<div className='h-screen bg-veryLightGrayishBlue dark:bg-veryDarkBlue font-josefin'>
			<Header />
			<NewTodoPanel />
			<Navbar />
		</div>
	);
};
