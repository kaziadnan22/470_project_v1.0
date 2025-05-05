import { Box, Typography, Container, Grid, Button } from '@mui/material'

const Home = () => {
  return (
    <Container>
      <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                minHeight: '100vh', 
                justifyContent: 'center', 
                alignItems: 'center', 
                textAlign: 'center' 
              }}
      >
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Welcome to PawResCure
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary">
          Helping pets find their forever homes
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <Button 
              variant="contained" 
              color="primary" 
              fullWidth 
              href="/register"
            >
              Register as Volunteer
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button 
              variant="contained" 
              color="secondary" 
              fullWidth 
              href="/register"
            >
              Report a Pet
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button 
              variant="contained" 
              color="success" 
              fullWidth 
              href="/register"
            >
              Adopt a Pet
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Home