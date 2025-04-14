import { useState } from 'react'
import { 
  Box, 
  Container,
  Grid, 
  Typography,
  Card,
  CardContent,
  Button,
  AppBar,
  Toolbar
} from '@mui/material'
import AvailablePets from './components/AvailablePets'
import VetList from './components/VetList'
import AppointmentForm from './components/AppointmentForm'
import Chat from './components/Chat'
import FeedbackForm from './components/FeedbackForm'
import LogoutButton from '../../components/layout/LogoutButton'

const Dashboard = () => {
  const [showAppointment, setShowAppointment] = useState(false)
  const [showChat, setShowChat] = useState(false)

  return (
    <>
      <AppBar position="static" color="primary" sx={{ mb: 3 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6">Adopter Dashboard</Typography>
          <LogoutButton />
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Available Pets Section */}
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              Available Pets
            </Typography>
            <AvailablePets />
          </Grid>

          {/* Quick Actions */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Quick Actions
                </Typography>
                <Button 
                  fullWidth 
                  variant="contained" 
                  sx={{ mb: 2 }}
                  onClick={() => setShowChat(true)}
                >
                  Open Chat
                </Button>
                <Button 
                  fullWidth 
                  variant="contained"
                  onClick={() => setShowAppointment(true)}
                >
                  Book Vet Appointment
                </Button>
              </CardContent>
            </Card>

            {/* Vet List */}
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" gutterBottom>
                Available Veterinarians
              </Typography>
              <VetList />
            </Box>
          </Grid>

          {/* Feedback Form */}
          <Grid item xs={12}>
            <FeedbackForm />
          </Grid>
        </Grid>

        {/* Modals */}
        <AppointmentForm 
          open={showAppointment} 
          onClose={() => setShowAppointment(false)} 
        />
        <Chat 
          open={showChat} 
          onClose={() => setShowChat(false)} 
        />
      </Container>
    </>
  )
}

export default Dashboard