import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs"

export default ({ children, className }) => {
	return (
		<SyntaxHighlighter language="jsx" style={atomOneDarkReasonable} className="code-block">
			{children}
		</SyntaxHighlighter>
	)
}
