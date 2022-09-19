import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton, Button, CardActionArea, CardActions } from '@mui/material';
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

export default function TeamMember({member, avatar}) {
    const [scroll, setScroll] = React.useState('paper');
    const [openBio, setOpenBio] = React.useState(false);
    const [openEmail, setOpenEmail] = React.useState(false);

    let avvie = avatar
  const theme = useTheme();

const handleClickOpenEmail = (scrollType) => {
    setOpenEmail(true);
    setScroll(scrollType);
}
const handleCloseEmail = () => {
    setOpenEmail(false);
}
  const handleClickOpenBio = (scrollType) => () => {
    setOpenBio(true);
    setScroll(scrollType);
  };

  const handleCloseBio = () => {
    setOpenBio(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (openBio) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [openBio]);

    return (
        <>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={handleClickOpenBio('paper')}>
        <CardMedia
          component="img"
          height="350"
          src={require('../images/headshots/' + avatar + '.jpg')}
          alt={member.name}
          style={{height: 350, objectPosition: 'top' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {member.name}
          </Typography>
          <Typography>
            {member.role}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {member.year}
          </Typography>
        </CardContent>
      </CardActionArea >
      <CardActions >
        <IconButton onClick={() => handleClickOpenEmail('paper')}>
            <MailIcon/>
        </IconButton>
      </CardActions>
    </Card>

    <Dialog
        open={openBio}
        onClose={handleCloseBio}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Bio: {member.name}</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {member.bio}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseBio}>OK</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openEmail}
        onClose={handleCloseEmail}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Contact {member.name}</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {member.email}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={() => {navigator.clipboard.writeText("http://mikesbikes757.com")}}>
        <ContentCopyIcon size="small"/>
        </Button>
          <Button onClick={handleCloseEmail}>OK</Button>
        </DialogActions>
      </Dialog>
  </>
  );
}
