import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://kitacode.com"), // Sesuaikan dengan domain resmi KitaCode

    title: {
        default: "KitaCode Lombok | Software House & Jasa Pembuatan Website Terpercaya",
        template: "%s | KitaCode Lombok",
    },
    description:
        "Jasa pembuatan website, aplikasi web, dan sistem informasi kustom profesional di Lombok. Transparan, terpercaya, dan berkinerja tinggi untuk memajukan bisnis Anda.",

    keywords: [
        "KitaCode",
        "KitaCode Lombok",
        "Software House Lombok",
        "Jasa Pembuatan Website Lombok",
        "Jasa Web Mataram",
        "Pengembangan Aplikasi Web Indonesia",
        "UI UX Design Lombok",
        "Bikin Web Bisnis",
    ],

    authors: [{ name: "KitaCode Team", url: "https://kitacode.com" }],
    creator: "KitaCode Lombok",
    publisher: "KitaCode Lombok",

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    openGraph: {
        type: "website",
        locale: "id_ID",
        url: "https://kitacode.com",
        title: "KitaCode Lombok | Software House & Jasa Pembuatan Website",
        description:
            "Mitra teknologi terpercaya di Lombok untuk solusi pembuatan website, sistem informasi, dan aplikasi bisnis modern.",
        siteName: "KitaCode Lombok",
        images: [
            {
                url: "/kodekita_square.png",
                width: 1200,
                height: 630,
                alt: "KitaCode Lombok Software House",
            },
        ],
    },

    // Twitter Card
    twitter: {
        card: "summary_large_image",
        title: "KitaCode Lombok | Software House & Jasa Pembuatan Website",
        description: "Ubah ide bisnis Anda menjadi produk digital modern bersama tim profesional KitaCode Lombok.",
        images: ["/og-image.jpg"],
    },

    alternates: {
        canonical: "https://kitacode.com",
    },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="id" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}>
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
