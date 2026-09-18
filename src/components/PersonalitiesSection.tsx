import React from 'react';
import { useApp } from '../context/AppContext';
import { Personality } from '../types';
import { Users, BookOpen, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';

export const PersonalitiesSection: React.FC = () => {
  const { personalities, navigateToFigure } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
          <Users className="w-4 h-4 text-amber-400" />
          <span>موسوعة الشخصيات والمذكورين في السيرة</span>
        </div>
        <h1 className="font-amiri text-4xl sm:text-5xl font-bold text-slate-100 mb-4">
          الشخصيات المحورية والأعلام
        </h1>
        <p className="font-cairo text-base text-slate-300 leading-relaxed">
          تراجم توثيقية محايدة للشخصيات التاريخية والحديثية المذكورة في سيرة السيدة فاطمة الزهراء عليها السلام مع بيان مكانتها ونسبها في الكتب.
        </p>
      </div>

      {/* Grid of Personalities */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {personalities.map((p) => (
          <div
            key={p.id}
            onClick={() => navigateToFigure(p.id)}
            className="glass-card rounded-3xl p-6 border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 shadow-xl cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-300 text-xs font-bold border border-amber-500/20">
                  {p.mentionedInNarrationsCount} رواية توثيقية
                </span>
                <Users className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors" />
              </div>

              <h2 className="font-amiri text-2xl font-bold text-slate-100 group-hover:text-amber-300 transition-colors mb-2">
                {p.name}
              </h2>

              <p className="text-xs font-medium text-amber-400/90 mb-3">
                {p.title}
              </p>

              <p className="text-slate-300 text-xs leading-relaxed line-clamp-3 mb-4">
                {p.bio}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-amber-400">
              <span>عرض الترجمة والمصادر</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export const PersonalityDetailPage: React.FC = () => {
  const { personalities, selectedFigureId, setActiveTab } = useApp();

  const p = personalities.find(item => item.id === selectedFigureId) || personalities[0];

  if (!p) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-slate-300">لم يتم العثور على الشخصية.</p>
        <button onClick={() => setActiveTab('figures')} className="mt-4 px-4 py-2 bg-amber-500 text-slate-950 rounded-xl font-bold">
          العودة للشخصيات
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 animate-fadeIn">
      
      {/* Back Button */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => setActiveTab('figures')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel text-slate-300 hover:text-amber-300 border border-slate-700 text-sm"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة لقائمة الشخصيات</span>
        </button>
      </div>

      {/* Profile Header */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/30 mb-8 shadow-2xl">
        <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 text-xs font-bold inline-block mb-3">
          بطاقة ترجمة موثقة
        </span>

        <h1 className="font-amiri text-4xl sm:text-5xl font-bold text-slate-100 mb-2">
          {p.name}
        </h1>

        <p className="font-kufi text-lg text-amber-300 mb-6">
          {p.title}
        </p>

        <div className="space-y-4 text-sm text-slate-200">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <strong className="text-amber-400 block mb-1">النسب والوالدان:</strong>
            {p.lineage}
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <strong className="text-amber-400 block mb-1">الدور التاريخي في السيرة الزهراوية:</strong>
            {p.role}
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <strong className="text-amber-400 block mb-1">السيرة الموجزة:</strong>
            <p className="leading-relaxed">{p.bio}</p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
            <strong className="text-amber-300 block mb-1">مكانة الشخصية والجمع بين المذاهب:</strong>
            <p className="leading-relaxed">{p.schoolMention}</p>
          </div>
        </div>

        {/* Sources list */}
        <div className="mt-6 pt-6 border-t border-slate-800">
          <strong className="text-xs text-slate-400 block mb-2">المصادر المعتمدة المترجمة للشخصية:</strong>
          <div className="flex flex-wrap gap-2">
            {p.sources.map((s, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg bg-slate-800 text-amber-300 border border-slate-700 text-xs font-mono">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};
