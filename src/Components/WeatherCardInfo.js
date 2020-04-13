import React from "react";
import { Emoji } from "emoji-mart";
import { getIconName } from "../Models/Helpers";

export default function WeatherCardInfo(props) {
  const { todaysForecast, weatherLocation } = props;
  return (
    <div className="row" style={{ justifyContent: "center" }}>
      <div className="col-2" style={{ textAlign: "right" }}>
        <Emoji emoji={{ id: getIconName(todaysForecast) }} set="facebook" size={64} />
      </div>
      <div className="col-3" style={{ textAlign: "left" }}>
        <div className="row">{`${parseInt(todaysForecast.temp)}°F`}</div>
        {todaysForecast.feelsLike === undefined ? (
          ""
        ) : (
          <div className="row">{`Feels like ${parseInt(todaysForecast.feelsLike)}°F`}</div>
        )}
        <div className="row">{`${weatherLocation.formattedAddress}`}</div>
      </div>
    </div>
  );
}
