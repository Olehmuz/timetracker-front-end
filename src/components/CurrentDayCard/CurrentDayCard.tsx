import React from 'react'

import { getTrackedTimeByDay } from '../../utils/redux/slices/trackerSlice';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useAuth } from 'hooks/useAuth';
import classNames from 'classnames';



export const CurrentDayCard:React.FC = () => {
	const dispatch = useAppDispatch()
	
	const { activeDate, timeByDay } = useAppSelector(state => state.tracker)
	const { user } = useAuth()

	React.useEffect(() => {
		dispatch(getTrackedTimeByDay({userId: user.id, activeDate}))
	}, [activeDate, dispatch, user.id])
	
	return (
		<div className='min-w-[300px] ml-3 flex-col flex justify-center rounded-lg p-4 bg-white border border-secondary'>
			<div className='flex justify-between'>
				<div>{timeByDay > 0 ? 'Tracked!' : 'Untracked!'}</div><div className={classNames('rounded-full w-[20px] h-[20px]', timeByDay > 0 ? 'bg-green-600' : 'bg-red-600')}></div>
			</div>
			<div className='flex justify-between'>
				<div>📅 Selected date:</div><div>{new Date(activeDate).toLocaleDateString()}</div>
			</div>

			<div className='flex justify-between'>
				<div>🗄️ Project name:</div><div>OneReach-2</div>
			</div>

			<hr />

			<h6 className='text-gray font-medium'>DAY LIMIT</h6>
			
			<div className='flex justify-between mb-2'>
				<div>OneReach-2</div><div>{timeByDay}h / 8h</div>
			</div>

		</div>
		
	)
}
