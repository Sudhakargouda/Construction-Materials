import React from 'react';
import { Box, Container, Typography, styled, Card, CardContent, Avatar, Grid, IconButton } from '@mui/material';
import { keyframes } from '@mui/system';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FloatingWhatsAppButton from './FloatingWhatsAppButton';
import Chatbott from './Chatbott';

const Contractor = () => {
  // Hardcoded contractor data
  const contractors = [
    {
      id: '1',
      name: 'John Doe',
      photo: 'c1.jpg',
      description: 'John is a skilled contractor with over 10 years of experience in construction and renovation projects.',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      whatsapp: '1234567890'
    },
    {
      id: '2',
      name: 'Emily Davis',
      photo: 'c6.jpg',
      description: 'Emily has extensive experience in green building practices and energy-efficient solutions.',
      email: 'emily.davis@example.com',
      phone: '456-789-0123',
      whatsapp: '4567890123'
    },
    {
      id: '3',
      name: 'Jane Smith',
      photo: 'c2.jpg',
      description: 'Jane specializes in residential remodeling and has a knack for creative designs.',
      email: 'jane.smith@example.com',
      phone: '234-567-8901',
      whatsapp: '2345678901'
    },
    {
      id: '4',
      name: 'Michael Johnson',
      photo: 'c3.jpg',
      description: 'Michael is an expert in commercial construction and project management.',
      email: 'michael.johnson@example.com',
      phone: '345-678-9012',
      whatsapp: '3456789012'
    },
    {
      id: '5',
      name: 'Chris Brown',
      photo: 'c4.jpg',
      description: 'Chris is known for his attention to detail and high-quality craftsmanship in custom home building.',
      email: 'chris.brown@example.com',
      phone: '567-890-1234',
      whatsapp: '5678901234'
    },
    {
      id: '6',
      name: 'James Anderson',
      photo: 'c9.jpg',
      description: 'James is a highly skilled contractor with extensive experience in home renovations and project management.',
      email: 'james.anderson@example.com',
      phone: '678-901-2345',
      whatsapp: '6789012345'
    },
    {
      id: '7',
      name: 'David Clark',
      photo: 'c10.jpg',
      description: 'David has expertise in high-rise building projects and urban developments.',
      email: 'david.clark@example.com',
      phone: '789-012-3456',
      whatsapp: '7890123456'
    },
    {
      id: '8',
      name: 'Laura Martinez',
      photo: 'c11.jpg',
      description: 'Laura specializes in commercial interior design and space planning.',
      email: 'laura.martinez@example.com',
      phone: '890-123-4567',
      whatsapp: '8901234567'
    },
    {
      id: '9',
      name: 'James Wilson',
      photo: 'c5.jpg',
      description: 'James is known for his expertise in structural engineering and renovation.',
      email: 'james.wilson@example.com',
      phone: '901-234-5678',
      whatsapp: '9012345678'
    },
  ];

  return (
    <StyledContainer>
      <StyledTypography variant="h4" component="h1" sx={{ fontFamily: 'Playfair Display, Source Sans Pro, sans-serif', fontWeight: 'bold', fontSize: '2.0rem', marginBottom: '30px', color: '#404040' }}>
        CONTRACTORS
      </StyledTypography>
      <Grid container spacing={4}>
        {contractors.map(contractor => (
          <Grid item xs={12} sm={6} md={4} key={contractor.id}>
            <ContractorCard>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <AvatarContainer>
                    <Avatar src={contractor.photo} alt={contractor.name} sx={{ width: 150, height: 150 }} />
                  </AvatarContainer>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <CardContent>
                    <Typography variant="h6" component="h2" sx={{ fontFamily: 'Roboto', fontWeight: 'bold', color: '#333' }}>
                      {contractor.name}
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily: 'Arial', color: '#555', marginTop: '1rem' }}>
                      {contractor.description}
                    </Typography>
                    <ContactDetails>
                      <Typography variant="body2" sx={{ fontFamily: 'Arial', color: '#777' }}>
                        Email: <a href={`mailto:${contractor.email}`} style={{ textDecoration: 'underline', color: '#777' }}>{contractor.email}</a>
                      </Typography>
                      <Typography variant="body2" sx={{ fontFamily: 'Arial', color: '#777' }}>
                        Phone: <a href={`tel:${contractor.phone}`} style={{ textDecoration: 'underline', color: '#777' }}>{contractor.phone}</a>
                      </Typography>
                      <Box sx={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                        <IconButton
                          aria-label="WhatsApp"
                          href={`https://wa.me/${contractor.whatsapp}`}
                          target="_blank"
                        >
                          <WhatsAppIcon sx={{ color: '#25D366' }} />
                        </IconButton>
                        <IconButton
                          aria-label="Email"
                          href={`mailto:${contractor.email}`}
                        >
                          <EmailIcon sx={{ color: '#007BFF' }} />
                        </IconButton>
                        <IconButton
                          aria-label="Phone"
                          href={`tel:${contractor.phone}`}
                        >
                          <PhoneIcon sx={{ color: '#28A745' }} />
                        </IconButton>
                        <IconButton
                          aria-label="Contact Me"
                          href={`mailto:${contractor.email}`}
                        >
                          <ContactMailIcon sx={{ color: '#6C757D' }} />
                        </IconButton>
                      </Box>
                    </ContactDetails>
                  </CardContent>
                </Grid>
              </Grid>
            </ContractorCard>
            <Chatbott />
            <FloatingWhatsAppButton />
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
};

export default Contractor;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledContainer = styled(Container)`
  background-image: url("c17.jpg"); /* Background image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; /* Prevents repeating the image */
  background-attachment: fixed; /* Keeps the background image fixed while scrolling */
  padding: 2rem;
  border-radius: 8px;
  animation: ${fadeIn} 0.5s ease-in;
  min-height: 100vh; /* Ensure full height */
  position: relative; /* For positioning child elements */
  width: 100%; /* Ensures the container spans the full width */
  overflow: hidden; /* Hides overflow to prevent scrollbar issues */
  
`;


const StyledTypography = styled(Typography)`
  font-family: 'Sans-serif', 'Montserrat', sans-serif;
  font-weight: bold;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #fff; /* Text color to contrast with the background */
`;

const ContractorCard = styled(Card)`
  margin-top: 2rem;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0); /* Fully transparent background */
  animation: ${fadeIn} 0.5s ease-in;
  border: none; /* Remove card border */
`;

const AvatarContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const ContactDetails = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;
