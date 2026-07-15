/**
 * Copy for the privacy-policy page in the three locales. The Arabic text is the
 * original policy (moved from imamzain.org); English and Persian are faithful
 * translations of it. Structure mirrors `content.ts`: one shape, three locales,
 * a single component renders any of them.
 */
import type { Locale } from "@/site.config"

export interface PrivacyContent {
	seo: { title: string; description: string }
	back: string // header "back to the site" button
	badge: string
	heading: string
	lead: string
	guarantees: { icon: string; label: string }[]
	sections: {
		id: string
		order: string
		icon: string
		title: string
		points: string[]
		/** Optional label for a link out to the account-deletion page. */
		cta?: string
	}[]
	band: { title: string; body: string; home: string; org: string }
	foot: { name: string; note: string }
	skip: string
}

const ar: PrivacyContent = {
	seo: {
		title: "سياسة الخصوصية - معارف سجادية",
		description:
			"سياسة حماية البيانات الشخصية والخصوصية لتطبيق معارف سجادية: البيانات المطلوبة والغرض منها، صلاحية الموقع والجدار الجغرافي، والإشعارات - بمعالجةٍ محليةٍ على جهازك وبلا مشاركةٍ مع أطرافٍ ثالثة، تماشياً مع سياسات متجري Google وApple.",
	},
	back: "العودة إلى الموقع",
	badge: "الخصوصية وحماية البيانات",
	heading: "سياسة حماية البيانات الشخصية والخصوصية",
	lead: "تطبيق «معارف سجادية» يلتزم بحماية بياناتك وخصوصيتك تماشياً مع سياسات متجري Google وApple العالمية.",
	guarantees: [
		{ icon: "lock", label: "تشفيرٌ كامل للبيانات" },
		{ icon: "smartphone", label: "معالجةُ الموقع على جهازك" },
		{ icon: "ban", label: "بلا أطرافٍ ثالثة" },
	],
	sections: [
		{
			id: "personal-data",
			order: "أولاً",
			icon: "user",
			title: "البيانات الشخصية والغرض منها",
			points: [
				"الاسم الكامل ورقم الهاتف يتم طلبهما بشكل اختياري لغرض تمكينك من المشاركة في مسابقة حفظ رسالة الحقوق للإمام زين العابدين (عليه السلام).",
				"يمكنك إنشاء حسابك برقم هاتفك أو عبر حسابك في Google؛ وإن اخترت Google فإننا نستلم منه عنوان بريدك الإلكتروني لتعريف حسابك، ولا نطّلع على كلمة مرورك.",
				"الغرض الوحيد من تسجيل هذه البيانات هو التواصل معك لتنسيق إرسال الجوائز لك في حال الفوز.",
				"بياناتك مشفرة بالكامل ولا يتم الاطلاع عليها من قبل أي أطراف ثالثة أو مشاركتها أو بيعها لأي جهات إعلانية أو تجارية.",
			],
			cta: "اطلب حذف بياناتك الشخصية",
		},
		{
			id: "location-permissions",
			order: "ثانياً",
			icon: "map-pin",
			title: "الصلاحيات وتتبع الموقع الجغرافي",
			points: [
				"يطلب التطبيق صلاحية الموقع لحساب المسافة المتبقية والمقطوعة بدقة طوال طريق «يا حسين» نحو كربلاء المقدسة.",
				"يتم استخدام الموقع لتشغيل خاصية الجدار الجغرافي (Geofencing) لتنبيهك محلياً عند الاقتراب من إحدى المحطات التثقيفية.",
				"جميع عمليات تحديد وتتبع الموقع تتم وتُعالج بالكامل بشكل محلي وآمن داخل جهازك، ولا يتم إرسال إحداثياتك الجغرافية أو تخزينها على خوادمنا نهائياً.",
			],
		},
		{
			id: "notifications",
			order: "ثالثاً",
			icon: "bell",
			title: "الإشعارات والتنبيهات العامة",
			points: [
				"تُستخدم التنبيهات لإرسال إشعارات محلية تفاعلية عند الاقتراب من المحطات أو لاطلاعك على التحديثات العامة والإعلانات المهمة للمسير.",
				"يمكنك تعطيل أو تفعيل صلاحية الإشعارات بالكامل وبشكل فوري وفي أي وقت من خلال قائمة إعدادات الصلاحيات داخل التطبيق.",
			],
		},
	],
	band: {
		title: "خصوصيتُك أمانةٌ عندنا",
		body: "نجمعُ أقلَّ ما يلزم، ونعالجُ موقعك على جهازك، ولا نشاركُ بياناتك مع أحد - تماشياً مع سياسات متجري Google وApple.",
		home: "الصفحة الرئيسية",
		org: "مؤسسة الإمام زين العابدين (ع)",
	},
	foot: {
		name: "معارف سجادية",
		note: "خدمةٌ من مؤسسةِ الإمامِ زينِ العابدين (عليه السلام) لزائري الحسين (عليه السلام).",
	},
	skip: "تخطَّ إلى المحتوى",
}

