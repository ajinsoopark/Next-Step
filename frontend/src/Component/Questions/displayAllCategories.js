import React from "react";
import DisplayQuestions from "./displayQuestions"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import "./categories.css"
import "./questions.css"

const DisplayAllCategories = ({ userAnsweredList,allCategories, allQuestions, categoryIndex, handleChange, selectedCategory }) => {
    
    const categoryTabs = allCategories.map(categoryObj => {
        return <Tab key={categoryObj.id}>{categoryObj.category}</Tab>
    })

    const categoryQuestions = allCategories.map(categoryObj => {
        return (
            <TabPanel key={categoryObj.id}>
                <DisplayQuestions 
                 userAnsweredList={userAnsweredList} 
                 allQuestions={allQuestions} 
                 selectedCategory={selectedCategory}/>
            </TabPanel>
        )
    })
    
    console.log(allCategories)

    return(
        <div>
            <Tabs selectedIndex={categoryIndex} onSelect={tabIndex => handleChange(tabIndex)}>
            <h2 className='pickCategory'>Pick a category</h2>
                <TabList>
                    {categoryTabs}
                </TabList>
                <div className='displayQuestions'>
                    <div className='displayQuestionsChild'>
                        {categoryQuestions}
                    </div>
                </div>
            </Tabs>
        </div>
    )
}


export default DisplayAllCategories;