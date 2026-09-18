import React from 'react';
import { HelpCircle, ShieldCheck, Scale, CheckCircle2, HeartHandshake, FileText } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 animate-fadeIn">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>الميثاق التوثيقي والنهج المتبّع</span>
        </div>
        <h1 className="font-amiri text-4xl sm:text-5xl font-bold text-slate-100 mb-4">
          حول المنهج العلمي والتوثيقي للموقع
        </h1>
        <p className="font-cairo text-base text-slate-300 leading-relaxed">
          الأسس العلمية والمعايير المنطقية المتبعة في إعداد وتنظيم وتبويب هذه الموسوعة التاريخية.
        </p>
      </div>

      {/* Main Principles Cards */}
      <div className="space-y-6">
        
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 shadow-xl space-y-3">
          <h2 className="font-amiri text-2xl font-bold text-amber-300 flex items-center gap-2">
            <Scale className="w-5 h-5 text-amber-400" />
            1. التجرد والحياد التوثيقي
          </h2>
          <p className="text-sm text-slate-200 leading-relaxed">
            لا يهدف الموقع لإثبات موقف مذهبي على حساب آخر، بل يسعى لتقديم المادة التاريخية والحديثية كما وردت في كتب المصادر الشيعية والسنية الأصلية مع الإحالة الدقيقة للجزء والصفحة والراوي.
          </p>
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 shadow-xl space-y-3">
          <h2 className="font-amiri text-2xl font-bold text-amber-300 flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-amber-400" />
            2. الاحترام المطلق لمقام أهل البيت عليهم السلام والصحابة الكرام
          </h2>
          <p className="text-sm text-slate-200 leading-relaxed">
            الالتزام التام باللغة والألفاظ العلمية المؤدبة، والابتعاد التام عن الأسلوب التحريضي أو الوصف الدموي أو استخدام أي صور تُجسّد شخص النبي ﷺ أو السيدة فاطمة الزهراء أو أهل البيت عليهم السلام.
          </p>
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 shadow-xl space-y-3">
          <h2 className="font-amiri text-2xl font-bold text-amber-300 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-amber-400" />
            3. تفكيك المسائل الخلافية والتنظيم المزدوج
          </h2>
          <p className="text-sm text-slate-200 leading-relaxed">
            في الأحداث الخلافية (مثل قضية فدك، والدار، وسبب الوفاة، وسقط المحسن)، يتم استعراض وجهة النظر الشيعية وتوثيقها بشكل مستقل، إلى جانب وجهة النظر السنية وتوثيقها بشكل مستقل، يليهما تحليل محايد لنقاط التوافق والاختلاف.
          </p>
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 shadow-xl space-y-3">
          <h2 className="font-amiri text-2xl font-bold text-amber-300 flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-400" />
            4. الأمانة في النقل وعدم نسبة الأقوال بدون مصدر
          </h2>
          <p className="text-sm text-slate-200 leading-relaxed">
            عدم إسناد أي خطبة أو قول أو حديث للسيدة فاطمة الزهراء عليها السلام أو لأي شخصية أخرى إلا بعد التأكد من وجوده المسبق في أمهات كتب الحديث والتواريخ المعتمدة.
          </p>
        </div>

      </div>

    </div>
  );
};
