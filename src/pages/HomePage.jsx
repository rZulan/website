import { Link } from "react-router-dom"

const HomePage = () => {
	return (
		<>
			<div className="w-3/4 m-auto grid grid-cols-2">
				<div className="border border-black">
					<h1>Zulan</h1>
					<Link to={"/zulan"}>
						<div className="bg-lime-400">
							<h1>Visit</h1>
						</div>
					</Link>
				</div>

				<div className="border border-black">
					<h1>Jampord</h1>
				</div>
			</div>
		</>
	)
}

export default HomePage
