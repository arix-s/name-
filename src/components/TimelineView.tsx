import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { EventCard } from './EventCard';
import { Clock, Filter, Compass, ChevronDown } from 'lucide-react';

export const TimelineView: React.FC = () => {
  const { timelineEvents, navigateToEvent } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'الكل (21 حدثاً)' },
    { id: 'النشأة والولادة', label: 'النشأة والولادة' },
    { id: 'الهجرة والمدينة', label: 'الهجرة والمدينة' },
    { id: 'الحياة الأسرية', label: 'الحياة الأسرية' },
    { id: 'قضية فدك', label: 'قضية فدك' },
    { id: 'أحداث الدار', label: 'أحداث الدار' },
    { id: 'المرض والوفاة', label: 'المرض والوفاة' },
  ];

  const filteredEvents = activeCategory === 'all'
    ? timelineEvents
    : timelineEvents.filter(e => e.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
          <Clock className="w-4 h-4 text-amber-400" />
          <span>المسار التاريخي التفاعلي الشامل</span>
        </div>
        <h1 className="font-amiri text-4xl sm:text-5xl font-bold text-slate-100 mb-4">
          الخط الزمني لسيرة السيدة فاطمة الزهراء عليها السلام
        </h1>
        <p className="font-cairo text-base text-slate-300 leading-relaxed">
          تتبع محطات السيرة الشريفة من الولادة الشريفة بمكة المكرمة وصولاً إلى أحداث ما بعد النبوة والمثوى الأخير.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeCategory === cat.id
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 font-bold scale-105'
                : 'glass-panel text-slate-300 hover:text-amber-300 border border-slate-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Timeline Layout */}
      <div className="relative border-r-2 border-amber-500/20 mr-4 sm:mr-8 pr-6 sm:pr-10 space-y-10">
        {filteredEvents.map((event, index) => (
          <div key={event.id} className="relative group">
            
            {/* Timeline Dot */}
            <div className="absolute -right-[31px] sm:-right-[47px] top-6 w-5 h-5 rounded-full bg-slate-900 border-2 border-amber-400 group-hover:scale-125 group-hover:bg-amber-400 transition-all duration-300 shadow-md shadow-amber-500/30 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:bg-slate-950" />
            </div>

            {/* Event Card Container */}
            <EventCard event={event} />
          </div>
        ))}
      </div>

    </div>
  );
};
