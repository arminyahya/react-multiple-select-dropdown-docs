import React from "react"
import Example from "./components/example"

const damd = `
const DarkMultipleSelect = props => (
  <MultipleSelect
    selectedItems={selectedItems}
    unSelectedItems={unSelectedItems}
    onChange={this.onChange}
    theme={'dark'}
  />
)
`

const demd = `
const DarkMultipleSelect = props => (
return (
  <MultipleSelect
    selectedItems={selectedItems}
    unSelectedItems={unSelectedItems}
    onChange={this.onChange}
    theme={'default'}
  />
)
`

const Theming = () => {
	return (
		<div className="theming">
			<h1>Theming</h1>
			<div className="theming-dark">
				<Example title={() => <h2>Dark</h2>} code={damd} />
				<div>place of dark them image</div>
			</div>
			<div className="theming-default">
				<Example title={() => <h2>Default</h2>} code={demd} />
				<div>place of default them image</div>
			</div>
		</div>
	)
}
export default Theming
