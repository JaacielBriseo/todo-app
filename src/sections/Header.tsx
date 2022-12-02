import { ThemeToggler } from "../components"

export const Header = () => {
  return (
    <div className='h-48 bg-mobLight dark:bg-mobDark bg-no-repeat bg-cover'>
			<div className='container mx-auto p-10 flex justify-between items-center'>
				<h1 className='text-3xl tracking-[0.3em] text-lightGrayishBlue font-bold'>TODO</h1>
				<ThemeToggler />
			</div>
		</div>
  )
}
