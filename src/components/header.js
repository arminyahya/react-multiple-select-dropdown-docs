import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import GitHubIcon from "../components/gitHubIcon"

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
			}}
		>
			<h4 style={{ margin: 0, flex: 1, display: 'flex', alignItems: 'center' }}>
				<Link
					to="/"
					style={{
						color: `white`,
						textDecoration: `none`,
					}}
				>
					{siteTitle}
				</Link>
			</h4>
			<div style={{ marginInlineStart: "auto" }}>
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
