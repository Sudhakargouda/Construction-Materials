import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Paper, IconButton } from '@mui/material';
import { Send as SendIcon, Chat as ChatIcon } from '@mui/icons-material';
import { useSpeechRecognition } from 'react-speech-recognition';
import { styled, keyframes } from '@mui/system';

const predefinedResponses = {
    // Existing Responses
    "What is cement": "Cement is a binder used in construction that sets and hardens to bind other materials together.",
    "What types of cement are available": "The most common types of cement are Ordinary Portland Cement (OPC) and Portland Pozzolana Cement (PPC).",
    "How do I calculate the amount of concrete needed": "To calculate concrete volume, use the formula: Volume = Length × Breadth × Depth.",
    "What is the difference between sand and aggregate": "Sand is finer and used to fill gaps between larger aggregate materials like gravel or crushed stone, which provide structural strength.",
    "What are the common grades of concrete": "Common grades of concrete include M10, M15, M20, M25, and M30. M20 is commonly used for residential buildings.",
    "What is the use of steel in construction": "Steel is used in construction for structural support due to its high strength and flexibility. It’s commonly used in beams, columns, and reinforcements.",
    "How do I calculate the cost of a contractor": "Contractor costs can be calculated based on hourly rates, project scope, and materials needed. Get a detailed estimate from the contractor.",
    "How do I use a paint calculator": "A paint calculator estimates the amount of paint needed based on the area to be covered. Input dimensions of your walls to get an estimate.",
    "Where can I buy construction materials": "You can buy construction materials from local hardware stores, specialized suppliers, or online e-commerce platforms.",
    "Hi": "Hello! How can I assist you today",
    "Bye": "Goodbye! Have a great day!",
    "Hello": "Hello there! Did you hear about the construction worker who was always in a hurry? He just couldn’t stop rushing things!",
    "Tell me a joke": "Why did the scarecrow become a successful construction worker? Because he was outstanding in his field!",
    "What are aggregates": "Aggregates are materials like gravel, sand, and crushed stone used in construction to provide strength and stability.",
    "What is sand used for in construction": "Sand is used in construction for making concrete, mortar, and plaster. It helps to improve the texture and strength of these materials.",
    "Where can I find construction material deals": "Check online marketplaces, local hardware stores, and specialized suppliers for discounts and deals on construction materials.",
    // Additional Responses
    "What is paint primer used for": "Paint primer is used to prepare a surface for painting by improving adhesion, covering stains, and ensuring even color application.",
    "How do I choose the right type of paint for my project": "Select paint based on the surface type, desired finish (e.g., matte, gloss), and durability. Consult with a paint specialist for specific recommendations.",
    "What are the benefits of using water-based paint": "Water-based paints dry faster, have lower levels of volatile organic compounds (VOCs), and are easier to clean with soap and water.",
    "What is the purpose of using steel reinforcement in concrete": "Steel reinforcement is used in concrete to enhance its tensile strength, helping it withstand stretching forces and prevent cracks.",
    "How do I calculate the amount of steel needed for reinforcement": "Calculate steel reinforcement based on the design specifications, including the size and spacing of rebar. Consult structural engineering guidelines for accurate calculations.",
    "What types of aggregates are commonly used in construction": "Common aggregates include gravel, crushed stone, and sand. They are used to provide strength and stability in concrete and asphalt mixes.",
    "How do I calculate the cost of construction materials": "Calculate the cost of construction materials by determining the quantity needed and multiplying it by the unit price. Include additional costs like delivery and taxes.",
    "How can I estimate paint coverage for a room": "Estimate paint coverage by measuring the area of the walls and ceilings. Most paints cover around 350-400 square feet per gallon. Adjust based on the number of coats needed.",
    "What is the difference between latex and oil-based paint": "Latex paint is water-based, dries faster, and is easier to clean, while oil-based paint is more durable and suitable for surfaces requiring a tough finish.",
    "What factors affect the price of steel?": "The price of steel is influenced by factors such as market demand, raw material costs, production costs, and global economic conditions.",
    "What is the purpose of an aggregate in concrete": "Aggregates provide bulk, strength, and stability to concrete. They help to reduce shrinkage and improve the overall durability of the concrete mix.",
    "How do I use a construction cost calculator": "Input project details such as size, materials, and labor costs into a construction cost calculator to estimate the total cost of your project.",
    "How do I calculate the amount of paint needed for a surface?": "To calculate paint needed, measure the surface area (length × height) and divide by the coverage rate of the paint (usually in square feet per gallon).",
    "Where can I find reviews for construction materials": "Check online marketplaces, product review sites, and forums for reviews and ratings of construction materials to make informed purchasing decisions.",
    "What is the best way to store construction materials": "Store construction materials in a dry, well-ventilated area to prevent damage. Ensure materials are kept off the ground and protected from moisture and extreme temperatures.",
    "How do I handle returns for construction materials purchased online": "Check the return policy of the e-commerce platform or supplier. Generally, you need to contact customer service, provide order details, and follow the return instructions."
};


