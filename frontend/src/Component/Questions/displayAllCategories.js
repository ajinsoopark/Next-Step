import React from "react";
import DisplayQuestions from "./displayQuestions"

const DisplayAllCategories = ({ allCategories, allQuestions, selectedCategory, handleChange }) => {
    let categoryList = allCategories.map((category, i) => {
        return(
        <div key={i}>
            <button type="button" onClick={handleChange} value={category.category}>{category.category}</button>
        </div>
        )
    })

    return(
        <div>
            <div>
                {categoryList}
            </div>
            <div>
                <DisplayQuestions allQuestions={allQuestions} selectedCategory={selectedCategory} />
            </div>
        </div>
    )
}


export default DisplayAllCategories;