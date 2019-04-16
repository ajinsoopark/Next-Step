import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

class Selection extends Component {
constructor (props) {
  super(props)
  
}


  render () {
    return (
        <>
          <Tabs selectedIndex={this.props.tabIndex} onSelect={tabIndex => this.props.TabSelectedChange(tabIndex)}>

          <TabList> 
          <Tab> Answers </Tab>
          <Tab> Reviews </Tab>
          </TabList>

          <TabPanel> 
          <h1> THis is 1</h1>
          </TabPanel>
          
          <TabPanel> 
          <h1> THis is </h1>
          </TabPanel>
          
          
          </Tabs>
        </>
    )
  }
}

export default Selection