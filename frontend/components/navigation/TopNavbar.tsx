"use client";

import {

Search,

Bell,

UserCircle2,

} from "lucide-react";

export default function TopNavbar() {

return (

<header className="flex h-24 items-center justify-between border-b border-white/10 px-10">

<div>

<h2 className="text-3xl font-bold">

Emergency Operations Dashboard

</h2>

<p className="mt-1 text-slate-400">

Real-time AI Disaster Monitoring

</p>

</div>

<div className="flex items-center gap-5">

<div className="glass flex items-center gap-3 rounded-full px-5 py-3">

<Search size={18} />

<input
type="text"
placeholder="Search..."
className="bg-transparent outline-none placeholder:text-slate-500"
/>

</div>

<button className="glass rounded-full p-3">

<Bell size={20} />

</button>

<button className="glass rounded-full p-3">

<UserCircle2 size={22} />

</button>

</div>

</header>

);

}