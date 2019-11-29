import * as React from "react"
import Link from "gatsby-link"
import styled from 'styled-components';

export const MenuWrap = styled.div`
	background: #f4f4f4;
	padding-top: 10px;
`
export const MenuInner = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
	padding: 20px 10px;
	min-width: 350px
	
	@media only screen and (max-width: 480px) {
			min-width: 100px;
			flex-direction: row;
			top: 84px;
	}
 
`

export const MenuItem = styled(Link)`
	display: block;
`
const MenuPage = ({ currentScreen }) => {
	return (
		<MenuWrap
		>
			<MenuInner
				className="side-menu"
			>
					<MenuItem
						to="/introduction"
						style={{
							fontWeight: currentScreen === "introduction" ? "bold" : "normal",
						}}
					>
						Installation
					</MenuItem>
					<MenuItem
						to="/docs"
						style={{ fontWeight: currentScreen === "docs" ? "bold" : "normal" }}
					>
						Props
					</MenuItem>
					<MenuItem
						to="/examples"
						style={{
							fontWeight: currentScreen === "examples" ? "bold" : "normal",
						}}
					>
						Examples
					</MenuItem>
					<MenuItem
						to="/todos"
						style={{
							fontWeight: currentScreen === "todos" ? "bold" : "normal",
						}}
					>
						Todos
					</MenuItem>
			</MenuInner>
		</MenuWrap>
	)
}

export default MenuPage
