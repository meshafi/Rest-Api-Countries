import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const CardDetails = () => {
  const [countryData, setCountryData] = useState([]);
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

  const { id } = useParams();
  const country = countryData.filter((country, index) => {
    if (country?.name?.common === id) {
      return countryData[index];
    }
  });

  const native = country[0]?.name
    ? Object.values(country[0]?.name?.nativeName)
    : [];
  const nativeName = native.length > 0 ? native[0].common : "No Native Name";

  const currency = country[0]?.currencies;

  let border = country[0]?.borders;
  if (border == undefined) {
    border = [];
  }
  if (country.length == 0) {
    return <></>;
  }
  return (
    <>
      <Link to={`/`} className="no-underline">
        <div className="div-btn">
          <button className="back-btn">Back</button>
        </div>
        <div className="country-container">
          <img src={country[0]?.flags?.png} />
          <div className="country-details">
            <h2>{country[0]?.name?.common}</h2>
            <h4>
              Native Name: <b>{nativeName}</b>
            </h4>
            <h4>
              Population: <b>{country[0]?.population}</b>
            </h4>
            <h4>
              Region: <b>{country[0]?.region}</b>
            </h4>
            <h4>
              Sub Region: <b>{country[0]?.subregion}</b>
            </h4>
            <h4>
              Capitals: <b>{country[0]?.capital}</b>
            </h4>
            <h4>
              Top Level Domain: <b>{country[0]?.tld}</b>
            </h4>
            <h4>
              Border Countries:{" "}
              <b>
                {border.map((item, index) => (
                  <button key={index}>{item + " "}</button>
                ))}
              </b>
            </h4>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardDetails;
