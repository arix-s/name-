import React from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, ArrowLeft, BookOpen, Compass } from 'lucide-react';

export const FinalReflection: React.FC = () => {
  const { setActiveTab } = useApp();

  return (
    <section className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-amber-950/20 border-t border-amber-500/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Emblem */}
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto mb-6 shadow-inner">
          <Sparkles className="w-8 h-8" />
        </div>

        <h2 className="font-amiri text-4xl sm:text-5xl font-bold text-slate-100 mb-4">
          رحلتها انتهت... وأثرها بقي
        </h2>

        <p className="font-kufi text-xl sm:text-2xl text-amber-300 mb-6">
          سيدة نساء العالمين وبضعة الرسول الأكرم ﷺ
        </p>

        <p className="font-cairo text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto">
          عاشت السيدة فاطمة الزهراء عليهم السلام حياة قصيرة بالسنوات، عظيمة بالأثر والإيمان، مجسدة لأعلى درجات العبادة والزهد والبلاغة والتضحية. وظل اسمها ومقامها محل إجماع وتقديس ومحبة لدى أمة المسلمين قاطبة عبر العصور.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => {
              setActiveTab('timeline');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base transition-all shadow-xl shadow-amber-500/20"
          >
            <Compass className="w-5 h-5" />
            <span>إعادة تتبع الخط الزمني</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('sources');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl glass-panel text-amber-300 hover:text-amber-200 border border-amber-500/30 text-base font-bold transition-all"
          >
            <BookOpen className="w-5 h-5" />
            <span>مكتبة المصادر والمراجع</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export const Footer: React.FC = () => {
  const { setActiveTab } = useApp();

  return (
    <footer className="glass-panel border-t border-amber-500/20 text-slate-400 text-xs font-cairo py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-amiri font-bold text-xl">
                ف
              </div>
              <span className="font-amiri text-2xl font-bold text-amber-300">
                فاطمة الزهراء عليها السلام — من المهد إلى اللحد
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed text-xs">
              موسوعة تاريخية وتوثيقية تفاعلية تعتمد أسلوب التوثيق المزدوج والحياد العلمي المنهجي في عرض الروايات والمصادر الإسلامية مع احترام المقام الرفيع لبيت النبوة.
            </p>
          </div>

          {/* Quick Links 1 */}
          <div className="space-y-2">
            <h3 className="font-bold text-amber-300 text-sm mb-3">أقسام الموسوعة</h3>
            <ul className="space-y-2">
              <li><button onClick={() => setActiveTab('timeline')} className="hover:text-amber-300 transition-colors">الخط الزمني التفاعلي</button></li>
              <li><button onClick={() => setActiveTab('compare')} className="hover:text-amber-300 transition-colors">مقارنة المصادر بين المدرستين</button></li>
              <li><button onClick={() => setActiveTab('fadak')} className="hover:text-amber-300 transition-colors">فدك وقارئ الخطبة</button></li>
              <li><button onClick={() => setActiveTab('muhsin')} className="hover:text-amber-300 transition-colors">دراسة توثيقية: المحسن بن علي</button></li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div className="space-y-2">
            <h3 className="font-bold text-amber-300 text-sm mb-3">التوثيق والمراجع</h3>
            <ul className="space-y-2">
              <li><button onClick={() => setActiveTab('house_events')} className="hover:text-amber-300 transition-colors">أحداث الدار وسبب الوفاة</button></li>
              <li><button onClick={() => setActiveTab('tomb')} className="hover:text-amber-300 transition-colors">موضع القبر الشريف</button></li>
              <li><button onClick={() => setActiveTab('quran_virtues')} className="hover:text-amber-300 transition-colors">فاطمة في القرآن والحديث</button></li>
              <li><button onClick={() => setActiveTab('sources')} className="hover:text-amber-300 transition-colors">قاعدة الكتب والمصادر</button></li>
              <li><button onClick={() => setActiveTab('methodology')} className="hover:text-amber-300 transition-colors">حول المنهج العلمي</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800/80 text-center text-slate-400 text-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>جمعت ووُثّقت لوجه الله تعالى ولنشر العلم والوعي التاريخي المحايد.</span>
          <span>© {new Date().getFullYear()} فاطمة الزهراء عليها السلام — جميع الحقوق محفوظة لجميع المسلمين</span>
        </div>

      </div>
    </footer>
  );
};
