import React from 'react';
import { useApp } from '../context/AppContext';
import { Search, X, BookOpen, Clock, Users, ArrowLeft, ShieldCheck, ScrollText } from 'lucide-react';
import { QURAN_VERSES } from '../data/quranVerses';
import { FADAK_SERMON_PARAGRAPHS } from '../data/fadakSermon';

export const SearchModal: React.FC = () => {
  const { 
    isSearchOpen, 
    setIsSearchOpen, 
    searchQuery, 
    setSearchQuery, 
    timelineEvents, 
    sources, 
    personalities,
    navigateToEvent,
    navigateToFigure,
    setActiveSourceModal,
    setActiveTab
  } = useApp();

  if (!isSearchOpen) return null;

  const queryClean = searchQuery.trim().toLowerCase();

  // Search results calculation
  const matchedEvents = queryClean
    ? timelineEvents.filter(e => 
        e.title.toLowerCase().includes(queryClean) || 
        e.shortSummary.toLowerCase().includes(queryClean) ||
        e.parties.some(p => p.toLowerCase().includes(queryClean)) ||
        e.location.toLowerCase().includes(queryClean)
      )
    : [];

  const matchedSources = queryClean
    ? sources.filter(s => 
        s.title.toLowerCase().includes(queryClean) || 
        s.author.toLowerCase().includes(queryClean) ||
        (s.briefDescription || s.description || '').toLowerCase().includes(queryClean)
      )
    : [];

  const matchedFigures = queryClean
    ? personalities.filter(p => 
        p.name.toLowerCase().includes(queryClean) || 
        p.title.toLowerCase().includes(queryClean) ||
        p.bio.toLowerCase().includes(queryClean)
      )
    : [];

  const matchedSermon = queryClean
    ? FADAK_SERMON_PARAGRAPHS.filter(p => 
        p.text.toLowerCase().includes(queryClean) ||
        p.paragraphTitle.toLowerCase().includes(queryClean)
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-start justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="w-full max-w-3xl glass-panel rounded-3xl border border-amber-500/40 shadow-2xl p-6 relative mt-12 mb-12">
        
        {/* Close button */}
        <button
          onClick={() => setIsSearchOpen(false)}
          className="absolute left-4 top-4 p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-amber-300 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Search Header Form */}
        <div className="mb-6 pb-4 border-b border-amber-500/20">
          <h2 className="font-amiri text-2xl font-bold text-amber-300 mb-2 flex items-center gap-2">
            <Search className="w-5 h-5" />
            محرك البحث التوثيقي الشامل
          </h2>
          <div className="relative">
            <input
              type="text"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="اكتب كلمة البحث (مثال: فدك، المحسن، التطهير، الدار، البخاري)..."
              className="w-full pr-12 pl-4 py-3.5 rounded-2xl bg-slate-900 border border-amber-500/30 text-slate-100 placeholder-slate-400 text-base focus:outline-none focus:ring-2 focus:ring-amber-400/50 shadow-inner"
            />
            <Search className="absolute right-4 top-4 w-5 h-5 text-amber-400" />
          </div>
        </div>

        {/* Results Sections */}
        {!queryClean ? (
          <div className="text-center py-10 text-slate-400 text-sm">
            اكتب كلمة البحث لاستكشاف الأحداث التاريخية، المصادر، خطبة فدك، والشخصيات.
          </div>
        ) : (
          <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
            
            {/* Events match */}
            {matchedEvents.length > 0 && (
              <div>
                <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  الأحداث التاريخية ({matchedEvents.length}):
                </h3>
                <div className="space-y-2">
                  {matchedEvents.map((e) => (
                    <div
                      key={e.id}
                      onClick={() => {
                        setIsSearchOpen(false);
                        navigateToEvent(e.slug);
                      }}
                      className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/30 cursor-pointer transition-all flex items-center justify-between"
                    >
                      <div>
                        <span className="font-bold text-slate-100 text-sm block">{e.title}</span>
                        <span className="text-xs text-slate-400 truncate block max-w-md">{e.shortSummary}</span>
                      </div>
                      <ArrowLeft className="w-4 h-4 text-amber-400" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sermon match */}
            {matchedSermon.length > 0 && (
              <div>
                <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <ScrollText className="w-4 h-4" />
                  فقرات من خطبة فدك ({matchedSermon.length}):
                </h3>
                <div className="space-y-2">
                  {matchedSermon.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => {
                        setIsSearchOpen(false);
                        setActiveTab('fadak');
                      }}
                      className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/30 cursor-pointer transition-all"
                    >
                      <span className="font-bold text-amber-300 text-xs block mb-1">الفقرة {p.paragraphNumber}: {p.paragraphTitle}</span>
                      <p className="font-amiri text-sm text-slate-200 line-clamp-2">"{p.text}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Personalities match */}
            {matchedFigures.length > 0 && (
              <div>
                <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  الشخصيات والرجال ({matchedFigures.length}):
                </h3>
                <div className="space-y-2">
                  {matchedFigures.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => {
                        setIsSearchOpen(false);
                        navigateToFigure(p.id);
                      }}
                      className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/30 cursor-pointer transition-all flex items-center justify-between"
                    >
                      <div>
                        <span className="font-bold text-slate-100 text-sm block">{p.name}</span>
                        <span className="text-xs text-amber-400/90">{p.title}</span>
                      </div>
                      <ArrowLeft className="w-4 h-4 text-amber-400" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sources match */}
            {matchedSources.length > 0 && (
              <div>
                <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  المصادر المعتمدة ({matchedSources.length}):
                </h3>
                <div className="space-y-2">
                  {matchedSources.map((s) => (
                    <div
                      key={s.id}
                      onClick={() => {
                        setIsSearchOpen(false);
                        setActiveSourceModal(s);
                      }}
                      className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/30 cursor-pointer transition-all flex items-center justify-between"
                    >
                      <div>
                        <span className="font-bold text-slate-100 text-sm block">{s.title}</span>
                        <span className="text-xs text-slate-400">{s.author} ({s.school === 'shia' ? 'إمامي' : 'سني'})</span>
                      </div>
                      <ArrowLeft className="w-4 h-4 text-amber-400" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {matchedEvents.length === 0 && matchedSermon.length === 0 && matchedFigures.length === 0 && matchedSources.length === 0 && (
              <div className="text-center py-8 text-slate-400 text-sm">
                لم يتم العثور على نتائج تطابق عبارة "{searchQuery}".
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
