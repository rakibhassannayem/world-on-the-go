import { useState } from "react";
import "./country.css";

const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // basic
    // if(visited){
    //   setVisited(false)
    // }else{
    //   setVisited(true)
    // }

    // ternary
    // setVisited(visited ? false : true);
    console.log(country)

    setVisited(!visited)
    handleVisitedCountries(country)
  };

  return (
    <div className={`country ${visited && 'country-visited'}`}>
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>
        Area: {country.area.area}
        {country.area > 300000 ? " Big Country" : " Small Country"}
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
