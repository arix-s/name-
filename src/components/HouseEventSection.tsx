import React from 'react';
import { HOUSE_EVENTS_RESEARCH_DATA } from '../data/houseEventsDetails';
import { ShieldCheck, Scale, CheckCircle2, ScrollText, BookOpen } from 'lucide-react';

export const HouseEventSection: React.FC = () => {
  const d = HOUSE_EVENTS_RESEARCH_DATA;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 animate-fadeIn space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>الأسانيد والتاريخ</span>
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

      {/* Narrative Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Imami Narrative */}
        <div className="glass-card rounded-3xl p-6 border border-emerald-500/30 bg-gradient-to-b from-emerald-950/20 to-slate-900/60 shadow-xl space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-emerald-500/20">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
              إمامي
            </div>
            <h2 className="font-amiri text-2xl font-bold text-emerald-300">
              الرواية الإمامية والدلائل الحديثية
            </h2>
          </div>

          <p className="text-sm text-slate-200 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-emerald-500/20">
            {d.imamiNarrative.summary}
          </p>

          <h3 className="font-bold text-xs text-slate-400 uppercase">عناصر الرواية الشيعية:</h3>
          <ul className="space-y-2 text-xs text-slate-200">
            {d.imamiNarrative.details.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <span className="text-emerald-400 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Proofs */}
          <div className="pt-3 space-y-3">
            <h4 className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
              <ScrollText className="w-4 h-4 text-amber-400" />
              <span>أهم المصادر والأسانيد الشيعية:</span>
            </h4>
            <div className="space-y-2">
              {d.imamiNarrative.proofsAndHadiths.map((p, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-950/80 border border-emerald-500/20 text-xs space-y-1">
                  <div className="flex items-center justify-between font-bold text-amber-300">
                    <span>{p.book}</span>
                    <span className="text-[10px] text-emerald-400 font-mono">{p.grading}</span>
                  </div>
                  <blockquote className="font-amiri text-slate-200 text-sm leading-relaxed border-r-2 border-amber-400 pr-2">
                    {p.text}
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sunni Narrative */}
        <div className="glass-card rounded-3xl p-6 border border-amber-500/30 bg-gradient-to-b from-amber-950/20 to-slate-900/60 shadow-xl space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-amber-500/20">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
              سني
            </div>
            <h2 className="font-amiri text-2xl font-bold text-amber-300">
              التوثيق التاريخي في كتب المتقدمين
            </h2>
          </div>

          <p className="text-sm text-slate-200 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-amber-500/20">
            {d.sunniNarrative.summary}
          </p>

          <h3 className="font-bold text-xs text-emerald-400 uppercase">ما هو ثابت ومستفيض سندياً:</h3>
          <ul className="space-y-1.5 text-xs text-slate-200">
            {d.sunniNarrative.authenticElements.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-emerald-500/20">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="font-bold text-xs text-amber-400 uppercase pt-2">شواهد تاريخية أخرى:</h3>
          <ul className="space-y-1.5 text-xs text-slate-200">
            {d.sunniNarrative.historicalQuotes.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-amber-500/20">
                <BookOpen className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Researcher Conclusion */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/40 bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 text-center shadow-2xl">
        <div className="flex items-center justify-center gap-2 text-amber-400 font-bold text-sm mb-3">
          <Scale className="w-5 h-5" />
          <span>خلاصة البحث التوثيقي</span>
        </div>
        <blockquote className="font-amiri text-xl sm:text-2xl font-bold text-amber-200 leading-relaxed">
          "{d.researcherConclusion}"
        </blockquote>
      </div>

    </div>
  );
};
