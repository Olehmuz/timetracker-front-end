import { useAuth } from 'hooks/useAuth';
import { AuthUser } from 'models/user/User.model';
import React from 'react'
import Calendar from 'react-calendar';
import { UserService } from 'services/UserService';
import { $api } from 'utils/axios';

function Homepage() {
	const { user } = useAuth()
	const [users, setUsers] = React.useState<AuthUser[]>([]);
	const getUsers = async () => {
		try {
			const res = await UserService.getUsers();
			setUsers(res.data);
		} catch (e) {
			if(e instanceof Error){
				console.log(e.message);
			}
		}
	}

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
		  	onChange={(nextValue) => onChange(nextValue)} 
			value={value as Date} 
		   />
		   <button onClick={setTrackedTime}>Set</button>
			<button onClick={getUsers}>getUsers</button>
			<div>
				{
					users.length > 0 && users.map((user) => {
						return <div key={user.email}>{user.email}</div>
					})
				}
			</div>


			<div className=''>hello</div>
   		</div>
	);
}

export default Homepage