import { Globe, Mail, MapPin, MessageSquare, Send, Share2 } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-12 bg-slate-50/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="bg-white/90 backdrop-blur-md rounded-[2.5rem] p-8 sm:p-12 border border-slate-200/80 shadow-sm">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
                        {/* Column 1: Brand Info */}
                        <div className="lg:col-span-4">
                            <div className="flex items-center gap-2.5 mb-4">
                                <div className="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center text-white font-black text-sm">
                                    K
                                </div>
                                <span className="text-xl font-extrabold text-slate-900 tracking-tight">Kitakode</span>
                            </div>
                            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
                                Mitra inovasi digital terpercaya untuk pengembangan web arsitektural, landing page
                                conversion-focused, dan sistem aplikasi enterprise dengan estetika modern.
                            </p>

                            {/* Social / Action Buttons */}
                            <div className="flex items-center gap-3">
                                <a
                                    href="#"
                                    className="w-9 h-9 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center hover:bg-sky-100 transition"
                                    aria-label="Website"
                                >
                                    <Globe className="w-4 h-4" />
                                </a>
                                <a
                                    href="#"
                                    className="w-9 h-9 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center hover:bg-sky-100 transition"
                                    aria-label="Telegram"
                                >
                                    <Send className="w-4 h-4" />
                                </a>
                                <a
                                    href="#"
                                    className="w-9 h-9 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center hover:bg-sky-100 transition"
                                    aria-label="Share"
                                >
                                    <Share2 className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Column 2: Navigasi */}
                        <div className="lg:col-span-2">
                            <h4 className="text-sm font-bold text-slate-900 mb-4">Navigasi</h4>
                            <ul className="space-y-2.5 text-xs text-slate-600">
                                <li>
                                    <Link href="#" className="hover:text-sky-600 transition">
                                        Beranda
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-sky-600 transition">
                                        Tentang Kami
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-sky-600 transition">
                                        Portofolio Pilihan
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-sky-600 transition">
                                        Alur Kolaborasi
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-sky-600 transition">
                                        Pusat Kontak
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Layanan Studio */}
                        <div className="lg:col-span-3">
                            <h4 className="text-sm font-bold text-slate-900 mb-4">Layanan Studio</h4>
                            <ul className="space-y-2.5 text-xs text-slate-600">
                                <li>
                                    <Link href="#" className="hover:text-sky-600 transition">
                                        Custom Web Development
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-sky-600 transition">
                                        High-Converting Landing Page
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-sky-600 transition">
                                        UI/UX & Product Design
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-sky-600 transition">
                                        E-Commerce Architecture
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-sky-600 transition">
                                        Maintenance & Cloud Optimization
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4: Studio & Kantor */}
                        <div className="lg:col-span-3">
                            <h4 className="text-sm font-bold text-slate-900 mb-4">Studio & Kantor</h4>
                            <div className="space-y-3 text-xs text-slate-600">
                                <div className="flex items-start gap-2.5">
                                    <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                                    <div>
                                        <p>Jakarta: One Pacific Place, SCBD</p>
                                        <p>Surabaya: Pakuwon Center, Tunjungan</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                                    <a href="mailto:halo@kitakode.id" className="hover:text-sky-600 transition">
                                        halo@kitakode.id
                                    </a>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <MessageSquare className="w-4 h-4 text-sky-600 shrink-0" />
                                    <a
                                        href="https://wa.me/6281288004421"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-sky-600 transition"
                                    >
                                        WhatsApp: +62 812–8800–4421
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar / Copyright */}
                    <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                        <p>© 2025 Kitakode Digital Agency. Seluruh hak cipta dilindungi undang-undang.</p>
                        <div className="flex items-center gap-6">
                            <Link href="#" className="hover:text-slate-900 transition">
                                Kebijakan Privasi
                            </Link>
                            <Link href="#" className="hover:text-slate-900 transition">
                                Syarat Layanan
                            </Link>
                            <Link href="#" className="hover:text-slate-900 transition">
                                SLA Jaminan Mutu
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
