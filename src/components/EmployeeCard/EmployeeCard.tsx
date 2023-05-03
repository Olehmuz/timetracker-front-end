import React from 'react'

import { useAuth } from 'hooks/useAuth'
import { $api } from 'utils/axios'
import moment from 'moment'

export interface EmployeeCardProps {
	activeDate: Date | (Date | null)[] | null;
	getTrackedTimeByDay: () => Promise<void>;
}


export const EmployeeCard:React.FC<EmployeeCardProps> = ({activeDate, getTrackedTimeByDay}) => {
	const { user } = useAuth()
	const [trackedTimeByMonth, updateTrackedTimeByMonth] = React.useState(0);
	const getTrackedTimeByMonth = async () => {
		try {
			if(!(activeDate instanceof Date)){
				throw new Error('Not a date.')
			}
			const formatedDate = moment(activeDate).format().split('+')[0] + 'Z'
			const res = await $api.post<number>(`/tracker/month`,{
				userId: user.id,
				date: formatedDate,
				trackedTime: 8
			})
			updateTrackedTimeByMonth(res.data)
			getTrackedTimeByDay()
		} catch (e) {
			if(e instanceof Error){
				throw new Error(e.message);
			}
		}
	}
	const setTrackedTime = async () => {
		try {
			if(!(activeDate instanceof Date)){
				throw new Error('Not a date.')
			}
			const formatedDate = moment(activeDate).format().split('+')[0] + 'Z'
			await $api.post(`/tracker`,{
				userId: user.id,
				date: formatedDate,
				trackedTime: 8
			})
			getTrackedTimeByMonth()
		} catch (e) {
			if(e instanceof Error){
				throw new Error(e.message);
			}
		}
	}

	React.useEffect(() => {
		getTrackedTimeByMonth()
	})
	console.log(activeDate)
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
				<div>Tracked time:</div><div>{trackedTimeByMonth}h / 160h</div>
			</div>
		</div>
		
	)
}
