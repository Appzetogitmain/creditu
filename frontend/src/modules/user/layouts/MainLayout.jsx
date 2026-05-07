import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar.jsx';
import Sidebar from '../components/layout/Sidebar.jsx';
import Footer from '../components/layout/Footer.jsx';

const MainLayout = ({ children }) => {
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const media = window.matchMedia('(min-width: 768px)');
        const sync = () => setIsDesktop(media.matches);

        sync();
        media.addEventListener('change', sync);
        return () => media.removeEventListener('change', sync);
    }, []);

    // Removed the force-close effect so desktop drawer can remain open if toggled

    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden">
            {/* Background Light Effects */}
            <div className="purple-light-effect" style={{ top: '-10%', right: '-5%' }} />
            <div className="purple-light-effect" style={{ bottom: '10%', left: '-10%', animationDelay: '-5s', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)' }} />

            <Navbar onMenuClick={() => setMobileSidebarOpen((open) => !open)} />
            <Sidebar
                mobileOpen={mobileSidebarOpen}
                isDesktop={isDesktop}
                onClose={() => setMobileSidebarOpen(false)}
            />
            <main className="flex-1 pt-[88px] relative z-10">
                {children}
            </main>
            <div className="hidden md:block">
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;
