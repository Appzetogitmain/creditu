import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Users } from 'lucide-react';

import selvinImg from '../../../assets/image.png';
import arpitaImg from '../../../assets/image copy.png';
import prabinImg from '../../../assets/image copy 2.png';

const leaders = [
  {
    name: 'Selvin Prabhakar',
    role: 'Chief Executive Officer',
    image: selvinImg,
    bio: 'Driving our vision to democratize credit access across India with innovative technology.',
  },
  {
    name: 'Arpita Bhowmik',
    role: 'Non-Executive Director',
    image: arpitaImg,
    bio: 'Bringing decades of governance and strategic financial expertise to our board.',
  },
  {
    name: 'Prabin Mishra',
    role: 'Chief Operating & Technology Officer',
    image: prabinImg,
    bio: 'Spearheading our operations and technical infrastructure to ensure seamless experiences.',
  },
];

const WebsiteLeadership = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.leader-animate', 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#fafafa] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="leader-animate inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 mb-6">
            <Users size={32} strokeWidth={2} />
          </div>
          <h2 className="leader-animate text-3xl md:text-5xl font-black text-primary mb-6 leading-tight">
            Meet Our <span className="text-emerald-600">Leadership</span>
          </h2>
          <p className="leader-animate text-gray-500 text-lg md:text-xl font-medium">
            The visionary minds dedicated to revolutionizing the lending ecosystem in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {leaders.map((leader, index) => (
            <div 
              key={index}
              className="leader-animate bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-emerald-50 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-primary mb-1">{leader.name}</h3>
                <p className="text-sm font-black text-emerald-600 uppercase tracking-widest mb-4">{leader.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsiteLeadership;
