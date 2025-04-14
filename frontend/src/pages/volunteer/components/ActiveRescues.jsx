import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Chip,
  IconButton,
  Box
} from '@mui/material'
import { Pets, NavigationOutlined, Check } from '@mui/icons-material'

const ActiveRescues = () => {
  const [rescues] = useState([
    {
      id: 1,
      location: 'Gulshan 1, Dhaka',
      status: 'In Progress',
      description: 'Injured stray cat needs immediate assistance',
      time: '10 mins ago'
    },
    {
      id: 2,
      location: 'Banani, Dhaka',
      status: 'Pending',
      description: 'Abandoned puppy reported',
      time: '30 mins ago'
    }
  ])

  const handleNavigate = (location) => {
    // Implement navigation logic
    console.log('Navigating to:', location)
  }

  const handleComplete = (id) => {
    // Implement rescue completion logic
    console.log('Completing rescue:', id)
  }

  return (
    <List>
      {rescues.map((rescue) => (
        <ListItem
          key={rescue.id}
          secondaryAction={
            <Box>
              <IconButton 
                edge="end" 
                onClick={() => handleNavigate(rescue.location)}
                sx={{ mr: 1 }}
              >
                <NavigationOutlined />
              </IconButton>
              <IconButton 
                edge="end" 
                onClick={() => handleComplete(rescue.id)}
              >
                <Check />
              </IconButton>
            </Box>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <Pets />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={rescue.location}
            secondary={
              <>
                {rescue.description}
                <br />
                <Chip 
                  size="small" 
                  label={rescue.status} 
                  color={rescue.status === 'In Progress' ? 'warning' : 'info'}
                  sx={{ mt: 1 }}
                />
                <Chip 
                  size="small" 
                  label={rescue.time} 
                  variant="outlined"
                  sx={{ ml: 1, mt: 1 }}
                />
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  )
}

export default ActiveRescues