// Feature types
export interface Feature {
    step: string;
    title?: string;
    content: string;
    image: string;
}

export interface FeatureStepsProps {
    features: Feature[];
    className?: string;
    title?: string;
    autoPlayInterval?: number;
    imageHeight?: string;
}

// Testimonial types
export interface TestimonialAuthor {
    name: string;
    handle: string;
    avatar: string;
}

export interface Testimonial {
    author: TestimonialAuthor;
    text: string;
    href?: string;
}

export interface TestimonialsSectionProps {
    title: string;
    description: string;
    testimonials: Testimonial[];
    className?: string;
}

export interface TestimonialCardProps {
    author: TestimonialAuthor;
    text: string;
    href?: string;
    className?: string;
}

// Hero types
export interface HeroAction {
    label: string;
    href: string;
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null;
}

export interface HeroProps {
    className?: string;
    gradient?: boolean;
    blur?: boolean;
    title: string;
    subtitle?: string;
    actions?: HeroAction[];
    titleClassName?: string;
    subtitleClassName?: string;
    actionsClassName?: string;
}

// FAQ types
export interface FAQItemProps {
    question: string;
    answer: string;
    index: number;
}

// Grammar correction types
export interface GrammarFormData {
    text: string;
    prompt?: string;
}

export interface CorrectedTextResult {
    success: boolean;
    base: string;
    tones: Record<string, string>;
}

export interface GenerateOptions {
    input: string;
    persona?: string;
    prompt?: string;
}

// Grammar corrector component types
export interface GrammarCorrectorFormProps {
    onResult: (result: CorrectedTextResult | null) => void;
    onLoadingChange: (loading: boolean) => void;
    isLoading: boolean;
}

export interface CorrectedTextDisplayProps {
    correctedText: CorrectedTextResult;
}

export interface TonesDisplayProps {
    correctedText: CorrectedTextResult | null;
    isLoading: boolean;
}

export interface GrammarCorrectorClientProps {
    className?: string;
}

// JSON data types
export interface FeaturesData {
    features: Feature[];
}

export interface TestimonialsData {
    testimonials: Testimonial[];
}

// Button variant types
export type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
export type ButtonSize = "default" | "sm" | "lg" | "icon";

// Common utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>; 