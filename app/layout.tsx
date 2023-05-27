import "./globals.css";
//import localFont from "next/font/local";
import { Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

/**
const nunito = localFont({
    src: [
        { path: "/fonts/Nunito-VariableFont_wght.ttf", style: "normal" },
        { path: "/fonts/Nunito-Italic-VariableFont_wght.ttf", style: "italic" },
    ],
    variable: "--font-nunito",
});
 */

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
    title: "Andrew Davis",
    description: "The homepage of Andrew Davis, software developer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={nunito.className}>{children}</body>
            <Analytics />
        </html>
    );
}
