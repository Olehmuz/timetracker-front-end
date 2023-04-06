import { AuthUser } from 'models/user/User.model';
import Layout from 'pages/Layout';
import React from 'react'
import { UserService } from 'services/UserService';

function Homepage() {
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
	return (
		<>	
			<button onClick={getUsers}>getUsers</button>
			<div>
				{
					users.length > 0 && users.map((user) => {
						return <div key={user.email}>{user.email}</div>
					})
				}
			</div>


			<div className=''>hello</div>
   		</>
	);
}

export default Homepage