/**
 * Copy for the account-deletion request page in the three locales.
 *
 * Google Play's Data safety form asks for a URL where a user can *request*
 * account and data deletion without installing the app or signing in — the
 * in-app steps documented in the privacy policy do not satisfy it on their own.
 * This page is that URL: the instant in-app route stays first, and the prefilled
 * mailto below it serves anyone who has already uninstalled the app.
 *
 * The two policy numbers here — the 30-day ceiling and "the account cannot be
 * restored" — describe what the foundation commits to; keep them in step with
 * `@/i18n/privacy`.
 */
import type { Locale } from "@/site.config"

export interface DeleteAccountContent {
	seo: { title: string; description: string }
	skip: string
	back: string // header "back to the site" button
	badge: string
	heading: string
	lead: string
	/** Route 1 — self-serve and instant, from inside the app. */
	inApp: { order: string; title: string; note: string; steps: string[] }
	/** Route 2 — email request, for users who no longer have the app. */
	byEmail: {
		order: string
		title: string
		note: string
		cta: string
		fallback: string
		/** Prefilled mail template; URL-encoded into the mailto by the page. */
		subject: string
		body: string
	}
	/** What a request actually erases. */
	scope: { title: string; items: string[] }
	/** How soon it happens, and what is left afterwards. */
	timing: { title: string; items: string[] }
	band: { title: string; body: string; privacy: string; home: string }
	foot: { name: string; note: string }
}

const ar: DeleteAccountContent = {
	seo: {
		title: "طلب حذف الحساب والبيانات — معارف سجادية",
		description:
			"اطلب حذف حسابك وجميع بياناتك الشخصية من تطبيق معارف سجادية: خطوات الحذف الفوري من داخل التطبيق، أو أرسل طلباً بالبريد الإلكتروني إلى maarif@imamzain.org.",
	},
	skip: "تخطَّ إلى المحتوى",
	back: "العودة إلى الموقع",
	badge: "حذف الحساب والبيانات",
	heading: "طلب حذف الحساب وجميع بياناتك",
	lead: "يمكنك حذف حسابك في «معارف سجادية» وكلَّ ما يرتبط به من بيانات متى شئت — فوراً من داخل التطبيق، أو بطلبٍ تُرسله إلينا بالبريد الإلكتروني.",
	inApp: {
		order: "الطريقة الأولى",
		title: "الحذف الفوري من داخل التطبيق",
		note: "الأسرع، ويُنفَّذ في حينه بلا انتظار — ما دام التطبيق مثبَّتاً على جهازك.",
		steps: [
			"افتح التطبيق",
			'اضغط "أبدأ رحلتك الان" في الشاشة الرئيسية',
			'اضغط "بطاقة الزائر" من القائمة أعلى الشاشة',
			'اضغط "حذف الحساب نهائيا" في أسفل الشاشة',
		],
	},
	byEmail: {
		order: "الطريقة الثانية",
		title: "طلب الحذف بالبريد الإلكتروني",
		note: "إن كنت قد أزلت التطبيق من جهازك أو تعذَّر عليك الوصول إلى حسابك، اضغط الزر أدناه: يفتح تطبيق البريد لديك برسالةٍ جاهزة، تكتب فيها اسمك ورقم هاتفك المسجَّلين ثم ترسلها إلينا.",
		cta: "أرسل طلب حذف الحساب",
		fallback: "أو راسلنا مباشرةً على:",
		subject: "طلب حذف الحساب — معارف سجادية",
		body: "السلام عليكم،\n\nأطلبُ حذف حسابي وجميع بياناتي الشخصية من تطبيق «معارف سجادية» نهائياً.\n\nالاسم الكامل المسجَّل في التطبيق: \nرقم الهاتف المسجَّل في التطبيق: \n\nوشكراً لكم.",
	},
	scope: {
		title: "ما الذي يُحذف؟",
		items: [
			"اسمك الكامل ورقم هاتفك.",
			"سجلُّ مشاركتك في مسابقة حفظ رسالة الحقوق.",
			"موقعك الجغرافي لا يُخزَّن على خوادمنا أصلاً — فلا شيء منه ليُحذف.",
			"البيانات المحفوظة محلياً على جهازك تزول بإلغاء تثبيت التطبيق.",
		],
	},
	timing: {
		title: "متى يُنفَّذ الطلب؟",
		items: [
			"الحذف من داخل التطبيق: فوريٌّ في حينه.",
			"الطلب بالبريد: يُنفَّذ خلال مدةٍ أقصاها 30 يوماً من استلامه، وغالباً أسرع من ذلك.",
			"بعد التنفيذ لا يبقى لدينا اسمك ولا رقم هاتفك ولا سجلُّ مشاركتك، ولا يمكن استرجاع الحساب.",
		],
	},
	band: {
		title: "بياناتُك مِلكُك",
		body: "لا نجمعُ إلا أقلَّ ما يلزم، ولا نشاركه مع أحد، ونمحوه كاملاً متى طلبت.",
		privacy: "سياسة الخصوصية",
		home: "الصفحة الرئيسية",
	},
	foot: {
		name: "معارف سجادية",
		note: "خدمةٌ من مؤسسةِ الإمامِ زينِ العابدين (عليه السلام) لزائري الحسين (عليه السلام).",
	},
}

