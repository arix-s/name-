import React from 'react';
import { MUHSIN_RESEARCH_DATA } from '../data/muhsinDetails';
import { ShieldCheck, BookOpen, AlertCircle, Scale, CheckCircle2, Info } from 'lucide-react';

export const MuhsinSection: React.FC = () => {
  const d = MUHSIN_RESEARCH_DATA;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 animate-fadeIn">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>قسم توثيقي مستقل</span>
        </div>
        <h1 className="font-amiri text-4xl sm:text-5xl font-bold text-slate-100 mb-3">
          {d.title}
        </h1>
        <p className="font-cairo text-base text-amber-300/90 font-medium mb-4">
          {d.subtitle}
        </p>
        <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
          {d.intro}
        </p>
      </div>

      {/* Main Dual Perspectives Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        
        {/* Shia Perspective */}
        <div className="glass-card rounded-3xl p-6 border border-emerald-500/30 bg-gradient-to-b from-emerald-950/20 to-slate-900/60 shadow-xl">
          <div className="flex items-center gap-2 pb-4 mb-4 border-b border-emerald-500/20">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
              إمامي
            </div>
            <h2 className="font-amiri text-2xl font-bold text-emerald-300">
              الرؤية الشيعية الإمامية
            </h2>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed mb-6 bg-slate-950/50 p-4 rounded-xl border border-emerald-500/20">
            {d.isBornOrMiscarriage.shiaView}
          </p>

          <h3 className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-3">أبرز المصادر الإمامية الموردة للحادثة:</h3>
          <div className="space-y-3">
            {d.shiaSources.map((s, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1">
                <span className="font-bold text-amber-300">{s.book} — {s.author}</span>
                <p className="text-slate-300 font-amiri text-sm leading-relaxed">"{s.quote}"</p>
                <span className="inline-block px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 text-[10px] font-semibold">
                  {s.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Sunni Perspective */}
        <div className="glass-card rounded-3xl p-6 border border-amber-500/30 bg-gradient-to-b from-amber-950/20 to-slate-900/60 shadow-xl">
          <div className="flex items-center gap-2 pb-4 mb-4 border-b border-amber-500/20">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
              سني
            </div>
            <h2 className="font-amiri text-2xl font-bold text-amber-300">
              الرؤية والجمع السني
            </h2>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed mb-6 bg-slate-950/50 p-4 rounded-xl border border-amber-500/20">
            {d.isBornOrMiscarriage.sunniView}
          </p>

          <h3 className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-3">أبرز المصادر والكتب الحديثية السنية:</h3>
          <div className="space-y-3">
            {d.sunniSources.map((s, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1">
                <span className="font-bold text-amber-300">{s.book} — {s.author}</span>
                <p className="text-slate-300 font-amiri text-sm leading-relaxed">"{s.quote}"</p>
                <span className="inline-block px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 text-[10px] font-semibold">
                  {s.status}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Isnad Evaluation */}
      <div className="glass-panel rounded-3xl p-6 border border-amber-500/30 shadow-2xl mb-8">
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-amber-500/20">
          <Scale className="w-6 h-6 text-amber-400" />
          <h2 className="font-amiri text-2xl font-bold text-slate-100">
            تقييم الأسانيد وأقوال أئمة الحديث والمحققين
          </h2>
        </div>
        <p className="text-sm text-slate-200 leading-relaxed mb-6 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
          {d.isnadEvaluation}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          {d.scholarsOpinions.map((o, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="font-bold text-amber-300 block text-sm mb-1">{o.scholar}</span>
              <span className="text-[10px] text-slate-400 block mb-2">{o.school}</span>
              <p className="text-slate-300 leading-relaxed">{o.opinion}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Neutral Research Summary Banner */}
      <div className="glass-panel p-6 rounded-3xl border border-amber-500/40 bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 text-center">
        <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">خلاصة الباحث والمنهج العلمي</span>
        <p className="font-amiri text-xl text-amber-200 leading-relaxed">
          "{d.neutralSummary}"
        </p>
      </div>

    </div>
  );
};
