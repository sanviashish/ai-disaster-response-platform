import MetricCard from "./MetricCard";

export default function MetricSection(){

return(

<div className="grid grid-cols-4 gap-6 mt-6">

<MetricCard

title="Active SOS"

value={128}

icon="🆘"

color="#dc262620"

/>

<MetricCard

title="High Risk Zones"

value={8}

icon="⚠"

color="#d9770620"

/>

<MetricCard

title="Rescue Teams"

value={46}

icon="🚑"

color="#2563eb20"

/>

<MetricCard

title="Lives Saved"

value={2514}

icon="❤"

color="#16a34a20"

/>

</div>

);

}