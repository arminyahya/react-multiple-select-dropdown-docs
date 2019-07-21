import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "../../index.sass"
import Theming from "./theming"
import Search from "./search"
import Responsive from "./responsive"
import CustomeList from "./customelist"

const ExamplesPage = props => (
	<Layout currentScreen={props["*"]}>
	<SEO
			title="Examples"
			keywords={[
				`react-multiple-select`,
				`react-multiple-select-dropdown`,
				`react multiselect`,
				`react multiple select`,
				"react multiple select dropdown",
			]}
		/>
		<Theming />
		<Search />
		<Responsive />
		<CustomeList />
	</Layout>
)

export default ExamplesPage
