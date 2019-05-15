import React from "react";
import PropTypes from 'prop-types'
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

const colorOnHover = () => {

}

const styles = theme => ({

  
  root: {
    width: '100%',
  },
  panel: {
    backgroundColor: 'white',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    border: '1px solid transparent',
    '&:hover': {
    }
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    backgroundColor: 'white',
    fontFamily: 'Poppins, sans-serif',
    color: '#1b124e',
  },
  details: {
    color: '#1b124e',
    fontSize: '1.1em',
  },
  expandButton: {
    color: '#1b124e',
  }
});

class DisplayTips extends React.Component { 
    constructor(props){
        super(props)
        
        this.state = {
            expanded: "",

        }
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
          expanded: expanded ? panel : false,
        });
      };
    
    handleHover = event => {
        this.setState({
          hovered: event.target.id
        })
    }

    render() {
        const { expanded } = this.state;
        const { classes } = this.props
  
        return(this.props.allTips.map((tip, i) => {
            if(tip.tip_category == this.props.selectedTipcat){     
                return(
                    <div onHover={this.handleHover} id={i} key={i} className='tipPanels'>
                        <div className={classes.root}>
                        <ExpansionPanel expanded={expanded === `panel${i}`} onChange={this.handleChange(`panel${i}`)} >
                            <ExpansionPanelSummary className={classes.panel} expandIcon={<ExpandMoreIcon className={classes.expandButton} />} >
                                <Typography className={classes.heading}>
                                        {tip.tip_title}
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography className={classes.details}>
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

DisplayTips.propTypes = {
  classes: PropTypes.object.isRequired,
};
    
export default withStyles(styles)(DisplayTips)