// import React, { useEffect, useState } from "react";
// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import TextField from "@mui/material/TextField";
// import { Box, Button } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { addStuff } from "../../../redux/userHandle";
// import { useNavigate, useParams } from "react-router-dom";
// import Popup from "../../../components/Popup";
// import {
//   fetchProductDetailsFromCart,
//   removeAllFromCart,
//   removeSpecificProduct,
// } from "../../../redux/userSlice";
// import { Helmet } from "react-helmet";

// const PaymentForm = ({ handleBack }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { status, currentUser, productDetailsCart } = useSelector(
//     (state) => state.user
//   );

//   const params = useParams();
//   const productID = params.id;

//   const [paymentData, setPaymentData] = useState({
//     cardName: "",
//     cardNumber: "",
//     expDate: "",
//     cvv: "",
//   });

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setPaymentData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }));
//   };

//   const [showPopup, setShowPopup] = useState(false);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     if (productID) {
//       dispatch(fetchProductDetailsFromCart(productID));
//     }
//   }, [productID, dispatch]);

//   const productsQuantity = currentUser.cartDetails.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );
//   const totalPrice = currentUser.cartDetails.reduce(
//     (total, item) => total + item.quantity * item.price.cost,
//     0
//   );

//   const singleProductQuantity =
//     productDetailsCart && productDetailsCart.quantity;
//   const totalsingleProductPrice =
//     productDetailsCart &&
//     productDetailsCart.price &&
//     productDetailsCart.price.cost * productDetailsCart.quantity;

//   const paymentID = `${paymentData.cardNumber.slice(
//     -4
//   )}-${paymentData.expDate.slice(0, 2)}${paymentData.expDate.slice(
//     -2
//   )}-${Date.now()}`;
//   const paymentInfo = { id: paymentID, status: "Successful" };

//   const multiOrderData = {
//     buyer: currentUser._id,
//     shippingData: currentUser.shippingData,
//     orderedProducts: currentUser.cartDetails,
//     paymentInfo,
//     productsQuantity,
//     totalPrice,
//   };

//   const singleOrderData = {
//     buyer: currentUser._id,
//     shippingData: currentUser.shippingData,
//     orderedProducts: productDetailsCart,
//     paymentInfo,
//     productsQuantity: singleProductQuantity,
//     totalPrice: totalsingleProductPrice,
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (productID) {
//       dispatch(addStuff("newOrder", singleOrderData));
//       dispatch(removeSpecificProduct(productID));
//     } else {
//       dispatch(addStuff("newOrder", multiOrderData));
//       dispatch(removeAllFromCart());
//     }
//   };

//   useEffect(() => {
//     if (status === "added") {
//       navigate("/Aftermath");
//     } else if (status === "failed") {
//       setMessage("Order Failed");
//       setShowPopup(true);
//     } else if (status === "error") {
//       setMessage("Network Error");
//       setShowPopup(true);
//     }
//   }, [status, navigate]);

//   return (
//     <React.Fragment>
//       <Helmet>
//         <title>Payment Method - Construction Materials</title>
//         <meta
//           name="description"
//           content="Enter your payment details securely. Provide card information including name on card, card number, expiry date, and CVV. Construction materials, payment method, secure payment, card details."
//         />
//         <meta
//           name="keywords"
//           content="payment method, construction materials, card details, secure payment, card number, expiry date, CVV"
//         />
//       </Helmet>

//       <Typography variant="h6" gutterBottom>
//         Payment method
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={3}>
//           <Grid item xs={12} md={6}>
//             <TextField
//               required
//               id="cardName"
//               label="Name on card"
//               fullWidth
//               autoComplete="cc-name"
//               variant="standard"
//               value={paymentData.cardName}
//               onChange={handleInputChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               required
//               id="cardNumber"
//               label="Card number"
//               type="number"
//               fullWidth
//               autoComplete="cc-number"
//               variant="standard"
//               value={paymentData.cardNumber}
//               onChange={handleInputChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               required
//               id="expDate"
//               type="date"
//               helperText="Expiry date"
//               fullWidth
//               autoComplete="cc-exp"
//               variant="standard"
//               value={paymentData.expDate}
//               onChange={handleInputChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               required
//               id="cvv"
//               label="CVV"
//               type="number"
//               helperText="Last three digits on signature strip"
//               fullWidth
//               autoComplete="cc-csc"
//               variant="standard"
//               value={paymentData.cvv}
//               onChange={handleInputChange}
//             />
//           </Grid>
//         </Grid>
//         <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
//           <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
//             Back
//           </Button>
//           <Button variant="contained" type="submit" sx={{ mt: 3, ml: 1 }}>
//             Place order
//           </Button>
//         </Box>
//       </form>
//       <Popup
//         message={message}
//         setShowPopup={setShowPopup}
//         showPopup={showPopup}
//       />
//     </React.Fragment>
//   );
// };

// export default PaymentForm;





import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addStuff } from "../../../redux/userHandle";
import { useNavigate, useParams } from "react-router-dom";
import Popup from "../../../components/Popup";
import {
  fetchProductDetailsFromCart,
  removeAllFromCart,
  removeSpecificProduct,
} from "../../../redux/userSlice";
import { Helmet } from "react-helmet";
import axios from "axios";  // Import axios for API requests

