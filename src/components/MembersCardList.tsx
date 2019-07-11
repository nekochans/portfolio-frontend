import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import { Member } from '../domain/members';

interface Props {
  members: Member[];
}

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 140,
    height: 140,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const MembersCardList = ({ members }: Props) => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Members</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={4} className={classes.mainGrid}>
        {members.map(member => (
          <Grid item key={member.githubUserName} xs={12} md={6}>
            <CardActionArea component="a" href={member.cvUrl}>
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      {member.githubUserName}
                    </Typography>
                  </CardContent>
                </div>
                <Hidden>
                  <CardMedia
                    className={classes.cardMedia}
                    image={member.githubPicture}
                    title={member.githubUserName}
                  />
                </Hidden>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MembersCardList;
