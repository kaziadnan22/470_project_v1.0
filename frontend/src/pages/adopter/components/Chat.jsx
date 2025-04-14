import { useState, useRef, useEffect } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  IconButton,
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material'
import { Send, Close } from '@mui/icons-material'

const Chat = ({ open, onClose }) => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Admin',
      text: 'Hello! How can we help you today?',
      timestamp: new Date().toLocaleTimeString()
    }
  ])
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = (e) => {
    e.preventDefault()
    if (!message.trim()) return

    const newMessage = {
      id: messages.length + 1,
      sender: 'You',
      text: message,
      timestamp: new Date().toLocaleTimeString()
    }

    setMessages([...messages, newMessage])
    setMessage('')
  }

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        Chat Support
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </DialogTitle>
      
      <DialogContent>
        <Paper 
          sx={{ 
            height: '400px', 
            overflow: 'auto',
            bgcolor: '#f5f5f5',
            mb: 2
          }}
        >
          <List>
            {messages.map((msg) => (
              <ListItem
                key={msg.id}
                sx={{
                  justifyContent: msg.sender === 'You' ? 'flex-end' : 'flex-start'
                }}
              >
                <Paper
                  sx={{
                    p: 1,
                    maxWidth: '70%',
                    bgcolor: msg.sender === 'You' ? 'primary.main' : 'white',
                    color: msg.sender === 'You' ? 'white' : 'inherit'
                  }}
                >
                  <Typography variant="subtitle2" fontWeight="bold">
                    {msg.sender}
                  </Typography>
                  <Typography variant="body1">
                    {msg.text}
                  </Typography>
                  <Typography variant="caption" display="block">
                    {msg.timestamp}
                  </Typography>
                </Paper>
              </ListItem>
            ))}
            <div ref={messagesEndRef} />
          </List>
        </Paper>

        <Box 
          component="form" 
          onSubmit={handleSend}
          sx={{ 
            display: 'flex',
            gap: 1
          }}
        >
          <TextField
            fullWidth
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            variant="outlined"
            size="small"
          />
          <IconButton 
            type="submit" 
            color="primary"
            disabled={!message.trim()}
          >
            <Send />
          </IconButton>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default Chat