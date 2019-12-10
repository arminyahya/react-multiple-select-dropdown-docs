import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import GitHubIcon from "../components/gitHubIcon"
import CodeSandBoxIcon from "../components/CodeSandBoxIcon"

const Header = ({ siteTitle }) => (
	<header
		style={{
			background: `#2e3842`,
		}}
	>
		<div
			style={{
				display: "flex",
				padding: `1.45rem 1.0875rem`,
				alignItems: 'center'
			}}
		>
			<h1 style={{ margin: 0, flex: 1, display: 'flex', alignItems: 'center', fontSize: '20px' }}>
				<Link
					to="/"
					style={{
						color: `white`,
						textDecoration: `none`,
					}}
				>
					{siteTitle}
				</Link>
			</h1>
			<div style={{ marginInlineStart: "auto" }}>
				<a href="https://codesandbox.io/s/react-multi-select-component-1d6sd">
					<CodeSandBoxIcon />
				</a>
			</div>
			<div>
				<a href="https://github.com/arminyahya/react-multiple-select-dropdown/">
					<GitHubIcon />
				</a>
			</div>
			
		</div>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
