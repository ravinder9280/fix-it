import { TestimonialsData } from "@/types";

export const testimonialsData: TestimonialsData = {
    testimonials: [
        {
            author: {
                name: "Emma Thompson",
                handle: "@emmawrites",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
            },
            text: "This writing assistant completely changed how I approach editing. It's like having a personal editor who never sleeps.",
            href: "https://twitter.com/emmawrites"
        },
        {
            author: {
                name: "David Park",
                handle: "@davidcontent",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
            },
            text: "As a content creator, I rely on this tool daily. It catches the small things and helps me refine tone with just a click.",
            href: "https://twitter.com/davidcontent"
        },
        {
            author: {
                name: "Sofia Rodriguez",
                handle: "@sofiapro",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
            },
            text: "I've become more confident in my writing. Whether it's emails or blog posts, everything sounds cleaner and more professional now."
        }
    ]
};

export const { testimonials } = testimonialsData; 