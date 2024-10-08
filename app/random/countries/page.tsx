"use client";

import dynamic from "next/dynamic";
import { IoInformationCircleOutline } from "react-icons/io5";

const CustomWorldMap = dynamic(() => import("@/components/WorldMap"), {
  ssr: false
});

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

export default function Traces() {
  return (
    <div className="py-12">
      <h1 className="title">{"Countries I've been to"}</h1>

      <div className="bg-tosca my-4 bg-opacity-20 rounded-lg p-4 flex flex-row gap-2 items-center md:hidden">
        <IoInformationCircleOutline className="text-2xl" />
        <p>{"😞 Use desktop for better experience"}</p>
      </div>
      <CustomWorldMap data={data} />
    </div>
  );
}
