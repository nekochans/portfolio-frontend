import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HeaderImage from '../components/HeaderImage';
import HeaderToolbar from '../components/HeaderToolbar';
import { headerToolbarProps } from '../constants/props';
import MembersCardList from '../components/MembersCardList';
import Footer from '../components/Footer';
import fetchMembers from '../domain/members';
import { PublicEnv } from '../constants/environment';

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

const IndexPage = () => {
  const classes = useStyles({});
  const publicEnv: PublicEnv = { appUrl: 'http://localhost:3000' };
  const members = fetchMembers();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>nekochans</Paper>
        </Grid>
      </Grid>
      <HeaderToolbar {...headerToolbarProps()} />
      <HeaderImage {...publicEnv} />
      <MembersCardList {...{ members }} />
      <Footer />
    </div>
  );
};

export default IndexPage;
