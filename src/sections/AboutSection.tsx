import Image from 'next/image'
import React from 'react'
import { LuCode, LuDatabase, LuRocket } from 'react-icons/lu'

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
        {/* background glow */}
        <div className="absolute top-1/4 left-1/2  -translate-x-1/3 -translate-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />
        <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* left side */}
            <div className="flex justify-center lg:justify-start">
                <div className="relative w-85 h-85 md:w-120 md:h-120 rounded-2xl bg-surface/80 backdrop-blur-md border border-border flex items-center justify-center">
                    <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-2xl"></div>
                    <div className='w-[85%] h-[85%] relative'>
                        <Image src="/images/about.jpeg" alt="about" fill className="z-10 object-cover rounded-xl" />
                    </div>
                </div>
            </div>
            {/* right side */}
            <div className="space-y-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm  border border-border">
                    About Me
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">I build scalable and user-focused web applications</h2>
                <p className="text-gray-300 max-w-lg">
                    I&apos;m a Full Stack Web Developer with 5+ years of experience building and maintaining production web and mobile applications, with a particular focus on Laravel and React. 
                </p>
                <p className="text-gray-300 max-w-lg">
                    Comfortable owning a project end to end — from database design and API architecture through to a polished, responsive front end. 
                </p>                    
                <p className="text-gray-300 max-w-lg">
                    Experienced in payment gateway integrations, real-time systems, and working directly with clients across Pakistan, the Middle East, and Southeast Asia. 
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4'>
                    <div className="p-4 rounded-xl bg-surface border border-border text-center">
                        <LuCode className='mx-auto mb-2 text-primary w-6 h-6' />
                        <div className="text-text text-sm">Clean Code</div>
                    </div>
                    <div className="p-4 rounded-xl bg-surface border border-border text-center">
                        <LuDatabase className='mx-auto mb-2 text-primary w-6 h-6' />
                        <div className="text-text text-sm">Full Stack Apps</div>
                    </div>
                    <div className="p-4 rounded-xl bg-surface border border-border text-center">
                        <LuRocket className='mx-auto mb-2 text-primary w-6 h-6' />
                        <div className="text-text text-sm">Performance</div>
                    </div>                                        
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection