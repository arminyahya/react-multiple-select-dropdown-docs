import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Todos = () => {
	return (
		<Layout>
			<SEO title="Todos" keywords={[`gatsby`, `application`, `react`]} />
			<h1>Todos</h1>
		</Layout>
	)
}

export default Todos
