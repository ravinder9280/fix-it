
import {  Cpu, ShieldCheck, Layers, Zap} from "lucide-react";
const features = [
    {
        icon: Cpu,
        title: "Performance",
        description: "Fast, accurate grammar correction and tone rewriting.",
    },
    {
        icon: ShieldCheck,
        title: "Security",
        description: "All processing is done securely on the server.",
    },
    {
        icon: Layers,
        title: "Modularity",
        description: "Easy to Use.",
    },
    {
        icon: Zap,
        title: "Responsiveness",
        description: "Instant results with a smooth, interactive interface.",
    },
];


export default function Feature() {
    return (


        <div className="grid grid-cols-2 md:grid-cols-3 mt-16 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl p-8 md:p-12 mx-auto">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 md:p-6 h-40 md:h-48 flex flex-col justify-start items-start space-y-2 md:space-y-3"
                        >
                            <feature.icon size={18} className="text-white/80 md:w-5 md:h-5" />
                            <h3 className="text-sm md:text-base font-medium">{feature.title}</h3>
                            <p className="text-xs md:text-sm text-neutral-400">{feature.description}</p>
                        </div>
                    ))}
                </div>

    );
};

