import { BottomNavigation, Box, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import ImageCollage from '../components/ImageCollage'
import ControlledAccordian from '../components/Accordian'
import BasicModal from '../components/Modal'

const Movie = () => {
  return (
    <Container sx={{width: 900}}>
        <Typography variant='h3' component='h1' marginTop={3}>
            Explore the movie realm
        </Typography>
        <Box marginTop={3} sx={{
            display:'flex'
        }}>
            <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" height={325}/>
            <ImageCollage/>
        </Box>
        <Box>
        <Typography variant='h6' component='h4' marginTop={3}>
            About Movies
        </Typography>
        <Typography variant='paragraph' component='p' marginTop={3}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ipsam consectetur consequuntur temporibus doloremque dolorum libero sit. Molestiae ipsa necessitatibus deleniti, libero atque cum enim, omnis, at molestias eveniet animi.
        </Typography>
        </Box>

        <Box>
        <Typography variant='h6' component='h4' marginTop={3}>
            FAQ
        </Typography>
        <ControlledAccordian />
        </Box>
        <Box sx={{ width: 500 }}>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
            >
                <BasicModal />
            </BottomNavigation>
        </Paper>
    </Box>
    </Container>
  )
}

export default Movie