import React from "react"
import Example from "../../components/example"

const md = `
const ResponsiveMultipleSelect = props => (
	<MultipleSelect
		selectedItems={selectedItems}
		unSelectedItems={unSelectedItems}
		onChange={this.onChange}
		breakPoint={768}
	/>)
`
const Responsive = () => {
	return (
		<div className="example-responsive">
			<h1>Responsive</h1>
			<div>
				<img src={'https://github.com/arminyahya/react-multiple-select-dropdown-docs/blob/master/src/images/responsive.gif?raw=true'} style={{ borderRadius: 10 }} />
			</div>
			<Example
				code={md}
				description="for example you want to change your component to smaller one when screen goes under 768px"
			/>
		</div>
	)
}
export default Responsive
