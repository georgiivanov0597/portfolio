import { FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-950 text-center text-slate-500 text-sm border-t border-slate-900">
     
      <div className="flex flex-col items-center gap-4 mb-6">
       
        <p className="text-slate-400">
          Want to write me ?
        </p>

        <a
          href="mailto:contact@ivanovg.com"
          className="flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900 text-white hover:bg-cyan-500 hover:text-slate-950 transition duration-300 group"
        >
          <span className="font-medium">Get in Touch</span>
         
          <FaEnvelope className="text-lg group-hover:-rotate-12 transition-transform" />
        </a>

      </div>
     
      <p className="opacity-60">
        &copy; {new Date().getFullYear()} Georgi Ivanov. All rights reserved.
      </p>
      <p>
        Built with <span className="text-cyan-400">Next.js</span> & <span className="text-cyan-400">Tailwind CSS</span>.
      </p>
      
    </footer>
  );
}