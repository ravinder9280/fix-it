import { TestimonialsSection } from "@/components/testimonials-with-marquee"
import { Hero } from "@/components/hero"
import { Footerdemo } from "@/components/ui/footer-section";

import { FeatureSteps } from "@/components/feature-section"

const features = [
  { 
    step: 'Step 1', 
    title: 'Learn the Basics',
    content: 'Start your Web3 journey by learning the basics of blockchain.', 
    image: 'https://images.unsplash.com/photo-1723958929247-ef054b525153?q=80&w=2070&auto=format&fit=crop' 
  },
  { 
    step: 'Step 2',
    title: 'Deep Dive',
    content: 'Dive deep into blockchain fundamentals and smart contract development.',
    image: 'https://images.unsplash.com/photo-1723931464622-b7df7c71e380?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Step 3',
    title: 'Build Projects',
    content: 'Graduate with hands-on Web3 experience through building decentralized applications.',
    image: 'https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop'
  },
]


const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    href: "https://twitter.com/emmaai"
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/davidtech"
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive."
  }
]


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
          <TestimonialsSection
      title="Trusted by developers worldwide"
      description="Join thousands of developers who are already building the future with our AI platform"
      testimonials={testimonials}
    />
          <Footerdemo />

    </>
    
  );
}






