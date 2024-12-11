import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [selectedLocation, setSelectedLocation] = useState("Pune");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Search Term:", searchTerm);
    console.log("Selected Location:", selectedLocation);
    // Add your search functionality here
  };

  return (
    <div className="search-bar-container">
      <h1>Take care of your home needs now!</h1>
      <p>
        ServicePro is your one-stop solution to troubleshoot, choose a vendor
        and book a technician.
      </p>

      <div className="search-bar">
        <select
          className="location-dropdown"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="Pune">Pune</option>
          <option value="Ameerpet">Ameerpet</option>
          <option value="Gachibowli">Gachibowli</option>
          <option value="Madhapur">Madhapur</option>
        </select>
        <span className="location-info">
          Only in Ameerpet, Gachibowli, & Madhapur
        </span>
        <input
          type="text"
          className="search-input"
          placeholder="Search Home Appliances"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
