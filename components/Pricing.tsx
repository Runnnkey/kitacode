import { Check } from "lucide-react";

export default function Pricing() {
    // Schema.org Structured Data untuk Penawaran Harga
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "AggregateOffer",
        name: "Paket Custom Web & Software KitaCode Lombok",
        priceCurrency: "IDR",
        lowPrice: 1000000,
        offerCount: 1,
        seller: {
            "@type": "LocalBusiness",
            name: "KitaCode",
            address: {
                "@type": "PostalAddress",
                addressRegion: "Lombok",
                addressCountry: "ID",
            },
        },
    };

    return (
        <section id="harga" aria-labelledby="pricing-heading" className="py-20 bg-slate-50/30">
            {/* Inject Schema JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header Section */}
                <header className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-xs font-bold tracking-wider text-sky-600 uppercase mb-3 block">
                        INVESTASI TRANSPARAN & FLEKSIBEL
                    </span>
                    <h2
                        id="pricing-heading"
                        className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
                    >
                        Paket Pembuatan Website & Aplikasi Tanpa Biaya Tersembunyi
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base">
                        Solusi perangkat lunak terjangkau dari KitaCode Lombok. Mencakup lisensi domain, cloud hosting
                        berkecepatan tinggi, sertifikat SSL, dan garansi SLA.
                    </p>
                </header>

                {/* Single Pricing Card Centered */}
                <div className="max-w-2xl mx-auto">
                    <article className="relative bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-lg hover:shadow-xl transition flex flex-col justify-between">
                        {/* Highlight Badge */}
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-600 to-blue-600 text-white text-[11px] font-bold tracking-wider uppercase px-4 py-1 rounded-full shadow-sm">
                            PILIHAN PENGEMBANGAN FLEKSIBEL
                        </div>

                        <div>
                            {/* Title & Description */}
                            <div className="text-center mt-2 mb-6">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                    Custom Web & E-Commerce Solutions
                                </h3>
                                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
                                    Solusi pembuatan website fleksibel dan fully custom—mulai dari landing page, toko
                                    online, hingga sistem aplikasi reservasi skala besar yang disesuaikan dengan
                                    kebutuhan serta anggaran bisnis Anda di Lombok dan Indonesia.
                                </p>
                            </div>

                            {/* Price Block */}
                            <div className="mb-8 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                                <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase block mb-1">
                                    INVESTASI MULAI DARI
                                </span>
                                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                                    Rp 1.000.000<span className="text-lg text-slate-500 font-medium">+</span>
                                </div>
                                <span className="text-xs font-medium text-slate-500 mt-1 block">
                                    Sesuai dengan kompleksitas use-case & cakupan fitur
                                </span>
                            </div>

                            {/* Features List */}
                            <ul className="space-y-3.5 mb-8 text-xs sm:text-sm list-none p-0 max-w-md mx-auto">
                                <li className="flex items-start gap-3 text-slate-700">
                                    <Check className="w-5 h-5 text-sky-600 mt-0.5 shrink-0" aria-hidden="true" />
                                    <span>
                                        <strong>Arsitektur Full Custom:</strong> Next.js / Laravel / React / Headless
                                        CMS
                                    </span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-700">
                                    <Check className="w-5 h-5 text-sky-600 mt-0.5 shrink-0" aria-hidden="true" />
                                    <span>
                                        <strong>Integrasi Payment Gateway:</strong> Otomatis via Midtrans / Xendit /
                                        QRIS
                                    </span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-700">
                                    <Check className="w-5 h-5 text-sky-600 mt-0.5 shrink-0" aria-hidden="true" />
                                    <span>
                                        <strong>Katalog & System Dashboard:</strong> Multi-tier roles & analitik terpadu
                                    </span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-700">
                                    <Check className="w-5 h-5 text-sky-600 mt-0.5 shrink-0" aria-hidden="true" />
                                    <span>
                                        <strong>Optimasi Performa:</strong> Load testing, SEO-ready, & kesiapan trafik
                                        besar
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* CTA Link */}
                        <div className="pt-2">
                            <a
                                href="https://wa.me/6281234567890?text=Halo%20KitaCode,%20saya%20ingin%20diskusi%20mengenai%20paket%20Custom%20Web%20%26%20App"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Konsultasikan pembuatan custom web dan e-commerce via WhatsApp KitaCode"
                                className="w-full inline-flex items-center justify-center bg-[#005d84] hover:bg-[#004a69] text-white font-bold py-4 px-6 rounded-2xl text-xs sm:text-sm transition text-center shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                            >
                                Jadwalkan Diskusi Kustom via WhatsApp
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
