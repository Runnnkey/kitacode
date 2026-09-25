import { Star } from "lucide-react";

const testimonials = [
    {
        quote: '"Sebelumnya website lama kami lambat sekali dan tidak responsive di iPhone. Setelah dirombak oleh Kitakode menggunakan Next.js, skor PageSpeed melonjak ke 98 dan inquiry B2B dari Google bertambah hingga 3 kali lipat dalam 2 bulan pertama!"',
        name: "Agung Wicaksono",
        role: "Managing Partner, Wicaksono Logistics Group",
        avatar: "AW",
        avatarBg: "bg-sky-100 text-sky-700",
    },
    {
        quote: '"Desain yang dibuat tim Kitakode beneran berkelas, setara brand apparel internasional. Konsumen kami memuji checkout experience yang sangat mulus lewat QRIS dan VA otomatis tanpa ribet konfirmasi struk manual lagi."',
        name: "Clarissa Stephanie",
        role: "Founder & Creative Director, ARLA Studio",
        avatar: "CS",
        avatarBg: "bg-amber-100 text-amber-800",
    },
    {
        quote: '"Pelayanan tim teknisnya luar biasa ramah dan responsif. Brief kami yang rumit untuk portal booking arsitektur bisa dieksekusi tepat waktu tanpa melenceng dari anggaran awal. Sangat kami rekomendasikan!"',
        name: "Reza Hendrawan, IAI",
        role: "Principal Architect, Atelier Habitat Ojai",
        avatar: "RH",
        avatarBg: "bg-sky-100 text-sky-700",
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-slate-50/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold tracking-wider text-sky-600 uppercase mb-3 block">
                        ULASAN NYATA
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        Kata Mereka yang Telah Berkolaborasi Bersama Kitakode
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition"
                        >
                            <div>
                                {/* 5 Stars Rating */}
                                <div className="flex text-amber-400 gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                                    ))}
                                </div>

                                {/* Review Text */}
                                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-8">{item.quote}</p>
                            </div>

                            {/* Author Profile */}
                            <div className="pt-6 border-t border-slate-100 flex items-center gap-3">
                                <div
                                    className={`w-10 h-10 rounded-full ${item.avatarBg} font-bold text-xs flex items-center justify-center shrink-0`}
                                >
                                    {item.avatar}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm leading-snug">{item.name}</h4>
                                    <p className="text-[11px] text-slate-500 leading-snug">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
