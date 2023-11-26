import { Link } from 'react-router-dom';
export const CardContainer=({country})=>{   
  
    return (
    <Link to={`/country/${country?.name?.common}`} className='no-underline'>
        <div className="card">
          <img src={country?.flags?.png}/>
          <div className="card-content">
          <h3>{country?.name?.common}</h3>
          <div className="card-details">
          <h4><b>Population: </b>{country?.population}</h4>
          <h4><b>Region: </b>{country?.region}</h4>
          <h4><b>Capital: </b>{country?.capital}</h4>
          </div>
          </div>
        </div>
         </Link>
         );
}