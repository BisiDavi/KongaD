import React from 'react';
import {
  makeStyles, AppBar, Toolbar,InputBase
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { LazyLoadImage } from '../../imports';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  AppBar: {
    background: '#ed017f !important'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100vh',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    right: '0',
    borderBottomRightRadius: '5px',
    borderTopRightRadius: '5px',
    alignItems: 'center',
    backgroundColor: '#fba100',
    color: 'white',
    justifyContent: 'center',
  },
  inputRoot: {
    color: '#4a4a4a',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50ch',
    },
  },
  logo: {
    pointer: 'cursor'
  },
  storeLocator: {
    '&:hover': {
      backgroundColor: 'white'
    }
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar className={classes.AppBar} position="static">
        <Toolbar>
          <LazyLoadImage
            publicId="konga/konga_logo_f27l0w.webp"
            className={classes.logo}
            height="40"
            width="128"
          />
          <div className={classes.storeLocator}>
            <p>Store Locator</p>
          </div>
          <div className={classes.help}>

          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search for products brands and categories"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{
                'aria-label': 'search'
              }}
            />
          </div>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>    
    </div>
  );
}
