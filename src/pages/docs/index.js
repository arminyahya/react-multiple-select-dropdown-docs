import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "../../index.sass"
import { SectionHeader,SectionInner } from "../../components/styled"
import Type from '../../components/type';
import Required from '../../components/styledRequired';
import StyledDefaultValue from '../../components/styledDefaultValue';

const DocsPage = (props) => (
	<Layout currentScreen={props["*"]}>
	<SEO title="Docs" keywords={[`react-multiple-select`, `react-multiple-select-dropdown`, `react multiselect`, `react multiple select`, 'react multiple select dropdown']} />
		<SectionHeader>popperClassName</SectionHeader>
		<SectionInner>
			<Type>string</Type>
			<Required>false</Required>
			<p>Prefix className for portal</p>
		</SectionInner>
		<SectionHeader>selectedItems</SectionHeader>
		<SectionInner>
			<Type>array of ValueLabelModel</Type>
			<p>Options which are selected</p>
		</SectionInner>
		<SectionHeader>unSelectedItems</SectionHeader>
		<SectionInner>
			<Type>array of ValueLabelModel</Type>
			<p>All options</p>
		</SectionInner>
		<SectionHeader>onInputChange</SectionHeader>

		<SectionInner>
			<Type>(text: string) => void</Type>
			<p>Call back when you type something in input.</p>
		</SectionInner>
		<SectionHeader>onChange</SectionHeader>
		<SectionInner>
			<Type>(selectedItems: ValueLabelModel[]) => void</Type>
			<p>Call back when select an item, return an array of new selectedItems.</p>
		</SectionInner>
		<SectionHeader>selectedTabLabel</SectionHeader>
		<SectionInner>
			<Type>string</Type>
			<Required>false</Required>
			<StyledDefaultValue>'selected'</StyledDefaultValue>
			<p>Label of selected tab in mobile</p>
		</SectionInner>
		<SectionHeader>unSelectedTabLabel</SectionHeader>
		<SectionInner>
			<Type>string</Type>
			<Required>false</Required>
			<StyledDefaultValue>'unselected'</StyledDefaultValue>
			<p>Label of unselected tab in mobile</p>
		</SectionInner>
		<SectionHeader>breackPoint</SectionHeader>
		<SectionInner>
			<Type>'575' | '768' | '991' | '1199'</Type>
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
			<p>Place of dropdown</p>
		</SectionInner>
		<SectionHeader>theme</SectionHeader>
		<SectionInner>
			<Type>'default' | 'dark'</Type>
			<p>We have a dark theme too but you can write your styles too.</p>
		</SectionInner>
		<SectionHeader>direction</SectionHeader>
		<SectionInner>
			<Type>'ltr' | 'rtl'</Type>
			<StyledDefaultValue>ltr</StyledDefaultValue>
			<p>We have some styles for rtl direction too you can use them by this prop.</p>
		</SectionInner>
		<SectionHeader>renderSelectedItem</SectionHeader>
		<SectionInner>
			<Type>(item: ValueLabelModel) => React.ReactNode</Type>
			<p>We pass item througth this function so you can render it whatever you want.</p>
		</SectionInner>
		<SectionHeader>renderUnSelectedItem</SectionHeader>
		<SectionInner>
			<Type>(item: ValueLabelModel) => React.ReactNode</Type>
			<p>We pass item througth this function so you can render it whatever you want.</p>
		</SectionInner>
		<SectionHeader>onFocus</SectionHeader>
		<SectionInner>
			<Type>() => void</Type>
			<p>Call back after focus.</p>
		</SectionInner>
		<SectionHeader>onBlur</SectionHeader>	
		<SectionInner>
			<Type>() => void</Type>
			<p>Call back after blur.</p>
		</SectionInner>
	</Layout>
)

export default DocsPage
