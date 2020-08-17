import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import {
  Box,
  Container,
  makeStyles,
  Button,
  Grid,
  Card,
  Typography
} from '@material-ui/core';
import Page from 'src/components/Page';
import { Rating } from '@material-ui/lab';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js';
import typography from 'src/theme/typography';
//import data from './data';

const graph_ex = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fillColor: 'rgba(220,220,220,0.2)',
      strokeColor: 'rgba(220,220,220,1)',
      pointColor: 'rgba(220,220,220,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(220,220,220,1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: 'My Second dataset',
      fillColor: 'rgba(151,187,205,0.2)',
      strokeColor: 'rgba(151,187,205,1)',
      pointColor: 'rgba(151,187,205,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(151,187,205,1)',
      data: [28, 48, 40, 19, 86, 27, 90],
    },
  ]
}

const graph_raw = {
  labels: [
    "Jun-18",
    "Jul-18",
    "Aug-18",
    "Sep-18",
    "Oct-18",
    "Nov-18",
    "Dec-18",
    "Jan-19",
    "Feb-19",
    "Mar-19",
    "Apr-19",
    "May-19",
    "Jun-19",
    "Jul-19",
    "Aug-19",
    "Sep-19",
    "Oct-19",
    "Nov-19",
    "Dec-19",
    "Jan-20",
    "Feb-20",
    "Mar-20",
    "Apr-20",
    "May-20",
    "Jun-20"
    ],
  datasets: 
    [{
      label: "매출액","fillColor":"rgba(220,220,220,0.2)","strokeColor":"rgba(220,220,220,1)","pointColor":"rgba(220,220,220,1)","pointStrokeColor":"#fff","pointHighlightFill":"#fff","pointHighlightStroke":"rgba(220,220,220,1)",
      data: [
        29175,
        29790,
        27074,
        29172,
        34750,
        36383,
        35916,
        30896,
        28621,
        35380,
        34675,
        36378,
        33083,
        34255,
        31439,
        35306,
        39154,
        43365,
        40801,
        33507,
        32412,
        35413,
        35416,
        38402,
        38494
      ]
    }
    ]
  
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
      graph: graph_ex
    }
  }




 

  render(){


   
    const cardStyle = {
      display: 'block',
      //width: '30vw',
      transitionDuration: '0.3s',
      height: '7vw'
    }

    const options = {
      unit: "억 원",
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
        padding: '12'
      }
    }
    
    console.log(graph_ex)
    
    return(
    <Page title="Description">
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
            <div style={{padding:10}}>
            <Card style={{
                display: 'block',
                //width: '30vw',
                transitionDuration: '0.3s',
                backgroundColor: "blue" 
            }}>
              <div style={{padding:10}}>
              <Typography
                align ="center"
                color="textPrimary"
                variant="h1"
                margin
              >
                카테고리 분석 (의류)
              </Typography>
                </div>
            </Card>
            </div>
          </Grid>

         
          <Grid
            item
            lg={12}
            sm={12}
            xl={12}
            xs={12}
          >
            
              <div style={styles.graphContainer}>
              <Line data={graph_raw}
                options={options}
                width="600" height="250"/>
            </div>
           
          </Grid>
          
          <Grid
            item
            lg={12}
            sm={12}
            xl={12}
            xs={12}
          >
            
              <div  style={{padding:10}}>
                <Card>
                  <Typography
                      variant="body1"
                      color="textSecondary"
                      style={{display:"inline-block"}}
                  >
                    도소매 창업 기업은 온라인 거래 활성화 등으로 전년 대비 7.9% 늘어 기존의 증가세(1.7%)를 이어갔다
                  </Typography>
                  <br></br><br></br>
                  <Typography
                      variant="body1"
                      color="textSecondary"
                      style={{display:"inline-block"}}
                  >
                    2018 신규창업:308798, 2019 신규창업: 333246
                  </Typography>
                  <br></br>
                  <Typography
                      variant="body1"
                      color="textSecondary"
                      style={{display:"inline-block"}}
                  >
                    2018 폐업:    236533, 2019 폐업: 244321
                  </Typography>
              </Card>
            </div>
           
          </Grid>
          
         </Grid>
    </Container>
    </Page>
    );
    }
  
};

//export default CustomerListView;
