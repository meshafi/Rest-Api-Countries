import search from "../assets/search.png";
import { CardContainer } from "./CardContainer";
import { useEffect, useState } from "react";

export const Body = () => {
  const [countryData, setCountryData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentCountryData, setCurrentCountryData] = useState([]);
  const [selectedContinent, setSelectedContinent] = useState("Filter by Region");
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountryData(data);
    } catch (error) {
      console.error("Error fetching value");
    }
  };


  useEffect(() => {

    if (selectedContinent === "Filter by Region") {
      setCurrentCountryData(countryData); 
    } else {
      let updatedData = countryData.filter(
        (country) => country.region === selectedContinent
      );
      setCurrentCountryData(updatedData);
    }

    let updatedData = currentCountryData.filter((country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setCurrentCountryData(updatedData === "" ? currentCountryData : updatedData);
  }, [searchQuery,countryData,selectedContinent]);

  
  useEffect(()=>{
    if (selectedContinent === "Filter by Region") {
      setCurrentCountryData(countryData); 
    } else {
      let updatedData = countryData.filter(
        (country) => country.region === selectedContinent
      );
      setCurrentCountryData(updatedData);
    }
  },[selectedContinent,countryData]);

  

  return (
    <>
      <div className="body">
        <div className="search">
          <div className="search-icon">
            <img src={search} className="search-img" />
            <input
              id="search"
              type="text"
              placeholder="Search for a country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select id="continent" 
          name="continent"
          value={selectedContinent}
          onChange={(e) => setSelectedContinent(e.target.value)}
          >
            <option value="Filter by Region">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>

        <div className="all-country">
          {currentCountryData.map((country, index) => (
            <CardContainer key={index + 1} country={country} />
          ))}
        </div>
      </div>
    </>
  );
};
