import { useState, useEffect } from 'react'; 
import { useParams, Link } from 'react-router-dom';
import diseases from '../data/diseases';
import './DiseaseDetails.css';
import './Sidebar.css'; // Keep sidebar styling

const DiseaseDetails = () => {
  const { id } = useParams();
  const [disease, setDisease] = useState(null);

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  useEffect(() => {
    let foundDisease = null;
    Object.keys(diseases).forEach(letter => {
      const found = diseases[letter].find(d => d.id === id);
      if (found) foundDisease = found;
    });
    setDisease(foundDisease);
  }, [id]);

  if (!disease) {
    return (
      <div className="home-wrapper">
        {/* Sidebar */}
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

        <div className="disease-details-container">
          <div className="not-found">
            <h2>Disease Not Found</h2>
            <p>The disease you're looking for doesn't exist or has been removed.</p>
            <Link to="/home" className="btn btn-primary">Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="home-wrapper">
      {/* Sidebar */}
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

      {/* Main content */}
      <div className="disease-details-container">
        <div className="disease-header">
          <h1>{disease.name}</h1>
          <Link to="/home" className="back-link">← Back to all diseases</Link>
        </div>

        <div className="disease-content">
          <div className="description-card">
            <h2>Description</h2>
            <p>{disease.description}</p>
          </div>

          <div className="remedies-card">
            <h2>Home Remedies</h2>
            <ul className="remedies-list">
              {disease.remedies.map((remedy, index) => (
                <li key={index} className="remedy-item">
                  <span className="remedy-bullet">•</span>
                  <span className="remedy-text">{remedy}</span>
                </li>
              ))}
            </ul>
            <div className="disclaimer">
              <p>
                <strong>Disclaimer:</strong> These remedies are collected from research and traditional practices.
                Always consult with a healthcare professional before trying any home remedy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetails;
