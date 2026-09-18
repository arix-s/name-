import React, { createContext, useContext, useState, useEffect } from 'react';
import { SourceBook, TimelineEvent, Personality, BookmarkItem, School, AuthenticityStatus } from '../types';
import { SOURCES_DATABASE } from '../data/sources';
import { TIMELINE_EVENTS } from '../data/timelineEvents';
import { PERSONALITIES_DATABASE } from '../data/personalities';

export type NavTab = 
  | 'home'
  | 'timeline'
  | 'sources'
  | 'compare'
  | 'figures'
  | 'quran_virtues'
  | 'fadak'
  | 'muhsin'
  | 'house_events'
  | 'cause_of_passing'
  | 'tomb'
  | 'methodology'
  | 'admin'
  | 'bookmarks'
  | 'event_detail'
  | 'figure_detail';

interface AppContextType {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  selectedEventSlug: string | null;
  setSelectedEventSlug: (slug: string | null) => void;
  selectedFigureId: string | null;
  setSelectedFigureId: (id: string | null) => void;
  
  // Modals for deep detail inspection
  activeSourceModal: SourceBook | null;
  setActiveSourceModal: (source: SourceBook | null) => void;
  activeNarratorModal: string | null;
  setActiveNarratorModal: (narrator: string | null) => void;
  activeDisputedModal: { title: string; explanation: string } | null;
  setActiveDisputedModal: (data: { title: string; explanation: string } | null) => void;
  
  // Search state
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  
  // Theme
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  
  // Bookmarks
  bookmarks: BookmarkItem[];
  addBookmark: (item: Omit<BookmarkItem, 'timestamp'>) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;

  // Dynamic state for Admin edits
  sources: SourceBook[];
  timelineEvents: TimelineEvent[];
  personalities: Personality[];
  addOrUpdateSource: (source: SourceBook) => void;
  addOrUpdateTimelineEvent: (event: TimelineEvent) => void;
  addOrUpdatePersonality: (personality: Personality) => void;

  // Navigation Helper
  navigateToEvent: (slug: string) => void;
  navigateToFigure: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [selectedEventSlug, setSelectedEventSlug] = useState<string | null>(null);
  const [selectedFigureId, setSelectedFigureId] = useState<string | null>(null);
  
  // Inspection Modals
  const [activeSourceModal, setActiveSourceModal] = useState<SourceBook | null>(null);
  const [activeNarratorModal, setActiveNarratorModal] = useState<string | null>(null);
  const [activeDisputedModal, setActiveDisputedModal] = useState<{ title: string; explanation: string } | null>(null);

  // Search
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Theme
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Bookmarks
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>(() => {
    try {
      const saved = localStorage.getItem('zahra_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Dynamic Data
  const [sources, setSources] = useState<SourceBook[]>(() => {
    try {
      const saved = localStorage.getItem('zahra_sources');
      return saved ? JSON.parse(saved) : SOURCES_DATABASE;
    } catch {
      return SOURCES_DATABASE;
    }
  });

  const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>(() => {
    try {
      const saved = localStorage.getItem('zahra_timeline_events');
      return saved ? JSON.parse(saved) : TIMELINE_EVENTS;
    } catch {
      return TIMELINE_EVENTS;
    }
  });

  const [personalities, setPersonalities] = useState<Personality[]>(() => {
    try {
      const saved = localStorage.getItem('zahra_personalities');
      return saved ? JSON.parse(saved) : PERSONALITIES_DATABASE;
    } catch {
      return PERSONALITIES_DATABASE;
    }
  });

  useEffect(() => {
    localStorage.setItem('zahra_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem('zahra_sources', JSON.stringify(sources));
  }, [sources]);

  useEffect(() => {
    localStorage.setItem('zahra_timeline_events', JSON.stringify(timelineEvents));
  }, [timelineEvents]);

  useEffect(() => {
    localStorage.setItem('zahra_personalities', JSON.stringify(personalities));
  }, [personalities]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    if (next === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  const addBookmark = (item: Omit<BookmarkItem, 'timestamp'>) => {
    if (bookmarks.some(b => b.id === item.id)) return;
    const newItem: BookmarkItem = { ...item, timestamp: Date.now() };
    setBookmarks(prev => [newItem, ...prev]);
  };

  const removeBookmark = (id: string) => {
    setBookmarks(prev => prev.filter(b => b.id !== id));
  };

  const isBookmarked = (id: string) => bookmarks.some(b => b.id === id);

  const addOrUpdateSource = (source: SourceBook) => {
    setSources(prev => {
      const idx = prev.findIndex(s => s.id === source.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = source;
        return copy;
      }
      return [source, ...prev];
    });
  };

  const addOrUpdateTimelineEvent = (event: TimelineEvent) => {
    setTimelineEvents(prev => {
      const idx = prev.findIndex(e => e.id === event.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = event;
        return copy;
      }
      return [event, ...prev];
    });
  };

  const addOrUpdatePersonality = (p: Personality) => {
    setPersonalities(prev => {
      const idx = prev.findIndex(item => item.id === p.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = p;
        return copy;
      }
      return [p, ...prev];
    });
  };

  const navigateToEvent = (slug: string) => {
    setSelectedEventSlug(slug);
    setActiveTab('event_detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToFigure = (id: string) => {
    setSelectedFigureId(id);
    setActiveTab('figure_detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppContext.Provider value={{
      activeTab,
      setActiveTab,
      selectedEventSlug,
      setSelectedEventSlug,
      selectedFigureId,
      setSelectedFigureId,
      
      activeSourceModal,
      setActiveSourceModal,
      activeNarratorModal,
      setActiveNarratorModal,
      activeDisputedModal,
      setActiveDisputedModal,

      isSearchOpen,
      setIsSearchOpen,
      searchQuery,
      setSearchQuery,

      theme,
      toggleTheme,

      bookmarks,
      addBookmark,
      removeBookmark,
      isBookmarked,

      sources,
      timelineEvents,
      personalities,
      addOrUpdateSource,
      addOrUpdateTimelineEvent,
      addOrUpdatePersonality,

      navigateToEvent,
      navigateToFigure
    }}>
      <div className={theme}>
        {children}
      </div>
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
