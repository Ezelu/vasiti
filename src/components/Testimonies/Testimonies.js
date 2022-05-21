import { Grid, Box, Container } from '@mui/material';
import React from 'react';
import './Testimonies.css';


export default function Testimonies ({data}) {

  const items = data.map(each => {
    return (
      <Grid item md={4} xs={12}>
        <Box>
          <img src={each.image} />
          <h3> {each.name} </h3>
          <aside>
            <span> {each.location && each.location} </span>
            <span style={{color: each.type === 'Customer' ? 'blue' : 'green'}}className='type'> 
              {(each.type.toUpperCase())}
            </span>
          </aside>
          <p> {each.testimoney} </p>
        </Box>
      </Grid>
    )
  })





  return (
    <div className='testimonies_container'>
      <Container>
        <Grid container spacing={12}>
          {
            items
          }
        </Grid>
      </Container>
    </div>
  )
}