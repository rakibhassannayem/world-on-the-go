import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country, isVisited) => {
    const newVisitedCountries = [...visitedCountries, country];
    if(isVisited){
      setVisitedCountries(newVisitedCountries);
    }
  };
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  return (
    <div>
      <h1>Total Countries: {countries.length}</h1>
      <h3>Country visited: {visitedCountries.length}</h3>
      <div className="flags-container">
        {visitedCountries.map((country, index) => {
          return <img key={index} src={country?.flags.flags.png}></img>;
        })}
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
