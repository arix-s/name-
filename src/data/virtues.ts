import { VirtueHadith } from '../types';

export const VIRTUES_HADITHS: VirtueHadith[] = [
  {
    id: 'bidah',
    title: 'حديث: فاطمة بضعة مني يريبني ما يريبها',
    arabicText: 'فاطمةُ بَضْعَةٌ مِنِّي، فَمَنْ أَغْضَبَهَا أَغْضَبَنِي، وفي لفظ: يُؤْذِينِي مَا آذَاهَا، وَيَرِيبُنِي مَا رَابَهَا.',
    sourcesList: [
      { book: 'صحيح البخاري', author: 'الإمام البخاري', hadithNum: 'ح 3714 و 3767', volPage: 'ج 4 ص 213', school: 'sunni' },
      { book: 'صحيح مسلم', author: 'الإمام مسلم', hadithNum: 'ح 2449', volPage: 'ج 4 ص 1903', school: 'sunni' },
      { book: 'الأمالي', author: 'الشيخ الصدوق', hadithNum: 'ح 165', volPage: 'ص 104', school: 'shia' },
      { book: 'الكافي', author: 'الشيخ الكليني', hadithNum: 'ح 3', volPage: 'ج 1 ص 459', school: 'shia' }
    ],
    status: 'authentic',
    gradingBySchool: {
      sunni: 'صحيح ب أعلى درجات الصحة ومجمع عليه في الصحاح',
      shia: 'متواتر ومقطوع بصحته عند أئمة الحديث الشيعة'
    },
    contextNotes: 'يعتبر هذا الحديث المقياس والمعيار المبدئي في معرفة رضا الله ورسوله وغضبهما.'
  },
  {
    id: 'sayyidat_nisa',
    title: 'حديث: فاطمة سيدة نساء أهل الجنة وسيدة نساء العالمين',
    arabicText: 'يَا فَاطِمَةُ، أَمَا تَرْضَيْنَ أَنْ تَكُونِي سَيِّدَةَ نِسَاءِ أَهْلِ الْجَنَّةِ؟ أَوْ سَيِّدَةَ نِسَاءِ الْمُؤْمِنِينَ؟',
    sourcesList: [
      { book: 'صحيح البخاري', author: 'الإمام البخاري', hadithNum: 'ح 3624 و 6285', volPage: 'ج 4 ص 209', school: 'sunni' },
      { book: 'سنن الترمذي', author: 'الإمام الترمذي', hadithNum: 'ح 3888', volPage: 'ج 5 ص 703', school: 'sunni' },
      { book: 'الأمالي', author: 'الشيخ الطوسي', hadithNum: 'ح 12', volPage: 'ص 24', school: 'shia' },
      { book: 'خصائص أمير المؤمنين', author: 'الإمام النسائي', hadithNum: 'ح 128', volPage: 'ص 124', school: 'sunni' }
    ],
    status: 'authentic',
    gradingBySchool: {
      sunni: 'صحيح متفق عليه عند أئمة الحديث',
      shia: 'صحيح متواتر بين الفئتين'
    },
    contextNotes: 'إثبات الفضل والمقام المطلق للسيدة فاطمة الزهراء على نساء العالمين.'
  },
  {
    id: 'yaghdbu_llah',
    title: 'حديث: إن الله يغضب لغضبك ويرضى لرضاك',
    arabicText: 'يَا فَاطِمَةُ، إِنَّ اللَّهَ يَغْضَبُ لِغَضَبِكِ، وَيَرْضَى لِرِضَاكِ.',
    sourcesList: [
      { book: 'المستدرك على الصحيحين', author: 'الحاكم النيسابوري', hadithNum: 'ح 4730', volPage: 'ج 3 ص 167', school: 'sunni' },
      { book: 'مجمع الزوائد', author: 'الهيثمي', hadithNum: 'ح 15234', volPage: 'ج 9 ص 203', school: 'sunni' },
      { book: 'الأمالي', author: 'الشيخ المفيد', hadithNum: 'ح 2', volPage: 'ص 94', school: 'shia' },
      { book: 'علل الشرائع', author: 'الشيخ الصدوق', hadithNum: 'ح 1', volPage: 'ج 1 ص 186', school: 'shia' }
    ],
    status: 'authentic',
    gradingBySchool: {
      sunni: 'صححه الحاكم ووافقه طائفة من الحفاظ، ووضعه آخرون في الحسن لغرابة إسناده مع شواهده في البخاري',
      shia: 'صحيح ومستفيض في المذهب الشيعي ومعتد به عقيدياً'
    },
    contextNotes: 'بيان ارتباط غضب الله عز وجل المباشر بغضب السيدة فاطمة الزهراء.'
  },
  {
    id: 'tasbeeh',
    title: 'حديث: تسبيح فاطمة الزهراء عليها السلام',
    arabicText: 'ألا أُعلمكِ ما هو خير لكِ من خادم؟ تسبحين الله ثلاثاً وثلاثين، وتحمدين ثلاثاً وثلاثين، وتكبرين أربعاً وثلاثين عند منامكِ ودبر كل صلاة.',
    sourcesList: [
      { book: 'صحيح البخاري', author: 'الإمام البخاري', hadithNum: 'ح 3113 و 5361', volPage: 'ج 3 ص 1182', school: 'sunni' },
      { book: 'الكافي', author: 'الشيخ الكليني', hadithNum: 'ح 1', volPage: 'ج 3 ص 341', school: 'shia' },
      { book: 'من لا يحضره الفقيه', author: 'الشيخ الصدوق', hadithNum: 'ح 920', volPage: 'ج 1 ص 320', school: 'shia' }
    ],
    status: 'authentic',
    gradingBySchool: {
      sunni: 'صحيح ب أعلى المراتب ومجمع عليه',
      shia: 'من أحب الأذكار المستحبة الشريفة ب أسانيد صحيحة متواترة'
    },
    contextNotes: 'التسبيح المشهور (34 تكبيرة، 33 تحميدة، 33 تسبيحة) هدية النبي ﷺ لفاطمة لما اشتكت شدة العمل والرحى.'
  }
];
