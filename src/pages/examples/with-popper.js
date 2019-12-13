import React from "react"
import Example from '../../components/example';
import { withPopper_md } from '../../mds';

const WithPopper = () => {
	return (
		<Example
			title={() => <h4>Put List in Your Portal or Popper</h4>}
			code={withPopper_md}
			className="popper"
		/>
	)
}
export default WithPopper
