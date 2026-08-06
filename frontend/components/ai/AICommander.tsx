"use client";

import { Bot } from "lucide-react";
import { motion } from "framer-motion";

export default function AICommander() {

return (

<motion.div

initial={{opacity:0,x:30}}

animate={{opacity:1,x:0}}

className="card flex h-full flex-col p-8"

>

<div className="flex items-center gap-3">

<div className="rounded-2xl bg-blue-500/20 p-4">

<Bot size={30}/>

</div>

<div>

<p className="text-blue-400">

AI Commander

</p>

<h2 className="text-2xl font-bold">

Good Evening

</h2>

</div>

</div>

<div className="mt-8 space-y-5">

<div className="glass rounded-2xl p-5">

<h3 className="font-semibold">

🚨 Cyclone Warning

</h3>

<p className="mt-2 text-slate-400">

High probability of severe flooding within the next 8 hours.

</p>

</div>

<div className="glass rounded-2xl p-5">

<h3 className="font-semibold">

🤖 Recommendation

</h3>

<p className="mt-2 text-slate-400">

Deploy Team Alpha to Zone-4.

Dispatch 6 rescue boats.

Open Relief Camp RC-12.

</p>

</div>

<div className="glass rounded-2xl p-5">

<h3 className="font-semibold">

⚡ AI Confidence

</h3>

<h1 className="mt-4 text-5xl font-bold text-blue-400">

97%

</h1>

</div>

</div>

</motion.div>

);

}