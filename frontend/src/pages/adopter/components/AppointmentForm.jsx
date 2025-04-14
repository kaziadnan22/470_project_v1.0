import { useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Alert
} from '@mui/material'

const AppointmentForm = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    vetId: '',
    date: '',
    timeSlot: '',
    petType: '',
    reason: ''
  })
  const [error, setError] = useState('')

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '02:00 PM', '03:00 PM', '04:00 PM'
  ]

  const petTypes = [
    'Dog', 'Cat', 'Bird', 'Other'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // TODO: Implement API call to book appointment
      console.log('Booking appointment:', formData)
      onClose()
    } catch (err) {
      setError('Failed to book appointment. Please try again.')
    }
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Book Vet Appointment</DialogTitle>
      <DialogContent>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <FormControl fullWidth margin="normal" required>
            <InputLabel>Pet Type</InputLabel>
            <Select
              name="petType"
              value={formData.petType}
              onChange={handleChange}
              label="Pet Type"
            >
              {petTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Preferred Date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            margin="normal"
            required
          />

          <FormControl fullWidth margin="normal" required>
            <InputLabel>Time Slot</InputLabel>
            <Select
              name="timeSlot"
              value={formData.timeSlot}
              onChange={handleChange}
              label="Time Slot"
            >
              {timeSlots.map((slot) => (
                <MenuItem key={slot} value={slot}>
                  {slot}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Reason for Visit"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            multiline
            rows={4}
            margin="normal"
            required
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Book Appointment
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AppointmentForm