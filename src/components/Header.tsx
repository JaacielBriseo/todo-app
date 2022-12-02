import { ThemeToggler } from "."

export const Header = ():JSX.Element => {
  return (
    <div className='h-48 bg-mobLight md:bg-deskLight md:dark:bg-deskDark dark:bg-mobDark bg-no-repeat bg-cover'>
			<div className='container mx-auto max-w-lg p-10 flex justify-between items-center'>
				<h1 className='text-3xl tracking-[0.3em] text-lightGrayishBlue font-bold'>TODO</h1>
				<ThemeToggler />
			</div>
		</div>
  )
}
