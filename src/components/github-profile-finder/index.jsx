import React, { useState, useEffect } from "react";
import User from "./User";
import './style.css'

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("visionSpoiler");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSubmit = () => {
    fetchGithubUserData()
  };

  const fetchGithubUserData = async () => {
    
    try {
      setLoading(true)
      const res = await fetch(`https://api.github.com/users/${userName}`);
      const data = await res.json();

      console.log(data);
      if (data) {
        setUserData(data);
        setUserName('')
      }
    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Loading data! Please wait</h1>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {
        userData !== null ? <User user={userData} /> : null
      }
    </div>
  );
};

export default GithubProfileFinder;
