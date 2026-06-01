const books = {
    beginner: [
        {
            titleAr: "القصص القصيرة",
            authorAr: "أنطون تشيخوف",
            descAr: null,
            descEn: "Very short stories, easy to read and fun.",
            cover: "https://downloads.hindawi.org/covers/svg/270x360/38509429.svg?v=2",
            link: "https://www.hindawi.org/books/38509429/", pattern: "pat-2",
            audio: "https://www.youtube.com/playlist?list=PLbbQeV1NR8-V33Y-16XSArup2xjViShFE",
        },
    ],
    intermediate: [
        {
            titleAr: "القُبلة",
            authorAr: "أنطون تشيخوف",
            descAr: null,
            descEn: 'A small story about a solder, and his imaginations.',
            cover: "https://downloads.hindawi.org/covers/svg/270x360/80413906.svg?v=2",
            link: "https://www.hindawi.org/books/80413906/",
            pattern: "pat-1",
            audio: "https://youtu.be/GVZTFCKLCAE"
        },
    ],
    advanced: [
    ],
    poems: [
    ]
}

// const books = {
//     beginner: [
//         {
//             titleAr: "أيام",
//             authorAr: "طه حسين",
//             descAr: "سيرة ذاتية تروي طفولة طه حسين في صعيد مصر، بأسلوب سلس وجميل.",
//             descEn: "A touching autobiography by the 'Dean of Arabic Literature', recounting a rural Egyptian childhood in simple, elegant prose.",
//             cover: "https://covers.openlibrary.org/b/id/10521061-L.jpg",
//             link: "https://www.goodreads.com/book/show/1085296",
//             audio: null,
//             pattern: "pat-1"
//         },
//         {
//             titleAr: "ليالي ألف ليلة وليلة",
//             authorAr: "مجهول",
//             descAr: "حكايات شهرزاد الخالدة من بغداد إلى بلاد السند والهند.",
//             descEn: "The legendary One Thousand and One Nights — folk tales of adventure, romance, and magic from the Arab world.",
//             cover: "https://covers.openlibrary.org/b/id/8091016-L.jpg",
//             link: "https://www.goodreads.com/book/show/45891",
//             audio: "https://librivox.org/the-arabian-nights-entertainments-by-anonymous/",
//             pattern: "pat-2"
//         },
//         {
//             titleAr: "كليلة ودمنة",
//             authorAr: "ابن المقفع",
//             descAr: "حكايات الحيوانات الخالدة المترجمة من الفارسية، تحمل حكمة ورسائل أخلاقية.",
//             descEn: "Animal fables carrying deep wisdom, translated by Ibn al-Muqaffa — a cornerstone of Arabic prose.",
//             cover: "https://covers.openlibrary.org/b/id/8227687-L.jpg",
//             link: "https://www.goodreads.com/book/show/1398695",
//             audio: null,
//             pattern: "pat-3"
//         },
//         {
//             titleAr: "قصص للأطفال",
//             authorAr: "كامل كيلاني",
//             descAr: "مجموعة قصص بسيطة ومحببة تصلح كبداية للقارئ الجديد.",
//             descEn: "Charming short stories by the pioneer of children's Arabic literature — perfect for new readers of any age.",
//             cover: null,
//             link: "https://www.goodreads.com/author/show/359456",
//             audio: null,
//             pattern: "pat-4"
//         },
//         {
//             titleAr: "البخيل",
//             authorAr: "موليير — ترجمة مارون النقاش",
//             descAr: "كوميديا خفيفة مترجمة إلى العربية، قريبة الأسلوب من اللغة المعاصرة.",
//             descEn: "A classic comedic play in accessible Modern Arabic — great for building fluency.",
//             cover: null,
//             link: "https://www.goodreads.com/book/show/4927",
//             audio: null,
//             pattern: "pat-5"
//         },
//         {
//             titleAr: "السمندل يصبح ملكاً",
//             authorAr: "نجيب محفوظ",
//             descAr: "من قصص نجيب محفوظ القصيرة المناسبة للمبتدئين.",
//             descEn: "Short, imaginative tales from Nobel laureate Naguib Mahfouz — a gentle introduction to his world.",
//             cover: null,
//             link: "https://www.goodreads.com/author/show/3404",
//             audio: null,
//             pattern: "pat-6"
//         }
//     ],

