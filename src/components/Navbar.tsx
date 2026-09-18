import React, { useState } from 'react';
import { useApp, NavTab } from '../context/AppContext';
import { 
  BookOpen, 
  Search, 
  Bookmark, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Sparkles, 
  Scale, 
  Users, 
  ShieldCheck, 
  Settings, 
  ScrollText,
  Clock,
  HelpCircle,
  FileText
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    activeTab, 
    setActiveTab, 
    setIsSearchOpen, 
    theme, 
    toggleTheme, 
    bookmarks 
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mainNavItems: { tab: NavTab; label: string; icon: React.ReactNode }[] = [
    { tab: 'home', label: 'الرئيسية', icon: <Sparkles className="w-4 h-4" /> },
    { tab: 'timeline', label: 'الخط الزمني', icon: <Clock className="w-4 h-4" /> },
    { tab: 'compare', label: 'مقارنة المصادر', icon: <Scale className="w-4 h-4" /> },
    { tab: 'fadak', label: 'فدك والخطبة', icon: <ScrollText className="w-4 h-4" /> },
    { tab: 'muhsin', label: 'المحسن بن علي', icon: <ShieldCheck className="w-4 h-4" /> },
    { tab: 'house_events', label: 'حوادث الدار والوفاة', icon: <FileText className="w-4 h-4" /> },
    { tab: 'quran_virtues', label: 'القرآن والفضائل', icon: <BookOpen className="w-4 h-4" /> },
    { tab: 'figures', label: 'الشخصيات', icon: <Users className="w-4 h-4" /> },
    { tab: 'sources', label: 'قاعدة المصادر', icon: <BookOpen className="w-4 h-4" /> },
    { tab: 'methodology', label: 'حول المنهج', icon: <HelpCircle className="w-4 h-4" /> },
    { tab: 'admin', label: 'لوحة التوثيق', icon: <Settings className="w-4 h-4" /> },
  ];

  const handleNavClick = (tab: NavTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-amber-500/20 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Title */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 via-amber-600/30 to-amber-700/20 border border-amber-500/40 flex items-center justify-center text-amber-400 group-hover:border-amber-400 transition-all duration-300 shadow-inner">
            <span className="font-amiri text-2xl font-bold leading-none">ف</span>
          </div>
          <div className="flex flex-col">
            <span className="font-amiri text-xl sm:text-2xl font-bold text-amber-300 group-hover:text-amber-200 transition-colors">
              فاطمة الزهراء <span className="text-xs font-normal text-amber-400/80">عليها السلام</span>
            </span>
            <span className="text-xs text-slate-400 font-cairo">من المهد إلى اللحد — موسوعة توثيقية</span>
          </div>
        </div>

        {/* Desktop Navigation Links (Primary Top Bar) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {mainNavItems.slice(0, 6).map((item) => {
            const isActive = activeTab === item.tab;
            return (
              <button
                key={item.tab}
                onClick={() => handleNavClick(item.tab)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-sm'
                    : 'text-slate-300 hover:text-amber-200 hover:bg-slate-800/50'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}

          {/* Dropdown for Secondary Links */}
          <div className="relative group/menu">
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-amber-200 hover:bg-slate-800/50 transition-all">
              <span>المزيد</span>
              <span className="text-xs">▼</span>
            </button>
            <div className="absolute right-0 top-full mt-1 w-56 glass-panel rounded-xl shadow-2xl border border-amber-500/20 p-2 hidden group-hover/menu:block transition-all z-50">
              {mainNavItems.slice(6).map((item) => (
                <button
                  key={item.tab}
                  onClick={() => handleNavClick(item.tab)}
                  className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-right transition-colors ${
                    activeTab === item.tab
                      ? 'bg-amber-500/20 text-amber-300'
                      : 'text-slate-300 hover:text-amber-200 hover:bg-slate-800/70'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Actions & Utilities */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Global Search Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-300 hover:text-amber-300 transition-all text-sm"
            title="بحث في الروايات والمصادر"
          >
            <Search className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline text-xs text-slate-400">ابحث هنا...</span>
          </button>

          {/* Bookmarks Toggle */}
          <button
            onClick={() => handleNavClick('bookmarks')}
            className={`relative p-2.5 rounded-xl border transition-all ${
              activeTab === 'bookmarks'
                ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:text-amber-300'
            }`}
            title="المفضلة والروابط المحفوظة"
          >
            <Bookmark className="w-4 h-4" />
            {bookmarks.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-slate-950 font-bold text-[10px] rounded-full flex items-center justify-center">
                {bookmarks.length}
              </span>
            )}
          </button>

          {/* Dark / Light Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-amber-300 transition-all"
            title="تبديل الوضع الليلي / الفاتح"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-amber-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-amber-500/20 glass-panel p-4 space-y-1.5 animate-fadeIn">
          {mainNavItems.map((item) => {
            const isActive = activeTab === item.tab;
            return (
              <button
                key={item.tab}
                onClick={() => handleNavClick(item.tab)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    : 'text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
