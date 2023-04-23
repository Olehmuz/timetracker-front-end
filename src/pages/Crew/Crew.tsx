import { CrewUser } from 'components/CrewUser/CrewUser'
import { AuthUser } from 'models/user/User.model';
import React from 'react'
import { UserService } from 'services/UserService';

export const Crew: React.FC = () => {
	const [users, setUsers] = React.useState<AuthUser[]>([]);
	React.useEffect(() => {
		async function fetchUsers() {
			try {
				const { data } = await UserService.getUsers();
				setUsers(data);
			} catch (error) {
				throw new Error('We are unable to access users data now. Try later.')
			}
		}
		fetchUsers();
	}, []);

  return (
	<div className='container mx-auto'>
		<h3 className='text-gray mb-3'>Crew</h3>
		<div className='rounded-lg bg-white border border-secondary max-w-4xl overflow-hidden'>
			{users.length ? users.map(el => {
				return <CrewUser key={el.id} user={el} />
			}) : 
			<div className='flex w-full items-center py-2 px-3 hover:bg-[#fafafa] cursor-pointer'>Loading</div>}
		</div>	
	</div>
  )
}
