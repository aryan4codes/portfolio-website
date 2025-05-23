import React, { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingNav from '@/components/Navigation/FloatingNav';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Apply dark mode as default on initial load
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    
    // You could add additional loading logic here if needed
    const timer = setTimeout(() => {
      // This is a fallback in case onComplete doesn't fire
      setLoading(false);
    }, 6000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      <div className={`min-h-screen flex flex-col transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main>
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
        <FloatingNav />
      </div>
    </>
  );
};

export default Index;
