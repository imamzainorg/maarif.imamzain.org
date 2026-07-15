/**
 * All human-facing copy for the three locales. Structure is identical across
 * locales so a single set of components renders any language. Section and
 * feature `id`s are stable across locales (used to attach the right screenshot
 * and icon).
 *
 * Product: "معارف سجادية" (Maarif Sajjadiya) - "walk and learn". A companion for
 * the ziyarat walk to Karbala: an interactive route map divided into stations
 * pinned to the road's numbered poles; at each station a set of rights from
 * Imam Sajjad's Treatise on Rights (رسالة الحقوق) to read + hear + self-test;
 * an audio library (Qur'an, the Sahifa, Arbaeen elegies by named reciters); a
 * per-station quiz competition with prizes; progress tracking; offline; push +
 * inbox. Published by the Imam Zayn al-Abidin (as) Foundation. PRE-LAUNCH.
 */
import type { Locale } from "@/site.config"

export interface Content {
	locale: Locale
	dir: "rtl" | "ltr"
	seo: {
		title: string
		description: string
		keywords: string[]
		ogTitle: string
		ogDescription: string
	}
	brand: { name: string; nameLatin: string; org: string }
	nav: { features: string; content: string; faq: string; download: string }
	hero: {
		eyebrow: string
		title: string
		subtitle: string
		ctaHint: string // shown once the app is live
		soonHint: string // shown while pre-launch (SITE.launch.live === false)
		scanHint: string
		freeLabel: string
		platformsLabel: string
	}
	trust: { items: { value: string; label: string }[] }
	showcase: {
		eyebrow: string
		title: string
		lead: string
		bullets: string[]
	}
	sections: {
		id: "rights" | "recitations" | "competition" | "journey"
		eyebrow: string
		title: string
		body: string
	}[]
	featuresHeading: { title: string; subtitle: string }
	features: {
		id:
			| "offline"
			| "gps"
			| "progress"
			| "selftest"
			| "notifications"
			| "trilingual"
		title: string
		description: string
	}[]
	faqHeading: string
	faq: { q: string; a: string }[]
	finalCta: { title: string; subtitle: string }
	footer: { tagline: string; rights: string; comingSoon: string }
	alt: {
		heroPhone: string
		stationsPhone: string
		rightsPhone: string
		recitationsPhone: string
		competitionPhone: string
		appIcon: string
	}
}

