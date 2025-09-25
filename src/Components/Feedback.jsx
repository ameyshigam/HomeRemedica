import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Feedback.css';
import './Sidebar.css'; // ✅ Keep sidebar styling

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ rating, comment }); // later you can send this to a backend
    setSubmitted(true);
    setRating(0);
    setComment('');
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <div className="home-wrapper">
      {/* ✅ Sidebar merged */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h1>Home Remedica</h1>
          <p>Handpicked and research-backed home cures</p>
        </div>

        <div className="sidebar-menu">
          <Link to="/home" className="menu-item">Home</Link>
          <Link to="/feedback" className="menu-item">Feedback</Link>
        </div>

        <div className="sidebar-footer">
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </div>

      {/* ✅ Feedback main content */}
      <div className="feedback-container">
        <div className="feedback-card">
          <h2>We Value Your Feedback</h2>
          <p>Please share your experience with Home Remedica</p>

          {submitted ? (
            <div className="success-message">
              <h3>Thank You!</h3>
              <p>Your feedback has been submitted successfully.</p>
              <button
                className="btn btn-primary"
                onClick={() => setSubmitted(false)}
              >
                Submit Another Feedback
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="feedback-form">
              <div className="rating-container">
                <p>How would you rate your experience?</p>
                <div className="star-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star ${star <= rating ? 'active' : ''}`}
                      onClick={() => handleRatingClick(star)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="comment">Your Comments</label>
                <textarea
                  id="comment"
                  className="form-control"
                  rows="5"
                  placeholder="Please share your thoughts, suggestions, or experiences..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={rating === 0}
              >
                Submit Feedback
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
