/**
 * All human-facing copy for the three locales. Structure is identical across
 * locales so a single set of components renders any language. Section and
 * feature `id`s are stable across locales (used to attach the right screenshot
 * and icon).
 *
 * Product: "معارف سجادية" (Maarif Sajjadiya) - "walk and learn". A companion for
 * the ziyarat walk to Karbala: an interactive route map divided into stations
 * pinned to the road's numbered poles; the rights of Imam Sajjad's Treatise on
 * Rights (رسالة الحقوق) split into graded memorization stages to read + hear +
 * self-test as you walk, with prizes for the competition; an audio library of
 * religious lectures; progress tracking; offline; push + inbox. Published by
 * the Imam Zayn al-Abidin (as) Foundation. Live on Google Play; iOS pending.
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
			"تطبيق معارف سجادية يرافقك في طريقك إلى كربلاء محطةً محطة على أعمدة الطريق: احفظ رسالة الحقوق للإمام السجّاد (ع) مرحلةً بعد مرحلة واربح جوائز قيّمة، مع مكتبة صوتية من المحاضرات الدينية. يعمل دون إنترنت، بثلاث لغات، ومجاناً.",
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
			"حفظ رسالة الحقوق",
			"محاضرات دينية",
			"مسابقة حسينية",
			"تطبيق الزيارة",
			"مؤسسة الإمام زين العابدين",
		],
		ogTitle: "معارف سجادية | رفيقك إلى كربلاء: رسالة الحقوق محطةً محطة",
		ogDescription:
			"خارطة الطريق إلى الحرم الحسيني ومحطاته على الأعمدة، ورسالة الحقوق تحفظها مرحلةً بعد مرحلة وتربح بها جوائز قيّمة، ومكتبة صوتية من المحاضرات الدينية - في تطبيق واحد يعمل دون إنترنت، بثلاث لغات، ومجاناً. من مؤسسة الإمام زين العابدين (عليه السلام).",
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
		title: "احفظ رسالة الحقوق واربح جوائز",
		subtitle:
			"يمنحك تطبيق معارف سجادية فرصة مميزة لربح جوائز قيّمة من خلال حفظ رسالة الحقوق للإمام السجاد (ع) أثناء مسيرتك الأربعينية إلى كربلاء. يُقسَّم الطريق إلى مراحل حفظية متدرجة، لتتقدم في حفظ حقوق هذه الرسالة العظيمة مع كل مسافة تقطعها. يعمل دون اتصال بالإنترنت، ويدعم ثلاث لغات... وكل ذلك مجانًا!",
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
		title: "خارطة المحطات إلى كربلاء",
		lead: "خارطة تفاعلية ترسم لك الطريق إلى مولانا الحسين (عليه السلام)، مقسوماً إلى محطات مثبّتة على أعمدة الطريق المرقّمة؛ تعرف عند أي عمود أنت، وكم حقّاً في محطتك، وكم بقي من الطريق.",
		bullets: [
			"طريقك إلى الحرم الحسيني مرسومٌ على الخارطة محطةً محطة",
			"كل محطة مثبّتة على أعمدة الطريق المرقّمة ومحدّدة بالكيلومترات",
			"ثماني محطات تضمّ الحقوق الخمسين كاملة، تقرؤها وتستمع إليها",
			"ينبّهك التطبيق عند بلوغك كل محطة على الطريق",
			"يسجّل تقدّمك محطةً محطة، ويعمل دون إنترنت في الطريق",
		],
	},
	sections: [
		{
			id: "rights",
			eyebrow: "رسالة الحقوق",
			title: "رسالة الحقوق للإمام السجّاد (عليه السلام)",
			body: "خمسون حقّاً من رسالة الحقوق موزّعة على ثماني محطات في طريقك - تقرأ حقوق كل محطة وتستمع إليها بصوتٍ واضح، ثم تختبر حفظك قبل أن تمضي إلى المحطة التالية، فتصل ومعك زادٌ من المعرفة.",
		},
		{
			id: "recitations",
			eyebrow: "مكتبة صوتية",
			title: "محاضرات دينية بين سمعك",
			body: "مكتبة صوتية من المحاضرات الدينية تصحبك في الطريق، تستمع إليها وأنت تمشي، مع مشغّلٍ كامل يعمل دون إنترنت.",
		},
		{
			id: "competition",
			eyebrow: "المسابقة والجوائز",
			title: "أتمِم الحفظ، وأدِّ الاختبار، وادخل السحب على الجوائز",
			body: "بعد إكمال المحطات الثماني وحفظ الحقوق الخمسين، توجّه إلى إحدى محطتي الاختبار المعتمدتين - مدينة الإمام الحسن (عليه السلام) للزائرين عند العمود 1066، أو العتبة الحسينية المقدسة - ليُجرى لك اختبار شفهي فيما حفظت. المشاركة مجانية ومفتوحة لكل الأعمار، ولك ثلاث محاولات، والجوائز: لابتوب، وهاتف ذكي، وآيباد، وإقامة مجانية بضيافة العتبة الحسينية المقدسة.",
		},
		{
			id: "journey",
			eyebrow: "امشِ… وتعلّم",
			title: "طريقٌ إلى الحسين (عليه السلام)، ومعرفةٌ في كل خطوة",
			body: "من مؤسسة الإمام زين العابدين (عليه السلام)، ليكون مشيك إلى مولاك أُنساً وعلماً؛ رفيقٌ في يدك يذكّرك بحقوقك، ويصحبك بذكره، ويقرّبك خطوةً خطوة حتى يقرّ طرفك بالحرم.",
		},
	],
	featuresHeading: {
		title: "مزايا تجعله دليلك في كل خطوة",
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
				"يحدّد موقعك على الخارطة والعمود الذي بلغته، وينبّهك حين تصل إلى محطةٍ من محطات الطريق.",
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
	faqHeading: "أسئلة شائعة عن التطبيق والمسابقة",
	faq: [
		{
			q: "ما هو تطبيق معارف سجادية؟",
			a: "هو رفيقك في طريقك إلى كربلاء: خارطة تقسّم المسير إلى محطات مثبّتة على أعمدة الطريق ينبّهك التطبيق عند بلوغ كل واحدة منها، وثماني محطات تعليمية قُسّمت عليها حقوق «رسالة الحقوق» الخمسون لتقرأها وتستمع إليها وتحفظها، مع مكتبة صوتية من المحاضرات الدينية. شعاره: امشِ وتعلّم. من مؤسسة الإمام زين العابدين (عليه السلام).",
		},
		{
			q: "ما هي مسابقة معارف سجادية؟",
			a: "مسابقة تشجّع الزائرين على حفظ رسالة الحقوق للإمام زين العابدين (عليه السلام) من خلال التطبيق أو الكتيب الخاص بالمسابقة، ثم أداء الاختبار للدخول في السحب على الجوائز.",
		},
		{
			q: "كيف أشارك في المسابقة؟",
			a: "لا تحتاج المشاركة إلى تسجيل مسبق ولا إلى تعبئة استمارة. احفظ رسالة الحقوق من خلال التطبيق أو الكتيب، وأكمل المحطات الثماني التي تضمّ الحقوق الخمسين كاملة، وسجّل الدخول إلى التطبيق، ثم توجّه إلى إحدى محطتي الاختبار المعتمدتين لأداء الاختبار.",
		},
		{
			q: "هل التسجيل في التطبيق إلزامي؟",
			a: "نعم، يشترط تسجيل الدخول إلى تطبيق معارف سجادية قبل أداء الاختبار، فهو متطلب أساسي لإتمام المشاركة في المسابقة.",
		},
		{
			q: "من يستطيع المشاركة؟",
			a: "المسابقة مفتوحة للجميع - رجالاً ونساءً وأطفالاً - ولا توجد فئات عمرية محددة ولا شروط خاصة للمشاركة.",
		},
		{
			q: "هل المشاركة مجانية؟",
			a: "نعم، المشاركة مجانية بالكامل، والتطبيق نفسه مجاني بلا رسوم ولا اشتراكات ولا إعلانات.",
		},
		{
			q: "أين أجد رسالة الحقوق؟",
			a: "يمكن الحصول عليها عبر تطبيق معارف سجادية، أو من خلال الكتيب الخاص بالمسابقة.",
		},
		{
			q: "ما هي المحطات الموجودة داخل التطبيق؟",
			a: "ثماني محطات تعليمية قُسّمت عليها حقوق الرسالة الخمسون لتسهيل الحفظ والمراجعة، وهي مثبّتة على خارطة الطريق عند أعمدته؛ فحين تبلغ موضع محطةٍ منها ينبّهك التطبيق إلى أنك وصلتها.",
		},
		{
			q: "هل يجب حفظ رسالة الحقوق كاملة قبل الاختبار؟",
			a: "نعم، يشترط إكمال المحطات الثماني في التطبيق - وهي تضمّ الحقوق الخمسين كاملة - قبل أداء الاختبار.",
		},
		{
			q: "أين تقع محطات الاختبار؟",
			a: "توجد محطتان معتمدتان: مدينة الإمام الحسن (عليه السلام) للزائرين على طريق كربلاء - النجف عند العمود 1066، والعتبة الحسينية المقدسة في كربلاء. ويمكنك أداء الاختبار في أيٍّ منهما.",
		},
		{
			q: "ما هي أوقات الاختبار؟",
			a: "الاختبار متاح 24 ساعة يومياً طوال فترة زيارة الأربعين، وآخر موعد له نهاية يوم 20 صفر. راجِع أي محطة من محطتي الاختبار في الوقت الذي يناسبك خلال هذه المدة.",
		},
		{
			q: "ماذا يحدث أثناء الاختبار وكم يستغرق؟",
			a: "يُجرى الاختبار شفهياً في الحقوق التي حفظتها، مع أسئلة عن معانيها والتأكد من صحة القراءة. ومدّته تتبع مستوى حفظك وسرعة إجابتك. ولأنه شفهي فلا يحتاج إلى اتصال بالإنترنت.",
		},
		{
			q: "كم عدد المحاولات، وماذا أفعل إن لم أجتز الاختبار؟",
			a: "يُسمح بثلاث محاولات لكل متسابق، ويمكنك إعادة الاختبار خلال مدة المسابقة - كما يمكنك إعادته بعد النجاح إن رغبت، ضمن العدد المسموح به.",
		},
		{
			q: "كيف أعرف أنني اجتزت الاختبار؟",
			a: "يصلك إشعار عبر تطبيق معارف سجادية بعد اعتماد نتيجة الاختبار. ويُعلَن الفائزون بعد انتهاء المسابقة ويُشعَرون عبر الوسائل المعتمدة.",
		},
		{
			q: "ما هي جوائز المسابقة؟",
			a: "أربع جوائز لهذا الموسم: الأولى لابتوب بمواصفات تقنية متقدمة وأداء فائق، والثانية هاتف ذكي بكاميرا احترافية وإمكانات مدعومة بالذكاء الاصطناعي، والثالثة جهاز آيباد حديث، والرابعة إقامة مجانية بضيافة العتبة الحسينية المقدسة.",
		},
		{
			q: "متى وأين تُسلَّم الجوائز، وماذا أُحضر معي؟",
			a: "تُسلَّم بعد انتهاء المسابقة، ويجري التواصل مع الفائزين لتحديد الموعد وآلية الاستلام. والاستلام من مقر المؤسسة الرئيسي في النجف الأشرف - ملحق شارع الروان، ولا يلزمك سوى الهوية الوطنية. وإن أردت أن يستلمها غيرك نيابةً عنك فراجِع اللجنة المنظمة لمعرفة الإجراءات.",
		},
		{
			q: "ماذا أفعل إذا فقدت رقم الاشتراك؟",
			a: "تواصل مع اللجنة المنظمة وزوّدهم باسمك لاستعادة بياناتك.",
		},
		{
			q: "هل يعمل التطبيق دون إنترنت؟",
			a: "نعم، بعد تحميل محتواه تعمل الخارطة والحقوق والصوتيات دون حاجة إلى اتصال، وهو ما يعينك حين ينقطع الإنترنت في الطريق، ويزامن الجديد في الخلفية متى توفّر الاتصال.",
		},
		{
			q: "على أي الأجهزة يعمل؟",
			a: "التطبيق متاح الآن لأجهزة Android على Google Play، ويصل قريباً بإذن الله لأجهزة iOS على App Store، بواجهة كاملة بالعربية والإنجليزية والفارسية.",
		},
		{
			q: "كيف أتواصل مع اللجنة المنظمة؟",
			a: "عبر حساب تيليجرام المخصص للتواصل مع المشرفين @MaarifSajjadiya، أو على الرقم ‎+964 786 079 9721.",
		},
	],
	finalCta: {
		title: "ابدأ الطريق مع معارف سجادية",
		subtitle:
			"التطبيق متاح الآن على Google Play - حمّله مجاناً، واجعل «معارف سجادية» رفيقك من أوّل عمود إلى الحرم الحسيني الشريف. ويصل قريباً بإذن الله إلى App Store.",
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
			"شاشة المكتبة الصوتية تعرض المحاضرات الدينية مع مشغّل صوتي",
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
			"The Maarif Sajjadiya app walks with you toward Karbala station by station along the route’s numbered poles: memorize Imam Sajjad’s Treatise on Rights (Risalat al-Huquq) stage by stage and win valuable prizes, with an audio library of religious lectures. Works offline, in three languages, free.",
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
			"memorize Risalat al-Huquq",
			"religious lectures",
			"Husayni competition",
			"ziyarat companion app",
			"Imam Zayn al-Abidin Foundation",
		],
		ogTitle:
			"Maarif Sajjadiya | Your Companion to Karbala: the Treatise on Rights, Station by Station",
		ogDescription:
			"The route map to the Husayni shrine and its stations on the poles, the Treatise on Rights to memorize stage by stage and win valuable prizes, and an audio library of religious lectures - in one app that works offline, in three languages, free. From the Imam Zayn al-Abidin (as) Foundation.",
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
		title: "Memorize the Treatise on Rights and Win Prizes",
		subtitle:
			"Maarif Sajjadiya gives you a special chance to win valuable prizes by memorizing Imam Sajjad’s (peace be upon him) Treatise on Rights during your Arbaeen walk to Karbala. The road is divided into graded memorization stages, so you advance through the rights of this great treatise with every distance you cover. It works with no internet connection and supports three languages… and all of it is free!",
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
		title: "The Map of Stations to Karbala",
		lead: "An interactive map charts your path to our master al-Husayn (peace be upon him), divided into stations pinned to the route’s numbered poles; you always know which pole you’re at, how many rights are in your station, and how far remains.",
		bullets: [
			"Your path to the Husayni shrine is drawn on the map, station by station",
			"Each station is pinned to the route’s numbered poles and marked in kilometers",
			"Eight stations hold all fifty rights of the Treatise, to read and to hear",
			"The app alerts you as you reach each station on the route",
			"Your progress is saved station by station, and it works offline on the road",
		],
	},
	sections: [
		{
			id: "rights",
			eyebrow: "The Treatise on Rights",
			title: "Imam Sajjad’s Treatise on Rights (peace be upon him)",
			body: "The fifty rights of Risalat al-Huquq are distributed across eight stations along your route - you read each station’s rights and listen to them clearly, then test what you’ve learned before moving on to the next, arriving with knowledge as your provision.",
		},
		{
			id: "recitations",
			eyebrow: "Audio Library",
			title: "Religious Lectures, in Your Ears",
			body: "An audio library of religious lectures to accompany you on the road - listen as you walk, with a full player that works offline.",
		},
		{
			id: "competition",
			eyebrow: "Competition & Prizes",
			title: "Finish Memorizing, Sit the Exam, Enter the Prize Draw",
			body: "Once you’ve completed the eight stations and memorized all fifty rights, head to either of the two approved exam stations - Imam al-Hasan (peace be upon him) Pilgrims’ City at pole 1066, or the holy Husayni shrine - for an oral exam on what you’ve memorized. Entry is free and open to every age, you get three attempts, and the prizes are a laptop, a smartphone, an iPad, and a free stay hosted by the holy Husayni shrine.",
		},
		{
			id: "journey",
			eyebrow: "Walk… and learn",
			title: "A Road to al-Husayn (peace be upon him), and Knowledge at Every Step",
			body: "From the Imam Zayn al-Abidin (peace be upon him) Foundation, so your walk to your master is one of intimacy and learning; a companion in your hand that reminds you of your rights, keeps you in remembrance, and draws you near step by step until your eye rests upon the shrine.",
		},
	],
	featuresHeading: {
		title: "Features That Make It Your Guide at Every Step",
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
				"Pinpoints your place on the map and the pole you’ve reached, and alerts you when you arrive at one of the route’s stations.",
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
	faqHeading: "Common Questions About the App and the Competition",
	faq: [
		{
			q: "What is the Maarif Sajjadiya app?",
			a: "It’s your companion on the way to Karbala: a map that divides the route into stations pinned to the numbered poles, alerting you as you reach each one, and eight learning stations across which the fifty rights of the Treatise on Rights are divided for you to read, hear and memorize, with an audio library of religious lectures. Its motto: walk and learn. From the Imam Zayn al-Abidin (peace be upon him) Foundation.",
		},
		{
			q: "What is the Maarif Sajjadiya competition?",
			a: "A competition that encourages pilgrims to memorize Imam Zayn al-Abidin’s (peace be upon him) Treatise on Rights, through the app or the competition booklet, then sit the exam to enter the prize draw.",
		},
		{
			q: "How do I take part?",
			a: "No prior registration and no form to fill in. Memorize the Treatise on Rights through the app or the booklet, complete the eight stations that hold all fifty rights, sign in to the app, then go to either of the two approved exam stations to sit the exam.",
		},
		{
			q: "Is signing in to the app required?",
			a: "Yes. Signing in to the Maarif Sajjadiya app is required before sitting the exam - it is an essential step to complete your entry in the competition.",
		},
		{
			q: "Who can take part?",
			a: "The competition is open to everyone - men, women and children - with no set age brackets and no special conditions for entry.",
		},
		{
			q: "Is entry free?",
			a: "Yes, entry is completely free, and the app itself is free - no fees, no subscriptions, and no ads.",
		},
		{
			q: "Where do I find the Treatise on Rights?",
			a: "Through the Maarif Sajjadiya app, or in the competition booklet.",
		},
		{
			q: "What are the stations inside the app?",
			a: "Eight learning stations across which the treatise’s fifty rights are divided, to make memorizing and reviewing easier. They are pinned to the route map at its poles, so when you reach the place of one of them the app alerts you that you’ve arrived.",
		},
		{
			q: "Do I have to memorize the whole treatise before the exam?",
			a: "Yes. You must complete the eight stations in the app - which hold all fifty rights - before sitting the exam.",
		},
		{
			q: "Where are the exam stations?",
			a: "There are two approved stations: Imam al-Hasan (peace be upon him) Pilgrims’ City on the Karbala-Najaf road at pole 1066, and the holy Husayni shrine in Karbala. You may sit the exam at either one.",
		},
		{
			q: "What are the exam hours?",
			a: "The exam is available 24 hours a day throughout the Arbaeen ziyarat period, with the final deadline at the end of 20 Safar. Visit either exam station at whatever time suits you within that period.",
		},
		{
			q: "What happens during the exam, and how long does it take?",
			a: "The exam is oral, covering the rights you have memorized, with some questions on their meanings and a check that your recitation is correct. Its length depends on how well you’ve memorized and how quickly you answer. Being oral, it needs no internet connection.",
		},
		{
			q: "How many attempts do I get, and what if I don’t pass?",
			a: "Each entrant is allowed three attempts, and you may retake the exam during the competition period - you may also retake it after passing if you wish, within the allowed number.",
		},
		{
			q: "How will I know that I passed?",
			a: "You’ll receive a notification through the Maarif Sajjadiya app once your result is approved. Winners are announced after the competition ends and are notified through the approved channels.",
		},
		{
			q: "What are the prizes?",
			a: "Four prizes this season: first, a laptop with advanced specifications and high performance; second, a smartphone with a professional camera and AI-supported capabilities; third, a modern iPad; and fourth, a free stay hosted by the holy Husayni shrine.",
		},
		{
			q: "When and where are prizes handed out, and what should I bring?",
			a: "After the competition ends; winners are contacted to arrange the timing and the collection process. Collection is from the Foundation’s main premises in Najaf al-Ashraf - the Rawan Street annex - and all you need is your national ID. If you’d like someone to collect on your behalf, contact the organizing committee for the procedure.",
		},
		{
			q: "What if I lose my entry number?",
			a: "Contact the organizing committee and give them your name to recover your details.",
		},
		{
			q: "Does the app work offline?",
			a: "Yes. Once its content is downloaded, the map, the rights and the audio work with no connection needed, which helps when the internet drops on the road. New content also syncs in the background whenever a connection is available.",
		},
		{
			q: "Which devices does it work on?",
			a: "The app is available now for Android on Google Play, and is coming soon, God willing, for iOS on the App Store, with a full interface in Arabic, English and Persian.",
		},
		{
			q: "How do I contact the organizing committee?",
			a: "Through the Telegram account set up for reaching the supervisors, @MaarifSajjadiya, or by phone on +964 786 079 9721.",
		},
	],
	finalCta: {
		title: "Set Out With Maarif Sajjadiya",
		subtitle:
			"The app is available now on Google Play - download it free, and make Maarif Sajjadiya your companion from the first pole to the noble Husayni shrine. Coming soon, God willing, to the App Store.",
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
			"The audio library screen showing religious lectures with a player",
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
			"اپلیکیشن معارف سجادیه در مسیر شما به‌سوی کربلا، ایستگاه به ایستگاه در امتداد ستون‌های شماره‌دار همراهتان است: رساله حقوق امام سجاد (ع) را مرحله به مرحله حفظ کنید و جوایزی ارزشمند ببرید، همراه با کتابخانه‌ای صوتی از سخنرانی‌های مذهبی. بدون اینترنت، به سه زبان، و رایگان.",
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
			"حفظ رساله حقوق",
			"سخنرانی‌های مذهبی",
			"مسابقه حسینی",
			"اپلیکیشن زیارت",
			"مؤسسه امام زین‌العابدین",
		],
		ogTitle:
			"معارف سجادیه | همراه شما تا کربلا: رساله حقوق، ایستگاه به ایستگاه",
		ogDescription:
			"نقشهٔ مسیر تا حرم حسینی و ایستگاه‌های آن روی ستون‌ها، رساله حقوق که مرحله به مرحله حفظ می‌کنید و با آن جوایزی ارزشمند می‌برید، و کتابخانه‌ای صوتی از سخنرانی‌های مذهبی - در یک اپلیکیشن که بدون اینترنت، به سه زبان و رایگان کار می‌کند. از مؤسسهٔ امام زین‌العابدین (علیه‌السلام).",
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
		title: "رساله حقوق را حفظ کن و جایزه ببر",
		subtitle:
			"اپلیکیشن معارف سجادیه فرصتی ویژه به شما می‌دهد تا با حفظ رساله حقوق امام سجاد (ع) در مسیر پیاده‌روی اربعین به‌سوی کربلا، جوایزی ارزشمند ببرید. مسیر به مرحله‌های حفظی پلکانی تقسیم می‌شود تا با هر مسافتی که می‌پیمایید، در حفظ حقوق این رسالهٔ بزرگ پیش بروید. بدون اتصال به اینترنت کار می‌کند و از سه زبان پشتیبانی می‌کند… و همهٔ اینها رایگان است!",
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
		title: "نقشهٔ ایستگاه‌ها تا کربلا",
		lead: "نقشه‌ای تعاملی راه شما را به‌سوی مولا حسین (علیه‌السلام) ترسیم می‌کند، تقسیم‌شده به ایستگاه‌هایی که بر ستون‌های شماره‌دار مسیر نشانده شده‌اند؛ همیشه می‌دانید کنار کدام ستون هستید، ایستگاهتان چند حق دارد و چه مقدار از راه باقی است.",
		bullets: [
			"راه شما به‌سوی حرم حسینی روی نقشه، ایستگاه به ایستگاه ترسیم شده است",
			"هر ایستگاه بر ستون‌های شماره‌دار مسیر نشانده و با کیلومتر مشخص شده است",
			"هشت ایستگاه دربردارندهٔ هر پنجاه حقِ رساله است که می‌خوانید و می‌شنوید",
			"اپلیکیشن هنگام رسیدن به هر ایستگاه در مسیر به شما اطلاع می‌دهد",
			"پیشرفت شما ایستگاه به ایستگاه ذخیره می‌شود و در مسیر بدون اینترنت کار می‌کند",
		],
	},
	sections: [
		{
			id: "rights",
			eyebrow: "رساله حقوق",
			title: "رساله حقوق امام سجاد (علیه‌السلام)",
			body: "پنجاه حق از رساله حقوق بر هشت ایستگاه در مسیر شما تقسیم شده است - حقوق هر ایستگاه را می‌خوانید و با صدایی روشن می‌شنوید، سپس پیش از رفتن به ایستگاه بعد آموخته‌تان را می‌آزمایید، تا با توشه‌ای از معرفت برسید.",
		},
		{
			id: "recitations",
			eyebrow: "کتابخانهٔ صوتی",
			title: "سخنرانی‌های مذهبی، در گوش شما",
			body: "کتابخانه‌ای صوتی از سخنرانی‌های مذهبی که در مسیر همراه شماست - در حال راه‌رفتن به آنها گوش می‌دهید، همراه با پخش‌کننده‌ای کامل که بدون اینترنت کار می‌کند.",
		},
		{
			id: "competition",
			eyebrow: "مسابقه و جوایز",
			title: "حفظ را کامل کن، آزمون بده، و در قرعه‌کشی جوایز شرکت کن",
			body: "پس از کامل‌کردن هشت ایستگاه و حفظ هر پنجاه حق، به یکی از دو ایستگاه آزمون معتبر بروید - شهرک امام حسن (علیه‌السلام) برای زائران کنار ستون ۱۰۶۶، یا حرم مطهر حسینی - تا آزمونی شفاهی از آنچه حفظ کرده‌اید گرفته شود. شرکت رایگان و برای همهٔ سنین آزاد است، سه فرصت دارید، و جوایز عبارت‌اند از لپ‌تاپ، گوشی هوشمند، آیپد، و اقامت رایگان به میزبانی حرم مطهر حسینی.",
		},
		{
			id: "journey",
			eyebrow: "گام بردار… و بیاموز",
			title: "راهی به‌سوی حسین (علیه‌السلام)، و معرفتی در هر گام",
			body: "از مؤسسهٔ امام زین‌العابدین (علیه‌السلام)، تا پیاده‌رویتان به‌سوی مولا اُنس و دانش باشد؛ همراهی در دست شما که حقوقتان را یادآوری می‌کند، به ذکرش همراهی‌تان می‌کند و گام‌به‌گام نزدیک می‌سازد تا چشمتان به حرم روشن شود.",
		},
	],
	featuresHeading: {
		title: "ویژگی‌هایی که آن را راهنمای هر گام شما می‌کند",
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
				"موقعیت شما را روی نقشه و ستونی را که رسیده‌اید مشخص می‌کند و هنگام رسیدن به یکی از ایستگاه‌های مسیر به شما اطلاع می‌دهد.",
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
	faqHeading: "پرسش‌های متداول دربارهٔ اپلیکیشن و مسابقه",
	faq: [
		{
			q: "اپلیکیشن معارف سجادیه چیست؟",
			a: "همراه شما در مسیر کربلا است: نقشه‌ای که راه را به ایستگاه‌هایی نشانده بر ستون‌های شماره‌دار تقسیم می‌کند و هنگام رسیدن به هر یک به شما اطلاع می‌دهد، و هشت ایستگاه آموزشی که پنجاه حقِ «رساله حقوق» بر آنها تقسیم شده تا بخوانید، بشنوید و حفظ کنید، همراه با کتابخانه‌ای صوتی از سخنرانی‌های مذهبی. شعارش: گام بردار و بیاموز. از مؤسسهٔ امام زین‌العابدین (علیه‌السلام).",
		},
		{
			q: "مسابقهٔ معارف سجادیه چیست؟",
			a: "مسابقه‌ای که زائران را به حفظ رساله حقوق امام زین‌العابدین (علیه‌السلام) از راه اپلیکیشن یا کتابچهٔ ویژهٔ مسابقه تشویق می‌کند و سپس با دادن آزمون، در قرعه‌کشی جوایز شرکت می‌کنند.",
		},
		{
			q: "چگونه در مسابقه شرکت کنم؟",
			a: "شرکت نیازی به ثبت‌نام پیشین یا پرکردن فرم ندارد. رساله حقوق را از راه اپلیکیشن یا کتابچه حفظ کنید، هشت ایستگاه را که دربردارندهٔ هر پنجاه حق است کامل کنید، وارد حساب خود در اپلیکیشن شوید، سپس به یکی از دو ایستگاه آزمون معتبر بروید و آزمون بدهید.",
		},
		{
			q: "آیا ورود به حساب در اپلیکیشن الزامی است؟",
			a: "بله، ورود به حساب در اپلیکیشن معارف سجادیه پیش از دادن آزمون شرط است و برای کامل‌شدن شرکت در مسابقه ضروری است.",
		},
		{
			q: "چه کسانی می‌توانند شرکت کنند؟",
			a: "مسابقه برای همه آزاد است - مردان، زنان و کودکان - و هیچ ردهٔ سنی مشخص یا شرط ویژه‌ای برای شرکت وجود ندارد.",
		},
		{
			q: "آیا شرکت رایگان است؟",
			a: "بله، شرکت کاملاً رایگان است و خودِ اپلیکیشن نیز رایگان است، بدون هیچ هزینه، اشتراک یا تبلیغات.",
		},
		{
			q: "رساله حقوق را از کجا پیدا کنم؟",
			a: "از راه اپلیکیشن معارف سجادیه، یا از کتابچهٔ ویژهٔ مسابقه.",
		},
		{
			q: "ایستگاه‌های داخل اپلیکیشن چیست؟",
			a: "هشت ایستگاه آموزشی که پنجاه حقِ رساله بر آنها تقسیم شده تا حفظ و مرور آسان‌تر شود، و بر نقشهٔ مسیر کنار ستون‌های آن نشانده شده‌اند؛ چنانکه وقتی به جایگاه یکی از آنها می‌رسید، اپلیکیشن به شما اطلاع می‌دهد که رسیده‌اید.",
		},
		{
			q: "آیا باید پیش از آزمون تمام رساله را حفظ کرد؟",
			a: "بله، کامل‌کردن هشت ایستگاه در اپلیکیشن - که هر پنجاه حق را دربر دارد - پیش از دادن آزمون شرط است.",
		},
		{
			q: "ایستگاه‌های آزمون کجا هستند؟",
			a: "دو ایستگاه معتبر وجود دارد: شهرک امام حسن (علیه‌السلام) برای زائران در جادهٔ کربلا - نجف کنار ستون ۱۰۶۶، و حرم مطهر حسینی در کربلا. می‌توانید در هر کدام آزمون بدهید.",
		},
		{
			q: "ساعات آزمون چگونه است؟",
			a: "آزمون در تمام مدت زیارت اربعین، شبانه‌روز و ۲۴ ساعته در دسترس است و آخرین مهلت آن پایان روز ۲۰ صفر است. در هر زمانی که برایتان مناسب است به یکی از دو ایستگاه آزمون مراجعه کنید.",
		},
		{
			q: "در آزمون چه می‌گذرد و چقدر طول می‌کشد؟",
			a: "آزمون شفاهی است و از حقوقی که حفظ کرده‌اید گرفته می‌شود، همراه با پرسش‌هایی دربارهٔ معانی آنها و اطمینان از درستی قرائت. مدت آن به میزان حفظ و سرعت پاسخ شما بستگی دارد. و چون شفاهی است، به اتصال اینترنت نیازی ندارد.",
		},
		{
			q: "چند بار می‌توانم آزمون بدهم و اگر قبول نشدم چه کنم؟",
			a: "برای هر شرکت‌کننده سه فرصت در نظر گرفته شده و می‌توانید در مدت مسابقه دوباره آزمون بدهید - حتی پس از قبولی نیز اگر بخواهید، در همان تعداد مجاز.",
		},
		{
			q: "از کجا بفهمم که قبول شده‌ام؟",
			a: "پس از تأیید نتیجه، اعلانی از راه اپلیکیشن معارف سجادیه به شما می‌رسد. برندگان پس از پایان مسابقه اعلام و از راه‌های معتبر باخبر می‌شوند.",
		},
		{
			q: "جوایز مسابقه چیست؟",
			a: "چهار جایزه برای این فصل: نخست، لپ‌تاپی با مشخصات فنی پیشرفته و کارایی بالا؛ دوم، گوشی هوشمند با دوربین حرفه‌ای و توانمندی‌های مبتنی بر هوش مصنوعی؛ سوم، آیپدی امروزی؛ و چهارم، اقامت رایگان به میزبانی حرم مطهر حسینی.",
		},
		{
			q: "جوایز چه زمانی و کجا تحویل می‌شود و چه همراه بیاورم؟",
			a: "پس از پایان مسابقه؛ با برندگان برای تعیین زمان و شیوهٔ تحویل تماس گرفته می‌شود. تحویل از دفتر مرکزی مؤسسه در نجف اشرف - ملحق خیابان روان انجام می‌گیرد و تنها به کارت ملی نیاز دارید. اگر می‌خواهید کسی به‌نمایندگی از شما آن را بگیرد، برای آگاهی از روند کار با کمیتهٔ برگزاری تماس بگیرید.",
		},
		{
			q: "اگر شمارهٔ اشتراکم را گم کنم چه کنم؟",
			a: "با کمیتهٔ برگزاری تماس بگیرید و نامتان را به آنها بدهید تا اطلاعاتتان بازیابی شود.",
		},
		{
			q: "آیا اپلیکیشن بدون اینترنت کار می‌کند؟",
			a: "بله، پس از دانلود محتوا، نقشه، حقوق و صوتی‌ها بدون نیاز به اتصال کار می‌کنند که هنگام قطع اینترنت در مسیر کمک‌رسان است. محتوای تازه نیز هرگاه اتصال فراهم باشد در پس‌زمینه هماهنگ می‌شود.",
		},
		{
			q: "روی چه دستگاه‌هایی کار می‌کند؟",
			a: "اپلیکیشن هم‌اکنون برای Android در Google Play در دسترس است و به‌زودی ان‌شاءالله برای iOS در App Store منتشر می‌شود، با رابط کامل به عربی، انگلیسی و فارسی.",
		},
		{
			q: "چگونه با کمیتهٔ برگزاری تماس بگیرم؟",
			a: "از راه حساب تلگرام ویژهٔ ارتباط با ناظران، ‎@MaarifSajjadiya، یا با شمارهٔ ‎+964 786 079 9721.",
		},
	],
	finalCta: {
		title: "با معارف سجادیه راه بیفتید",
		subtitle:
			"اپلیکیشن هم‌اکنون در Google Play در دسترس است - رایگان دانلود کنید و «معارف سجادیه» را از نخستین ستون تا حرم شریف حسینی همراه خود سازید. به‌زودی ان‌شاءالله در App Store نیز منتشر می‌شود.",
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
			"صفحهٔ کتابخانهٔ صوتی که سخنرانی‌های مذهبی را همراه با پخش‌کننده نمایش می‌دهد",
		competitionPhone:
			"صفحهٔ آزمون که پرسشی مرتبط با حقوق یکی از ایستگاه‌ها را همراه با گزینه‌های پاسخ نمایش می‌دهد",
		appIcon: "آیکون اپلیکیشن معارف سجادیه به رنگ سبز فیروزه‌ای",
	},
}

export const CONTENT: Record<Locale, Content> = { ar, en, fa }
