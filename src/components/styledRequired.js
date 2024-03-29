import * as React from "react"
import styled from "styled-components"

const Required = props => (
	<>
		<span {...props}>required: {props.children}</span>
		<br />
	</>
)

const StyledRequired = styled(Required)`
	background-color: rgb(234, 230, 255);
	font-size: 15px;
	padding: 4px;
`

export default StyledRequired
