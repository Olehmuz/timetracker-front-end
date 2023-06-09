import { Link } from "react-router-dom";

function AboutCreator() {
	
	return (
		<section>
			<h1 className="mt-5 text-2xl text-center">About project</h1>
			<div className="pb-3 pt-4 flex">
                  <Link to='/cats' className="flex items-center flex-col rounded-lg p-4 bg-white border border-secondary basis-1/4 m-2">
                    <div className="flex items-center">
						<div className="flex-shrink-0">
						<img className="h-20 w-20 rounded-full" src={require('./../../images/me.jpg')} alt="" />
						</div>
						<div className="ml-3">
							<div className="text-base font-medium leading-none pb-2">Creator:</div>
						<div className="text-sm font-medium leading-none pb-2">Oleg Muzychuk</div>
						<div className="text-sm font-medium leading-none text-gray-400">olehmuz87@gmal.com</div>
						</div>
					</div>
                  </Link>

				  <div className="flex items-start flex-col rounded-lg p-4 bg-white border border-secondary basis-1/2 m-2">
                    <div className="flex items-center w-full justify-evenly">
						<div className="ml-3">
							<div className="text-base font-medium leading-none pb-2">Project name: ITFIN Clone</div>
							<div className="text-sm font-medium leading-none pb-2 text-gray-400">System for managing an IT company</div>
						</div>
						<div className="flex-shrink-0">
							<img className="h-20 rounded-full" src={require('./../../images/itfin.png')} alt="" />
						</div>
					</div>
                  </div>

				  <div className="flex items-center flex-col justify-center rounded-lg p-4 bg-white border border-secondary basis-1/4 m-2">
                    <div className="flex items-center w-full justify-evenly">
						<a href='https://github.com/Olehmuz/timetracker' target="_blank" className="rounded-full p-2 bg-white border border-secondary icon icon__github" rel="noreferrer"><svg className="w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>github</title><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg></a>
						<a href='https://t.me/alegmuz' target="_blank" className="rounded-full p-2 bg-white border border-secondary icon icon__telegram" rel="noreferrer"><svg className="w-12" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="telegram"><path d="M11.99432,2a10,10,0,1,0,10,10A9.99917,9.99917,0,0,0,11.99432,2Zm3.17951,15.15247a.70547.70547,0,0,1-1.002.3515l-2.71467-2.10938L9.71484,17.002a.29969.29969,0,0,1-.285.03894l.334-2.98846.01069.00848.00683-.059s4.885-4.44751,5.084-4.637c.20147-.189.135-.23.135-.23.01147-.23053-.36152,0-.36152,0L8.16632,13.299l-2.69549-.918s-.414-.1485-.453-.475c-.041-.324.46649-.5.46649-.5l10.717-4.25751s.881-.39252.881.25751Z"></path></svg></a>
					</div>
                  </div>
            </div>
		</section>
	);
}

export default AboutCreator