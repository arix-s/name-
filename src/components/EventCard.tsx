import React from 'react';
import { TimelineEvent } from '../types';
import { useApp } from '../context/AppContext';
import { 
  Calendar, 
  MapPin, 
  Users, 
  CheckCircle2, 
  AlertCircle, 
  ArrowLeft, 
  Bookmark, 
  Share2, 
  BookOpen, 
  Info
} from 'lucide-react';

export const EventCard: React.FC<{ event: TimelineEvent }> = ({ event }) => {
  const { 
    navigateToEvent, 
    addBookmark, 
    removeBookmark, 
    isBookmarked,
    setActiveDisputedModal,
    setActiveSourceModal
  } = useApp();

  const bookmarked = isBookmarked(event.id);

  const handleBookmarkToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
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

  const getStatusBadge = () => {
    switch (event.status) {
      case 'authentic':
        return (
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> صحيح وموثق
          </span>
        );
      case 'disputed':
        return (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveDisputedModal({
                title: event.title,
                explanation: `هذا الحدث (${event.title}) يعتبر موضع خلاف وتفاوت في التفاصيل بين المصادر الشيعية والسنية.`
              });
            }}
            className="px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 text-xs font-semibold flex items-center gap-1 hover:bg-amber-500/25 transition-colors"
          >
            <AlertCircle className="w-3.5 h-3.5" /> موضع خلاف
          </button>
        );
      case 'unresolved':
        return (
          <span className="px-2.5 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 text-xs font-semibold flex items-center gap-1">
            <Info className="w-3.5 h-3.5" /> غير محسوم
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-1 rounded-full bg-slate-700/60 text-slate-300 border border-slate-600 text-xs font-semibold">
            تاريخي
          </span>
        );
    }
  };

  return (
    <div 
      onClick={() => navigateToEvent(event.slug)}
      className="glass-card rounded-2xl p-6 border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 shadow-xl cursor-pointer group flex flex-col justify-between"
    >
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-bold">
              {event.category}
            </span>
            {getStatusBadge()}
          </div>

          <button
            onClick={handleBookmarkToggle}
            className={`p-2 rounded-xl transition-colors ${
              bookmarked ? 'bg-amber-500 text-slate-950' : 'bg-slate-800/80 text-slate-400 hover:text-amber-300'
            }`}
            title={bookmarked ? 'إزالة من المفضلة' : 'حفظ في المفضلة'}
          >
            <Bookmark className="w-4 h-4" />
          </button>
        </div>

        {/* Title */}
        <h3 className="font-amiri text-2xl font-bold text-slate-100 group-hover:text-amber-300 transition-colors mb-3 leading-snug">
          {event.title}
        </h3>

        {/* Short Metadata Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 mb-4 bg-slate-900/40 p-3 rounded-xl border border-slate-800">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate">{event.approxDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate">{event.location}</span>
          </div>
        </div>

        {/* Summary text */}
        <p className="text-slate-300 text-sm leading-relaxed line-clamp-3 mb-5">
          {event.shortSummary}
        </p>

        {/* Parties involved */}
        {event.parties.length > 0 && (
          <div className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
            <Users className="w-3.5 h-3.5 text-slate-400 ml-1" />
            <span className="font-medium text-slate-400">الشخصيات:</span>
            {event.parties.map((p, idx) => (
              <span key={idx} className="bg-slate-800/70 px-2 py-0.5 rounded text-slate-300 border border-slate-700/50">
                {p}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
        <span className="flex items-center gap-1">
          <BookOpen className="w-3.5 h-3.5" />
          عرض التوثيق والروايات ({event.shiaNarrations.length + event.sunniNarrations.length})
        </span>
        <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
      </div>
    </div>
  );
};
