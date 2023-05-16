import { useAppSelector } from 'hooks'
import { useAuth } from 'hooks/useAuth'
import { ITrackerModel } from 'models/tracker/Tracker.model'
import moment from 'moment'
import React from 'react'
import { TrackerService } from 'services/TrackerService'
moment.updateLocale('en', {
	week: {
		dow: 1,
	},
})
const ListTrackerData = () => {
	const { user } = useAuth()
	const { activeDate } = useAppSelector(state => state.tracker);
	const monday = moment(activeDate).startOf('week').toISOString();
	const [workingDays, setWorkingDays] = React.useState<ITrackerModel[]>([]);
	
	React.useEffect(() => {
		TrackerService.getWorkingDays(user.id, monday).then(res => setWorkingDays(res.data))
	}, [monday, user.id]) 

	return (
		<section className='flex flex-col justify-between rounded-lg bg-white border border-secondary w-full overflow-hidden'>
			{workingDays && workingDays.map(el => {
				const date = moment(el.date);
				return <div key={date.toString()}>
							<div className='bg-[#f8f9fa] py-1 px-2 leading-8'>
								<span className='py-1 ml-3 mr-6 font-bold text-primary-gray'>{el.trackedTime}h</span>
								<span className='py-1'>{date.format('dddd')}, {date.format('MMMM')} {date.format('D')}</span>
							</div>
							<div className='flex justify-start py-1 px-2'>
								<div className='py-1 ml-3 mr-6'>
									<span className='text-gray'>{el.trackedTime}h</span>
								</div>
								<div className='flex flex-col'>
									<span className='py-1 mr-6 text-gray'>OneReach-2</span>
									<span>Develope some staff.</span>
								</div>
							</div>
						</div>
			})}
		</section>
	)
}

export default ListTrackerData