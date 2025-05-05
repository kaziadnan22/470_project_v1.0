import { Box, Container, Typography, Link } from '@mui/material'

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 2,
        px: 2,
        mt: 'auto',
        width: '100%',
        position: 'relative',
        bottom: 0,
        backgroundColor: 'primary.main',
        color: 'white',
        boxSizing: 'border-box'
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © 2025 PawResCure. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center" sx={{ mt: 1 }}>
          <Link color="inherit" href="/about" sx={{ '&:hover': { color: 'grey.300' } }}>
            About Us
          </Link>{' '}
          |{' '}
          <Link color="inherit" href="/contact" sx={{ '&:hover': { color: 'grey.300' } }}>
            Contact
          </Link>
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer