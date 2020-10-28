import React from 'react';
//import ReactDOM from'react-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../App.css';
import {NavLink} from'react-router-dom';


const useStyles = makeStyles((theme: Theme) =>
  {
        return createStyles({
            root: {
                flexGrow: 1,
            },
            paper: {
              padding: theme.spacing(2),
              textAlign: 'center',
              color: theme.palette.text.secondary,
            },
            menuButton: {
                marginRight: theme.spacing(2),
            },
        });
    },
);

 function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            School Register
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

 function FullWidthGrid() {
  const classes = useStyles();
  console.log(window.location.pathname); //yields: "/js" (where snippets run)
  console.log(window.location.href);   
  // const nameHead = (props.path);
  console.log('hai');
  console.log(NavLink.to);
  console.log('hello');
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={12}>
          <Paper className={classes.paper}> <div className="barHeader">
            <NavLink to="/" className="main-nav" activeClassName="main-nav-active">Home Page</NavLink></div></Paper>
          <Paper className={classes.paper}> <div className="barHeader">
            <NavLink to="/Student" className="main-nav" activeClassName="main-nav-active">Students</NavLink></div></Paper>
          <Paper className={classes.paper}> <div className="barHeader">
            <NavLink to="/Teacher" className="main-nav" activeClassName="main-nav-active">Teacher</NavLink></div></Paper>

        </Grid>
        
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div className="barHeader">
            <Link to="/">Home</Link></div>
            <div className="barHeader">
              <Link to="/Student">Student</Link></div>
              <div className="barHeader">
                <Link to="/Teacher">Teacher</Link>
            </div></Paper>
          <Paper className={classes.paper}><Link to="/Student">Student</Link></Paper>
          <Paper className={classes.paper}><Link to="/Teacher">Teacher</Link></Paper>
        </Grid>       */}
      </Grid>
    </div>
  );
}

export { DenseAppBar,FullWidthGrid };