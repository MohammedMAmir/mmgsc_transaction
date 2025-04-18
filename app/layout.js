import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import NotImplemented from "@/components/NotImplemented";

const inter = Inter({
  subsets: ["latin"],
});

const interBold = Inter({
  subsets: ["latin"],
  weight: ["800"],
});

export const metadata = {
  title: "MMGSC Transactions Page",
  description: "Track transactions across you ATM network",
};

export default function RootLayout({ children }) {

  // The header for all pages, reused by applying
  // layout to all pages
  const header = (
    <header className="p-2 sm:p-4 flex items-center justify-between gap-4 ">
      <Link href="/"><img className="h-8 w-18 sm:h-10 sm:w-20 object-cover" src="/MM_logo.webp"></img></Link>
      <div className="flex items-center justify-between">
        <Link href="notfound"><img className="hover:opacity-60 h-10 w-10 sm:h-12 sm:w-12 object-cover" src="/default-profile.png"
        ></img></Link>
      </div>
    </header>
  )

  // The footer for all pages, reused by applying
  // layout to all pages
  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <p className={' ' + inter.className}>© MohammedMAmir | All Rights Reserved</p>
    </footer>
  )

  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </head>
      <body
        className={`w-full mx-auto text-sm sm:text-base
           min-h-screen flex flex-col ` + inter.className}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
