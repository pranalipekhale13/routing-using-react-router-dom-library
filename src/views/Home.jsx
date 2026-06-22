import "./Home.css";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="hero-section">
        <div>
          
          <h1 className="page-title">Welcome to BookVerse 📚.</h1>
          <p className="page-lead">
             Your ultimate digital library where knowledge meets
          technology. Explore thousands of books, discover
          bestselling authors, and expand your learning journey.
          </p>
          <div className="hero-actions">
            <a href="/about" className="primary-button">Learn more</a>
            <a href="/contact" className="secondary-button">Contact us</a>
          </div>
        </div>
        <div className="hero-card">
          <h2>📖 Browse Categories</h2>
          <ul>
            <li>Fiction</li>
            <li>Non-Fiction</li>
            <li>Science Fiction</li>
            <li>Biographies</li>
            <li>History</li>
            <li>Arts & Design</li>
          </ul>
        </div>
      </div>

      <div className="features section">
        <div className="card">
          <h3>🔥 Most Popular Books</h3>
          <p>📘 Atomic Habits</p>
            <p>📕 Rich Dad Poor Dad</p>
             <p>📗 The Alchemist</p>
        </div>

        <div className="card">
           <h3>✨ Why Choose BookVerse?</h3>
          <p>📚 Huge Collection</p>
          <p>⚡ Easy Access</p>
          <p>🔍 Smart Search</p>
          <p>🌍 Global Authors</p>
        </div>

        <div className="card">
            <h2>💬 Reader Reviews</h2>
           <p>
              "BookVerse has completely changed the way I read
              and learn. Amazing collection!"
            </p>
             <h5>- Priya Sharma</h5>
              <p>
              "The user interface is simple, beautiful,
              and very easy to navigate."
            </p>
            <h5>- Rahul Patel</h5>
        </div>
      </div>
    </div>
  );
}