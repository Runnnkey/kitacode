"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const categories = ["Semua Sektor", "Fintech", "Retail E-Commerce"];

const projects = [
    {
        id: 1,
        title: "AURA Finance Engine",
        categoryTag: "Fintech",
        badge: "SaaS & Fintech",
        description:
            "Aplikasi dashboard analitik portofolio investasi real-time dengan visualisasi data multi-aset untuk family office institusional.",
        tech: ["Next.js 14", "Tailwind CSS", "Chart.js"],
        image: "/portfolio-1.jpg",
        link: "#",
    },
    {
        id: 2,
        title: "AURA Atelier Studio",
        categoryTag: "Architecture",
        badge: "Architecture & Real Estate",
        description:
            "Website profil arsitektur bernuansa editorial minimalis dengan tipografi mewah, galeri fullscreen, dan visual storytelling imersif.",
        tech: ["Headless CMS", "GSAP Animation", "WebP Optimization"],
        image: "/portfolio-2.jpg",
        link: "#",
    },
    {
        id: 3,
        title: "ARLA Lifestyle Store",
        categoryTag: "Retail E-Commerce",
        badge: "Fashion E-Commerce",
        description:
            "Online boutique fashion dengan sistem filter katalog instan, pemilihan varian warna dinamis, dan integrasi multi-channel checkout.",
        tech: ["Shopify Plus / Nuxt", "Midtrans Gateway", "Klaviyo Sync"],
        image: "/portfolio-3.jpg",
        link: "#",
    },
];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("Semua Sektor");

    const filteredProjects =
        activeCategory === "Semua Sektor" ? projects : projects.filter(p => p.categoryTag === activeCategory);

    return (
        <section className="py-20 bg-slate-50/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header Section & Filter */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                    <div className="max-w-2xl">
                        <span className="text-xs font-bold tracking-wider text-sky-600 uppercase mb-3 block">
                            HASIL KARYA STUDIO
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            Portofolio Proyek yang Telah Mengudara & Menghasilkan Konversi
                        </h2>
                    </div>

                    {/* Category Filter Buttons */}
                    <div className="flex flex-wrap items-center gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-xs font-semibold transition ${
                                    activeCategory === cat
                                        ? "bg-blue-100 text-blue-700 border border-blue-200"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200/70 border border-transparent"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Portfolio Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map(item => (
                        <div
                            key={item.id}
                            className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition flex flex-col justify-between group"
                        >
                            <div>
                                {/* Image Container */}
                                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                    />
                                    {/* Category Badge on Image */}
                                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-medium text-slate-800 shadow-sm border border-slate-200/60">
                                        {item.badge}
                                    </span>
                                </div>

                                {/* Card Body */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                                        {item.description}
                                    </p>

                                    {/* Tech Stack Badges */}
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {item.tech.map((t, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2.5 py-1 rounded-lg bg-slate-100 text-[11px] font-medium text-slate-600"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Card Footer CTA */}
                            <div className="px-6 pb-6 pt-2">
                                <a
                                    href={item.link}
                                    className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-700 transition"
                                >
                                    <span>Pelajari Studi Kasus</span>
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
