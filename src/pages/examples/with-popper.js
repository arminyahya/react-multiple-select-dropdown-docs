import React from "react"
import Example from '../../components/example';
import { withPopper_md } from '../../mds';
import { ExampleItemWrap } from '../../components/styled';

const WithPopper = () => {
	return (
		<ExampleItemWrap >
			<Example
				title={() => <h4>Put List in Your Portal or Popper</h4>}
				code={withPopper_md}
				className="popper"
			/>
		</ExampleItemWrap>
	)
}
export default WithPopper
