import { useTodosPanel } from '../hooks/useTodosPanel';
export const PanelFooter = () => {
    const {todosLength, removeCompleted} = useTodosPanel()
	
	return (
		<div className='flex justify-between items-center h-10 text-slate-600'>
			<span className='text-xs ml-5'>{todosLength} Items left</span>
			<button onClick={removeCompleted} className='text-xs mr-3'>Clear completed</button>
		</div>
	);
};
