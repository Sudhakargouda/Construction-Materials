import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Paper, Typography, Avatar, Container } from '@mui/material';
import ShippingPage from '../components/ShippingPage';
import { Helmet } from 'react-helmet';

const Profile = () => {
  const { currentUser } = useSelector(state => state.user);

  return (
    <React.Fragment>
       <Helmet>
    <title>Construction Materials - Profile</title>
    <meta name="description" content="View and manage your profile details, including email and role." />
    <meta name="keywords" content="Construction Materials, Profile, User Profile, Manage Profile, Email, Role" />
    {/* Add more meta tags as needed */}
</Helmet>

      <ProfileContainer>
        <ProfileHeader elevation={3}>
          <ProfileAvatar>
            <h1>
              {currentUser ? currentUser.name[0].toUpperCase() : ''}
            </h1>
          </ProfileAvatar>
          <ProfileName variant="h4">
            {currentUser ? currentUser.name : ''}
          </ProfileName>
          <ProfileText variant="h6">
            Email : {currentUser ? currentUser.email : ''}
          </ProfileText>
          <ProfileText variant="h6">
            Role : {currentUser ? currentUser.role : ''}
          </ProfileText>
        </ProfileHeader>
      </ProfileContainer>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <ProfileHeader variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <ShippingPage profile="Profile" />
        </ProfileHeader>
      </Container>
    </React.Fragment>
  );
};

export default Profile;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProfileHeader = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const ProfileAvatar = styled(Avatar)`
  padding: 30px;
  background-color: #3f51b5;
  margin-bottom: 10px;
`;

const ProfileName = styled(Typography)`
  padding: 20px;
`;

const ProfileText = styled(Typography)`
  margin-bottom: 10px;
`;