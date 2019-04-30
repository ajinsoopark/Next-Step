import React from "react";
import DisplayQuestions from "./displayQuestions"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import "./categories.css"
import "./questions.css"

const DisplayAllCategories = ({ userAnsweredList,allCategories, allQuestions, categoryIndex, handleChange, selectedCategory }) => {
    // let categoryList = allCategories.map((category, i) => {
    //     return(
    //             <button key = {i} className = "allButtons" type="button" onClick={handleChange} value={category.category}>{category.category}</button>
    //     )
    // })
    
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
            {/* <div className="categoryList"> */}
            <Tabs selectedIndex={categoryIndex} onSelect={tabIndex => handleChange(tabIndex)}>
            
                <TabList>
                    {categoryTabs}
                </TabList>
                <div className='displayQuestions'>
                    <div className='displayQuestionsChild'>
                        {categoryQuestions}
                    </div>
                </div>
            </Tabs>

            {/* </div> */}
            {/* <div className="displayQuestions">
                <div className="displayQuestionsChild">
                    <DisplayQuestions userAnsweredList = {userAnsweredList} allQuestions={allQuestions} selectedCategory={selectedCategory} />
                </div>
            </div> */}
        </div>
    )
}


export default DisplayAllCategories;