import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { SimpleAccordion } from './SimpleAccordion';
import { dataGeneral, dataPayment, dataTransaction, dataVerification } from '../../Content';
// import { Panel } from './Panel';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div 
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'sticky',
    top: '0',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
    overflow: 'initial',
    padding: 0,
  },
  tabs: {
    fontFamily: 'Inter',
    borderRight: `1px solid ${theme.palette.divider}`,
    overflow: 'initial',
    
  },
  tab: {
    fontWeight: '600',
    fontFamily: 'Inter',
    
  }
}));



export const VerticalTabs = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="General questions" {...a11yProps(0)} className={classes.tab}/>
        <Tab label="Payment questions" {...a11yProps(1)} className={classes.tab}/>
        <Tab label="Transaction" {...a11yProps(2)} className={classes.tab}/>
        <Tab label="Verification" {...a11yProps(3)} className={classes.tab}/>
      </Tabs>
      <TabPanel value={value} index={0}>
        <SimpleAccordion data={dataGeneral} header="General questions"/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SimpleAccordion data={dataPayment} header="Payment questions"/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SimpleAccordion data={dataTransaction} header="Transaction"/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <SimpleAccordion data={dataVerification} header="Verification"/>
      </TabPanel>
    </div>
  );
}