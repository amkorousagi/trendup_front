import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import {
  Box,
  Container,
  makeStyles,
  Button,
  Grid,
  Card
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import { Rating } from '@material-ui/lab';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js';
//import data from './data';

function rating_mean_func(a) {
  var rating_mean;
  //5, 15, 25, 35 
  if(a > 35){
    rating_mean = 5;
  } else if(a > 25){
    rating_mean = 4;
  } else if(a >15){
    rating_mean = 3;
  } else if(a >5){
    rating_mean = 2;
  } else{
    rating_mean = 1;
  }
  return rating_mean
}

function rating_rms_func(a) {
  var rating_rms;
  //2,4,6,8 -rms
  if(a > 8){
    rating_rms = 1;
  } else if(a > 6){
    rating_rms = 2;
  } else if(a >4){
    rating_rms = 3;
  } else if(a >2){
    rating_rms = 4;
  } else{
    rating_rms = 5;
  }
  return rating_rms
}

function is_increasing_func(a) {
  if(a){
    return "검색도가 상승하는 추세입니다!"
  }
  else{
    return "검색도가 상승하는 추세가 아닙니다."
  }
}

function rating_algo_func(dict){
  var a = (dict.KNN< dict.SVM)? dict.SVM : dict.KNN;
  var rating_algo;
  //90,85,80,70
  if(a > 90){
    rating_algo = 5;
  } else if(a > 85){
    rating_algo = 4;
  } else if(a >80){
    rating_algo = 3;
  } else if(a >70){
    rating_algo = 2;
  } else{
    rating_algo = 1;
  }
  return rating_algo;
}


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
      customers: [],
      clicked_keyword: "",
      datafeature: [],
      mlacurracy: [],
      graph: []
    }
    this.handler = this.handler.bind(this)
  }
  handler(keyword){
    this.setState({
      clicked_keyword: keyword
    })
    fetch('http://localhost:4000/raw?keyword='+ keyword)
      .then(response => response.json())
      .then(data => {this.setState({graph:data.data})})


    fetch('http://localhost:4000/datafeature?keyword='+ keyword)
      .then(response => response.json())
      .then(data => {this.setState({datafeature:data.data})})


    fetch('http://localhost:4000/mlacurracy?keyword='+ keyword)
    .then(response => response.json())
    .then(data => {this.setState({mlacurracy:data.data})})
    
  }


  //console.log("hello")
  async componentDidMount() {
     fetch('http://localhost:4000/products')
      .then(response => response.json())
      .then(data => {this.setState({customers:data.data.map(
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
          
      )})})


    
  }

 

  render(){
    if(this.state["clicked_keyword"] == ""){
    return (
     
        <Container maxWidth={false}>
          <Toolbar />
          <Box mt={3}>
            
            <Results customers={this.state["customers"]} handler={this.handler} clicked_keyword={this.state["clicked_keyword"]} />
            {console.log(this.state["customers"], "keyword:",this.state["clicked_keyword"])}
          </Box>
        </Container>
     
      
    );
    }
    else{

      var df = this.state.datafeature[0]
      var ma = this.state.mlacurracy[0]


      console.log("re-reder",this.state.datafeature)
      const cardStyle = {
        display: 'block',
        //width: '30vw',
        transitionDuration: '0.3s',
        height: '7vw'
      }

      const options = {
        scaleShowGridLines: true,
        scaleGridLineColor: 'rgba(0,0,0,.05)',
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: true,
        scaleShowVerticalLines: true,
        bezierCurve: true,
        bezierCurveTension: 0.4,
        pointDot: true,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: true,
        datasetStrokeWidth: 2,
        datasetFill: true,
        legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
      }
      
      const styles = {
        graphContainer: {
          border: '1px solid black',
          padding: '15px'
        }
      }
        
      return(
      <Container maxWidth={false}>
        <Grid
         container
         spacing={5}
         >
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
                 height: '15vw',
                 backgroundColor: "blue" 
              }}>
                  {this.state.clicked_keyword}
              </Card>
            </Grid>
            <Grid
              item
              lg={12}
              sm={12}
              xl={12}
              xs={12}
            >
             {this.state.graph.map(x => {
               console.log("map",)
               return (
                <div style={styles.graphContainer}>
                <Line data={this.state.graph[0]}
                  options={options}
                  width="600" height="250"/>
              </div>
               )

             })}
            </Grid>
            <Grid
              item
              lg={12}
              sm={12}
              xl={12}
              xs={12}
            >
              <Card style={cardStyle}>
                  {this.state.datafeature.map(x => {
                    return (<div>
                      <div>1. 검색어 노출도</div>
                      <div>{`평균 검색도입니다 (100점 만점) ; ${df.mean}`}</div>
                      <Rating  defaultValue={rating_mean_func(df.mean)} size="large" />
                    </div>
                    )
                  })}
              </Card>
            </Grid>
         
            <Grid
              item
              lg={12}
              sm={12}
              xl={12}
              xs={12}
            >
              <Card style={cardStyle}>
              {this.state.datafeature.map(x => {
                    return (<div>
                      <div>2. 안정성</div>
                      <div>{`년을 주기로 얼마나 편차제곱합의 제곱근이 큰지를 알려줍니다 ; ${df.rms}`}</div>
                      <Rating  defaultValue={rating_rms_func(df.rms)} size="large" />
                    </div>
                    )
                  })}
              </Card>
            </Grid>
          
            <Grid
              item
              lg={12}
              sm={12}
              xl={12}
              xs={12}
            >
              <Card style={cardStyle}>
              {this.state.mlacurracy.map(x => {
                    return (<div>
                      <div>3. 주기성</div>
                      <div>년을 주기로 얼만큼 주기성을 갖는지 알려줍니다</div>
                      <div>{(ma.KNN < ma.SVM)?(`SVM algorithm: ${ma.SVM}`):(`KNN algorithm: ${ma.KNN}`)}</div>
                      <Rating  defaultValue={rating_algo_func(ma)} size="large" />
                    </div>
                    )
                  })}
              </Card>
            </Grid>
          
            <Grid
              item
              lg={12}
              sm={12}
              xl={12}
              xs={12}
            >
              <Card style={cardStyle}>
              {this.state.datafeature.map(x => {
                    return (<div>
                      <div>4. 추세</div>
                      <div>2016년 검색어 노출도 max값과 대비하여  뛰어넘은 적이 2번있는 자료인지 설명합니다</div>
                      <div>{is_increasing_func(df.is_increasing)}</div>
                    </div>
                    )
                  })}
              </Card>
            </Grid>
          
        </Grid>
      </Container>
      );
    }
  }
};

//export default CustomerListView;
