import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import WebsiteNavbar from '../components/WebsiteNavbar';
import WebsiteFooter from '../components/WebsiteFooter';
import { gsap } from 'gsap';

const WebsiteEligibilityCheck = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    mobile: '',
    pan: '',
    income: '',
    employmentType: 'salaried'
  });

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(formRef.current, 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );
    }
  }, [step]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheck = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
    }, 2500);
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <WebsiteNavbar />
      
      <main className="flex-1 flex items-center justify-center pt-28 pb-20 px-6">
        <div ref={formRef} className="w-full max-w-lg">
          <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-premium border border-slate-100 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            
            {step === 1 ? (
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center">
                    <ShieldCheck className="text-primary" size={24} />
                  </div>
                  <div>
                    <h1 className="text-2xl font-black text-primary">Check Eligibility</h1>
                    <p className="text-xs font-bold text-textSecondary uppercase tracking-widest mt-1">Takes only 2 minutes</p>
                  </div>
                </div>

                <form onSubmit={handleCheck} className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">Mobile Number</label>
                    <input 
                      type="tel" 
                      name="mobile"
                      required
                      placeholder="Enter 10-digit number"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">PAN Number</label>
                    <input 
                      type="text" 
                      name="pan"
                      required
                      placeholder="ABCDE1234F"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all uppercase"
                      value={formData.pan}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">Monthly Income</label>
                      <input 
                        type="number" 
                        name="income"
                        required
                        placeholder="₹"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                        value={formData.income}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">Employment</label>
                      <select 
                        name="employmentType"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                        value={formData.employmentType}
                        onChange={handleChange}
                      >
                        <option value="salaried">Salaried</option>
                        <option value="self-employed">Self Employed</option>
                        <option value="business">Business</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit" 
                      disabled={isLoading}
                      className="w-full btn-premium btn-primary-website py-4 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          <span>Checking...</span>
                        </>
                      ) : (
                        <>
                          <span>Check Now</span>
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-[10px] text-textSecondary text-center mt-4">
                    By checking, you agree to our <Link to="/legal/terms" className="text-primary font-bold hover:underline">Terms & Conditions</Link>. This will not impact your credit score.
                  </p>
                </form>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 text-center py-6"
              >
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mx-auto mb-6">
                  <CheckCircle2 size={40} strokeWidth={2.5} />
                </div>
                <h2 className="text-2xl font-black text-primary mb-2">Congratulations!</h2>
                <p className="text-textSecondary mb-8">
                  You are eligible for a credit limit up to <span className="font-bold text-primary">₹5,00,000</span>.
                </p>
                
                <div className="bg-slate-50 rounded-2xl p-6 mb-8 text-left border border-slate-100">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="text-gold shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="text-sm font-bold text-primary mb-1">Next Step: Complete KYC</p>
                      <p className="text-xs text-textSecondary leading-relaxed">
                        Download the creditU app to complete your KYC and instantly access your approved limit.
                      </p>
                    </div>
                  </div>
                </div>

                <Link 
                  to="/download"
                  className="w-full btn-premium btn-primary-website py-4 flex items-center justify-center gap-2"
                >
                  Download App Now
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </main>

      <WebsiteFooter />
    </div>
  );
};

export default WebsiteEligibilityCheck;
