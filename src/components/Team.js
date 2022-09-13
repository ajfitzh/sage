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
    name: 'Austin Fitzhugh',
    avatar: 1,
    bio: "Austin is a senior at ODU, and excited to develop!",
    role: "Team Lead",
    major: "CS",
    year: "Senior",
    email: "afitz010@odu.edu"
  },
  {
    name: 'Jim Richardson',
    avatar: 9,
    bio: " A dick of stone and a heart of gold, Jim has been working as an Engineer for over a decade. He has extensive experience in project management and sniping noobs with his golden Dragunov.",
    role: "Engineer",
    major: "Mech. Eng.",
    year: "Alumni (VT)",
    email: "placeholder001@cooldude.org"
  },
  {
    name: 'Byron Aquatico',
    avatar: 3,
    bio: "Byron is a undergraduate at Old Dominion University majoring in Computer Science and working on his second degree. He has a passion for computers and currently works as a Team Lead/Full Stack Software Engineer. He is a father of two and enjoys spending his time with the kids. He has over 18 years of professional work experience under his belt. He likes the beach, hiking, camping, fast cars, biking, and kayaking.",
    role: "Backend Developer",
    major: "CS",
    year: "Senior",
    email: "placeholder001@cooldude.org"
  },
  {
    name: 'Greg Nikola',
    avatar: 4,
    bio: "Gregory is a senior at Old Dominion University majoring in Computer science with a minor in Cyber Security. Outside of school Greg is an active member of his fraternity Sigma Pi where he has served on the Executive Council and as the Pledge Educator. He enjoys all types of sports, gaming, and the outdoors. Greg hopes that after his time in in school he will be able to obtain a career in the field of Cyber Security.",
    role: "Front End Developer",
    major: "CS",
    year: "Senior",
    email: "gnik10@odu.edu"
  },
  {
    name: 'Ron Don Volante',
    avatar: 5,
    bio: "Ron is a senior at Old Dominion University majoring in computer science. This is his second undergraduate degree, the other being in English language and literature from Virginia Tech. He enjoys the challenges associated with both writing and programming. Once he graduates he hopes to pursue a career that uses both of his degrees.",
    role: "Front End Developer/Document Specialist",
    major: "CS",
    year: "Senior",
    email: "rdvol12@odu.edu"
  },
  {
    name: 'Dilbert Huskins',
    avatar: 6,
    bio: "Dilbert is majoring in computer science with a minor in cyber security at ODU. He is currently working as a data specialist and has experience in Java, C++ and SQL. He enjoys riding mountain bikes on the weekends and exploring on his motorcycle.",
    role: "Database Developer",
    major: "CS",
    year: "Senior",
    email: "dilhus1@odu.edu"
  },
  {
    name: 'Paula Guerrero',
    avatar: 7,
    bio: "Paula is a senior at Old Dominion University Majoring in Computer Science and Cybersecurity. She plans to finish his undergraduate degree as well as his graduate degree in Computer Science. He hopes to pursue a career in software development with a focus in artificial intelligence and its use in the aerospace industry.",
    role: "Front End Developer",
    major: "CS",
    year: "Senior",
    email: "paula12@odu.edu"
  },
  {
    name: 'Billy Gates',
    avatar: 8,
    bio: "Bill works for the Mitre corporation and Team Yellow has been fortunate to have him as our mentor for this semester. We have greatly appreciated his guidance and feedback along the way. Thank you, Lowell, for all the help and support! We had a wonderful time working with you and we’ll miss our weekly meetings.",
    role: "Mentor",
    major: "CS",
    year: "Senior",
    email: "bgates@odu.edu"
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