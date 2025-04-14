import { Box, Container, Typography, Link } from '@mui/material'

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: 'primary.main', color: 'white' }}>
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          © 2025 PawResCure. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center">
          <Link color="inherit" href="/about">
            About Us
          </Link>{' '}
          |{' '}
          <Link color="inherit" href="/contact">
            Contact
          </Link>
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer