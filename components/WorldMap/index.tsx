"use client";

import _WorldMap, { CountryContext, DataItem } from "react-svg-worldmap";

const stylingFunction = ({
  countryValue,
  countryCode,
  color
}: CountryContext) => {
  return {
    fill: countryCode === "ID" || countryCode === "CH" ? "blue" : color,
    fillOpacity: countryValue !== undefined ? 1 : 0,
    stroke: "#4A7265",
    strokeWidth: 0.8,
    cursor: "hover",
    countryValue: countryCode === "ID" ? "Home" : countryValue + " time(s)"
  };
};

const tooltipTextFunction = ({
  countryCode,
  countryValue,
  countryName
}: CountryContext) => {
  console.log(countryCode, countryValue, countryName);
  if (countryCode === "ID") {
    return `${countryName}: Home`;
  } else if (countryCode === "CH") {
    return `${countryName}: Stayed`;
  } else if (countryValue == 0.5) {
    return `${countryName}: Transit`;
  } else {
    return `${countryName}: ${countryValue} time(s)`;
  }
};

const WorldMap = ({ data }: { data: DataItem[] }) => {
  return (
    <div className={"h-lvh mb-32"}>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <_WorldMap
          backgroundColor="#F8F8F8"
          color="#4A7265"
          size={Math.max(window.innerHeight, window.innerWidth) * 0.75}
          data={data}
          styleFunction={stylingFunction}
          strokeOpacity={0.6}
          tooltipTextFunction={tooltipTextFunction}
          richInteraction
        />
      </div>
    </div>
  );
};

export default WorldMap;
