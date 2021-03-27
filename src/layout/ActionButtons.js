import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '56px',
    position: 'fixed',
    bottom: '0px',
    display: 'block',
    lineHeight: '42px',
  },
  continueBtn: {
    display: 'block',
    fontSize: '18px',
    float: 'left',
    textDecoration: 'none',
    width: '50%',
    height: '56px',
    textAlign: 'center',
    paddingTop: '8px',
    backgroundColor: 'orange',
  },
  backBtn: {
    display: 'block',
    fontSize: '18px',
    textDecoration: 'none',
    width: '50%',
    height: '56px',
    textAlign: 'center',
    paddingTop: '8px',
    backgroundColor: 'white',
    borderTop: '1px solid #ddd',
    borderLeft: '1px solid #ddd',
    boxSizing: 'border-box',
    float: 'right'
  }
});

const ActionButtons = ({ showOkButton, okButtonText, onOk, onCancel }) => {
  const classes = useStyles();

  return <div className={classes.root}>
    {
      showOkButton &&
      <div className={classes.continueBtn} onClick={onOk} >
        {okButtonText}
      </div>
    }
    {
      <div className={classes.backBtn} onClick={onCancel} >
        Back
    </div>
    }
  </div>
}

export default ActionButtons;