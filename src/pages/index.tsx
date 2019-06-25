import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HeaderImage from '../components/HeaderImage';
import HeaderToolbar from '../components/HeaderToolbar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const IndexPage: React.FC = () => {
  const classes = useStyles();
  const headerToolbarProps = {
    sections: [
      { displayName: 'WebService', url: '#' },
      { displayName: 'OSS', url: '#' },
      { displayName: 'Contact', url: '#' },
    ],
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>nekochans</Paper>
        </Grid>
      </Grid>
      <HeaderToolbar {...headerToolbarProps} />
      <HeaderImage />
    </div>
  );
};

export default IndexPage;
