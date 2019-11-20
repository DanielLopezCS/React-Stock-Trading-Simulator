import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';




const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));




export default function MarketBuy(props) {
  
  /*
  onChange = (e)=>{

    this.setState({amount:e.target.value})

  }
  handleClick=(percent)=>{
    this.setState({amount:Math.floor(((percent/100)*this.state.totalUSD)/(this.props.price))});
  }
  */

 const [amount, setAmount] = useState('');
 const [totalUSD] = useState(10000);
 
 const handleClick=(percent)=>{
  setAmount(    Math.floor( ((percent/100)*totalUSD)/(props.price)  )      );
  }
  const onChange = (e)=>{

    setAmount(e.target.value);

  }
  const handleSubmit = (e)=>{
    alert("Example Buy Complete");
  }
    const classes = useStyles;
    return (
      <div>
     
  
  <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
  
      <Typography component="h1" variant="h5">
        Market Buy {props.selected} 
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant='filled'
          margin="normal"
          required
          fullWidth
          id="email"
          label="Price(Per Share)"
          name="email"
          autoComplete="email"
          
          value={'$'+props.price}
          
        />
               <TextField
          variant='filled'
          margin="normal"
          required
          fullWidth
          id="total"
          label="Total(In USD)"
          name="total"
          value={'$'+(props.price*amount)}
          
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Amount"
          placeholder='Enter Shares'
          id="password"
          autoComplete="current-password"
          value={amount}
          onChange={onChange}
        />
  
  <Grid item xs={12} md={6}>
      <Grid container spacing={4  } direction="column" alignItems="center">
    
        <Grid item>
          <ButtonGroup
            variant="outlined"
            color="primary"
            aria-label="full-width contained primary button group"
          >
            <Button onClick={()=>handleClick(25)} >25%</Button>
            <Button onClick={()=>handleClick(50)}>50%</Button>
            <Button onClick={()=>handleClick(75)}>75%</Button>
            <Button onClick={()=>handleClick(100)}>100%</Button>
          </ButtonGroup>
        </Grid>
       
      </Grid>
    </Grid>

        <Button
      
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick = {()=>handleSubmit()}
        >
          Buy
        </Button>
      
      </form>
    </div>
   
  </Container>
      </div>
    );
  }


