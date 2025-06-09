import React , {useState, useRef} from 'react'
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nu0atgq",  // Replace with your EmailJS Service ID
        "template_d6fv09w",  // Replace with your EmailJS Template ID
        form.current,
        "L5BbELlTmpvAi2YsB"  // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center pt-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[black]">CONTACT</h2>
        <div className="w-48 h-1 bg-gray-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-1 w-full max-w-md bg-[white] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-[black] text-center">
          Connect With Me <span className="ml-1"></span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[white] text-black border border-gray-400 focus:outline-none focus:border-black"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[white] text-black border border-gray-400 focus:outline-none focus:border-black"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[white] text-black border border-gray-400 focus:outline-none focus:border-black"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[white] text-black border border-gray-400 focus:outline-none focus:border-black"
          />
          
          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r py-3 text-white font-semibold rounded-md hover:opacity-90 transition "
            // className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, gray, black)',
              boxShadow: '0 0 2px #gray, 0 0 2px #gray, 0 0 40px gray',
            }}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  )
}
