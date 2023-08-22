import { Box, Grid, Rating, Typography, createTheme,ThemeProvider } from '@mui/material';
import Paper from '@mui/material/Paper';
import { AccessTime } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'body2'
                    },
                    style: {
                        fontSize: 11
                    }
                },
                {
                    props: {
                        variant: 'body3'
                    },
                    style: {
                        fontSize: 11
                    }
                }
            ]
        }
    }
})

const MovieCard = ({movie}) => {
  const navigate = useNavigate();
  return (
    <Grid item xs={4}>
    <ThemeProvider theme={theme}>
        <Paper onClick={() => navigate(`/${movie.id}`)} elevation={7}>
            <img src={movie.image} alt={movie.name} className='img'/>
            <Box padding={1}>
                <Typography variant='subtitle1' component="h2">
                    {movie.name}
                </Typography>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                    <AccessTime sx={{
                        width: 12.5
                    }} />
                    <Typography variant='body2' component="p" marginLeft={0.5}>
                        {movie.duration}
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: 3
                }}>
                <Rating 
                    name='read-only'
                    value={4.5}
                    precision={0.5}
                    readOnly
                    size='small'
                 />
                <Typography variant='body2' component="p" marginLeft={0.5}>
                    {movie.rating}
                </Typography>
                <Typography variant='body3' component="p" marginLeft={0.5}>
                    ({movie.numberOfReviews})
                </Typography>
                </Box>
                <Box>
                <Typography variant='h6' component="h3" marginLeft={0.5}>
                    {movie.ratingsGuide}
                </Typography>
                </Box>
            </Box>
        </Paper>
    </ThemeProvider>
    </Grid>
  )
}

export default MovieCard;