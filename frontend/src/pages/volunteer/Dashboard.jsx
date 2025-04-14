import { useState } from 'react'
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Chip,
  Button,
  AppBar,
  Toolbar
} from '@mui/material'
import RescueMap from './components/RescueMap'
import VolunteerStats from './components/VolunteerStats'
import CertificatesList from './components/CertificatesList'
import ActiveRescues from './components/ActiveRescues'
import LogoutButton from '../../components/layout/LogoutButton'

const Dashboard = () => {
  const [stats] = useState({
    hoursSpent: 24,
    petsRescued: 5,
    certificatesEarned: 2
  })

  return (
    <>
      <AppBar position="static" color="primary" sx={{ mb: 3 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6">Volunteer Dashboard</Typography>
          <LogoutButton />
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Profile Stats */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Volunteer Profile
              </Typography>
              <VolunteerStats stats={stats} />
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Contact Hotline
                </Typography>
                <Chip 
                  label="Emergency: +1-234-567-8900" 
                  color="error" 
                  sx={{ mt: 1 }}
                />
              </Box>
            </Paper>
          </Grid>

          {/* Active Rescues */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Active Rescue Operations
              </Typography>
              <ActiveRescues />
            </Paper>
          </Grid>

          {/* Rescue Map */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, height: '400px' }}>
              <Typography variant="h6" gutterBottom>
                Rescue Locations
              </Typography>
              <RescueMap />
            </Paper>
          </Grid>

          {/* Certificates */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Certificates & Achievements
              </Typography>
              <CertificatesList />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Dashboard