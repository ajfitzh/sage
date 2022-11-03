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
    bio: "Bret Dorgan is a Senior at ODU majoring in Computer Science. He is eager to help promote ODU with this project, and is looking forward to graduating in Spring 2023.",
    role: "Team Lead / DB Specialist / Backup Documentation Specialist",
    major: "Computer Science",
    year: "2023",
    email: "bdorg001@odu.edu"
  },
  {
    name: 'Austin Fitzhugh',
    avatar: 2,
    bio: "Austin is a senior at ODU, married with kids, and comes to this project with 5+ years experience in Advising and Coaching at the Community College level in Virginia. He is passionate about finding ways to connect students to better careers.",
    role: "SageScore Specialist / Testing / Backup UI/UX Specialist ",
    major: "CS",
    year: "2023",
    email: "afitz010@odu.edu"
  },
  {
    name: 'Benjamin Gonzalez',
    avatar: 3,
    bio: "Benjamin Gonzalez is a senior at ODU studying computer science with a minor in cybersecurity. In his free time, he enjoys CrossFit, running, playing sports, and playing piano.",
    role: "Backend Specialist / Backup Testing Specialist",
    major: "CS",
    year: "2023",
    email: "bgonz006@odu.edu"
  },
  {
    name: 'Nathan Greaney',
    avatar: 4,
    bio:"Nathan Greaney is a senior at ODU majoring in Computer Science. He manages the IT Department for a division of his local municipality. After 25 long years in higher education, he will be graduating in Spring 2023. He plans to pursue a Masters in Computer Science in Fall 2023.",
    role: "No Role",
    major: "CS",
    year: "2023",
    email: "ngrea001@odu.edu"
  },
  {
    name: 'Marcus Jackson',
    avatar: 5,
    bio:"Marcus Jackson is a Senior majoring in Computer Science at Old Dominion University. He is a native of Mobile, Al and loves spending free time saltwater fishing.",
    role: "UI Specialist / Backup DB Specialist",
    major: "CS",
    year: "2023",
    email: "mjack040@odu.edu"
  },
  {
    name: 'Isaac Replogle',
    avatar: 6,
    bio: "Isaac Replogle is a Senior at ODU studying Computer Science and is currently employed full-time at EFT Corporation. In his free time, he enjoys going on road trips, with his wife Georgia, to visit family or to go on hiking trips in the mountains.",
    role: "Database Specialist / Webmaster",
    major: "CS",
    year: "2023",
    email: "irepl001@odu.edu"
  },
  {
    name: 'Trevor Simmons',
    avatar: 7,
    bio:"Trevor is a senior studying Cyber Operations and Computer Science at ODU. He has a variety of experience in software development, cybersecurity, and IT. In his free time he enjoys gaming, reading, and drawing. ",
    role: "Back-End Specialist / Backup SageScore Specialist",
    major: "CS",
    year: "Senior",
    email: "tsimm033@odu.edu"
  },
  {
    name: 'Brenda Roston',
    avatar: 11,
    bio:"We are so grateful to Brenda for her mentorship of this team! ",
    role: "Mentor",
    major: "",
    year: "MITRE Enterprise Engineer",
    email: "broston@mitre.org"
  }
]

const Team = () => {

  return (
    <div>
      <br></br>
      <Grid container spacing={2}>
        {members.map((member) => {
          return (
            <Grid item xs={6} sm={2} md={4} margin={2}>
              <TeamMember key={member.name} member={member} avatar={member.avatar}></TeamMember>
            </Grid>
          )
          })}
      </Grid>
    </div>
  )
}

export default Team