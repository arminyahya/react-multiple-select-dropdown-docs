import React from "react"
import Example from '../../components/example';
import { search_md } from '../../mds';
import { ExampleItemWrap } from '../../components/styled';

const Search = () => {
	return (
		<ExampleItemWrap >
		<Example
			title={() => <h4>Search</h4>}
			code={search_md}
			className="search"
		// description="your data can be a alot so search them whatever you want."
		/>
		</ExampleItemWrap>
	)
}
export default Search
