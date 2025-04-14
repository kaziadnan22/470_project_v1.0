import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Logout as LogoutIcon } from '@mui/icons-material'

const LogoutButton = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    // TODO: Implement logout logic (clear auth tokens, user data etc.)
    navigate('/login')
  }

  return (
    <Button
      variant="outlined"
      color="inherit"
      onClick={handleLogout}
      startIcon={<LogoutIcon />}
    >
      Logout
    </Button>
  )
}

export default LogoutButton