const en: DeleteAccountContent = {
	seo: {
		title: "Request Account & Data Deletion — Maarif Sajjadiya",
		description:
			"Request deletion of your account and all of your personal data from the Maarif Sajjadiya app: delete it instantly from inside the app, or send a request by email to maarif@imamzain.org.",
	},
	skip: "Skip to content",
	back: "Back to the site",
	badge: "Account & Data Deletion",
	heading: "Request Deletion of Your Account and Data",
	lead: "You can delete your Maarif Sajjadiya account and everything tied to it whenever you want — instantly from inside the app, or by sending us a request by email.",
	inApp: {
		order: "Option one",
		title: "Delete instantly from inside the app",
		note: "The fastest route, and it takes effect on the spot — as long as the app is still installed on your device.",
		steps: [
			"Open the app",
			'Tap "Start Your Journey Now" on the home screen',
			'Tap "Visitor Card" in the menu at the top of the screen',
			'Tap "Delete Account Permanently" at the bottom of the screen',
		],
	},
	byEmail: {
		order: "Option two",
		title: "Request deletion by email",
		note: "If you have already uninstalled the app, or you cannot reach your account, tap the button below: your mail app opens with a ready-made message — write in the name and phone number you registered, then send it to us.",
		cta: "Send an account deletion request",
		fallback: "Or write to us directly at:",
		subject: "Account deletion request — Maarif Sajjadiya",
		body: "Hello,\n\nI request the permanent deletion of my account and all of my personal data from the Maarif Sajjadiya app.\n\nFull name registered in the app: \nPhone number registered in the app: \n\nThank you.",
	},
	scope: {
		title: "What gets deleted?",
		items: [
			"Your full name and your phone number.",
			"Your participation record in the Treatise on Rights memorization competition.",
			"Your location is never stored on our servers in the first place — there is nothing of it to delete.",
			"Data held locally on your device goes away when you uninstall the app.",
		],
	},
	timing: {
		title: "When is the request carried out?",
		items: [
			"Deletion from inside the app: immediately, on the spot.",
			"A request by email: carried out within 30 days of us receiving it at the latest, and usually sooner.",
			"Once it is done we hold no name, no phone number and no participation record of yours, and the account cannot be restored.",
		],
	},
	band: {
		title: "Your Data Is Yours",
		body: "We collect only the minimum, we share it with no one, and we erase all of it whenever you ask.",
		privacy: "Privacy Policy",
		home: "Home page",
	},
	foot: {
		name: "Maarif Sajjadiya",
		note: "A service from the Imam Zayn al-Abidin (peace be upon him) Foundation for the pilgrims of al-Husayn (peace be upon him).",
	},
}