const ar: Content = {
	locale: "ar",
	dir: "rtl",
	seo: {
		title: "معارف سجادية | امشِ إلى كربلاء وتعلّم رسالة الحقوق، محطةً محطة",
		description:
			"تطبيق معارف سجادية يرافقك في طريقك إلى كربلاء محطةً محطة على أعمدة الطريق: رسالة الحقوق للإمام السجّاد (ع) مقروءةً ومسموعة عند كل محطة، ومكتبة صوتية من القرآن والصحيفة ولطميات الأربعين، ومسابقة بجوائز. يعمل دون إنترنت، بثلاث لغات، ومجاناً.",
		keywords: [
			"معارف سجادية",
			"امشِ وتعلّم",
			"رسالة الحقوق",
			"الإمام زين العابدين",
			"الإمام السجاد",
			"المشي إلى كربلاء",
			"زيارة الأربعين",
			"محطات الطريق",
			"أعمدة الطريق",
			"الصحيفة السجادية",
			"لطميات الأربعين",
			"مسابقة حسينية",
			"تطبيق الزيارة",
			"مؤسسة الإمام زين العابدين",
		],
		ogTitle: "معارف سجادية | رفيقك إلى كربلاء: رسالة الحقوق محطةً محطة",
		ogDescription:
			"خارطة الطريق إلى الحرم الحسيني ومحطاته على الأعمدة، ورسالة الحقوق مقروءةً ومسموعة عند كل محطة، ومكتبة صوتية من القرآن والصحيفة واللطميات، ومسابقة بجوائز - في تطبيق واحد يعمل دون إنترنت، بثلاث لغات، ومجاناً. من مؤسسة الإمام زين العابدين (عليه السلام).",
	},
	brand: {
		name: "معارف سجادية",
		nameLatin: "Maarif Sajjadiya",
		org: "مؤسسة الإمام زين العابدين (عليه السلام)",
	},
	nav: {
		features: "المزايا",
		content: "المحطات",
		faq: "الأسئلة الشائعة",
		download: "حمّل التطبيق",
	},
	hero: {
		eyebrow: "امشِ… وتعلّم",
		title: "في طريقك إلى كربلاء، لا تمشِ وحدك",
		subtitle:
			"معارف سجادية يرافقك على خارطة الطريق محطةً محطة عند كل عمود: يفتح لك في كل محطة باباً من رسالة الحقوق للإمام السجّاد (عليه السلام) مقروءاً ومسموعاً، ويختبر حفظك، ويصحبك بمكتبة صوتية من القرآن والصحيفة ولطميات الأربعين - يعمل دون إنترنت، بثلاث لغات، ومجاناً.",
		ctaHint: "حمّل التطبيق مجاناً الآن",
		soonHint: "يصل قريباً بإذن الله إلى App Store وGoogle Play",
		scanHint: "امسح الرمز لتحميل التطبيق على جهازك",
		freeLabel: "مجاني بالكامل",
		platformsLabel: "لأجهزة iOS وAndroid",
	},
	trust: {
		items: [
			{
				value: "مجاني بالكامل",
				label: "بلا رسوم ولا اشتراكات ولا إعلانات",
			},
			{
				value: "يعمل دون إنترنت",
				label: "محتواك محفوظ معك في زحام الطريق",
			},
			{
				value: "خارطة بالأعمدة",
				label: "محطاتك محدّدة على الطريق بموقعها",
			},
			{ value: "بثلاث لغات", label: "العربية والإنجليزية والفارسية" },
		],
	},
	showcase: {
		eyebrow: "خارطة الرحلة",
		title: "طريقك إلى كربلاء، محطةً محطة على الأعمدة",
		lead: "خارطة تفاعلية ترسم لك الطريق إلى مولانا الحسين (عليه السلام)، مقسوماً إلى محطات مثبّتة على أعمدة الطريق المرقّمة؛ تعرف عند أي عمود أنت، وكم حقّاً في محطتك، وكم بقي من الطريق.",
		bullets: [
			"طريقك إلى الحرم الحسيني مرسومٌ على الخارطة محطةً محطة",
			"كل محطة مثبّتة على أعمدة الطريق المرقّمة ومحدّدة بالكيلومترات",
			"لكل محطة عددٌ من حقوق «رسالة الحقوق» تقرؤها وتستمع إليها",
			"يحدّد التطبيق موقعك ليعرف المحطة التي بلغتها",
			"يسجّل تقدّمك محطةً محطة، ويعمل دون إنترنت في الطريق",
		],
	},
	sections: [
		{
			id: "rights",
			eyebrow: "رسالة الحقوق",
			title: "رسالة الحقوق للإمام السجّاد (عليه السلام)، محطةً محطة",
			body: "خمسون حقّاً من رسالة الحقوق موزّعة على محطات طريقك - تقرأ حقوق كل محطة وتستمع إليها بصوتٍ واضح، ثم تختبر حفظك قبل أن تمضي إلى المحطة التالية، فتصل ومعك زادٌ من المعرفة.",
		},
		{
			id: "recitations",
			eyebrow: "مكتبة صوتية",
			title: "القرآن والصحيفة ولطميات الأربعين، بين سمعك",
			body: "مكتبة صوتية تصحبك في الطريق: تلاوات من القرآن الكريم، والصحيفة السجادية، ولطميات الأربعين بكلمات شعرائها وأصوات قرّائها، مع مشغّلٍ كامل يعمل دون إنترنت.",
		},
		{
			id: "competition",
			eyebrow: "المسابقة والجوائز",
			title: "اختبر نفسك في كل محطة، وتنافس على الجوائز",
			body: "أسئلة مرتبطة بحقوق كل محطة تجيب عنها فتُحسب درجتك وتجمع نقاطك، مع دليلٍ واضح للمسابقة وجوائز قيّمة للمتقدّمين - لتكون خطواتك علماً يُثاب ويُكافأ.",
		},
		{
			id: "journey",
			eyebrow: "امشِ… وتعلّم",
			title: "طريقٌ إلى الحسين (عليه السلام)، ومعرفةٌ في كل خطوة",
			body: "من مؤسسة الإمام زين العابدين (عليه السلام)، ليكون مشيك إلى مولاك أُنساً وعلماً؛ رفيقٌ في يدك يذكّرك بحقوقك، ويصحبك بذكره، ويقرّبك خطوةً خطوة حتى يقرّ طرفك بالحرم.",
		},
	],
	featuresHeading: {
		title: "مزايا تجعله رفيقك في كل خطوة",
		subtitle:
			"أدواتٌ صُمّمت لطريقٍ طويل قد ينقطع فيه الاتصال ويطول فيه المسير.",
	},
	features: [
		{
			id: "offline",
			title: "يعمل دون إنترنت",
			description:
				"يحفظ الخارطة والحقوق والصوتيات على جهازك، فيبقى معك حين ينقطع الاتصال في زحام الطريق.",
		},
		{
			id: "gps",
			title: "يرشدك إلى محطتك",
			description:
				"يحدّد موقعك على الخارطة والعمود الذي بلغته، ليدلّك على محطتك وما حولها من الطريق.",
		},
		{
			id: "progress",
			title: "يسجّل تقدّمك",
			description:
				"مؤشّرٌ يحفظ ما أتممته من حقوق كل محطة، فتعرف أين وصلت وكم بقي أمامك.",
		},
		{
			id: "selftest",
			title: "اختبر نفسك",
			description:
				"بعد حقوق كل محطة، اختبر حفظك بأسئلة قصيرة قبل أن تمضي إلى ما بعدها.",
		},
		{
			id: "notifications",
			title: "تنبيهات وصندوق وارد",
			description:
				"تنبيهات الطريق المهمة تصلك أوّلاً بأوّل، وتُحفظ في صندوق وارد داخل التطبيق لتعود إليها.",
		},
		{
			id: "trilingual",
			title: "بثلاث لغات",
			description:
				"بالعربية والإنجليزية والفارسية، ليرافق الزائر بأيّ لسانٍ جاء.",
		},
	],
	faqHeading: "أسئلة يتكرر طرحها قبل التحميل",
	faq: [
		{
			q: "ما هو تطبيق معارف سجادية؟",
			a: "هو رفيقك في طريقك إلى كربلاء: خارطة تقسّم المسير إلى محطات على أعمدة الطريق، وعند كل محطة حقوقٌ من «رسالة الحقوق» للإمام السجّاد (عليه السلام) مقروءةً ومسموعة، مع مكتبة صوتية ومسابقة بجوائز. شعاره: امشِ وتعلّم. من مؤسسة الإمام زين العابدين (عليه السلام).",
		},
		{
			q: "هل التطبيق مجاني؟",
			a: "نعم، معارف سجادية مجاني بالكامل بلا رسوم ولا اشتراكات ولا إعلانات.",
		},
		{
			q: "هل يعمل التطبيق دون إنترنت؟",
			a: "نعم، بعد تحميل محتواه تعمل الخارطة والحقوق والصوتيات دون حاجة إلى اتصال، وهو ما يعينك حين ينقطع الإنترنت في الطريق، ويزامن الجديد في الخلفية متى توفّر الاتصال.",
		},
		{
			q: "ما علاقة المحطات برسالة الحقوق؟",
			a: "قُسّمت رسالة الحقوق (خمسون حقّاً) على محطات الطريق المثبّتة على الأعمدة؛ تقرأ حقوق كل محطة وتستمع إليها وتختبر حفظك، فتصل ومعك زادٌ من المعرفة.",
		},
		{
			q: "متى يتوفّر التطبيق للتحميل؟",
			a: "التطبيق قيد الإطلاق، وسيتوفّر قريباً بإذن الله على App Store وGoogle Play. تابِع هذه الصفحة لتكون أوّل من يحمّله فور صدوره.",
		},
		{
			q: "على أي الأجهزة يعمل؟",
			a: "يُطلَق التطبيق لأجهزة iOS من App Store ولأجهزة Android من Google Play، بواجهة كاملة بالعربية والإنجليزية والفارسية.",
		},
	],
	finalCta: {
		title: "كن أوّل من يبدأ الطريق مع معارف سجادية",
		subtitle:
			"التطبيق يصل قريباً بإذن الله إلى App Store وGoogle Play - هيّئ جهازك، واجعل «معارف سجادية» رفيقك من أوّل عمود إلى الحرم الحسيني الشريف.",
	},
	footer: {
		tagline:
			"معارف سجادية - رفيق الزائر في طريقه إلى كربلاء، من إصدار مؤسسة الإمام زين العابدين (عليه السلام).",
		rights: "جميع الحقوق محفوظة لمؤسسة الإمام زين العابدين (عليه السلام).",
		comingSoon: "قريباً",
	},
	alt: {
		heroPhone:
			"الشاشة الرئيسية لتطبيق معارف سجادية: زائرٌ يمشي في طريقه إلى كربلاء ولوحةٌ تشير إلى العمود القادم",
		stationsPhone:
			"خارطة الرحلة تعرض الطريق إلى الحرم الحسيني مع محطاته المثبّتة على الأعمدة المرقّمة",
		rightsPhone:
			"شاشة قراءة حقوق المحطة من رسالة الحقوق للإمام زين العابدين (عليه السلام) مع مشغّل صوتي",
		recitationsPhone:
			"شاشة المكتبة الصوتية تعرض تلاوات القرآن والصحيفة ولطميات الأربعين مع مشغّل صوتي",
		competitionPhone:
			"شاشة الاختبار تعرض سؤالاً مرتبطاً بحقوق إحدى المحطات مع خيارات الإجابة",
		appIcon: "أيقونة تطبيق معارف سجادية باللون الأخضر الفيروزي",
	},
}

