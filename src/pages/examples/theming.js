import React from "react"
import Example from "../../components/example";
import {FlexRow} from '../../components/styled';
import defaulttheme from '../../images/default-theme.JPG';
import darktheme from '../../images/dark-theme.JPG';

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
					<img src={defaulttheme} />
				</FlexRow>
			</div>
			<div className="theming-default">
				<h2>Default</h2>
				<FlexRow>
					<Example code={demd} />
					<img src={darktheme} />
				</FlexRow>
			</div>
		</div>
	)
}
export default Theming
