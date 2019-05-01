import React from "react";
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ExpansionPanel = withStyles({
    root: {
      border: '1px solid rgba(0,0,0,.125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
    },
    expanded: {
      margin: 'auto',
    },
  })(MuiExpansionPanel);
  
  const ExpansionPanelSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0,0,0,.03)',
      borderBottom: '1px solid rgba(0,0,0,.125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(props => <MuiExpansionPanelSummary {...props} />);
  
  ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';
  
  const ExpansionPanelDetails = withStyles(theme => ({
    root: {
      padding: theme.spacing.unit * 2,
    },
  }))(MuiExpansionPanelDetails);

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
        const { expanded } = this.state;

        return(this.props.allTips.map((tip, i) => {
            if(tip.tip_category == this.props.selectedTipcat){     
                return(
                    <div key={i} className='tipPanels'>
                        <div className='panel'>
                        <ExpansionPanel expanded={expanded === `panel${i}`} onChange={this.handleChange(`panel${i}`)} >
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
                                <Typography className="tipTypography">
                                        {tip.tip_title}
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                {tip.tip_body}
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
    
