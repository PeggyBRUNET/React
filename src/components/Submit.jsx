import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Submit() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Button variant="contained" color="primary" size="large" type="submit">
        <h5> &ensp; Envoi definitif &ensp; </h5>
      </Button>
        </div>
  );
}