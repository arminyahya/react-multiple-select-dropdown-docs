import React from "react"
import Example from "../../components/example"
import { customeList_md } from "../../mds";

const CustomeList = () => {
  return (
    <Example
      title={() => <h1>CustomeList</h1>}
      code={customeList_md}
      className="custome-list"
    />
  )
}
export default CustomeList
