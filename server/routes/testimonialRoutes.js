const express = require("express");
const router = express.Router();
const Testimonial = require("../models/Testimonial");

// GET all testimonials
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ date: -1 });
    console.log("GET /testimonials hit - fetched", testimonials.length, "entries");
    res.json(testimonials);
  } catch (err) {
    console.error("Error fetching testimonials:", err.message);
    res.status(500).json({ message: err.message });
  }
});

// POST a new testimonial
router.post("/", async (req, res) => {
  const { name, role, message, avatarUrl } = req.body;

  const testimonial = new Testimonial({
    name,
    role,
    message,
    avatarUrl: avatarUrl || null,
  });

  try {
    const newTestimonial = await testimonial.save();
    console.log("POST /testimonials - new testimonial added:", newTestimonial.name);
    res.status(201).json(newTestimonial);
  } catch (err) {
    console.error("Error posting testimonial:", err.message);
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
