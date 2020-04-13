// eslint-disable-next-line import/prefer-default-export
export function getIconName(forecast) {
  let statusIconName = "";
  switch (forecast.status) {
    case "Clouds": {
      statusIconName = "cloud";
      break;
    }
    case "Rain": {
      statusIconName = "rain_cloud";
      break;
    }
    case "Clear": {
      let date = new Date();
      statusIconName = date.getHours() > 12 ? "full_moon" : "sunny";
      break;
    }
    default: {
      statusIconName = "question";
      break;
    }
  }
  return statusIconName;
}
