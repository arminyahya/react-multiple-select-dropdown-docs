import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "../../index.sass"
import { SectionHeader, SectionInner } from "../../components/styled"
import Type from "../../components/type"
import Required from "../../components/styledRequired"
import StyledDefaultValue from "../../components/styledDefaultValue"
import { useStaticQuery, graphql } from "gatsby"

const DocsPage = props => {
	const { allContentfulComponentProps } = useStaticQuery(
		graphql`
			{
				allContentfulComponentProps {
					edges {
						node {
							name
							type
							required
							description
						}
					}
				}
			}
		`
	)
	return (
		<Layout currentScreen={props["*"]}>
			<SEO
				title="Docs"
				keywords={[
					`react-multi-select`,
					`react-multi-select-dropdown`,
					`react multiselect`,
					`react multi select`,
					"react multiple select dropdown",
				]}
			/>
			{allContentfulComponentProps.edges.map(prop => (
				<>
					<SectionHeader>{prop.node.name}</SectionHeader>
					<SectionInner>
						<Type>{prop.node.type}</Type>
						<Required>{prop.node.required}</Required>
						<p>{prop.node.description}</p>
					</SectionInner>
				</>
			))}
		</Layout>
	)
}

export default DocsPage;