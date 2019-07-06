import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "../../index.sass";
import Theming from './theming';
import Search from './search';
import Responsive from './responsive';
import CustomeList from './customeList';

const ExamplesPage = () => (
  <Layout>
    <SEO title="Examples" keywords={[`gatsby`, `application`, `react`]} />
    <Theming />
    <Search />
    <Responsive />
    <CustomeList />
  </Layout>
)

export default ExamplesPage
