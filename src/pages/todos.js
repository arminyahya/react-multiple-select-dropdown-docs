import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Todos = () => {
	return (
		<Layout>
			<SEO title="Todos" keywords={[`react-multiple-select`, `react-multiple-select-dropdown`, `react multiselect`, `react multiple select`, 'react multiple select dropdown']} />
			<h1>Todos</h1>
			<ul>
				<li style={{ textDecoration: "line-through" }}>Add Responsive</li>
				<li style={{ textDecoration: "line-through" }}>Add Docs</li>
				<li>Update Tests</li>
				<li>Add More Theme</li>
			</ul>
		</Layout>
	)
}

export default Todos
