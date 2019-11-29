import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import Menu from "../components/menu"
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: calc(100vh - 97px);
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
export const Content = styled.div`
  width: 90%;
  max-width: 1000px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  overflow-x: auto;
  @media only screen and (max-width: 480px) {
    width: 100%
  }
`
const Layout = props => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Container>
            <Menu currentScreen={props.currentScreen} />
            <Content>
              <main>{props.children}</main>
            </Content>
          </Container>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
