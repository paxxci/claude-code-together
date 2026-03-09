import React from 'react'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Features from './components/Features'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <div className="min-h-screen bg-background text-accent">
            <header className="fixed w-full p-6 flex justify-between items-center z-50 bg-background/80 backdrop-blur-md border-b border-zinc-900/50">
                <div className="text-2xl font-serif font-bold tracking-tighter gold-text">DYING BREED</div>
                <nav className="hidden md:flex space-x-10 text-[10px] uppercase tracking-[0.4em] font-medium">
                    <a href="#" className="hover:text-primary transition-colors">Collection</a>
                    <a href="#" className="hover:text-primary transition-colors">Philosophy</a>
                    <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                </nav>
                <button className="text-[10px] uppercase tracking-[0.3em] border border-primary/30 px-6 py-2 hover:bg-primary hover:text-background transition-all">
                    Menu
                </button>
            </header>

            <main>
                <Hero />
                <SocialProof />
                <Features />
                <div id="contact">
                    <Contact />
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default App
