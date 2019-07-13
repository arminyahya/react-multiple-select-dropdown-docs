import * as React from "react"
import Link from "gatsby-link"

const MenuPage = () => (
	<div
		style={{
			background: "#f4f4f4",
			paddingTop: "10px",
		}}
	>
		<div
			style={{
				display: "flex",
				justifyContent: "space-evenly",
				flexDirection: "column",
				padding: "20px 10px",
			}}
			className="side-menu"
		>
			<div>
				<Link to="/introduction">Introduction</Link>
			</div>
			<div>
				<Link to="/docs">Docs</Link>
			</div>
			<div>
				<Link to="/examples">Examples</Link>
			</div>
			<div>
				<Link to="/todos">Todos</Link>
			</div>
		</div>
	</div>
)

export default MenuPage
