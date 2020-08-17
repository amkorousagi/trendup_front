import React, {Component} from 'react';
import {Sigma, RandomizeNodePositions, RelativeSize} from 'react-sigma';
import {
  Container,
  Grid,
  makeStyles,
  Card,
  Box
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
//import MAP from './Map'
//const loadJsonFile = require('load-json-file');
//const writeJsonFile = require('write-json-file');

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

export default class Trendup extends Component {
  //const classes = useStyles();

  constructor(props){
    super(props);
    this.state = {
      myGraph: [{
        nodes: [],
        edges:[]
      }]
      
    }
    //this.state = loadJsonFile('./data.json')
  }
  //let myGraph = {nodes:[{id:"n1", size:1, label:"alice"},{id:"n2", size: 1, label:"rabit"}, {id:"n3", size: 10, label:"me"}],
  // edges:[{id:"e1", source:"n1", target:"n2", size:5}, {id:"e2", source:"n2", target:"n3", size:1}]}

  async componentDidMount() {
    
    fetch('http://localhost:4000/node')
      .then(response => response.json())
      .then(data => {this.setState(this.state.myGraph[0]["nodes"] = data.data)}
      )
      .then(data => console.log(data))
      
    fetch('http://localhost:4000/edge')
      .then(response => response.json())
      .then(data => {this.setState(this.state.myGraph[0]["edges"] = data["data"])}
      )
      .then(data => console.log(this.state["myGraph"]))
      .then(data => this.setState({}))
      .then(data => console.log("14",this.state["myGraph"][0]))
      
      
      //Sigma.refresh()
     
    
  }


  render(){
    var gr = this.state.myGraph[0]
    console.log("20",this.state["myGraph"][0])
    return (
      <div>
        <ul>
          
          {this.state.myGraph[0].edges.slice(0,1).map(edges =>{
            return (<Sigma
            graph={gr} settings={{drawEdges: true, clone: false,labelThreshold: true}}
            onClickNode={e=> window.open( `https://www.youtube.com/channel/${e.data.node["id"]}`, '_blank')}
          >
            <RelativeSize initialSize={50}/>
            <RandomizeNodePositions/>
          </Sigma>)
          })}
        </ul>
      </div>


      /*
      <div>
        <ul>
          
          {this.state.myGraph[0].nodes.slice(0,1).map(node =>{
            return (<Sigma
            graph={gr} settings={{drawEdges: true, clone: false,labelThreshold: true}}
            onClickNode={e=> window.open( `https://www.youtube.com/channel/${e.data.node["id"]}`, '_blank')}
          >
            <RelativeSize initialSize={50}/>
            <RandomizeNodePositions/>
          </Sigma>)
          })}
        </ul>
      </div>
        */
      /*
      <div>
        
          {this.state.myGraph.map(e =>{
            return  (<Sigma
            graph={e} settings={{drawEdges: true, clone: false,labelThreshold: true}}
            onClickNode={e=> window.open( `https://www.youtube.com/channel/${e.data.node["id"]}`, '_blank')}
          >
            <RelativeSize initialSize={50}/>
            <RandomizeNodePositions/>
          </Sigma>)
          })}
        
      </div>
      */
      /*
      <div>
        <ul>
          
          {this.state.myGraph[0].nodes.map(node =>{
            return <li key={`${node.id}`}>{gr.nodes[0].label}</li>
          })}
        </ul>
      </div>
          
         /*
      <div>
        <ul>
          {this.state.myGraph[0].nodes.map(node =>{
            return <div>{node.label}</div>
          })}
        </ul>
      </div>
      */
      
      /*
        <Container maxWidth={false}>
          
          
          <Box mt={3}>
            <Results customers={this.state["myGraph"]}/>
                {console.log("13",this.state["myGraph"])}
          </Box>
        </Container>
        */
  
    );
  }
};


