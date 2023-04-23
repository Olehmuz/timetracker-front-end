import { AuthUser } from 'models/user/User.model';
import React from 'react'

export interface ICrewUser {
	user: AuthUser
}

export const CrewUser: React.FC<ICrewUser> = ({user}) => {
  return (
	<div className='flex w-full items-center py-2 px-3 hover:bg-[#fafafa] cursor-pointer'>
		<img className='rounded-full w-10 h-10 mr-2 border border-[rgba(60,60,60,0.26)]' src={user.picture} alt={`${user.name} ${user.surname}`} />
		<div className='flex-auto'>
			<h2 className='font-bold text-base'>{`${user.name} ${user.surname}`}</h2>
			<h3 className='color-gray text-sm'>Developer</h3>
		</div>
		<i className='p-1 hover:bg-[rgba(9,30,66,0.08)] ease-out duration-300 rounded-lg'><svg height="24" viewBox="0 0 21 21" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 5)"><path d="m8.5 11c3.1296136 0 5.9629469-1.83333333 8.5-5.5-2.5370531-3.66666667-5.3703864-5.5-8.5-5.5-3.12961358 0-5.96294692 1.83333333-8.5 5.5 2.53705308 3.66666667 5.37038642 5.5 8.5 5.5z"></path><path d="m8.5 2c.18463928 0 .36593924.01429736.54285316.04184538-.02850842.148891-.04285316.30184762-.04285316.45815462 0 1.38071187 1.1192881 2.5 2.5 2.5.156307 0 .3092636-.01434474.4576252-.04178957.0280774.17585033.0423748.35715029.0423748.54178957 0 1.93299662-1.5670034 3.5-3.5 3.5-1.93299662 0-3.5-1.56700338-3.5-3.5s1.56700338-3.5 3.5-3.5z"></path></g></svg></i>
	</div>
  )
}
