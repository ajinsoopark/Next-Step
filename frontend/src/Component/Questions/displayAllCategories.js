import React from "react";
import DisplayQuestions from "./displayQuestions"
import "./categories.css"
import "./questions.css"

const DisplayAllCategories = ({ userAnsweredList,allCategories, allQuestions, selectedCategory, handleChange }) => {
    let categoryList = allCategories.map((category, i) => {
        return(
                <button key = {i} className = "allButtons" type="button" onClick={handleChange} value={category.category}>{category.category}</button>
        )
    })

    return(
        <div>
            <div className="categoryList">
                {categoryList}
            </div>
            <div className="displayQuestions">
                <div className="displayQuestionsChild">
                    <DisplayQuestions userAnsweredList = {userAnsweredList} allQuestions={allQuestions} selectedCategory={selectedCategory} />
                </div>
            </div>
        </div>
    )
}


export default DisplayAllCategories;