import React from "react"
import Example from "../../components/example";
import { FlexRow } from '../../components/styled';
import { darkTheme_md, defaultTheme_md } from '../../mds';

const Theming = () => {
	return (
		<div className="theming">
			<div className="theming-dark">
				<h1>Theming</h1>
				<h2>Dark</h2>
				<FlexRow>
					<Example code={darkTheme_md} />
					<img
						src={'https://github.com/arminyahya/react-multiple-select-dropdown-docs/blob/master/src/images/dark-theme.JPG?raw=true'}
						alt="dark multi select component"
						title="dark multi select component"
					/>
				</FlexRow>
			</div>
			<div className="theming-default">
				<h2>Default</h2>
				<FlexRow>
					<Example code={defaultTheme_md} />
					<img
						src={'https://github.com/arminyahya/react-multiple-select-dropdown-docs/blob/master/src/images/default-theme.JPG?raw=true'}
						alt="multi select component"
						title="multi select component"
					/>
				</FlexRow>
			</div>
		</div>
	)
}
export default Theming
