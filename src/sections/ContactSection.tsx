"use client"

import SectionHeader from "@/components/ui/SectionHeader";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { LuMail, LuMapPin, LuPhone, LuSend } from "react-icons/lu";

const contactInfo = [
    {
        icon: LuMail,
        label: "Email",
        value: "siddiqui.ahmedibrahim@gmail.com",
        href: "mailto:siddiqui.ahmedibrahim@gmail.com"
    },
    {
        icon: LuPhone,
        label: "Phone",
        value: "+92 323 8201326",
        href: "tel:+923238201326"
    },
    {
        icon: LuMapPin,
        label: "Location",
        value: "Karachi, Pakistan",
        href: "javascript:void(0)"
    }        
];
const ContactSection = () => {
    const [loading, setLoading] = useState(false);
    const onSubmit = async (event:React.SubmitEvent) => {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData(event.target);
        formData.append("access_key", "0b0bc0dc-459b-4276-9ce8-a33ff5b43dfb");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if(data.success) {
            toast.success("Form submitted successfully!");
            event.target.reset();
        } else {
            toast.error("Error submitting form");
        }

        setLoading(false);
    };    
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/3 right-1/4  -translate-x-1/2 -translate-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />
            <div className="w-[90%] max-w-6xl mx-auto relative z-10 space-y-16">
                <SectionHeader title="Let's build" highlight="something great" badge="Contact" description="Have a project in mind? I'd love to hear about it. Let's connect."/>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* left - form */}
                    <form data-aos="flip-right" data-aos-delay="100" data-aos-anchor-placement="top-center" onSubmit={onSubmit} className="p-6 rounded-2xl bg-surface border border-border space-y-5">
                        <h3 className="text-lg font-semibold text-text">Send a message</h3>
                        {/* name */}
                        <div>
                            <label htmlFor="name" className="text-sm text-gray-400 block mb-1">Name</label>
                            <input type="text" name="name" placeholder="Your Name" className="w-full px-4 py-2 rounded-lg bg-background border border-border text-text outline-none focus:border-primary transition" required />
                        </div>
                        {/* email */}
                        <div>
                            <label htmlFor="email" className="text-sm text-gray-400 block mb-1">Email</label>
                            <input type="text" name="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-lg bg-background border border-border text-text outline-none focus:border-primary transition" required />
                        </div>
                        <div>
                            <label htmlFor="message" className="text-sm text-gray-400 block mb-1">Message</label>
                            <textarea name="message" rows={4} placeholder="Your Message..." className="w-full px-4 py-2 rounded-lg bg-background border border-border text-text outline-none focus:border-primary transition resize-none" required></textarea>
                        </div>     
                        <button type="submit" className={`w-full py-3 rounded-full bg-primary text-gray-200 font-medium hover:opacity-90 transition flex items-center justify-center gap-2 cursor-pointer ${loading ? 'pointer-events-none' : ''}`}>
                            {loading ? 
                                <>
                                    <span className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></span>
                                    Sending Message...
                                </>
                            :
                                <>
                                    Send Message
                                    <LuSend className="w-4 h-4" />
                                </>
                            }
                        </button>                                           
                    </form>
                    {/* right - contact info */}
                    <div data-aos="flip-left" data-aos-delay="100" data-aos-anchor-placement="top-center" className="p-2">
                        <div className="text-xl font-semibold mb-6">Contact Information</div>
                        <div className="space-y-4">
                            {contactInfo.map((item, index) => (
                                <a key={index} href={item.href} className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <item.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-gray-400 text-sm">
                                            {item.label}
                                        </div>
                                        <div className="font-medium">
                                            {item.value}
                                        </div>                                        
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;