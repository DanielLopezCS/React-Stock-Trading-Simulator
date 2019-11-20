import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems } from '../components/Common/SidePanel/listItems';

import Table from '../components/Market/Table';
import Button from '@material-ui/core/Button';


import Candle from '../components/Market/Chart/index';
import Stock from '../components/Market/Chart/Stock';
import TradeHistory from '../components/Market/TradeHistory';
import MarketBuy from '../components/Market/MarketBuy';
import MarketSell from '../components/Market/MarketSell';




import ExampleList from '../ExampleAPI/ExampleList';
import ExampleTradeHistory from '../ExampleAPI/ExampleTradeHistory';

import exampleRequest  from '../ExampleAPI/ExampleRequest';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Poor Exchange (Personal Project)
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow:1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard(props) {


  const classes = useStyles();


  const [open, setOpen] = React.useState(true);
  const [data] = React.useState(exampleRequest);
  const [selected, setSelected] = React.useState('ABL');

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const selectStock=(selectedStock)=>{
    setSelected(selectedStock);
   
  }



  return (

    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)} color='primary'>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
         Poor Exchange
          </Typography>

       
          <Button color='inherit' variant="outlined" className={classes.button} onClick={()=>props.history.push('/signin')} >
       
     
        Sign In
      

       </Button>
      
        <Button variant="outlined" color="inherit" className={classes.button} onClick={()=>props.history.push('/signup')}>
        Sign Up
      </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={1} >

          <Grid item xs={12} md={12} lg={12}>

             <Stock selected={selected} change={-14} high={26} low={2} volume ={24000} usd={10000} />
             
          </Grid>
         
           {/* Recent Deposits */}
           <Grid item xs={12} md={12} lg={2}>
              
           <TradeHistory ExampleTradeHistory = {ExampleTradeHistory}/>
            </Grid>

            {/* Chart */}
            <Grid item xs={12} md={12} lg={8} >
              
              <Paper>
              <Candle  data = {data}/>
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={12} lg={2}>
            <Table ExampleList={ExampleList} selectStock = {(select)=>selectStock(select)} />

             
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12} lg ={6}>
              <Paper className={classes.paper}>
                                <MarketBuy price={14} selected={selected} />

              </Paper>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Paper className={classes.paper}>
              <MarketSell price={14} selected={selected}/>

              </Paper>
            </Grid>

          </Grid>
        </Container>
        <Copyright />
      </main>
    </div>
  );
}
