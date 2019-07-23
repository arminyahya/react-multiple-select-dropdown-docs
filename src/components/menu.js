import * as React from "react"
import Link from "gatsby-link"

const MenuPage = ({ currentScreen }) => {
	console.log(currentScreen)
	return (
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
					<Link
						to="/introduction"
						style={{
							fontWeight: currentScreen === "introduction" ? "bold" : "normal",
						}}
					>
						Installation
					</Link>
				</div>
				<div>
					<Link
						to="/docs"
						style={{ fontWeight: currentScreen === "docs" ? "bold" : "normal" }}
					>
						Props
					</Link>
				</div>
				<div>
					<Link
						to="/examples"
						style={{
							fontWeight: currentScreen === "examples" ? "bold" : "normal",
						}}
					>
						Examples
					</Link>
				</div>
				<div>
					<Link
						to="/todos"
						style={{
							fontWeight: currentScreen === "todos" ? "bold" : "normal",
						}}
					>
						Todos
					</Link>
				</div>
			</div>
		</div>
	)
}

export default MenuPage
