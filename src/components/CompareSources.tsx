import React, { useState } from 'react';
import { COMPARE_MATRIX_DATA } from '../data/compareMatrix';
import { Scale, CheckCircle2, AlertCircle, BookOpen, Layers, ShieldCheck } from 'lucide-react';

export const CompareSources: React.FC = () => {
  const [selectedTopicSlug, setSelectedTopicSlug] = useState<string>('fadak');
  const [schoolFilter, setSchoolFilter] = useState<'both' | 'shia' | 'sunni'>('both');

  const selectedItem = COMPARE_MATRIX_DATA.find(i => i.topicSlug === selectedTopicSlug) || COMPARE_MATRIX_DATA[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
          <Scale className="w-4 h-4 text-amber-400" />
          <span>نظام المقارنة العلمي المحايد</span>
        </div>
        <h1 className="font-amiri text-4xl sm:text-5xl font-bold text-slate-100 mb-4">
          مقارنة الروايات بين المدرستين الشيعية والسنية
        </h1>
        <p className="font-cairo text-base text-slate-300 leading-relaxed">
          جدول تفاعلي معتمد على أمهات كتب الحديث والتاريخ لبيان مواطن الاتفاق ومواقع الاختلاف العلمي دون إجبار الروايات على التوافق القسري.
        </p>
      </div>

      {/* Quote Banner */}
      <div className="glass-panel p-5 rounded-2xl border border-amber-500/30 max-w-4xl mx-auto mb-10 text-center bg-slate-900/60 shadow-xl">
        <blockquote className="font-amiri text-lg text-amber-200/90 leading-relaxed italic">
          "تتفق مصادر من المدرستين على مكانة فاطمة عند رسول الله ﷺ، وعلى زواجها من علي بن أبي طالب، وعلى وفاتها بعد النبي ﷺ بفترة قصيرة، بينما تختلف الروايات في تفاصيل بعض الأحداث التي وقعت بعد وفاة النبي ﷺ."
        </blockquote>
      </div>

      {/* Topic Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {COMPARE_MATRIX_DATA.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedTopicSlug(item.topicSlug)}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 ${
              selectedTopicSlug === item.topicSlug
                ? 'bg-amber-500 text-slate-950 shadow-xl shadow-amber-500/20 font-bold scale-105'
                : 'glass-panel text-slate-300 hover:text-amber-300 border border-slate-800'
            }`}
          >
            {item.topicTitle}
          </button>
        ))}
      </div>

      {/* Side-by-side Matrix Comparison Card */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl mb-10">
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-amber-500/20">
          <h2 className="font-amiri text-3xl font-bold text-slate-100">
            جدول المقارنة التفصيلي: {selectedItem.topicTitle}
          </h2>
          <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-semibold">
            توثيق محايد
          </span>
        </div>

        {/* Matrix Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-right text-sm border-collapse">
            <thead>
              <tr className="bg-slate-900/80 border-b border-amber-500/30 text-amber-300 font-bold text-sm">
                <th className="p-4 rounded-rt-xl">الموضوع</th>
                <th className="p-4 border-r border-slate-800 text-emerald-300">المصدر الشيعي (الإمامي)</th>
                <th className="p-4 border-r border-slate-800 text-amber-300">المصدر السني (أهل السنة)</th>
                <th className="p-4 border-r border-slate-800">درجة التوثيق</th>
                <th className="p-4 rounded-lt-xl border-r border-slate-800">ملاحظات الباحث</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              <tr className="hover:bg-slate-800/40 transition-colors">
                <td className="p-4 font-bold text-slate-100 min-w-[140px] align-top">
                  {selectedItem.topicTitle}
                </td>
                
                <td className="p-4 border-r border-slate-800/80 min-w-[240px] align-top bg-emerald-950/10">
                  <p className="mb-3 text-slate-200 leading-relaxed font-amiri text-base">
                    {selectedItem.shiaView.summary}
                  </p>
                  <div className="text-xs text-emerald-400 font-mono">
                    <span className="font-bold block text-[10px] text-slate-400 mb-1">المصادر الأساسية:</span>
                    {selectedItem.shiaView.mainSources.join('، ')}
                  </div>
                </td>

                <td className="p-4 border-r border-slate-800/80 min-w-[240px] align-top bg-amber-950/10">
                  <p className="mb-3 text-slate-200 leading-relaxed font-amiri text-base">
                    {selectedItem.sunniView.summary}
                  </p>
                  <div className="text-xs text-amber-400 font-mono">
                    <span className="font-bold block text-[10px] text-slate-400 mb-1">المصادر الأساسية:</span>
                    {selectedItem.sunniView.mainSources.join('، ')}
                  </div>
                </td>

                <td className="p-4 border-r border-slate-800/80 min-w-[160px] align-top">
                  <div className="space-y-2 text-xs">
                    <span className="block p-2 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-semibold">
                      شيعي: {selectedItem.shiaView.hadithStatus}
                    </span>
                    <span className="block p-2 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-semibold">
                      سني: {selectedItem.sunniView.hadithStatus}
                    </span>
                  </div>
                </td>

                <td className="p-4 border-r border-slate-800/80 min-w-[200px] text-xs text-slate-300 align-top leading-relaxed">
                  {selectedItem.overallEvaluation}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Points of Agreement vs Difference Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Agreement Card */}
        <div className="glass-card rounded-3xl p-6 border border-emerald-500/30 bg-gradient-to-b from-emerald-950/20 to-slate-900/60 shadow-xl">
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-emerald-500/20">
            <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            <h3 className="font-amiri text-2xl font-bold text-emerald-300">
              ماذا اتفقت عليه المصادر؟
            </h3>
          </div>
          <ul className="space-y-3 text-sm text-slate-200">
            {selectedItem.pointsOfAgreement.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Dispute Card */}
        <div className="glass-card rounded-3xl p-6 border border-amber-500/30 bg-gradient-to-b from-amber-950/20 to-slate-900/60 shadow-xl">
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-amber-500/20">
            <AlertCircle className="w-6 h-6 text-amber-400" />
            <h3 className="font-amiri text-2xl font-bold text-amber-300">
              أين وقع الاختلاف؟
            </h3>
          </div>
          <ul className="space-y-3 text-sm text-slate-200">
            {selectedItem.pointsOfDifference.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  );
};
