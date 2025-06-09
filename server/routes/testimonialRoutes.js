const express = require("express");
const router = express.Router();
const Testimonial = require("../models/Testimonial");

// GET all testimonials
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ date: -1 });
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new testimonial
router.post("/", async (req, res) => {
  const { name, role, message } = req.body;

  const testimonial = new Testimonial({ name, role, message });

  try {
    const newTestimonial = await testimonial.save();
    res.status(201).json(newTestimonial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
