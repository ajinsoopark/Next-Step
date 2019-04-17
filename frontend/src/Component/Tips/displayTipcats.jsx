import React from "react";
import DisplayTips from "./displayTips"


const DisplayTipcats = ({ allTipcats, allTips, selectedTipcat, handleClick }) => {
    console.log("THIS IS ALL TIPCATS: ", allTipcats)
    let tipcatList = allTipcats.map((tipcat, i) => {
        return(
            <div key={i} className="allButtons">
                <button type="button" onClick={handleClick} value={tipcat.id}>{tipcat.tipcat}</button>
            </div>
               
        )
    })

    return(
        <div>
            <div className="categoryList">
                {tipcatList}
            </div>
            <div >
                <div >
                    <DisplayTips allTips={allTips} selectedTipcat={selectedTipcat} />
                </div>
            </div>
        </div>
    )
}


export default DisplayTipcats;