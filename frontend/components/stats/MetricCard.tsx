"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

interface Props{
title:string;
value:number;
icon:string;
color:string;
}

export default function MetricCard({
title,
value,
icon,
color,
}:Props){

return(

<motion.div

whileHover={{
y:-6,
scale:1.02
}}

className="card p-6"

>

<div className="flex items-center justify-between">

<div>

<p className="text-slate-400">

{title}

</p>

<h1 className="mt-4 text-4xl font-bold">
  {value}
</h1>

</div>

<div
className="flex h-16 w-16 items-center justify-center rounded-2xl text-3xl"
style={{background:color}}
>

{icon}

</div>

</div>

</motion.div>

);

}