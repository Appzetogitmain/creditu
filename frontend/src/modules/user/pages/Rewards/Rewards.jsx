import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Gift, BadgePercent, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import MainLayout from '../../layouts/MainLayout.jsx';

const rewards = [
  {
    icon: Gift,
    title: 'Welcome Bonus',
    desc: 'Earn points when you complete your profile and keep your account active.',
    value: '250 pts',
  },
  {
    icon: BadgePercent,
    title: 'Rate Benefits',
    desc: 'Unlock better loan offers and reduced processing fees with regular usage.',
    value: 'Up to 0.5%',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Rewards',
    desc: 'All reward activity is tracked inside your account for complete transparency.',
    value: 'Verified',
  },
];

const Rewards = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-10">
        <div className="mb-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Rewards</p>
          <h1 className="mt-2 text-3xl font-black text-[#0B3C6D] tracking-tight">Your reward center</h1>
          <p className="mt-2 max-w-2xl text-sm md:text-base text-slate-500">
            Simple reward benefits that grow with your account activity, verification progress, and borrowing history.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {rewards.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -3 }}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-[#0B3C6D]">
                  <Icon size={20} />
                </div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-base font-bold text-[#0B3C6D]">{item.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{item.desc}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                    {item.value}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-6 rounded-[28px] border border-slate-200 bg-white p-5 md:p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                <Sparkles size={14} />
                Reward progress
              </div>
              <h3 className="mt-3 text-xl font-bold text-[#0B3C6D]">Keep using Creditu to unlock more benefits</h3>
              <p className="mt-2 max-w-2xl text-sm text-slate-500">
                Complete KYC, maintain a healthy profile, and check new offers to grow your reward eligibility.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => navigate('/user/dashboard')}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-[#0B3C6D] transition hover:bg-slate-50"
              >
                Back to dashboard
              </button>
              <button
                type="button"
                onClick={() => navigate('/user/eligibility')}
                className="inline-flex items-center gap-2 rounded-2xl bg-[#0B3C6D] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(11,60,109,0.16)]"
              >
                View eligibility
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Rewards;
