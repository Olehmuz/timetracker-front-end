import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import classNames from 'classnames'
import React from 'react'
import { useAuth } from 'hooks/useAuth'
import { $api } from 'utils/axios';


import { GradeService } from 'services/GradeService'

const GradeList = () => {
	const gradesList = [{grade: 'junior'},{grade: 'middle'}, {grade: 'senior'}];
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [activeGrade, setActiveGrade] = React.useState<string>();

	const { user } = useAuth()
	
	React.useEffect(() => {
		setIsLoading(true);
		GradeService.getGrade(user.id).then(res => {
			setActiveGrade(res);
			console.log(res)
		}).finally(() => setIsLoading(false));
	}, [user.id])

	if(isLoading){
		return <div>Loading...</div>;
	}

	return (
		// <div>Loading</div>
		<Listbox value={activeGrade} onChange={(e) => {
			setActiveGrade(e);
			$api.post('/management/setGrade', {
				userId: user.id,
				grade: e.toLowerCase()
			})
		}}>
		{({ open }) => (
			<>
			<div className="relative mt-2">
				<Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
				<span className="flex items-center">
					<span className="block truncate">{activeGrade && activeGrade.charAt(0).toUpperCase() + activeGrade.slice(1)}</span>
				</span>
				<span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
					<ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
				</span>
				</Listbox.Button>

				<Transition
				show={open}
				as={Fragment}
				leave="transition ease-in duration-100"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
				>
				<Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
					{gradesList && gradesList.map(({grade}) => (
					<Listbox.Option
						key={grade}
						className={({ active }) =>
						classNames(
							active ? 'bg-indigo-600 text-white' : 'text-gray-900',
							'relative cursor-default select-none py-2 pl-3 pr-9'
						)
						}
						value={grade}
					>
						{({ active }) => (
						<>
							<div className="flex items-center">
							<span
								className={classNames(grade === activeGrade ? 'font-semibold' : 'font-normal', 'block truncate')}
							>
								{grade.charAt(0).toUpperCase() + grade.slice(1)}
							</span>
							</div>

							{grade === activeGrade ? (
							<span
								className={classNames(
								active ? 'text-white' : 'text-indigo-600',
								'absolute inset-y-0 right-0 flex items-center pr-4'
								)}
							>
								<CheckIcon className="h-5 w-5" aria-hidden="true" />
							</span>
							) : null}
						</>
						)}
					</Listbox.Option>
					))}
				</Listbox.Options>
				</Transition>
			</div>
			</>
		)}
		</Listbox>
	)
}

export default GradeList;