const heartbeat = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
`;

const ChatButton = styled(IconButton)`
  position: fixed;
  bottom: 80px;
  right: 20px;
  background-color: #25D366;
  color: #fff;
  border-radius: 50%;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  animation: ${heartbeat} 1.5s infinite ease-in-out;
  &:hover {
    background-color: #1DA851;
  }
`;

const Chatbott = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isChatOpen, setIsChatOpen] = useState(false);

    // Extract speech recognition functions
    const {
        transcript,
        resetTranscript,
        listening,
        startListening,
        stopListening
    } = useSpeechRecognition();

    // Handle sending message
    const handleSend = () => {
        if (input.trim()) {
            const response = predefinedResponses[input] || "Sorry, I don't understand the question.";
            setMessages([...messages, { text: input, type: 'user' }, { text: response, type: 'bot' }]);
            setInput('');
            speakResponse(response);
        }
    };

    // Convert text to speech
    const speakResponse = (text) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
    };

    // Handle voice command
    const handleVoiceCommand = () => {
        if (listening) {
            stopListening();
        } else {
            startListening();
        }
    };

    // Handle voice input
    const handleVoiceInput = () => {
        if (transcript.trim()) {
            const response = predefinedResponses[transcript] || "Sorry, I don't understand the question.";
            setMessages([...messages, { text: transcript, type: 'user' }, { text: response, type: 'bot' }]);
            speakResponse(response);
            resetTranscript();
        }
    };

    // Toggle chat and speech recognition
    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
        if (!isChatOpen && startListening) {
            startListening();  // Automatically start listening when chat is opened
        } else if (stopListening) {
            stopListening();
        }
    };

    // Handle transcript updates
    useEffect(() => {
        if (transcript) {
            handleVoiceInput();
        }
    }, [transcript]);

    return (
        <>
            {isChatOpen && (
                <Box sx={{
                    position: 'fixed',
                    bottom: '138px',
                    right: '16px',
                    width: '300px',
                    height: '400px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    backgroundColor: '#fff',
                    zIndex: 1000
                }}>
                    <Paper elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ flex: 1, padding: '10px', overflowY: 'scroll' }}>
                            {messages.map((msg, index) => (
                                <Typography key={index} align={msg.type === 'user' ? 'right' : 'left'} sx={{ marginBottom: '10px' }}>
                                    <Box sx={{
                                        display: 'inline-block',
                                        padding: '10px',
                                        borderRadius: '10px',
                                        backgroundColor: msg.type === 'user' ? '#e0f7fa' : '#e1bee7',
                                        maxWidth: '80%',
                                        wordBreak: 'break-word'
                                    }}>
                                        {msg.text}
                                    </Box>
                                </Typography>
                            ))}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
                            <TextField
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                variant="outlined"
                                size="small"
                                sx={{ flex: 1, marginRight: '10px' }}
                            />
                            <Button variant="contained" onClick={handleSend} endIcon={<SendIcon />}>
                                Send
                            </Button>
                        </Box>
                    </Paper>
                </Box>
            )}
            <ChatButton onClick={toggleChat}>
                <ChatIcon />
            </ChatButton>
        </>
    );
};

export default Chatbott;
