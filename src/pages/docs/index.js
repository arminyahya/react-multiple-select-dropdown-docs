import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "../../index.sass"
import { SectionHeader,SectionInner } from "./Components/styled"
import Type from './Components/type';
import Required from './Components/required';
import DefaultValue from './Components/defaultvalue';

/*
popperClassName?: string;
	selectedItems: ValueLabelModel[];
	unSelectedItems: ValueLabelModel[];
	onInputChange: (val: string) => void;
	onChange: (selectedItems: ValueLabelModel[]) => void;
	onFocus?: () => void;
	onBlur?: () => void;
	isRequired?: boolean;
	addable?: boolean;
	addText?: string;
	onAddNewItem?: () => void;
	selectedTabLabel?: string;
	unselectedTabLabel?: string;
	breackPoint?: "575" | "768" | "991" | "1199";
	placement?: PopperJS.Placement;
	theme?: "default" | "dark";
	direction?: "rtl" | "ltr";
	renderUnSelectedItem?: (item: ValueLabelModel) => React.ReactNode;
	renderSelectedItem?: (item: ValueLabelModel) => React.ReactNode;
	*/
const DocsPage = () => (
	<Layout>
		<SEO title="Docs" keywords={[`gatsby`, `application`, `react`]} />
		<SectionHeader>prefixClassName</SectionHeader>
		<SectionInner>
			<Type>string</Type>
			<Required>false</Required>
			<DefaultValue>'multiple-select'</DefaultValue>
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
			<DefaultValue>'selected'</DefaultValue>
			<p>label of selected tab in mobile</p>
		</SectionInner>
		<SectionHeader>unSelectedTabLabel</SectionHeader>
		<SectionInner>
			<Type>string</Type>
			<Required>false</Required>
			<DefaultValue>'unselected'</DefaultValue>
			<p>label of unselected tab in mobile</p>
		</SectionInner>
		<SectionHeader>breackPoint</SectionHeader>
		<SectionInner>
			<Type>"575" | "768" | "991" | "1199"</Type>
			<Required>false</Required>
			<DefaultValue>991</DefaultValue>
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
			<DefaultValue>'bottom-end'</DefaultValue>
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
			<DefaultValue>ltr</DefaultValue>
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
