import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import Products from '../../../components/Products';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedProducts } from '../../../redux/userHandle';
import { Helmet } from 'react-helmet';


const CustomerSearch = ({ mode }) => {

    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState("")

    const { filteredProducts } = useSelector(state => state.user);

    const handleSearch = (e) => {
        e.preventDefault()

        dispatch(getSearchedProducts("searchProduct", searchTerm));
    };

    return (
        <div>
              <Helmet>
                <title>Construction Materials - Customer Search</title>
                <meta name="description" content="Search for products, brands, and more. Find the best deals on construction materials." />
                <meta name="keywords" content="construction materials, building supplies, home improvement, tools, hardware" />
                <meta name="author" content="Sudhakar" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Construction Materials - Customer Search" />
                <meta property="og:description" content="Search for products, brands, and more. Find the best deals on construction materials." />
                <meta property="og:type" content="website" />
                {/* Add more meta tags as needed */}
            </Helmet>
            {
                mode === "Mobile" ?

                    <>
                        <SearchContainer onSubmit={handleSearch}>
                            <TextField
                                label="Search for products, brands and more"
                                variant="outlined"
                                fullWidth
                                size="small"
                                InputProps={{
                                    style: {
                                        borderRadius: 0,
                                    },
                                }}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </SearchContainer>
                        {
                            searchTerm && <Products productData={filteredProducts} />
                        }
                    </>
                    :
                    <>
                        {
                            filteredProducts && <Products productData={filteredProducts} />
                        }
                    </>
            }

        </div>
    );
};

const SearchContainer = styled('form')({
    display: 'flex',
    justifyContent: 'center',
    padding: '16px',
});

export default CustomerSearch;
