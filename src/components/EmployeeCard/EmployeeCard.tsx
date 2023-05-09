import React from 'react'

import { useAuth } from 'hooks/useAuth'

import { useAppDispatch, useAppSelector } from 'hooks'
import { getTrackedTimeByDay, getTrackedTimeByMonth } from 'utils/redux/slices/trackerSlice'
import { TrackerService } from 'services/TrackerService'



export const EmployeeCard:React.FC = () => {
	const { user } = useAuth()
	const dispatch = useAppDispatch()
	const { activeDate, timeByMonth } = useAppSelector(state => state.tracker)
	
	const setTrackedTime = async () => {
		try {
			await TrackerService.setTrackedTime(user.id, activeDate);

			dispatch(getTrackedTimeByMonth({userId: user.id, activeDate}));
			dispatch(getTrackedTimeByDay({userId: user.id, activeDate}));
		} catch (e) {
			if(e instanceof Error){
				throw new Error(e.message);
			}
		}
	}

	React.useEffect(() => {
		dispatch(getTrackedTimeByMonth({userId: user.id, activeDate}));
	}, [activeDate, dispatch, user.id])
	return (
		<div className='min-w-[300px] ml-3 flex-col flex justify-center rounded-lg p-4 bg-white border border-secondary'>
			<button className='w-full mb-3 bg-[#dfe1e6] border px-3 py-1.5 border-[#dfe1e6] hover:bg-[#e4e6ea] rounded-lg' onClick={setTrackedTime}>Track time</button>

			<div className='flex justify-between'>
				<div>🏝 Vacation days</div><div>15.8</div>
			</div>

			<div className='flex justify-between'>
				<div>💸 Salary</div><div>3600$</div>
			</div>

			<hr />

			<h6 className='text-gray font-medium'>WEEKLY LIMIT</h6>
			<div className='flex justify-between mb-2'>
				<div>OneReach-2</div><div>40h / 40h</div>
			</div>

			<h6 className='text-gray font-medium mb-2'>MONTHLY LIMIT</h6>
			<div className='flex justify-between'>
				<div>Tracked time:</div><div>{timeByMonth}h / 160h</div>
			</div>
		</div>
		
	)
}