const en: Content = {
	locale: "en",
	dir: "ltr",
	seo: {
		title: "Maarif Sajjadiya | Walk to Karbala and Learn the Treatise on Rights, Station by Station",
		description:
			"The Maarif Sajjadiya app walks with you toward Karbala station by station along the route’s numbered poles: Imam Sajjad’s Treatise on Rights (Risalat al-Huquq) read and recited at each station, an audio library of Qur’an, the Sahifa and Arbaeen elegies, and a prize competition. Works offline, in three languages, free.",
		keywords: [
			"Maarif Sajjadiya",
			"walk and learn",
			"Risalat al-Huquq",
			"Treatise on Rights",
			"Imam Zayn al-Abidin",
			"Imam Sajjad",
			"walk to Karbala",
			"Arbaeen walk",
			"ziyarat route stations",
			"Sahifa Sajjadiyya",
			"Arbaeen elegies",
			"Husayni competition",
			"ziyarat companion app",
			"Imam Zayn al-Abidin Foundation",
		],
		ogTitle:
			"Maarif Sajjadiya | Your Companion to Karbala: the Treatise on Rights, Station by Station",
		ogDescription:
			"The route map to the Husayni shrine and its stations on the poles, the Treatise on Rights read and recited at each station, an audio library of Qur’an, the Sahifa and elegies, and a prize competition - in one app that works offline, in three languages, free. From the Imam Zayn al-Abidin (as) Foundation.",
	},
	brand: {
		name: "Maarif Sajjadiya",
		nameLatin: "معارف سجادية",
		org: "The Imam Zayn al-Abidin (peace be upon him) Foundation",
	},
	nav: {
		features: "Features",
		content: "The Route",
		faq: "FAQ",
		download: "Download the App",
	},
	hero: {
		eyebrow: "Walk… and learn",
		title: "On Your Way to Karbala, You Don’t Walk Alone",
		subtitle:
			"Maarif Sajjadiya walks with you on the route map, station by station at every pole: at each station it opens a chapter of Imam Sajjad’s Treatise on Rights - read and recited - tests what you’ve learned, and keeps you company with an audio library of Qur’an, the Sahifa, and Arbaeen elegies. Works offline, in three languages, free.",
		ctaHint: "Download the app for free now",
		soonHint: "Coming soon, God willing, to the App Store and Google Play",
		scanHint: "Scan the code to download the app to your device",
		freeLabel: "Completely Free",
		platformsLabel: "For iOS and Android",
	},
	trust: {
		items: [
			{
				value: "Completely Free",
				label: "No fees, subscriptions or ads",
			},
			{
				value: "Works Offline",
				label: "Your content stays with you on the road",
			},
			{
				value: "Mapped by the Poles",
				label: "Your stations pinned along the route",
			},
			{ value: "Three Languages", label: "Arabic, English and Persian" },
		],
	},
	showcase: {
		eyebrow: "The Route Map",
		title: "Your Path to Karbala, Station by Station Along the Poles",
		lead: "An interactive map charts your path to our master al-Husayn (peace be upon him), divided into stations pinned to the route’s numbered poles; you always know which pole you’re at, how many rights are in your station, and how far remains.",
		bullets: [
			"Your path to the Husayni shrine is drawn on the map, station by station",
			"Each station is pinned to the route’s numbered poles and marked in kilometers",
			"Every station holds a set of rights from the Treatise on Rights to read and hear",
			"The app uses your location to know which station you’ve reached",
			"Your progress is saved station by station, and it works offline on the road",
		],
	},
	sections: [
		{
			id: "rights",
			eyebrow: "The Treatise on Rights",
			title: "Imam Sajjad’s Treatise on Rights (peace be upon him), Station by Station",
			body: "The fifty rights of Risalat al-Huquq are distributed across the stations of your route - you read each station’s rights and listen to them clearly, then test what you’ve learned before moving on to the next, arriving with knowledge as your provision.",
		},
		{
			id: "recitations",
			eyebrow: "Audio Library",
			title: "The Qur’an, the Sahifa, and Arbaeen Elegies, in Your Ears",
			body: "An audio library to accompany you on the road: recitations from the Holy Qur’an, the Sahifa Sajjadiyya, and Arbaeen elegies in the words of their poets and the voices of their reciters, with a full player that works offline.",
		},
		{
			id: "competition",
			eyebrow: "Competition & Prizes",
			title: "Test Yourself at Every Station, and Compete for Prizes",
			body: "Questions tied to each station’s rights are scored as you answer, gathering your points, with a clear competition guide and valuable prizes for the front-runners - so your steps become knowledge that is rewarded.",
		},
		{
			id: "journey",
			eyebrow: "Walk… and learn",
			title: "A Road to al-Husayn (peace be upon him), and Knowledge at Every Step",
			body: "From the Imam Zayn al-Abidin (peace be upon him) Foundation, so your walk to your master is one of intimacy and learning; a companion in your hand that reminds you of your rights, keeps you in remembrance, and draws you near step by step until your eye rests upon the shrine.",
		},
	],
	featuresHeading: {
		title: "Features That Make It Your Companion at Every Step",
		subtitle:
			"Tools built for a long road where the signal may drop and the walk grows long.",
	},
	features: [
		{
			id: "offline",
			title: "Works Offline",
			description:
				"Saves the map, the rights and the audio to your device, so it stays with you when the connection drops in the crowd of the road.",
		},
		{
			id: "gps",
			title: "Guides You to Your Station",
			description:
				"Pinpoints your place on the map and the pole you’ve reached, to point you to your station and what’s around it.",
		},
		{
			id: "progress",
			title: "Tracks Your Progress",
			description:
				"A tracker saves the rights you’ve completed at each station, so you know where you’ve reached and how far remains.",
		},
		{
			id: "selftest",
			title: "Test Yourself",
			description:
				"After each station’s rights, test what you’ve learned with short questions before you move on.",
		},
		{
			id: "notifications",
			title: "Alerts & Inbox",
			description:
				"Important route alerts reach you first, and are saved to an in-app inbox so you can return to them.",
		},
		{
			id: "trilingual",
			title: "Three Languages",
			description:
				"In Arabic, English and Persian, to accompany the pilgrim in whatever tongue they come.",
		},
	],
	faqHeading: "Questions People Often Ask Before Downloading",
	faq: [
		{
			q: "What is the Maarif Sajjadiya app?",
			a: "It’s your companion on the way to Karbala: a map that divides the route into stations along the numbered poles, and at each station rights from Imam Sajjad’s Treatise on Rights (read and recited), with an audio library and a prize competition. Its motto: walk and learn. From the Imam Zayn al-Abidin (peace be upon him) Foundation.",
		},
		{
			q: "Is the app free?",
			a: "Yes, Maarif Sajjadiya is completely free - no fees, no subscriptions, and no ads.",
		},
		{
			q: "Does the app work offline?",
			a: "Yes. Once its content is downloaded, the map, the rights and the audio work with no connection needed, which helps when the internet drops on the road. New content also syncs in the background whenever a connection is available.",
		},
		{
			q: "How do the stations relate to the Treatise on Rights?",
			a: "The Treatise on Rights (fifty rights) is distributed across the route’s stations pinned to the poles; you read each station’s rights, hear them, and test yourself - arriving with knowledge as your provision.",
		},
		{
			q: "When will the app be available to download?",
			a: "The app is launching soon and will be available, God willing, on the App Store and Google Play. Follow this page to be among the first to download it the moment it’s released.",
		},
		{
			q: "Which devices does it work on?",
			a: "The app launches for iOS on the App Store and for Android on Google Play, with a full interface in Arabic, English and Persian.",
		},
	],
	finalCta: {
		title: "Be Among the First to Set Out With Maarif Sajjadiya",
		subtitle:
			"The app is coming soon, God willing, to the App Store and Google Play - ready your device, and make Maarif Sajjadiya your companion from the first pole to the noble Husayni shrine.",
	},
	footer: {
		tagline:
			"Maarif Sajjadiya - the pilgrim’s companion on the way to Karbala, published by the Imam Zayn al-Abidin (peace be upon him) Foundation.",
		rights: "All rights reserved to the Imam Zayn al-Abidin (peace be upon him) Foundation.",
		comingSoon: "Coming soon",
	},
	alt: {
		heroPhone:
			"The Maarif Sajjadiya home screen: a pilgrim walking the road to Karbala, with a sign pointing to the next pole",
		stationsPhone:
			"The route map showing the road to the Husayni shrine with its stations pinned to the numbered poles",
		rightsPhone:
			"The screen for reading a station’s rights from Imam Zayn al-Abidin’s Treatise on Rights, with an audio player",
		recitationsPhone:
			"The audio library screen showing recitations of the Qur’an, the Sahifa and Arbaeen elegies with a player",
		competitionPhone:
			"The quiz screen showing a question tied to one station’s rights, with answer choices",
		appIcon: "The Maarif Sajjadiya app icon in deep teal",
	},
}

