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

let mockups = [
  {
    name: 'Chat Function',
    date: '',
    description: 'Mockup of Student/Advisor/Alumni Function',
    link: 'https://docs.google.com/presentation/d/e/2PACX-1vTS89QcB--Q6or6xUOgKlixJtGctIgtiDiFgeDJwdvfus4C0ou2kmiIhxyYVyEKoqiZEYTulZLjuVa9/embed?start=false&loop=false&delayms=3000',
    img: 1,
  },
  {
    name: "Career Picker",
    date: '',
    description: 'Mockup of Career Picker Function',
    link: 'https://docs.google.com/presentation/d/e/2PACX-1vTS89QcB--Q6or6xUOgKlixJtGctIgtiDiFgeDJwdvfus4C0ou2kmiIhxyYVyEKoqiZEYTulZLjuVa9/embed?start=false&loop=false&delayms=3000',
    img: 1,
  },
  {
    name: "Job Board",
    date: '',
    description: 'Mockup of Job Board Function',
    link: 'https://docs.google.com/presentation/d/e/2PACX-1vTS89QcB--Q6or6xUOgKlixJtGctIgtiDiFgeDJwdvfus4C0ou2kmiIhxyYVyEKoqiZEYTulZLjuVa9/embed?start=false&loop=false&delayms=3000',
    img: 1,
  },
  {
    name: "Cost Estimator",
    date: '',
    description: 'Mockup of Cost Estimator Function',
    link: 'https://docs.google.com/presentation/d/e/2PACX-1vTS89QcB--Q6or6xUOgKlixJtGctIgtiDiFgeDJwdvfus4C0ou2kmiIhxyYVyEKoqiZEYTulZLjuVa9/embed?start=false&loop=false&delayms=3000',
    img: 1,
  }
]

let planning = [
  {
    name: 'Prototype Planning Presentation',
    date: '',
    description: 'Presentation of our plan for prototype',
    link: 'https://docs.google.com/presentation/d/e/2PACX-1vTS89QcB--Q6or6xUOgKlixJtGctIgtiDiFgeDJwdvfus4C0ou2kmiIhxyYVyEKoqiZEYTulZLjuVa9/embed?start=false&loop=false&delayms=3000',
    img: 3,
  },
  {
    name: "Sprint Plan",
    date: '',
    description: 'Plan for three major Sprints for Spring 23 semester',
    link: 'https://docs.google.com/presentation/d/e/2PACX-1vTS89QcB--Q6or6xUOgKlixJtGctIgtiDiFgeDJwdvfus4C0ou2kmiIhxyYVyEKoqiZEYTulZLjuVa9/embed?start=false&loop=false&delayms=3000',
    img: 3,
  }
]
let features = [
  {
    name: 'Features and Description',
    date: '',
    description: '',
    link: 'https://docs.google.com/presentation/d/e/2PACX-1vTS89QcB--Q6or6xUOgKlixJtGctIgtiDiFgeDJwdvfus4C0ou2kmiIhxyYVyEKoqiZEYTulZLjuVa9/embed?start=false&loop=false&delayms=3000',
    img: 4,
  },
]
let weeklydevelopmentreports = [
  {
    name: "Weekly Report Summary",
    date: '',
    description: 'Updated Weekly- most recent report at top of document',
    link: 'https://docs.google.com/presentation/d/e/2PACX-1vTS89QcB--Q6or6xUOgKlixJtGctIgtiDiFgeDJwdvfus4C0ou2kmiIhxyYVyEKoqiZEYTulZLjuVa9/embed?start=false&loop=false&delayms=3000',
    img: 2,
  },
]

