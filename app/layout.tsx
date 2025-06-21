import {Outfit} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { type Metadata } from 'next'
import { dark } from '@clerk/themes'

import {
  ClerkProvider
} from '@clerk/nextjs'

import { ThemeProvider } from "@/components/theme-provider";
const inter = Outfit({ subsets: ['latin'],
  
});

export const metadata: Metadata = {
  title: "Fix-It",
  description: "Say goodbye to grammatical errors. Our AI-powered software analyzes your text, correcting grammar, punctuation, and style mistakes with unparalleled accuracy. Write with confidence and clarity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
    
    <html lang="en">
      <ThemeProvider  defaultTheme={"dark"} >
      <body
        className={`${inter.className}  antialiased`}
        >
        <NavBar/>
        <main className="mt-[4rem]">

        {children}
        </main>
      </body>
        </ThemeProvider>
    </html>
          </ClerkProvider>
  );
}
