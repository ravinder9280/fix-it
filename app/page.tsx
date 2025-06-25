'use client'
import { TestimonialsSection } from "@/components/testimonials-with-marquee"
import { Hero } from "@/components/hero"
import { Footerdemo } from "@/components/ui/footer-section";

import { FeatureSteps } from "@/components/feature-section"
import Feature from "@/components/feature";
import { features } from "@/constant/featuresSteps.json";
import { testimonials } from "@/constant/testimonials.json";
import Faq02 from "@/components/faq";
import { motion } from "motion/react";


export default function Page() {
  return (<>
    <Hero 
    
    title="Fix Your Mistakes With The Power Of AI."
    subtitle="Say goodbye to grammatical errors. Our AI-powered software analyzes your text, correcting grammar, punctuation, and style mistakes with unparalleled accuracy. Write with confidence and clarity."
    actions={[
      {
        label: "Try Demo",
        href: "#",
        variant: "outline"
      },
      {
        label: "Start Free",
        href: "#",
        variant: "default"
      }
    ]}
    titleClassName="text-5xl md:text-6xl font-extrabold"
    subtitleClassName="text-lg md:text-xl max-w-6xl"
    actionsClassName="mt-8"
    />
          <FeatureSteps 
        features={features}
        title="Your Journey Starts Here"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
      />
    <Feature />
          <TestimonialsSection
      title="Trusted by developers worldwide"
      description="Join thousands of developers who are already building the future with our AI platform"
      testimonials={testimonials}
    />
    <Faq02 />
    
    
    <Footerdemo />
    <div className=" max-w-7xl">

    <motion.div initial={{ borderRadius:"0" }} animate={{ borderRadius:"50%" ,rotate:360}} transition={{ duration: 0.4}} className="bg-red-200 mx-auto size-[200px]">

    </motion.div>
    </div>

    </>
    
  );
}






