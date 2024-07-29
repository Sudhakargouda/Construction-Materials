// const express = require("express")
// const cors = require("cors")
// const mongoose = require("mongoose")
// const dotenv = require("dotenv")

// const app = express()
// const Routes = require("./routes/route.js")

// const PORT = process.env.PORT || 5000

// dotenv.config();

// app.use(express.json({ limit: '10mb' }))
// app.use(cors())

// mongoose
//     .connect(process.env.MONGO_URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(console.log("Connected to MongoDB"))
//     .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

// app.use('/', Routes);

// app.listen(PORT, () => {
//     console.log(`Server started at port no. ${PORT}`)
// })



const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Razorpay = require('razorpay');
const Routes = require("./routes/route.js");

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Load environment variables
dotenv.config();

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(cors());

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err));

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Razorpay Create Order Route
app.post('/create-order', async (req, res) => {
  const { amount, currency } = req.body;

  try {
    const order = await razorpay.orders.create({ amount, currency });
    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Use routes
app.use('/', Routes);

// Start server
app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`);
});