const en: PrivacyContent = {
	seo: {
		title: "Privacy Policy - Maarif Sajjadiya",
		description:
			"The personal-data protection and privacy policy of the Maarif Sajjadiya app: what data is requested and why, the location permission and geofencing, and notifications - processed locally on your device and never shared with third parties, in line with the Google and Apple store policies.",
	},
	back: "Back to the site",
	badge: "Privacy & Data Protection",
	heading: "Personal Data Protection & Privacy Policy",
	lead: "The Maarif Sajjadiya app is committed to protecting your data and your privacy, in line with the global policies of the Google and Apple stores.",
	guarantees: [
		{ icon: "lock", label: "Full data encryption" },
		{ icon: "smartphone", label: "Location processed on your device" },
		{ icon: "ban", label: "No third parties" },
	],
	sections: [
		{
			id: "personal-data",
			order: "First",
			icon: "user",
			title: "Personal Data and Its Purpose",
			points: [
				"Your full name and phone number are requested optionally, to let you take part in the competition for memorizing the Treatise on Rights of Imam Zayn al-Abidin (peace be upon him).",
				"You can create your account with your phone number or through your Google account; if you choose Google, we receive your email address from it to identify your account, and we never see your password.",
				"The sole purpose of recording this data is to contact you and coordinate delivering your prize should you win.",
				"Your data is fully encrypted and is never viewed by, shared with, or sold to any third parties or any advertising or commercial entities.",
			],
			cta: "Request deletion of your personal data",
		},
		{
			id: "location-permissions",
			order: "Second",
			icon: "map-pin",
			title: "Permissions and Location Tracking",
			points: [
				"The app requests the location permission to accurately calculate the distance covered and remaining along the “Ya Husayn” road to holy Karbala.",
				"Location powers the geofencing feature, which alerts you locally as you approach one of the educational stations.",
				"All location detection and tracking is processed entirely locally and securely on your device; your coordinates are never sent to or stored on our servers.",
			],
		},
		{
			id: "notifications",
			order: "Third",
			icon: "bell",
			title: "Notifications and General Alerts",
			points: [
				"Notifications are used for interactive local alerts as you approach stations, and to keep you informed of general updates and important announcements for the walk.",
				"You can disable or enable the notifications permission entirely, instantly and at any time, from the permissions settings inside the app.",
			],
		},
	],
	band: {
		title: "Your Privacy Is a Trust We Keep",
		body: "We collect the minimum, process your location on your device, and share your data with no one - in line with the Google and Apple store policies.",
		home: "Home page",
		org: "Imam Zayn al-Abidin (as) Foundation",
	},
	foot: {
		name: "Maarif Sajjadiya",
		note: "A service from the Imam Zayn al-Abidin (peace be upon him) Foundation for the pilgrims of al-Husayn (peace be upon him).",
	},
	skip: "Skip to content",
}

