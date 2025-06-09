require('dotenv').config(); // ✅ MUST BE FIRST

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use(cors({
  origin: ['http://localhost:5173', 'https://portfolio-frontend-jwq5.onrender.com'],
  methods: ['GET', 'POST'],
  credentials: true
}));




app.get('/' , (req,res)=>{
    res.send("server is ready");
})

const port = process.env.PORT || 3000
// Routes
const testimonialRoutes = require("./routes/testimonialRoutes");
app.use("/api/testimonials", testimonialRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas");
    app.listen(process.env.PORT || 5000, () =>
      console.log(`🚀 Server running on port ${port}`)
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });


