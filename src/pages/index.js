import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Introduction from "./introduction/index"
import Helmet from "react-helmet"
import "../index.sass"

const IndexPage = () => (
	<>
		<Helmet
			// title={data.site.siteMetadata.title}
			meta={[
				{
					name: "google-site-verification",
					content: "XTi52991nPvWRLWEz4O2-bpHLQ7VkclrGwQVQbFXUVs",
				},
			]}
		/>
		<Introduction />
	</>
)

export default IndexPage
