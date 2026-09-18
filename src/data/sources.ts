import { SourceBook } from '../types';

export const SOURCES_DATABASE: SourceBook[] = [
  // Sunni Sources
  {
    id: 'bukhari',
    title: 'صحيح البخاري',
    author: 'محمد بن إسماعيل البخاري',
    authorDeath: '256 هـ',
    school: 'sunni',
    century: 'القرن 3 هـ',
    type: 'حديث نبوي',
    link: '#',
    narrationsCount: 42,
    description: 'أصح كتاب عند أهل السنة والجماعة بعد القرآن الكريم، يحتوي على أحاديث بضعة الرسول وتاريخ وفاتها ومنازعتها في فدك.'
  },
  {
    id: 'muslim',
    title: 'صحيح مسلم',
    author: 'مسلم بن الحجاج النيسابوري',
    authorDeath: '261 هـ',
    school: 'sunni',
    century: 'القرن 3 هـ',
    type: 'حديث نبوي',
    link: '#',
    narrationsCount: 35,
    description: 'ثاني أصح الكتب الحديثية عند أهل السنة، يتضمن فضائل فاطمة الزهراء وآية التطهير وآية المباهلة.'
  },
  {
    id: 'tirmidhi',
    title: 'سنن الترمذي',
    author: 'محمد بن عيسى الترمذي',
    authorDeath: '279 هـ',
    school: 'sunni',
    century: 'القرن 3 هـ',
    type: 'حديث نبوي',
    link: '#',
    narrationsCount: 28,
    description: 'من جوامع الأحاديث عند السنة، يورد أحاديث فضائل أهل البيت ومكانة فاطمة وسيدة نساء أهل الجنة.'
  },
  {
    id: 'nasai',
    title: 'السنن الكبرى وتسمية خصائص أمير المؤمنين',
    author: 'أحمد بن شعيب النسائي',
    authorDeath: '303 هـ',
    school: 'sunni',
    century: 'القرن 4 هـ',
    type: 'حديث وخصائص',
    link: '#',
    narrationsCount: 22,
    description: 'يتضمن كتاب خصائص علي بن أبي طالب ومرويات زواج فاطمة ومكانتها عند النبي ﷺ.'
  },
  {
    id: 'ahmad',
    title: 'مسند الإمام أحمد بن حنبل',
    author: 'أحمد بن حنبل',
    authorDeath: '241 هـ',
    school: 'sunni',
    century: 'القرن 3 هـ',
    type: 'مسند حديثي',
    link: '#',
    narrationsCount: 54,
    description: 'أكبر المسانيد الحديثية، يحتوي على مرويات متفرقة في زواجها وحياتها وفضائلها.'
  },
  {
    id: 'ibn_saad',
    title: 'الطبقات الكبرى',
    author: 'محمد بن سعد كاتب الواقدي',
    authorDeath: '230 هـ',
    school: 'sunni',
    century: 'القرن 3 هـ',
    type: 'تراجم وتاريخ',
    link: '#',
    narrationsCount: 31,
    description: 'من أقدم كتب التراجم، أفرد جزءاً لنساء أهل البيت والتراجم المبكرة لفاطمة الزهراء.'
  },
  {
    id: 'baladhuri',
    title: 'أنساب الأشراف',
    author: 'أحمد بن يحيى البلاذري',
    authorDeath: '279 هـ',
    school: 'sunni',
    century: 'القرن 3 هـ',
    type: 'تاريخ وأنساب',
    link: '#',
    narrationsCount: 26,
    description: 'مصدر تاريخي مبكر يروي أحداث السقيفة وما جرى حول بيت فاطمة وأخبار فدك.'
  },
  {
    id: 'tabari',
    title: 'تاريخ الأمم والملوك (تاريخ الطبري)',
    author: 'محمد بن جرير الطبري',
    authorDeath: '310 هـ',
    school: 'sunni',
    century: 'القرن 4 هـ',
    type: 'تاريخ',
    link: '#',
    narrationsCount: 48,
    description: 'أهم موسوعة تاريخية إسلامية مبكرة تنقل المرويات بالأسانيد دون التزام بالصحة المطلقة.'
  },
  {
    id: 'isabah',
    title: 'الإصابة في تمييز الصحابة',
    author: 'أحمد بن علي بن حجر العسقلاني',
    authorDeath: '852 هـ',
    school: 'sunni',
    century: 'القرن 9 هـ',
    type: 'تراجم ورجال',
    link: '#',
    narrationsCount: 19,
    description: 'ترجمة موسعة للسيدة فاطمة والتحقيق في سنوات ولادتها ووفاتها والمحسن بن علي.'
  },
  {
    id: 'fath_bari',
    title: 'فتح الباري شرح صحيح البخاري',
    author: 'ابن حجر العسقلاني',
    authorDeath: '852 هـ',
    school: 'sunni',
    century: 'القرن 9 هـ',
    type: 'شرح حديث',
    link: '#',
    narrationsCount: 38,
    description: 'أعظم شرح لصحيح البخاري، يحلل أحاديث غضب فاطمة وميراث الأنبياء ووفاتها ودفنها ليلًا.'
  },

  // Shia Imami Sources
  {
    id: 'kafi',
    title: 'الكافي (الاصول والفروع)',
    author: 'محمد بن يعقوب الكليني',
    authorDeath: '329 هـ',
    school: 'shia',
    century: 'القرن 4 هـ',
    type: 'حديث إمامي',
    link: '#',
    narrationsCount: 65,
    description: 'أجلّ الكتب الأربعة عند الشيعة الإمامية، ينقل أبواب تاريخ ولادة فاطمة ومقاماتها ووفاتها.'
  },
  {
    id: 'faqih',
    title: 'من لا يحضره الفقيه',
    author: 'محمد بن علي بن بابويه (الشيخ الصدوق)',
    authorDeath: '381 هـ',
    school: 'shia',
    century: 'القرن 4 هـ',
    type: 'حديث وفقه',
    link: '#',
    narrationsCount: 29,
    description: 'من الكتب الأربعة للإمامية، يتضمن أحكام المهر والزواج والتسبيح المنسوب للسيدة فاطمة.'
  },
  {
    id: 'tahdhib',
    title: 'تهذيب الأحكام',
    author: 'محمد بن الحسن الطوسي (شيخ الطائفة)',
    authorDeath: '460 هـ',
    school: 'shia',
    century: 'القرن 5 هـ',
    type: 'حديث وفقه',
    link: '#',
    narrationsCount: 24,
    description: 'جامع حديثي وفقهي يتضمن زيارات السيدة فاطمة والروايات في موضع قبرها.'
  },
  {
    id: 'irshad',
    title: 'الإرشاد في معرفة حجج الله على العباد',
    author: 'محمد بن محمد بن النعمان (الشيخ المفيد)',
    authorDeath: '413 هـ',
    school: 'shia',
    century: 'القرن 5 هـ',
    type: 'تاريخ وسير',
    link: '#',
    narrationsCount: 40,
    description: 'كتاب تاريخي عقدي يعرض سيرة أهل البيت، وتاريخ ولادة فاطمة وأولادها وزواجها.'
  },
  {
    id: 'dalail',
    title: 'دلائل الإمامة',
    author: 'محمد بن جرير بن رستم الطبري (الشيخ الشيعي)',
    authorDeath: 'القرن 4/5 هـ',
    school: 'shia',
    century: 'القرن 5 هـ',
    type: 'سير ودلائل',
    link: '#',
    narrationsCount: 33,
    description: 'أفرد أبواباً خاصة بمسند فاطمة الزهراء، ودلائل ولادتها ووفاتها وروايات فدك وشهادتها.'
  },
  {
    id: 'ihtijaj',
    title: 'الاحتجاج',
    author: 'أحمد بن علي بن أبي طالب الطبرسي',
    authorDeath: '588 هـ',
    school: 'shia',
    century: 'القرن 6 هـ',
    type: 'احتجاجات ومناظرات',
    link: '#',
    narrationsCount: 27,
    description: 'المصدر الأبرز في نقل نص خطبة فدك الشريفة ومناظرة فاطمة مع المهاجرين والأنصار.'
  },
  {
    id: 'bihar',
    title: 'بحار الأنوار الجامعة لدرر أخبار الأئمة الأطهار',
    author: 'محمد باقر المجلسي',
    authorDeath: '1111 هـ',
    school: 'shia',
    century: 'القرن 12 هـ',
    type: 'موسوعة حديثية',
    link: '#',
    narrationsCount: 120,
    description: 'أكبر موسوعة حديثية شيعية، خُصص المجلد 43 كاملاً لسيرة السيدة فاطمة الزهراء.'
  },
  {
    id: 'sulaym',
    title: 'كتاب سليم بن قيس الهلالي',
    author: 'سليم بن قيس الهلالي (مع توضيح الخلاف حول نسبته)',
    authorDeath: '76 هـ / القرن 1 هـ',
    school: 'shia',
    century: 'القرن 1 هـ',
    type: 'تاريخ ونصوص مبكرة',
    link: '#',
    narrationsCount: 15,
    description: 'أقدم مصدر يُنسب للشيخ سليم بن قيس، ويتضمن روايات حول ما جرى بعد وفاة النبي ﷺ، مع توضيح الخلاف بين المحققين في نسبته.'
  }
];
