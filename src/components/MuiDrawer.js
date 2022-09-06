import {React, useState} from 'react';
import {Drawer, Box, Typography, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import AnnouncementIcon from '@mui/icons-material/Announcement'
import FactCheckIcon from '@mui/icons-material/FactCheck'
import GroupsIcon from '@mui/icons-material/Groups'
import ScienceIcon from '@mui/icons-material/Science'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SpeedIcon from '@mui/icons-material/Speed';
import BiotechIcon from '@mui/icons-material/Biotech';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import VerifiedIcon from '@mui/icons-material/Verified';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';

const MuiDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [openDesign, setOpenDesign] = useState(false);
    const [openFeasibility, setOpenFeasibility] = useState(false);
    const [openLab, setOpenLab] = useState(false);
    const [openPrototype, setOpenPrototype] = useState(false);

    const handleClickFeasibility = () => {
        setOpenFeasibility(!openFeasibility);
    };
    const handleClickDesign = () => {
        setOpenDesign(!openDesign);
    };
    const handleClickLab = () => {
        setOpenLab(!openLab);
    };
    const handleClickPrototype = () => {
        setOpenPrototype(!openPrototype);
    };

    return (
        <>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={()=>setIsDrawerOpen(true)}><MenuIcon/></IconButton>
        <Drawer
            anchor='right'
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}>
        <Box p={2} width='250px' textAlign='center' role='presentation'>
            <IconButton href='/'>
               <Avatar alt="Sage" src={require('../images/sage.jpg')} /> 
            </IconButton>
        
            <List>
                <ListItem disablePadding><ListItemButton href="/#problem"><ListItemIcon> <AnnouncementIcon/></ListItemIcon><ListItemText primary="The Problem"/></ListItemButton></ListItem>
                <ListItem disablePadding><ListItemButton href="/#solution"><ListItemIcon> <VerifiedIcon/></ListItemIcon><ListItemText primary="The Solution"/></ListItemButton></ListItem>
                <ListItem disablePadding><ListItemButton href="/team"><ListItemIcon> <GroupsIcon/></ListItemIcon><ListItemText primary="The Team"/></ListItemButton></ListItem>
                <ListItem disablePadding><ListItemButton onClick={handleClickFeasibility}><ListItemIcon> <AnalyticsIcon/></ListItemIcon><ListItemText primary="Feasibility Reports"/>{openFeasibility ? <ExpandLess /> : <ExpandMore />}</ListItemButton></ListItem>
                <Collapse in={openFeasibility} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} href="/feasibility#flowdiagrams"><ListItemIcon></ListItemIcon><ListItemText primary="Flow Diagrams" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }} href="/feasibility#presentations"><ListItemIcon></ListItemIcon ><ListItemText primary="Presentations" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }} href="/feasibility#deliverables"><ListItemIcon></ListItemIcon><ListItemText primary="Deliverables" /></ListItemButton>
        </List>
      </Collapse>
                <ListItem disablePadding><ListItemButton onClick={handleClickDesign}><ListItemIcon> <AccountTreeIcon/></ListItemIcon><ListItemText primary="Design Reports"/>{openDesign ? <ExpandLess /> : <ExpandMore />}</ListItemButton></ListItem>
                <Collapse in={openDesign} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} href="/design#presentations"><ListItemIcon></ListItemIcon><ListItemText primary="Presentations" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }} href="/design#maindeliverables" ><ListItemIcon></ListItemIcon><ListItemText primary="Main Deliverables" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }} href="/design#workbreakdownstructure" ><ListItemIcon></ListItemIcon><ListItemText primary="Work Breakdown" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }} href="/design#algorithms"><ListItemIcon></ListItemIcon><ListItemText primary="Algorithms" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }} href="/design#tools"><ListItemIcon></ListItemIcon><ListItemText primary="Hardware/Software/Dev Tools" /></ListItemButton>
        
        </List>
      </Collapse>
                <ListItem disablePadding><ListItemButton onClick={handleClickPrototype}><ListItemIcon> <SpeedIcon/></ListItemIcon><ListItemText primary="Prototype and Mockups"/>{openPrototype ? <ExpandLess /> : <ExpandMore />}</ListItemButton></ListItem>
                <Collapse in={openPrototype} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} href="/prototype#mockups" ><ListItemIcon></ListItemIcon><ListItemText primary="Mockups" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }} href="/prototype#planning" ><ListItemIcon></ListItemIcon><ListItemText primary="Planning" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }} href="/prototype#features" ><ListItemIcon></ListItemIcon><ListItemText primary="Features Dashboard" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }} href="/prototype#weeklydevelopmentreports" ><ListItemIcon></ListItemIcon><ListItemText primary="Weekly Reports" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }} href="/prototype#finaldemonstration" ><ListItemIcon></ListItemIcon><ListItemText primary="Final Demonstration" /></ListItemButton>
        </List>
      </Collapse>
                <ListItem disablePadding><ListItemButton onClick={handleClickLab}><ListItemIcon> <ScienceIcon/></ListItemIcon><ListItemText primary="Lab Reports"/>{openLab ? <ExpandLess /> : <ExpandMore />}</ListItemButton></ListItem>
                <Collapse in={openLab} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} href="/labs#lab1"><ListItemIcon></ListItemIcon><ListItemText primary="Lab I" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }} href="/labs#lab2"><ListItemIcon></ListItemIcon><ListItemText primary="Lab II" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }} href="/labs#lab3"><ListItemIcon></ListItemIcon><ListItemText primary="Lab III" /></ListItemButton>
        </List>
      </Collapse>
                <ListItem disablePadding><ListItemButton href="/references"><ListItemIcon> <AutoStoriesIcon/></ListItemIcon><ListItemText primary="References, Glossary, and Links"/></ListItemButton></ListItem>
                        
                        
                
            </List>

        </Box>
        </Drawer>
        </>
    )
}

export default MuiDrawer;