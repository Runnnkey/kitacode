import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ServiceItem {
    badge: string;
    category: string;
    title: string;
    description: string;
    features: string[];
    price: string;
    numericPrice: number;
    theme: {
        badgeBg: string;
        checkColor: string;
        ctaColor: string;
    };
}

const services: ServiceItem[] = [
    {
        badge: "Kredibilitas Korporat",
        category: "BEST FOR B2B & FIRMA",
        title: "Company Profile & Website Perusahaan",
        description:
            "Menampilkan profil perseroan, visi misi, legalitas, portofolio proyek, serta formulir kemitraan resmi untuk memperkuat positioning bisnis Anda di Lombok dan Indonesia.",
        features: [
            "Struktur halaman informatif: Beranda, Tentang Kami, Layanan, Portofolio, Kontak",
            "Integrasi Google Workspace Email Bisnis (@namaperusahaan.co.id)",
            "Peta interaktif kantor (Google Maps) & tombol WhatsApp direct dispatch",
        ],
        price: "Rp 2.999.000",
        numericPrice: 2999000,
        theme: {
            badgeBg: "bg-sky-100 text-sky-700 border-sky-200/50",
            checkColor: "text-sky-600",
            ctaColor: "text-sky-600 hover:text-sky-700",
        },
    },
    {
        badge: "Penjualan 24 Jam",
        category: "E-COMMERCE READY",
        title: "Toko Online & E-Commerce Modern",
        description:
            "Situs belanja instan tanpa potongan komisi pihak ketiga. Dilengkapi checkout mulus, kalkulator ongkos kirim real-time, dan verifikasi pembayaran otomatis.",
        features: [
            "Payment Gateway otomatis: QRIS, VA BCA/Mandiri/BRI, ShopeePay",
            "Cek Ongkir Otomatis terintegrasi JNE, J&T, SiCepat, AnterAja",
            "Dashboard inventaris produk, diskon kupon flash-sale, & invoice PDF",
        ],
        price: "Rp 6.499.000",
        numericPrice: 6499000,
        theme: {
            badgeBg: "bg-amber-100 text-amber-800 border-amber-200/50",
            checkColor: "text-amber-500",
            ctaColor: "text-amber-600 hover:text-amber-700",
        },
    },
    {
        badge: "Traffic & Ads Booster",
        category: "GOOGLE & META ADS",
        title: "High-Converting Landing Page",
        description:
            "Didesain khusus untuk kampanye iklan berbayar. Formula copywriting AIDA (Attention, Interest, Desire, Action) terbukti melipatgandakan tingkat konversi dan ROI.",
        features: [
            "Integrasi Meta Pixel (Facebook CAPI), TikTok Events API, & GA4",
            "A/B testing layout & sticky floating CTA contact form",
            "Zero-lag loading: kecepatan akses super kilat mengurangi bounce rate",
        ],
        price: "Rp 1.850.000",
        numericPrice: 1850000,
        theme: {
            badgeBg: "bg-sky-100 text-sky-700 border-sky-200/50",
            checkColor: "text-sky-600",
            ctaColor: "text-sky-600 hover:text-sky-700",
        },
    },
    {
        badge: "Enterprise Engine",
        category: "BESPOKE SOFTWARE",
        title: "Custom Web Application & Portal",
        description:
            "Pengembangan sistem aplikasi berbasis web oleh tim KitaCode Lombok yang disesuaikan dengan alur proses bisnis Anda: portal keanggotaan, booking, ERP mini, hingga CRM.",
        features: [
            "Tech Stack Modern: Next.js, React, Node.js, Laravel, PostgreSQL & Redis",
            "Multi-Role Access Permissions, Audit Logs & Enkripsi Data AES-256",
            "Integrasi RESTful API pihak ketiga & otomasi Webhook",
        ],
        price: "Rp 9.999.000",
        numericPrice: 9999000,
        theme: {
            badgeBg: "bg-indigo-100 text-indigo-700 border-indigo-200/50",
            checkColor: "text-sky-600",
            ctaColor: "text-sky-600 hover:text-sky-700",
        },
    },
];

export default function Services() {
    // Generate Schema.org Structured Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Software House & Web Development",
        provider: {
            "@type": "LocalBusiness",
            name: "KitaCode",
            address: {
                "@type": "PostalAddress",
                addressRegion: "Lombok",
                addressCountry: "ID",
            },
        },
        areaServed: ["Lombok", "Indonesia"],
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Layanan Pembuatan Website & Aplikasi KitaCode",
            itemListElement: services.map(service => ({
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: service.title,
                    description: service.description,
                },
                price: service.numericPrice,
                priceCurrency: "IDR",
            })),
        },
    };

    return (
        <section id="layanan" aria-labelledby="services-heading" className="py-20 bg-slate-50/30">
            {/* Inject Schema JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header Section */}
                <header className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold tracking-wider text-sky-600 uppercase mb-3 block">
                        LAYANAN KITACODE SOFTWARE HOUSE
                    </span>
                    <h2
                        id="services-heading"
                        className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
                    >
                        Solusi Website & Aplikasi yang Disesuaikan dengan Skala Bisnis Anda
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base">
                        Dari UMKM di Lombok hingga bisnis berskala nasional, kami menghadirkan arsitektur perangkat
                        lunak yang tangguh untuk memenangkan kompetisi pasar.
                    </p>
                </header>

                {/* Grid Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {services.map((service, index) => {
                        const waMessage = encodeURIComponent(
                            `Halo KitaCode, saya tertarik untuk berkonsultasi mengenai paket "${service.title}". Mohon informasi lebih lanjut.`,
                        );

                        return (
                            <article
                                key={index}
                                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                            >
                                <div>
                                    {/* Top Badges */}
                                    <div className="flex items-center justify-between gap-4 mb-6">
                                        <span
                                            className={`px-3.5 py-1 rounded-full text-xs font-semibold border ${service.theme.badgeBg}`}
                                        >
                                            {service.badge}
                                        </span>
                                        <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">
                                            {service.category}
                                        </span>
                                    </div>

                                    {/* Title & Description */}
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-snug">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-8">
                                        {service.description}
                                    </p>

                                    {/* Features List */}
                                    <ul className="space-y-3.5 mb-10 list-none p-0">
                                        {service.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-start gap-3">
                                                <CheckCircle2
                                                    aria-hidden="true"
                                                    className={`w-5 h-5 mt-0.5 shrink-0 ${service.theme.checkColor}`}
                                                />
                                                <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Card Footer: Price & CTA */}
                                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                                    <div>
                                        <span className="text-[11px] font-medium text-slate-500 block">Mulai dari</span>
                                        <span className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                            {service.price}
                                        </span>
                                    </div>

                                    <a
                                        href={`https://wa.me/6281234567890?text=${waMessage}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Konsultasikan pembuatan ${service.title} via WhatsApp`}
                                        className={`inline-flex items-center gap-1.5 font-bold text-sm transition focus:outline-none focus:underline ${service.theme.ctaColor}`}
                                    >
                                        <span>Rencanakan Sekarang</span>
                                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                    </a>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
