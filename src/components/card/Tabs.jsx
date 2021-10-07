import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DeckIcon from '@material-ui/icons/Deck';
import PaymentIcon from '@material-ui/icons/Payment';
import { VpnKeySharp } from '@material-ui/icons';
import OrderCard from './OrderCard';
import { colors } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
});

export default function MenuTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<DeckIcon/>} colors = "primary" label="Relax" />
        <Tab icon={<PaymentIcon />} label="Earn" />
      </Tabs>
      {value == 0  &&
        <OrderCard/>||
        <h2>
          Order Gardener Content
        </h2>
      }
    </Paper>
  );
}
