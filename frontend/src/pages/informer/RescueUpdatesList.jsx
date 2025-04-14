import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material'

const RescueUpdatesList = () => {
  const updates = [
    // Sample data - replace with actual data from API
    {
      id: 1,
      message: 'Pet has been rescued successfully',
      timestamp: new Date().toLocaleString()
    }
  ]

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Rescue Updates
      </Typography>
      <List>
        {updates.map((update) => (
          <ListItem key={update.id}>
            <ListItemText
              primary={update.message}
              secondary={update.timestamp}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default RescueUpdatesList