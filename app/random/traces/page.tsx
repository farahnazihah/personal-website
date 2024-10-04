"use client";

import * as React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import WorldMap from "react-svg-worldmap";

import { CountryContext } from "react-svg-worldmap";

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
    cursor: "pointer",
    countryValue: countryCode === "ID" ? "Home" : countryValue + " time(s)"
  };
};

const tooltipTextFunction = ({
  countryCode,
  countryValue,
  countryName
}: CountryContext) => {
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

export default function App() {
  const data = [
    { country: "id", value: 0 }, // indonesia
    { country: "my", value: 2 }, // malaysia
    { country: "sg", value: 0.5 }, // singapore
    { country: "cn", value: 1 }, // china
    { country: "th", value: 0.5 }, // thailand
    { country: "at", value: 1 }, // austria
    { country: "cz", value: 1 }, // czech
    { country: "be", value: 1 }, // belgium
    { country: "fr", value: 1 }, // france
    { country: "it", value: 1 }, // italy
    { country: "sa", value: 1 }, // saudi arabia
    { country: "va", value: 1 }, // vatican
    { country: "jp", value: 1 }, // japan
    { country: "tr", value: 0.5 }, // turkey
    { country: "ch", value: 0 } // switzerland
  ];

  return (
    <div className="py-12  h-screen">
      <h1 className="text-3xl font-bold text-tosca text-center">
        {"Countries I've been to"}
      </h1>

      <div className="bg-tosca my-4 bg-opacity-20 rounded-lg p-4 flex flex-row gap-2 items-center md:hidden">
        <IoInformationCircleOutline className="text-2xl" />
        <p>{"😞 Use the desktop version to see it better."}</p>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <WorldMap
          backgroundColor="#F8F8F8"
          color="#4A7265"
          size={Math.min(window.innerHeight, window.innerWidth)}
          data={data}
          styleFunction={stylingFunction}
          strokeOpacity={0.6}
          tooltipTextFunction={tooltipTextFunction}
        />
      </div>
    </div>
  );
}
