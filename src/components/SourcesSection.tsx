import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BookOpen, Search, Filter, ShieldCheck, ExternalLink } from 'lucide-react';

export const SourcesSection: React.FC = () => {
  const { sources, setActiveSourceModal } = useApp();
  const [filterSect, setFilterSect] = useState<string>('all');
  const [query, setQuery] = useState<string>('');

  const filtered = sources.filter((s) => {
    const matchesSect = filterSect === 'all' || s.school === filterSect;
    const matchesQuery = 
      s.title.includes(query) || 
      s.author.includes(query) || 
      (s.briefDescription || s.description || '').includes(query);
    return matchesSect && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
          <BookOpen className="w-4 h-4 text-amber-400" />
          <span>المكتبة الشاملة والتوثيق المرجعي</span>
        </div>
        <h1 className="font-amiri text-4xl sm:text-5xl font-bold text-slate-100 mb-4">
          قاعدة المصادر والمراجع الإسلامية
        </h1>
        <p className="font-cairo text-base text-slate-300 leading-relaxed">
          فهرس شامل للكتب والمدونات الحديثية والتاريخية المعتمدة في هذا الموقع من أمهات المصادر الشيعية والسنية.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
        
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث عن اسم كتاب أو مؤلف..."
            className="w-full pr-10 pl-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-slate-100 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/40"
          />
          <Search className="absolute right-3 top-3 w-4 h-4 text-amber-400" />
        </div>

        {/* Sect Filter Pills */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
          <button
            onClick={() => setFilterSect('all')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
              filterSect === 'all'
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'bg-slate-800 text-slate-300 hover:text-amber-300'
            }`}
          >
            جميع المصادر ({sources.length})
          </button>

          <button
            onClick={() => setFilterSect('shia')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
              filterSect === 'shia'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'bg-slate-800 text-slate-300 hover:text-emerald-300'
            }`}
          >
            المصادر الشيعية الإمامية
          </button>

          <button
            onClick={() => setFilterSect('sunni')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
              filterSect === 'sunni'
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'bg-slate-800 text-slate-300 hover:text-amber-300'
            }`}
          >
            مصادر أهل السنة
          </button>
        </div>

      </div>

      {/* Grid of Sources */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((s) => (
          <div
            key={s.id}
            onClick={() => setActiveSourceModal(s)}
            className="glass-card rounded-3xl p-6 border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 shadow-xl cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${
                  s.school === 'shia'
                    ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                    : 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                }`}>
                  {s.school === 'shia' ? 'إمامي شيعي' : 'أهل السنة'} — {s.century}
                </span>

                <span className="text-xs text-slate-400 font-mono">
                  {s.narrationsUsedCount || s.narrationsCount} نصوص
                </span>
              </div>

              <h2 className="font-amiri text-2xl font-bold text-slate-100 group-hover:text-amber-300 transition-colors mb-1">
                {s.title}
              </h2>

              <p className="text-xs font-semibold text-amber-400/90 mb-3">
                تأليف: {s.author} ({s.authorDeathYear || s.authorDeath})
              </p>

              <p className="text-slate-300 text-xs leading-relaxed line-clamp-3 mb-4">
                {s.briefDescription || s.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-amber-400">
              <span>عرض تفاصيل الكتاب</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
