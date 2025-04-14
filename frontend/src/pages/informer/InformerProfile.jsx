import {
  Paper,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button
} from '@mui/material'

const InformerProfile = () => {
  const profile = {
    name: "John Doe",
    petsInformed: 5,
    certificates: [
      "Outstanding Informer 2025",
      "Community Hero Award"
    ]
  }

  const downloadCertificate = (certName) => {
    // TODO: Implement certificate download
  }

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Informer Profile
      </Typography>
      
      <Box sx={{ my: 2 }}>
        <Typography variant="body1">
          <strong>Name:</strong> {profile.name}
        </Typography>
        <Typography variant="body1">
          <strong>Pets Reported:</strong> {profile.petsInformed}
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Typography variant="subtitle1" gutterBottom>
        Certificates
      </Typography>
      
      <List>
        {profile.certificates.map((cert, index) => (
          <ListItem key={index}>
            <ListItemText primary={cert} />
            <Button 
              size="small" 
              variant="outlined"
              onClick={() => downloadCertificate(cert)}
            >
              Download
            </Button>
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default InformerProfile