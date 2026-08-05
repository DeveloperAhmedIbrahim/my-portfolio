import Image from "next/image"
import Link from "next/link"
import { LuExternalLink } from "react-icons/lu"

interface ProjectCardProps {
    title:string,
    description?:string,
    liveURL?:string,
    image:string,
    tags?:string[]
}

const ProjectCard = ({
    title,
    description,
    liveURL,
    image,
    tags
}:ProjectCardProps) => {
    return (
        <div className="group relative overflow-hidden rounded-2xl bg-surface border border-border transition-all duration-300 hover:-translate-x-1 hover:border-primary/50 hover:shadow-lg">
            {/* image */}
            <div className="relative h-60 md:h-64 overflow-hidden">
                <Image src={image} alt={title} fill className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition"></div>
            </div>

            {/* content */}
            <div className="p-6 space-y-x">
                <h3 className="text-xl text-text font-semibold group-hover:text-primary transition">
                    {title}
                </h3> 
                <p className="text-gray-400 text-sm leading-relaxed">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mt-1 justify-start">
                    {tags?.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-border">{tag}</span>
                    ))}
                </div>
                {/* links */}
                <div className="flex items-center gap-4 pt-3">
                    {liveURL && (
                        <Link href={liveURL} target="_blank" className="flex items-center text-sm gap-1 text-text-muted hover:text-primary transition">
                            <LuExternalLink className="w-4 h-4" />
                            Live
                        </Link>
                    )}        
                </div>
            </div>
        </div>
    )
}

export default ProjectCard