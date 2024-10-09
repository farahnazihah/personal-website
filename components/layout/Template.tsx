import { IoInformationCircleOutline } from "react-icons/io5";
import ReactMarkdown from "react-markdown";

export const TemplateText = ({ text = "Coming Soon 😞" }: { text: string }) => {
  return (
    <section className="flex flex-col items-center justify-center h-full">
      <h1 className="text-center text-4xl text-gray-300">{text}</h1>
    </section>
  );
};

export const Alert = ({ text }: { text: string }) => {
  return (
    <div className="bg-tosca my-4 bg-opacity-20 rounded-lg p-4 flex flex-row gap-2 items-center w-full">
      <IoInformationCircleOutline className="text-2xl" />
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
};
