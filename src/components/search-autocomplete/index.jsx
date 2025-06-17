import React, { useEffect, useState } from "react";
import Suggestion from "./Suggestion";

const SearchAutocomplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((user) => user.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
      console.log(filteredData);
    } else {
      setShowDropdown(false);
    }
  };

  const fetchListOfUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/users`);
      const data = await response.json();
      console.log(data);
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setErrorMessage(null);
      }
      console.log(data);
    } catch (e) {
      console.log(e);
      setErrorMessage(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  const handleClick = (name) => {
    setShowDropdown(false)
    setSearchParam(name)
    setFilteredUsers([])
  }

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading Data! Please wait</h1>
      ) : (
        <input
          value={searchParam}
          onChange={(e) => {
            setSearchParam(e.target.value);
            handleChange(e);
          }}
          name="search-users"
          placeholder="Search Users here..."
        />
      )}
      {showDropdown && <Suggestion handleClick={handleClick} data={filteredUsers} />}
    </div>
  );
};

export default SearchAutocomplete;
