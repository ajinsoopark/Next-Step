import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";


const Selection = (props) =>{
  return(
  <>
  <Tabs selectedIndex={props.tabIndex} onSelect={tabIndex => props.TabSelectedChange(tabIndex)}>

  <TabList> 
  <Tab> Answers </Tab>
  <Tab> Reviews </Tab>
  </TabList>

  <TabPanel> 
  <h1> THis is 1</h1>
  </TabPanel>
  
  <TabPanel> 
  <h1> THis is 2</h1>
  </TabPanel>
  
  
  </Tabs>
  </>
  )

}

export default Selection