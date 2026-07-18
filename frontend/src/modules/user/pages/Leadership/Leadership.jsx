import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import selvinImg from '../../../../assets/image.webp';
import arpitaImg from '../../../../assets/image copy.webp';
import prabinImg from '../../../../assets/image copy 2.webp';

const leaders = [
  {
    name: 'Selvin Prabhakar',
    role: 'Chief Executive Officer',
    image: selvinImg,
  },
  {
    name: 'Arpita Bhowmik',
    role: 'Non-Executive Director',
    image: arpitaImg,
  },
  {
    name: 'Prabin Mishra',
    role: 'Chief Operating and Technology Officer',
    image: prabinImg,
  },
];

const Leadership = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans pb-10">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 py-4 flex items-center shadow-sm">
        <button 
          onClick={() => navigate(-1)} 
          className="mr-3 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft size={20} className="text-gray-700" />
        </button>
        <h1 className="text-[18px] font-medium text-[#1a1a1a]">Leadership Team</h1>
      </div>

      <div className="max-w-md mx-auto px-4 pt-6">
        <div className="text-center mb-8">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 mb-3">
            <Users size={24} strokeWidth={2} />
          </div>
          <h2 className="text-[22px] font-medium text-[#1a1a1a] leading-tight mb-2">
            Meet the Visionaries
          </h2>
          <p className="text-[13px] text-gray-500 max-w-[280px] mx-auto">
            Our leadership team brings decades of experience to provide you with smart financial solutions.
          </p>
        </div>

        <div className="space-y-4">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm transition hover:shadow-md hover:border-gray-200"
            >
              <div className="h-[72px] w-[72px] flex-shrink-0 overflow-hidden rounded-xl bg-gray-50 border border-gray-100 shadow-sm">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-[16px] font-medium text-[#1a1a1a] mb-0.5">{leader.name}</h3>
                <p className="text-[12px] font-medium text-[#1A453A] leading-snug">{leader.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;
