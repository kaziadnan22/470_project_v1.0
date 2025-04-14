import { 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions,
  Typography,
  Button 
} from '@mui/material'

const AvailablePets = () => {
  const pets = [
    {
      id: 1,
      name: 'Max',
      type: 'Dog',
      age: '2 years',
      image: '/placeholder.jpg',
      description: 'Friendly and energetic'
    }
    // Add more pets as needed
  ]

  const handleAdoptRequest = (petId) => {
    // Implement adoption request logic
    console.log('Adoption requested for pet:', petId)
  }

  return (
    <Grid container spacing={2}>
      {pets.map((pet) => (
        <Grid item xs={12} sm={6} key={pet.id}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={pet.image}
              alt={pet.name}
            />
            <CardContent>
              <Typography variant="h6">{pet.name}</Typography>
              <Typography color="textSecondary">
                {pet.type} • {pet.age}
              </Typography>
              <Typography variant="body2">{pet.description}</Typography>
            </CardContent>
            <CardActions>
              <Button 
                size="small" 
                variant="contained" 
                onClick={() => handleAdoptRequest(pet.id)}
              >
                Adopt Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default AvailablePets