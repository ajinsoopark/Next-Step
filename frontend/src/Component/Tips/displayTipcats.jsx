import React from "react";
import DisplayTips from "./displayTips"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const DisplayTipcats = ({ allTipcats, allTips, selectedTipcat, handleClick, tabIndex }) => {

    const tipTabs = allTipcats.map(tipObj => {
        return <Tab key={tipObj.id}>{tipObj.tipcat}</Tab>
    })

    const tipPanels = allTipcats.map(tipObj => {
        return (
            <TabPanel key={tipObj.id}>
                <DisplayTips
                 allTips={allTips}
                 selectedTipcat={selectedTipcat}/>
            </TabPanel>
        )
    })

    return(
        <div className='tipContainer'>
            <Tabs selectedIndex={tabIndex} onSelect={index => handleClick(index)}>
                <TabList>
                    {tipTabs}
                </TabList>
                {tipPanels}
            </Tabs>
        </div>
    )
}


export default DisplayTipcats;