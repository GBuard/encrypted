"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PillNav from "../components/PillNav";
import ASCIIText from "../components/ASCIIText";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <PillNav
                    logo="/logo.png"
                    logoAlt="Company Logo"
                    items={[
                        { label: "Femmes", href: "/" },
                        { label: "Hommes", href: "/about" },
                        { label: "Nouveautés", href: "/services" },
                        { label: "S'inscrire", href: "/contact" },
                    ]}
                    activeHref="/"
                    className="custom-nav"
                    ease="power2.easeOut"
                    baseColor="#000000"
                    pillColor="#ffffff"
                    hoveredPillTextColor="#ffffff"
                    pillTextColor="#000000"
                    onMobileMenuClick={undefined}
                />

                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        border: "2px solid #000",
                        background: "#fff",
                        zIndex: 1000,
                        width: "30rem",
                        height: "12rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <ASCIIText
                        text="Encrypted"
                        enableWaves={false}
                        asciiFontSize={6}
                        textFontSize={200}
                        textColor="#2e2e2e"
                    />
                </div>

                {children}
            </body>
        </html>
    );
}
