import { CheckCircle2, Headphones, Headset, Palette, Rocket, Search, TrendingUp, Zap } from "lucide-react";

interface FeatureItem {
    icon: React.ElementType;
    iconBg: string;
    title: string;
    description: string;
    badgeText: string;
    badgeIcon: React.ElementType;
}

const features: FeatureItem[] = [
    {
        icon: Palette,
        iconBg: "bg-blue-100 text-blue-600",
        title: "Desain Kustom & UI/UX Eksklusif",
        description:
            "Layout diproduksi khusus merefleksikan identitas brand Anda di Lombok dan Indonesia, tanpa batasan template generik.",
        badgeText: "Pixel-perfect Figma",
        badgeIcon: CheckCircle2,
    },
    {
        icon: Zap,
        iconBg: "bg-amber-100 text-amber-600",
        title: "Performa & Kecepatan Kilat",
        description:
            "Optimasi kompresi media, SSR Next.js, dan CDN global memastikan website terbuka di bawah 1.2 detik di perangkat mobile.",
        badgeText: "Skor Google 95+",
        badgeIcon: Rocket,
    },
    {
        icon: Search,
        iconBg: "bg-sky-100 text-sky-600",
        title: "Optimasi SEO Organik & Schema",
        description:
            "Dilengkapi struktur semantik HTML5, Open Graph, schema JSON-LD, dan XML sitemap agar mudah terindeks Google di Lombok & nasional.",
        badgeText: "Ranking Google Siap Naik",
        badgeIcon: TrendingUp,
    },
    {
        icon: Headphones,
        iconBg: "bg-indigo-100 text-indigo-600",
        title: "CMS Mudah & Dampingan Garansi",
        description:
            "Kelola konten, artikel, dan produk secara mandiri tanpa coding. Didukung panduan lengkap dan garansi SLA 6–12 bulan dari tim KitaCode.",
        badgeText: "Dedicated Support",
        badgeIcon: Headset,
    },
];

export default function Features() {
    return (
        <section id="keunggulan" aria-labelledby="features-heading" className="py-20 bg-slate-50/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                    <div className="max-w-2xl">
                        <span className="text-xs font-bold tracking-wider text-sky-600 uppercase mb-3 block">
                            STANDAR KEUNGGULAN KITACODE LOMBOK
                        </span>
                        <h2
                            id="features-heading"
                            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight"
                        >
                            Bukan Sekadar Template Instan. Kami Mengubah Ide Anda Menjadi Produk Digital Bernilai
                            Tinggi.
                        </h2>
                    </div>
                    <p className="text-slate-600 text-sm sm:text-base max-w-md leading-relaxed">
                        Software house di Lombok yang menggabungkan estetika visual, arsitektur sistem tangguh, dan
                        strategi konversi bisnis.
                    </p>
                </header>

                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 m-0">
                    {features.map((item, index) => {
                        const Icon = item.icon;
                        const BadgeIcon = item.badgeIcon;
                        return (
                            <li key={index} className="flex">
                                <article className="w-full bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                                    <div>
                                        <div
                                            className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center mb-6`}
                                            aria-hidden="true"
                                        >
                                            <Icon className="w-6 h-6" />
                                        </div>

                                        <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-8">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                                        <span>{item.badgeText}</span>
                                        <BadgeIcon className="w-4 h-4 text-sky-600" aria-hidden="true" />
                                    </div>
                                </article>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
