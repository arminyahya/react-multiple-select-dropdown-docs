import * as React from "react"
import styled from "styled-components"

const DefaultValue = props => <span {...props}>default: {props.children}</span>
const styledDefaultValue = styled(DefaultValue)`
  background-color: rgb(244, 245, 247);
  font-size: 15px;
  padding: 4px;
`
export default styledDefaultValue
