/**
 * All human-facing copy for the three locales. Structure is identical across
 * locales so a single set of components renders any language. Section and
 * feature `id`s are stable across locales (used to attach the right screenshot
 * and icon). Copy authored/refined by the trilingual content workflow.
 *
 * Product: "معارف سجادية" (Maarif Sajjadiya) — a companion app for the ziyarat
 * walk: an ordered route of stations pinned to numbered poles + GPS, with
 * adhkar/du'as (read + audio) at each station, a per-station progress tracker,
 * roadside services (medical / sanitary / landmarks), a recitations library, and
 * a knowledge competition (quizzes + points). Offline-capable, trilingual, free.
 * Published by the Imam Zayn al-Abidin (as) Foundation. PRE-LAUNCH (see soonHint).
 */
import type { Locale } from '@/site.config';

export interface Content {
  locale: Locale;
  dir: 'rtl' | 'ltr';
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  };
  brand: { name: string; nameLatin: string; org: string };
  nav: { features: string; content: string; faq: string; download: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaHint: string; // shown once the app is live
    soonHint: string; // shown while pre-launch (SITE.launch.live === false)
    scanHint: string;
    freeLabel: string;
    platformsLabel: string;
  };
  trust: { items: { value: string; label: string }[] };
  showcase: { eyebrow: string; title: string; lead: string; bullets: string[] };
  sections: { id: 'amenities' | 'recitations' | 'competition' | 'journey'; eyebrow: string; title: string; body: string }[];
  featuresHeading: { title: string; subtitle: string };
  features: { id: 'offline' | 'gps' | 'audio' | 'notifications' | 'trilingual' | 'progress'; title: string; description: string }[];
  faqHeading: string;
  faq: { q: string; a: string }[];
  finalCta: { title: string; subtitle: string };
  footer: { tagline: string; rights: string; comingSoon: string };
  alt: {
    heroPhone: string;
    stationsPhone: string;
    amenitiesPhone: string;
    recitationsPhone: string;
    competitionPhone: string;
    appIcon: string;
  };
}

