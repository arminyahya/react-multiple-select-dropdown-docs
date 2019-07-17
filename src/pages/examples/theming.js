import React from "react"
import Example from "../../components/example";
import {FlexRow} from '../../components/styled';

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
			<div className="theming-dark">
			<h1>Theming</h1>
				<h2>Dark</h2>
				<FlexRow>
					<Example code={damd} />
					<img src={'https://github.com/arminyahya/react-multiple-select-dropdown-docs/blob/master/src/images/dark-theme.JPG?raw=true'} />
				</FlexRow>
			</div>
			<div className="theming-default">
				<h2>Default</h2>
				<FlexRow>
					<Example code={demd} />
					<img src={'https://github.com/arminyahya/react-multiple-select-dropdown-docs/blob/master/src/images/default-theme.JPG?raw=true'} />
				</FlexRow>
			</div>
		</div>
	)
}
export default Theming
