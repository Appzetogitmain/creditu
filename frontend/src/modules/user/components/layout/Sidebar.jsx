import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  FileCheck2,
  BadgeIndianRupee,
  Gift,
  LogOut,
  ChevronRight,
  X,
  Users,
  ShieldCheck,
  TrendingUp,
  Star,
} from 'lucide-react';
import mobileLogo from '../../../../assets/logo-icon-mobile.webp';

const navItems = [
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    sub: 'Account overview',
    path: '/user/dashboard',
    color: '#0B3C6D',
    bg: '#EEF4FB',
  },
  {
    icon: FileCheck2,
    label: 'Eligibility Check',
    sub: 'Borrowing criteria',
    path: '/user/eligibility',
    color: '#7C3AED',
    bg: '#F5F0FF',
  },
  {
    icon: BadgeIndianRupee,
    label: 'Application Status',
    sub: 'Loan journey progress',
    path: '/user/status',
    color: '#0891B2',
    bg: '#ECFEFF',
  },
  {
    icon: Users,
    label: 'Leadership Team',
    sub: 'Meet our leaders',
    path: '/user/leadership',
    color: '#D97706',
    bg: '#FFFBEB',
  },
  {
    icon: Gift,
    label: 'Rewards',
    sub: 'Points and offers',
    path: '/user/rewards',
    color: '#DC2626',
    bg: '#FFF1F2',
  },
];

