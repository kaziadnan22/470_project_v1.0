import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Box
} from '@mui/material'

const VetAppointment = ({ onClose }) => {
  const vets = [
    { id: 1, name: 'Dr. Smith', specialty: 'General' },
    { id: 2, name: 'Dr. Johnson', specialty: 'Surgery' }
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    // TODO: Implement appointment booking logic
    onClose()
  }

  return (
    <>
      <DialogTitle>Book Vet Appointment</DialogTitle>
      <DialogContent>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            select
            fullWidth
            label="Select Vet"
            margin="normal"
            required
          >
            {vets.map((vet) => (
              <MenuItem key={vet.id} value={vet.id}>
                {vet.name} - {vet.specialty}
              </MenuItem>
            ))}
          </TextField>
          
          <TextField
            type="date"
            fullWidth
            label="Appointment Date"
            margin="normal"
            required
            InputLabelProps={{ shrink: true }}
          />
          
          <TextField
            select
            fullWidth
            label="Time Slot"
            margin="normal"
            required
          >
            <MenuItem value="09:00">9:00 AM</MenuItem>
            <MenuItem value="10:00">10:00 AM</MenuItem>
            <MenuItem value="11:00">11:00 AM</MenuItem>
          </TextField>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit" variant="contained" color="primary">
          Book Appointment
        </Button>
      </DialogActions>
    </>
  )
}

export default VetAppointment