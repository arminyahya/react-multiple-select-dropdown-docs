import React from "react"
import Code from "./code"

const Example = props => {
	const { title, code, description, className } = props
	return (
		<div className={`example-wrapper ${className}`}>
			{title && title()}
			<Code>{code}</Code>
			<div className="description">{description}</div>
		</div>
	)
}
export default Example
