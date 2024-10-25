import { ReactNode } from "react";

const LinkPreview = ({
  icon,
  title,
  link
}: {
  icon?: ReactNode;
  title: string;
  link: string;
}) => {
  return (
    <a
      className="bg-white flex shadow-md rounded-md"
      href={link}
      target="_blank"
    >
      {icon ? (
        <div className="flex items-center text-white font-bold bg-tosca p-2 rounded-l-md text-2xl">
          {icon}
        </div>
      ) : null}
      <div className="p-2 text-tosca">{title}</div>
    </a>
  );
};

export default LinkPreview;
