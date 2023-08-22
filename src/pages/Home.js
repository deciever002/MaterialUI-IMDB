import React from 'react';
import MovieCard from '../components/MovieCard'
import { Container, Grid, Typography } from '@mui/material'
import movieCategories from '../data.json';

const Home = () => {
  return (
    <>
    <Container sx={{
            marginY: 5
        }}>
            {movieCategories.map((movieCategory) => 
                <>
                <Typography
                    variant='h4'
                    component='h2'
                    marginTop={5}
                    marginBottom={3}
                >
                    {movieCategory.name}
                </Typography>
                <Grid container spacing={5}>
                    {movieCategory.movies.map((movie,index) =>
                        <MovieCard key={index} movie={movie}
                    />)}
                </Grid>
                </>
            )}
        </Container>
    </>
  )
}

export default Home