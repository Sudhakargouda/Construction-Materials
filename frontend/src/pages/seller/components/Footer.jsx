import React from "react";
import { Box, Container, Link, Typography, styled } from "@mui/material";
import { Twitter, Instagram, LinkedIn, GitHub} from "@mui/icons-material";
import { keyframes } from "@mui/system";

const Footer = () => {
  return (
    <FooterBox>
      <Container>
        <FooterContent>
          <FooterSection>
            <Typography variant="h6" component="h2" sx={{ fontFamily: 'Roboto', fontWeight: 'bold', color: '#f4a261' }}>Contact Us</Typography>
            <ContactDetails>
              <Typography sx={{ fontFamily: 'Arial', color: '#fff' }}>
                Email: <Link href="mailto:info@constructionmart.net" color="inherit" sx={{ textDecoration: 'underline' }}>info@constructionmart.net</Link>
              </Typography>
              <Typography sx={{ fontFamily: 'Arial', color: '#fff' }}>
                Phone: <Link href="tel:9353236451" color="inherit" sx={{ textDecoration: 'underline' }}>9353236451</Link>
              </Typography>
            </ContactDetails>
          </FooterSection>

          <FooterSection>
            <Typography variant="h6" component="h2" sx={{ fontFamily: 'Roboto', fontWeight: 'bold', color: '#f4a261' }}>Quick Links</Typography>
            <Link href="https://constructionmart.netlify.app/" color="inherit" className="footer-link">About Us</Link><br />
            <Link href="https://sudhakargouda.netlify.app/" color="inherit" className="footer-link">Contact Us</Link><br />
            <Link href="https://constructionmart.netlify.app/" color="inherit" className="footer-link">Privacy Policy</Link><br />
            <Link href="https://constructionmart.netlify.app/" color="inherit" className="footer-link">Terms of Service</Link>
          </FooterSection>

          <FooterSection>
            <Typography variant="h6" component="h2" sx={{ fontFamily: 'Roboto', fontWeight: 'bold', color: '#f4a261' }}>Follow Us</Typography>
            <SocialIcons>
              <Link href="https://x.com/Sudhakargo86354/" color="inherit" aria-label="Twitter" className="social-icon"><Twitter /></Link>
              <Link href="https://www.instagram.com/" color="inherit" aria-label="Instagram" className="social-icon"><Instagram /></Link>
              <Link href="https://www.linkedin.com/in/sudhakargouda-patil-6438b3243/" color="inherit" aria-label="LinkedIn" className="social-icon"><LinkedIn /></Link>
              <Link href="https://github.com/Sudhakargouda/" color="inherit" aria-label="GitHub" className="social-icon"><GitHub /></Link>
            </SocialIcons>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <Typography variant="body2" component="p" sx={{ fontFamily: 'Arial', color: '#ddd' }}>© 2024 ConstructionMart. All rights reserved.</Typography>
        </FooterBottom>
      </Container>
    </FooterBox>
  );
};

export default Footer;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FooterBox = styled(Box)`
  background-color: #333;
  color: #fff;
  padding: 2rem 0;
  animation: ${fadeIn} 1s ease-in;
`;

const FooterContent = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 1rem;
`;

const FooterSection = styled(Box)`
  flex: 1;
  min-width: 200px;

  & .footer-link {
    display: block;
    margin: 0.5rem 0;
    text-decoration: none;
    color: #fff;
    font-family: 'Arial', sans-serif;
    font-size: 0.875rem;
    transition: color 0.3s ease, transform 0.3s ease, font-weight 0.3s ease;
    font-weight: 300;

    &:hover {
      color: #f4a261;
      transform: translateX(5px);
      font-weight: 500;
    }

    &:active {
      color: #e76f51;
    }
  }
`;

const ContactDetails = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* Space between email and phone number */
`;

const SocialIcons = styled(Box)`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  & .social-icon {
    color: #fff;
    transition: color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    &:hover {
      color: #f4a261;
      transform: scale(1.2);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }
  }

  svg {
    font-size: 2rem;
  }
`;

const FooterBottom = styled(Box)`
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid #444;
  margin-top: 1rem;
  animation: ${fadeIn} 1s ease-in;
`;
