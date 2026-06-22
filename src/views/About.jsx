import "./About.css";
import Navbar from "../components/Navbar";
export default function About() {
  return (
    <div className="about">
      <Navbar />
      <div className="hero-section">
        <div>
          
          <h1 className="page-title">📚 About BookVerse</h1>
          <p className="page-lead">
           <p>
          BookVerse is a modern digital library platform designed to
          connect readers with knowledge. Our mission is to make
          learning accessible, enjoyable, and available to everyone,
          anywhere in the world.
        </p>
          </p>
        </div>
      </div>

      <div className="about-grid section">
        <div>
          <h2>🎯 Our Mission</h2>
         <p>
            To provide easy access to quality books and educational
            resources that inspire learning and personal growth.
          </p>
        </div>
        <div>
          <h2>🌍 Our Vision</h2>
          <p>
            To become the world's most trusted digital library,
            empowering readers through knowledge and innovation.
          </p>
        </div>
        <div>
            <h2>💡 Our Values</h2>
           <p>
            Learning, Innovation, Accessibility, Integrity,
            and Community Development.
          </p>
           <h2>✨ Why Readers Love BookVerse</h2>

        <ul>
          <li>✅ Huge collection of books and journals</li>
          <li>✅ User-friendly reading experience</li>
          <li>✅ Multiple genres and categories</li>
          <li>✅ Trusted by thousands of readers</li>
          <li>✅ Continuous content updates</li>
        </ul>
        </div>
        <div>
          <h2>📖 What We Offer</h2>
           <h5>📚 Digital Library</h5>
            <p>
              Access thousands of books across various categories.
            </p>
             <h5>🔍 Smart Search</h5>
            <p>
              Quickly find books, authors, and topics.
            </p>
             <h5>👨‍🏫 Educational Resources</h5>
            <p>
              Discover study materials and learning guides.
            </p>
        </div>
      </div>
    </div>
  );
}