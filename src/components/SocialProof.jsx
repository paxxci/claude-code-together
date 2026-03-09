import React from 'react';
import { motion } from 'framer-motion';

const SocialProof = () => {
    // Using generic luxury-sounding names as placeholders for high-end logos
    const brands = ["VANTAGE", "EQUINOX", "AURA", "MONOLITH", "CHRONOS"];

    return (
        <section className="py-20 border-y border-zinc-900 bg-background overflow-hidden">
            <div className="container mx-auto px-6">
                <p className="text-center text-[10px] uppercase tracking-[0.5em] text-primary mb-12 opacity-80">
                    Trusted by Industry Icons
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale contrast-125">
                    {brands.map((brand, index) => (
                        <motion.div
                            key={brand}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-xl md:text-2xl font-serif font-bold tracking-tighter"
                        >
                            {brand}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
