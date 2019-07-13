import React from "react"
import Example from '../../components/example';
const md = `

class YourWrapperComponent extends Component {
  initialunSelectedItems = 
    [
      { value: 1, label: 'react' },
      { value: 2, label: 'reactnative' },
      { value: 3, label: 'nodejs' },
      { value: 4, label: 'redux' },
      { value: 5, label: 'mobx' }
    ];
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
  }

 onInputChange = (text) => {
  if(text === '') {
   this.setState({unSelectedItems: this.initialunSelectedItems});
  } else {
    this.setState({unSelectedItems: this.initialunSelectedItems.filter((item) => item.indexOf(text) > -1)}); 
  }
}

  render() {
    const { selectedItems, unSelectedItems } = this.state;
    return (
        <MultipleSelect
          selectedItems={selectedItems}
          unSelectedItems={unSelectedItems}
          onChange={this.onChange}
          onInputChange={this.onInputChange}
        />
    );
  }
}
`
const Search = () => {
	return (
		<Example
		title={() => <h1>Search</h1>}
		code={md}
			className="search"
			description="your data can be a alot so search them whatever you want."
		/>
	)
}
export default Search
