import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wallet, Coins, ShieldCheck, Trophy } from 'lucide-react';

const Splash = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#d4f0df] via-[#e2f5ea] to-[#f0f9f4] flex flex-col relative overflow-hidden font-sans">
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                <div className="absolute top-40 right-10 w-48 h-48 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
                {/* Dotted pattern overlay top left */}
                <div className="absolute top-0 left-0 w-48 h-48 opacity-10" style={{ backgroundImage: 'radial-gradient(#0A2C5A 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
            </div>

            <div className="flex-1 flex flex-col items-center pt-16 px-6 relative z-10">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center mb-8"
                >
                    <div className="bg-white/40 p-2 rounded-2xl backdrop-blur-sm border border-white/50 shadow-sm">
                        <img
                            src="/images/image.png"
                            alt="Creditu"
                            className="h-10 w-auto object-contain mix-blend-multiply"
                        />
                    </div>
                </motion.div>

                {/* Hero Text */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center mb-6"
                >
                    <h1 className="text-[28px] font-bold text-[#3E3071] leading-tight mb-2 tracking-tight">
                        Win from Rewards<br />worth
                    </h1>
                    <div className="relative inline-block">
                        <span className="text-5xl font-black text-[#13A360] drop-shadow-sm tracking-tighter">
                            ₹10,00,000<span className="text-2xl align-top">*</span>
                        </span>
                        {/* Little floating coins around amount */}
                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute -top-4 -right-4 text-[#F4A100]">
                            <Coins size={24} fill="#F4A100" />
                        </motion.div>
                        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2.5 }} className="absolute -bottom-2 -left-3 text-[#F4A100] opacity-80">
                            <Coins size={18} fill="#F4A100" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Illustration (Trophy) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex-1 flex items-center justify-center relative w-full mt-4 mb-8"
                >
                    <div className="relative w-48 h-48 flex items-center justify-center">
                        <div className="absolute inset-0 bg-[#13A360]/10 rounded-full filter blur-xl"></div>
                        <Trophy size={120} className="text-[#a3b1c6] drop-shadow-xl z-10" strokeWidth={1} />
                        {/* Coins inside/around trophy */}
                        <motion.div className="absolute z-20 top-10 text-[#F4A100]" animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                            <Coins size={40} fill="#F4A100" />
                        </motion.div>
                        <motion.div className="absolute z-20 left-4 top-16 text-[#F4A100]" animate={{ y: [0, -8, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}>
                            <Coins size={30} fill="#d48900" />
                        </motion.div>
                        <motion.div className="absolute z-20 right-6 top-12 text-[#F4A100]" animate={{ y: [0, -12, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}>
                            <Coins size={25} fill="#ffc107" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Card Area */}
            <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 90 }}
                className="bg-white rounded-t-[32px] px-6 pt-8 pb-8 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-20"
            >
                <div className="flex justify-between items-start mb-8 px-2">
                    <div className="flex flex-col items-center text-center gap-2">
                        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#555]">
                            <Wallet size={24} strokeWidth={1.5} />
                        </div>
                        <div>
                            <div className="font-bold text-[#222] text-[13px]">Personal Loan</div>
                            <div className="text-gray-400 text-[11px]">Up to ₹10L</div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center text-center gap-2">
                        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#555]">
                            <Coins size={24} strokeWidth={1.5} />
                        </div>
                        <div>
                            <div className="font-bold text-[#222] text-[13px]">Digital Gold</div>
                            <div className="text-gray-400 text-[11px]">Start from ₹10</div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center gap-2">
                        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#555]">
                            <ShieldCheck size={24} strokeWidth={1.5} />
                        </div>
                        <div>
                            <div className="font-bold text-[#222] text-[13px]">Secure App</div>
                            <div className="text-gray-400 text-[11px]">100% Secure</div>
                        </div>
                    </div>
                </div>

                <div className="text-center text-gray-500 text-xs mb-6 font-medium">
                    Repayment tenure up to 60 months
                </div>

                <button
                    onClick={() => navigate('/user/permissions')}
                    className="w-full bg-[#1A453A] text-white font-semibold py-[15px] rounded-2xl text-lg hover:bg-[#13352B] active:scale-[0.98] transition-all"
                >
                    Get started
                </button>
            </motion.div>
        </div>
    );
};

export default Splash;
