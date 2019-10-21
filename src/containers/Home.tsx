import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HeaderImage from '../components/HeaderImage';
import HeaderToolbar from '../components/HeaderToolbar';
import { headerToolbarProps } from '../constants/props';
import MembersCardList from '../components/MembersCardList';
import Footer from '../components/Footer';
import { PublicEnv } from '../constants/environment';
import memberModule, { useMembers } from '../redux/modules/memberModule';

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

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(memberModule.actions.postFetchMembersRequest());
  }, [dispatch]);

  const classes = useStyles({});
  const publicEnv: PublicEnv = { appUrl: 'http://localhost:3000' };
  const memberState = useMembers().member;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>nekochans</Paper>
        </Grid>
      </Grid>
      <HeaderToolbar {...headerToolbarProps()} />
      <HeaderImage {...publicEnv} />
      {memberState.members instanceof Array ? (
        <MembersCardList {...{ members: memberState.members }} />
      ) : (
        ''
      )}
      <Footer />
    </div>
  );
};

export default Home;
