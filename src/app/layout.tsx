import { AppSidebar } from "@/components/app-sidebar";
import BottomPanel from "@/components/bottom-panel";
import Navbar from "@/components/Navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import QueryProvider from '@/providers/query-provider';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Turtleescript",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <QueryProvider>
                        <Navbar />
                        <div className="hidden lg:block bg-slate-950 overflow-hidden">
                            <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(240,240,240,0))]">
                            </div>
                            <div className="hidden sm:block absolute bottom-0 right-[0%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(240,240,240,0))]">
                            </div>
                        </div>
                        <SidebarProvider defaultOpen={false}>
                            <AppSidebar />
                            <SidebarTrigger className="fixed top-0 left-0 mt-5 ml-3 z-50" />
                            <main>
                                {children}
                            </main>
                        </SidebarProvider>
                    </QueryProvider>
                    <BottomPanel />
                </ThemeProvider>
            </body>
        </html>
    );
}
