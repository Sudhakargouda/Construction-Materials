import React, { useEffect, useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { styled, keyframes } from '@mui/system';

// Define the heartbeat animation
const heartbeat = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
`;

// Style the button with the heartbeat animation
const FloatingButton = styled(IconButton)`
  position: fixed;
  bottom: 15px;
  right: 20px;
  background-color: #25D366;
  color: white;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  z-index: 1000;
  animation: ${heartbeat} 1.5s infinite ease-in-out; // Add heartbeat animation
  &:hover {
    background-color: #1DA851;
  }
`;

const FloatingWhatsAppButton = () => {
  return (
    <Tooltip title="Chat with us on WhatsApp" aria-label="chat with us on whatsapp">
      <FloatingButton
        aria-label="WhatsApp"
        href="https://wa.me/9353236451" 
        target="_blank"
      >
        <WhatsAppIcon sx={{ fontSize: '24px' }} />
      </FloatingButton>
    </Tooltip>
  );
};

export default FloatingWhatsAppButton;