const ar: Content = {
  locale: 'ar',
  dir: 'rtl',
  seo: {
    title: 'معارف سجادية | رفيق الزائر في طريقه، محطةً محطة',
    description:
      'تطبيق معارف سجادية: دليلك في طريق الزيارة محطةً محطة على امتداد الأعمدة المرقّمة، مع أذكار وأدعية كل محطة مقروءةً ومسموعة، وخدمات الطريق الطبية والصحية، ومسابقة معرفية بالنقاط. يعمل دون إنترنت، بثلاث لغات، ومجاناً.',
    keywords: [
      'معارف سجادية',
      'تطبيق الزيارة',
      'طريق الزيارة',
      'مسير الزيارة',
      'المشي إلى كربلاء',
      'زيارة الأربعين',
      'خدمات الزائرين',
      'أذكار المحطات',
      'أدعية الزيارة',
      'تلاوات ومدائح',
      'مسابقة سجادية',
      'مؤسسة الإمام زين العابدين',
      'دليل طريق الزيارة',
      'محطات المشي',
    ],
    ogTitle: 'معارف سجادية | رفيقك في طريق الزيارة، من أوّل عمود إلى المقصد',
    ogDescription:
      'محطات الطريق وأعمدته، وأذكار كل محطة وأدعيتها الصوتية، وخدمات الطريق الطبية والصحية، ومكتبة تلاوات، ومسابقة معرفية بالنقاط — كلها في تطبيق واحد يعمل دون إنترنت، بثلاث لغات، ومجاناً. من مؤسسة الإمام زين العابدين (عليه السلام).',
  },
  brand: {
    name: 'معارف سجادية',
    nameLatin: 'Maarif Sajjadiya',
    org: 'مؤسسة الإمام زين العابدين (عليه السلام)',
  },
  nav: { features: 'المزايا', content: 'المحطات', faq: 'الأسئلة الشائعة', download: 'حمّل التطبيق' },
  hero: {
    eyebrow: 'من مؤسسة الإمام زين العابدين (عليه السلام)',
    title: 'في طريق الزيارة، لا تمشِ وحدك',
    subtitle:
      'معارف سجادية يرافقك محطةً محطة على امتداد أعمدة الطريق: أذكار كل محطة وأدعيتها مقروءةً ومسموعة، وخدمات الطريق الطبية والصحية على مقربة منك، ومسابقة معرفية ترافق خطاك — يعمل دون إنترنت، بثلاث لغات، ومجاناً.',
    ctaHint: 'حمّل التطبيق مجاناً الآن',
    soonHint: 'يصل قريباً بإذن الله إلى App Store وGoogle Play',
    scanHint: 'امسح الرمز لتحميل التطبيق على جهازك',
    freeLabel: 'مجاني بالكامل',
    platformsLabel: 'لأجهزة iOS وAndroid',
  },
  trust: {
    items: [
      { value: 'مجاني بالكامل', label: 'بلا رسوم ولا اشتراكات ولا إعلانات' },
      { value: 'يعمل دون إنترنت', label: 'محتواك محفوظ معك في زحام الطريق' },
      { value: 'مواقع دقيقة', label: 'محطات وخدمات محدّدة على الخريطة' },
      { value: 'بثلاث لغات', label: 'العربية والإنجليزية والفارسية' },
    ],
  },
  showcase: {
    eyebrow: 'المحطات والأذكار',
    title: 'طريقك مقسّمٌ إلى محطات، ولكل محطة ذِكرها',
    lead:
      'قسّمنا لك المسير إلى محطات مرتّبة على امتداد أعمدة الطريق المرقّمة، فلا تحتار أين أنت ولا ما تقرأ؛ لكل محطة أذكارها وأدعيتها بين يديك، وموقعها على الخريطة يدلّك متى بلغتها.',
    bullets: [
      'المسير مقسوم إلى محطات مرتّبة على امتداد أعمدة الطريق المرقّمة',
      'لكل محطة أذكارها وأدعيتها، مقروءةً ومسموعةً بصوت القرّاء',
      'يتعرّف التطبيق على وصولك إلى المحطة من موقعك على الخريطة',
      'مؤشّر تقدّم يسجّل ما أتممته من أذكار كل محطة، خطوةً خطوة',
      'كل ذلك محفوظ ليعمل دون إنترنت حين ينقطع الاتصال في الطريق',
    ],
  },
  sections: [
    {
      id: 'amenities',
      eyebrow: 'خدمات الطريق',
      title: 'كل خدمة يحتاجها الزائر، على مقربة منك',
      body:
        'مراكز الخدمة الطبية والصحية والمعالم موزّعة على مسارك ومحدّدة على الخريطة عند أقرب عمود إليك، لتصل إليها بأيسر طريق حين تحتاجها، أنت ومن يمشي معك.',
    },
    {
      id: 'recitations',
      eyebrow: 'مكتبة الزيارة الصوتية',
      title: 'زيارات وأدعية وقصائد، بأصوات قرّائها',
      body:
        'مكتبة تجمع نصوص الزيارات والأدعية العامة والقصائد، مقروءةً ومسموعةً بأصوات القرّاء، تصحبك في طريقك وفي مقامك، وتعمل دون إنترنت متى حمّلتها.',
    },
    {
      id: 'competition',
      eyebrow: 'مسابقة معارف',
      title: 'اجعل من طريقك معرفةً تُثاب عليها',
      body:
        'أسئلة معرفية مرتبطة بمحطات الطريق تجيب عنها فتجمع النقاط، مع دليل واضح للمسابقة يبيّن لك شروطها ومعاييرها — لتكون خطواتك علماً ومعرفة، لا مشياً فحسب.',
    },
    {
      id: 'journey',
      eyebrow: 'معارف سجادية',
      title: 'كل خطوة معرفة، وكل محطة قُربة',
      body:
        'من مؤسسة الإمام زين العابدين (عليه السلام)، ليكون الطريق إلى مولانا أنساً ومعرفة؛ رفيقٌ في يدك يذكّرك ويرشدك ويقرّبك، من أوّل عمود إلى حيث تقرّ عينك بالمقصد.',
    },
  ],
  featuresHeading: {
    title: 'مزايا تجعله رفيقك في كل خطوة',
    subtitle: 'أدواتٌ صُمّمت لطريق الزيارة الطويل، تعينك حين ينقطع الاتصال ويطول المسير.',
  },
  features: [
    { id: 'offline', title: 'يعمل دون إنترنت', description: 'يحفظ المحطات والأذكار والخدمات على جهازك، فيبقى معك حين ينقطع الاتصال في زحام الطريق.' },
    { id: 'gps', title: 'يرشدك بموقعك', description: 'يتعرّف على وصولك إلى المحطة ويعرض لك أقرب الخدمات إليك على الخريطة بموقعك الحيّ.' },
    { id: 'audio', title: 'تلاوات صوتية', description: 'أذكار المحطات والزيارات والأدعية مسموعةً بأصوات القرّاء، لتردّدها ولسانك مشغول بالخطى.' },
    { id: 'notifications', title: 'تنبيهات وصندوق وارد', description: 'تنبيهات المسير المهمة تصلك أوّلاً بأوّل، وتُحفظ في صندوق وارد داخل التطبيق لتعود إليها.' },
    { id: 'trilingual', title: 'بثلاث لغات', description: 'واجهة ومحتوى بالعربية والإنجليزية والفارسية، ليرافق الزائر أينما كان لسانه.' },
    { id: 'progress', title: 'تتبّع تقدّمك ونقاطك', description: 'مؤشّر يسجّل ما أتممته من أذكار كل محطة، ونقاطٌ تجمعها في المسابقة مع تقدّمك.' },
  ],
  faqHeading: 'أسئلة يتكرر طرحها قبل التحميل',
  faq: [
    { q: 'ما هو تطبيق معارف سجادية؟', a: 'هو رفيق الزائر في طريقه: يقسّم لك المسير إلى محطات على امتداد أعمدة الطريق، ويهيّئ لكل محطة أذكارها وأدعيتها مقروءةً ومسموعة، ويرشدك إلى الخدمات الطبية والصحية على مسارك، مع مسابقة معرفية بالنقاط. من مؤسسة الإمام زين العابدين (عليه السلام).' },
    { q: 'هل التطبيق مجاني؟', a: 'نعم، معارف سجادية مجاني بالكامل بلا رسوم ولا اشتراكات ولا إعلانات.' },
    { q: 'هل يعمل التطبيق دون إنترنت؟', a: 'نعم، بعد تحميل محتواه تعمل المحطات والأذكار والزيارات وأكثر الخدمات دون حاجة إلى اتصال، وهو ما يعينك حين ينقطع الإنترنت في الطريق. ويزامن التطبيق الجديد في الخلفية متى توفّر الاتصال.' },
    { q: 'كيف يرشدني التطبيق إلى المحطات والخدمات؟', a: 'ترتّب المحطات على امتداد أعمدة الطريق المرقّمة، ويحدّد التطبيق موقعك على الخريطة ليتعرّف على وصولك إلى المحطة ويعرض أقرب الخدمات إليك.' },
    { q: 'متى يتوفّر التطبيق للتحميل؟', a: 'التطبيق قيد الإطلاق، وسيتوفّر قريباً بإذن الله على App Store وGoogle Play. تابِع هذه الصفحة لتكون أوّل من يحمّله فور صدوره.' },
    { q: 'على أي الأجهزة يعمل؟', a: 'يُطلَق التطبيق لأجهزة iOS من App Store ولأجهزة Android من Google Play، بواجهة كاملة بالعربية والإنجليزية والفارسية.' },
  ],
  finalCta: {
    title: 'كن أوّل من يبدأ الطريق مع معارف سجادية',
    subtitle: 'التطبيق يصل قريباً بإذن الله إلى App Store وGoogle Play — هيّئ جهازك، واجعل معارف سجادية رفيقك من أوّل عمود إلى حيث تقرّ عينك بالمقصد.',
  },
  footer: {
    tagline: 'معارف سجادية — رفيق الزائر في طريقه، من إصدار مؤسسة الإمام زين العابدين (عليه السلام).',
    rights: 'جميع الحقوق محفوظة لمؤسسة الإمام زين العابدين (عليه السلام).',
    comingSoon: 'قريباً',
  },
  alt: {
    heroPhone: 'الشاشة الرئيسية لتطبيق معارف سجادية تعرض محطات طريق الزيارة',
    stationsPhone: 'شاشة المحطات في تطبيق معارف سجادية تعرض محطة على الطريق مع أذكارها وأدعيتها',
    amenitiesPhone: 'شاشة خدمات الطريق تعرض المراكز الطبية والصحية على الخريطة عند أقرب عمود',
    recitationsPhone: 'شاشة المكتبة الصوتية تعرض زيارة أو دعاءً مع مشغّل صوتي بصوت القارئ',
    competitionPhone: 'شاشة المسابقة تعرض سؤالاً معرفياً مرتبطاً بإحدى المحطات مع النقاط',
    appIcon: 'أيقونة تطبيق معارف سجادية باللونين الأخضر والذهبي',
  },
};

