import React from "react";
import DisplayTips from "./displayTips"


const DisplayTipcats = ({ allTipcats, allTips, selectedTipcat, handleClick }) => {
    let tipcatList = allTipcats.map((tipcat, i) => {
        return(
            <button key={i} className="allButtons" type="button" onClick={handleClick} value={tipcat.id}>
                {tipcat.tipcat}
            </button>       
        )
    })

    return(
        <div>
            <div className="categoryList">
                {tipcatList}
            </div>
            <div>
                <div className='tipsContainer'>
                    <DisplayTips allTips={allTips} selectedTipcat={selectedTipcat} />
                </div>
            </div>
        </div>
    )
}


export default DisplayTipcats;