import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Code from "../../components/code"
import "../../index.sass"
import { FlexRow } from "../../components/styled"
const md = `
type ValueLabel  = {
	value: any;
	label: string;
}

// or in typescript

interface ValueLabel {
	value: any;
	label: string;
}
`
const IntroductionPage = () => (
	<Layout>
		<SEO title="Introduction" keywords={[`gatsby`, `application`, `react`]} />
		<FlexRow style={{ justifyContent: "center" }}>
			<img src="/static/img/introduction-1.jpg" style={{ borderRadius: 10 }} />
			<img src="/static/img/introduction-2.jpg" style={{ borderRadius: 10 }} />
		</FlexRow>
		<h1>Introduction</h1>
		<p>
			MultipleSelectDropDown is a component which you can use in your forms
			where you need to pick more than one item.
		</p>
		<p>
			for example you want to add some users to a group or pick multiple tags
			for your article.
		</p>
		<p>its responsive too,its use popper and react-responsive librery</p>
		<p>
			it will be transform to a smaller component when you resize or change his
			position when there is no space in placement
		</p>
		<h4>ValueLabelModel</h4>
		<p>
			my model to keep data in option is ValueLabel. an object with value and
			label as properties.
			<br />
			use <b>value</b> to keep properties like Id and use <b>label</b> to keep
			field you want to display like username
		</p>
		<Code>{md}</Code>
	</Layout>
)

export default IntroductionPage
