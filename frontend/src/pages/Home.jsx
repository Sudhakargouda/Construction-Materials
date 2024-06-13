import React, { useEffect, useState } from "react";
import { Box, Container, styled } from "@mui/material";
import Slide from "./Slide";
import Banner from "./Banner";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/userHandle";
import ProductsMenu from "./customer/components/ProductsMenu";
import { NewtonsCradle } from "@uiball/loaders";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  const adURL =
    "https://www.buildmaadi.com/wp-content/uploads/2023/07/Sample2.png";

  const dispatch = useDispatch();

  const { productData, responseProducts, error } = useSelector(
    (state) => state.user
  );

  const [showNetworkError, setShowNetworkError] = useState(false);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      const timeoutId = setTimeout(() => {
        setShowNetworkError(true);
      }, 40000);

      return () => clearTimeout(timeoutId);
    }
  }, [error]);

  return (
    <div id="top">
      <Helmet>
        <title>Construction Materials - Top Deals and Discounts</title>
        <meta
          name="description"
          content="Discover the best deals on construction materials including cement, steel, bricks, and more. Quality products at unbeatable prices!"
        />
        <meta
          name="keywords"
          content="construction materials, top deals, discounts, cement, steel, bricks, building materials, quality products, unbeatable prices"
        />
        <meta
          property="og:title"
          content="Construction Materials - Top Deals and Discounts"
        />
        <meta
          property="og:description"
          content="Discover the best deals on construction materials including cement, steel, bricks, and more. Quality products at unbeatable prices!"
        />
        <meta property="og:image" content={adURL} />
        <meta property="og:url" content="https://constructionmaterials.netlify.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://constructionmaterials.netlify.app/" />
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Construction Materials",
        "description": "Discover the best deals on construction materials including cement, steel, bricks, and more. Quality products at unbeatable prices!",
        "url": "https://constructionmaterials.netlify.app/"
      }
      `}
        </script>
      </Helmet>

      <Container
        sx={{
          display: "none",
          "@media (max-width: 600px)": {
            display: "flex",
          },
        }}
      >
        <ProductsMenu dropName="Categories" />
        <ProductsMenu dropName="Products" />
      </Container>
      <BannerBox>
        <Banner />
      </BannerBox>

      {showNetworkError ? (
        <StyledContainer>
          <h1>Sorry, network error.</h1>
        </StyledContainer>
      ) : error ? (
        <StyledContainer>
          <h1>Please Wait A Second</h1>
          <NewtonsCradle size={70} speed={1.4} color="black" />
        </StyledContainer>
      ) : (
        <>
          {responseProducts ? (
            <>
              <StyledContainer>No products found right now</StyledContainer>
              <StyledContainer>
                Become a seller to add products
                <Link to={"/Sellerregister"}>Join</Link>
              </StyledContainer>
            </>
          ) : (
            <>
              <Component>
                <LeftComponent>
                  <Slide products={productData} title="Top Selection" />
                </LeftComponent>

                <RightComponent>
                  <img
                    src={adURL}
                    alt="Ad Banner"
                    style={{ width: 300, paddingRight: 25, paddingTop: 70 }}
                  />
                </RightComponent>
              </Component>

              <Slide products={productData} title="Deals of the Day" />
              <Slide products={productData} title="Suggested Items" />
              <Slide products={productData} title="Discounts for You" />
              <Slide products={productData} title="Recommended Items" />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Home;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

const BannerBox = styled(Box)`
  padding: 20px 10px;
  background: #f2f2f2;
`;

const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)(({ theme }) => ({
  width: "83%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const RightComponent = styled(Box)(({ theme }) => ({
  marginTop: 10,
  background: "#FFFFFF",
  width: "17%",
  marginLeft: 10,
  padding: 5,
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