const fa: PrivacyContent = {
	seo: {
		title: "سیاست حریم خصوصی - معارف سجادیه",
		description:
			"سیاست حفاظت از داده‌های شخصی و حریم خصوصی اپلیکیشن معارف سجادیه: داده‌های درخواستی و هدف از آنها، مجوز موقعیت و حصار جغرافیایی، و اعلان‌ها - با پردازش محلی روی دستگاه شما و بدون اشتراک‌گذاری با اشخاص ثالث، مطابق با سیاست‌های فروشگاه‌های Google و Apple.",
	},
	back: "بازگشت به سایت",
	badge: "حریم خصوصی و حفاظت از داده‌ها",
	heading: "سیاست حفاظت از داده‌های شخصی و حریم خصوصی",
	lead: "اپلیکیشن «معارف سجادیه» مطابق با سیاست‌های جهانی فروشگاه‌های Google و Apple به حفاظت از داده‌ها و حریم خصوصی شما پایبند است.",
	guarantees: [
		{ icon: "lock", label: "رمزگذاری کامل داده‌ها" },
		{ icon: "smartphone", label: "پردازش موقعیت روی دستگاه شما" },
		{ icon: "ban", label: "بدون اشخاص ثالث" },
	],
	sections: [
		{
			id: "personal-data",
			order: "نخست",
			icon: "user",
			title: "داده‌های شخصی و هدف از آنها",
			points: [
				"نام کامل و شمارهٔ تلفن به‌صورت اختیاری درخواست می‌شود تا بتوانید در مسابقهٔ حفظ رسالهٔ حقوق امام زین‌العابدین (علیه‌السلام) شرکت کنید.",
				"می‌توانید حساب خود را با شمارهٔ تلفن یا از راه حساب Google خود بسازید؛ اگر Google را انتخاب کنید، نشانی ایمیل شما را برای شناسایی حسابتان از آن دریافت می‌کنیم و هرگز رمز عبور شما را نمی‌بینیم.",
				"تنها هدف از ثبت این داده‌ها، تماس با شما برای هماهنگی ارسال جایزه در صورت برنده شدن است.",
				"داده‌های شما به‌طور کامل رمزگذاری شده و هرگز توسط هیچ شخص ثالثی دیده نمی‌شود و با هیچ نهاد تبلیغاتی یا تجاری به اشتراک گذاشته یا به آنها فروخته نمی‌شود.",
			],
			cta: "درخواست حذف داده‌های شخصی خود",
		},
		{
			id: "location-permissions",
			order: "دوم",
			icon: "map-pin",
			title: "مجوزها و ردیابی موقعیت جغرافیایی",
			points: [
				"اپلیکیشن برای محاسبهٔ دقیق مسافت طی‌شده و باقی‌مانده در طول مسیر «یا حسین» به‌سوی کربلای مقدس، مجوز موقعیت را درخواست می‌کند.",
				"موقعیت برای فعال‌سازی حصار جغرافیایی (Geofencing) به کار می‌رود تا هنگام نزدیک شدن به یکی از ایستگاه‌های آموزشی به‌صورت محلی به شما اطلاع دهد.",
				"همهٔ عملیات تعیین و ردیابی موقعیت به‌طور کامل، محلی و امن درون دستگاه شما پردازش می‌شود و مختصات جغرافیایی شما هرگز به سرورهای ما ارسال یا در آنها ذخیره نمی‌شود.",
			],
		},
		{
			id: "notifications",
			order: "سوم",
			icon: "bell",
			title: "اعلان‌ها و هشدارهای عمومی",
			points: [
				"اعلان‌ها برای هشدارهای محلی تعاملی هنگام نزدیک شدن به ایستگاه‌ها و آگاه‌سازی شما از به‌روزرسانی‌های عمومی و اطلاعیه‌های مهم مسیر به کار می‌روند.",
				"می‌توانید مجوز اعلان‌ها را در هر لحظه و به‌طور کامل از منوی تنظیمات مجوزها درون اپلیکیشن فعال یا غیرفعال کنید.",
			],
		},
	],
	band: {
		title: "حریم خصوصی شما امانتی نزد ماست",
		body: "کمترین دادهٔ لازم را می‌گیریم، موقعیت شما را روی دستگاهتان پردازش می‌کنیم و داده‌هایتان را با هیچ‌کس به اشتراک نمی‌گذاریم - مطابق با سیاست‌های فروشگاه‌های Google و Apple.",
		home: "صفحهٔ اصلی",
		org: "مؤسسهٔ امام زین‌العابدین (ع)",
	},
	foot: {
		name: "معارف سجادیه",
		note: "خدمتی از مؤسسهٔ امام زین‌العابدین (علیه‌السلام) برای زائران حسین (علیه‌السلام).",
	},
	skip: "پرش به محتوا",
}

export const PRIVACY_CONTENT: Record<Locale, PrivacyContent> = { ar, en, fa }
