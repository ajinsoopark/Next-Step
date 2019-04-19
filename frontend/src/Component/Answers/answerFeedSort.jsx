import React, { Component } from 'react'
import { Tabs, TabList } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

class AnswerFeedSort extends Component {

    render () {
        const { categoryTabIndex, 
                categoryTabSelection, 
                createCategoryTabs, 
                createSortTabs
                } = this.props

        return (
            <Tabs 
             selectedIndex={categoryTabIndex} 
             onSelect={(tabIndex) => {
                categoryTabSelection(tabIndex)
             }}>

                <TabList> 
                    {createCategoryTabs()}
                </TabList>
                <div className='pickSort'>
                    Sorting Option
                </div>
                {createSortTabs()}
            </Tabs>
        )
    }
}

export default AnswerFeedSort