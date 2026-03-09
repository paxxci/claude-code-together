import React from 'react';

const Footer = () => {
    return (
        <footer className="py-20 bg-background border-t border-zinc-900">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-20">

                    <div className="col-span-1 md:col-span-2">
                        <div className="text-3xl font-serif font-bold tracking-tighter gold-text mb-6">DYING BREED</div>
                        <p className="text-accent/40 text-sm max-w-xs leading-relaxed font-light">
                            Designing for the restless, the bold, and the courageous. High-end headwear for those who refuse to fade away.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.3em] text-primary mb-8">Navigation</h4>
                        <ul className="space-y-4 text-sm font-light text-accent/60">
                            <li><a href="#" className="hover:text-primary transition-colors">The Collection</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Our Philosophy</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Journal</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.3em] text-primary mb-8">Connect</h4>
                        <ul className="space-y-4 text-sm font-light text-accent/60">
                            <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Newsletter</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
                        </ul>
                    </div>

                </div>

                <div className="pt-10 border-t border-zinc-900/50 flex flex-col md:row justify-between items-center gap-6">
                    <p className="text-[10px] uppercase tracking-[0.2em] opacity-30">
                        © 2026 DYING BREED. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] opacity-30">
                        <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
                        <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
