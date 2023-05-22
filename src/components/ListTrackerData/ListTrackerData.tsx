import { useAppSelector } from 'hooks'
import { useAuth } from 'hooks/useAuth'
import { ITrackerModel } from 'models/tracker/Tracker.model'
import moment from 'moment'
import 'moment-timezone';
import React from 'react'
import { ProjectService } from 'services/ProjectService';
import { TrackerService } from 'services/TrackerService'

moment.updateLocale('en', {
	week: {
		dow: 1,
	},
})
const ListTrackerData = () => {
	const { user } = useAuth()
	const { activeDate } = useAppSelector(state => state.tracker);

	const [activeProject, setActiveProject] = React.useState<string>();

	React.useEffect(() => {
		ProjectService.getActiveProjectByUserId(user.id).then(res => setActiveProject(res.data.projectName));
	}, [user.id])

	const monday = moment.utc(activeDate).startOf('week').toISOString();

	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [workingDays, setWorkingDays] = React.useState<ITrackerModel[]>([
		{date: new Date('2023-05-22T00:00:00.000Z'), userId: '', trackedTime: 0},
		{date: new Date('2023-05-23T00:00:00.000Z'), userId: '', trackedTime: 0},
		{date: new Date('2023-05-24T00:00:00.000Z'), userId: '', trackedTime: 0},
		{date: new Date('2023-05-25T00:00:00.000Z'), userId: '', trackedTime: 0},
		{date: new Date('2023-05-26T00:00:00.000Z'), userId: '', trackedTime: 0},
		{date: new Date('2023-05-27T00:00:00.000Z'), userId: '', trackedTime: 0},
		{date: new Date('2023-05-28T00:00:00.000Z'), userId: '', trackedTime: 0}
	]);
	console.log(workingDays)
	React.useEffect(() => {
		setIsLoading(true)
		TrackerService.getWorkingDays(user.id, monday).then(res => setWorkingDays(res.data)).finally(() => setIsLoading(false))
	}, [monday, user.id]) 

	return (
		<section className='flex flex-col relative min-h-full justify-between rounded-lg bg-white border border-secondary w-full overflow-hidden'>
			{isLoading && (
				<div className='flex absolute justify-center items-center w-full h-full top-0 left-0'>
					<div  className='w-full h-full min-h-full absolute top-0 left-0 z-0 backdrop-blur-sm'></div>
					<div role="status">
						<svg aria-hidden="true" className="inline w-10 h-10 mr-2 text-[#e5e7eb] animate-spin dark:text-[#4b5563] fill-[#4b5563] dark:fill-[#4b5563]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
							<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
						</svg>
						<span className="sr-only">Loading...</span>
					</div>


				</div>
			)
			}
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
									<span className='py-1 mr-6 text-gray'>{activeProject ?? "Bench"}</span>
									<span>Develope some staff.</span>
								</div>
							</div>
						</div>
			})}
		</section>
	)
}

export default ListTrackerData