import { Clock, Rocket } from "lucide-react";

interface StepItem {
    number: string;
    title: string;
    description: string;
    duration: string;
    numberColor: string;
    badgeBg: string;
    isRocket: boolean;
}

const steps: StepItem[] = [
    {
        number: "01",
        title: "Konsultasi & Discovery Brief",
        description:
            "Diskusi mendalam mengenai ide produk, target audiens bisnis Anda di Lombok & nasional, preferensi visual, serta penetapan arsitektur sitemap.",
        duration: "1–2 Hari Kerja",
        numberColor: "text-blue-200/80",
        badgeBg: "bg-blue-50 text-blue-600 border-blue-200/60",
        isRocket: false,
    },
    {
        number: "02",
        title: "Desain UI/UX & Wireframe",
        description:
            "Perancangan antarmuka prototipe interaktif di Figma oleh tim KitaCode. Anda dapat mencoba alur klik dan memberikan masukan sebelum koding.",
        duration: "3–5 Hari Kerja",
        numberColor: "text-blue-200/80",
        badgeBg: "bg-sky-50 text-sky-600 border-sky-200/60",
        isRocket: false,
    },
    {
        number: "03",
        title: "Pengembangan Kode & Integrasi",
        description:
            "Implementasi clean code modern (Next.js/Laravel), integrasi database, pengaturan CMS, formulir WhatsApp, dan standar keamanan SSL.",
        duration: "5–10 Hari Kerja",
        numberColor: "text-amber-200/80",
        badgeBg: "bg-amber-50 text-amber-600 border-amber-200/60",
        isRocket: false,
    },
    {
        number: "04",
        title: "Testing, SEO & Deployment",
        description:
            "Audit kecepatan Google Lighthouse, pengujian responsivitas mobile, indexing Google, serah terima akun, dan sesi pelatihan admin mandiri.",
        duration: "Siap Launching",
        numberColor: "text-sky-200/80",
        badgeBg: "bg-emerald-50 text-emerald-600 border-emerald-200/60",
        isRocket: true,
    },
];

const stats = [
    { value: "150+", label: "Produk & Web Live" },
    { value: "98.4%", label: "Tepat Waktu (On-Time)" },
    { value: "4.9 / 5", label: "Skor Kepuasan Klien" },
    { value: "24 Jam", label: "Maksimal SLA Response" },
];

export default function Process() {
    // Generate Schema.org HowTo Structured Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "Cara Kerja Pembuatan Website & Aplikasi di KitaCode Software House",
        description:
            "4 alur kerja terstruktur pembuatan website dan software kustom dari ide hingga produk digital siap pakai.",
        step: steps.map((step, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            name: step.title,
            text: step.description,
        })),
    };

    return (
        <section id="proses" aria-labelledby="process-heading" className="py-20 bg-slate-50/50">
            {/* Inject Schema JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header Section */}
                <header className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold tracking-wider text-sky-600 uppercase mb-3 block">
                        ALUR KERJA TERSTRUKTUR & TRANSPARAN
                    </span>
                    <h2
                        id="process-heading"
                        className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
                    >
                        4 Langkah Mengubah Ide Anda Menjadi Produk Digital Siap Pakai
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base">
                        Metodologi pengembangan software house KitaCode di Lombok untuk memastikan proyek berjalan tepat
                        waktu dan berkinerja tinggi.
                    </p>
                </header>

                {/* 4 Process Cards Grid */}
                <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 list-none p-0 m-0">
                    {steps.map((step, index) => (
                        <li key={index} className="flex">
                            <article className="w-full bg-white/90 backdrop-blur-sm rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition">
                                <div>
                                    {/* Step Number */}
                                    <span
                                        className={`text-4xl font-black ${step.numberColor} block mb-4`}
                                        aria-hidden="true"
                                    >
                                        {step.number}
                                    </span>

                                    {/* Title & Description */}
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Duration Badge */}
                                <footer className="pt-4 border-t border-slate-100">
                                    <span
                                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${step.badgeBg}`}
                                    >
                                        {step.isRocket ? (
                                            <Rocket className="w-3.5 h-3.5" aria-hidden="true" />
                                        ) : (
                                            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                                        )}
                                        <span>{step.duration}</span>
                                    </span>
                                </footer>
                            </article>
                        </li>
                    ))}
                </ol>

                {/* Stats Row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="bg-white/80 rounded-3xl p-6 border border-slate-200/70 shadow-sm text-center"
                        >
                            <div className="text-3xl sm:text-4xl font-black text-slate-900 mb-1">{stat.value}</div>
                            <div className="text-xs sm:text-sm font-medium text-slate-500">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
