import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#060608] min-h-screen text-white font-sans selection:bg-indigo-500/30 selection:text-white antialiased">
      <Navbar />
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects /> {/* මෙතන තියෙන ස්ටිකී කාඩ්ස් වලට දැන් හොඳට ඉඩ ලැබෙනවා */}
        <Contact />
      </div>
    </main>
  );
}