import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section className="py-32 bg-[#0A0A0A]">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-20 items-center">

                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                            Join the <span className="gold-text italic">Breed</span>.
                        </h2>
                        <p className="text-accent/60 font-light leading-relaxed mb-12 max-w-md">
                            Be the first to know about new collection drops, exclusive adventures, and the philosophy of the courageous.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-sm tracking-widest uppercase opacity-40">
                                <span className="w-10 h-[1px] bg-primary"></span>
                                <span>Inquiries</span>
                            </div>
                            <p className="text-xl font-serif">hello@dyingbreed.com</p>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-background border border-zinc-900 p-8 md:p-12"
                    >
                        <form className="space-y-8">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.3em] opacity-40">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-zinc-800 py-2 focus:outline-none focus:border-primary transition-colors font-light"
                                    placeholder="Jameson West"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.3em] opacity-40">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full bg-transparent border-b border-zinc-800 py-2 focus:outline-none focus:border-primary transition-colors font-light"
                                    placeholder="jameson@adventure.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.3em] opacity-40">Message</label>
                                <textarea
                                    rows="1"
                                    className="w-full bg-transparent border-b border-zinc-800 py-2 focus:outline-none focus:border-primary transition-colors font-light resize-none"
                                    placeholder="How can we help you become your best self?"
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full btn-premium">
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