let finaldemonstration = [
  {
    name: "Final Demonstration Powerpoint",
    date: '',
    description: 'Flow Chart of major components of the app',
    link: 'https://docs.google.com/presentation/d/e/2PACX-1vTS89QcB--Q6or6xUOgKlixJtGctIgtiDiFgeDJwdvfus4C0ou2kmiIhxyYVyEKoqiZEYTulZLjuVa9/embed?start=false&loop=false&delayms=3000',
    img: 3,
  },
  {
    name: "Pre-College Solution Flow",
    date: '',
    description: 'Flow Chart of major components of the app',
    link: 'https://docs.google.com/presentation/d/e/2PACX-1vTS89QcB--Q6or6xUOgKlixJtGctIgtiDiFgeDJwdvfus4C0ou2kmiIhxyYVyEKoqiZEYTulZLjuVa9/embed?start=false&loop=false&delayms=3000',
    img: 4,
  },
  {
    name: "College Solution Flow",
    date: '',
    description: 'Flow Chart of college advising components through graduation',
    link: 'https://docs.google.com/presentation/d/e/2PACX-1vTS89QcB--Q6or6xUOgKlixJtGctIgtiDiFgeDJwdvfus4C0ou2kmiIhxyYVyEKoqiZEYTulZLjuVa9/embed?start=false&loop=false&delayms=3000',
    img: 4,
  },
  {
    name: "Career Solution Flow",
    date: '',
    description: 'Flow Chart of major components of the app',
    link: 'https://docs.google.com/presentation/d/e/2PACX-1vTS89QcB--Q6or6xUOgKlixJtGctIgtiDiFgeDJwdvfus4C0ou2kmiIhxyYVyEKoqiZEYTulZLjuVa9/embed?start=false&loop=false&delayms=3000',
    img: 4,
  },
  {
    name: "Prototype Algorithms",
    date: '',
    description: 'Flow Chart of prototype algorithms',
    link: 'https://docs.google.com/presentation/d/e/2PACX-1vTS89QcB--Q6or6xUOgKlixJtGctIgtiDiFgeDJwdvfus4C0ou2kmiIhxyYVyEKoqiZEYTulZLjuVa9/embed?start=false&loop=false&delayms=3000',
    img: 4,
  },
  {
    name: "Prototype Cost Estimates",
    date: '',
    description: 'Flowchart from Start to End, Problem/Step in Process/Prototype/RWP',
    link: 'https://docs.google.com/presentation/d/e/2PACX-1vTS89QcB--Q6or6xUOgKlixJtGctIgtiDiFgeDJwdvfus4C0ou2kmiIhxyYVyEKoqiZEYTulZLjuVa9/embed?start=false&loop=false&delayms=3000',
    img: 4,
  },
  {
    name: "Prototype Database Diagram",
    date: '',
    description: 'PlantUML Diagram of final prototype',
    link: 'https://docs.google.com/presentation/d/e/2PACX-1vTS89QcB--Q6or6xUOgKlixJtGctIgtiDiFgeDJwdvfus4C0ou2kmiIhxyYVyEKoqiZEYTulZLjuVa9/embed?start=false&loop=false&delayms=3000',
    img: 4,
  },
]
const Prototype = () => {

  return (
    <div>
      <div id="mockups">
    <Typography variant='h3'>
  Mockups
</Typography>
<Divider>
</Divider>
  <Grid container spacing={2}>
{mockups.map((diagram) => {
return (
  <Grid item xs={12} sm={6} md={4}>
    <FeasibilityItem key={diagram.name} lab={diagram} image={diagram.img}/>
  </Grid>
)
})}
</Grid>
</div>
<br></br>
      <div id="planning">
              <Typography variant='h3'>
            Planning
        </Typography>
        <Divider>
          </Divider>
            <Grid container spacing={2}>
        {planning.map((diagram) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <FeasibilityItem key={diagram.name} lab={diagram} image={diagram.img}/>
            </Grid>
          )
          })}
      </Grid>
      </div>
      <br></br>
      <div id="features">
              <Typography variant='h3'>
            Features
        </Typography>
        <Divider>
          </Divider>
            <Grid container spacing={2}>
        {features.map((diagram) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <FeasibilityItem key={diagram.name} lab={diagram} image={diagram.img}/>
            </Grid>
          )
          })}
      </Grid>
      </div>
      <div id="weeklydevelopmentreports">
              <Typography variant='h3'>
            Weekly Development Reports
        </Typography>
        <Divider>
          </Divider>
            <Grid container spacing={2}>
        {weeklydevelopmentreports.map((diagram) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <FeasibilityItem key={diagram.name} lab={diagram} image={diagram.img}/>
            </Grid>
          )
          })}
      </Grid>
      </div>
      <div id="finaldemonstration">
              <Typography variant='h3'>
            Final Demonstration
        </Typography>
        <Divider>
          </Divider>
            <Grid container spacing={2}>
        {finaldemonstration.map((diagram) => {
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

export default Prototype