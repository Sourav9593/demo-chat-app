import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendMessage } from '../store';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import { faker } from '@faker-js/faker';
import { IoSend } from "react-icons/io5";
import { deepPurple } from '@mui/material/colors';


const Chat = () => {
    const messages = useSelector((state) => state.chat.messages);
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');

    const [randomMessage, setRandomMessage] = useState("");

    // Step 2: Function to generate a random message using faker


    useEffect(() => {
        const generateRandomMessage = (() => {
            const botMessage = faker.lorem.sentence(); // Generate a random sentence
            setRandomMessage(botMessage);
        })();
    }, [message])


    const handleSendMessage = () => {
        if (message.trim()) {
            dispatch(sendMessage({ id: Date.now(), sender: 'user', text: message }));
            setMessage('');
        }

        if (message.trim()) {

            setTimeout(() => {
                dispatch(sendMessage({ id: Date.now(), sender: 'bot', text: randomMessage }));
            }, 1500);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh', // Full viewport height
                maxWidth: '600px',
                margin: '10px auto',
                
            }}
        >
            {/* Chat messages list */}
            <Paper
                sx={{
                    flexGrow: 1, // Make the messages area grow to take up available space
                    p: 2,
                    overflowY: 'auto', // Scrollable messages section
                    bgcolor: deepPurple[100]
                }}
            >
                {messages.map((msg) => (
                    <Box
                        key={msg.id}
                        sx={{
                            display: 'flex',
                            justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                            mb: 1,
                        }}
                    >
                        <Typography
                            sx={{
                                backgroundColor: msg.sender === 'user' ? 'primary.main' : 'grey.300',
                                color: msg.sender === 'user' ? 'white' : 'black',
                                borderRadius: '10px',
                                p: 1,
                                maxWidth: '80%',
                            }}
                        >
                            {msg.text}
                        </Typography>
                    </Box>
                ))}
            </Paper>

            {/* Input section (fixed at bottom) */}
            <Box
                sx={{
                    display: 'flex',
                    p: 2,
                    boxShadow: '0 -1px 5px rgba(0,0,0,0.1)', // Shadow for input section
                    backgroundColor: 'white',
                    position: 'sticky',
                    bottom: 0, // Fix input box to the bottom
                    
                }}
            >
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button variant="contained" sx={{
                    ml: 2, borderRadius: '50%',
                    bgcolor: deepPurple[500],   // Set background color to purple[500]
                    color: 'white',         // Set text color to white
                    '&:hover': {
                        bgcolor: deepPurple[700], // Darken the color on hover
                    }
                }} onClick={handleSendMessage} >
                    <IoSend style={{ fontSize: "20px" }} />
                </Button>
            </Box>
        </Box>
    );
};

export default Chat;
