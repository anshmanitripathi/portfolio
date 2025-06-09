require('dotenv').config(); // ✅ MUST BE FIRST

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ✅ Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'https://portfolio-frontend-jwq5.onrender.com'],
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

// ✅ Routes
const testimonialRoutes = require("./routes/testimonialRoutes");
app.use("/api/testimonials", testimonialRoutes); // Prefix all testimonial routes with /api/testimonials

// ✅ Root route
app.get('/', (req, res) => {
  res.send("🚀 Portfolio backend is live!");
});

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas");
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });
