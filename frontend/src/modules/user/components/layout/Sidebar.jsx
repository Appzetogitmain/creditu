import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  ShieldCheck,
  FileCheck2,
  BadgeIndianRupee,
  Gift,
  LogOut,
  ChevronRight,
  X,
  Globe,
  ChevronDown,
} from 'lucide-react';
import mobileLogo from '../../../../assets/logo-icon-mobile.png';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', sub: 'Account overview', path: '/user/dashboard' },
  { icon: ShieldCheck, label: 'KYC Verification', sub: 'Identity status', path: '/user/kyc' },
  { icon: FileCheck2, label: 'Eligibility Check', sub: 'Borrowing criteria', path: '/user/eligibility' },
  { icon: BadgeIndianRupee, label: 'Application Status', sub: 'Loan journey progress', path: '/user/status' },
  { icon: Gift, label: 'Rewards', sub: 'Points and offers', path: '/user/rewards' },
];

const Sidebar = ({ mobileOpen = false, onClose, isDesktop = false }) => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState('English');
  const location = useLocation();
  const navigate = useNavigate();

  const user = {
    name: 'Aman Srivastava',
    role: 'Priority Access',
    score: 742,
    kyc: 'Verified',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aman',
  };

  const languages = useMemo(() => ['English', 'Hindi'], []);

  const isActive = (path) => location.pathname === path;

  const handleNavigate = (path) => {
    navigate(path);
    onClose?.();
  };

  const handleLogout = () => {
    onClose?.();
    navigate('/');
  };

  return (
    <>
      <AnimatePresence>
        {mobileOpen && !isDesktop && (
          <motion.button
            aria-label="Close sidebar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[120] bg-slate-950/35 backdrop-blur-[3px] md:hidden"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={{ x: isDesktop || mobileOpen ? 0 : '-100%' }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        className="fixed left-0 top-0 z-[130] h-screen w-[86vw] max-w-[320px] border-r border-slate-200 bg-white backdrop-blur-xl shadow-[18px_0_45px_rgba(11,60,109,0.06)] md:w-[290px] md:max-w-none md:shadow-none"
      >
        <div className="flex h-full flex-col px-4 py-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3 md:hidden">
              <span className="inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white">
                <img
                  src={mobileLogo}
                  alt="Creditu"
                  className="h-8 w-8 object-contain"
                />
              </span>
              <div>
                <p className="text-[10px] font-medium tracking-[0.12em] text-slate-400">Creditu</p>
                <p className="text-sm font-semibold text-[#0B3C6D]">Account menu</p>
              </div>
            </div>
            <div className="hidden items-center gap-3 md:flex">
              <div>
                <p className="text-[10px] font-medium tracking-[0.12em] text-slate-400">Creditu</p>
                <p className="text-sm font-semibold text-[#0B3C6D]">Personal Finance</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setLanguageOpen((open) => !open)}
                  className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-[11px] font-semibold text-slate-700 transition hover:border-slate-300 md:flex"
                >
                  <Globe size={14} className="text-[#0B3C6D]" />
                  <span>{language}</span>
                  <ChevronDown size={13} className="text-slate-400" />
                </button>

                <AnimatePresence>
                  {languageOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.98 }}
                      className="absolute right-0 top-[calc(100%+8px)] z-20 w-36 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg"
                    >
                      {languages.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => {
                            setLanguage(item);
                            setLanguageOpen(false);
                          }}
                          className={`w-full px-3 py-2 text-left text-sm transition hover:bg-slate-50 ${
                            language === item ? 'font-bold text-[#0B3C6D]' : 'text-slate-600'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-slate-200 bg-white p-2 text-slate-500 shadow-[0_1px_6px_rgba(15,23,42,0.08)] transition hover:text-[#0B3C6D]"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-slate-100">
                <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-medium tracking-[0.12em] text-slate-400">Account profile</p>
                <h2 className="truncate text-sm font-semibold text-[#0B3C6D]">{user.name}</h2>
                <p className="text-xs font-medium text-emerald-600">{user.role}</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-slate-50 px-3 py-3">
                <p className="text-[10px] font-medium tracking-[0.12em] text-slate-400">Credit score</p>
                <p className="mt-1 text-lg font-semibold text-[#0B3C6D]">{user.score}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 px-3 py-3">
                <p className="text-[10px] font-medium tracking-[0.12em] text-slate-400">KYC status</p>
                <p className="mt-1 text-base font-semibold text-emerald-600">{user.kyc}</p>
              </div>
            </div>
          </div>

          <nav className="mt-5 flex-1 space-y-2 overflow-y-auto pr-1">
            <p className="px-2 pb-2 text-[10px] font-medium tracking-[0.12em] text-slate-400">
              Quick access
            </p>
            {navItems.map((item) => {
              const active = isActive(item.path);
              const Icon = item.icon;

              return (
                <button
                  key={item.path}
                  type="button"
                  onClick={() => handleNavigate(item.path)}
                  className={`group flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition-all ${
                    active
                      ? 'border-[#0B3C6D]/15 bg-[#0B3C6D] text-white shadow-[0_10px_20px_rgba(11,60,109,0.16)]'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-all ${
                        active ? 'bg-white/12 text-white' : 'bg-slate-100 text-[#0B3C6D]'
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className={`text-sm font-semibold leading-tight ${active ? 'text-white' : 'text-[#0B3C6D]'}`}>
                        {item.label}
                      </p>
                      <p className={`text-[11px] font-normal leading-tight ${active ? 'text-white/72' : 'text-slate-500'}`}>
                        {item.sub}
                      </p>
                    </div>
                  </div>
                  <ChevronRight size={15} className={active ? 'text-white/70' : 'text-slate-300'} />
                </button>
              );
            })}
          </nav>

          <div className="pt-4">
            <button
              type="button"
              onClick={handleLogout}
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] text-rose-600 transition hover:border-rose-200 hover:bg-rose-100"
            >
              <LogOut size={16} />
              Secure logout
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
