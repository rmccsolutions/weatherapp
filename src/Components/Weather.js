import React, { useState, useEffect } from "react";
import WeatherView from "./WeatherView";
import CustomInput from "./CustomInput";
import Forecast from "../Models/Forecast";
import sun from "../imgs/sun.ico";

/**
 * Display app weather
 *
 * @export
 * @returns
 */
export default function Weather() {
  const [locationString, setLocationString] = useState("");
  const [forecasts, setForecasts] = useState(null);
  const [isError, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    if (locationString) {
      let data = locationString;
      let dataArr = data.split(",");
      if (dataArr.length > 1 && dataArr[0].trim().length > 3 && dataArr[1].trim().length > 1) {
        setIsLoaded(false);
        Forecast.getForcasts({ city: dataArr[0].trim(), region: dataArr[1].trim() })
          .then(requestedForecasts => {
            setIsLoaded(true);
            setForecasts(requestedForecasts);
          })
          .catch(() => {
            setError(true);
            setIsLoaded(true);
          });
      }
    }
  }, [locationString]);

  let renderData = null;
  if (isError === true) {
    renderData = <div>oops...something went wrong :(</div>;
  } else if (isLoaded === false) {
    renderData = (
      <img
        style={{
          animation: `spin ${3}s linear infinite`
        }}
        className="centerLoading"
        src={sun}
        alt="img"
      />
    );
  } else if (!forecasts) {
    return (
      <div className="centerLoading">
        <div>
          <img
            style={{
              animation: `spin ${3}s linear infinite`
            }}
            src={sun}
            alt="img"
          />
        </div>
        <div style={{ paddingTop: "10px" }}>
          <CustomInput value={locationString} callBack={setLocationString} />
        </div>
      </div>
    );
  } else {
    renderData = (
      <body>
        <div className="row" style={{ margin: "0" }}>
          <div className="row" style={{ margin: "0", paddingLeft: "10px", paddingTop: "10px" }}>
            <CustomInput value={locationString} callBack={setLocationString} />
          </div>
          <div className="row" style={{ margin: "0", textAlign: "center", paddingTop: "20px" }}>
            <WeatherView lForecasts={forecasts} />
          </div>
        </div>
      </body>
    );
  }

  return renderData;
}
