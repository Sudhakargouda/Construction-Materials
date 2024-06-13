import React, { useState, useEffect } from 'react';
import { Box, TextField, Button } from '@mui/material';

const Chatbot = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [recognition, setRecognition] = useState(null);

    // Initialize speech recognition
    useEffect(() => {
        const recognition = new window.webkitSpeechRecognition(); // For Chrome
        // const recognition = new window.SpeechRecognition(); // For Firefox

        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = () => {
            console.log('Voice recognition started');
        };

        recognition.onend = () => {
            console.log('Voice recognition ended');
        };

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            console.log('Voice recognition result:', transcript);
            setInput(transcript);
        };

        setRecognition(recognition);
    }, []);

    // Function to start voice recognition
    const startVoiceRecognition = () => {
        if (recognition) {
            recognition.start();
        }
    };

    // Function to handle user input
    const handleInput = (e) => {
        setInput(e.target.value);
    };

    // Function to send user message to the chat
    const sendMessage = () => {
        if (input.trim() !== '') {
            setMessages([...messages, { text: input, sender: 'user' }]);
            setInput('');
        }
    };

    // Function to generate a random ID for messages
    const generateId = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    // Function to simulate bot response
    const handleBotResponse = () => {
        // Simulate bot response after 1 second
        setTimeout(() => {
            const response = { id: generateId(), text: 'This is a sample response from the chatbot.', sender: 'bot' };
            setMessages([...messages, response]);
        }, 1000);
    };

    // Function to handle sending message on Enter key press
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    useEffect(() => {
        if (messages.length > 0 && messages[messages.length - 1].sender === 'user') {
            handleBotResponse();
        }
    }, [messages]);

    return (
        <Box sx={{ position: 'fixed', bottom: 0, right: 20, width: 400, border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#fff' }}>
            <Box sx={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
                <TextField
                    label="Type your message..."
                    value={input}
                    onChange={handleInput}
                    onKeyPress={handleKeyPress}
                    fullWidth
                />
            </Box>
            <Box sx={{ padding: '20px', maxHeight: '300px', overflowY: 'auto' }}>
                {messages.map((message) => (
                    <div key={message.id} style={{ marginBottom: '10px', textAlign: message.sender === 'bot' ? 'left' : 'right' }}>
                        <span style={{ padding: '5px 10px', borderRadius: '10px', backgroundColor: message.sender === 'bot' ? '#e0e0e0' : '#3f51b5', color: message.sender === 'bot' ? '#333' : '#fff' }}>
                            {message.text}
                        </span>
                    </div>
                ))}
            </Box>
            <Box sx={{ padding: '20px', textAlign: 'center' }}>
                <Button variant="contained" onClick={startVoiceRecognition}>Voice Input</Button>
            </Box>
        </Box>
    );
};

export default Chatbot;
