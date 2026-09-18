import React from 'react';
import { MUHSIN_RESEARCH_DATA } from '../data/muhsinDetails';
import { ShieldCheck, BookOpen, ScrollText } from 'lucide-react';

export const MuhsinSection: React.FC = () => {
  const d = MUHSIN_RESEARCH_DATA;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 animate-fadeIn space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Shia Perspective */}
        <div className="glass-card rounded-3xl p-6 border border-emerald-500/30 bg-gradient-to-b from-emerald-950/20 to-slate-900/60 shadow-xl space-y-4">
          <div className="flex items-center gap-2 pb-4 border-b border-emerald-500/20">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
              إمامي
            </div>
            <h2 className="font-amiri text-2xl font-bold text-emerald-300">
              الرؤية الشيعية الإمامية والدلائل
            </h2>
          </div>
          
          <p className="text-sm text-slate-200 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-emerald-500/20">
            {d.imamiPerspective.summary}
          </p>

          <h3 className="font-bold text-xs text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
            <ScrollText className="w-4 h-4 text-amber-400" />
            <span>نصوص الأدلة والأحاديث:</span>
          </h3>

          <div className="space-y-3">
            {d.imamiPerspective.proofs.map((s, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-1.5">
                <span className="font-bold text-amber-300 block">{s.book}</span>
                <span className="text-[10px] text-slate-400 block font-mono">{s.author}</span>
                <blockquote className="text-slate-200 font-amiri text-sm leading-relaxed border-r-2 border-amber-400 pr-2">
                  {s.text}
                </blockquote>
                {s.status && (
                  <span className="inline-block px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 text-[10px] font-semibold">
                    {s.status}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-300 font-medium">
            ملاحظة: {d.imamiPerspective.status}
          </div>
        </div>

        {/* Sunni Historical Sources */}
        <div className="glass-card rounded-3xl p-6 border border-amber-500/30 bg-gradient-to-b from-amber-950/20 to-slate-900/60 shadow-xl space-y-4">
          <div className="flex items-center gap-2 pb-4 border-b border-amber-500/20">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
              تاريخي
            </div>
            <h2 className="font-amiri text-2xl font-bold text-amber-300">
              الشواهد المتقدمة في التراجم والتاريخ
            </h2>
          </div>

          <h3 className="font-bold text-xs text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>المصادر التاريخية:</span>
          </h3>

          <div className="space-y-3">
            {d.sunniHistoricalSources.map((s, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-1.5">
                <span className="font-bold text-amber-300 block">{s.book}</span>
                <span className="text-[10px] text-slate-400 block font-mono">{s.author}</span>
                <blockquote className="text-slate-200 font-amiri text-sm leading-relaxed border-r-2 border-amber-400 pr-2">
                  {s.text}
                </blockquote>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Research Conclusion Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/40 bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 text-center shadow-2xl">
        <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">خلاصة البحث التوثيقي</span>
        <p className="font-amiri text-xl text-amber-100 leading-relaxed">
          "{d.conclusion}"
        </p>
      </div>

    </div>
  );
};
