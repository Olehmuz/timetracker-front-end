import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import classNames from 'classnames'
import { ProjectService } from 'services/ProjectService'
import { IProjectModel } from 'models/project/Project.model'
import React from 'react'
import { useAuth } from 'hooks/useAuth'
import { $api } from 'utils/axios';

const ProjectList = () => {
	const [projects, setProject] = useState<IProjectModel[]>([]);
	
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [activeProject, setActiveProject] = React.useState<IProjectModel>({
		"_id": 'id',
		"projectName": 'Bench',
		"projectDescription": 'description',
		"salary": {
			"junior": 300,
			"middle": 400,
			"senior": 700
		}
	});
	const { user } = useAuth()
	React.useEffect(() => {
		setIsLoading(true);
		const getProjects = ProjectService.getAllProjects().then(res => {
			setProject(res.data)
		})
		const getActiveProject = ProjectService.getActiveProjectByUserId(user.id).then(res => setActiveProject(res.data));
		Promise.all([getProjects, getActiveProject]).then(() => setIsLoading(false))
	}, [user.id])
	if(isLoading){
		return <div>Loading...</div>;
	}
	return (
		<Listbox value={activeProject} onChange={(e) => {
			setActiveProject(e);
			$api.post('/management/setActiveProject', {
				userId: user.id,
				projectId: e._id
			})
		}}>
		{({ open }) => (
			<>
			<div className="relative mt-2">
				<Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
				<span className="flex items-center">
					<span className="block truncate">{activeProject.projectName}</span>
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
					{projects && projects.map((project) => (
					<Listbox.Option
						key={project._id}
						className={({ active }) =>
						classNames(
							active ? 'bg-indigo-600 text-white' : 'text-gray-900',
							'relative cursor-default select-none py-2 pl-3 pr-9'
						)
						}
						value={project}
					>
						{({ selected, active }) => (
						<>
							<div className="flex items-center">
							<span
								className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}
							>
								{project.projectName}
							</span>
							</div>

							{selected ? (
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

export default ProjectList;
