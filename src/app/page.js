import { FaGithub, FaLinkedin } from "react-icons/fa";
import TechStack from "./components/TechStack";
import Achievements from "./components/Achievements";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-20 bg-slate-950 px-4 text-center">
 
      <div className="space-y-6 max-w-3xl">
 
        <h2 className="text-xl font-medium text-cyan-400 uppercase tracking-wider">
          Hello there
        </h2>
 
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
          I'm <span className="text-cyan-400">Georgi Ivanov</span>.
          <br />
          Low-Code developer.
        </h1>
 
        <p className="text-lg md:text-xl text-slate-400 mx-auto max-w-2xl">
          Building modern, fast, and accessible low-code applications. 
          Mainly focused on Mendix and experimenting with React, Next.js.
        </p>
 
          <div className="flex gap-6 justify-center mt-8">
          { /*Github button */ }
          <a 
            href="https://github.com/georgiivanov0597" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-slate-800 text-white hover:bg-cyan-500 hover:text-slate-950 transition hover:scale-110 flex items-center"
            aria-label="Github Profile"
          >
            <FaGithub className="w-7 h-7" />
          </a>
          { /*LinkedIn button */ }
          <a 
            href="https://www.linkedin.com/in/georgi-ivanov-bbab5517a/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-slate-800 text-white hover:bg-cyan-500 hover:text-slate-950 transition hover:scale-110 flex items-center justify-center"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-7 h-7" />
          </a>
        </div>
      </div>

      <TechStack />

      <Achievements />
    </main>
  );
}