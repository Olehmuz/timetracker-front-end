import { Datepicker } from 'components/Calendar/Calendar';
import { EmployeeCard } from 'components/EmployeeCard/EmployeeCard';
import { CurrentDayCard } from 'components/CurrentDayCard/CurrentDayCard';
import ListTrackerData from 'components/ListTrackerData/ListTrackerData';



function Tracker() {
	return (
		<section className='flex justify-center mt-[25px]'>
			<div className='flex justify-center basis-3/4 mr-3'>
				<ListTrackerData />
			</div>
			<div className='flex flex-col w-[310px]'>
				<Datepicker />
				<EmployeeCard />
				<CurrentDayCard />
			</div>
   		</section>
	);
}

export default Tracker