import Image from "next/image";
import { FaGithub, FaGitlab, FaLinkedinIn } from "react-icons/fa";
import Timeline from "./components/timeline";
import resume from "../data/resume.json";
import { FaRegEnvelope } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="flex flex-col md:flex-row gap-16 items-center self-center text-center md:text-left max-w-[46rem]">
      <Image
        src="/profile-picture.png"
        alt="profile"
        width={160}
        height={160}
        className="rounded-full"
      />
      <div className="flex flex-col gap-2 items-center md:items-start">
        <h1 className="text-2xl font-bold mb-2">Farah Nazihah</h1>
        <p>
          I am a Software Engineer specializing in Frontend Development, with
          interest in UI/UX design, UX engineering, mobile development,
          computer-based learning, animation, and game development.
        </p>
        <p>Depok, Indonesia</p>
        <div className="flex flex-row gap-4 items-center justify-center icon-buttons text-3xl mt-4">
          <a href="mailto:farahnazihah102@gmail.com">
            <FaRegEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/farahnazihah/" target="_blank">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/farahnazihah" target="_blank">
            <FaGithub />
          </a>
          <a href="https://gitlab.com/farahnazihah" target="_blank">
            <FaGitlab />
          </a>
        </div>
      </div>
    </div>
  );
};

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16">
      <Profile />
      <Timeline section="Education" contents={resume.education} />
      <Timeline section="Work Experience" contents={resume.work_experience} />
    </div>
  );
};

export default Home;
