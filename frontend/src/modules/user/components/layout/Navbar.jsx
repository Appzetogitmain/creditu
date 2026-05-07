import React from 'react';
import { Link } from 'react-router-dom';
import { BellRing, Menu, TrendingUp } from 'lucide-react';
import mobileLogo from '../../../../assets/logo-icon-mobile.png';

const Navbar = ({ onMenuClick }) => {
  const user = {
    name: 'Aman Srivastava',
    score: 742,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aman',
  };

  return (
    <header
      className="fixed left-0 top-0 z-[110] h-[72px] w-full border-b border-[rgba(11,60,109,0.08)] bg-white/90 backdrop-blur-xl md:left-[290px] md:w-[calc(100%-290px)]"
      style={{ boxShadow: '0 1px 18px rgba(11,60,109,0.05)' }}
    >
      <div className="flex h-full items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <Link to="/user/dashboard" className="flex items-center gap-2">
            <span className="md:hidden inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white">
              <img
                src={mobileLogo}
                alt="Creditu"
                className="h-8 w-8 object-contain"
              />
            </span>
            <div className="hidden sm:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Personal finance
              </p>
              <p className="text-sm font-black text-[#0B3C6D]">Account dashboard</p>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-2 sm:flex">
            <TrendingUp size={16} className="text-emerald-600" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-700">
                Credit score
              </p>
              <p className="text-sm font-black text-emerald-700 leading-none">{user.score}</p>
            </div>
          </div>

          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B3C6D] shadow-[0_1px_6px_rgba(15,23,42,0.08)] transition hover:border-slate-300"
            aria-label="Notifications"
          >
            <BellRing size={19} />
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-white bg-rose-400" />
          </button>

          <div className="hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm md:flex">
            <div className="h-9 w-9 overflow-hidden rounded-xl bg-slate-100">
              <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
            </div>
            <div className="leading-tight">
              <p className="text-xs font-black text-[#0B3C6D]">{user.name}</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                Priority account
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onMenuClick}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B3C6D] shadow-[0_1px_6px_rgba(15,23,42,0.08)] transition hover:border-slate-300 md:hidden"
            aria-label="Open sidebar"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
