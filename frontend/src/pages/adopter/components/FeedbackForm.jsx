import { useState } from 'react'
import {
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Rating,
  Alert,
  Snackbar
} from '@mui/material'

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    message: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleRatingChange = (_, value) => {
    setFormData(prev => ({
      ...prev,
      rating: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // TODO: Implement API call to submit feedback
      console.log('Feedback submitted:', formData)
      setShowSuccess(true)
      setFormData({
        name: '',
        email: '',
        rating: 0,
        message: ''
      })
    } catch (error) {
      console.error('Error submitting feedback:', error)
    }
  }

  return (
    <Paper sx={{ p: 3, mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Share Your Feedback
      </Typography>
      
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
        />

        <Box sx={{ my: 2 }}>
          <Typography component="legend">Rate your experience</Typography>
          <Rating
            name="rating"
            value={formData.rating}
            onChange={handleRatingChange}
            size="large"
          />
        </Box>

        <TextField
          fullWidth
          label="Your Message"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          margin="normal"
          required
        />

        <Button 
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          fullWidth
        >
          Submit Feedback
        </Button>
      </Box>

      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
      >
        <Alert 
          severity="success" 
          onClose={() => setShowSuccess(false)}
        >
          Thank you for your feedback!
        </Alert>
      </Snackbar>
    </Paper>
  )
}

export default FeedbackForm