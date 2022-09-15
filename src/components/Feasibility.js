import React, {useState} from 'react';
import Lab from './Lab'
import {Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FeasibilityItem from './FeasibilityItem';
let flowdiagrams = [
  {
    name: 'The Problem Flow',
    date: '',
    description: 'Flow chart of each step of a student major choice and job employment with identified problems',
    link: 'https://miro.com/app/live-embed/uXjVPX3BBnA=/?moveToViewport=-1101,-1227,5939,3083&embedId=934067747522',
    img: 4,
  },
  {
    name: "The Solution Flow",
    date: '',
    description: 'Flow Chart of student education with identified solutions',
    link: 'https://miro.com/app/live-embed/uXjVPX2mjVA=/?moveToViewport=-3028,-602,3693,1288&embedId=725037756608',
    img: 4,
  }
]
let presentations = [
  {
    name: 'Societal Presentation',
    date: '2022-09-21',
    description: 'Original Idea Pitch by Austin Fitzhugh',
    link: 'https://docs.google.com/presentation/d/1R5uBWPPPfLnC39F2ahNlmQQJOoRHotiHzmyougi4klA/edit?usp=sharing',
    img: 3,
  },
  {
    name: "Feasibility Presentation",
    date: '',
    description: 'Version 1',
    link: 'https://docs.google.com/presentation/d/1vw179qGjNhXWQIaVhIMHTlNQ2dsPKqU9RHMHPXi607U/edit?usp=sharing',
    img: 3,
  }
]
let deliverables = [
  {
    name: "Major Functional Components",
    date: '',
    description: 'Flow Chart of major components of the app',
    link: 'https://miro.com/app/live-embed/uXjVPX2mg1M=/?moveToViewport=-1336,-495,2547,1322&embedId=767786049374',
    img: 4,
  },
  {
    name: "Competition Matrix",
    date: '',
    description: 'Matrix comparing features between our app and competitors',
    link: 'https://www.canva.com/design/DAFMOopVhh4/view?embed',
    img: 2,
  }
]
const Feasibility = () => {

  return (
    <div>
      <div id="flowdiagrams">
              <Typography variant='h3'>
            Flow Diagrams
        </Typography>
        <Divider>
          </Divider>
            <Grid container spacing={2}>
        {flowdiagrams.map((diagram) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <FeasibilityItem key={diagram.name} lab={diagram} image={diagram.img}/>
            </Grid>
          )
          })}
      </Grid>
      </div>
      <br></br>
      <div id="presentations">
              <Typography variant='h3'>
            Presentations
        </Typography>
        <Divider>
          </Divider>
            <Grid container spacing={2}>
        {presentations.map((diagram) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <FeasibilityItem key={diagram.name} lab={diagram} image={diagram.img}/>
            </Grid>
          )
          })}
      </Grid>
      </div>
      <div id="deliverables">
              <Typography variant='h3'>
            Deliverables
        </Typography>
        <Divider>
          </Divider>
            <Grid container spacing={2}>
        {deliverables.map((diagram) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <FeasibilityItem key={diagram.name} lab={diagram} image={diagram.img}/>
            </Grid>
          )
          })}
      </Grid>
      </div>
    </div>
  )
}

export default Feasibility