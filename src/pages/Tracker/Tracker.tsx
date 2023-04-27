import React from 'react'



import { Datepicker } from 'components/Calendar/Calendar';
import { EmployeeCard } from 'components/EmployeeCard/EmployeeCard';

function Tracker() {
	

	const [activeDate, changeActiveDate] = React.useState<Date | (Date | null)[] | null>(new Date());
	if(activeDate instanceof Date) {
		// console.log(activeDate)
	}
	
	return (
		<section className='flex mt-[100px]'>
			<Datepicker changeActiveDate={changeActiveDate} activeDate={activeDate} />
			<EmployeeCard activeDate={activeDate} />
   		</section>
	);
}

export default Tracker