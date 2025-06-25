import type { Config } from "tailwindcss";

const config: Config = {
	dropShadow: {
		glow: "0 0 8px rgba(0, 212, 255, 0.5)",
	},
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
	  animation: {
		  marquee: 'marquee var(--duration) linear infinite',
		  glow: 'glow 1.5s ease-in-out infinite',
		  shimmer: 'shimmer 1.5s infinite linear',
		  spin: 'spin 1s linear infinite',
      },
	  keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' }
		  },
		  glow: {
			  '0%, 100%': { boxShadow: '0 0 0px rgba(0, 255, 255, 0.4)' },
			  '50%': { boxShadow: '0 0 12px 4px rgba(0, 255, 255, 0.6)' },
		  },
		  shimmer: {
			  '0%': { transform: 'translateX(-100%)' },
			  '100%': { transform: 'translateX(100%)' },
		  },
		  spin: {
			  to: { transform: "rotate(360deg)" }, // required for custom 'spin' to work
		  },
		  
      }
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
