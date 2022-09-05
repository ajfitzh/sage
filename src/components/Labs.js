import React, {useState} from 'react';
import Lab from './Lab'
import {Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

let labsOne = [
  {
    name: 'Outline',
    date: '2022-08-21',
    description: 'Collaborative Outline',
    link: 'https://docs.google.com/document/d/e/2PACX-1vR7jlgRnLbmj4f9BdjjqILT4Q8ekHBQ1AzZIkhHakZjiDT2QDpntU0kzajhPsvZiklaRipNG7ys2dxd/pub?embedded=true',
  },
  {
    name: "Byron",
    date: '',
    description: '',
    link: 'https://docs.google.com/document/d/e/2PACX-1vR7jlgRnLbmj4f9BdjjqILT4Q8ekHBQ1AzZIkhHakZjiDT2QDpntU0kzajhPsvZiklaRipNG7ys2dxd/pub?embedded=true',
  },
  {
    name: 'Lance',
    date: '',
    description: '',
    link: 'https://docs.google.com/document/d/e/2PACX-1vR7jlgRnLbmj4f9BdjjqILT4Q8ekHBQ1AzZIkhHakZjiDT2QDpntU0kzajhPsvZiklaRipNG7ys2dxd/pub?embedded=true',
  },
  {
    name: 'Jason',
    date: '',
    description: '',
    link: 'https://docs.google.com/document/d/e/2PACX-1vR7jlgRnLbmj4f9BdjjqILT4Q8ekHBQ1AzZIkhHakZjiDT2QDpntU0kzajhPsvZiklaRipNG7ys2dxd/pub?embedded=true',
  },
  {
    name: 'Chris',
    date: '',
    description: '',
    link: 'https://docs.google.com/document/d/e/2PACX-1vR7jlgRnLbmj4f9BdjjqILT4Q8ekHBQ1AzZIkhHakZjiDT2QDpntU0kzajhPsvZiklaRipNG7ys2dxd/pub?embedded=true',
  },
  {
    name: 'Paula',
    date: '',
    description: '',
    link: 'https://docs.google.com/document/d/e/2PACX-1vR7jlgRnLbmj4f9BdjjqILT4Q8ekHBQ1AzZIkhHakZjiDT2QDpntU0kzajhPsvZiklaRipNG7ys2dxd/pub?embedded=true',
  },
  {
    name: 'Greg',
    date: '',
    description: '',
    link: 'https://docs.google.com/document/d/e/2PACX-1vR7jlgRnLbmj4f9BdjjqILT4Q8ekHBQ1AzZIkhHakZjiDT2QDpntU0kzajhPsvZiklaRipNG7ys2dxd/pub?embedded=true',
  },
  {
    name: 'Glossary',
    date: '',
    description: '',
    link: 'https://docs.google.com/document/d/e/2PACX-1vR7jlgRnLbmj4f9BdjjqILT4Q8ekHBQ1AzZIkhHakZjiDT2QDpntU0kzajhPsvZiklaRipNG7ys2dxd/pub?embedded=true',
  },
]
let labsTwo = [
  {
    name: 'Complete Outline',
    date: '2022-09-21',
    description: 'Developmental Pitch to Investors',
    link: "https://docs.google.com/presentation/d/e/2PACX-1vTS89QcB--Q6or6xUOgKlixJtGctIgtiDiFgeDJwdvfus4C0ou2kmiIhxyYVyEKoqiZEYTulZLjuVa9/embed?start=false&loop=false&delayms=3000"
  },
  {
    name: 'Sections 1 and 2',
    date: '',
    description: '',
    link: 'https://docs.google.com/document/d/e/2PACX-1vR7jlgRnLbmj4f9BdjjqILT4Q8ekHBQ1AzZIkhHakZjiDT2QDpntU0kzajhPsvZiklaRipNG7ys2dxd/pub?embedded=true',
  },
  {
    name: 'Section 3',
    date: '',
    description: '',
    link: 'https://docs.google.com/document/d/e/2PACX-1vR7jlgRnLbmj4f9BdjjqILT4Q8ekHBQ1AzZIkhHakZjiDT2QDpntU0kzajhPsvZiklaRipNG7ys2dxd/pub?embedded=true',
  },
]
let labsThree = [
  {
    name: 'Product Overview End-of-Semester',
    date: '2022-08-21',
    description: 'Market Research regarding competitors in the field',
    link: 'https://docs.google.com/document/d/e/2PACX-1vR7jlgRnLbmj4f9BdjjqILT4Q8ekHBQ1AzZIkhHakZjiDT2QDpntU0kzajhPsvZiklaRipNG7ys2dxd/pub?embedded=true',
  },
]
const Labs = () => {

  return (
    <div>
      <div id="lab1">
              <Typography variant='h3'>
            Lab I
        </Typography>
        <Divider>
          </Divider>
            <Grid container spacing={2}>
        {labsOne.map((lab) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <Lab key={lab.name} lab={lab} />
            </Grid>
          )
          })}
      </Grid>
      </div>
      <br></br>
      <div id="lab2">
              <Typography variant='h3'>
            Lab II
        </Typography>
        <Divider>
          </Divider>
            <Grid container spacing={2}>
        {labsTwo.map((lab) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <Lab key={lab.name} lab={lab} />
            </Grid>
          )
          })}
      </Grid>
      </div>
      <div id="lab3">
              <Typography variant='h3'>
            Lab III
        </Typography>
        <Divider>
          </Divider>
            <Grid container spacing={2}>
        {labsThree.map((lab) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <Lab key={lab.name} lab={lab} />
            </Grid>
          )
          })}
      </Grid>
      </div>
    </div>
  )
}

export default Labs