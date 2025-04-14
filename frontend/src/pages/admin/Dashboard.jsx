import { useState } from 'react'
import { 
  Box,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar
} from '@mui/material'
import LogoutButton from '../../components/layout/LogoutButton'

const AdminDashboard = () => {
  const [pendingRescues, setPendingRescues] = useState([])
  const [pendingAdoptions, setPendingAdoptions] = useState([])
  const [volunteers, setVolunteers] = useState([])

  return (
    <>
      <AppBar position="static" color="primary" sx={{ mb: 3 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6">Admin Dashboard</Typography>
          <LogoutButton />
        </Toolbar>
      </AppBar>
      
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Pending Rescues</Typography>
              <List>
                {pendingRescues.map((rescue) => (
                  <ListItem key={rescue.id}>
                    <ListItemText 
                      primary={rescue.location}
                      secondary={rescue.status}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Pending Adoptions</Typography>
              <List>
                {pendingAdoptions.map((adoption) => (
                  <ListItem key={adoption.id}>
                    <ListItemText 
                      primary={adoption.petName}
                      secondary={adoption.adopterName}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Available Volunteers</Typography>
              <List>
                {volunteers.map((volunteer) => (
                  <ListItem key={volunteer.id}>
                    <ListItemText 
                      primary={volunteer.name}
                      secondary={volunteer.status}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default AdminDashboard