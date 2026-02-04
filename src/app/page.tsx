import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { WorkHistory } from "@/components/work-history";
import { Education } from "@/components/education";
import { ChatWidget } from "@/components/chat-widget";

export default function Home() {
  return (
    <div className="container max-w-7xl px-4 md:px-8 mx-auto pt-10 pb-24">
      <Hero />
      <Skills />
      <Projects />
      <WorkHistory />
      <Education />
      <ChatWidget />
    </div>
  );
}