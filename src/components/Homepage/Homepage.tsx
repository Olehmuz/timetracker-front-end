import React from 'react'

import Calendar from 'react-calendar';

import { useAuth } from 'hooks/useAuth';
import { $api } from 'utils/axios';

function Homepage() {
	const { user } = useAuth()

	const [value, onChange] = React.useState<Date | null | (Date | null)[]>(new Date());
	if(value instanceof Date) {
		console.log(value)
	}
	const setTrackedTime = async () => {
		try {
			const res = await $api.post(`/tracker`,{
				userId: user.id,
				date: value,
				trackedTime: 8
			})
			console.log(res.data);
		} catch (e) {
			if(e instanceof Error){
				console.log(e.message);
			}
		}
	}
	return (
		<div className='container mx-auto'>
			<div className='calendar'>
			</div>	
		  <Calendar 
		  	locale='ua'
		  	onChange={(nextValue) => onChange(nextValue)} 
			value={value as Date} 
		   />
		   <button onClick={setTrackedTime}>Set</button>

   		</div>
	);
}

export default Homepage