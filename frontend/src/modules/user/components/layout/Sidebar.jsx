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
  Users,
} from 'lucide-react';
import mobileLogo from '../../../../assets/logo-icon-mobile.png';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', sub: 'Account overview', path: '/user/dashboard' },
  { icon: FileCheck2, label: 'Eligibility Check', sub: 'Borrowing criteria', path: '/user/eligibility' },
  { icon: BadgeIndianRupee, label: 'Application Status', sub: 'Loan journey progress', path: '/user/status' },
  { icon: Users, label: 'Leadership Team', sub: 'Meet our leaders', path: '/user/leadership' },
  { icon: Gift, label: 'Rewards', sub: 'Points and offers', path: '/user/rewards' },
];

const Sidebar = ({ mobileOpen = false, onClose, isDesktop = false }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const user = {
    name: 'Aman Srivastava',
    role: 'Priority Access',
    score: 742,
    kyc: 'Verified',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aman',
  };

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
        {mobileOpen && (
          <motion.button
            aria-label="Close sidebar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[120] bg-black/40 backdrop-blur-sm cursor-default"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={{ x: mobileOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="fixed left-0 top-0 z-[130] h-screen w-[86vw] max-w-[320px] bg-white shadow-2xl flex flex-col font-sans"
      >
        <div className="flex h-full flex-col px-5 py-6">
          {/* Header */}
          <div className="flex items-center justify-between pb-6">
            <div className="flex items-center gap-3">
              <img
                src={mobileLogo}
                alt="Creditu"
                className="h-8 w-8 object-contain"
              />
              <div>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Creditu</p>
                <p className="text-[16px] font-bold text-[#1a1a1a] leading-tight">Account menu</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full bg-gray-50 p-2 text-gray-400 transition hover:bg-gray-100 hover:text-[#1a1a1a] border border-gray-100"
              >
                <X size={18} strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* User Profile Card */}
          <div className="rounded-3xl border border-gray-100 bg-[#fafafa] p-4 mb-6">
            <div className="flex items-center gap-3.5">
              <div className="h-12 w-12 overflow-hidden rounded-full bg-white border border-gray-100 shadow-sm flex-shrink-0">
                <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Account Profile</p>
                <h2 className="text-[15px] font-bold text-[#1a1a1a] leading-tight mb-0.5">{user.name}</h2>
                <p className="text-[12px] font-bold text-emerald-600">{user.role}</p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white border border-gray-100 px-4 py-3 shadow-sm">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Credit score</p>
                <p className="text-xl font-black text-[#1a1a1a]">{user.score}</p>
              </div>
              <div className="rounded-2xl bg-white border border-gray-100 px-4 py-3 shadow-sm">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">KYC status</p>
                <p className="text-xl font-black text-emerald-600">{user.kyc}</p>
              </div>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 space-y-2 overflow-y-auto pr-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <p className="px-2 pb-2 pt-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
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
                  className={`group flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-left transition-all ${
                    active
                      ? 'bg-[#1A453A] text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-100 hover:border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all ${
                        active ? 'bg-white/10 text-white' : 'bg-gray-50 text-gray-500 group-hover:bg-gray-200 group-hover:text-[#1a1a1a]'
                      }`}
                    >
                      <Icon size={18} strokeWidth={active ? 2.5 : 1.5} />
                    </div>
                    <div>
                      <p className={`text-[14px] font-bold leading-tight ${active ? 'text-white' : 'text-[#1a1a1a]'}`}>
                        {item.label}
                      </p>
                      <p className={`text-[12px] font-medium mt-0.5 leading-tight ${active ? 'text-white/70' : 'text-gray-400'}`}>
                        {item.sub}
                      </p>
                    </div>
                  </div>
                  <ChevronRight size={16} className={active ? 'text-white/50' : 'text-gray-300'} />
                </button>
              );
            })}
          </nav>

          {/* Logout Button */}
          <div className="pt-6 pb-2">
            <button
              type="button"
              onClick={handleLogout}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-rose-50 px-4 py-4 text-[13px] font-bold text-rose-600 transition hover:bg-rose-100 border border-rose-100"
            >
              <LogOut size={18} strokeWidth={2.5} />
              SECURE LOGOUT
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
