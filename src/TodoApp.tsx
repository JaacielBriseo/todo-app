import { Header } from './sections/Header';
import { Panel } from './sections/Panel';

export const TodoApp = () => {
	return (
		<div className='h-screen bg-veryLightGrayishBlue dark:bg-veryDarkBlue'>
			<Header />
			<Panel />
		</div>
	);
};
