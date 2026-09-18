import React from 'react';
import { useApp } from '../context/AppContext';
import { X, BookOpen, AlertCircle, Bookmark, Trash2, ArrowLeft } from 'lucide-react';

export const SourceModal: React.FC = () => {
  const { activeSourceModal, setActiveSourceModal } = useApp();

  if (!activeSourceModal) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="w-full max-w-xl glass-panel rounded-3xl border border-amber-500/40 shadow-2xl p-6 relative">
        <button
          onClick={() => setActiveSourceModal(null)}
          className="absolute left-4 top-4 p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-amber-300 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 text-xs font-bold inline-block mb-3">
          بطاقة مصدر معتمد
        </span>

        <h2 className="font-amiri text-3xl font-bold text-slate-100 mb-1">
          {activeSourceModal.title}
        </h2>

        <p className="text-xs font-bold text-amber-400 mb-4">
          تأليف: {activeSourceModal.author} ({activeSourceModal.authorDeathYear || activeSourceModal.authorDeath}) — المذهب: {activeSourceModal.school === 'shia' ? 'إمامي شيعي' : 'أهل السنة'}
        </p>

        <div className="space-y-3 text-xs text-slate-200">
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <strong className="text-amber-300 block mb-1">وصف الكتاب وأهميته:</strong>
            <p className="leading-relaxed">{activeSourceModal.briefDescription || activeSourceModal.description}</p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <strong className="text-amber-300 block mb-1">عدد النصوص المستخدمة في الموسوعة:</strong>
            <span className="font-mono text-sm font-bold text-emerald-400">{activeSourceModal.narrationsUsedCount || activeSourceModal.narrationsCount} نصوص ومواضع</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DisputedModal: React.FC = () => {
  const { activeDisputedModal, setActiveDisputedModal } = useApp();

  if (!activeDisputedModal) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="w-full max-w-lg glass-panel rounded-3xl border border-amber-500/40 shadow-2xl p-6 relative">
        <button
          onClick={() => setActiveDisputedModal(null)}
          className="absolute left-4 top-4 p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-amber-300 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-amber-400 font-bold text-base mb-3">
          <AlertCircle className="w-5 h-5" />
          <span>تنبيه المنهج والتوثيق العلمي</span>
        </div>

        <h2 className="font-amiri text-2xl font-bold text-slate-100 mb-3">
          {activeDisputedModal.title}
        </h2>

        <p className="text-sm text-slate-200 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
          {activeDisputedModal.explanation}
        </p>

        <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400">
          الهدف الأساسي للموقع هو عرض الروايات من أمهات كتب الحديث والتاريخ بنهج محايد دون الانتصار لرواية بإخفاء الأخرى.
        </div>
      </div>
    </div>
  );
};

export const BookmarksView: React.FC = () => {
  const { bookmarks, removeBookmark, navigateToEvent, setActiveTab } = useApp();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 animate-fadeIn">
      
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
          <Bookmark className="w-4 h-4 text-amber-400" />
          <span>قائمة المحفوظات والمفضلة</span>
        </div>
        <h1 className="font-amiri text-4xl sm:text-5xl font-bold text-slate-100 mb-3">
          العناصر والمواضيع المحفوظة
        </h1>
      </div>

      {bookmarks.length === 0 ? (
        <div className="text-center py-16 glass-panel rounded-3xl border border-slate-800">
          <p className="text-slate-400 text-sm mb-4">لم تقم بإضافة أي عنصر للمفضلة بعد.</p>
          <button onClick={() => setActiveTab('timeline')} className="px-5 py-2.5 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl">
            استكشف الخط الزمني
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {bookmarks.map((b) => (
            <div key={b.id} className="glass-panel p-5 rounded-2xl border border-amber-500/20 flex items-center justify-between">
              <div>
                <h2 className="font-amiri text-xl font-bold text-amber-300 mb-1">{b.title}</h2>
                <p className="text-xs text-slate-300 line-clamp-1">{b.snippet}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigateToEvent(b.id)}
                  className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold flex items-center gap-1"
                >
                  <span>عرض</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => removeBookmark(b.id)}
                  className="p-2 rounded-lg bg-slate-800 text-rose-400 hover:bg-rose-500/20 transition-colors"
                  title="إزالة"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
