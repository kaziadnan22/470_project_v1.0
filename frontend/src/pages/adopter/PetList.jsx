import { useState } from 'react'
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material'

const PetList = () => {
  const [selectedPet, setSelectedPet] = useState(null)
  
  const pets = [
    {
      id: 1,
      name: 'Max',
      type: 'Dog',
      breed: 'Golden Retriever',
      age: '2 years',
      image: 'path/to/image',
      description: 'Friendly and energetic dog looking for a loving home.'
    }
    // Add more pets here
  ]

  const handleAdoptRequest = (pet) => {
    // TODO: Implement adoption request logic
    setSelectedPet(pet)
  }

  return (
    <>
      <Grid container spacing={3}>
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
                <Typography variant="body2" color="text.secondary">
                  {pet.type} • {pet.breed} • {pet.age}
                </Typography>
                <Typography variant="body2">
                  {pet.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  size="small" 
                  variant="contained"
                  onClick={() => handleAdoptRequest(pet)}
                >
                  Adopt Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog 
        open={Boolean(selectedPet)} 
        onClose={() => setSelectedPet(null)}
      >
        <DialogTitle>Confirm Adoption Request</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to request adoption for {selectedPet?.name}?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSelectedPet(null)}>Cancel</Button>
          <Button variant="contained" color="primary">
            Confirm Request
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default PetList