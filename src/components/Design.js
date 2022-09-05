import React, {useState} from 'react';
import Lab from './Lab'
import {Grid } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FeasibilityItem from './FeasibilityItem';

let presentations = [
  {
    name: 'Design Presentation',
    date: '',
    description: 'Version 1',
    link: '',
    img: 3,
  },
]
let maindeliverables = [
  {
    name: 'User Roles and Stories',
    date: '2022-09-21',
    description: 'Listing of User Roles, User Stories, Admin Stories, Advisor Stories, Job Lister Stories ',
    link: '',
    img: 2,
  },
  {
    name: "Database Schema",
    date: '',
    description: 'PlantUML Diagram',
    link: '',
    img: 4,
  },
  {
    name: "Data Management Plan",
    date: '',
    description: 'Plan for handling user information, transcripts, photos, resumes, job listings',
    link: '',
    img: 2,
  },
  {
    name: "Risks and Mitigations",
    date: '',
    description: 'Matrix of probabilty/damage of potentially dangerous outcomes',
    link: '',
    img: 2,
  },
  {
    name: "Major Functional Components",
    date: '',
    description: 'Flow Chart of major components of the app',
    link: '',
    img: 4,
  }
]
let workbreakdownstructure = [
  {
    name: "Competition Matrix",
    date: '',
    description: 'Matrix comparing features between our app and competitors',
    link: '',
    img: 4,
  },
  {
    name: "Top Level Diagram",
    date: '',
    description: 'Flow Chart of major components of the app',
    link: '',
    img: 4,
  },
  {
    name: "User Interface",
    date: '',
    description: 'Flowchart of User Interfaces for the app',
    link: '',
    img: 4,
  },
  {
    name: "External Interfaces",
    date: '',
    description: 'Flowchart of External Interfaces for the app',
    link: '',
    img: 4,
  },
  {
    name: "Algorithms",
    date: '',
    description: 'Chart of necessary algorithms for the app',
    link: '',
    img: 4,
  },
  {
    name: "Database",
    date: '',
    description: 'Flowchart of necessary database functionality and design requirements',
    link: '',
    img: 4,
  },
  {
    name: "Testing",
    date: '',
    description: 'Flowchart of necessary test units',
    link: '',
    img: 4,
  }
]

let algorithms = [
  {
    name: "3D Degree Planner Generator",
    date: '',
    description: 'Flow Chart of major components of the app',
    link: '',
    img: 4,
  },
  {
    name: "Data Recording",
    date: '',
    description: 'Flow Chart of major components of the app',
    link: '',
    img: 4,
  },
  {
    name: "Cost Estimator",
    date: '',
    description: 'Flow Chart of major components of the app',
    link: '',
    img: 4,
  },
  {
    name: "ODU/DegreeWorks API",
    date: '',
    description: 'Flow Chart of major components of the app',
    link: '',
    img: 4,
  },
  {
    name: "Web Scraper",
    date: '',
    description: 'Flow Chart of major components of the app',
    link: '',
    img: 4,
  },
  {
    name: "Chat Bot",
    date: '',
    description: 'Flow Chart of major components of the app',
    link: '',
    img: 4,
  },
]
let tools = [
  {
    name: "Development Tools",
    date: '',
    description: 'Flow Chart of major components of the app',
    link: '',
    img: 1,
  },
  {
    name: "Client and Server Specifications",
    date: '',
    description: 'Matrix comparing features between our app and competitors',
    link: '',
    img: 2,
  },
  {
    name: "3rd Party Tools",
    date: '',
    description: 'Flowchart',
    link: '',
    img: 1,
  }
]

const Design = () => {

  return (
    <div>
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
              <FeasibilityItem key={diagram.name} lab={diagram} image={diagram.img} />
            </Grid>
          )
          })}
      </Grid>
      </div>
      <br></br>
      <div id="maindeliverables">
              <Typography variant='h3'>
            Main Deliverables
        </Typography>
        <Divider>
          </Divider>
            <Grid container spacing={2}>
        {maindeliverables.map((diagram) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <FeasibilityItem key={diagram.name} lab={diagram} image={diagram.img}/>
            </Grid>
          )
          })}
      </Grid>
      </div>
      <div id="workbreakdownstructure">
              <Typography variant='h3'>
            Work Breakdown Structure
        </Typography>
        <Divider>
          </Divider>
            <Grid container spacing={2}>
        {workbreakdownstructure.map((diagram) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <FeasibilityItem key={diagram.name} lab={diagram} image={diagram.img}/>
            </Grid>
          )
          })}
      </Grid>
      </div>
      <div id="algorithms">
              <Typography variant='h3'>
            Algorithms
        </Typography>
        <Divider>
          </Divider>
            <Grid container spacing={2}>
        {algorithms.map((diagram) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <FeasibilityItem key={diagram.name} lab={diagram} image={diagram.img}/>
            </Grid>
          )
          })}
      </Grid>
      </div>
      <div id="tools">
              <Typography variant='h3'>
            Hardware, Software and Development Tools
        </Typography>
        <Divider>
          </Divider>
            <Grid container spacing={2}>
        {tools.map((diagram) => {
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

export default Design