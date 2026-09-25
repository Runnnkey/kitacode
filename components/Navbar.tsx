import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
            <nav
                aria-label="Navigasi Utama"
                className="w-full max-w-6xl bg-white/90 backdrop-blur-md rounded-full border border-slate-200/80 shadow-sm px-6 py-3 flex items-center justify-between"
            >
                <Link href="/" className="inline-flex items-center gap-3" aria-label="KitaCode Beranda">
                    <div className="relative w-12 h-12 overflow-hidden rounded-full">
                        <Image
                            src="/kodekita_square.png"
                            alt="KitaCode - Software House & Jasa Pembuatan Website Lombok"
                            width={48}
                            height={48}
                            priority
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <span className="font-bold text-slate-800 text-lg hidden sm:inline-block">KitaCode</span>
                </Link>

                <ul className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600">
                    <li>
                        <Link
                            href="/"
                            className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-semibold transition"
                        >
                            Beranda
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#layanan"
                            className="px-4 py-1.5 rounded-full hover:text-slate-900 hover:bg-slate-50 transition"
                        >
                            Layanan
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#portofolio"
                            className="px-4 py-1.5 rounded-full hover:text-slate-900 hover:bg-slate-50 transition"
                        >
                            Portofolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#proses"
                            className="px-4 py-1.5 rounded-full hover:text-slate-900 hover:bg-slate-50 transition"
                        >
                            Proses
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#tentang"
                            className="px-4 py-1.5 rounded-full hover:text-slate-900 hover:bg-slate-50 transition"
                        >
                            Tentang Kami
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#kontak"
                            className="px-4 py-1.5 rounded-full hover:text-slate-900 hover:bg-slate-50 transition"
                        >
                            Kontak
                        </Link>
                    </li>
                </ul>

                <div className="flex items-center gap-3">
                    <Link
                        href="https://wa.me/6281234567890?text=Halo%20KitaCode,%20saya%20ingin%20konsultasi%20mengenai%20pembuatan%20software/website."
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Konsultasi gratis pembuatan aplikasi dan website via WhatsApp"
                        className="bg-amber-500 hover:bg-amber-600 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full transition shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                    >
                        Konsultasi Gratis
                    </Link>
                </div>
            </nav>
        </header>
    );
}
