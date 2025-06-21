
import {  Cpu, ShieldCheck, Layers, Zap} from "lucide-react";

const features = [
    {
        icon: Cpu,
        title: "Performance",
        description: "Ultra-fast data processing in every situation.",
    },
    {
        icon: ShieldCheck,
        title: "Security",
        description: "Advanced protection for complete peace of mind.",
    },
    {
        icon: Layers,
        title: "Modularity",
        description: "Easy integration with existing architecture.",
    },
    {
        icon: Zap,
        title: "Responsiveness",
        description: "Instant response to every command.",
    },

];

export default function Feature() {
    return (


                <div className="grid grid-cols-2 md:grid-cols-3 mt-16 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 h-40 md:h-48 flex flex-col justify-start items-start space-y-2 md:space-y-3"
                        >
                            <feature.icon size={18} className="text-white/80 md:w-5 md:h-5" />
                            <h3 className="text-sm md:text-base font-medium">{feature.title}</h3>
                            <p className="text-xs md:text-sm text-neutral-400">{feature.description}</p>
                        </div>
                    ))}
                </div>

    );
};

