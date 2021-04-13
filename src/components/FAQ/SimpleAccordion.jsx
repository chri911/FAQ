import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
// import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    fontFamily: 'Inter',
  },
  MuiAccordionroot: {
    "&.MuiAccordion-root:before": {
      backgroundColor: "white"
    }
  },
  heading: {
    fontFamily: 'Inter',
    fontSize: '22px',
    fontWeight: 700,
    lineHeight: '133%',
    letterSpacing: '-0.03em',
    margin: '36px 0 20px',
  },
  title: {
    margin: '36px 0',
    fontWeight: '800',
    fontSize: '42px',
    lineHeight: '125%',
    letterSpacing: '-0.03em',
    color: 'rgba(0, 0, 0, 0.87)',
    textAlign: 'left',
  },
  details: {
    fontFamily: 'Inter',
    fontSize: '16px',
    lineHeight: '150%',
    color: '#212121',
    margin: '36px 0',
  }
}));

// const AccordionSummary = withStyles({
//   root: {
//     // flexDirection: "column"
//   },
//   content: {
//     border: 'none',
//   },
//   expandIcon: {
//     marginRight: 0,
//     paddingTop: 0
//   }
// })(MuiAccordionSummary);

export const SimpleAccordion = ({data, header}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>
        {header}
      </h2>
      {data.map(accordion => {
        const {id, secondaryHeading, details} = accordion;
        return (
          <Accordion
            elevation={0} 
            classes={{
              root: classes.MuiAccordionroot
            }}
            expanded={expanded === id}
            onChange={handleChange(id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                {secondaryHeading}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography className={classes.details}>
                  {details}
                </Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  );
}
