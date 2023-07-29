import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsPhoneVibrateFill } from "react-icons/bs";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ============ functions and variables Email ============
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gxm6sbq",
        "template_thb52pi",
        form.current,
        "fSMkMLYMV6x7P5U1g"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  // ============ functions and variables for toast ============
  const inputText = useRef();
  const inputTextArea = useRef();
  const inputEmail = useRef();
  function successMsg() {
    if (
      inputText.current.value === "" ||
      inputEmail.current.value === "" ||
      inputTextArea.current.value === ""
    ) {
      toast.error("All fields must be filled out", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.success("Message successfully sent!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMailOutline className="contact_option_icon" />
            <h4>Email</h4>
            <h5>twwright119@gmail.com</h5>
            <a
              href="mailto:twwright119@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Me A Message
            </a>
          </article>

          <article className="contact_option">
            <BsPhoneVibrateFill className="contact_option_icon" />
            <h4>Phone</h4>
            <h5>&#40;908&#41;-489-1484</h5>
            <a href="tel:9084891484" target="_blank" rel="noopener noreferrer">
              Give Me A Call
            </a>
          </article>
        </div>
        {/* End of Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            className="name"
            placeholder="Enter Your Full Name"
            ref={inputText}
            required
          />
          <input
            type="email"
            name="email"
            className="email"
            placeholder="Enter Your Email"
            ref={inputEmail}
            required
          />
          <textarea
            name="message"
            className="message"
            rows="7"
            placeholder="Enter Your Message"
            ref={inputTextArea}
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary send"
            onClick={successMsg}
          >
            Send Message
          </button>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
