import type { Metadata } from "next";
import "./globals.css";
const basePath=process.env.NEXT_PUBLIC_BASE_PATH||"";
export const metadata:Metadata={title:"Navoraa | Enterprise Cloud, AI & Security Architecture",description:"Independent enterprise architecture, Microsoft cloud, AI platform, security and hybrid infrastructure advisory and delivery from Perth, Western Australia.",icons:{icon:`${basePath}/favicon.svg`,shortcut:`${basePath}/favicon.svg`}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
