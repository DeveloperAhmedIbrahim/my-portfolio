import DotGrid from "@/components/hero/Background";
import LinkButton from "@/components/ui/LinkButton";
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";

const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen overflow-hidden flex items-center pt-30 py-10">
            {/* background glow */}
            <div className="absolute top-1/4 left-1/3  -translate-x-1/3 -translate-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />
            {/* background */}
            <div className="inset-0 absolute">
                <DotGrid
                    dotSize={2}
                    gap={15}
                    baseColor="#2F293A"
                    activeColor="#20B2A6"
                    proximity={120}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                />                
            </div>
            {/* content */}
            <div className="relative z-10 w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                {/* left side */}
                <div className="space-y-6">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm  border border-border">
                        Full Stack Web Developer
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-text/90">
                        Building scalable solutions with <br />  
                        <span className="text-primary/70">clean code</span>
                    </h1>
                    <p className="text-gray-400 max-w-lg tracking-wide">
                        I design and build scalable fullstack applications using modern technologies like ReactJS, Tailwind CSS, ExpressJS, Laravel. Focused on performance, clean UI and real-world products.
                    </p>
                    <div className="flex items-center gap-4 pt-2">
                        <LinkButton text="Get In Touch" href="#contact" icon={LuArrowRight} rounded />
                        <LinkButton text="View Projects" href="#projects" variant="outline" rounded />
                    </div>
                </div>
                {/* right side */}
                <div className="hidden md:flex justify-center lg:justify-end">
                    <div className="relative w-85 h-85 md:w-110 md:h-110 rounded-full bg-surface/80 backdrop-blur-md border border-border flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl"></div>
                        <Image src="/images/profile.jpeg" alt="profile" fill className="rounded-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;