const fa: DeleteAccountContent = {
	seo: {
		title: "درخواست حذف حساب و داده‌ها — معارف سجادیه",
		description:
			"حذف حساب و همهٔ داده‌های شخصی خود را از اپلیکیشن معارف سجادیه درخواست کنید: حذف فوری از درون اپلیکیشن، یا ارسال درخواست با ایمیل به maarif@imamzain.org.",
	},
	skip: "پرش به محتوا",
	back: "بازگشت به سایت",
	badge: "حذف حساب و داده‌ها",
	heading: "درخواست حذف حساب و همهٔ داده‌های شما",
	lead: "هر زمان که بخواهید می‌توانید حساب «معارف سجادیه» و هر آنچه به آن وابسته است را حذف کنید — به‌صورت فوری از درون اپلیکیشن، یا با ارسال درخواست از راه ایمیل.",
	inApp: {
		order: "روش نخست",
		title: "حذف فوری از درون اپلیکیشن",
		note: "سریع‌ترین راه و بی‌درنگ انجام می‌شود — تا زمانی که اپلیکیشن روی دستگاه شما نصب باشد.",
		steps: [
			"اپلیکیشن را باز کنید",
			'در صفحهٔ اصلی روی "همین حالا سفر خود را آغاز کنید" بزنید',
			'از منوی بالای صفحه روی "کارت زائر" بزنید',
			'در پایین صفحه روی "حذف حساب به‌طور کامل" بزنید',
		],
	},
	byEmail: {
		order: "روش دوم",
		title: "درخواست حذف با ایمیل",
		note: "اگر اپلیکیشن را از دستگاهتان حذف کرده‌اید یا به حسابتان دسترسی ندارید، دکمهٔ زیر را بزنید: برنامهٔ ایمیل شما با پیامی آماده باز می‌شود؛ نام و شمارهٔ تلفن ثبت‌شدهٔ خود را در آن بنویسید و برای ما بفرستید.",
		cta: "ارسال درخواست حذف حساب",
		fallback: "یا مستقیماً به این نشانی بنویسید:",
		subject: "درخواست حذف حساب — معارف سجادیه",
		body: "سلام،\n\nدرخواست می‌کنم حساب و همهٔ داده‌های شخصی من از اپلیکیشن «معارف سجادیه» به‌طور کامل حذف شود.\n\nنام کامل ثبت‌شده در اپلیکیشن: \nشمارهٔ تلفن ثبت‌شده در اپلیکیشن: \n\nبا تشکر.",
	},
	scope: {
		title: "چه چیزی حذف می‌شود؟",
		items: [
			"نام کامل و شمارهٔ تلفن شما.",
			"سابقهٔ شرکت شما در مسابقهٔ حفظ رسالهٔ حقوق.",
			"موقعیت جغرافیایی شما اصلاً روی سرورهای ما ذخیره نمی‌شود — پس چیزی از آن برای حذف وجود ندارد.",
			"داده‌های ذخیره‌شده روی دستگاه شما با حذف اپلیکیشن از میان می‌رود.",
		],
	},
	timing: {
		title: "درخواست چه زمانی انجام می‌شود؟",
		items: [
			"حذف از درون اپلیکیشن: بی‌درنگ و در همان لحظه.",
			"درخواست با ایمیل: حداکثر تا ۳۰ روز پس از دریافت انجام می‌شود و معمولاً زودتر.",
			"پس از آن، نام، شمارهٔ تلفن و سابقهٔ شرکت شما نزد ما نمی‌ماند و حساب قابل بازیابی نیست.",
		],
	},
	band: {
		title: "داده‌های شما از آنِ شماست",
		body: "تنها کمترین دادهٔ لازم را می‌گیریم، با هیچ‌کس به اشتراک نمی‌گذاریم و هر وقت بخواهید همه را پاک می‌کنیم.",
		privacy: "سیاست حریم خصوصی",
		home: "صفحهٔ اصلی",
	},
	foot: {
		name: "معارف سجادیه",
		note: "خدمتی از مؤسسهٔ امام زین‌العابدین (علیه‌السلام) برای زائران حسین (علیه‌السلام).",
	},
}

export const DELETE_ACCOUNT_CONTENT: Record<Locale, DeleteAccountContent> = {
	ar,
	en,
	fa,
}
