import React from "react"
import Example from '../../components/example';
import { search_md } from '../../mds';

const Search = () => {
	return (
		<Example
		title={() => <h2>Search</h2>}
		code={search_md}
			className="search"
			description="your data can be a alot so search them whatever you want."
		/>
	)
}
export default Search
