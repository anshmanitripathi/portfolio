import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'https://portfolio-backend-al1i.onrender.com/api';


// Fetch all testimonials
export const getTestimonials = async () => {
  try {
    const response = await axios.get(`${API_BASE}/testimonials`);
    return response.data;
  } catch (err) {
    console.error("Error fetching testimonials:", err);
    return [];
  }
};

// Submit a new testimonial
export const postTestimonial = async (testimonialData) => {
  try {
    const response = await axios.post(`${API_BASE}/testimonials`, testimonialData);
    return response.data;
  } catch (err) {
    console.error("Error posting testimonial:", err);
    throw err;
  }
};
