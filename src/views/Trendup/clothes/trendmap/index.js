import React, {Component} from 'react';
import { v4 as uuid } from 'uuid';
import {Sigma, RandomizeNodePositions, RelativeSize} from 'react-sigma';
import {
  Container,
  Grid,
  makeStyles,
  Card,
  Box,
  Typography,
  CardContent
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
    
    fetch('http://49.50.164.37:6001/node')
      .then(response => response.json())
      .then(data => {this.setState(this.state.myGraph[0]["nodes"] = data.data)}
      )
      .then(data => console.log(data))
      
    fetch('http://49.50.164.37:6001/edge')
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
      <Page title="Map">
      <div >
         
          <Grid>
          <div style={{padding: 20}}>
            <Grid >
              <Card
                style={{
                  backgroundColor: "blue" 
              }}
              >
               <CardContent>
                <Typography
                  align="center"
                  color="textPrimary" 
                  variant="h1"
                >
                  Trend Map
                </Typography>
                </CardContent>
                
              </Card>
            </Grid>
          </div>


          <div style={{padding: 20}}>
            <Card >
            
              {this.state.myGraph[0].edges.slice(0,1).map(edges =>{
                return (<ul key={uuid()}><Sigma
                graph={gr} settings={{drawEdges: true, clone: false,labelThreshold: true}}
                onClickNode={e=> window.open( `https://www.youtube.com/channel/${e.data.node["id"]}`, '_blank')}
              >
                <RelativeSize initialSize={50}/>
                <RandomizeNodePositions/>
              </Sigma></ul>)
              })}
            </Card>
        </div>

        <div style={{padding: 20}}>
        <Grid
              item
              lg={12}
              sm={12}
              xl={12}
              xs={12}
            >
              <Card style={{
        display: 'block',
        //width: '30vw',
        transitionDuration: '0.3s',
        height: '100%'
      }}>
              <Typography 
                variant="body1"
              >
                # 각 노드를 클릭하면 해당 채널로 이동합니다!
              </Typography>
              </Card>
            </Grid>
                  </div>
        </Grid>
      </div>
              </Page>

     
    );
  }
};


