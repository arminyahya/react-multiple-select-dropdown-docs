import React from "react"
import Example from "../../components/example"
const md = `
const MultipleSelectWithCustomeItem = props => (
  <MultipleSelect
    selectedItems={selectedItems}
    unSelectedItems={unSelectedItems}
    onChange={this.onChange}
    renderSelectedItem={item => value === something ? <div className="special-item">{item.label}</div> : <div>{item.label}</div>}
  />)
`
const CustomeList = () => {
  return (
    <Example
      title={() => <h1>CustomeList</h1>}
      code={md}
      className="custome-list"
      description="........................"
    />
  )
}
export default CustomeList
