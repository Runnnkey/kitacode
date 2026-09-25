"use client";

import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { motion, type Variants } from "motion/react";

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 120 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
            <Navbar />

            <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
                <Hero />
            </motion.div>

            {/* Features Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
            >
                <Features />
            </motion.section>

            {/* Services Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
            >
                <Services />
            </motion.section>

            {/* Portfolio Section (Uncomment jika sudah siap) */}
            {/* 
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
            >
                <Portfolio />
            </motion.section> 
            */}

            {/* Pricing Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
            >
                <Pricing />
            </motion.section>

            {/* Process Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
            >
                <Process />
            </motion.section>

            {/* Testimonials Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
            >
                <Testimonials />
            </motion.section>

            {/* FAQ Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
            >
                <Faq />
            </motion.section>

            {/* Footer */}
            <Footer />
        </main>
    );
}
