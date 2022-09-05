import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton, Button, CardActionArea, CardActions, listSubheaderClasses } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import MailIcon from '@mui/icons-material/Mail';
import { useTheme } from '@mui/material/styles';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import './TeamMember.css'
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import BiotechIcon from '@mui/icons-material/Biotech';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  
export default function Reference({lab, image}) {
    const [scroll, setScroll] = React.useState('paper');
    const [openEmbed, setOpenEmbed] = React.useState(false);
    const [openLinks, setOpenLinks] = React.useState(false);

  const theme = useTheme();

const handleClickOpenDownload = (scrollType) => {
    setOpenLinks(true);
    setScroll(scrollType);
}
const handleCloseDownload = () => {
    setOpenLinks(false);
}
  const handleClickOpenEmbed = (scrollType) => () => {
    setOpenEmbed(true);
    setScroll(scrollType);
  };

  const handleCloseEmbed = () => {
    setOpenEmbed(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (openEmbed) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [openEmbed]);

    return (
        <>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={handleClickOpenEmbed('paper')}>
        <CardMedia
          component="img"
          height="100"
          src={require('../images/placeholder/' + image + '.jpg')}
          alt={lab.name}
          style={{height: 200 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {lab.name}
          </Typography>
          <Typography>
            {lab.date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {lab.description}
          </Typography>
        </CardContent>
      </CardActionArea >
    </Card>

    <Dialog
        open={openEmbed}
        onClose={handleCloseEmbed}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullScreen 
        TransitionComponent={Transition}
      >
               <AppBar color='inherit' sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseEmbed}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {lab.name}
            </Typography>
          </Toolbar>
        </AppBar>
        <DialogContent dividers={scroll === 'paper'}>            
        <iframe src={lab.link}
                frameborder="0"
                width="100%"
                height="100%"
                allowfullscreen="true"
                mozallowfullscreen="true"
                webkitallowfullscreen="true">
            </iframe>
        </DialogContent>
      </Dialog>
  </>
  );
}
