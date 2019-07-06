import * as React from "react"
import styled from "styled-components"

const Type = props => (
	<>
		<span {...props}>type: {props.children}</span>
		<br />
	</>
)

export default styled(Type)`
  background-color: rgb(222, 235, 255);
	font-size: 15px;
	padding: 4px;
`
