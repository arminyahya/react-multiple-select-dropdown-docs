import React from "react"
import Example from "../../components/example";
import { FlexRow } from '../../components/styled';
import { darkTheme_md, defaultTheme_md } from '../../mds';

const Theming = () => {
	return (
		<div className="theming">
			<div className="theming-dark">
				{/* <h2>Theming</h2> */}
				<h4>Dark</h4>
				<FlexRow className="flex-row">
					<img
						src={'/images/dark-theme-fixed.jpg'}
						alt="dark multi select component"
						title="dark multi select component"
					/>
					<Example code={darkTheme_md} className="half-width-code" />
				</FlexRow>
			</div>
			<div className="theming-default">
				<h4>Default</h4>
				<FlexRow className="flex-row">
					<img
						src={'/images/default-theme-fixed-size.jpg'}
						alt="multi select component"
						title="multi select component"
					/>
					<Example code={defaultTheme_md} className="half-width-code" />
				</FlexRow>
			</div>
		</div>
	)
}
export default Theming
