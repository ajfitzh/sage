import React, {useState, useEffect} from 'react'
import TeamMember from "./TeamMember"
import {Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



let members = [
    {
    name: 'Bret Dorgan',
    avatar: 1,
    bio: "Bret Dorgan is a Senior at ODU majoring in Conputer Science. He is eager to help promote ODU with this project, and is looking forward to graduating in Spring 2023.",
    role: "Researcher",
    major: "Computer Science",
    year: "2023",
    email: "bdorg001@odu.edu"
  },
  {
    name: 'Austin Fitzhugh',
    avatar: 2,
    bio: "Austin is a senior at ODU, and excited to develop!",
    role: "Researcher",
    major: "CS",
    year: "2023",
    email: "afitz010@odu.edu"
  },
  {
    name: 'Benjamin Gonzalez',
    avatar: 10,
    bio: "TBD",
    role: "Researcher",
    major: "CS",
    year: "2023",
    email: "bgonz006@odu.edu"
  },
  {
    name: 'Nathan Greaney',
    avatar: 10,
    bio:"TBD",
    role: "Researcher",
    major: "CS",
    year: "2023",
    email: "ngrea001@odu.edu"
  },
  {
    name: 'Marcus Jackson',
    avatar: 10,
    bio:"",
    role: "Researcher",
    major: "CS",
    year: "2023",
    email: "mjack040@odu.edu"
  },
  {
    name: 'Isaac Replogle',
    avatar: 6,
    bio: "Isaac Replogle is a Senior at ODU studying Computer Science and is currently employed full-time at EFT Corporation. In his free time, he enjoys going on road trips, with his wife Georgia, to visit family or to go on hiking trips in the mountains.",
    role: "Researcher",
    major: "CS",
    year: "2023",
    email: "irepl001@odu.edu"
  },
  {
    name: 'Trevor Simmons',
    avatar: 7,
    bio:"Trevor is a senior studying Cyber Operations and Computer Science at ODU. He has a variety of experience in software development, cybersecurity, and IT. In his free time he enjoys gaming, reading, and drawing. ",
    role: "Researcher",
    major: "CS",
    year: "Senior",
    email: "tsimm033@odu.edu"
  },
  {
    name: 'Placeholder for Mentor',
    avatar: 10,
    bio:"TBD",
    role: "Mentor",
    major: "CS",
    year: "Senior",
    email: "placeholder@odu.edu"
  }
]

const Team = () => {

  return (
    <div>
      <br></br>
      <Grid container spacing={2}>
        {members.map((member) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <TeamMember key={member.name} member={member} avatar={member.avatar}></TeamMember>
            </Grid>
          )
          })}
      </Grid>
    </div>
  )
}

export default Team