import React from 'react'

import { useAuth } from 'hooks/useAuth'

import { useAppDispatch, useAppSelector } from 'hooks'
import { getTrackedTimeByDay, getTrackedTimeByMonth, getTrackedTimeByWeek } from 'utils/redux/slices/trackerSlice'
import { TrackerService } from 'services/TrackerService'
import { AxiosError } from 'axios'
import moment from 'moment'

export interface IRequestError{message: string; code: undefined | number}

export const EmployeeCard:React.FC = () => {
	const { user } = useAuth()
	const dispatch = useAppDispatch()
	const { activeDate, timeByMonth, timeByWeek } = useAppSelector(state => state.tracker)
	
	const [errorMessage, setError] = React.useState<string>('');
	const setTrackedTime = async () => {
		try {
			await TrackerService.setTrackedTime(user.id, activeDate);
			dispatch(getTrackedTimeByMonth({userId: user.id, activeDate}));
			dispatch(getTrackedTimeByWeek({userId: user.id, activeDate}));
			dispatch(getTrackedTimeByDay({userId: user.id, activeDate}));
		} catch (e) {
			console.log(e)
			if(e instanceof AxiosError){
				setError(e.response?.data.message);
				setTimeout(() => {
					setError('');
				}, 2000)
			}
		}
	}
	const [limit, setLimit] = React.useState<number>(0);


	React.useEffect(() => {
		dispatch(getTrackedTimeByMonth({userId: user.id, activeDate}));
		dispatch(getTrackedTimeByWeek({userId: user.id, activeDate}));
		TrackerService.getLimitOfWorkingHoursByWeek(user.id, activeDate).then(res => setLimit(res.data))
	}, [activeDate, dispatch, user.id])
	return (
		<>
			{errorMessage && <div className="absolute px-4 py-3 leading-normal text-red-700 bg-red-100 rounded-lg top-[80px]" role="alert">
				<span className="absolute inset-y-0 left-0 flex items-center ml-4">
					<svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
				</span>
				<p className="ml-6">{errorMessage}. Check it out!</p>
			</div>}
			<div className='min-w-[300px] mt-2 flex-col flex justify-center rounded-lg p-4 bg-white border border-secondary'>
				{(moment(activeDate).isoWeekday() === 6 || moment(activeDate).isoWeekday() === 7) ? <button disabled className='w-full mb-3 bg-[#dfe1e6] border px-3 py-1.5 border-[#dfe1e6] rounded-lg'>Weekdaayy!</button> : <button className='w-full mb-3 bg-[#dfe1e6] border px-3 py-1.5 border-[#dfe1e6] hover:bg-[#e4e6ea] rounded-lg' {...moment(activeDate).isoWeekday() === 6 || moment(activeDate).isoWeekday() === 7? {disabled: true} : {} } onClick={setTrackedTime}>Track time</button>}

				<div className='flex justify-between'>
					<div>🏝 Vacation days</div><div>15.8</div>
				</div>

				<div className='flex justify-between'>
					<div>💸 Salary</div><div>3600$</div>
				</div>

				<hr />

				<h6 className='text-gray font-medium'>WEEKLY LIMIT</h6>
				<div className='flex justify-between mb-2'>
					<div>OneReach-2</div><div>{timeByWeek}h / {limit}h</div>
				</div>

				<h6 className='text-gray font-medium mb-2'>MONTHLY LIMIT</h6>
				<div className='flex justify-between'>
					<div>Tracked time:</div><div>{timeByMonth}h / 160h</div>
				</div>
			</div>
		</>
		
		
	)
}
