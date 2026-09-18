export type School = 'shia' | 'sunni' | 'shared' | 'undetermined';

export type AuthenticityStatus = 
  | 'authentic'   // صحيح
  | 'good'        // حسن
  | 'weak'        // ضعيف
  | 'disputed'    // مختلف فيه
  | 'historical'  // تاريخي
  | 'unresolved'; // غير محسوم

export interface SourceBook {
  id: string;
  title: string;
  author: string;
  authorDeath?: string; // e.g. "329 هـ" or "256 هـ"
  authorDeathYear?: string;
  school: School;
  century: string;
  type?: string; // e.g. "حديث", "تاريخ", "تفسير", "رجال"
  link?: string;
  narrationsCount?: number;
  narrationsUsedCount?: number;
  description?: string;
  briefDescription?: string;
  mainTopicsCovered?: string[];
}

export interface Narration {
  id: string;
  text: string;
  bookId: string;
  bookName: string;
  author: string;
  volume?: string;
  page?: string;
  hadithNumber?: string;
  isnad?: string;
  school: School;
  status: AuthenticityStatus;
  scholarGrading: string;
  scholarNotes: string;
  tags?: string[];
}

export interface TimelineEvent {
  id: string;
  title: string;
  titleArabic: string;
  era: 'mecca' | 'medina' | 'post_prophet';
  approxDate: string; // e.g. "5 قبل البعثة / 605 م" or "11 هـ"
  location: string;
  parties: string[];
  shortSummary: string;
  shiaNarrations: Narration[];
  sunniNarrations: Narration[];
  sources: string[];
  status: AuthenticityStatus;
  pointsOfAgreement: string[];
  pointsOfDispute: string[];
  category: string;
  slug: string;
}

export interface Personality {
  id: string;
  name: string;
  title: string;
  lineage: string;
  role: string; // الدور في الأحداث
  bio: string;
  mentionedInNarrationsCount: number;
  sources: string[];
  schoolMention: string;
  tags: string[];
}

export interface QuranVerse {
  id: string;
  title: string;
  surahName: string;
  surahNumber: number;
  verseNumber: string; // e.g. "33" or "23"
  text: string;
  arabicText?: string;
  contextSummary?: string;
  shiaTafsir: {
    summary: string;
    sources: string[];
    mainSources?: string[];
    scholars: string;
  };
  sunniTafsir: {
    summary: string;
    sources: string[];
    mainSources?: string[];
    scholars: string;
  };
}

export interface VirtueHadith {
  id: string;
  title: string;
  arabicText: string;
  hadithText?: string;
  sourcesList: {
    book: string;
    author: string;
    hadithNum?: string;
    volPage?: string;
    school: School;
  }[];
  sourceBook?: string;
  narrator?: string;
  grading?: string;
  consensusLevel?: string;
  explanation?: string;
  status: AuthenticityStatus;
  gradingBySchool: {
    shia?: string;
    sunni?: string;
  };
  contextNotes: string;
}

export interface FadakParagraph {
  id: string;
  paragraphNumber: number;
  paragraphTitle: string;
  text: string;
  shiaSources: string[];
  sunniSources?: string[];
  narrators: string[];
  variantWords?: string;
  investigationNotes: string;
}

export interface CompareMatrixItem {
  id: string;
  topicTitle: string;
  topicSlug: string;
  shiaView: {
    summary: string;
    mainSources: string[];
    hadithStatus: string;
  };
  sunniView: {
    summary: string;
    mainSources: string[];
    hadithStatus: string;
  };
  pointsOfAgreement: string[];
  pointsOfDifference: string[];
  overallEvaluation: string;
}

export interface BookmarkItem {
  id: string;
  type: 'event' | 'narration' | 'figure' | 'verse' | 'hadith';
  title: string;
  snippet: string;
  timestamp: number;
}
