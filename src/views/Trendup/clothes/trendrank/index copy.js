import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
//import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));
//const classes = useStyles();
  
//customers = []
export default class CustomerListView extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      customers: []
    }
  }
  
  //console.log("hello")
  async componentDidMount() {
     fetch('http://localhost:4000/products')
      .then(response => response.json())
      .then(data => {this.setState({customers:data.data})})
    //const data = await response.json();
    //console.log(data);
    console.log(this);
    //this.state["customers"] = data.data
    //console.log(this)
    //this.setState({customers: data.data })
    /*
    fetch('http://localhost:4000/products')
      .then(response => response.json())
      .then(response => this.setState({customers: response.data.map(
        
      customer => {
        return{
          id: uuid(),
          rank: customer.rank,
          keyword: customer.keyword,
          gender: customer.gender,
          date_: customer.date_,
          score: customer.score
        } 
        
       }
    


      )}))
      */
  }
  
  //console.log("print")
  //console.log("2",customers)
 

  render(){
    return (
     
        <Container maxWidth={false}>
          <Toolbar />
          <Box mt={3}>
            
            <Results customers={this.state["customers"]} />
            {console.log(this.state["customers"])}
          </Box>
        </Container>
     
      
    );
  }
};

//export default CustomerListView;
