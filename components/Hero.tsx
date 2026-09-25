import { ArrowRight, MessageSquare, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-blue-50/60 via-slate-50/50 to-white">
            <div
                aria-hidden="true"
                className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-blue-200/40 via-sky-100/30 to-amber-100/40 rounded-full blur-3xl -z-10 pointer-events-none"
            />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
                <header className="flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
                        <span>Software House Lombok & Indonesia</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl leading-[1.15]">
                        Ubah Ide Anda Menjadi{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-amber-600">
                            Produk Digital Siap Pakai
                        </span>{" "}
                        & Berperforma Tinggi
                    </h1>
                </header>

                <p className="mt-6 text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed">
                    <strong>KitaCode</strong> adalah software house di Lombok yang membantu UMKM, startup, dan instansi
                    membangun website modern, sistem web, serta aplikasi digital berkonversi tinggi dengan arsitektur
                    kode mutakhir.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                    <Link
                        href="https://wa.me/6285253711498?text=Halo%20KitaCode,%20saya%20ingin%20konsultasi%20mengenai%20pembuatan%20software/website."
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Konsultasi gratis pembuatan aplikasi dan website via WhatsApp"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-7 py-3.5 rounded-full shadow-md transition focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                    >
                        <MessageSquare className="w-5 h-5" aria-hidden="true" />
                        <span>Konsultasi Gratis via WhatsApp</span>
                    </Link>
                    <Link
                        href="#layanan"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3.5 rounded-full border border-slate-200 transition focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                    >
                        <span>Lihat Layanan</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-600 border-t border-slate-200/60 pt-6">
                    <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                        <div className="flex text-amber-400" aria-label="Rating 5 Bintang">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" aria-hidden="true" />
                            ))}
                        </div>
                        <span>4.9/5 Skor Klien</span>
                    </div>
                    <span className="text-slate-300 hidden sm:inline" aria-hidden="true">
                        •
                    </span>
                    <div className="font-semibold text-slate-700">Portofolio & Produk Live</div>
                    <span className="text-slate-300 hidden sm:inline" aria-hidden="true">
                        •
                    </span>
                    <div className="flex items-center gap-1.5 text-slate-700">
                        <ShieldCheck className="w-4 h-4 text-sky-600" aria-hidden="true" />
                        <span>Garansi SLA & Support Full</span>
                    </div>
                </div>

                <div className="relative mt-12 w-full max-w-5xl rounded-3xl border border-slate-200/80 bg-white/80 shadow-2xl backdrop-blur-md p-3 sm:p-4">
                    <div className="bg-slate-100/90 rounded-2xl p-3 flex items-center gap-3 mb-3 border border-slate-200/60">
                        <div className="flex items-center gap-1.5" aria-hidden="true">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-amber-400" />
                            <div className="w-3 h-3 rounded-full bg-emerald-400" />
                        </div>
                        <div className="flex-1 bg-white rounded-lg px-4 py-1 text-xs text-slate-400 text-center font-mono max-w-xs mx-auto truncate border border-slate-200/50">
                            🔒 kitacode.id/showcase/sistem-aplikasi
                        </div>
                    </div>

                    <div className="relative rounded-xl overflow-hidden bg-slate-900 aspect-[16/10] sm:aspect-[16/9]">
                        <Image
                            src="/showcase.jpg"
                            alt="Portofolio pembuatan aplikasi dan website oleh KitaCode Software House Lombok"
                            width={1280}
                            height={720}
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Badge Bottom Left */}
                </div>
            </div>
        </section>
    );
}
