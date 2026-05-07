import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ShieldCheck } from 'lucide-react';

const LOAN_DRAFT_KEY = 'creditu:loanDraft';
const SELECTED_OFFER_KEY = 'creditu:selectedLoanOffer';

const educationOptions = ['High School', 'Diploma', 'Graduate', 'Post Graduate'];
const maritalOptions = ['Single', 'Married', 'Divorced', 'Widowed'];
const employmentOptions = ['Salaried', 'Self-employed', 'Business Owner', 'Freelancer'];

const loadStoredJson = (key) => {
  try {
    const raw = sessionStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const LoanDetails = () => {
  const navigate = useNavigate();
  const selectedOffer = useMemo(() => loadStoredJson(SELECTED_OFFER_KEY), []);

  const [step, setStep] = useState(2);
  const [showMaritalMenu, setShowMaritalMenu] = useState(false);
  const [showEmploymentMenu, setShowEmploymentMenu] = useState(false);
  const [showEducationMenu, setShowEducationMenu] = useState(false);
  const [draft, setDraft] = useState({
    maritalStatus: '',
    preferredLoanAmount: '',
    employmentType: '',
    monthlyIncome: '',
    firstName: '',
    lastName: '',
    education: '',
    consentCredit: true,
    consentKyc: true,
    incomeAboveThreshold: true,
  });

  useEffect(() => {
    const storedDraft = loadStoredJson(LOAN_DRAFT_KEY);
    if (storedDraft) {
      setDraft(prev => ({ ...prev, ...storedDraft }));
    }
  }, []);

  useEffect(() => {
    if (selectedOffer?.amount && !draft.preferredLoanAmount) {
      setDraft(prev => ({ ...prev, preferredLoanAmount: selectedOffer.amount }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOffer]);

  useEffect(() => {
    sessionStorage.setItem(LOAN_DRAFT_KEY, JSON.stringify(draft));
  }, [draft]);

  const updateDraft = (patch) => setDraft(prev => ({ ...prev, ...patch }));

  const continueToNextStep = () => setStep(2);
  const goToEligibility = () => navigate('/user/eligibility');

  const renderSelect = (label, value, options, isOpen, setOpen, onSelect, placeholder) => (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!isOpen)}
        className="w-full bg-white border border-[#C9CCD1] rounded-[22px] px-5 py-4 text-left flex items-center justify-between shadow-sm"
      >
        <span className={value ? 'text-[#2b2f36] font-medium text-[14px]' : 'text-[#7d8188] font-medium text-[14px]'}>
          {value || placeholder}
        </span>
        <ChevronDown size={18} className="text-[#7d8188]" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            className="absolute z-20 mt-2 w-full rounded-[20px] border border-[#E3E6EA] bg-white shadow-xl overflow-hidden"
          >
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onSelect(option);
                  setOpen(false);
                }}
                className="w-full text-left px-4 py-3 text-[14px] font-medium text-[#333942] hover:bg-[#F4F7FA] transition-colors border-b border-[#F0F2F5] last:border-b-0"
              >
                {option}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-[#111827]">
      <div className="max-w-md mx-auto px-6 pt-10 pb-8">
        <header className="flex items-center justify-between mb-8">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-11 h-11 rounded-full flex items-center justify-center text-[#23262d] hover:bg-[#F4F7FA] transition-colors"
          >
            <ArrowLeft size={34} strokeWidth={1.75} />
          </button>
        </header>

        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5F8FC] border border-[#E2E7EF] mb-4">
                  <ShieldCheck size={14} className="text-[#0B3C6D]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#51606f]">Secure pre-check</span>
                </div>
                <h1 className="text-[34px] leading-[1.03] font-black tracking-[-0.05em] text-[#35373f]">
                  Tell us about yourself
                </h1>
                <p className="mt-3 text-[16px] leading-tight text-[#81848b] font-light tracking-[-0.02em]">
                  Provide a few basic details
                </p>
              </div>

              {selectedOffer?.type && (
                <div className="mb-5 rounded-[22px] border border-[#E8ECF2] bg-[#F9FBFD] px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6b7078] mb-1">Selected offer</p>
                  <p className="text-[14px] font-bold text-[#0B3C6D]">{selectedOffer.type}</p>
                </div>
              )}

              <div className="space-y-4">
                {renderSelect(
                  'Marital status',
                  draft.maritalStatus,
                  maritalOptions,
                  showMaritalMenu,
                  setShowMaritalMenu,
                  (value) => updateDraft({ maritalStatus: value }),
                  'Marital status'
                )}

                <div className="relative">
                  <input
                    value={draft.preferredLoanAmount}
                    onChange={(e) => updateDraft({ preferredLoanAmount: e.target.value })}
                    inputMode="numeric"
                    placeholder="Preferred loan amount"
                    className="w-full bg-white border border-[#C9CCD1] rounded-[22px] px-5 py-4 text-[14px] font-medium text-[#2b2f36] placeholder:text-[#7d8188] shadow-sm outline-none focus:border-[#0B3C6D]"
                  />
                </div>

                {renderSelect(
                  'Your employment type',
                  draft.employmentType,
                  employmentOptions,
                  showEmploymentMenu,
                  setShowEmploymentMenu,
                  (value) => updateDraft({ employmentType: value }),
                  'Your employment type'
                )}

                <div className="relative">
                  <input
                    value={draft.monthlyIncome}
                    onChange={(e) => updateDraft({ monthlyIncome: e.target.value.replace(/[^\d]/g, '') })}
                    inputMode="numeric"
                    placeholder="Monthly income"
                    className="w-full bg-white border border-[#C9CCD1] rounded-[22px] px-5 py-4 text-[14px] font-medium text-[#2b2f36] placeholder:text-[#7d8188] shadow-sm outline-none focus:border-[#0B3C6D]"
                  />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={draft.consentCredit}
                    onChange={(e) => updateDraft({ consentCredit: e.target.checked })}
                    className="mt-1 w-5 h-5 rounded-md accent-[#16513d]"
                  />
                  <span className="text-[13px] leading-[1.55] text-[#24262b]">
                    I hereby give my consent for Whizdm Finance (P) LTD to access my credit information from
                    <span className="font-black underline"> CIBIL </span>/ Experian/ Equifax and act as my representative.
                  </span>
                </label>

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={draft.consentKyc}
                    onChange={(e) => updateDraft({ consentKyc: e.target.checked })}
                    className="mt-1 w-5 h-5 rounded-md accent-[#16513d]"
                  />
                  <span className="text-[13px] leading-[1.55] text-[#24262b]">
                    I hereby authorize moneyview&apos;s <span className="font-black underline">lending partners</span> to download my KYC records from CKYCR.
                  </span>
                </label>

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={draft.incomeAboveThreshold}
                    onChange={(e) => updateDraft({ incomeAboveThreshold: e.target.checked })}
                    className="mt-1 w-5 h-5 rounded-md accent-[#16513d]"
                  />
                  <span className="text-[13px] leading-[1.55] text-[#24262b]">
                    I confirm that my household income is above Rs. 3,00,000 per annum.
                  </span>
                </label>
              </div>

              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={continueToNextStep}
                className="mt-6 w-full rounded-[20px] bg-[#174F3D] py-4 text-[17px] font-semibold text-white shadow-[0_16px_32px_rgba(23,79,61,0.2)]"
              >
                Get offer
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <div className="mb-6">
                <h1 className="text-[34px] leading-[1.03] font-black tracking-[-0.05em] text-[#35373f]">
                  Tell us about yourself
                </h1>
                <p className="mt-3 text-[16px] leading-tight text-[#81848b] font-light tracking-[-0.02em]">
                  Provide a few basic details
                </p>
              </div>

              <div className="space-y-4">
                <input
                  value={draft.firstName}
                  onChange={(e) => updateDraft({ firstName: e.target.value })}
                  placeholder="First name"
                  className="w-full bg-white border border-[#C9CCD1] rounded-[22px] px-5 py-4 text-[14px] font-medium text-[#2b2f36] placeholder:text-[#7d8188] shadow-sm outline-none focus:border-[#0B3C6D]"
                />
                <div className="text-[12px] text-[#7d8188] px-5 -mt-3">As per PAN card</div>

                <input
                  value={draft.lastName}
                  onChange={(e) => updateDraft({ lastName: e.target.value })}
                  placeholder="Last name"
                  className="w-full bg-white border border-[#C9CCD1] rounded-[22px] px-5 py-4 text-[14px] font-medium text-[#2b2f36] placeholder:text-[#7d8188] shadow-sm outline-none focus:border-[#0B3C6D]"
                />
                <div className="text-[12px] text-[#7d8188] px-5 -mt-3">As per PAN card</div>

                {renderSelect(
                  'Education',
                  draft.education,
                  educationOptions,
                  showEducationMenu,
                  setShowEducationMenu,
                  (value) => updateDraft({ education: value }),
                  'Education'
                )}

                {renderSelect(
                  'Marital status',
                  draft.maritalStatus,
                  maritalOptions,
                  showMaritalMenu,
                  setShowMaritalMenu,
                  (value) => updateDraft({ maritalStatus: value }),
                  'Marital status'
                )}
              </div>

              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={goToEligibility}
                className="mt-6 w-full rounded-[20px] bg-[#174F3D] py-4 text-[17px] font-semibold text-white shadow-[0_16px_32px_rgba(23,79,61,0.2)]"
              >
                Continue
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LoanDetails;
