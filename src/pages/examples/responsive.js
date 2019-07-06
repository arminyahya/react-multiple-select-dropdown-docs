import React from "react"
import Example from "./components/example"

const md =
`
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
			<Example
				title={() => <h1>Responsive</h1>}
				code={md}
				description="for example you want to change your component to smaller one when screen goes under 768px"
			/>
			<div>place gif here</div>
		</div>
	)
}
export default Responsive
