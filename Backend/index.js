require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
const { userRouter } = require("./Routes/user");
const { productRoute } = require("./Routes/product");
const { createAdmin } = require("./Routes/admin");

// Define CORS options
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend's origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

// Apply CORS middleware
app.use(cors(corsOptions));
//app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from 'public' directory
app.use(express.json());
//app.options('*', cors(corsOptions));
// app.get('*', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });
app.use('/user', userRouter);
app.use('/product', productRoute);
app.use('/admin', createAdmin);

async function main() {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
  app.listen(30036, () => {
    console.log("Server is running on port 30036");
  });
}

main();
