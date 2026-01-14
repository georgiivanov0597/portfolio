export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 text-center">
 
      <div className="space-y-6 max-w-3xl">
 
        <h2 className="text-xl font-medium text-cyan-400 uppercase tracking-wider">
          Здравей, страннико
        </h2>
 
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
          Аз съм <span className="text-cyan-400">Георги Иванов</span>.
          <br />
          Low-Code developer.
        </h1>
 
        <p className="text-lg md:text-xl text-slate-400 mx-auto max-w-2xl">
          Създавам модерни, бързи и достъпни Low-Code приложения. 
          Фокусиран съм върху Mendix. В момента експериментирам с React, Next.js.
        </p>
 
          {/* GitHub Бутон */}
          <a 
            href="https://github.com/georgiivanov0597" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition hover:scale-105"
          >
            GitHub Профил
          </a>
 
          {/* LinkedIn Бутон */}
          <a 
            href="https://www.linkedin.com/in/georgi-ivanov-bbab5517a/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-slate-700 text-white hover:bg-slate-800 transition hover:scale-105"
          >
            LinkedIn
          </a>
 
        </div>
    </main>
  );
}