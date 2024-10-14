// src/App.js
import React, { useState } from 'react';
import { Container, Typography, AppBar, Toolbar, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import { deepPurple } from '@mui/material/colors';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedChatId, setSelectedChatId] = useState(null);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setSidebarOpen(open);
  };

  const handleSelectChat = (id) => {
    setSelectedChatId(id);
    setSidebarOpen(false); // Close sidebar after selecting a chat
  };

  return (
    <div>
      <AppBar position="static" sx={{
                bgcolor: deepPurple[500],   // Set background color to purple[500]
                color: 'white',         // Set text color to white
                '&:hover': {
                  bgcolor: deepPurple[700], // Darken the color on hover
                }
              }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Chat App
          </Typography>
        </Toolbar>
      </AppBar>

      <Sidebar
        isOpen={isSidebarOpen}
        toggleDrawer={toggleDrawer}
        onSelectChat={handleSelectChat}
      />

      <Container>
        {selectedChatId ? (
          <Chat chatId={selectedChatId} />
        ) : (
          <>
            <center style={{ marginTop: "40px", fontSize: "30px" }}>Click to start chat</center>
            <Typography variant="h6" align="center" sx={{ mt: 4 }}>
              {/* Select a chat to start messaging */}
              <Button variant="contained" 
              sx={{
                bgcolor: deepPurple[500],   // Set background color to purple[500]
                color: 'white',         // Set text color to white
                '&:hover': {
                  bgcolor: deepPurple[700], // Darken the color on hover
                }
              }} 
              onClick={() => { handleSelectChat(1) }}>Click here</Button>
            </Typography>
          </>
        )}
      </Container>
    </div>
  );
}

export default App;
