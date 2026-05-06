import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, MapPin, Smartphone, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Permissions = () => {
    const navigate = useNavigate();
    const [accepted, setAccepted] = useState(true);

    const handleAgree = () => {
        if (accepted) {
            navigate('/user/auth');
        }
    };

    return (
        <div className="min-h-screen bg-[#fafafa] flex items-center justify-center font-sans p-4 md:p-8">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-[420px] bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden border border-gray-100 flex flex-col max-h-[90vh]"
            >
                {/* Header / Title */}
                <div className="px-6 pt-8 pb-4 flex-shrink-0 bg-white z-10 border-b border-gray-50">
                    <h1 className="text-2xl font-bold text-[#1a1a1a] leading-tight">
                        We need a<br />few permissions!
                    </h1>
                </div>

                {/* Scrollable Permissions List */}
                <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {/* SMS Permission */}
                    <div className="flex gap-3.5">
                        <div className="w-10 h-10 rounded-[14px] bg-gray-50 flex items-center justify-center flex-shrink-0 text-[#666]">
                            <MessageSquare size={20} strokeWidth={1.8} />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-[#1a1a1a] mb-0.5">SMS</h3>
                            <p className="text-[12px] text-gray-500 leading-relaxed text-justify">
                                SMS data (Non-Personal, Transactional SMS from Short-Code Senders) from your phone will be collected, transmitted and stored in our secured creditU server (https://app-creditu.com) in order to provide the personal finance manager offering and for onward sharing with Lending Partners to assess creditworthiness; understand cash flow patterns when you apply for a loan. This data may be collected when the app is closed or not in use.
                            </p>
                        </div>
                    </div>

                    {/* Location Permission */}
                    <div className="flex gap-3.5">
                        <div className="w-10 h-10 rounded-[14px] bg-gray-50 flex items-center justify-center flex-shrink-0 text-[#666]">
                            <MapPin size={20} strokeWidth={1.8} />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-[#1a1a1a] mb-0.5">Location</h3>
                            <p className="text-[12px] text-gray-500 leading-relaxed text-justify">
                                Location data will be collected, transmitted and stored in our secured creditU server (https://app-creditu.com) for checking serviceability, fraud prevention, expedition of KYC and to provide better offers.
                            </p>
                        </div>
                    </div>

                    {/* Device Information Permission */}
                    <div className="flex gap-3.5">
                        <div className="w-10 h-10 rounded-[14px] bg-gray-50 flex items-center justify-center flex-shrink-0 text-[#666]">
                            <Smartphone size={20} strokeWidth={1.8} />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-[#1a1a1a] mb-0.5">Device Information</h3>
                            <p className="text-[12px] text-gray-500 leading-relaxed text-justify">
                                Information about your device, including hardware model, operating system, and unique device identifiers will be collected, transmitted and stored in our secured server to prevent fraud and ensure unauthorized devices do not act on your behalf.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Fixed Area */}
                <div className="flex-shrink-0 px-6 pt-4 pb-6 bg-white border-t border-gray-100 z-10">
                    <div className="flex items-start gap-3 mb-5">
                        <div 
                            onClick={() => setAccepted(!accepted)}
                            className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 cursor-pointer transition-colors border-2 ${accepted ? 'bg-[#1A453A] border-[#1A453A]' : 'border-gray-300'}`}
                        >
                            {accepted && <Check size={14} className="text-white" strokeWidth={3} />}
                        </div>
                        <p className="text-xs text-gray-600 leading-snug">
                            By continuing, I accept the <span className="font-bold text-[#1a1a1a] hover:underline cursor-pointer">Privacy Policy</span> & <span className="font-bold text-[#1a1a1a] hover:underline cursor-pointer">Terms of Service</span> of creditU.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <button 
                            onClick={() => navigate(-1)}
                            className="flex-1 py-3.5 rounded-2xl font-semibold text-[#1A453A] border border-[#1A453A] bg-white text-sm hover:bg-gray-50 active:scale-[0.98] transition-all"
                        >
                            I disagree
                        </button>
                        <button 
                            onClick={handleAgree}
                            className={`flex-1 py-3.5 rounded-2xl font-semibold text-white text-sm transition-all ${accepted ? 'bg-[#1A453A] hover:bg-[#13352B] active:scale-[0.98] shadow-md' : 'bg-gray-300 cursor-not-allowed'}`}
                        >
                            I agree
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Permissions;
