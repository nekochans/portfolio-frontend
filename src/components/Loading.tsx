import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    progressContent: {
      margin: theme.spacing(2),
    },
    progress: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const Loading: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.progress}>
      <CircularProgress className={classes.progressContent} />
      <p>Now Loading...</p>
    </div>
  );
};

export default Loading;
