import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BellRing, Menu, TrendingUp, Search } from 'lucide-react';
import fullLogo from '../../../../assets/logo.png';

const Navbar = ({ onMenuClick }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);

  const user = {
    name: 'Aman Srivastava',
    score: 742,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aman',
  };

  const handleSearchClick = () => {
    setIsSearchOpen(true);
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 100);
  };

  return (
    <header
      className="fixed left-0 top-0 z-[110] h-[72px] w-full border-b border-slate-100 bg-white"
      style={{ boxShadow: '0 1px 18px rgba(11,60,109,0.05)' }}
    >
      <div className="flex h-full items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <Link to="/user/dashboard" className="flex items-center">
            <img
              src={fullLogo}
              alt="Creditu"
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-2 sm:flex">
            <TrendingUp size={16} className="text-emerald-600" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-700">
                Credit score
              </p>
              <p className="text-sm font-black text-emerald-700 leading-none mt-0.5">{user.score}</p>
            </div>
          </div>

          {/* Compact Expandable Search Bar */}
          <div className={`relative flex items-center transition-all duration-300 ease-out ${isSearchOpen ? 'w-[160px] sm:w-[220px]' : 'w-10'}`}>
            <button
              type="button"
              onClick={handleSearchClick}
              className={`absolute left-0 top-0 h-10 w-10 flex items-center justify-center rounded-full z-10 transition-colors ${
                isSearchOpen 
                  ? 'text-[#0B3C6D] pointer-events-none' 
                  : 'text-slate-500 hover:text-[#0B3C6D] border border-slate-200 shadow-[0_1px_6px_rgba(15,23,42,0.08)] bg-white hover:border-slate-300'
              }`}
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              onBlur={(e) => {
                if (!e.target.value) setIsSearchOpen(false);
              }}
              className={`h-10 w-full rounded-full outline-none transition-all duration-300 text-sm ${
                isSearchOpen 
                  ? 'pl-10 pr-4 border border-slate-200 bg-white shadow-[0_1px_6px_rgba(15,23,42,0.08)] focus:border-[#0B3C6D] text-slate-800 placeholder-slate-400 opacity-100' 
                  : 'pl-10 pr-0 border border-transparent bg-transparent cursor-pointer text-transparent placeholder-transparent opacity-0 pointer-events-none'
              }`}
            />
          </div>

          <button
            type="button"
            className="relative inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B3C6D] shadow-[0_1px_6px_rgba(15,23,42,0.08)] transition hover:border-slate-300"
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
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400 mt-0.5">
                Priority account
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onMenuClick}
            className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B3C6D] shadow-[0_1px_6px_rgba(15,23,42,0.08)] transition hover:border-slate-300"
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
