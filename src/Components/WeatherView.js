import React from "react";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";
import SevenDayCards from "./SevenDayCards";
import WeatherCardInfo from "./WeatherCardInfo";

export default function WeatherView(props) {
  const { lForecasts } = props;
  const { weatherLocation, forecasts } = lForecasts;
  let todaysForecast = forecasts[0];
  let sevenDay = [...forecasts];
  sevenDay.splice(0, 2);
  return (
    <div>
      <div>
        <WeatherCardInfo weatherLocation={weatherLocation} todaysForecast={todaysForecast} />
      </div>
      <div className="row" style={{ justifyContent: "center", padding: "1% 0 1% 0" }}>
        <Divider style={{ width: "60%" }} />
      </div>
      <div className="row" style={{ justifyContent: "center" }}>
        <SevenDayCards forecasts={sevenDay} weatherLocation={weatherLocation} />
      </div>
    </div>
  );
}

WeatherView.propTypes = {
  lForecasts: PropTypes.arrayOf.isRequired
};
