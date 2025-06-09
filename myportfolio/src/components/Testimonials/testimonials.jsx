import React, { useEffect, useState } from 'react';
import { getTestimonials, postTestimonial } from '../../api/testimonials';
import { Avatar } from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [index, setIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    message: '',
    avatarUrl: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTestimonials();
      setTestimonials(data);
    };
    fetchData();
  }, []);

  const next = () => {
    if (testimonials.length > 0) {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  const prev = () => {
    if (testimonials.length > 0) {
      setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };


  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTestimonial = await postTestimonial(formData);
    const updatedTestimonials = [...testimonials, newTestimonial];
    setTestimonials(updatedTestimonials);
    setFormData({ name: '', role: '', message: '', avatarUrl: '' });
    setShowForm(false);
    setIndex(updatedTestimonials.length - 1); // fix: updated length
  };


  return (
    <section
      id="testimonials"
      className="flex flex-col items-center justify-center pt-24 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-white"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[black]">TESTIMONIALS</h2>
        <div className="w-64 h-1 bg-gray-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Hear from those who have worked with me or used my platform!
        </p>
      </div>

      <button
        className="mb-6 px-6 py-3 bg-white border border-[gray] text-gray font-semibold rounded-md hover:bg-gray-300 hover:text-black transition"
        onClick={() => setShowForm((prev) => !prev)}
      >
        {showForm ? "Cancel" : "Leave a Testimonial"}
      </button>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg border border-gray-300 mb-10"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-400 mb-4 focus:outline-none focus:border-black"
            required
          />
          <input
            type="text"
            name="role"
            placeholder="Your Role (e.g., Developer, Client)"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-400 mb-4 focus:outline-none focus:border-black"
          />
          <input
            type="text"
            name="avatarUrl"
            placeholder="Avatar Image URL (optional)"
            value={formData.avatarUrl}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-400 mb-4 focus:outline-none focus:border-black"
          />
          <textarea
            name="message"
            placeholder="Your Testimonial"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 rounded-md border border-gray-400 mb-4 focus:outline-none focus:border-black"
            required
          />
          <button
            type="submit"
            className="w-full py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
            style={{
              background: 'linear-gradient(90deg, gray, black)',
              // boxShadow: '0 0 2px gray, 0 0 2px gray, 0 0 40px gray',
            }}
          >
            Submit
          </button>
        </form>
      )}

      {testimonials.length > 0 ? (
        <div className="relative flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg w-full max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <Avatar
                src={testimonials[index].avatarUrl || undefined}
                sx={{ width: 80, height: 80 }}
              >
                {!testimonials[index].avatarUrl &&
                  testimonials[index].name.charAt(0).toUpperCase()}
              </Avatar>
              <p className="mt-4 text-lg font-semibold text-gray-700">
                {testimonials[index].name}
              </p>
              {testimonials[index].role && (
                <p className="text-gray-500 text-sm">{testimonials[index].role}</p>
              )}
              <p className="mt-2 text-gray-600 italic text-center max-w-md">
                "{testimonials[index].message}"
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-4 mt-6">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 mt-6">No testimonials yet.</p>
      )}
    </section>
  );
};
