import SectionHeader from "@/components/ui/SectionHeader";

const experiences = [
    {
        role: "Full Stack Web Developer",
        company: "Brainiac Creation",
        description: `Building a Hospital Management System from the ground up with a Laravel backend and a React front end, covering separate Admin, Patient, Reception, and self-service Kiosk panels. Designed the appointments module end to end, including time-aware slot validation, doctor availability logic, and printable queue tokens reused across all three panels. Set up the core Eloquent model architecture around a single User model with role-based profiles, plus custom, human-readable ID generation for patients, doctors, and appointments. Developed a React Native mobile app (via Expo) for HR management, including leave and claims tracking, attendance, and document uploads. Built a library of reusable hooks and components to keep development consistent across multiple concurrent projects.`,
        period: "April 2026 - Present",
        technologies: ["Laravel", "ReactJS", "React Native", "MySQL", "Tailwind CSS"]
    },
    {
        role: "Full Stack Web Developer",
        company: "Coder Lab Solutions LLC",
        description: `Maintained and extended full-stack solutions for several client projects at once, balancing feature work with ongoing support requests. Worked on a policy and claims management system for a Dubai-based insurance client, handling policy lifecycle tracking and claims workflows. Built out course management, student tracking, and parent communication modules for a kindergarten learning management system. Took on side integration work for other clients, including a mobile-money payment gateway (SycaPay) and a Malaysia-focused pet subscription e-commerce site.`,
        period: "July 2025 – March 2026",
        technologies: ["Laravel", "Dot Net", "AngularJS", "SQL Server", "Tailwind CSS"]
    },
    {
        role: "Full Stack Web Developer",
        company: "Tesseract Innovations (Pvt) Ltd",
        description: `Contributed to a real-time trading application as part of a small backend-focused team. Built the Trade Responder module handling live trade execution logic and response handling. Developed core pieces of the Liquidity Management System to help keep order books balanced during active trading. Worked on several supporting components tied to real-time market data and trade processing.`,
        period: "October 2024 – June 2025",
        technologies: ["Laravel", "NodeJS", "Redis", "Web Sockets", "PostgreSQL"]
    },
    {
        role: "Laravel Developer",
        company: "AZ Solutions",
        description: `Designed relational databases and built several projects from scratch, from initial schema design through to a working product. Integrated a range of payment gateways, including crypto payment gateways, to support different client needs. Integrated third-party APIs such as the Amazon Affiliate API and KYC document verification services. Implemented real-time features using Pusher and Firebase Cloud Messaging for web socket notifications, live view updates, and a ranking system.`,
        period: "October 2022 – April 2024",
        technologies: ["Laravel", "Core PHP", "VueJS", "Bootstrap", "MySQL"]
    },
    {
        role: "Core PHP Developer",
        company: "QTechnology Solutions",
        description: `Built a Time & Attendance system supporting three distinct roles — Admin, Manager, and Employee — each with its own permissions. Implemented check-in/check-out functionality along with timeshift management for different work schedules. Developed a reporting system to calculate overtime, early departures, and other attendance metrics automatically.`,
        period: "November 2021 – September 2022",
        technologies: ["Core PHP", "Bootstrap", "MySQL"]
    }
];

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4  -translate-x-1/3 -translate-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />
            <div className="w-[90%] mx-auto">
                <div className="relative container mx-auto px-6 z-10">
                    <SectionHeader title="Experience that" highlight="speaks volume" badge="Experience" description="A timeline of my growth as a developer, from learning the fundamentals to building Full Stack Applications." />
                </div>
                <div className="relative mt-14">
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-x-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
                    <div className="space-y-12">
                        {experiences.map((experience, index) => (
                            <div key={index} className="relative grid md:grid-cols-2 gap-8">
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                                </div>
                                {/* content */}
                                <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                    <div className="p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition all duration-500">
                                        <span className="text-primary text-sm font-medium">{experience.period}</span>
                                        <h3 className="text-xl font-semibold mt-2">{experience.role}</h3>
                                        <p className="text-gray-300">{experience.company}</p>
                                        <p className="text-sm text-gray-400 mt-4 text-justify">{experience.description}</p>
                                        <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                                            {experience.technologies.map((technology, techIndex) => (
                                                <span key={techIndex} className="px-3 py-1 bg-surface text-sx rounded-full text-gray-300">{technology}</span>        
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>    
        </section>
    )
}

export default ExperienceSection;