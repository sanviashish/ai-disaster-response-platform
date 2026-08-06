"use client";

import { motion } from "framer-motion";

export default function GlobeMap() {

    return (

        <div className="card blueGlow h-full overflow-hidden p-8">

            <div className="mb-8">

                <p className="text-blue-400">

                    AI Situation Overview

                </p>

                <h2 className="mt-2 text-3xl font-bold">

                    Global Disaster Monitoring

                </h2>

            </div>

            <div className="flex h-[500px] items-center justify-center">

                <motion.div

                    animate={{

                        rotate:360

                    }}

                    transition={{

                        repeat:Infinity,

                        duration:35,

                        ease:"linear"

                    }}

                    className="flex h-[320px] w-[320px] items-center justify-center rounded-full border border-blue-500/30 bg-gradient-to-br from-blue-600/30 via-blue-400/10 to-cyan-300/20 shadow-[0_0_80px_rgba(59,130,246,.25)]"

                >

                    <div className="flex h-[250px] w-[250px] items-center justify-center rounded-full border border-blue-300/20">

                        <div className="text-[120px]">

                            🌍

                        </div>

                    </div>

                </motion.div>

            </div>

        </div>

    );

}