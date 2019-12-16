
export const valueLabel_md = `
type ValueLabel  = {
  value: any;
  label: string;
}

// or 

interface ValueLabel {
  value: any;
  label: string;
}
`

export const gettingStarted_md = `

import React, { Component } from 'react'
import MultipleSelect from 'react-multiple-select-dropdown';
import 'react-multiple-select-dropdown/dist/index.css';

class YourWrapperComponent extends Component {
  state = {
    selectedOptions: [],
    options: [
    { value: 1, label: 'react' },
    { value: 2, label: 'reactnative' },
    { value: 3, label: 'nodejs' },
    { value: 4, label: 'redux' },
    { value: 5, label: 'mobx' }
    ]
  }

  onChange = (selectedOptions) => {
    this.setState({ selectedOptions: selectedOptions });
  }

  render() {
  const { selectedOptions, options } = this.state;
  return (
    <div>
      <MultipleSelect
        selectedOptions={selectedOptions}
        options={options}
        onChange={this.onChange}
      />
    </div>
);}
`

export const defaultTheme_md = `
const DefaultMultipleSelect = props => (
  return (
    <MultipleSelect
      selectedOptions={selectedOptions}
      options={options}
      onChange={this.onChange}
      theme={'default'}
    />)
`

export const darkTheme_md = `
const DarkMultipleSelect = props => (
  <MultipleSelect
    selectedOptions={selectedOptions}
    options={options}
    onChange={this.onChange}
    theme={'dark'}
  />)
`


export const responsive_md = `
const ResponsiveMultipleSelect = props => (
  <MultipleSelect
    selectedOptions={selectedOptions}
    options={options}
    onChange={this.onChange}
    breakPoint={575}
  />)
`

export const search_md = `

class YourWrapperComponent extends Component {
  initialOptions = 
  [
    { value: 1, label: 'react' },
    { value: 2, label: 'reactnative' },
    { value: 3, label: 'nodejs' },
    { value: 4, label: 'redux' },
    { value: 5, label: 'mobx' }
  ];
  state = {
  selectedOptions: [],
  options: [...initialOptions]
  }
  
  onChange = (selectedOptions) => {
    this.setState({ selectedOptions: selectedOptions });
  }
  
  onInputChange = (text) => {
    if(text === '') {
    this.setState({options: this.initialOptions});
    } else {
    this.setState({options: this.initialOptions.filter((option) => option.indexOf(text) > -1)}); 
    }
  }
  
  render() {
    const { selectedOptions, options } = this.state;
    return (
      <MultipleSelect
        selectedOptions={selectedOptions}
        options={options}
        onChange={this.onChange}
        onInputChange={this.onInputChange}
      />
  );
  }
}
`

export const customeList_md = `
const MultipleSelectWithCustomeItem = props => (
  <MultipleSelect
    selectedOptions={selectedOptions}
    options={options}
    onChange={this.onChange}
    renderSelectedOption={option => value === something ? <div className="special-item">{option.label}</div> :
    <div>{option.label}</div>}
/>)`

export const withPopper_md = `

import * as React from "react";
import { DesktopList, MobileList } from 'react-multiple-select-dropdown';
import { Manager, Reference, Popper } from 'react-popper';
import 'react-multiple-select-dropdown/dist/index.css';

class YourWrapperComponent extends React.Component {
  initialOptions =
    [
      { value: 1, label: 'react' },
      { value: 2, label: 'reactnative' },
      { value: 3, label: 'nodejs' },
      { value: 4, label: 'redux' },
      { value: 5, label: 'mobx' }
    ];
  state = {
    selectedOptions: [],
    options: [...this.initialOptions]
  }

  onChange = (selectedOptions) => {
    this.setState({ selectedOptions: selectedOptions });
  }


  render() {
    const { selectedOptions, options } = this.state;
    return (
      <Manager>
        <Reference>
          {({ ref }) => (
            <span type="button" ref={ref}>
              look list is under me
            </span>
          )}
        </Reference>
        <Popper placement="bottom">
          {({ ref, style, placement, arrowProps }) => (
            <div ref={ref} style={style} placement={placement}>
              <DesktopList
                selectedOptions={selectedOptions}
                options={options}
                onChange={this.onChange}
              />
            </div>
          )}
        </Popper>
      </Manager>
    );
  }
}

`