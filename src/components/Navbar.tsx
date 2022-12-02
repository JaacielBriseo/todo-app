import { NavLink } from 'react-router-dom';
import { TodoRoutes } from '../router/TodoRoutes';

export const Navbar = () => {
	return (
		<>
				<TodoRoutes />
			<div className='container flex items-center justify-center mx-auto w-10/12 h-10 bg-veryDarkDesaturatedBlue -mt-10 rounded-md text-darkGrayishBlue'>
				<NavLink to='/' className='text-sm m-2 hover:text-brightBlue'>
					All
				</NavLink>
				<NavLink to='/active' className='text-sm m-2 hover:text-brightBlue'>
					Active
				</NavLink>
				<NavLink to='completed' className='text-sm m-2 hover:text-brightBlue'>
					Completed
				</NavLink>
			</div>
		</>
	);
};
