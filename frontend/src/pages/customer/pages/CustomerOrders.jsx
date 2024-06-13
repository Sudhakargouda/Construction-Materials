import React, { useEffect, useState } from 'react';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { listClasses } from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { Helmet } from 'react-helmet';
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getSpecificProducts } from '../../../redux/userHandle';

const CustomerOrders = () => {

    const dispatch = useDispatch()

    const { currentUser, loading, specificProductData, responseSpecificProducts } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(getSpecificProducts(currentUser._id, "getOrderedProductsByCustomer"));
    }, [dispatch, currentUser]);

    const sortOptions = [
        { value: 'oldest', label: 'Oldest' },
        { value: 'newest', label: 'Newest' }
    ];

    const [open, setOpen] = useState(null);
    const [selectedOption, setSelectedOption] = useState('newest');

    const handleOpen = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    const handleMenuItemClick = (value) => {
        setSelectedOption(value);
        handleClose();
    };

    return (
        <>
        <Helmet>
    <title>Construction Materials - My Orders</title>
    <meta name="description" content="View and sort your orders. Sort by oldest or newest orders." />
    <meta name="keywords" content="construction materials, orders, view orders, sort orders, newest orders, oldest orders" />
    <meta name="author" content="Sudhakar" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://constructionmaterials.netlify.app/customer/orders" />
    <meta property="og:title" content="Construction Materials - My Orders" />
    <meta property="og:description" content="View and sort your orders. Sort by oldest or newest orders." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://constructionmaterials.netlify.app/customer/orders" />
    <meta property="og:image" content="https://constructionmaterials.netlify.app/images/your-thumbnail.jpg" />
    <meta property="og:image:alt" content="Thumbnail for My Orders page" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content="Construction Materials - My Orders" />
    <meta property="twitter:description" content="View and sort your orders. Sort by oldest or newest orders." />
    <meta property="twitter:image" content="https://constructionmaterials.netlify.app/images/your-thumbnail.jpg" />
</Helmet>

            {loading ?
                <h1>
                    Loading...
                </h1>
                :
                <>
                    {responseSpecificProducts ?
                        <h1>
                            No Orders Till Now
                        </h1>
                        :
                        <Container>
                            <Typography sx={{ fontSize: 40, textAlign: "center" }}>
                                My Orders
                            </Typography>
                            <Stack
                                direction="row"
                                alignItems="center"
                                flexWrap="wrap-reverse"
                                justifyContent="flex-end"
                                sx={{ mb: 5 }}
                            >
                                <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                                    <Button
                                        disableRipple
                                        color="inherit"
                                        onClick={handleOpen}
                                        endIcon={open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                                    >
                                        Sort By:&nbsp;
                                        <Typography component="span" variant="subtitle2" sx={{ color: 'text.secondary' }}>
                                            {sortOptions.find(option => option.value === selectedOption)?.label}
                                        </Typography>
                                    </Button>

                                    <Menu
                                        open={!!open}
                                        anchorEl={open}
                                        onClose={handleClose}
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                        slotProps={{
                                            paper: {
                                                sx: {
                                                    [`& .${listClasses.root}`]: {
                                                        p: 0,
                                                    },
                                                },
                                            },
                                        }}
                                    >
                                        {sortOptions.map((option) => (
                                            <MenuItem
                                                key={option.value}
                                                selected={option.value === selectedOption}
                                                onClick={() => handleMenuItemClick(option.value)}
                                            >
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Stack>
                            </Stack>

                            <Grid container spacing={3}>
                                {specificProductData && specificProductData.map((product, index) => (
                                    <Grid key={index} xs={12} sm={6} md={3}>
                                        <ProductCard product={product} />
                                    </Grid>
                                ))}
                            </Grid>

                        </Container>
                    }
                </>
            }
        </>
    );
}

export default CustomerOrders