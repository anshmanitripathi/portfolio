const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, default: "" },
    message: { type: String, required: true },
    avatarUrl: { type: String, default: "" }, // optional avatar for circle image
  },
  {
    timestamps: true // adds createdAt and updatedAt fields
  }
);

module.exports = mongoose.model("Testimonial", testimonialSchema);
