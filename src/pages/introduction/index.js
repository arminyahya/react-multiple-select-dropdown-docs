import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Code from "../../components/code"
import "../../index.sass"
import { FlexRow } from "../../components/styled"

import { gettingStarted_md, valueLabel_md } from "../../mds"

const IntroductionPage = props => {
	return (
		<Layout currentScreen={props["*"]}>
			<SEO
				title="Introduction"
				keywords={[
					`react-multi-select`,
					`react-multi-select-dropdown`,
					`react multiselect`,
					`react multi select`,
					"react multiple select dropdown",
				]}
			/>
			<FlexRow style={{ justifyContent: "center" }}>
				<img
					src={
						"/images/introduction-1.JPG"
					}
					style={{ borderRadius: 10 }}
					alt="multi select component"
					title="multi select component"
				/>
				<img
					src={
						"/images/introduction-2.JPG"
					}
					style={{ borderRadius: 10 }}
					alt="responsive multi select component"
					title="responsive multi select component"
				/>
			</FlexRow>
			<h2>Installation and usage</h2>
			<p>
				MultipleSelectDropDown is a component which you can use in your forms
				where you need to pick more than one item. for example you want to add
				some users to a group or pick multiple tags for your article. it is
				responsive too, MultipleSelectDropDown will transform into a smaller component when you resize
				or change its position when there is no space in placement.
			</p>
			<pre>npm install --save react-multiple-select-dropdown</pre>

			<Code>{gettingStarted_md} </Code>

			<h5 style={{ margin: "10px 0px" }}>ValueLabelModel</h5>
			<p>
				My model to keep data in option is ValueLabel. An object with value and
				label as properties.
				<br />
				use <b>value</b> to keep properties like id and use <b>label</b> to keep
				field you want to display like username
			</p>
			<Code>{valueLabel_md}</Code>

			<div className="introdoction-available-classes">
				<h5 style={{ margin: "5px 0px" }}>
					use this classNames to style component with css:
				</h5>
				<p>multiple-select </p>
				<p>multiple-select_lists</p>
				<p>multiple-select_lists_inner</p>
				<p>multiple-select_list</p>
				<p>multiple-select_list-selected</p>
				<p>multiple-select_list-unselected</p>
				<p>multiple-select_list_item</p>
				<p>multiple-select_summary-wrapper</p>
				<p>multiple-select_summary</p>
				<p>multiple-select_trigger_wrapper</p>
				<p>multiple-select_trigger</p>
				<p>multiple-select_list_item_cross-icon</p>
			</div>

			<table className="peer-dependencies">
				<tbody>
					<tr>
						<td align="left">
							<span>peerDependencies</span>
						</td>
						<td align="left">
							<span>react: ^15.0.0 || ^16.0.0</span>
						</td>
						<td align="left">
							<span>react-dom: ^15.0.0 || ^16.0.0</span>
						</td>
					</tr>
				</tbody>
			</table>
		</Layout>
	)
}

export default IntroductionPage