//     intermediate: [
//         {
//             titleAr: "زقاق المدق",
//             authorAr: "نجيب محفوظ",
//             descAr: "رواية تصور حياة سكان زقاق في القاهرة القديمة بعمق إنساني كبير.",
//             descEn: "Midaq Alley — Mahfouz's vivid portrait of Cairo's backstreet life, full of complex characters navigating love, ambition, and tradition.",
//             cover: "https://covers.openlibrary.org/b/id/8114078-L.jpg",
//             link: "https://www.goodreads.com/book/show/116590",
//             audio: null,
//             pattern: "pat-1"
//         },
//         {
//             titleAr: "موسم الهجرة إلى الشمال",
//             authorAr: "الطيب صالح",
//             descAr: "تحفة أدبية تتناول التوتر بين الشرق والغرب من خلال قصة رجل سوداني عاد من أوروبا.",
//             descEn: "Season of Migration to the North — a landmark post-colonial novel exploring identity, desire, and cultural collision.",
//             cover: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
//             link: "https://www.goodreads.com/book/show/258763",
//             audio: null,
//             pattern: "pat-2"
//         },
//         {
//             titleAr: "الشيطان يعظ",
//             authorAr: "توفيق الحكيم",
//             descAr: "مسرحية فلسفية ذكية تستعرض الصراع بين الخير والشر بأسلوب حواري متقن.",
//             descEn: "A sharp philosophical play by Tawfiq al-Hakim examining good and evil with wit and theatrical brilliance.",
//             cover: null,
//             link: "https://www.goodreads.com/author/show/296760",
//             audio: null,
//             pattern: "pat-3"
//         },
//         {
//             titleAr: "أطياف الأزقة المهجورة",
//             authorAr: "غادة السمان",
//             descAr: "قصص قصيرة حديثة تعكس أسلوب الكاتبة السورية الشجاع والمتمرد.",
//             descEn: "Bold, experimental short stories by Ghada Samman — exploring Arab women's lives with honesty and daring.",
//             cover: null,
//             link: "https://www.goodreads.com/author/show/392682",
//             audio: null,
//             pattern: "pat-4"
//         },
//         {
//             titleAr: "أقصوصات مصرية",
//             authorAr: "يوسف إدريس",
//             descAr: "أقصوصات مصرية تجمع الواقعية بالرمز في أسلوب مميز.",
//             descEn: "Stories by Egypt's master of the form — rich in local color, psychological depth, and social observation.",
//             cover: null,
//             link: "https://www.goodreads.com/author/show/356726",
//             audio: null,
//             pattern: "pat-5"
//         },
//         {
//             titleAr: "مذكرات امرأة غير واقعية",
//             authorAr: "غادة السمان",
//             descAr: "رواية نسائية جريئة تسبر أغوار نفسية امرأة عربية معاصرة.",
//             descEn: "Confessional and fearless — a novel delving into the psychology of a modern Arab woman defying convention.",
//             cover: null,
//             link: "https://www.goodreads.com/author/show/392682",
//             audio: null,
//             pattern: "pat-6"
//         }
//     ],

//     advanced: [
//         {
//             titleAr: "ثلاثية القاهرة",
//             authorAr: "نجيب محفوظ",
//             descAr: "ملحمة روائية ضخمة تتبع ثلاثة أجيال من عائلة مصرية خلال النصف الأول من القرن العشرين.",
//             descEn: "The Cairo Trilogy — Mahfouz's Nobel-winning epic spanning three generations of an Egyptian family through decades of upheaval.",
//             cover: "https://covers.openlibrary.org/b/id/8114079-L.jpg",
//             link: "https://www.goodreads.com/book/show/116603",
//             audio: null,
//             pattern: "pat-1"
//         },
//         {
//             titleAr: "أولاد حارتنا",
//             authorAr: "نجيب محفوظ",
//             descAr: "رواية رمزية جريئة تعيد سرد تاريخ الإنسانية عبر قصص حارة واحدة في القاهرة.",
//             descEn: "Children of the Alley — a bold allegory retelling human history from Adam to science, banned across the Arab world.",
//             cover: "https://covers.openlibrary.org/b/id/8091344-L.jpg",
//             link: "https://www.goodreads.com/book/show/116601",
//             audio: null,
//             pattern: "pat-2"
//         },
//         {
//             titleAr: "مقدمة ابن خلدون",
//             authorAr: "ابن خلدون",
//             descAr: "واحد من أعظم الكتب في التاريخ الإنساني، يؤسس لعلم الاجتماع وفلسفة التاريخ.",
//             descEn: "The Muqaddimah — the greatest Arab intellectual work, founding sociology and philosophy of history in the 14th century.",
//             cover: "https://covers.openlibrary.org/b/id/8222091-L.jpg",
//             link: "https://www.goodreads.com/book/show/198069",
//             audio: "https://librivox.org/the-muqaddimah-by-ibn-khaldun/",
//             pattern: "pat-3"
//         },
//         {
//             titleAr: "بيروت 75",
//             authorAr: "غادة السمان",
//             descAr: "رواية تنبؤية كتبت قبيل الحرب الأهلية اللبنانية، تصور الانهيار القادم بعين نبوية.",
//             descEn: "Written just before the Lebanese Civil War, this prescient novel eerily foretold the city's coming catastrophe.",
//             cover: null,
//             link: "https://www.goodreads.com/book/show/5965748",
//             audio: null,
//             pattern: "pat-4"
//         },
//         {
//             titleAr: "رجال في الشمس",
//             authorAr: "غسان كنفاني",
//             descAr: "رواية تروي معاناة الفلسطينيين المهجّرين في قصة قصيرة بالغة التأثير.",
//             descEn: "Men in the Sun — a searing Palestinian novella about displacement and the silence that kills, by Ghassan Kanafani.",
//             cover: "https://covers.openlibrary.org/b/id/8479464-L.jpg",
//             link: "https://www.goodreads.com/book/show/262055",
//             audio: null,
//             pattern: "pat-5"
//         },
//         {
//             titleAr: "الحرب في بر مصر",
//             authorAr: "يوسف القعيد",
//             descAr: "رواية تكشف الفساد والظلم الاجتماعي في مصر عبر قصة تجنيد تراجيدية.",
//             descEn: "War in the Land of Egypt — a dark, multi-voiced novel exposing corruption and injustice through a tragic conscription story.",
//             cover: null,
//             link: "https://www.goodreads.com/book/show/2283890",
//             audio: null,
//             pattern: "pat-6"
//         }
//     ],

