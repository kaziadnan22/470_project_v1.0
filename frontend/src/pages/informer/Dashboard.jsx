import { useState } from 'react'
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Card,
  CardContent,
  Badge
} from '@mui/material'
import LogoutButton from '../../components/layout/LogoutButton'
import PetRescueForm from './PetRescueForm'
import RescueUpdatesList from './RescueUpdatesList'
import InformerProfile from './InformerProfile'

const InformerDashboard = () => {
  const [showRescueForm, setShowRescueForm] = useState(false)

  return (
    <>
      <AppBar position="static" color="primary" sx={{ mb: 3 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6">Informer Dashboard</Typography>
          <LogoutButton />
        </Toolbar>
      </AppBar>

      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <InformerProfile />
          </Grid>
          
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2, mb: 3 }}>
              <Button 
                variant="contained" 
                color="primary"
                onClick={() => setShowRescueForm(true)}
              >
                Report New Rescue Case
              </Button>
            </Paper>
            
            <RescueUpdatesList />
          </Grid>
        </Grid>

        {showRescueForm && (
          <PetRescueForm 
            open={showRescueForm}
            onClose={() => setShowRescueForm(false)}
          />
        )}
      </Box>
    </>
  )
}

export default InformerDashboard