const en: Content = {
  locale: 'en',
  dir: 'ltr',
  seo: {
    title: 'Maarif Sajjadiya | Your Companion on the Ziyarat Walk, Station by Station',
    description:
      'The Maarif Sajjadiya app: your guide along the ziyarat walk, station by station down the numbered poles, with each station’s adhkar and du’as (read and recited), roadside medical & sanitary services, and a knowledge competition. Works offline, in three languages, free.',
    keywords: [
      'Maarif Sajjadiya',
      'ziyarat walk app',
      'Arbaeen walk',
      'walk to Karbala',
      'pilgrimage companion app',
      'ziyarat route stations',
      'ziyarat supplications',
      'adhkar and du’a app',
      'pilgrim services',
      'audio recitations',
      'Imam Zayn al-Abidin Foundation',
      'offline ziyarat app',
    ],
    ogTitle: 'Maarif Sajjadiya | Your Companion on the Ziyarat Walk, From the First Pole to the Shrine',
    ogDescription:
      'The route’s stations and poles, each station’s adhkar and audio du’as, roadside medical & sanitary services, a recitations library, and a points-based knowledge competition — all in one app that works offline, in three languages, free. From the Imam Zayn al-Abidin (as) Foundation.',
  },
  brand: {
    name: 'Maarif Sajjadiya',
    nameLatin: 'معارف سجادية',
    org: 'The Imam Zayn al-Abidin (peace be upon him) Foundation',
  },
  nav: { features: 'Features', content: 'Stations', faq: 'FAQ', download: 'Download the App' },
  hero: {
    eyebrow: 'From the Imam Zayn al-Abidin (peace be upon him) Foundation',
    title: 'On the Ziyarat Walk, You Don’t Walk Alone',
    subtitle:
      'Maarif Sajjadiya walks with you station by station down the route’s numbered poles: each station’s adhkar and du’as — read and recited aloud — the roadside medical and sanitary services nearest to you, and a knowledge competition to accompany your steps. Works offline, in three languages, free.',
    ctaHint: 'Download the app for free now',
    soonHint: 'Coming soon, God willing, to the App Store and Google Play',
    scanHint: 'Scan the code to download the app to your device',
    freeLabel: 'Completely Free',
    platformsLabel: 'For iOS and Android',
  },
  trust: {
    items: [
      { value: 'Completely Free', label: 'No fees, no subscriptions, no ads' },
      { value: 'Works Offline', label: 'Your content stays with you on the road' },
      { value: 'Precise Locations', label: 'Stations and services pinned on the map' },
      { value: 'Three Languages', label: 'Arabic, English and Persian' },
    ],
  },
  showcase: {
    eyebrow: 'Stations & Adhkar',
    title: 'Your Route Is Divided Into Stations — and Each Station Has Its Own Remembrance',
    lead:
      'We’ve divided the walk into ordered stations along the route’s numbered poles, so you never wonder where you are or what to read; each station’s adhkar and du’as are in your hand, and its place on the map tells you the moment you’ve arrived.',
    bullets: [
      'The walk is split into ordered stations along the route’s numbered poles',
      'Every station has its adhkar and du’as — read and recited by reciters',
      'The app recognizes your arrival at a station from your place on the map',
      'A progress tracker records the adhkar you’ve completed, step by step',
      'It’s all saved to work offline when the signal drops on the road',
    ],
  },
  sections: [
    {
      id: 'amenities',
      eyebrow: 'Roadside Services',
      title: 'Every Service a Pilgrim Needs, Close at Hand',
      body:
        'Medical stations, sanitary facilities, and landmarks are spread along your route and pinned on the map at the pole nearest you, so you can reach them by the shortest path when you — or those walking with you — need them.',
    },
    {
      id: 'recitations',
      eyebrow: 'Audio Ziyarat Library',
      title: 'Ziyarat, Du’as and Elegies — in the Voices of Their Reciters',
      body:
        'A library gathering the texts of ziyarat, general supplications, and elegies — read and recited aloud in the voices of their reciters — to accompany you on the road and at your destination, working offline once you’ve downloaded it.',
    },
    {
      id: 'competition',
      eyebrow: 'The Knowledge Competition',
      title: 'Turn Your Walk Into Knowledge You’re Rewarded For',
      body:
        'Knowledge questions tied to the stations along your route earn you points as you answer them, with a clear competition guide that lays out its terms and criteria — so your steps become learning, not merely walking.',
    },
    {
      id: 'journey',
      eyebrow: 'Maarif Sajjadiya',
      title: 'Every Step a Knowledge, Every Station a Nearness',
      body:
        'From the Imam Zayn al-Abidin (peace be upon him) Foundation, so the road to our master is one of intimacy and knowledge; a companion in your hand that reminds you, guides you, and draws you near — from the first pole to where your eye rests at the destination.',
    },
  ],
  featuresHeading: {
    title: 'Features That Make It Your Companion at Every Step',
    subtitle: 'Tools built for the long ziyarat walk — there for you when the signal drops and the road grows long.',
  },
  features: [
    { id: 'offline', title: 'Works Offline', description: 'Saves stations, adhkar and services to your device, so it stays with you when the connection drops in the crowd of the road.' },
    { id: 'gps', title: 'Guides You by Location', description: 'Recognizes your arrival at a station and shows the services nearest to you on the map, using your live location.' },
    { id: 'audio', title: 'Audio Recitations', description: 'Station adhkar, ziyarat and du’as recited aloud by reciters, so you can repeat them while your steps carry you on.' },
    { id: 'notifications', title: 'Alerts & Inbox', description: 'Important route alerts reach you first, and are saved to an in-app inbox so you can return to them.' },
    { id: 'trilingual', title: 'Three Languages', description: 'Interface and content in Arabic, English and Persian, to accompany the pilgrim in whatever tongue is theirs.' },
    { id: 'progress', title: 'Track Your Progress & Points', description: 'A tracker records the adhkar you’ve completed at each station, and points you gather in the competition as you advance.' },
  ],
  faqHeading: 'Questions People Often Ask Before Downloading',
  faq: [
    { q: 'What is the Maarif Sajjadiya app?', a: 'It’s the pilgrim’s companion on the road: it divides the walk into stations along the route’s numbered poles, prepares each station’s adhkar and du’as (read and recited), guides you to the medical and sanitary services on your route, and adds a points-based knowledge competition. From the Imam Zayn al-Abidin (peace be upon him) Foundation.' },
    { q: 'Is the app free?', a: 'Yes. Maarif Sajjadiya is completely free — no fees, no subscriptions, and no ads.' },
    { q: 'Does the app work offline?', a: 'Yes. Once its content is downloaded, the stations, adhkar, ziyarat and most services work with no connection needed, which helps when the internet drops on the road. The app also syncs new content in the background whenever a connection is available.' },
    { q: 'How does the app guide me to stations and services?', a: 'Stations are arranged along the route’s numbered poles, and the app uses your place on the map to recognize your arrival at a station and show the services nearest to you.' },
    { q: 'When will the app be available to download?', a: 'The app is launching soon and will be available, God willing, on the App Store and Google Play. Follow this page to be among the first to download it the moment it’s released.' },
    { q: 'Which devices does it work on?', a: 'The app launches for iOS on the App Store and for Android on Google Play, with a full interface in Arabic, English and Persian.' },
  ],
  finalCta: {
    title: 'Be Among the First to Set Out With Maarif Sajjadiya',
    subtitle: 'The app is coming soon, God willing, to the App Store and Google Play — ready your device, and make Maarif Sajjadiya your companion from the first pole to where your eye rests at the destination.',
  },
  footer: {
    tagline: 'Maarif Sajjadiya — the pilgrim’s companion on the road, published by the Imam Zayn al-Abidin (peace be upon him) Foundation.',
    rights: 'All rights reserved to the Imam Zayn al-Abidin (peace be upon him) Foundation.',
    comingSoon: 'Coming soon',
  },
  alt: {
    heroPhone: 'The home screen of the Maarif Sajjadiya app showing the stations of the ziyarat walk',
    stationsPhone: 'The stations screen in the Maarif Sajjadiya app showing a station on the route with its adhkar and du’as',
    amenitiesPhone: 'The roadside services screen showing medical and sanitary facilities on the map at the nearest pole',
    recitationsPhone: 'The audio library screen showing a ziyarat or du’a with an audio player in the reciter’s voice',
    competitionPhone: 'The competition screen showing a knowledge question tied to one of the stations, with points',
    appIcon: 'The Maarif Sajjadiya app icon in green and gold',
  },
};

