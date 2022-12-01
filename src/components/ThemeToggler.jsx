import { moon, sun } from '../assets';
import { useDarkSide } from '../hooks/useDarkSide';

export const ThemeToggler = () => {
	const [colorTheme, setTheme] = useDarkSide();
	const toggleDarkMode = () => {
		setTheme(colorTheme);
	};
	return (
		<button onClick={toggleDarkMode}>
			<img src={colorTheme === 'light' ? sun : moon} alt='Theme Toggler' className='w-5 h-5' />
		</button>
	);
};
