import React from "react"
import Example from "../../components/example"
import { responsive_md } from '../../mds';
import { FlexRow, ExampleItemWrap } from '../../components/styled';

const Responsive = () => {
	return (
		<ExampleItemWrap className="responsive">
			<h4>Responsive</h4>
			<FlexRow className="flex-row">
				<img
					src={'https://github.com/arminyahya/react-multiple-select-dropdown-docs/blob/master/src/images/responsive-smaller.gif?raw=true'}
					style={{}}
					alt="react multi select"
					title="react multi select"
				/>
				<Example
					code={responsive_md}
					// description="for example you want to change your component to smaller one when screen goes under 768px"
					className="half-width-code"
				/>
			</FlexRow>
		</ExampleItemWrap>

	)
}
export default Responsive
