import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "../../index.sass"
import Theming from "./theming"
import Search from "./search"
import Responsive from "./responsive"
import CustomeList from "./customelist"
import WithPopper from "./with-popper"

const ExamplesPage = props => (
	<Layout currentScreen={props["*"]} className="example-page">
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
