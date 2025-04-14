import { useState } from 'react'
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Chip,
  Button,
  Divider
} from '@mui/material'
import { LocalHospital } from '@mui/icons-material'

const VetList = () => {
  const [vets] = useState([
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'General Care',
      availability: 'Available',
      experience: '8 years',
      contact: '+880-1234-567890'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Surgery',
      availability: 'Busy',
      experience: '12 years',
      contact: '+880-1234-567891'
    }
  ])

  const getAvailabilityColor = (status) => {
    return status === 'Available' ? 'success' : 'error'
  }

  const handleContact = (contact) => {
    window.location.href = `tel:${contact}`
  }

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {vets.map((vet, index) => (
        <div key={vet.id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar>
                <LocalHospital />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="subtitle1" component="span">
                  {vet.name}
                  <Chip
                    label={vet.availability}
                    color={getAvailabilityColor(vet.availability)}
                    size="small"
                    sx={{ ml: 1 }}
                  />
                </Typography>
              }
              secondary={
                <>
                  <Typography component="span" variant="body2" color="text.primary">
                    {vet.specialty} • {vet.experience} experience
                  </Typography>
                  <br />
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleContact(vet.contact)}
                    sx={{ mt: 1 }}
                  >
                    Contact: {vet.contact}
                  </Button>
                </>
              }
            />
          </ListItem>
          {index < vets.length - 1 && <Divider variant="inset" component="li" />}
        </div>
      ))}
    </List>
  )
}

export default VetList