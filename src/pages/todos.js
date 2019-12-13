import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Todos = (props) => {
	return (
		<Layout currentScreen={props["*"]}>
			<SEO title="Todos" keywords={[`react-multi-select`, `react-multi-select-dropdown`, `react multiselect`, `react multi select`, 'react multiple select dropdown']} />
			<h1>Todos</h1>
			<ul>
				<li style={{ textDecoration: "line-through" }}>Add Responsive</li>
				<li style={{ textDecoration: "line-through" }}>Add Docs</li>
				<li style={{ textDecoration: "line-through" }}>Add Virtualized</li>
				<li style={{ textDecoration: "line-through" }}>Remove Popper</li>
				<li >Addable Lists</li>
				<li>Update Tests</li>
				<li>Add More Theme</li>
			</ul>
		</Layout>
	)
}

export default Todos
