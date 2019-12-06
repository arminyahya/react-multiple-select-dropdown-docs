import React from "react"
import Example from "../../components/example";
import { FlexRow } from '../../components/styled';
import { darkTheme_md, defaultTheme_md } from '../../mds';

const Theming = () => {
	return (
		<div className="theming">
			<div className="theming-dark">
				<h2>Theming</h2>
				<h4>Dark</h4>
				<FlexRow>
					<img
						src={'https://github.com/arminyahya/react-multiple-select-dropdown-docs/blob/master/src/images/dark-theme.JPG?raw=true'}
						alt="dark multi select component"
						title="dark multi select component"
					/>
					<Example code={darkTheme_md} className="half-width-code"/>
				</FlexRow>
			</div>
			<div className="theming-default">
				<h4>Default</h4>
				<FlexRow>
					<img
						src={'https://github.com/arminyahya/react-multiple-select-dropdown-docs/blob/master/src/images/default-theme.JPG?raw=true'}
						alt="multi select component"
						title="multi select component"
					/>
					<Example code={defaultTheme_md} className="half-width-code"/>
				</FlexRow>
			</div>
		</div>
	)
}
export default Theming
