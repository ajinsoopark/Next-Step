import React from "react";
import DisplayQuestions from "./displayQuestions"
import "./categories.css"
import "./questions.css"

const DisplayAllCategories = ({ allCategories, allQuestions, selectedCategory, handleChange }) => {
    let categoryList = allCategories.map((category, i) => {
        return(
            <div key={i} className="allButtons">
                <button type="button" onClick={handleChange} value={category.category}>{category.category}</button>
            </div>
               
        )
    })

    return(
        <div>
            <div className="categoryList">
                {categoryList}
            </div>
            <div className="displayQuestions">
                <div className="displayQuestionsChild">
                    <DisplayQuestions allQuestions={allQuestions} selectedCategory={selectedCategory} />
                </div>
            </div>
        </div>
    )
}


export default DisplayAllCategories;