import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Chip
} from '@mui/material'
import { Download } from '@mui/icons-material'

const CertificatesList = () => {
  const [certificates] = useState([
    {
      id: 1,
      title: 'Outstanding Volunteer 2025',
      issueDate: '2025-04-14',
      status: 'Issued'
    },
    {
      id: 2,
      title: 'Pet Rescue Excellence',
      issueDate: '2025-03-20',
      status: 'Issued'
    }
  ])

  const handleDownload = (certificateId) => {
    // Implement certificate download logic
    console.log('Downloading certificate:', certificateId)
  }

  return (
    <List>
      {certificates.map((cert) => (
        <ListItem key={cert.id}>
          <ListItemText
            primary={cert.title}
            secondary={`Issued on: ${new Date(cert.issueDate).toLocaleDateString()}`}
          />
          <ListItemSecondaryAction>
            <Chip 
              label={cert.status} 
              color="success" 
              size="small" 
              sx={{ mr: 1 }}
            />
            <Button
              startIcon={<Download />}
              onClick={() => handleDownload(cert.id)}
              size="small"
              variant="outlined"
            >
              Download
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  )
}

export default CertificatesList