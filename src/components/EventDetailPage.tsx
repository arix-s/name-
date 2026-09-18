import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Users, 
  CheckCircle2, 
  AlertCircle, 
  Bookmark, 
  Share2, 
  BookOpen, 
  Scale, 
  Info,
  Check,
  Copy
} from 'lucide-react';

export const EventDetailPage: React.FC = () => {
  const { 
    timelineEvents, 
    selectedEventSlug, 
    setActiveTab, 
    addBookmark, 
    removeBookmark, 
    isBookmarked,
    setActiveSourceModal,
    setActiveNarratorModal
  } = useApp();

  const [copied, setCopied] = useState(false);

  const event = timelineEvents.find(e => e.slug === selectedEventSlug) || timelineEvents[0];

  if (!event) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-slate-300">لم يتم العثور على هذا الحدث التاريخي.</p>
        <button 
          onClick={() => setActiveTab('timeline')}
          className="mt-4 px-4 py-2 bg-amber-500 text-slate-950 rounded-xl font-bold"
        >
          العودة للخط الزمني
        </button>
      </div>
    );
  }

  const bookmarked = isBookmarked(event.id);

  const handleBookmarkToggle = () => {
    if (bookmarked) {
      removeBookmark(event.id);
    } else {
      addBookmark({
        id: event.id,
        type: 'event',
        title: event.title,
        snippet: event.shortSummary
      });
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 animate-fadeIn">
      
      {/* Breadcrumbs & Back Button */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
          <button onClick={() => setActiveTab('home')} className="hover:text-amber-300 transition-colors">
            الرئيسية
          </button>
          <span>/</span>
          <button onClick={() => setActiveTab('timeline')} className="hover:text-amber-300 transition-colors">
            الخط الزمني
          </button>
          <span>/</span>
          <span className="text-amber-400 font-semibold truncate max-w-[200px] sm:max-w-xs">{event.title}</span>
        </div>

        <button
          onClick={() => setActiveTab('timeline')}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel text-slate-300 hover:text-amber-300 border border-slate-700 text-xs sm:text-sm transition-all"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة للخط الزمني</span>
        </button>
      </div>

      {/* Main Header Card */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/30 mb-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 text-xs font-bold">
            {event.category}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handleBookmarkToggle}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                bookmarked ? 'bg-amber-500 border-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-amber-300'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>{bookmarked ? 'محفوظ في المفضلة' : 'حفظ الحدث'}</span>
            </button>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-amber-300 text-xs font-semibold transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'تم النسخ' : 'مشاركة'}</span>
            </button>
          </div>
        </div>

        <h1 className="font-amiri text-3xl sm:text-5xl font-bold text-slate-100 mb-6 leading-snug">
          {event.title}
        </h1>

        {/* Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[11px] text-slate-400 font-medium">التاريخ التقريبي</span>
              <span className="text-sm font-bold text-slate-200">{event.approxDate}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[11px] text-slate-400 font-medium">المكان</span>
              <span className="text-sm font-bold text-slate-200">{event.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[11px] text-slate-400 font-medium">الأطراف والمذكورون</span>
              <span className="text-xs font-bold text-slate-200 truncate block max-w-[200px]">
                {event.parties.join('، ')}
              </span>
            </div>
          </div>
        </div>

        <p className="text-slate-200 text-base leading-relaxed bg-slate-800/40 p-4 rounded-xl border border-slate-700/50">
          {event.shortSummary}
        </p>
      </div>

      {/* Dual Narrations Section (Shia vs Sunni) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        
        {/* Shia Narration Card */}
        <div className="glass-card rounded-3xl p-6 border border-emerald-500/25 bg-gradient-to-b from-emerald-950/20 to-slate-900/60 shadow-xl">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-emerald-500/20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                إمامي
              </div>
              <h2 className="font-amiri text-2xl font-bold text-emerald-300">
                1. الرواية الشيعية
              </h2>
            </div>
            <span className="text-xs text-emerald-400/80 font-medium">المصادر الإمامية</span>
          </div>

          {event.shiaNarrations.length === 0 ? (
            <p className="text-xs text-slate-400 italic">لا توجد نص رواية شيعية مستقلة في هذا الحدث.</p>
          ) : (
            event.shiaNarrations.map((n) => (
              <div key={n.id} className="space-y-4">
                <blockquote className="font-amiri text-lg text-slate-100 leading-relaxed bg-slate-950/60 p-4 rounded-2xl border border-emerald-500/20">
                  "{n.text}"
                </blockquote>

                {/* Source Metadata */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">الكتاب والمؤلف</span>
                    <span className="font-bold text-amber-300">{n.bookName} — {n.author}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">الجزء والصفحة</span>
                    <span className="font-bold text-slate-200">{n.volume || '—'} {n.page ? `(${n.page})` : ''}</span>
                  </div>
                </div>

                {n.isnad && (
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                    <span className="text-slate-400 font-medium block mb-1">السند ورجال الحديث:</span>
                    <span className="text-slate-200 font-mono text-[11px] leading-normal">{n.isnad}</span>
                  </div>
                )}

                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-emerald-300">تقييم علماء الإمامية:</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                      {n.scholarGrading}
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    {n.scholarNotes}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Sunni Narration Card */}
        <div className="glass-card rounded-3xl p-6 border border-amber-500/25 bg-gradient-to-b from-amber-950/20 to-slate-900/60 shadow-xl">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-amber-500/20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                سني
              </div>
              <h2 className="font-amiri text-2xl font-bold text-amber-300">
                2. الرواية السنية
              </h2>
            </div>
            <span className="text-xs text-amber-400/80 font-medium">مصادر أهل السنة</span>
          </div>

          {event.sunniNarrations.length === 0 ? (
            <p className="text-xs text-slate-400 italic">لا توجد نص رواية سنية تفصيلية مستقلة في هذا الحدث.</p>
          ) : (
            event.sunniNarrations.map((n) => (
              <div key={n.id} className="space-y-4">
                <blockquote className="font-amiri text-lg text-slate-100 leading-relaxed bg-slate-950/60 p-4 rounded-2xl border border-amber-500/20">
                  "{n.text}"
                </blockquote>

                {/* Source Metadata */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">الكتاب والمؤلف</span>
                    <span className="font-bold text-amber-300">{n.bookName} — {n.author}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">الجزء والصفحة</span>
                    <span className="font-bold text-slate-200">{n.volume || '—'} {n.page ? `(${n.page})` : ''}</span>
                  </div>
                </div>

                {n.isnad && (
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                    <span className="text-slate-400 font-medium block mb-1">السند والدرجة:</span>
                    <span className="text-slate-200 font-mono text-[11px] leading-normal">{n.isnad}</span>
                  </div>
                )}

                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-300">درجة الحديث وملاحظات العلماء:</span>
                    <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold">
                      {n.scholarGrading}
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    {n.scholarNotes}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

      </div>

      {/* Comparison Section: Agreement vs Difference */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl mb-8">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-amber-500/20">
          <Scale className="w-6 h-6 text-amber-400" />
          <h2 className="font-amiri text-3xl font-bold text-slate-100">
            مقارنة المصادر وتحليل الباحث
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Agreement Card */}
          <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30">
            <h3 className="font-bold text-emerald-300 text-lg mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              ماذا اتفقت عليه المصادر؟
            </h3>
            <ul className="space-y-2 text-sm text-slate-200">
              {event.pointsOfAgreement.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dispute Card */}
          <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30">
            <h3 className="font-bold text-amber-300 text-lg mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-400" />
              أين وقع الاختلاف؟
            </h3>
            <ul className="space-y-2 text-sm text-slate-200">
              {event.pointsOfDispute.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Primary Sources Used */}
      <div className="glass-card rounded-2xl p-6 border border-slate-800">
        <h3 className="font-bold text-slate-200 text-base mb-3 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-amber-400" />
          المصادر والمراجع المعتمدة في التوثيق:
        </h3>
        <div className="flex flex-wrap gap-2">
          {event.sources.map((s, idx) => (
            <span key={idx} className="px-3 py-1.5 rounded-xl bg-slate-800 text-amber-300 border border-slate-700 text-xs font-mono">
              {s}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};
