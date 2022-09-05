import React from 'react'
import { Stack } from '@mui/system'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import FeasibilityItem from './FeasibilityItem'
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import './Home.css'

let problems = [
  {
    name: 'High Schools',
    date: '',
    description: '',
    link: '',
    img: 9,
  },
  {
    name: 'Community Colleges',
    date: '',
    description: '',
    link: '',
    img: 6,
  },
  {
    name: 'Universities',
    date: '',
    description: '',
    link: '',
    img: 7,
  },
  {
    name: 'Online Resources',
    date: '',
    description: '',
    link: '',
    img: 8,
  },
]

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home = () => {
  return (
    <div>
    <Paper className='head-text' elevation={0}>
    <img src={require('../images/path.jpeg')}
      width= '100%'
      height= '100%'
      />
      <div class='text-on-image'>
      <Typography variant='h3'>
        Sage Advisor: for your new Career in Tech.
      </Typography>
          </div>
    </Paper>
    <div id="problem">
      <Paper sx={{ alignItems: 'center' }}>
        <Typography sx={{textAlign:"center"}} variant='h2'>
          The Problem:
        </Typography>
        <Typography variant='h4' sx={{textAlign:"center"}}>
          Virginians need better paying jobs.
        </Typography>
        <Stack
  direction="row"
  divider={<Divider orientation="vertical" flexItem />}
  spacing={2}
  justifyContent="space-evenly"
><Item><Link to="https://www.aei.org/articles/have-wages-stagnated-for-decades-in-the-us/">Since 1973, hourly wages have grown by an average of just $0.18</Link></Item>
<Item><Link to="https://www.in2013dollars.com/us/inflation/1973?amount=1">Since 1973, inflation has made $1 from 1970 equivalent to $6.67 in 2022, a growth of $5.67</Link></Item>
<Item><Link to="https://www.sofi.com/cost-of-living-in-virginia/">Virginians require $42,000 per year to stay afloat (2020 data)</Link></Item>
</Stack>
<img src="https://cdn.statcdn.com/Infographic/images/normal/25574.jpeg" alt="Infographic: The Living Wage Gap | Statista" width="100%" height="auto" />
<Typography variant='h4' sx={{textAlign:"center"}}>Computer Jobs Pay Well</Typography>
<Typography sx={{textAlign:"center"}}>        
        <iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSMfQLPgThRbZN8t9lawAmdQTp5LMY8N_tzfOWzo1P8DLFFsuJgXD42WxpQBZnvEieLRD-dTDvgnH0Q/pubchart?oid=2117026920&amp;format=interactive"></iframe>
<br></br>
</Typography>
      <Typography variant='h4' sx={{textAlign:"center"}}>
          They're Plentiful
        </Typography>
        <Stack
  direction="row"
  divider={<Divider orientation="vertical" flexItem />}
  spacing={2}
  justifyContent="space-evenly"
>
<Item><Link to="https://www.imf.org/Publications/fandd/issues/2019/03/global-competition-for-technology-workers-costa">By 2030, global shortage of more than 85 million tech workers - $8.5 trillion in lost annual revenue</Link></Item>
<Item><Link to="https://www.bls.gov/ooh/Computer-and-Information-Technology/Software-developers.htm">By 2030, the U.S. need for software devs is expected to increase by 22%, but actual devs only up 8% (BLS)</Link></Item>
<Item><Link to="https://www.cnbc.com/2019/11/06/how-switching-careers-to-tech-could-solve-the-us-talent-shortage.html">In 2019, U.S. companies had about 918,000 unfilled IT jobs</Link></Item>
<Item><Link to="https://www.cnbc.com/2019/11/06/how-switching-careers-to-tech-could-solve-the-us-talent-shortage.html">Even with 60,300 CS graduates, 20,000 bootcamp graduates, and 85,000 H-1B visas, there is still a major gap for U.S. talent.</Link></Item>

</Stack>
<Typography variant='h4' sx={{textAlign:"center"}}>
          They're Local
        </Typography>
<img src={require('../images/jobsmap.png')}
      width= '100%'
      height= '100%'
      />
<Typography variant='h4' sx={{textAlign:"center"}}>
          The Need Is Immediate
        </Typography>
<Stack
  direction="row"
  divider={<Divider orientation="vertical" flexItem />}
  spacing={2}
  justifyContent="space-evenly"
>
<Item><Link to="https://www.vedp.org/industry/software">Amazon invested $2.5 billion for VA HQ, requiring 25,000 high tech jobs over next 12 years</Link></Item>
<Item><Link to="/https://www.vedp.org/industry/software">Virginia has targeted 32,000 additional graduates in CS and related fields over the next 20 years-- how will it get there?</Link></Item>
</Stack>
<Typography variant='h4' sx={{textAlign:"center"}}>
          Virginia has Potential for More
        </Typography>
<Stack
  direction="row"
  divider={<Divider orientation="vertical" flexItem />}
  spacing={2}
  justifyContent="space-evenly"
>
<Link to="https://www.vedp.org/industry/software">Virginia has the highest concentration of tech talent and 3rd largest tech workforce in nation</Link>
</Stack>

<Typography variant='h4' sx={{textAlign:"center"}}>
          Virginia is Funding Growth
        </Typography>
<Stack
  direction="row"
  divider={<Divider orientation="vertical" flexItem />}
  spacing={2}
  justifyContent="space-evenly"
>
<Item><Link to="https://www.vedp.org/industry/software">Virginia is investing more than $2 billion to expand its tech talent pipeline, doubling the number of graduates each year in computer science and closely related fields.</Link></Item>
</Stack><br></br><br></br>
<Typography variant='h4' sx={{textAlign:"center"}}>
          But...College is a Tough Sell Now
        </Typography>
        <Typography variant='h6' sx={{textAlign:"center"}}>
          Students need accurate insight into the value of the major and their job market potentials. (They are now picky consumers)
        </Typography>
        <Stack
  direction="row"
  divider={<Divider orientation="vertical" flexItem />}
  spacing={2}
  justifyContent="space-evenly"
><Item><Link to="https://www.sofi.com/learn/content/student-debt-by-majors/">Average Student Loan Balance: $37,113</Link></Item>
<Item><Link to="https://www.forbes.com/sites/susanadams/2013/08/09/the-25-colleges-with-the-worst-return-on-investment/?sh=58ea3d0a1c9c">College is now high-risk: One accredited school costs $155k and offers a negative return over 30 years of $228,000. </Link></Item>
<Item><Link to="https://www.publicagenda.org/reports/americas-hidden-common-ground-on-public-higher-education/">In a 2022 survey, fully half of respondents say college is a "questionable investment" due to student loans and limited job opportunities.</Link></Item>
</Stack>
<br></br>
        <Typography sx={{textAlign:"center"}} variant='h2'>
          Virginia's Pipeline has Issues
        </Typography>
    <Typography sx={{textAlign:"center"}} variant='h4'>
    (click on each to view more details)
    </Typography>
        <Stack
  direction="row"
  divider={<Divider orientation="vertical" flexItem />}
  spacing={2}
  justifyContent="space-evenly"
>
{problems.map((diagram) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <FeasibilityItem key={diagram.name} lab={diagram} image={diagram.img}/>
            </Grid>
          )
          })}
</Stack>
      </Paper>

      </div>
      <div id="solution">
        <Paper sx={{textAlign:"center"}}>
        <Typography sx={{textAlign:"center"}} variant='h1'>
          How Can We Fix It?
        </Typography>
             <Typography sx={{textAlign:"center"}} variant='h3'>
          A tool for Community Colleges and 4-Year Schools in Virginia
        </Typography>
        <img src={require('../images/solution.jpg')}
      width= '50%'
      height= '50%'
      />   
        </Paper>

      </div>
    </div>
  )
}

export default Home