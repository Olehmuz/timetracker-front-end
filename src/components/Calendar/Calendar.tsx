import { useAppDispatch, useAppSelector } from 'hooks';
import moment from 'moment';
import React from 'react';
import Calendar from 'react-calendar';
import { changeActiveDate } from 'utils/redux/slices/trackerSlice';





export const Datepicker:React.FC= () => {
	const dispatch = useAppDispatch()
	
	const activeDate = useAppSelector(state => state.tracker.activeDate)
	
	const changeTrackerActiveDate = (data: Date) => {
		const formateDate = moment(data).format().split('+')[0] + 'Z'
		dispatch(changeActiveDate(formateDate));
	}

	return (
	<div className='calendar'>
			<Calendar 
				locale='ua'
				onChange={(nextValue) =>{ 
					if(nextValue instanceof Date){
						changeTrackerActiveDate(nextValue)
					}
				}} 
				value={activeDate} 
			/>
	</div>	
  )
}