const fa: Content = {
	locale: "fa",
	dir: "rtl",
	seo: {
		title: "معارف سجادیه | به‌سوی کربلا گام بردار و رساله حقوق را بیاموز، ایستگاه به ایستگاه",
		description:
			"اپلیکیشن معارف سجادیه در مسیر شما به‌سوی کربلا، ایستگاه به ایستگاه در امتداد ستون‌های شماره‌دار همراهتان است: رساله حقوق امام سجاد (ع) در هر ایستگاه به‌صورت متنی و صوتی، کتابخانه‌ای صوتی از قرآن، صحیفه و لطمیات اربعین، و مسابقه‌ای با جوایز. بدون اینترنت، به سه زبان، و رایگان.",
		keywords: [
			"معارف سجادیه",
			"گام بردار و بیاموز",
			"رساله حقوق",
			"امام زین‌العابدین",
			"امام سجاد",
			"پیاده‌روی کربلا",
			"پیاده‌روی اربعین",
			"ایستگاه‌های مسیر",
			"ستون‌های مسیر",
			"صحیفه سجادیه",
			"لطمیات اربعین",
			"مسابقه حسینی",
			"اپلیکیشن زیارت",
			"مؤسسه امام زین‌العابدین",
		],
		ogTitle:
			"معارف سجادیه | همراه شما تا کربلا: رساله حقوق، ایستگاه به ایستگاه",
		ogDescription:
			"نقشهٔ مسیر تا حرم حسینی و ایستگاه‌های آن روی ستون‌ها، رساله حقوق به‌صورت متنی و صوتی در هر ایستگاه، کتابخانه‌ای صوتی از قرآن، صحیفه و لطمیات، و مسابقه‌ای با جوایز - در یک اپلیکیشن که بدون اینترنت، به سه زبان و رایگان کار می‌کند. از مؤسسهٔ امام زین‌العابدین (علیه‌السلام).",
	},
	brand: {
		name: "معارف سجادیه",
		nameLatin: "Maarif Sajjadiya",
		org: "مؤسسهٔ امام زین‌العابدین (علیه‌السلام)",
	},
	nav: {
		features: "ویژگی‌ها",
		content: "ایستگاه‌ها",
		faq: "پرسش‌های متداول",
		download: "دانلود اپلیکیشن",
	},
	hero: {
		eyebrow: "گام بردار… و بیاموز",
		title: "در مسیرت به‌سوی کربلا، تنها گام برنمی‌داری",
		subtitle:
			"معارف سجادیه روی نقشهٔ مسیر، ایستگاه به ایستگاه کنار هر ستون همراه شماست: در هر ایستگاه بابی از رساله حقوق امام سجاد (علیه‌السلام) را متنی و صوتی می‌گشاید، آموخته‌تان را می‌آزماید، و با کتابخانه‌ای صوتی از قرآن، صحیفه و لطمیات اربعین همراهی‌تان می‌کند - بدون اینترنت، به سه زبان، و رایگان.",
		ctaHint: "همین حالا رایگان دانلود کنید",
		soonHint: "به‌زودی ان‌شاءالله در App Store و Google Play",
		scanHint: "برای دانلود روی دستگاه خود، کد را اسکن کنید",
		freeLabel: "کاملاً رایگان",
		platformsLabel: "برای iOS و Android",
	},
	trust: {
		items: [
			{ value: "کاملاً رایگان", label: "بدون هزینه، اشتراک و تبلیغات" },
			{
				value: "بدون اینترنت",
				label: "محتوای شما در شلوغی مسیر همراهتان است",
			},
			{
				value: "نقشه با ستون‌ها",
				label: "ایستگاه‌هایتان روی مسیر مشخص‌اند",
			},
			{ value: "به سه زبان", label: "عربی، انگلیسی و فارسی" },
		],
	},
	showcase: {
		eyebrow: "نقشهٔ مسیر",
		title: "راه شما به‌سوی کربلا، ایستگاه به ایستگاه در امتداد ستون‌ها",
		lead: "نقشه‌ای تعاملی راه شما را به‌سوی مولا حسین (علیه‌السلام) ترسیم می‌کند، تقسیم‌شده به ایستگاه‌هایی که بر ستون‌های شماره‌دار مسیر نشانده شده‌اند؛ همیشه می‌دانید کنار کدام ستون هستید، ایستگاهتان چند حق دارد و چه مقدار از راه باقی است.",
		bullets: [
			"راه شما به‌سوی حرم حسینی روی نقشه، ایستگاه به ایستگاه ترسیم شده است",
			"هر ایستگاه بر ستون‌های شماره‌دار مسیر نشانده و با کیلومتر مشخص شده است",
			"هر ایستگاه چند حق از «رساله حقوق» دارد که می‌خوانید و می‌شنوید",
			"اپلیکیشن با موقعیت شما ایستگاهی را که رسیده‌اید تشخیص می‌دهد",
			"پیشرفت شما ایستگاه به ایستگاه ذخیره می‌شود و در مسیر بدون اینترنت کار می‌کند",
		],
	},
	sections: [
		{
			id: "rights",
			eyebrow: "رساله حقوق",
			title: "رساله حقوق امام سجاد (علیه‌السلام)، ایستگاه به ایستگاه",
			body: "پنجاه حق از رساله حقوق بر ایستگاه‌های مسیر شما تقسیم شده است - حقوق هر ایستگاه را می‌خوانید و با صدایی روشن می‌شنوید، سپس پیش از رفتن به ایستگاه بعد آموخته‌تان را می‌آزمایید، تا با توشه‌ای از معرفت برسید.",
		},
		{
			id: "recitations",
			eyebrow: "کتابخانهٔ صوتی",
			title: "قرآن، صحیفه و لطمیات اربعین، در گوش شما",
			body: "کتابخانه‌ای صوتی که در مسیر همراه شماست: تلاوت‌هایی از قرآن کریم، صحیفهٔ سجادیه، و لطمیات اربعین با کلام شاعران و صدای قاریانشان، همراه با پخش‌کننده‌ای کامل که بدون اینترنت کار می‌کند.",
		},
		{
			id: "competition",
			eyebrow: "مسابقه و جوایز",
			title: "در هر ایستگاه خود را بیازما و برای جوایز رقابت کن",
			body: "پرسش‌هایی مرتبط با حقوق هر ایستگاه که با پاسخ به آنها نمره و امتیاز می‌گیرید، همراه با راهنمایی روشن برای مسابقه و جوایزی ارزشمند برای پیشتازان - تا گام‌هایتان دانشی باشد که پاداش می‌گیرد.",
		},
		{
			id: "journey",
			eyebrow: "گام بردار… و بیاموز",
			title: "راهی به‌سوی حسین (علیه‌السلام)، و معرفتی در هر گام",
			body: "از مؤسسهٔ امام زین‌العابدین (علیه‌السلام)، تا پیاده‌رویتان به‌سوی مولا اُنس و دانش باشد؛ همراهی در دست شما که حقوقتان را یادآوری می‌کند، به ذکرش همراهی‌تان می‌کند و گام‌به‌گام نزدیک می‌سازد تا چشمتان به حرم روشن شود.",
		},
	],
	featuresHeading: {
		title: "ویژگی‌هایی که آن را همراه هر گام شما می‌کند",
		subtitle:
			"ابزارهایی ساخته‌شده برای راهی طولانی که ممکن است اتصال در آن قطع و مسیر دراز شود.",
	},
	features: [
		{
			id: "offline",
			title: "کار بدون اینترنت",
			description:
				"نقشه، حقوق و صوتی‌ها را روی دستگاه شما ذخیره می‌کند تا هنگام قطع اتصال در شلوغی مسیر همراهتان بماند.",
		},
		{
			id: "gps",
			title: "راهنمایی به ایستگاهتان",
			description:
				"موقعیت شما را روی نقشه و ستونی را که رسیده‌اید مشخص می‌کند تا شما را به ایستگاهتان و پیرامون آن راه بنماید.",
		},
		{
			id: "progress",
			title: "ثبت پیشرفت شما",
			description:
				"نشانگری که حقوق کامل‌شدهٔ هر ایستگاه را ذخیره می‌کند تا بدانید کجا رسیده‌اید و چه مقدار باقی است.",
		},
		{
			id: "selftest",
			title: "خود را بیازما",
			description:
				"پس از حقوق هر ایستگاه، آموخته‌تان را با پرسش‌هایی کوتاه پیش از رفتن بیازمایید.",
		},
		{
			id: "notifications",
			title: "اعلان‌ها و صندوق ورودی",
			description:
				"اعلان‌های مهم مسیر زودتر از همه می‌رسد و در صندوق ورودی درون اپلیکیشن ذخیره می‌شود تا بازگردید.",
		},
		{
			id: "trilingual",
			title: "به سه زبان",
			description:
				"به عربی، انگلیسی و فارسی، تا با زائر به هر زبانی که آمده همراه شود.",
		},
	],
	faqHeading: "پرسش‌هایی که پیش از دانلود بارها پرسیده می‌شود",
	faq: [
		{
			q: "اپلیکیشن معارف سجادیه چیست؟",
			a: "همراه شما در مسیر کربلا است: نقشه‌ای که راه را به ایستگاه‌هایی در امتداد ستون‌های شماره‌دار تقسیم می‌کند و در هر ایستگاه حقوقی از «رساله حقوق» امام سجاد (علیه‌السلام) به‌صورت متنی و صوتی، همراه با کتابخانهٔ صوتی و مسابقه‌ای با جوایز. شعارش: گام بردار و بیاموز. از مؤسسهٔ امام زین‌العابدین (علیه‌السلام).",
		},
		{
			q: "آیا اپلیکیشن رایگان است؟",
			a: "بله، معارف سجادیه کاملاً رایگان است، بدون هیچ هزینه، اشتراک یا تبلیغات.",
		},
		{
			q: "آیا اپلیکیشن بدون اینترنت کار می‌کند؟",
			a: "بله، پس از دانلود محتوا، نقشه، حقوق و صوتی‌ها بدون نیاز به اتصال کار می‌کنند که هنگام قطع اینترنت در مسیر کمک‌رسان است. محتوای تازه نیز هرگاه اتصال فراهم باشد در پس‌زمینه هماهنگ می‌شود.",
		},
		{
			q: "ارتباط ایستگاه‌ها با رساله حقوق چیست؟",
			a: "رساله حقوق (پنجاه حق) بر ایستگاه‌های مسیر که بر ستون‌ها نشانده شده‌اند تقسیم شده است؛ حقوق هر ایستگاه را می‌خوانید، می‌شنوید و خود را می‌آزمایید تا با توشه‌ای از معرفت برسید.",
		},
		{
			q: "اپلیکیشن چه زمانی برای دانلود در دسترس است؟",
			a: "اپلیکیشن در آستانهٔ انتشار است و به‌زودی ان‌شاءالله در App Store و Google Play در دسترس خواهد بود. این صفحه را دنبال کنید تا از نخستین کسانی باشید که آن را هنگام انتشار دانلود می‌کنند.",
		},
		{
			q: "روی چه دستگاه‌هایی کار می‌کند؟",
			a: "اپلیکیشن برای iOS از App Store و برای Android از Google Play منتشر می‌شود، با رابط کامل به عربی، انگلیسی و فارسی.",
		},
	],
	finalCta: {
		title: "از نخستین کسانی باشید که با معارف سجادیه راه می‌افتند",
		subtitle:
			"اپلیکیشن به‌زودی ان‌شاءالله در App Store و Google Play می‌آید - دستگاهتان را آماده کنید و «معارف سجادیه» را از نخستین ستون تا حرم شریف حسینی همراه خود سازید.",
	},
	footer: {
		tagline:
			"معارف سجادیه - همراه زائر در مسیر کربلا، منتشرشده توسط مؤسسهٔ امام زین‌العابدین (علیه‌السلام).",
		rights: "تمامی حقوق برای مؤسسهٔ امام زین‌العابدین (علیه‌السلام) محفوظ است.",
		comingSoon: "به‌زودی",
	},
	alt: {
		heroPhone:
			"صفحهٔ اصلی اپلیکیشن معارف سجادیه: زائری که راه کربلا را می‌پیماید و تابلویی که ستون بعدی را نشان می‌دهد",
		stationsPhone:
			"نقشهٔ مسیر که راه به‌سوی حرم حسینی را با ایستگاه‌هایش که بر ستون‌های شماره‌دار نشانده شده‌اند نمایش می‌دهد",
		rightsPhone:
			"صفحهٔ خواندن حقوق یک ایستگاه از رساله حقوق امام زین‌العابدین (علیه‌السلام) همراه با پخش‌کنندهٔ صوتی",
		recitationsPhone:
			"صفحهٔ کتابخانهٔ صوتی که تلاوت‌های قرآن، صحیفه و لطمیات اربعین را همراه با پخش‌کننده نمایش می‌دهد",
		competitionPhone:
			"صفحهٔ آزمون که پرسشی مرتبط با حقوق یکی از ایستگاه‌ها را همراه با گزینه‌های پاسخ نمایش می‌دهد",
		appIcon: "آیکون اپلیکیشن معارف سجادیه به رنگ سبز فیروزه‌ای",
	},
}

export const CONTENT: Record<Locale, Content> = { ar, en, fa }
