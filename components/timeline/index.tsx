import ReactMarkdown from "react-markdown";

type ExperienceProps = {
  title: string;
  subtitle?: string;
  location: string;
  details?: DetailsProps[];
};

type DetailsProps = {
  position: string;
  date: string;
  description?: string;
  points?: string[];
};

export type TimelineProps = {
  section: string;
  contents?: ExperienceProps[];
};

const Details = ({ position, date, description, points }: DetailsProps) => {
  return (
    <div className="flex flex-row gap-2 mt-2">
      <div className="flex flex-col items-center">
        <div className="bg-tosca rounded-full h-3 w-3 z-10 mt-2" />
        <div className="bg-gray-300 w-[2px] flex-grow mt-1"></div>
      </div>
      <div>
        <p className="font-bold text-tosca text-lg">{position}</p>
        <p className="text-sm text-gray-400">{date}</p>
        {description ? <ReactMarkdown>{description}</ReactMarkdown> : null}
        <ul className="list-disc ml-4">
          {points &&
            points.map((point, index) => (
              <li key={index}>
                <ReactMarkdown>{point}</ReactMarkdown>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = ({ title, location, details }: ExperienceProps) => {
  return (
    <div className="relative">
      <h4 className="text-xl font-bold text-black">
        <ReactMarkdown className="custom">{title}</ReactMarkdown>
      </h4>
      <p className="text-sm text-gray-400">{location}</p>
      {details
        ? details.map((detail, index) => <Details {...detail} key={index} />)
        : null}
    </div>
  );
};

const Timeline = ({ section, contents }: TimelineProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="py-2 text-xl font-bold text-tosca border-b-4 border-gray-200 h-auto">
          {section}
        </h3>
      </div>
      <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
        {contents
          ? contents.map((contents, index) => (
              <Experience
                title={contents.title}
                subtitle={contents.subtitle}
                location={contents.location}
                details={contents.details}
                key={`exp-${index}`}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Timeline;