//     poems: [
//         {
//             titleAr: "ديوان المتنبي",
//             authorAr: "المتنبي",
//             descAr: "أعظم دواوين الشعر العربي الكلاسيكي، يجمع الفخر والحكمة والغزل في لغة لا تُضاهى.",
//             descEn: "The collected poems of al-Mutanabbi — towering classical verse combining pride, wisdom, and satire.",
//             cover: "https://covers.openlibrary.org/b/id/8229072-L.jpg",
//             link: "https://www.goodreads.com/book/show/1183462",
//             audio: null,
//             pattern: "pat-1"
//         },
//         {
//             titleAr: "النبي",
//             authorAr: "جبران خليل جبران",
//             descAr: "كتاب شعري نثري عالمي الشهرة، تُرجم إلى أكثر من مئة لغة.",
//             descEn: "The Prophet — Gibran's universally beloved prose-poetry collection on love, children, work, and freedom.",
//             cover: "https://covers.openlibrary.org/b/id/8229073-L.jpg",
//             link: "https://www.goodreads.com/book/show/2547",
//             audio: "https://librivox.org/the-prophet-by-kahlil-gibran/",
//             pattern: "pat-2"
//         },
//         {
//             titleAr: "أشعار",
//             authorAr: "محمود درويش",
//             descAr: "قصائد الشاعر الفلسطيني الكبير — صوت المنفى والهوية والحنين الإنساني.",
//             descEn: "The collected poetry of Mahmoud Darwish — the voice of Palestinian longing, exile, and beauty.",
//             cover: "https://covers.openlibrary.org/b/id/8237039-L.jpg",
//             link: "https://www.goodreads.com/author/show/39273",
//             audio: null,
//             pattern: "pat-3"
//         },
//         {
//             titleAr: "أغاني مهيار الدمشقي",
//             authorAr: "أدونيس",
//             descAr: "قصيدة طويلة تأسيسية تمثل التحول الحداثي في الشعر العربي.",
//             descEn: "Songs of Mihyar the Damascene — Adonis's revolutionary modernist long poem that transformed Arabic poetry.",
//             cover: null,
//             link: "https://www.goodreads.com/book/show/1117936",
//             audio: null,
//             pattern: "pat-4"
//         },
//         {
//             titleAr: "ديوان الرومي — مختارات",
//             authorAr: "جلال الدين الرومي",
//             descAr: "مختارات من المثنوي المعنوي — شعر الروح والعشق الإلهي بأسلوب صوفي خالد.",
//             descEn: "Selections from Rumi's Masnavi — mystical poetry on divine love, the soul, and union with the infinite.",
//             cover: "https://covers.openlibrary.org/b/id/8228681-L.jpg",
//             link: "https://www.goodreads.com/book/show/24848",
//             audio: null,
//             pattern: "pat-5"
//         },
//         {
//             titleAr: "شعر امرئ القيس",
//             authorAr: "امرؤ القيس",
//             descAr: "أول المعلقات السبع الكبرى — شعر جاهلي خالد يصف الطبيعة والحب.",
//             descEn: "The Mu'allaqa of Imru' al-Qays — the greatest of the Seven Odes of pre-Islamic Arabia.",
//             cover: null,
//             link: "https://www.goodreads.com/book/show/4462789",
//             audio: null,
//             pattern: "pat-6"
//         },
//         {
//             titleAr: "قصائد الحب",
//             authorAr: "نزار قباني",
//             descAr: "أجمل ما كتب نزار قباني في العشق والمرأة والحياة — شعر ناعم وجريء.",
//             descEn: "Nizar Qabbani's love poems — sensuous, bold, lyrical celebrations of women, love, and Arab identity.",
//             cover: "https://covers.openlibrary.org/b/id/8231456-L.jpg",
//             link: "https://www.goodreads.com/author/show/151272",
//             audio: null,
//             pattern: "pat-7"
//         }
//     ]
// };