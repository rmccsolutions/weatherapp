import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import { Emoji } from "emoji-mart";
import CardContent from "@material-ui/core/CardContent";
import { getIconName } from "../Models/Helpers";
/**
 * Display weather card
 *
 * @export
 * @param {*} props
 * @returns
 */
export default function CustomCard(props) {
  const { forecast } = props;
  let date = new Date(forecast.date * 1000);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return (
    <Card style={{ height: "160px", paddingBottom: "40px" }}>
      <CardContent style={{ marginRight: "200px" }}>
        <Emoji emoji={{ id: getIconName(forecast) }} set="facebook" size={64} />
        <div style={{ paddingLeft: "10px" }}>{`${parseInt(forecast.temp)}°F`}</div>
        <div style={{ paddingLeft: "10px" }}>{`${month}/${day}`}</div>
      </CardContent>
    </Card>
  );
}

CustomCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  forecast: PropTypes.object.isRequired
};
