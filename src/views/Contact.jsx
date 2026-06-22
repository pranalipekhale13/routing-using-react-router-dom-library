import "./Contact.css";
import Navbar from "../components/Navbar";
export default function Contact() {
  return (
    <div className="contact">
      <Navbar />
      <div className="hero-section">
        <div>
          <h1 className="page-title">Contact Us</h1>
          <p className="page-lead">
          We'd love to hear from you! Whether you have questions,
          feedback, book recommendations, or need assistance,
          our team is here to help. Please fill out the form below or reach out through
          </p>
              <h2>Contact Information</h2>

          <p><strong>Address:</strong> BookVerse Library, Mumbai, Maharashtra, India</p>

          <p><strong>Phone:</strong> +91 98765 43210</p>

          <p><strong>Email:</strong> support@bookverse.com</p>

          <p><strong>Website:</strong> www.bookverse.com</p>
          
        </div>
        <div className="contact-summary card">
           <h2>⏰ Library Support Hours</h2>

          <p>Monday - Friday : 9:00 AM - 7:00 PM</p>
          <p>Saturday : 10:00 AM - 5:00 PM</p>
          <p>Sunday : Closed</p>

        </div>
      </div>
      <div className="contact-info section">
      <form className="contact-info section">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email Address" />
        <textarea placeholder="Message"></textarea>

        <button className="contact-button">Send Message</button>
      </form>
  </div>
    </div>
  );
}