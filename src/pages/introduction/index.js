import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Code from "../../components/code"
import "../../index.sass"
import { FlexRow } from "../../components/styled"

const md = `
type ValueLabel  = {
	value: any;
	label: string;
}

// or in typescript

interface ValueLabel {
	value: any;
	label: string;
}
`

const gettingStartedMd = `

import React, { Component } from 'react'
import MultipleSelect from 'react-multiple-select-dropdown';

class YourWrapperComponent extends Component {
  state = {
  selectedItems: [],
  unSelectedItems: [
  { value: 1, label: 'react' },
  { value: 2, label: 'reactnative' },
  { value: 3, label: 'nodejs' },
  { value: 4, label: 'redux' },
  { value: 5, label: 'mobx' }
  ]
  }

onChange = (selectedItems) => {
  this.setState({ selectedItems: selectedItems });


render() {
const { selectedItems, unSelectedItems } = this.state;
  return (
  <div>
  <MultipleSelect
    selectedItems={selectedItems}
    unSelectedItems={unSelectedItems}
    onChange={this.onChange}
  />
  </div>
);

}
`
const IntroductionPage = props => {
  console.log(props)
  return (
    <Layout currentScreen={props["*"]}>
      <SEO
        title="Introduction"
        keywords={[
          `react-multiple-select`,
          `react-multiple-select-dropdown`,
          `react multiselect`,
          `react multiple select`,
          "react multiple select dropdown",
        ]}
      />
      <FlexRow style={{ justifyContent: "center" }}>
        <img
          src={
            "https://github.com/arminyahya/react-multiple-select-dropdown-docs/blob/master/src/images/introduction-1.JPG?raw=true"
          }
          style={{ borderRadius: 10 }}
        />
        <img
          src={
            "https://github.com/arminyahya/react-multiple-select-dropdown-docs/blob/master/src/images/introduction-2.JPG?raw=true"
          }
          style={{ borderRadius: 10 }}
        />
      </FlexRow>
      <h2>Installation and usage</h2>
      <p>
        MultipleSelectDropDown is a component which you can use in your forms
        where you need to pick more than one item. for example you want to add
        some users to a group or pick multiple tags for your article. it is
        responsive too, MultipleSelectDropDown use
        <a
          href="https://github.com/FezVrasta/react-popper"
          style={{ color: "#2684ff" }}
        >
          {" "}
          popper{" "}
        </a>{" "}
        and
        <a
          href="https://github.com/contra/react-responsive"
          style={{ color: "#2684ff" }}
        >
          {" "}
          react-responsive{" "}
        </a>{" "}
        library it will be transform to a smaller component when you resize or
        change his position when there is no space in placement.
      </p>
      <pre>npm install --save react-multiple-select-dropdown</pre>

      <Code>{gettingStartedMd} </Code>


      <h5 style={{ margin: "10px 0px" }}>ValueLabelModel</h5>
      <p>
        my model to keep data in option is ValueLabel. an object with value and
        label as properties.
        <br />
        use <b>value</b> to keep properties like Id and use <b>label</b> to keep
        field you want to display like username
      </p>
      <Code>{md}</Code>

      <div className="introdoction-available-classes">
        <h5 style={{ margin: "5px 0px" }}>
          use this classNames to style component with css:
        </h5>
        <p>multiple-select </p>
        <p>multiple-select_lists</p>
        <p>multiple-select_lists_inner</p>
        <p>multiple-select_list</p>
        <p>multiple-select_list-selected</p>
        <p>multiple-select_list-unselected</p>
        <p>multiple-select_list_item</p>
        <p>multiple-select_summary-wrapper</p>
        <p>multiple-select_summary</p>
        <p>multiple-select_trigger_wrapper</p>
        <p>multiple-select_trigger</p>
        <p>multiple-select_list_item_cross-icon</p>
      </div>
			
      <table className="peer-dependencies">
        <tbody>
          <tr>
            <td align="left">
              <span>peerDependencies</span>
            </td>
            <td align="left">
              <span>react: ^15.0.0 || ^16.0.0</span>
            </td>
            <td align="left">
              <span>react-dome: ^15.0.0 || ^16.0.0</span>
            </td>
          </tr>
        </tbody>
      </table>
    </Layout>
  )
}

export default IntroductionPage
