import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Settings, Plus, Save, BookOpen, Clock, Users, CheckCircle2 } from 'lucide-react';
import { SourceBook, TimelineEvent, Personality } from '../types';

export const AdminDashboard: React.FC = () => {
  const { 
    sources, 
    timelineEvents, 
    personalities, 
    addOrUpdateSource, 
    addOrUpdateTimelineEvent, 
    addOrUpdatePersonality 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'sources' | 'events' | 'personalities'>('sources');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Form State for new source
  const [newSource, setNewSource] = useState<SourceBook>({
    id: `src_${Date.now()}`,
    title: '',
    author: '',
    authorDeath: '',
    authorDeathYear: '',
    school: 'shia',
    century: '',
    description: '',
    briefDescription: '',
    narrationsCount: 0,
    narrationsUsedCount: 0,
    mainTopicsCovered: []
  });

  const handleSourceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSource.title || !newSource.author) return;
    addOrUpdateSource({
      ...newSource,
      authorDeath: newSource.authorDeathYear || newSource.authorDeath || '',
      description: newSource.briefDescription || newSource.description || '',
      narrationsCount: newSource.narrationsUsedCount || newSource.narrationsCount || 0
    });
    setSuccessMessage('تم إضافة / تحديث المصدر بنجاح');
    setTimeout(() => setSuccessMessage(null), 3000);
    setNewSource({
      id: `src_${Date.now()}`,
      title: '',
      author: '',
      authorDeath: '',
      authorDeathYear: '',
      school: 'shia',
      century: '',
      description: '',
      briefDescription: '',
      narrationsCount: 0,
      narrationsUsedCount: 0,
      mainTopicsCovered: []
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 animate-fadeIn">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
          <Settings className="w-4 h-4 text-amber-400" />
          <span>لوحة إدارة التوثيق وإضافة البيانات</span>
        </div>
        <h1 className="font-amiri text-4xl sm:text-5xl font-bold text-slate-100 mb-3">
          لوحة التحكم والتحقيق العلمي
        </h1>
        <p className="font-cairo text-base text-slate-300 leading-relaxed">
          إدارة وتحديث البيانات التوثيقية، إضافة مصادر جديدة، تعديل أحداث الخط الزمني وترجمات الشخصيات.
        </p>
      </div>

      {/* Message Notification */}
      {successMessage && (
        <div className="mb-6 p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-sm text-center flex items-center justify-center gap-2">
          <CheckCircle2 className="w-5 h-5" />
          <span>{successMessage}</span>
        </div>
      )}

      {/* Admin Tabs */}
      <div className="flex justify-center gap-3 mb-8">
        <button
          onClick={() => setActiveTab('sources')}
          className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'sources'
              ? 'bg-amber-500 text-slate-950 shadow-lg'
              : 'glass-panel text-slate-300 border border-slate-800'
          }`}
        >
          إدارة المصادر ({sources.length})
        </button>

        <button
          onClick={() => setActiveTab('events')}
          className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'events'
              ? 'bg-amber-500 text-slate-950 shadow-lg'
              : 'glass-panel text-slate-300 border border-slate-800'
          }`}
        >
          الأحداث التاريخية ({timelineEvents.length})
        </button>

        <button
          onClick={() => setActiveTab('personalities')}
          className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'personalities'
              ? 'bg-amber-500 text-slate-950 shadow-lg'
              : 'glass-panel text-slate-300 border border-slate-800'
          }`}
        >
          موسوعة الشخصيات ({personalities.length})
        </button>
      </div>

      {activeTab === 'sources' && (
        <div className="space-y-8">
          
          {/* Add New Source Form */}
          <form onSubmit={handleSourceSubmit} className="glass-panel rounded-3xl p-6 border border-amber-500/30 shadow-xl space-y-4">
            <h2 className="font-amiri text-2xl font-bold text-amber-300 mb-4 flex items-center gap-2">
              <Plus className="w-5 h-5" />
              إضافة كتاب / مصدر جديد للقاعدة
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-slate-300 font-medium mb-1">اسم الكتاب الشريف</label>
                <input
                  type="text"
                  required
                  value={newSource.title}
                  onChange={(e) => setNewSource({ ...newSource, title: e.target.value })}
                  placeholder="مثال: بحار الأنوار"
                  className="w-full p-3 rounded-xl bg-slate-950/80 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">اسم المؤلف واسم شهرته</label>
                <input
                  type="text"
                  required
                  value={newSource.author}
                  onChange={(e) => setNewSource({ ...newSource, author: e.target.value })}
                  placeholder="مثال: العلامة المجلسي"
                  className="w-full p-3 rounded-xl bg-slate-950/80 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">المدرسة / المذهب</label>
                <select
                  value={newSource.school}
                  onChange={(e) => setNewSource({ ...newSource, school: e.target.value as 'shia' | 'sunni' })}
                  className="w-full p-3 rounded-xl bg-slate-950/80 border border-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-400/40"
                >
                  <option value="shia">إمامي شيعي</option>
                  <option value="sunni">أهل السنة والجماعة</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">تاريخ وفاته والقرن</label>
                <input
                  type="text"
                  value={newSource.authorDeathYear}
                  onChange={(e) => setNewSource({ ...newSource, authorDeathYear: e.target.value })}
                  placeholder="مثال: (ت 1111 هـ) — القرن 12 هـ"
                  className="w-full p-3 rounded-xl bg-slate-950/80 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 text-xs font-medium mb-1">وصف موجز للمصدر وأهميته</label>
              <textarea
                rows={3}
                value={newSource.briefDescription}
                onChange={(e) => setNewSource({ ...newSource, briefDescription: e.target.value })}
                placeholder="اكتب نبذة موثقة حول الكتاب وتاريخ جمعه وتقدير العلماء له..."
                className="w-full p-3 rounded-xl bg-slate-950/80 border border-slate-700 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:ring-2 focus:ring-amber-400/40"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>حفظ المصدر في قاعدة البيانات</span>
            </button>
          </form>

          {/* List of existing sources */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-300 text-sm">المصادر المسجلة حالياً:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {sources.map((s) => (
                <div key={s.id} className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-amber-300 block">{s.title}</span>
                    <span className="text-slate-400 text-[11px]">{s.author} ({s.school === 'shia' ? 'شيعي' : 'سني'})</span>
                  </div>
                  <span className="px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 text-[10px]">
                    معتمد
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {activeTab === 'events' && (
        <div className="glass-panel p-6 rounded-3xl border border-amber-500/30 text-center space-y-4">
          <p className="text-slate-200 text-sm">
            تم إدراج 21 حدثاً تاريخياً معتمداً في الخط الزمني. يمكن تعديل البيانات مباشرة من خلال قاعدة بيانات المشروع لتخصيص نصوص الروايات والأسانيد.
          </p>
        </div>
      )}

      {activeTab === 'personalities' && (
        <div className="glass-panel p-6 rounded-3xl border border-amber-500/30 text-center space-y-4">
          <p className="text-slate-200 text-sm">
            تم إدراج 10 شخصيات أصولية وتاريخية في الموسوعة.
          </p>
        </div>
      )}

    </div>
  );
};
