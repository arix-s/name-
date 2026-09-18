import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TimelineView } from './components/TimelineView';
import { EventDetailPage } from './components/EventDetailPage';
import { CompareSources } from './components/CompareSources';
import { FadakSermonReader } from './components/FadakSermonReader';
import { MuhsinSection } from './components/MuhsinSection';
import { HouseEventSection } from './components/HouseEventSection';
import { CauseOfPassingSection, TombLocationSection } from './components/CauseOfPassingSection';
import { QuranVersesSection } from './components/QuranVersesSection';
import { PersonalitiesSection, PersonalityDetailPage } from './components/PersonalitiesSection';
import { SourcesSection } from './components/SourcesSection';
import { MethodologySection } from './components/MethodologySection';
import { AdminDashboard } from './components/AdminDashboard';
import { SearchModal } from './components/SearchModal';
import { SourceModal, DisputedModal, BookmarksView } from './components/Modals';
import { FinalReflection, Footer } from './components/FinalReflection';

const AppContent: React.FC = () => {
  const { activeTab } = useApp();

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <HeroSection />
            <TimelineView />
            <CompareSources />
            <FadakSermonReader />
          </>
        );
      case 'timeline':
        return <TimelineView />;
      case 'event_detail':
        return <EventDetailPage />;
      case 'compare':
        return <CompareSources />;
      case 'fadak':
        return <FadakSermonReader />;
      case 'muhsin':
        return <MuhsinSection />;
      case 'house_events':
        return <HouseEventSection />;
      case 'cause_of_passing':
        return <CauseOfPassingSection />;
      case 'tomb':
        return <TombLocationSection />;
      case 'quran_virtues':
        return <QuranVersesSection />;
      case 'figures':
        return <PersonalitiesSection />;
      case 'figure_detail':
        return <PersonalityDetailPage />;
      case 'sources':
        return <SourcesSection />;
      case 'methodology':
        return <MethodologySection />;
      case 'admin':
        return <AdminDashboard />;
      case 'bookmarks':
        return <BookmarksView />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-cairo selection:bg-amber-500 selection:text-slate-950 dir-rtl" dir="rtl">
      <Navbar />
      <main className="flex-grow">
        {renderTabContent()}
        <FinalReflection />
      </main>
      <Footer />

      {/* Global Inspection & Search Modals */}
      <SearchModal />
      <SourceModal />
      <DisputedModal />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
