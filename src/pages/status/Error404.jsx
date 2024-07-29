import { Link } from "react-router-dom"

const Error404 = () => {
	return (
		<div>
			<h1>ERROR 404! Missing Page!</h1>
			<Link to={"/"}>Go Back {"<--"}</Link>
		</div>
	)
}

export default Error404
