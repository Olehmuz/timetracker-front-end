import React from 'react'

import moment from 'moment';
import { $api } from 'utils/axios';
import { useAuth } from 'hooks/useAuth';

import { Datepicker } from 'components/Calendar/Calendar';
import { EmployeeCard } from 'components/EmployeeCard/EmployeeCard';
import { CurrentDayCard } from 'components/CurrentDayCard/CurrentDayCard';


function Tracker() {
	const { user } = useAuth()
	const [trackedTimeByDay, updateTrackedTimeByDay] = React.useState(0);
	const getTrackedTimeByDay = async () => {
		try {
			if(!(activeDate instanceof Date)){
				throw new Error('Not a date.')
			}
			const formatedDate = moment(activeDate).format().split('+')[0] + 'Z'
			
			const res = await $api.post<number>(`/tracker/day`,{
				userId: user.id,
				date: formatedDate,
			})
			updateTrackedTimeByDay(res.data)
		} catch (e) {
			if(e instanceof Error){
				throw new Error(e.message);
			}
		}
	}

	const [activeDate, changeActiveDate] = React.useState<Date | (Date | null)[] | null>(new Date());
	
	return (
		<section className='flex mt-[100px]'>
			<Datepicker changeActiveDate={changeActiveDate} activeDate={activeDate} />
			<EmployeeCard activeDate={activeDate} getTrackedTimeByDay={getTrackedTimeByDay} />
			<CurrentDayCard activeDate={activeDate} getTrackedTimeByDay={getTrackedTimeByDay} trackedTimeByDay={trackedTimeByDay} />
   		</section>
	);
}

export default Tracker