import { Box, Typography, LinearProgress } from '@mui/material'

const VolunteerStats = ({ stats }) => {
  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Hours Volunteered
        </Typography>
        <Typography variant="h4">
          {stats.hoursSpent}
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={(stats.hoursSpent / 100) * 100} 
          sx={{ mt: 1 }}
        />
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Pets Rescued
        </Typography>
        <Typography variant="h4">
          {stats.petsRescued}
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={(stats.petsRescued / 10) * 100} 
          color="success"
          sx={{ mt: 1 }}
        />
      </Box>

      <Box>
        <Typography variant="body2" color="text.secondary">
          Certificates Earned
        </Typography>
        <Typography variant="h4">
          {stats.certificatesEarned}
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={(stats.certificatesEarned / 5) * 100} 
          color="secondary"
          sx={{ mt: 1 }}
        />
      </Box>
    </Box>
  )
}

export default VolunteerStats