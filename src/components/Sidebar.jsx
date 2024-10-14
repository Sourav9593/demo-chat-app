// src/components/Sidebar.js
import React from 'react';
import { Box, Typography, Divider, Drawer } from '@mui/material';
import ChatList from './ChatList';

const Sidebar = ({ isOpen, toggleDrawer, onSelectChat }) => {
  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={toggleDrawer(false)}
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <Typography variant="h6" align="center" sx={{ p: 1 }}>
          Chats
        </Typography>
        <ChatList onSelectChat={onSelectChat} />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
