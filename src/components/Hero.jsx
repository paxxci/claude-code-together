import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="z-10 text-left"
                >
                    <h1 className="text-6xl md:text-8xl font-serif leading-tight mb-8">
                        For Those Who <span className="gold-text">Refuse</span> to Fade Away
                    </h1>
                    <p className="text-lg md:text-xl text-accent/70 mb-10 max-w-lg font-light leading-relaxed">
                        Premium headwear for a generation defined by courage, adventure, and the relentless pursuit of their best selves.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-premium"
                    >
                        Buy Hat Now
                    </motion.button>
                </motion.div>

                {/* Image/Mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative aspect-square md:aspect-[4/5] w-full overflow-hidden shadow-2xl"
                >
                    <img
                        src="/images/hero-hat.png"
                        alt="Dying Breed Premium Hat"
                        className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute bottom-10 left-10 backdrop-blur-md bg-background/30 p-4 border-l-2 border-primary">
                        <span className="text-xs tracking-[0.3em] uppercase opacity-50 block mb-1">Material</span>
                        <span className="text-sm font-medium tracking-widest">Italian Wool & Fine Leather</span>
                    </div>
                </motion.div>

            </div>

            {/* Background Decor */}
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        </section>
    );
};

export default Hero;
