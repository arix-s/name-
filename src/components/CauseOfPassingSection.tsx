import React from 'react';
import { CAUSE_OF_PASSING_DATA } from '../data/causeOfPassing';
import { TOMB_LOCATION_DATA } from '../data/tombLocation';
import { HeartHandshake, MapPin, Scale, BookOpen, AlertCircle, HelpCircle } from 'lucide-react';

export const CauseOfPassingSection: React.FC = () => {
  const c = CAUSE_OF_PASSING_DATA;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 animate-fadeIn">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
          <HeartHandshake className="w-4 h-4 text-amber-400" />
          <span>منظور الروايات التاريخية</span>
        </div>
        <h1 className="font-amiri text-4xl sm:text-5xl font-bold text-slate-100 mb-3">
          {c.title}
        </h1>
        <p className="font-cairo text-base text-slate-300 leading-relaxed">
          عرض علمي دقيق لتفسير وسبب وفاة السيدة فاطمة الزهراء عليها السلام في الروايات والكتب الإسلامية.
        </p>
      </div>

      {/* Side-by-side Dual Perspectives */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        
        {/* Imami */}
        <div className="glass-card rounded-3xl p-6 border border-emerald-500/30 bg-gradient-to-b from-emerald-950/20 to-slate-900/60 shadow-xl space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-emerald-500/20">
            <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">إمامي</span>
            <h2 className="font-amiri text-2xl font-bold text-emerald-300">
              القول الشيعي: الشهادة بالأذى
            </h2>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-emerald-500/20">
            {c.imamiPerspective.summary}
          </p>
          <ul className="space-y-2 text-xs text-slate-200">
            {c.imamiPerspective.keyPoints.map((pt, i) => (
              <li key={i} className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <span className="text-emerald-400 font-bold">•</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
          <div className="text-xs text-emerald-400 font-mono pt-2">
            <span className="text-slate-400 block font-sans text-[10px]">من كبار علماء الإمامية:</span>
            {c.imamiPerspective.scholars}
          </div>
        </div>

        {/* Sunni */}
        <div className="glass-card rounded-3xl p-6 border border-amber-500/30 bg-gradient-to-b from-amber-950/20 to-slate-900/60 shadow-xl space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-amber-500/20">
            <span className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-bold">سني</span>
            <h2 className="font-amiri text-2xl font-bold text-amber-300">
              القول السني: الوفاة بالكمد والمرض
            </h2>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-amber-500/20">
            {c.sunniPerspective.summary}
          </p>
          <ul className="space-y-2 text-xs text-slate-200">
            {c.sunniPerspective.keyPoints.map((pt, i) => (
              <li key={i} className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <span className="text-amber-400 font-bold">•</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
          <div className="text-xs text-amber-400 font-mono pt-2">
            <span className="text-slate-400 block font-sans text-[10px]">من أعلام المحدثين والمؤرخين:</span>
            {c.sunniPerspective.scholars}
          </div>
        </div>

      </div>

      {/* Historical Analysis */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/40 bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 text-center shadow-2xl">
        <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">التحليل التوثيقي الختامي</span>
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
          <span>الاستقصاء التاريخي الميداني</span>
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
