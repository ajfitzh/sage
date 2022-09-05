import React, {useState} from 'react';
import Lab from './Lab'
import {Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Reference from './Reference'

let references = [
  {
    name: 'Links',
    date: '',
    description: 'Research Links',
    link: 'https://docs.google.com/document/d/e/2PACX-1vR7jlgRnLbmj4f9BdjjqILT4Q8ekHBQ1AzZIkhHakZjiDT2QDpntU0kzajhPsvZiklaRipNG7ys2dxd/pub?embedded=true',
  },
  {
    name: "Glossary",
    date: '',
    description: 'Glossary of Terms',
    link: 'https://docs.google.com/document/d/e/2PACX-1vR7jlgRnLbmj4f9BdjjqILT4Q8ekHBQ1AzZIkhHakZjiDT2QDpntU0kzajhPsvZiklaRipNG7ys2dxd/pub?embedded=true',
  },
  {
    name: 'References',
    date: '',
    description: 'List of Academic References and Documentation',
    link: 'https://docs.google.com/document/d/e/2PACX-1vR7jlgRnLbmj4f9BdjjqILT4Q8ekHBQ1AzZIkhHakZjiDT2QDpntU0kzajhPsvZiklaRipNG7ys2dxd/pub?embedded=true',
  },

]


const References = () => {

  return (
    <div>
      <div id="References">
              <Typography variant='h3'>
            References, Glossary, and Links
        </Typography>
        <Divider>
          </Divider>
            <Grid container spacing={2}>
        {references.map((reference) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <Reference key={reference.name} lab={reference} />
            </Grid>
          )
          })}
      </Grid>
      </div>
    </div>
  )
}

export default References