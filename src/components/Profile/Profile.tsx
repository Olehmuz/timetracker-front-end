import PositionList from "components/PositionList/PositiontList";
import ProjectList from "components/ProjectList/ProjectList";
import { useAuth } from "hooks/useAuth";

const Profile = () => {
	const { user } = useAuth();
	console.log(user)
	
	return (
		<section className="mt-[25px] rounded-lg bg-white border border-secondary pb-[400px] overflow-hidden">
			<h1 className="p-4 text-2xl text-primary-gray font-bold">{user.name} {user.surname}</h1>
			<div className="flex p-4">
				<img className="p-3 box-content w-[150px] h-[150px] rounded-full " src={user.picture} alt='User'/>
				<div>
					<div className="flex items-center mx-6 mb-4">
						<i className="mr-3"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0zm10 5h4v2h-4zm0 0h4v2h-4z" fill="none"/><path d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"/></svg></i>
						<div className="flex flex-col">
							<small className="text-gray text-sm">Position</small>
							<PositionList />
						</div>
					</div>

					<div className="flex items-center mx-6 mb-4">
						<i className="mr-3"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0zm10 5h4v2h-4zm0 0h4v2h-4z" fill="none"/><path d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"/></svg></i>
						<div className="flex flex-col w-[150px]">
							<small className="text-gray text-sm">Project</small>
							<ProjectList />
						</div>
					</div>

					<div className="flex items-center mx-6 mb-4">
						<i className="mr-3"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0zm10 5h4v2h-4zm0 0h4v2h-4z" fill="none"/><path d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"/></svg></i>
						<div className="flex flex-col">
							<small className="text-gray text-sm">Email</small>
							<span className=" text-primary-gray text-base">{user.email}</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Profile