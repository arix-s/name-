import React from 'react';
import { CAUSE_OF_PASSING_DATA } from '../data/causeOfPassing';
import { TOMB_LOCATION_DATA } from '../data/tombLocation';
import { HeartHandshake, MapPin, BookOpen, ShieldCheck, ScrollText } from 'lucide-react';

export const CauseOfPassingSection: React.FC = () => {
  const c = CAUSE_OF_PASSING_DATA;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 animate-fadeIn space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
          <HeartHandshake className="w-4 h-4 text-amber-400" />
          <span>الأسانيد والتاريخية</span>
        </div>
        <h1 className="font-amiri text-4xl sm:text-5xl font-bold text-slate-100 mb-3">
          {c.title}
        </h1>
        <p className="font-cairo text-base text-slate-300 leading-relaxed">
          توثيق علمي شامل لأسانيد استشهاد السيدة فاطمة الزهراء عليها السلام ودلائل مظلوميتها من أمهات كتب الحديث والتاريخ.
        </p>
      </div>

      {/* Main Shia Proofs & Hadiths Section */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-emerald-500/40 bg-gradient-to-b from-emerald-950/30 via-slate-900 to-slate-900 shadow-2xl space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-emerald-500/30">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-bold">الأسانيد والروايات الشيعية</span>
            <h2 className="font-amiri text-2xl sm:text-3xl font-bold text-emerald-300">
              أدلة استشهاد السيدة فاطمة الزهراء عليها السلام
            </h2>
          </div>
        </div>

        <p className="text-sm sm:text-base text-slate-200 leading-relaxed bg-slate-950/70 p-5 rounded-2xl border border-emerald-500/20">
          {c.imamiPerspective.summary}
        </p>

        {/* Key Points */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">محطات وقائع الاستشهاد:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {c.imamiPerspective.keyPoints.map((pt, i) => (
              <div key={i} className="flex items-start gap-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-xs text-slate-200">
                <span className="text-emerald-400 font-bold">•</span>
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Proofs and Hadiths List */}
        <div className="space-y-4 pt-4">
          <h3 className="font-amiri text-2xl font-bold text-amber-300 flex items-center gap-2">
            <ScrollText className="w-5 h-5 text-amber-400" />
            <span>نصوص الأحاديث والأسانيد المعتمدة:</span>
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {c.imamiPerspective.proofsAndHadiths.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-950/80 border border-emerald-500/30 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-500/20 pb-2">
                  <span className="font-bold text-amber-300 text-sm sm:text-base">{item.source}</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-medium">
                    {item.grading}
                  </span>
                </div>
                <blockquote className="font-amiri text-lg text-slate-100 leading-relaxed pr-3 border-r-2 border-amber-400">
                  {item.text}
                </blockquote>
                <p className="text-xs text-slate-400 font-mono">
                  المؤلف: {item.author}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scholars Consensus */}
        <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-xs sm:text-sm text-emerald-200 leading-relaxed">
          <span className="font-bold text-amber-300 block mb-1">إجماع علماء الشيعة الإمامية:</span>
          {c.imamiPerspective.scholarsConsensus}
        </div>
      </div>

      {/* Historical Evidence from Sunni Classical Sources */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-amber-500/40 bg-gradient-to-b from-amber-950/30 via-slate-900 to-slate-900 shadow-2xl space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-amber-500/30">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <span className="px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-xs font-bold">التوثيق التاريخي</span>
            <h2 className="font-amiri text-2xl sm:text-3xl font-bold text-amber-300">
              الشواهد والتراجم المتقدمة في كتب التاريخ والحديث
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {c.historicalEvidenceFromSunniSources.map((src, i) => (
            <div key={i} className="p-5 rounded-2xl bg-slate-950/80 border border-amber-500/30 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-500/20 pb-2">
                <span className="font-bold text-amber-300 text-sm sm:text-base">{src.source}</span>
                <span className="text-xs text-slate-400 font-mono">{src.author}</span>
              </div>
              <blockquote className="font-amiri text-base text-slate-100 leading-relaxed">
                {src.text}
              </blockquote>
              <p className="text-xs text-emerald-400 bg-emerald-950/30 p-2.5 rounded-xl border border-emerald-500/20">
                <span className="font-bold">الدلالة والتأكيد:</span> {src.significance}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Historical Analysis Statement */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/40 bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 text-center shadow-2xl">
        <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">الخلاصة والتوثيق</span>
        <blockquote className="font-amiri text-xl text-amber-100 leading-relaxed">
          "{c.finalResearchStatement}"
        </blockquote>
      </div>

    </div>
  );
};

export const TombLocationSection: React.FC = () => {
  const t = TOMB_LOCATION_DATA;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 animate-fadeIn">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
          <MapPin className="w-4 h-4 text-amber-400" />
          <span>الاستقصاء التاريخي لمكان القبر</span>
        </div>
        <h1 className="font-amiri text-4xl sm:text-5xl font-bold text-slate-100 mb-3">
          {t.title}
        </h1>
        <p className="font-cairo text-base text-amber-300/90 font-medium mb-4">
          {t.subtitle}
        </p>
        <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
          {t.reasonsForSecrecy}
        </p>
      </div>

      {/* Hypotheses Cards */}
      <div className="space-y-6 mb-10">
        {t.hypotheses.map((h) => (
          <div key={h.id} className="glass-panel rounded-3xl p-6 border border-amber-500/30 shadow-xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-amber-500/20">
              <h2 className="font-amiri text-2xl font-bold text-amber-300">
                {h.locationName}
              </h2>
              <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 text-xs font-bold border border-amber-500/30">
                {h.authenticityDegree}
              </span>
            </div>

            <p className="text-sm text-slate-200 leading-relaxed mb-4">
              {h.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-1">
                <span className="font-bold text-emerald-300 block">أدلة ومرويات الشيعة:</span>
                <p className="text-slate-300 leading-relaxed">{h.shiaArguments}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/20 space-y-1">
                <span className="font-bold text-amber-300 block">ترجيح وأدلة أهل السنة:</span>
                <p className="text-slate-300 leading-relaxed">{h.sunniArguments}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Conclusion */}
      <div className="glass-panel p-6 rounded-3xl border border-amber-500/40 bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 text-center">
        <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">خلاصة المحققين</span>
        <p className="font-amiri text-xl text-amber-100 leading-relaxed">
          "{t.conclusion}"
        </p>
      </div>

    </div>
  );
};
