import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "../../index.sass"
import { SectionHeader,SectionInner } from "../../components/styled"
import Type from '../../components/type';
import Required from '../../components/styledRequired';
import StyledDefaultValue from '../../components/styledDefaultValue';

const DocsPage = () => (
	<Layout>
		<SEO title="Docs" keywords={[`react-multiple-select`, `react-multiple-select-dropdown`, `react multiselect`, `react multiple select`, 'react multiple select dropdown']} />
		<SectionHeader>prefixClassName</SectionHeader>
		<SectionInner>
			<Type>string</Type>
			<Required>false</Required>
			<StyledDefaultValue>'multiple-select'</StyledDefaultValue>
			<p>prefix className for portal</p>
		</SectionInner>
		<SectionHeader>selectedItems</SectionHeader>
		<SectionInner>
			<Type>array of ValueLabelModel</Type>
			<p>options which are selected</p>
		</SectionInner>
		<SectionHeader>unSelectedItems</SectionHeader>
		<SectionInner>
			<Type>array of ValueLabelModel</Type>
			<p>all options</p>
		</SectionInner>
		<SectionHeader>onInputChange</SectionHeader>

		<SectionInner>
			<Type>(text: string) => void</Type>
			<p>call back when you type something in input.</p>
		</SectionInner>
		<SectionHeader>onChange</SectionHeader>
		<SectionInner>
			<Type>(selectedItems: ValueLabelModel[]) => void</Type>
			<p>call back when select an item, return an array of new selectedItems.</p>
		</SectionInner>
		<SectionHeader>selectedTabLabel</SectionHeader>
		<SectionInner>
			<Type>string</Type>
			<Required>false</Required>
			<StyledDefaultValue>'selected'</StyledDefaultValue>
			<p>label of selected tab in mobile</p>
		</SectionInner>
		<SectionHeader>unSelectedTabLabel</SectionHeader>
		<SectionInner>
			<Type>string</Type>
			<Required>false</Required>
			<StyledDefaultValue>'unselected'</StyledDefaultValue>
			<p>label of unselected tab in mobile</p>
		</SectionInner>
		<SectionHeader>breackPoint</SectionHeader>
		<SectionInner>
			<Type>"575" | "768" | "991" | "1199"</Type>
			<Required>false</Required>
			<StyledDefaultValue>991</StyledDefaultValue>
			<p>Pixel when breackPoint apply</p>
		</SectionInner>
		<SectionHeader>placement</SectionHeader>
		<SectionInner>
			<Type>
			'auto-start'
		| 'auto'
		| 'auto-end'
		| 'top-start'
		| 'top'
		| 'top-end'
		| 'right-start'
		| 'right'
		| 'right-end'
		| 'bottom-end'
		| 'bottom'
		| 'bottom-start'
		| 'left-end'
		| 'left'
		| 'left-start'
		</Type>
			<Required>false</Required>
			<StyledDefaultValue>'bottom-end'</StyledDefaultValue>
			<p>place of dropdown</p>
		</SectionInner>
		<SectionHeader>theme</SectionHeader>
		<SectionInner>
			<Type>'default' | 'dark</Type>
			<p>we have a dark theme too but you can write your styles too.</p>
		</SectionInner>
		<SectionHeader>direction</SectionHeader>
		<SectionInner>
			<Type>'ltr' | 'rtl</Type>
			<StyledDefaultValue>ltr</StyledDefaultValue>
			<p>we have some styles for rtl direction too you can use them by this prop.</p>
		</SectionInner>
		<SectionHeader>renderSelectedItem</SectionHeader>
		<SectionInner>
			<Type>(item: ValueLabelModel) => React.ReactNode</Type>
			<p>we pass item througth this function so you can render it whatever you want.</p>
		</SectionInner>
		<SectionHeader>renderUnSelectedItem</SectionHeader>
		<SectionInner>
			<Type>(item: ValueLabelModel) => React.ReactNode</Type>
			<p>we pass item througth this function so you can render it whatever you want.</p>
		</SectionInner>
		<SectionHeader>onFocus</SectionHeader>
		<SectionInner>
			<Type>() => void</Type>
			<p>call back after focus.</p>
		</SectionInner>
		<SectionHeader>onBlur</SectionHeader>	
		<SectionInner>
			<Type>() => void</Type>
			<p>call back after blur.</p>
		</SectionInner>
	</Layout>
)

export default DocsPage
