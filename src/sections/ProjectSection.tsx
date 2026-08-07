import ProjectCard from "@/components/project/ProjectCard";
import SectionHeader from "@/components/ui/SectionHeader";

const porjects = [
    {
        title: "Afniah Plus Content Creation",
        description: "A modern, bilingual website built for Afniah Plus, a Saudi company specializing in cultural content and institutional narratives. The platform delivers knowledge-driven storytelling through a clean, responsive design. It supports both English and Arabic audiences seamlessly, reflecting the brand's cultural depth and identity.",
        image: "/images/project-01.png",
        tags: ["ReactJS", "Laravel", "TailwindCSS", "MySQL"],
        liveURL: "https://new.afnps.com"
    },
    {
        title: "Hospital Management System",
        description: "A full-featured, role-based hospital management platform supporting Admin, Doctor, Patient, Receptionist, Nurse, Lab, and Radiology panels. Features include appointment booking with dynamic slot generation, break-time exclusion, and past-slot validation, walk-in registration with auto-assigned queue tokens, a self-check-in kiosk with QR scan and payment simulation, doctor schedule management, email notifications and much more.",
        image: "/images/project-06.png",
        tags: ["Laravel", "ReactJS", "MySQL", "TailwindCSS"],
        liveURL: "https://hms.techrevivals.net/"
    },    
    {
        title: "Panolotto",
        description: "A full-featured crypto lottery platform powered by XRP, offering live draws, multiple lottery types, real-time countdown timers, winner tracking, and a secure ticket purchasing system with transparent reward payouts.",
        image: "/images/project-03.png",
        tags: ["Laravel", "PHP", "MySQL", "TailwindCSS"],
        liveURL: "https://panolotto.com"
    },    
    {
        title: "Little Explorers",
        description: "A modern, multilingual daycare and kindergarten platform designed for Little Explorers. It features detailed program listings, preschool curriculum information, and staff qualifications. The bilingual interface supports English, French, and Arabic, making it accessible to a diverse parent community.",
        image: "/images/project-02.png",
        tags: ["Laravel", "TailwindCSS", "MySQL"],
        liveURL: "https://little-explorer.techrevivals.net/"
    },
    {
        title: "Tapo Packings",
        description: "A wholesale e-commerce platform for Tapo, a Petaling Jaya-based supplier of biodegradable, kraft paper food packaging. It showcases eco-friendly product catalogs, bulk ordering options, and custom branding solutions for restaurants, cafes, and food vendors. Built to highlight sustainability and B2B trust across West Malaysia.",
        image: "/images/project-04.png",
        tags: ["Laravel", "MySQL", "Bootstrap"],
        liveURL: "https://tapo.techrevivals.net/"
    },
    {
        title: "Shipwise",
        description: "A comprehensive freight logistics and transportation platform for Shipwise, a North America-based transport agency with 15+ years of experience. Features service showcases for FTL, LTL, expedited, cross-border, and refrigerated freight, along with route optimization, freight consolidation, and dedicated management programs. Includes a quote request system, customer testimonials, and an FAQ section — built to convert leads and communicate logistics expertise.",
        image: "/images/project-05.png",
        tags: ["Laravel", "MySQL", "Bootstrap"],
        liveURL: "https://shipwise.techrevivals.net/"
    },                
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