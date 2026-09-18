import React, { useState } from 'react';
import { FADAK_SERMON_PARAGRAPHS } from '../data/fadakSermon';
import { ScrollText, BookOpen, Users, HelpCircle, Layers, CheckCircle2 } from 'lucide-react';

export const FadakSermonReader: React.FC = () => {
  const [activeParagraphIndex, setActiveParagraphIndex] = useState<number>(0);

  const activeParagraph = FADAK_SERMON_PARAGRAPHS[activeParagraphIndex] || FADAK_SERMON_PARAGRAPHS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
          <ScrollText className="w-4 h-4 text-amber-400" />
          <span>القارئ التفاعلي الموثق</span>
        </div>
        <h1 className="font-amiri text-4xl sm:text-5xl font-bold text-slate-100 mb-4">
          قارئ خطبة فدك الشريفة
        </h1>
        <p className="font-cairo text-base text-slate-300 leading-relaxed">
          دراسة نصية وفقرة بفقرة للخطبة الفدكية التاريخية، مع استعراض المصادر الشيعية والسنية والرواة واختلاف الألفاظ وملاحظات التحقيق.
        </p>
      </div>

      {/* Main Reader Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Paragraphs Index / Sidebar (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <h2 className="font-bold text-slate-200 text-sm mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-amber-400" />
            فهرس فقرات الخطبة ({FADAK_SERMON_PARAGRAPHS.length}):
          </h2>

          {FADAK_SERMON_PARAGRAPHS.map((p, idx) => {
            const isSelected = activeParagraphIndex === idx;
            return (
              <button
                key={p.id}
                onClick={() => setActiveParagraphIndex(idx)}
                className={`w-full text-right p-4 rounded-2xl transition-all duration-200 border ${
                  isSelected
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-lg shadow-amber-500/10 font-bold scale-[1.02]'
                    : 'glass-panel text-slate-300 hover:text-amber-200 border-slate-800 hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-bold text-amber-400">الفقرة {p.paragraphNumber}</span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {p.shiaSources.length + (p.sunniSources?.length || 0)} مصادر
                  </span>
                </div>
                <h3 className="font-amiri text-base font-semibold truncate">
                  {p.paragraphTitle}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Selected Paragraph Content Viewer (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Main Text Display */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-amber-500/20">
              <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 text-xs font-bold">
                الفقرة الرقمية: {activeParagraph.paragraphNumber}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {activeParagraph.paragraphTitle}
              </span>
            </div>

            <blockquote className="font-amiri text-2xl sm:text-3xl font-bold text-amber-100 leading-loose sm:leading-loose text-center bg-slate-950/70 p-6 sm:p-8 rounded-2xl border border-amber-500/20 shadow-inner mb-6">
              "{activeParagraph.text}"
            </blockquote>

            {/* Documentation Badges Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              
              {/* Shia Sources */}
              <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30">
                <span className="font-bold text-emerald-300 block mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  المصادر الشيعية الإمامية:
                </span>
                <ul className="space-y-1 text-slate-200">
                  {activeParagraph.shiaSources.map((s, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sunni Sources */}
              <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30">
                <span className="font-bold text-amber-300 block mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  المصادر السنية (إن وجدت):
                </span>
                {activeParagraph.sunniSources && activeParagraph.sunniSources.length > 0 ? (
                  <ul className="space-y-1 text-slate-200">
                    {activeParagraph.sunniSources.map((s, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-400 italic">مروية في المراجع الإمامية وكتب الأدب والتاريخ التاريخية.</p>
                )}
              </div>

            </div>
          </div>

          {/* Narrators & Variants Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Narrators */}
            <div className="glass-card rounded-2xl p-5 border border-slate-800">
              <span className="font-bold text-slate-200 text-sm block mb-2 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-amber-400" />
                الرواة ورجال السند المذكورون:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeParagraph.narrators.map((n, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 text-xs">
                    {n}
                  </span>
                ))}
              </div>
            </div>

            {/* Variant Words */}
            <div className="glass-card rounded-2xl p-5 border border-slate-800">
              <span className="font-bold text-slate-200 text-sm block mb-2 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-amber-400" />
                اختلاف ألفاظ الروايات:
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeParagraph.variantWords || 'لا توجد فروق لفظية ذات بال بين النسخ المعتمدة.'}
              </p>
            </div>

          </div>

          {/* Investigation Notes */}
          <div className="glass-card rounded-2xl p-5 border border-amber-500/20 bg-amber-500/5">
            <span className="font-bold text-amber-300 text-sm block mb-1">
              ملاحظات التحقيق العلمي والتاريخي:
            </span>
            <p className="text-xs text-slate-200 leading-relaxed">
              {activeParagraph.investigationNotes}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
