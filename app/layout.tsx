import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
const manrope=Manrope({subsets:["latin"],variable:"--font-body"});
const space=Space_Grotesk({subsets:["latin"],variable:"--font-display"});
export const metadata: Metadata={title:"Farsy Shinal E K | Biotechnologist & Bioinformatics Professional",description:"Professional portfolio of Farsy Shinal E K — Biotechnologist and Bioinformatics professional with experience in biotechnology, research, data analysis, Python and business management.",openGraph:{title:"Farsy Shinal E K | Biotechnologist & Bioinformatics Professional",description:"Biotechnology, bioinformatics, data analysis and scientific problem solving.",type:"website"},twitter:{card:"summary_large_image",title:"Farsy Shinal E K | Biotechnologist & Bioinformatics Professional",description:"Biotechnology, bioinformatics, data analysis and scientific problem solving."}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${manrope.variable} ${space.variable}`}>{children}</body></html>}