const fa: Content = {
  locale: 'fa',
  dir: 'rtl',
  seo: {
    title: 'معارف سجادیه | همراه زائر در مسیر، ایستگاه به ایستگاه',
    description:
      'اپلیکیشن معارف سجادیه: راهنمای شما در مسیر زیارت، ایستگاه به ایستگاه در امتداد ستون‌های شماره‌دار، همراه با اذکار و ادعیهٔ هر ایستگاه به‌صورت متنی و صوتی، خدمات پزشکی و بهداشتی مسیر، و مسابقهٔ معرفتی امتیازی. بدون اینترنت، به سه زبان، و رایگان.',
    keywords: [
      'معارف سجادیه',
      'اپلیکیشن زیارت',
      'مسیر زیارت',
      'پیاده‌روی اربعین',
      'پیاده‌روی کربلا',
      'خدمات زائران',
      'اذکار ایستگاه‌ها',
      'ادعیهٔ زیارت',
      'زیارات و مداحی صوتی',
      'مسابقهٔ سجادی',
      'مؤسسهٔ امام زین‌العابدین',
      'راهنمای مسیر زیارت',
    ],
    ogTitle: 'معارف سجادیه | همراه شما در مسیر زیارت، از نخستین ستون تا مقصد',
    ogDescription:
      'ایستگاه‌ها و ستون‌های مسیر، اذکار و ادعیهٔ صوتی هر ایستگاه، خدمات پزشکی و بهداشتی مسیر، کتابخانهٔ تلاوت، و مسابقهٔ معرفتی امتیازی — همه در یک اپلیکیشن که بدون اینترنت، به سه زبان و رایگان کار می‌کند. از مؤسسهٔ امام زین‌العابدین (علیه‌السلام).',
  },
  brand: {
    name: 'معارف سجادیه',
    nameLatin: 'Maarif Sajjadiya',
    org: 'مؤسسهٔ امام زین‌العابدین (علیه‌السلام)',
  },
  nav: { features: 'ویژگی‌ها', content: 'ایستگاه‌ها', faq: 'پرسش‌های متداول', download: 'دانلود اپلیکیشن' },
  hero: {
    eyebrow: 'از مؤسسهٔ امام زین‌العابدین (علیه‌السلام)',
    title: 'در مسیر زیارت، تنها گام برنمی‌داری',
    subtitle:
      'معارف سجادیه ایستگاه به ایستگاه در امتداد ستون‌های شماره‌دار مسیر همراه شماست: اذکار و ادعیهٔ هر ایستگاه به‌صورت متنی و صوتی، نزدیک‌ترین خدمات پزشکی و بهداشتی مسیر، و مسابقه‌ای معرفتی همراه گام‌هایتان — بدون اینترنت، به سه زبان، و رایگان.',
    ctaHint: 'همین حالا رایگان دانلود کنید',
    soonHint: 'به‌زودی ان‌شاءالله در App Store و Google Play',
    scanHint: 'برای دانلود روی دستگاه خود، کد را اسکن کنید',
    freeLabel: 'کاملاً رایگان',
    platformsLabel: 'برای iOS و Android',
  },
  trust: {
    items: [
      { value: 'کاملاً رایگان', label: 'بدون هزینه، اشتراک و تبلیغات' },
      { value: 'بدون اینترنت', label: 'محتوای شما در شلوغی مسیر همراهتان است' },
      { value: 'موقعیت دقیق', label: 'ایستگاه‌ها و خدمات روی نقشه مشخص‌اند' },
      { value: 'به سه زبان', label: 'عربی، انگلیسی و فارسی' },
    ],
  },
  showcase: {
    eyebrow: 'ایستگاه‌ها و اذکار',
    title: 'مسیر شما به ایستگاه‌ها تقسیم شده، و هر ایستگاه ذکر خود را دارد',
    lead:
      'مسیر را برایتان به ایستگاه‌هایی منظم در امتداد ستون‌های شماره‌دار تقسیم کرده‌ایم تا هرگز در نمانید که کجایید و چه بخوانید؛ اذکار و ادعیهٔ هر ایستگاه در دست شماست و جای آن روی نقشه، لحظهٔ رسیدنتان را نشان می‌دهد.',
    bullets: [
      'مسیر به ایستگاه‌هایی منظم در امتداد ستون‌های شماره‌دار تقسیم شده است',
      'هر ایستگاه اذکار و ادعیهٔ خود را دارد، متنی و صوتی با صدای قاریان',
      'اپلیکیشن رسیدن شما به ایستگاه را از موقعیتتان روی نقشه تشخیص می‌دهد',
      'نشانگر پیشرفت، اذکاری را که در هر ایستگاه کامل کرده‌اید ثبت می‌کند',
      'همهٔ اینها ذخیره می‌شود تا هنگام قطع اینترنت در مسیر نیز کار کند',
    ],
  },
  sections: [
    {
      id: 'amenities',
      eyebrow: 'خدمات مسیر',
      title: 'هر خدمتی که زائر نیاز دارد، در دسترس شما',
      body:
        'مراکز خدمات پزشکی و بهداشتی و نشانه‌های مسیر در طول راه شما پخش شده و روی نقشه نزدیک‌ترین ستون به شما مشخص شده‌اند، تا هنگام نیاز، شما و همراهانتان از کوتاه‌ترین راه به آنها برسید.',
    },
    {
      id: 'recitations',
      eyebrow: 'کتابخانهٔ صوتی زیارت',
      title: 'زیارات، ادعیه و اشعار، با صدای قاریانشان',
      body:
        'کتابخانه‌ای که متن زیارات، ادعیهٔ عمومی و اشعار را گرد آورده — متنی و صوتی با صدای قاریان — تا در مسیر و در مقصد همراه شما باشد، و پس از دانلود بدون اینترنت کار کند.',
    },
    {
      id: 'competition',
      eyebrow: 'مسابقهٔ معارف',
      title: 'مسیرتان را به معرفتی که پاداش دارد بدل کنید',
      body:
        'پرسش‌های معرفتی مرتبط با ایستگاه‌های مسیر که با پاسخ به آنها امتیاز جمع می‌کنید، همراه با راهنمایی روشن که شرایط و معیارهای مسابقه را بیان می‌کند — تا گام‌هایتان علم و معرفت باشد، نه تنها راه‌رفتن.',
    },
    {
      id: 'journey',
      eyebrow: 'معارف سجادیه',
      title: 'هر گام، معرفتی؛ و هر ایستگاه، قربتی',
      body:
        'از مؤسسهٔ امام زین‌العابدین (علیه‌السلام)، تا راه به‌سوی مولا اُنس و معرفت باشد؛ همراهی در دست شما که یادآوری می‌کند، راه می‌نماید و نزدیک می‌سازد، از نخستین ستون تا آنجا که چشمتان به مقصد روشن شود.',
    },
  ],
  featuresHeading: {
    title: 'ویژگی‌هایی که آن را همراه هر گام شما می‌کند',
    subtitle: 'ابزارهایی ساخته‌شده برای مسیر طولانی زیارت — هنگامی که اینترنت قطع می‌شود و راه دراز می‌گردد، در کنار شمایند.',
  },
  features: [
    { id: 'offline', title: 'کار بدون اینترنت', description: 'ایستگاه‌ها، اذکار و خدمات را روی دستگاه شما ذخیره می‌کند تا هنگام قطع اتصال در شلوغی مسیر همراهتان بماند.' },
    { id: 'gps', title: 'راهنمایی با موقعیت شما', description: 'رسیدن شما به ایستگاه را تشخیص می‌دهد و نزدیک‌ترین خدمات را با موقعیت زندهٔ شما روی نقشه نشان می‌دهد.' },
    { id: 'audio', title: 'تلاوت‌های صوتی', description: 'اذکار ایستگاه‌ها، زیارات و ادعیه با صدای قاریان، تا در حال گام‌برداشتن آنها را تکرار کنید.' },
    { id: 'notifications', title: 'اعلان‌ها و صندوق ورودی', description: 'اعلان‌های مهم مسیر زودتر از همه به شما می‌رسد و در صندوق ورودی درون اپلیکیشن ذخیره می‌شود تا بازگردید.' },
    { id: 'trilingual', title: 'به سه زبان', description: 'رابط و محتوا به عربی، انگلیسی و فارسی، تا با زائر به هر زبانی که دارد همراه شود.' },
    { id: 'progress', title: 'پیگیری پیشرفت و امتیاز', description: 'نشانگری که اذکار کامل‌شدهٔ هر ایستگاه را ثبت می‌کند، و امتیازهایی که همراه با پیشرفتتان در مسابقه جمع می‌کنید.' },
  ],
  faqHeading: 'پرسش‌هایی که پیش از دانلود بارها پرسیده می‌شود',
  faq: [
    { q: 'اپلیکیشن معارف سجادیه چیست؟', a: 'همراه زائر در مسیر است: راه را به ایستگاه‌هایی در امتداد ستون‌های شماره‌دار تقسیم می‌کند، اذکار و ادعیهٔ هر ایستگاه را متنی و صوتی آماده می‌سازد، شما را به خدمات پزشکی و بهداشتی مسیر راهنمایی می‌کند و مسابقه‌ای معرفتی امتیازی دارد. از مؤسسهٔ امام زین‌العابدین (علیه‌السلام).' },
    { q: 'آیا اپلیکیشن رایگان است؟', a: 'بله، معارف سجادیه کاملاً رایگان است، بدون هیچ هزینه، اشتراک یا تبلیغات.' },
    { q: 'آیا اپلیکیشن بدون اینترنت کار می‌کند؟', a: 'بله، پس از دانلود محتوا، ایستگاه‌ها، اذکار، زیارات و بیشتر خدمات بدون نیاز به اتصال کار می‌کنند که هنگام قطع اینترنت در مسیر کمک‌رسان است. اپلیکیشن نیز محتوای تازه را هرگاه اتصال فراهم باشد در پس‌زمینه هماهنگ می‌کند.' },
    { q: 'اپلیکیشن چگونه مرا به ایستگاه‌ها و خدمات راهنمایی می‌کند؟', a: 'ایستگاه‌ها در امتداد ستون‌های شماره‌دار مسیر چیده شده‌اند و اپلیکیشن با موقعیت شما روی نقشه، رسیدنتان به ایستگاه را تشخیص می‌دهد و نزدیک‌ترین خدمات را نشان می‌دهد.' },
    { q: 'اپلیکیشن چه زمانی برای دانلود در دسترس است؟', a: 'اپلیکیشن در آستانهٔ انتشار است و به‌زودی ان‌شاءالله در App Store و Google Play در دسترس خواهد بود. این صفحه را دنبال کنید تا از نخستین کسانی باشید که آن را هنگام انتشار دانلود می‌کنند.' },
    { q: 'روی چه دستگاه‌هایی کار می‌کند؟', a: 'اپلیکیشن برای iOS از App Store و برای Android از Google Play منتشر می‌شود، با رابط کامل به عربی، انگلیسی و فارسی.' },
  ],
  finalCta: {
    title: 'از نخستین کسانی باشید که با معارف سجادیه راه می‌افتند',
    subtitle: 'اپلیکیشن به‌زودی ان‌شاءالله در App Store و Google Play می‌آید — دستگاهتان را آماده کنید و معارف سجادیه را از نخستین ستون تا آنجا که چشمتان به مقصد روشن شود همراه خود سازید.',
  },
  footer: {
    tagline: 'معارف سجادیه — همراه زائر در مسیر، منتشرشده توسط مؤسسهٔ امام زین‌العابدین (علیه‌السلام).',
    rights: 'تمامی حقوق برای مؤسسهٔ امام زین‌العابدین (علیه‌السلام) محفوظ است.',
    comingSoon: 'به‌زودی',
  },
  alt: {
    heroPhone: 'صفحهٔ اصلی اپلیکیشن معارف سجادیه که ایستگاه‌های مسیر زیارت را نمایش می‌دهد',
    stationsPhone: 'صفحهٔ ایستگاه‌ها در اپلیکیشن معارف سجادیه که یک ایستگاه مسیر را همراه با اذکار و ادعیهٔ آن نشان می‌دهد',
    amenitiesPhone: 'صفحهٔ خدمات مسیر که مراکز پزشکی و بهداشتی را روی نقشه نزدیک‌ترین ستون نمایش می‌دهد',
    recitationsPhone: 'صفحهٔ کتابخانهٔ صوتی که یک زیارت یا دعا را همراه با پخش‌کنندهٔ صوتی با صدای قاری نشان می‌دهد',
    competitionPhone: 'صفحهٔ مسابقه که پرسشی معرفتی مرتبط با یکی از ایستگاه‌ها را همراه با امتیاز نمایش می‌دهد',
    appIcon: 'آیکون اپلیکیشن معارف سجادیه به رنگ سبز و طلایی',
  },
};

export const CONTENT: Record<Locale, Content> = { ar, en, fa };
