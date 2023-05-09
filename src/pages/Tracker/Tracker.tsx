import { Datepicker } from 'components/Calendar/Calendar';
import { EmployeeCard } from 'components/EmployeeCard/EmployeeCard';
import { CurrentDayCard } from 'components/CurrentDayCard/CurrentDayCard';



function Tracker() {
	return (
		<section className='flex mt-[100px]'>
			<Datepicker />
			<EmployeeCard />
			<CurrentDayCard />
   		</section>
	);
}

export default Tracker