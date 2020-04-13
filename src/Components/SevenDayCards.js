import React from "react";
import PropTypes from "prop-types";
import CustomCard from "./CustomCard";

/**
 * Display weather cards for seven days
 *
 * @export
 * @param {*} props
 * @returns
 */
export default function SevenDayCards(props) {
  const { forecasts, weatherLocation } = props;

  return forecasts.map((forecast, index) => {
    return (
      <div className="col-sm-12 col-md-1 col-xl-1">
        <CustomCard
          id={`seven_day_forcast_day_${index}`}
          weatherLocation={weatherLocation}
          forecast={forecast}
        />
      </div>
    );
  });
}

SevenDayCards.propTypes = {
  forecasts: PropTypes.arrayOf(PropTypes.oneOf(PropTypes.object))
};
