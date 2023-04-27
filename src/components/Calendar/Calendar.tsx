import React from 'react';
import Calendar from 'react-calendar';

export interface IDatepickerProps {
	activeDate: Date | (Date | null)[] | null,
	changeActiveDate: React.Dispatch<React.SetStateAction<Date | (Date | null)[] | null>>
}

export const Datepicker:React.FC<IDatepickerProps> = ({activeDate, changeActiveDate}) => {
  return (
	<div className='calendar'>
			<Calendar 
				locale='ua'
				onChange={(nextValue) => changeActiveDate(nextValue)} 
				value={activeDate as Date} 
			/>
	</div>	
  )
}