/* ── Sidebar ─────────────────────────────────────────────────── */
const Sidebar = ({ mobileOpen = false, onClose }) => {
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

  /* Score colour */
  const scoreColor =
    user.score >= 750 ? '#16a34a' : user.score >= 650 ? '#d97706' : '#dc2626';

  return (
    <>
      {/* ── Backdrop ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[120] bg-black/50 backdrop-blur-[2px]"
          />
        )}
      </AnimatePresence>

      {/* ── Panel (slides from right) ── */}
      <motion.aside
        initial={false}
        animate={{ x: mobileOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 320, damping: 32 }}
        className="fixed right-0 top-0 z-[130] h-screen w-[88vw] max-w-[340px] bg-white shadow-2xl flex flex-col font-sans"
        style={{ boxShadow: '-8px 0 40px rgba(0,0,0,0.18)' }}
      >
        {/* ── Gradient Header ── */}
        <div
          className="relative flex items-center justify-between px-5 pt-5 pb-5"
          style={{
            background: 'linear-gradient(135deg, #0B3C6D 0%, #1A5FA8 60%, #0B7A8A 100%)',
          }}
        >
          {/* Decorative circles */}
          <div
            className="pointer-events-none absolute -top-8 -right-8 h-36 w-36 rounded-full opacity-10"
            style={{ background: '#fff' }}
          />
          <div
            className="pointer-events-none absolute bottom-0 left-0 h-20 w-20 rounded-full opacity-5"
            style={{ background: '#fff' }}
          />

          {/* Brand */}
          <div className="relative flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/25">
              <img src={mobileLogo} alt="Creditu" className="h-5 w-5 object-contain" />
            </div>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">
                Creditu
              </p>
              <p className="text-[15px] font-bold text-white leading-tight">Account menu</p>
            </div>
          </div>

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/20 transition hover:bg-white/25"
          >
            <X size={16} strokeWidth={2.5} />
          </button>
        </div>

        {/* ── Profile Card ── */}
        <div className="mx-4 -mt-1 rounded-2xl bg-white shadow-[0_4px_24px_rgba(11,60,109,0.10)] border border-slate-100">
          {/* Avatar + Name */}
          <div className="flex items-center gap-3.5 px-4 pt-4 pb-3">
            <div className="relative flex-shrink-0">
              <div
                className="h-13 w-13 overflow-hidden rounded-full ring-[2.5px] ring-offset-2"
                style={{ ringColor: '#0B3C6D' }}
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-[#0B3C6D]/20 ring-offset-1"
                />
              </div>
              {/* Online dot */}
              <span className="absolute bottom-0.5 right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-400" />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-0.5">
                Account Profile
              </p>
              <h2 className="text-[14px] font-extrabold text-[#0B1F3A] leading-snug truncate">
                {user.name}
              </h2>
              <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 border border-emerald-100">
                <Star size={9} className="text-emerald-500" fill="#10b981" />
                <span className="text-[10px] font-bold text-emerald-600">{user.role}</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mx-4 h-px bg-slate-100" />

          {/* Score + KYC */}
          <div className="grid grid-cols-2 divide-x divide-slate-100 px-1 pb-3 pt-3">
            {/* Credit Score */}
            <div className="flex flex-col items-center gap-0.5 px-4">
              <div className="flex items-center gap-1 mb-0.5">
                <TrendingUp size={11} style={{ color: scoreColor }} />
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  Credit Score
                </p>
              </div>
              <p className="text-[22px] font-black leading-none" style={{ color: scoreColor }}>
                {user.score}
              </p>
              <p className="text-[9px] font-semibold text-slate-400">Excellent</p>
            </div>

            {/* KYC */}
            <div className="flex flex-col items-center gap-0.5 px-4">
              <div className="flex items-center gap-1 mb-0.5">
                <ShieldCheck size={11} className="text-slate-400" />
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  KYC Status
                </p>
              </div>
              <p className="text-[22px] font-black leading-none text-emerald-600">{user.kyc}</p>
              <div className="flex items-center gap-1">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <p className="text-[9px] font-semibold text-emerald-500">Active</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Nav ── */}
        <nav className="flex-1 overflow-y-auto px-4 pt-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <p className="mb-2 px-1 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Quick access
          </p>
          <div className="space-y-1.5">
            {navItems.map((item) => {
              const active = isActive(item.path);
              const Icon = item.icon;

              return (
                <motion.button
                  key={item.path}
                  type="button"
                  onClick={() => handleNavigate(item.path)}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative flex w-full items-center justify-between rounded-2xl px-3.5 py-3 text-left transition-all duration-200 ${
                    active
                      ? 'bg-[#0B3C6D] shadow-[0_4px_16px_rgba(11,60,109,0.28)]'
                      : 'bg-white hover:bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-sm'
                  }`}
                >
                  {/* Left */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl transition-all ${
                        active ? 'bg-white/15' : ''
                      }`}
                      style={
                        active ? {} : { background: item.bg }
                      }
                    >
                      <Icon
                        size={17}
                        strokeWidth={active ? 2.5 : 1.8}
                        color={active ? '#fff' : item.color}
                      />
                    </div>
                    <div>
                      <p
                        className={`text-[13px] font-bold leading-snug ${
                          active ? 'text-white' : 'text-[#0B1F3A]'
                        }`}
                      >
                        {item.label}
                      </p>
                      <p
                        className={`text-[11px] font-medium leading-snug ${
                          active ? 'text-white/60' : 'text-slate-400'
                        }`}
                      >
                        {item.sub}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <ChevronRight
                    size={15}
                    className={`flex-shrink-0 transition-transform group-hover:translate-x-0.5 ${
                      active ? 'text-white/40' : 'text-slate-300'
                    }`}
                  />

                  {/* Active left accent bar */}
                  {active && (
                    <motion.span
                      layoutId="activeBar"
                      className="absolute left-0 top-2.5 bottom-2.5 w-[3px] rounded-full bg-white/60"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </nav>

        {/* ── Logout ── */}
        <div className="px-4 pt-3 pb-6">
          <div className="h-px bg-slate-100 mb-4" />
          <motion.button
            type="button"
            onClick={handleLogout}
            whileTap={{ scale: 0.97 }}
            className="group flex w-full items-center justify-center gap-2.5 rounded-2xl border border-rose-100 bg-rose-50 px-4 py-3.5 text-[13px] font-bold text-rose-600 transition-all hover:bg-rose-100 hover:border-rose-200 hover:shadow-sm"
          >
            <LogOut
              size={16}
              strokeWidth={2.5}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            SECURE LOGOUT
          </motion.button>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
