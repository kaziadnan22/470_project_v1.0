import { useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box
} from '@mui/material'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const PetRescueForm = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    description: '',
    location: '',
    image: null,
    coordinates: { lat: 0, lng: 0 }
  })

  const handleMapClick = (event) => {
    setFormData(prev => ({
      ...prev,
      coordinates: {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }
    }))
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    setFormData(prev => ({
      ...prev,
      image: file
    }))
  }

  const handleSubmit = async () => {
    // TODO: Implement API call to save rescue request
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Report Rescuable Pet</DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 2 }}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Description"
            value={formData.description}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              description: e.target.value
            }))}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Location Description"
            value={formData.location}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              location: e.target.value
            }))}
            sx={{ mb: 2 }}
          />

          <input
            accept="image/*"
            type="file"
            onChange={handleImageUpload}
            style={{ marginBottom: '1rem' }}
          />

          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '400px' }}
              center={{ lat: 23.8103, lng: 90.4125 }} // Default to Dhaka
              zoom={13}
              onClick={handleMapClick}
            >
              {formData.coordinates.lat !== 0 && (
                <Marker position={formData.coordinates} />
              )}
            </GoogleMap>
          </LoadScript>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default PetRescueForm