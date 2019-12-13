import React from "react"
import Example from "../../components/example"
import { responsive_md } from '../../mds';
import { FlexRow } from '../../components/styled';

const Responsive = () => {
	return (
		<div className="example-responsive">
			<h4>Responsive</h4>
			<FlexRow style={{ alignItems: 'center' }}>
				<img
					src={'https://github.com/arminyahya/react-multiple-select-dropdown-docs/blob/master/src/images/responsive.gif?raw=true'}
					style={{ marginBottom: 0, paddingRight: 15, width: 500, borderRadius: 10, maxWidth: 600, height: 200 }}
					alt="react multi select"
					title="react multi select"
				/>
				<Example
					code={responsive_md}
					// description="for example you want to change your component to smaller one when screen goes under 768px"
					className="half-width-code"
				/>
			</FlexRow>

		</div>

	)
}
export default Responsive
