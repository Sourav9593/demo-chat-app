// src/components/ChatList.js
import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider } from '@mui/material';

const chats = [
  { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?' },
  { id: 2, name: 'Jane Smith', lastMessage: 'Let’s catch up tomorrow.' },
  { id: 3, name: 'Group Chat', lastMessage: 'Meeting is scheduled at 3 PM.' },
];

const ChatList = ({ onSelectChat }) => {
  return (
    <List>
      {chats.map((chat) => (
        <React.Fragment key={chat.id}>
          <ListItem button onClick={() => onSelectChat(chat.id)}>
            <ListItemAvatar>
              <Avatar>{chat.name[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={chat.name}
              secondary={chat.lastMessage}
            />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};

export default ChatList;
