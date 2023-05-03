import React from 'react'

import { useAuth } from 'hooks/useAuth'

export interface CurrentDayCardProps {
	activeDate: Date | (Date | null)[] | null;
	getTrackedTimeByDay: () => Promise<void>;
	trackedTimeByDay: number
}


export const CurrentDayCard:React.FC<CurrentDayCardProps> = ({activeDate, getTrackedTimeByDay, trackedTimeByDay}) => {
	const { user } = useAuth()

	React.useEffect(() => {
		getTrackedTimeByDay()
	}, [activeDate, user.id, getTrackedTimeByDay])
	
	return (
		<div className='min-w-[300px] ml-3 flex-col flex justify-center rounded-lg p-4 bg-white border border-secondary'>

			<div className='flex justify-between'>
				<div>📅 Selected date:</div><div>{activeDate instanceof Date && activeDate.toLocaleDateString()}</div>
			</div>

			<div className='flex justify-between'>
				<div>🗄️ Project name:</div><div>OneReach-2</div>
			</div>

			<hr />

			<h6 className='text-gray font-medium'>DAY LIMIT</h6>
			
			<div className='flex justify-between mb-2'>
				<div>OneReach-2</div><div>{trackedTimeByDay}h / 8h</div>
			</div>

		</div>
		
	)
}
