"use client";

import { useState } from "react";

export default function Cta() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        serviceType: "Company Profile Korporat / Usaha",
        notes: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message =
            `Halo Kitakode, saya ingin mengajukan konsultasi proyek:\n\n` +
            `*Nama & Perusahaan:* ${formData.name}\n` +
            `*Nomor WhatsApp:* ${formData.phone}\n` +
            `*Jenis Kebutuhan:* ${formData.serviceType}\n` +
            `*Catatan:* ${formData.notes || "-"}`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/6285253711498?text=${encodedMessage}`, "_blank");
    };
}
