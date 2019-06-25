import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

interface Props {
  sections: { displayName: string; url: string }[];
}

const HeaderToolbar = ({ sections }: Props) => {
  const classes = useStyles();

  return (
    <Toolbar
      component="nav"
      variant="dense"
      className={classes.toolbarSecondary}
    >
      {sections.map(section => (
        <Link
          color="inherit"
          noWrap
          key={section.displayName}
          variant="body2"
          href={section.url}
          className={classes.toolbarLink}
        >
          {section.displayName}
        </Link>
      ))}
    </Toolbar>
  );
};

export default HeaderToolbar;
