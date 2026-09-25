import { HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "Berapa lama durasi pembuatan sebuah website sampai siap live?",
        answer: "Untuk Landing Page dan Company Profile standar, durasi pengerjaan berkisar antara 5 hingga 10 hari kerja setelah materi teks dan logo diterima. Untuk sistem E-Commerce atau Web App custom berskala besar, estimasi berkisar antara 2 hingga 4 pekan dengan milestone progres berkala setiap minggunya.",
    },
    {
        question: "Apakah sudah termasuk nama domain bisnis dan fasilitas hosting?",
        answer: "Ya, seluruh paket sudah termasuk biaya sewa domain (.com / .id / .co.id) dan Cloud Server Hosting berkecepatan tinggi selama 1 tahun penuh. Di tahun berikutnya, Anda hanya membayar biaya perpanjangan domain dan server tahunan tanpa biaya langganan software tersembunyi.",
    },
    {
        question: "Bagaimana skema pembayaran dan termin proyek di Kitakode?",
        answer: "Kami memberlakukan sistem termin aman: DP 50% di awal saat penandatanganan kesepakatan dan brief proyek, dan pelunasan 50% sisanya dilakukan hanya setelah website selesai ditinjau, disetujui, dan siap diluncurkan secara publik ke domain utama Anda.",
    },
    {
        question: "Apakah saya yang awam teknologi tetap bisa mengubah tulisan dan foto sendiri?",
        answer: "Tentu saja! Kami membangun panel dashboard admin (CMS) yang sangat ramah pengguna mirip seperti mengedit dokumen biasa. Tim Kitakode juga memberikan sesi pelatihan video 1-on-1 dan panduan PDF agar staf internal Anda dapat memperbarui portofolio, harga, atau artikel blog secara leluasa.",
    },
];

export default function Faq() {
    return (
        <section className="py-20 bg-slate-50/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-xs font-bold tracking-wider text-sky-600 uppercase mb-3 block">
                        TRANSPARANSI INFORMASI
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                        Pertanyaan yang Sering Diajukan Klien Kami
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base">
                        Jawaban lugas seputar proses pengerjaan, biaya, hingga hak kepemilikan aset digital Anda.
                    </p>
                </div>

                {/* FAQ Items List */}
                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm transition hover:shadow-md"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-1 text-sky-600 shrink-0 mt-0.5">
                                    <HelpCircle className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 leading-snug">
                                        {faq.question}
                                    </h3>
                                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
