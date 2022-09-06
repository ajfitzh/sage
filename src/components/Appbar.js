import React, {useState} from 'react'
import { AppBar} from '@mui/material'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import GroupsIcon from '@mui/icons-material/Groups';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ScienceIcon from '@mui/icons-material/Science';
import MuiDrawer from "./MuiDrawer";
import SpeedIcon from '@mui/icons-material/Speed';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import VerifiedIcon from '@mui/icons-material/Verified';
import AnnouncementIcon from '@mui/icons-material/Announcement';

const Appbar = () => {

  return (
    <div className="AppBar">
    <Box sx={{flexGrow: 1 }}>
      <AppBar color="transparent">
            <Container maxWidth="x1">
            <Toolbar disableGutters >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={require('../images/sage.jpg')} height='50vh' width='50vh'/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', align: 'left' } }}>
        <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              
            }}
          >
            <img src={require('../images/sage.jpg')} height='50vh' width='50vh'/>
          </Typography>
          </Box>
  
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button title="The Problem with CS Careers" href="/home#problem" color='inherit' startIcon={<AnnouncementIcon/>}>The Problem</Button>
          <Button title="Our Solution" href="/home#solution" color='inherit'><VerifiedIcon title="Team Bio" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />The Solution</Button>
          <Button title="Meet the Team!" href="/team" color='inherit'><GroupsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />Team</Button>
          <Button title="Feasibility Studies and Reports" href="/feasibility" color='inherit'><AnalyticsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />Feasibility</Button>
          <Button title="Design Documents and Reports" href="/design" color='inherit'><AccountTreeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />Design</Button>
          <Button title="Mockups and Prototype Progress" href="/prototype" color='inherit'><SpeedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />Prototype</Button>
          <Button title="Lab Reports" href="/labs" color='inherit'><ScienceIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />Labs</Button>
          <Button title="References, Glossary, and Links" href="/references" color='inherit'><AutoStoriesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />References</Button>
          

          </Box>
          <Box sx={{ flexGrow: 0 }}>
          <MuiDrawer/>
           </Box>
            </Toolbar>
            </Container>
        </AppBar>
    </Box>
    </div>
  )
}

export default Appbar
