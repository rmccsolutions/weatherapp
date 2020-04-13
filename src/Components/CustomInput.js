import React from "react";
import PropTypes from "prop-types";
import Input from "@material-ui/core/Input";

/**
 * Custom Input for the weather
 *
 * @export
 * @param {*} props
 * @returns
 */
export default function CustomInput(props) {
  const { value, callBack } = props;
  return <Input placeholder="miami,fl" value={value} onChange={e => callBack(e.target.value)} />;
}
CustomInput.propTypes = {
  value: PropTypes.string.isRequired,
  callBack: PropTypes.func.isRequired
};
