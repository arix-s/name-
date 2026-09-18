import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Compass, 
  BookOpen, 
  Clock, 
  Scale, 
  Search, 
  ShieldCheck, 
  ScrollText, 
  Award,
  Sparkles
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { setActiveTab, setIsSearchOpen, setSearchQuery } = useApp();
  const [localQuery, setLocalQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!localQuery.trim()) return;
    setSearchQuery(localQuery);
    setIsSearchOpen(true);
  };

  const fastTopics = [
    { label: 'المحسن بن علي', query: 'المحسن' },
    { label: 'قضية فدك', query: 'فدك' },
    { label: 'حادثة الدار', query: 'الدار' },
    { label: 'آية التطهير', query: 'التطهير' },
    { label: 'موضع القبر', query: 'القبر' },
  ];

  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-islamic-pattern border-b border-amber-500/15">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-600/10 via-emerald-600/5 to-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Subtle Crest / Bismillah Emblem */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium mb-8 shadow-lg">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>موسوعة موثقة ومحايدة لآل بيت النبوة ﷺ</span>
        </div>

        {/* Main Arabic Display Heading */}
        <h1 className="font-amiri text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-100 leading-tight sm:leading-tight mb-4">
          فاطمة الزهراء <span className="text-amber-400 block sm:inline">عليها السلام</span>
        </h1>
        
        <p className="font-kufi text-2xl sm:text-3xl text-amber-300/90 tracking-wide mb-6">
          من المهد إلى اللحد
        </p>

        <p className="font-cairo text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
          سيرة السيدة فاطمة بنت رسول الله ﷺ، كما روتها المصادر الإسلامية، مع دراسة الروايات ومواطن الاتفاق والاختلاف بنهج توثيقي علمي ومحايد يجمع بين المصادر الشيعية والسنية.
        </p>

        {/* Quick Search Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center">
            <input
              type="text"
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              placeholder="ابحث في الروايات والمصادر (مثال: المحسن، فدك، الدار، التطهير)..."
              className="w-full pl-28 pr-12 py-4 rounded-2xl glass-panel text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 border border-amber-500/30 shadow-2xl text-sm sm:text-base"
            />
            <Search className="absolute right-4 w-5 h-5 text-amber-400" />
            <button
              type="submit"
              className="absolute left-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-md"
            >
              بحث موثق
            </button>
          </form>

          {/* Fast Topics Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
            <span className="text-xs text-slate-400 font-medium">مواضيع شائعة:</span>
            {fastTopics.map((topic, i) => (
              <button
                key={i}
                onClick={() => {
                  setSearchQuery(topic.query);
                  setIsSearchOpen(true);
                }}
                className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 border border-slate-700/60 transition-all"
              >
                {topic.label}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons Grid */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14">
          <button
            onClick={() => setActiveTab('timeline')}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-base transition-all shadow-xl shadow-amber-500/20 hover:scale-[1.02]"
          >
            <Compass className="w-5 h-5" />
            <span>ابدأ الرحلة</span>
          </button>

          <button
            onClick={() => setActiveTab('sources')}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl glass-panel hover:bg-slate-800/80 text-amber-300 font-bold text-base border border-amber-500/30 transition-all shadow-lg hover:scale-[1.02]"
          >
            <BookOpen className="w-5 h-5" />
            <span>استكشف المصادر</span>
          </button>

          <button
            onClick={() => setActiveTab('timeline')}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl glass-panel hover:bg-slate-800/80 text-slate-200 font-bold text-base border border-slate-700 transition-all shadow-lg hover:scale-[1.02]"
          >
            <Clock className="w-5 h-5 text-amber-400" />
            <span>الخط الزمني</span>
          </button>

          <button
            onClick={() => setActiveTab('compare')}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl glass-panel hover:bg-slate-800/80 text-slate-200 font-bold text-base border border-slate-700 transition-all shadow-lg hover:scale-[1.02]"
          >
            <Scale className="w-5 h-5 text-amber-400" />
            <span>مقارنة المصادر</span>
          </button>
        </div>

        {/* Feature Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div 
            onClick={() => setActiveTab('timeline')}
            className="p-5 rounded-2xl glass-card border border-amber-500/20 text-right cursor-pointer hover:border-amber-400/50 transition-all group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-100 text-lg group-hover:text-amber-300 transition-colors">
                21 حدثاً تاريخياً
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              مسار زمني تفاعلي يبدأ من الولادة في مكة والمشاهد حتى الدفن الليلي وموضع القبر.
            </p>
          </div>

          <div 
            onClick={() => setActiveTab('compare')}
            className="p-5 rounded-2xl glass-card border border-amber-500/20 text-right cursor-pointer hover:border-amber-400/50 transition-all group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                <Scale className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-100 text-lg group-hover:text-amber-300 transition-colors">
                مقارنة المصادر
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              عرض علمي منظم لنقاط الاتفاق "ماذا اتفقت عليه المصادر؟" ونقاط الخلاف التاريخي دون تحيز.
            </p>
          </div>

          <div 
            onClick={() => setActiveTab('sources')}
            className="p-5 rounded-2xl glass-card border border-amber-500/20 text-right cursor-pointer hover:border-amber-400/50 transition-all group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-100 text-lg group-hover:text-amber-300 transition-colors">
                توثيق الأسانيد
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              عرض نص الرواية، اسم الكتاب، الجزء، الصفحة، الأسانيد، وتقييم علماء الحديث المعتمدين.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
