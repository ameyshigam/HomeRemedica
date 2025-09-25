import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import diseases from '../data/diseases';
import './Home.css';
import './Sidebar.css'; // ✅ Still import the CSS so styles stay

const Home = () => {
  const location = useLocation();
  const [activeLetter, setActiveLetter] = useState('A');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDiseases, setFilteredDiseases] = useState([]);
  const navigate = useNavigate();


  // ✅ Logout placeholder
  const handleLogout = () => {
    console.log('Logout clicked');
    navigate('/');
};
  

  // ✅ Alphabet letters
  const availableLetters = Object.keys(diseases).sort((a, b) => {
    if (a === 'O' && b !== 'O') return a.localeCompare(b);
    return a.localeCompare(b);
  });

  // ✅ Handle URL query letter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const letter = params.get('letter');
    if (letter && diseases[letter]) {
      setActiveLetter(letter);
    }
  }, [location]);

  // ✅ Search filter
  useEffect(() => {
    if (searchTerm) {
      const results = [];
      Object.keys(diseases).forEach(letter => {
        diseases[letter].forEach(disease => {
          if (disease.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            results.push(disease);
          }
        });
      });
      setFilteredDiseases(results);
    } else {
      setFilteredDiseases([]);
    }
  }, [searchTerm]);

  return (
    <div className="home-wrapper">
      {/* ✅ Sidebar directly inside Home */}
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

      {/* ✅ Main content */}
      <div className="home-container">
        <div className="home-header">
          <h1>Home Remedica</h1>
          <p>Handpicked and research-backed home cures by top clinics</p>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for a condition..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        {searchTerm ? (
          <div className="search-results">
            <h2>Search Results</h2>
            {filteredDiseases.length > 0 ? (
              <div className="disease-grid">
                {filteredDiseases.map(disease => (
                  <Link to={`/disease/${disease.id}`} key={disease.id} className="disease-card">
                    <h3>{disease.name}</h3>
                    <p>{disease.description.substring(0, 100)}...</p>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="no-results">No diseases found matching "{searchTerm}"</p>
            )}
          </div>
        ) : (
          <div className="diseases-section">
            <div className="letter-navigation">
              <div className="letter-grid">
                {availableLetters.map(letter => (
                  <button
                    key={letter}
                    className={`letter-btn ${activeLetter === letter ? 'active' : ''}`}
                    onClick={() => setActiveLetter(letter)}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>

            <h2>{activeLetter}</h2>
            <div className="disease-grid">
              {diseases[activeLetter].map(disease => (
                <Link to={`/disease/${disease.id}`} key={disease.id} className="disease-card">
                  <h3>{disease.name}</h3>
                  <p>{disease.description.substring(0, 100)}...</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
