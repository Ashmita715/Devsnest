import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [place, setPlace] = useState("");
  const [placeData, setPlaceData] = useState({});
  const updatePlaceData = () => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=68fd876e9daa48e584d115527212908&q=${place}`
    )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setPlaceData(data);
    });
  };
  return (
    <div className="App">
      <h1>Weather Api Project</h1>
      <div className="container">
        <div className="row">
          <div className="col-12 form">
             <input type="text" value={place} onChange={(e) => {
                  setPlace(e.target.value);
             }} 
             />
             <button className="btn btn-primary" onClick={updatePlaceData}>
               Submit
             </button>
          </div>
          <div className="offset-md-4 col-12 col-md-4 weather">
            <div className="card">
              {placeData.location ? (
              <div>
                <img src={placeData.current.condition.icon} alt="" />
                <div className="temp">{placeData.current.temp_c}°</div>
                <div className="desc">{placeData.current.condition.text}</div>
                <div className="place">{placeData.location.name}</div>
                <div className="container">
                  <div className="row whp">
                    <div className="col">
                      <div className="title">Wind now</div>
                      <div className="data">
                        {placeData.current.wind_kph}
                        <span className="unit">KM</span>
                        </div>
                    </div>
                    <div className="col">
                    <div className="title">Humidity</div>
                      <div className="data">
                      {placeData.current.humidity}
                      <span className="unit">%</span>
                        </div>
                    </div>
                    <div className="col">
                    <div className="title">Precipitation</div>
                      <div className="data">
                      {placeData.current.precip_in}<span className="unit">%</span>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              ): (
              <h2>Place Not Found</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
