import React from "react"
import Example from "../../components/example"
import { customeList_md } from "../../mds";
import { ExampleItemWrap } from '../../components/styled';

const CustomeList = () => {
  return (
    <ExampleItemWrap >

      <Example
        title={() => <h4>CustomeList</h4>}
        code={customeList_md}
        className="custome-list"
      />
    </ExampleItemWrap>
  )
}
export default CustomeList
