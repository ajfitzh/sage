import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


function EmailModal({email}) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 100,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <TextField
          id="standard-helperText"
          label="Copy Link"
          defaultValue={email}
          variant="standard"
        />
        <Button onClick={() => {navigator.clipboard.writeText("http://mikesbikes757.com")}}>
        <ContentCopyIcon size="small"/>
        </Button>

      </Paper>
    </Box>
  );
}

export default EmailModal;