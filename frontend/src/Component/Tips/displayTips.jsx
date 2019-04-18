import React from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class DisplayTips extends React.Component { 
    constructor(props){
        super(props)
        
        this.state = {
            expanded: ""
        }
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
          expanded: expanded ? panel : false,
        });
      };

    render() {
        console.log("this is PROPS: ", this.props)
        const { expanded } = this.state;

        return(this.props.allTips.map((tip, i) => {
            // console.log("THIS IS TIP: ", tip)
            console.log("THIS IS TIP_category: ", tip.tip_category)
            if(tip.tip_category == this.props.selectedTipcat){     
                return(
                    <div key={i}>
                        <div >
                        <ExpansionPanel expanded={expanded === `panel${i}`} onChange={this.handleChange(`panel${i}`)}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={tip.tip_title}><div>{tip.tip_title}</div></Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                <div>{tip.tip_body}</div>
                                </Typography>
                            </ExpansionPanelDetails>
                        </ ExpansionPanel>
                        </div>
                    </div>
                    )
                }
            }))
        }
    }
    
    // <p>{tip.tip_title}</p>

// const DisplayTips = ({ allTips, selectedTipcat }) => {

    
// }