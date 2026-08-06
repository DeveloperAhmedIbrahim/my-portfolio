import ProjectCard from "@/components/project/ProjectCard";
import SectionHeader from "@/components/ui/SectionHeader";

const porjects = [
    {
        title: "Afniah Plus Content Creation",
        description: "A modern style heritage website fully dynamic with admin panel.",
        image: "/images/project-01.png",
        tags: ["ReactJS", "Laravel", "TailwindCSS"],
        liveURL: "https://new.afnps.com"
    }
];

const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10"></div>
            <div className="w-[90%] max-w-6xl mx-auto space-y-12">
                <SectionHeader 
                    title="Some Of My Recent" 
                    highlight="Work" 
                    badge="Projects" 
                    description="A selection of projects showcase my ability to design, build and scale modern Full Stack Applications." 
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {porjects.map((project, index) => (
                        <div key={index} data-aos="fade-right" data-aos-delay={index * 100} data-aos-anchor-placement="top-center">
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>                
            </div>
        </section>
    )
}

export default ProjectSection