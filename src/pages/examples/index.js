import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "../../index.sass"
import Theming from "./theming"
import Search from "./search"
import Responsive from "./responsive"
import CustomeList from "./customelist"
import WithPopper from "./with-popper"

const ExamplesPage = props => (
	<Layout currentScreen={props["*"]}>
	<SEO
			title="Examples"
			keywords={[
				`react-multi-select`,
				`react-multi-select-dropdown`,
				`react multiselect`,
				`react multi select`,
				"react multiple select dropdown",
			]}
		/>
		<Responsive />
		<Theming />
		<CustomeList />
		<Search />
		<WithPopper />
	</Layout>
)

export default ExamplesPage
