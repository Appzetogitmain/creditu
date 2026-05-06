import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Lock, Phone, ArrowLeft, RefreshCw, CheckCircle2, ShieldCheck } from 'lucide-react';
import OTPInput from '../../components/Auth/OTPInput';

const VALID_OTP = "1234";

const AuthScreen = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState(['', '', '', '']);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [resendTimer, setResendTimer] = useState(30);

    useEffect(() => {
        let iv;
        if (step === 2 && resendTimer > 0) {
            iv = setInterval(() => setResendTimer(p => p - 1), 1000);
        }
        return () => clearInterval(iv);
    }, [step, resendTimer]);

    const handleSendOTP = () => {
        if (mobile.length !== 10) {
            setError('Please enter a valid 10-digit mobile number');
            return;
        }
        setError('');
        setLoading(true);
        setTimeout(() => { 
            setLoading(false); 
            setStep(2); 
        }, 1200);
    };

    const handleVerifyOTP = () => {
        const code = otp.join('');
        if (code.length !== 4) { 
            setError('Please enter the 4-digit OTP'); 
            return; 
        }
        setError('');
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            if (code === VALID_OTP) {
                // Mock setting user info for demo
                localStorage.setItem('registeredUser', JSON.stringify({ mobile }));
                setStep(3);
                setTimeout(() => navigate('/user/dashboard'), 2000);
            } else {
                setError('Invalid OTP. Try 1 2 3 4 for demo.');
            }
        }, 1500);
    };

    const resetFlow = () => { 
        setStep(1); 
        setError(''); 
        setOtp(['', '', '', '']); 
    };

    return (
        <div className="min-h-screen bg-[#fafafa] flex items-center justify-center font-sans p-4">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100"
            >
                <div className="p-8">
                    {/* Logo Section */}
                    <div className="flex justify-center mb-8">
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            className="bg-white"
                        >
                            <img
                                src="/images/image.png"
                                alt="CreditU Logo"
                                className="h-20 w-auto object-contain mix-blend-multiply"
                            />
                        </motion.div>
                    </div>

                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div 
                                key="step1"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="text-center mb-8">
                                    <h2 className="text-[24px] font-bold text-[#1a1a1a] mb-2">Welcome Back</h2>
                                    <p className="text-[#666] text-sm">Enter your mobile number to securely login into your account.</p>
                                </div>

                                <div className="space-y-6">
                                    <div className="group">
                                        <div className="relative flex items-center bg-[#f8f9fa] border border-gray-200 group-focus-within:border-[#1A453A] rounded-2xl transition-all overflow-hidden shadow-sm">
                                            <div className="flex items-center gap-2 pl-4 pr-3 border-r border-gray-200 flex-shrink-0">
                                                <span className="text-sm font-semibold text-[#1a1a1a]">🇮🇳 +91</span>
                                            </div>
                                            <input 
                                                type="tel" 
                                                placeholder="Enter mobile number" 
                                                maxLength={10}
                                                value={mobile} 
                                                onChange={e => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                                className="flex-1 bg-transparent py-[15px] px-4 text-[15px] font-medium text-[#1a1a1a] placeholder:text-gray-400 focus:outline-none"
                                            />
                                            <Phone size={18} className="text-gray-400 mr-4" />
                                        </div>
                                    </div>

                                    {error && (
                                        <motion.p 
                                            initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
                                            className="text-xs text-red-500 font-semibold ml-1 text-center"
                                        >
                                            {error}
                                        </motion.p>
                                    )}

                                    <button 
                                        onClick={handleSendOTP} 
                                        disabled={loading}
                                        className="w-full py-[16px] rounded-2xl bg-[#1A453A] text-white font-semibold text-[15px] hover:bg-[#13352B] active:scale-[0.98] transition-all shadow-md flex items-center justify-center disabled:opacity-70"
                                    >
                                        {loading ? (
                                            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                        ) : (
                                            "Get OTP"
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div 
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-6"
                            >
                                <button onClick={resetFlow} className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#1A453A] transition-colors mb-2 -ml-2 p-2">
                                    <ArrowLeft size={16} /> Back
                                </button>

                                <div className="mb-8">
                                    <h2 className="text-[24px] font-bold text-[#1a1a1a] mb-2">Verify Phone</h2>
                                    <p className="text-[#666] text-sm leading-relaxed">
                                        We've sent a 4-digit secure code to <br />
                                        <span className="font-semibold text-[#1A453A]">+91 {mobile}</span>
                                        <span className="block mt-1 text-xs text-gray-400">(Hint: Use 1234)</span>
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <OTPInput value={otp} onChange={setOtp} error={!!error} />
                                </div>

                                {error && (
                                    <motion.p animate={{ x: [-4, 4, -4, 4, 0] }} transition={{ duration: 0.3 }}
                                        className="text-xs text-red-500 font-semibold text-center mt-2 mb-4"
                                    >
                                        {error}
                                    </motion.p>
                                )}

                                <button 
                                    onClick={handleVerifyOTP} 
                                    disabled={loading}
                                    className="w-full py-[16px] rounded-2xl bg-[#1A453A] text-white font-semibold text-[15px] hover:bg-[#13352B] active:scale-[0.98] transition-all shadow-md flex items-center justify-center mt-6 disabled:opacity-70"
                                >
                                    {loading ? (
                                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                    ) : (
                                        "Verify & Secure Login"
                                    )}
                                </button>

                                <div className="text-center mt-6">
                                    <button disabled={resendTimer > 0}
                                        className="flex items-center justify-center gap-2 text-sm font-semibold text-[#1A453A] disabled:text-gray-400 mx-auto transition-colors w-full p-2"
                                        onClick={() => setResendTimer(30)}>
                                        <RefreshCw size={14} className={resendTimer === 0 ? 'animate-pulse' : ''} />
                                        {resendTimer > 0 ? `Resend code in ${resendTimer}s` : 'Resend Code'}
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div 
                                key="step3"
                                initial={{ opacity: 0, scale: 0.9 }} 
                                animate={{ opacity: 1, scale: 1 }} 
                                className="text-center py-10"
                            >
                                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 size={40} className="text-green-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">Verified!</h3>
                                <p className="text-[#666]">Redirecting to your secure dashboard...</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                
                {/* Security Footer */}
                <div className="bg-[#f8f9fa] py-4 px-6 border-t border-gray-100 flex items-center justify-center gap-2">
                    <ShieldCheck size={16} className="text-green-600" />
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">256-bit SSL • 100% Secure</span>
                </div>
            </motion.div>
        </div>
    );
};

export default AuthScreen;
