import { useEffect, useState } from 'react';

export const useDarkSide =() => {

	const [theme, setTheme] = useState(localStorage.theme);
	const colorTheme:string = theme === 'dark' ? 'light' : 'dark';

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove(colorTheme);
		root.classList.add(theme);
		localStorage.setItem('theme', theme);
	}, [theme, colorTheme]);

	return [colorTheme, setTheme];
};