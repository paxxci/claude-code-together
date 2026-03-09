import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Compass, Sparkles } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Uncompromising Quality",
            description: "Each stitch is a testament to our commitment to excellence and durability. Materials sourced from the finest mills."
        },
        {
            icon: <Compass className="w-6 h-6" />,
            title: "Designed for Adventure",
            description: "Built to withstand the elements and accompany you on every journey, from mountain peaks to city streets."
        },
        {
            icon: <Sparkles className="w-6 h-6" />,
            title: "Timeless Aesthetic",
            description: "A fusion of classic silhouette and modern luxury that never goes out of fashion. Designed to be a lifetime companion."
        }
    ];

    return (
        <section className="py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-xl mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                        Crafted for the Brave. <br />
                        <span className="italic opacity-60">Worn by the Bold.</span>
                    </h2>
                    <div className="w-20 h-px bg-primary"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group"
                        >
                            <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-500 origin-left">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-serif mb-4 tracking-wide group-hover:text-primary transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-accent/60 leading-relaxed font-light">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
        </section>
    );
};

export default Features;
