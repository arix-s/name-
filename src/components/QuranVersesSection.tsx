import React, { useState } from 'react';
import { QURAN_VERSES } from '../data/quranVerses';
import { VIRTUES_HADITHS } from '../data/virtues';
import { BookOpen, Sparkles, Award, Scale, CheckCircle2 } from 'lucide-react';

export const QuranVersesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'quran' | 'virtues'>('quran');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>المقام العلي والتنزيل القرآني والحديثي</span>
        </div>
        <h1 className="font-amiri text-4xl sm:text-5xl font-bold text-slate-100 mb-4">
          فاطمة الزهراء في القرآن والسنة النبوية
        </h1>
        <p className="font-cairo text-base text-slate-300 leading-relaxed">
          الآيات القرآنية والأحاديث الشريفة الواردة في فضل السيدة فاطمة الزهراء عليها السلام، مع عرض التفاسير والتخريجات من المذاهب الإسلامية.
        </p>
      </div>

      {/* Sub Tab Switcher */}
      <div className="flex justify-center gap-3 mb-10">
        <button
          onClick={() => setActiveTab('quran')}
          className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-200 flex items-center gap-2 ${
            activeTab === 'quran'
              ? 'bg-amber-500 text-slate-950 shadow-xl shadow-amber-500/20 scale-105'
              : 'glass-panel text-slate-300 hover:text-amber-300 border border-slate-800'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>1. الآيات القرآنية والتفاسير (4 آيات رئيسية)</span>
        </button>

        <button
          onClick={() => setActiveTab('virtues')}
          className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-200 flex items-center gap-2 ${
            activeTab === 'virtues'
              ? 'bg-amber-500 text-slate-950 shadow-xl shadow-amber-500/20 scale-105'
              : 'glass-panel text-slate-300 hover:text-amber-300 border border-slate-800'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>2. فضائل بضعة المصطفى في الصحاح (6 أحاديث متفق عليها)</span>
        </button>
      </div>

      {activeTab === 'quran' ? (
        /* Quran Verses List */
        <div className="space-y-8">
          {QURAN_VERSES.map((v) => (
            <div key={v.id} className="glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-amber-500/20">
                <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 text-xs font-bold">
                  سورة {v.surahName} — آية {v.verseNumber}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {v.title}
                </span>
              </div>

              {/* Quranic Text Display */}
              <div className="font-amiri text-2xl sm:text-3xl font-bold text-amber-200 text-center bg-slate-950/70 p-6 sm:p-8 rounded-2xl border border-amber-500/20 mb-6 leading-loose">
                ﴿ {v.arabicText || v.text} ﴾
              </div>

              {/* Context Summary */}
              <p className="text-sm text-slate-200 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800 mb-6">
                <strong className="text-amber-400 font-semibold block mb-1">سبب النزول والسياق:</strong>
                {v.contextSummary || v.shiaTafsir.summary}
              </p>

              {/* Dual Tafsir Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                
                {/* Shia Tafsir */}
                <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
                  <div className="flex items-center justify-between pb-2 border-b border-emerald-500/20">
                    <span className="font-bold text-emerald-300">التفسير عند الإمامية:</span>
                    <span className="text-[10px] text-emerald-400 font-mono">
                      {(v.shiaTafsir.mainSources || v.shiaTafsir.sources).join('، ')}
                    </span>
                  </div>
                  <p className="text-slate-200 leading-relaxed">
                    {v.shiaTafsir.summary}
                  </p>
                </div>

                {/* Sunni Tafsir */}
                <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-2">
                  <div className="flex items-center justify-between pb-2 border-b border-amber-500/20">
                    <span className="font-bold text-amber-300">التفسير عند أهل السنة:</span>
                    <span className="text-[10px] text-amber-400 font-mono">
                      {(v.sunniTafsir.mainSources || v.sunniTafsir.sources).join('، ')}
                    </span>
                  </div>
                  <p className="text-slate-200 leading-relaxed">
                    {v.sunniTafsir.summary}
                  </p>
                </div>

              </div>

            </div>
          ))}
        </div>
      ) : (
        /* Virtues Hadiths List */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VIRTUES_HADITHS.map((h) => (
            <div key={h.id} className="glass-card rounded-3xl p-6 border border-amber-500/30 bg-gradient-to-b from-slate-900 via-slate-900/90 to-amber-950/10 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-amber-500/20">
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                    {h.grading || h.status}
                  </span>
                  <span className="text-xs text-amber-400 font-mono">
                    {h.sourceBook || (h.sourcesList && h.sourcesList[0]?.book)}
                  </span>
                </div>

                <blockquote className="font-amiri text-xl font-bold text-amber-100 leading-relaxed bg-slate-950/60 p-4 rounded-2xl border border-amber-500/20 mb-4">
                  "{h.hadithText || h.arabicText}"
                </blockquote>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {h.explanation || h.contextNotes}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>الراوي: {h.narrator || (h.sourcesList && h.sourcesList[0]?.author)}</span>
                <span className="text-emerald-400 font-semibold">{h.consensusLevel || 'محل إجماع وتوثيق'}</span>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
