"use client"

import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const AnimationLayout = ({children}:{children:React.ReactNode}) => {
    useEffect(() => {
        const initAos = async () => {
            await import("aos");
            AOS.init({
                duration:1000,
                easing:"ease",
                once:true,
                anchorPlacement:"top-bottom"
            });
        }

        initAos();
    }, []);

    return <>{children}</>
}

export default AnimationLayout;