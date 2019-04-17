import React from "react";

const DisplayTips = ({ allTips, selectedTipcat }) => {
    console.log("SELECTED TiPCaT: ", selectedTipcat)
    return(allTips.map((tip, i) => {
        // console.log("THIS IS TIP: ", tip)
        console.log("THIS IS TIP_category: ", tip.tip_category)
        if(tip.tip_category == selectedTipcat){     
            return(
                <div key={i}>
                    <div >
                         <div>{tip.tip_title}</div>
                    </div>
                </div>
                )
            }
    }))
}

export default DisplayTips;