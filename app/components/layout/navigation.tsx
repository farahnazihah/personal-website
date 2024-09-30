import { FaGithub, FaInstagram, FaLinkedinIn, FaMediumM } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-center h-12 sticky z-10 top-0 mt-6 bg-background">
      <div className="flex flex-row gap-6 px-4 md:px-16 w-full max-w-screen-lg">
        <a href="/" className="text-tosca hover:text-dark-tosca">
          Home
        </a>
        <a href="/blogs" className="text-tosca hover:text-dark-tosca">
          Blogs
        </a>
        <a href="/projects" className="text-tosca hover:text-dark-tosca">
          Projects
        </a>
      </div>
      <div className="flex flex-row gap-4"></div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row my-8 gap-8 items-center px-4 md:px-16 max-w-screen-lg icon-buttons text-5xl">
          <a href="https://www.linkedin.com/in/farahnazihah/" target="_blank">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com/frhnzh_" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://medium.com/@farahnazihah" target="_blank">
            <FaMediumM />
          </a>
          <a href="https://github.com/farahnazihah" target="_blank">
            <FaGithub />
          </a>
        </div>
        <p className="text-tosca">
          🎨 and <span className="text-orange-400 font-bold">{"</>"}</span> with
          ❤️ by farah
        </p>
      </div>
    </footer>
  );
};