const PaymentForm = ({ handleBack }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { status, currentUser, productDetailsCart } = useSelector(
    (state) => state.user
  );

  const params = useParams();
  const productID = params.id;

  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (productID) {
      dispatch(fetchProductDetailsFromCart(productID));
    }
  }, [productID, dispatch]);

  const productsQuantity = currentUser.cartDetails.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = currentUser.cartDetails.reduce(
    (total, item) => total + item.quantity * item.price.cost,
    0
  );

  const singleProductQuantity =
    productDetailsCart && productDetailsCart.quantity;
  const totalsingleProductPrice =
    productDetailsCart &&
    productDetailsCart.price &&
    productDetailsCart.price.cost * productDetailsCart.quantity;

  const multiOrderData = {
    buyer: currentUser._id,
    shippingData: currentUser.shippingData,
    orderedProducts: currentUser.cartDetails,
    productsQuantity,
    totalPrice,
  };

  const singleOrderData = {
    buyer: currentUser._id,
    shippingData: currentUser.shippingData,
    orderedProducts: productDetailsCart,
    productsQuantity: singleProductQuantity,
    totalPrice: totalsingleProductPrice,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      amount: productID ? totalsingleProductPrice * 100 : totalPrice * 100,
      currency: "INR",
    };

    try {
      const response = await axios.post("http://localhost:5000/create-order", orderData);
      const { id: order_id, currency, amount } = response.data;

      const options = {
        key: "rzp_test_pkfesfwdtyBkak", // Replace with your Razorpay key ID
        amount: amount.toString(),
        currency: currency,
        name: "Construction Materials",
        description: "Test Transaction",
        order_id: order_id,
        handler: async (response) => {
          const paymentInfo = {
            id: response.razorpay_payment_id,
            status: "Successful",
          };

          if (productID) {
            dispatch(addStuff("newOrder", singleOrderData));
            dispatch(removeSpecificProduct(productID));
          } else {
            dispatch(addStuff("newOrder", multiOrderData));
            dispatch(removeAllFromCart());
          }
        },
        prefill: {
          name: currentUser.name,
          email: currentUser.email,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        setMessage("Payment Failed");
        setShowPopup(true);
      });
      rzp1.open();
    } catch (error) {
      setMessage("Order Failed");
      setShowPopup(true);
    }
  };

  useEffect(() => {
    if (status === "added") {
      navigate("/Aftermath");
    } else if (status === "failed") {
      setMessage("Order Failed");
      setShowPopup(true);
    } else if (status === "error") {
      setMessage("Network Error");
      setShowPopup(true);
    }
  }, [status, navigate]);

  return (
    <React.Fragment>
      <Helmet>
        <title>Payment Method - Construction Materials</title>
        <meta
          name="description"
          content="Proceed with your payment securely through Razorpay. Construction materials, payment method, secure payment."
        />
        <meta
          name="keywords"
          content="payment method, construction materials, Razorpay, secure payment"
        />
      </Helmet>

      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
          Back
        </Button>
        <Button variant="contained" onClick={handleSubmit} sx={{ mt: 3, ml: 1 }}>
          Place order
        </Button>
      </Box>
      <Popup
        message={message}
        setShowPopup={setShowPopup}
        showPopup={showPopup}
      />
    </React.Fragment>
  );
};

export default PaymentForm;
