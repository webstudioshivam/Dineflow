/* CaffCrew guest-page translations. To add a language: add it to DF_LANGS and add a block to DF_TR.
   Missing keys fall back to English, so a partly translated language never breaks the page. */
(function () {
  var LANGS = [
    ['en', 'English'], ['hi', 'हिन्दी'], ['bn', 'বাংলা'], ['te', 'తెలుగు'], ['mr', 'मराठी'], ['ta', 'தமிழ்'],
    ['ur', 'اردو'], ['gu', 'ગુજરાતી'], ['kn', 'ಕನ್ನಡ'], ['ml', 'മലയാളം'], ['or', 'ଓଡ଼ିଆ'], ['pa', 'ਪੰਜਾਬੀ'],
    ['as', 'অসমীয়া'], ['fr', 'Français'], ['it', 'Italiano'], ['ru', 'Русский']
  ];
  var FONT = { hi: 'Noto Sans Devanagari', mr: 'Noto Sans Devanagari', bn: 'Noto Sans Bengali', as: 'Noto Sans Bengali', te: 'Noto Sans Telugu',
    ta: 'Noto Sans Tamil', ur: 'Noto Naskh Arabic', gu: 'Noto Sans Gujarati', kn: 'Noto Sans Kannada', ml: 'Noto Sans Malayalam',
    or: 'Noto Sans Oriya', pa: 'Noto Sans Gurmukhi' };
  var TR = {
    en: { all: 'All', veg: 'Veg only', other: 'Other', table: 'Table {l}', empty: 'No dishes available yet.', items: '{n} items', item1: '{n} item', cart: 'View cart', contains: 'Contains', add: 'ADD',
      yourOrder: 'Your order', note: 'Special instructions (optional)', coupon: 'Coupon code', apply: 'Apply', discount: 'Discount', total: 'Total',
      payUpi: 'You can pay by UPI after ordering, or at the counter.', payCounter: 'Pay at the counter or to the waiter after your meal.', place: 'Place order', back: 'Back to menu',
      cpNA: 'Coupons are not available right now.', cpOk: 'Coupon applied ✓', badQr: 'This QR code is not valid. Please ask the staff for help.', closed: 'This restaurant is not taking orders right now.',
      s_pending: 'Received', s_preparing: 'Preparing', s_ready: 'Ready', s_served: 'Served',
      h_pending: 'Order received', d_pending: 'The kitchen has your order.', h_preparing: 'Being prepared', d_preparing: 'Your food is on the way.',
      h_ready: 'Ready!', d_ready: 'Your order is ready. Enjoy.', h_served: 'Enjoy your meal', d_served: 'Thank you for ordering.', h_cancelled: 'Order cancelled', d_cancelled: 'Please ask the staff for help.',
      paid: 'Paid', payBoth: 'Pay online or at the counter', payCash: 'Pay at the counter', payWith: 'Pay ₹{a} with UPI', afterPay: 'After paying, staff will confirm your payment.',
      need: 'Need something?', water: 'Water', napkins: 'Napkins', waiter: 'Waiter', bill: 'Bill', how: 'How was it?', comments: 'Comments (optional)', sendFb: 'Send feedback', thanks: 'Thank you!',
      tapStar: 'Tap a star rating first.', orderMore: 'Order more', noTable: 'Table not detected. Please ask the staff.', notified: 'Staff have been notified', lang: 'Language' },
    hi: { all: 'सभी', veg: 'सिर्फ़ शाकाहारी', other: 'अन्य', table: 'टेबल {l}', empty: 'अभी कोई व्यंजन उपलब्ध नहीं है।', items: '{n} आइटम', cart: 'कार्ट देखें', contains: 'इसमें है', add: 'जोड़ें',
      yourOrder: 'आपका ऑर्डर', note: 'विशेष निर्देश (वैकल्पिक)', coupon: 'कूपन कोड', apply: 'लगाएँ', discount: 'छूट', total: 'कुल',
      payUpi: 'ऑर्डर के बाद आप UPI से या काउंटर पर भुगतान कर सकते हैं।', payCounter: 'खाने के बाद काउंटर पर या वेटर को भुगतान करें।', place: 'ऑर्डर दें', back: 'मेन्यू पर वापस',
      cpNA: 'कूपन अभी उपलब्ध नहीं हैं।', cpOk: 'कूपन लग गया ✓', badQr: 'यह QR कोड मान्य नहीं है। कृपया स्टाफ़ से मदद लें।', closed: 'यह रेस्तरां अभी ऑर्डर नहीं ले रहा है।',
      s_pending: 'प्राप्त', s_preparing: 'बन रहा है', s_ready: 'तैयार', s_served: 'परोसा गया',
      h_pending: 'ऑर्डर मिल गया', d_pending: 'किचन को आपका ऑर्डर मिल गया है।', h_preparing: 'तैयार हो रहा है', d_preparing: 'आपका खाना जल्द आ रहा है।',
      h_ready: 'तैयार है!', d_ready: 'आपका ऑर्डर तैयार है। आनंद लें।', h_served: 'भोजन का आनंद लें', d_served: 'ऑर्डर करने के लिए धन्यवाद।', h_cancelled: 'ऑर्डर रद्द हुआ', d_cancelled: 'कृपया स्टाफ़ से मदद लें।',
      paid: 'भुगतान हो गया', payBoth: 'ऑनलाइन या काउंटर पर भुगतान करें', payCash: 'काउंटर पर भुगतान करें', payWith: 'UPI से ₹{a} चुकाएँ', afterPay: 'भुगतान के बाद स्टाफ़ उसकी पुष्टि करेगा।',
      need: 'कुछ चाहिए?', water: 'पानी', napkins: 'नैपकिन', waiter: 'वेटर', bill: 'बिल', how: 'कैसा रहा?', comments: 'टिप्पणी (वैकल्पिक)', sendFb: 'फ़ीडबैक भेजें', thanks: 'धन्यवाद!',
      tapStar: 'पहले स्टार रेटिंग चुनें।', orderMore: 'और ऑर्डर करें', noTable: 'टेबल की पहचान नहीं हुई। कृपया स्टाफ़ से कहें।', notified: 'स्टाफ़ को सूचना दे दी गई है', lang: 'भाषा' },
    bn: { all: 'সব', veg: 'শুধু নিরামিষ', other: 'অন্যান্য', table: 'টেবিল {l}', empty: 'এখনও কোনো খাবার নেই।', items: '{n}টি আইটেম', cart: 'কার্ট দেখুন', contains: 'এতে আছে', add: 'যোগ করুন',
      yourOrder: 'আপনার অর্ডার', note: 'বিশেষ নির্দেশ (ঐচ্ছিক)', coupon: 'কুপন কোড', apply: 'প্রয়োগ করুন', discount: 'ছাড়', total: 'মোট',
      payUpi: 'অর্ডারের পর UPI-তে বা কাউন্টারে টাকা দিতে পারেন।', payCounter: 'খাওয়ার পর কাউন্টারে বা ওয়েটারকে টাকা দিন।', place: 'অর্ডার করুন', back: 'মেনুতে ফিরুন',
      cpNA: 'কুপন এখন পাওয়া যাচ্ছে না।', cpOk: 'কুপন প্রয়োগ হয়েছে ✓', badQr: 'এই QR কোডটি সঠিক নয়। অনুগ্রহ করে স্টাফের সাহায্য নিন।', closed: 'এই রেস্তোরাঁ এখন অর্ডার নিচ্ছে না।',
      s_pending: 'গৃহীত', s_preparing: 'তৈরি হচ্ছে', s_ready: 'তৈরি', s_served: 'পরিবেশিত',
      h_pending: 'অর্ডার পাওয়া গেছে', d_pending: 'রান্নাঘর আপনার অর্ডার পেয়েছে।', h_preparing: 'তৈরি হচ্ছে', d_preparing: 'আপনার খাবার আসছে।',
      h_ready: 'তৈরি!', d_ready: 'আপনার অর্ডার তৈরি। উপভোগ করুন।', h_served: 'খাবার উপভোগ করুন', d_served: 'অর্ডার করার জন্য ধন্যবাদ।', h_cancelled: 'অর্ডার বাতিল হয়েছে', d_cancelled: 'অনুগ্রহ করে স্টাফের সাহায্য নিন।',
      paid: 'পরিশোধিত', payBoth: 'অনলাইনে বা কাউন্টারে পরিশোধ করুন', payCash: 'কাউন্টারে পরিশোধ করুন', payWith: 'UPI-তে ₹{a} দিন', afterPay: 'টাকা দেওয়ার পর স্টাফ নিশ্চিত করবেন।',
      need: 'কিছু লাগবে?', water: 'জল', napkins: 'ন্যাপকিন', waiter: 'ওয়েটার', bill: 'বিল', how: 'কেমন লাগল?', comments: 'মন্তব্য (ঐচ্ছিক)', sendFb: 'মতামত পাঠান', thanks: 'ধন্যবাদ!',
      tapStar: 'আগে স্টার রেটিং দিন।', orderMore: 'আরও অর্ডার করুন', noTable: 'টেবিল শনাক্ত হয়নি। অনুগ্রহ করে স্টাফকে বলুন।', notified: 'স্টাফকে জানানো হয়েছে', lang: 'ভাষা' },
    te: { all: 'అన్నీ', veg: 'శాకాహారం మాత్రమే', other: 'ఇతరాలు', table: 'టేబుల్ {l}', empty: 'ఇంకా వంటకాలు అందుబాటులో లేవు.', items: '{n} ఐటెమ్‌లు', item1: '{n} ఐటెమ్', cart: 'కార్ట్ చూడండి', contains: 'ఇందులో ఉన్నవి', add: 'జోడించు',
      yourOrder: 'మీ ఆర్డర్', note: 'ప్రత్యేక సూచనలు (ఐచ్ఛికం)', coupon: 'కూపన్ కోడ్', apply: 'వర్తింపజేయి', discount: 'తగ్గింపు', total: 'మొత్తం',
      payUpi: 'ఆర్డర్ తర్వాత UPI ద్వారా లేదా కౌంటర్ వద్ద చెల్లించవచ్చు.', payCounter: 'భోజనం తర్వాత కౌంటర్ వద్ద లేదా వెయిటర్‌కు చెల్లించండి.', place: 'ఆర్డర్ చేయండి', back: 'మెనూకు తిరిగి',
      cpNA: 'కూపన్లు ప్రస్తుతం అందుబాటులో లేవు.', cpOk: 'కూపన్ వర్తించింది ✓', badQr: 'ఈ QR కోడ్ చెల్లదు. దయచేసి సిబ్బంది సహాయం తీసుకోండి.', closed: 'ఈ రెస్టారెంట్ ప్రస్తుతం ఆర్డర్లు తీసుకోవడం లేదు.',
      s_pending: 'అందింది', s_preparing: 'తయారవుతోంది', s_ready: 'సిద్ధం', s_served: 'వడ్డించారు',
      h_pending: 'ఆర్డర్ అందింది', d_pending: 'కిచెన్‌కు మీ ఆర్డర్ అందింది.', h_preparing: 'తయారవుతోంది', d_preparing: 'మీ ఆహారం త్వరలో వస్తోంది.',
      h_ready: 'సిద్ధంగా ఉంది!', d_ready: 'మీ ఆర్డర్ సిద్ధంగా ఉంది. ఆనందించండి.', h_served: 'భోజనం ఆనందించండి', d_served: 'ఆర్డర్ చేసినందుకు ధన్యవాదాలు.', h_cancelled: 'ఆర్డర్ రద్దు అయింది', d_cancelled: 'దయచేసి సిబ్బంది సహాయం తీసుకోండి.',
      paid: 'చెల్లించారు', payBoth: 'ఆన్‌లైన్‌లో లేదా కౌంటర్ వద్ద చెల్లించండి', payCash: 'కౌంటర్ వద్ద చెల్లించండి', payWith: 'UPI ద్వారా ₹{a} చెల్లించండి', afterPay: 'చెల్లించిన తర్వాత సిబ్బంది నిర్ధారిస్తారు.',
      need: 'ఏమైనా కావాలా?', water: 'నీళ్లు', napkins: 'నాప్కిన్లు', waiter: 'వెయిటర్', bill: 'బిల్లు', how: 'ఎలా ఉంది?', comments: 'వ్యాఖ్యలు (ఐచ్ఛికం)', sendFb: 'ఫీడ్‌బ్యాక్ పంపండి', thanks: 'ధన్యవాదాలు!',
      tapStar: 'ముందుగా స్టార్ రేటింగ్ ఇవ్వండి.', orderMore: 'మరిన్ని ఆర్డర్ చేయండి', noTable: 'టేబుల్ గుర్తించబడలేదు. దయచేసి సిబ్బందిని అడగండి.', notified: 'సిబ్బందికి తెలియజేశాం', lang: 'భాష' },
    mr: { all: 'सर्व', veg: 'फक्त शाकाहारी', other: 'इतर', table: 'टेबल {l}', empty: 'अजून कोणतेही पदार्थ उपलब्ध नाहीत.', items: '{n} आयटम', cart: 'कार्ट पहा', contains: 'यात आहे', add: 'जोडा',
      yourOrder: 'तुमची ऑर्डर', note: 'विशेष सूचना (पर्यायी)', coupon: 'कूपन कोड', apply: 'लागू करा', discount: 'सवलत', total: 'एकूण',
      payUpi: 'ऑर्डरनंतर तुम्ही UPI ने किंवा काउंटरवर पैसे देऊ शकता.', payCounter: 'जेवणानंतर काउंटरवर किंवा वेटरला पैसे द्या.', place: 'ऑर्डर द्या', back: 'मेनूकडे परत',
      cpNA: 'कूपन सध्या उपलब्ध नाहीत.', cpOk: 'कूपन लागू झाले ✓', badQr: 'हा QR कोड वैध नाही. कृपया स्टाफची मदत घ्या.', closed: 'हे रेस्टॉरंट सध्या ऑर्डर घेत नाही.',
      s_pending: 'मिळाली', s_preparing: 'तयार होत आहे', s_ready: 'तयार', s_served: 'वाढले',
      h_pending: 'ऑर्डर मिळाली', d_pending: 'किचनला तुमची ऑर्डर मिळाली आहे.', h_preparing: 'तयार होत आहे', d_preparing: 'तुमचे जेवण लवकरच येत आहे.',
      h_ready: 'तयार आहे!', d_ready: 'तुमची ऑर्डर तयार आहे. आस्वाद घ्या.', h_served: 'जेवणाचा आस्वाद घ्या', d_served: 'ऑर्डर केल्याबद्दल धन्यवाद.', h_cancelled: 'ऑर्डर रद्द झाली', d_cancelled: 'कृपया स्टाफची मदत घ्या.',
      paid: 'पैसे दिले', payBoth: 'ऑनलाइन किंवा काउंटरवर पैसे द्या', payCash: 'काउंटरवर पैसे द्या', payWith: 'UPI ने ₹{a} द्या', afterPay: 'पैसे दिल्यानंतर स्टाफ पुष्टी करेल.',
      need: 'काही हवे आहे का?', water: 'पाणी', napkins: 'नॅपकिन', waiter: 'वेटर', bill: 'बिल', how: 'कसे वाटले?', comments: 'टिप्पणी (पर्यायी)', sendFb: 'अभिप्राय पाठवा', thanks: 'धन्यवाद!',
      tapStar: 'आधी स्टार रेटिंग निवडा.', orderMore: 'आणखी ऑर्डर करा', noTable: 'टेबल ओळखले गेले नाही. कृपया स्टाफला सांगा.', notified: 'स्टाफला कळवले आहे', lang: 'भाषा' },
    ta: { all: 'அனைத்தும்', veg: 'சைவம் மட்டும்', other: 'மற்றவை', table: 'மேசை {l}', empty: 'இன்னும் உணவுகள் இல்லை.', items: '{n} பொருட்கள்', item1: '{n} பொருள்', cart: 'கார்ட்டைப் பார்க்க', contains: 'இதில் உள்ளது', add: 'சேர்',
      yourOrder: 'உங்கள் ஆர்டர்', note: 'சிறப்பு குறிப்புகள் (விருப்பம்)', coupon: 'கூப்பன் குறியீடு', apply: 'பயன்படுத்து', discount: 'தள்ளுபடி', total: 'மொத்தம்',
      payUpi: 'ஆர்டர் செய்த பிறகு UPI மூலமாகவோ கவுண்டரிலோ பணம் செலுத்தலாம்.', payCounter: 'சாப்பிட்ட பிறகு கவுண்டரிலோ பணியாளரிடமோ பணம் செலுத்துங்கள்.', place: 'ஆர்டர் செய்', back: 'மெனுவுக்குத் திரும்பு',
      cpNA: 'கூப்பன்கள் இப்போது கிடைக்கவில்லை.', cpOk: 'கூப்பன் பயன்படுத்தப்பட்டது ✓', badQr: 'இந்த QR குறியீடு செல்லாது. பணியாளர்களிடம் உதவி கேளுங்கள்.', closed: 'இந்த உணவகம் இப்போது ஆர்டர்களை ஏற்கவில்லை.',
      s_pending: 'பெறப்பட்டது', s_preparing: 'தயாராகிறது', s_ready: 'தயார்', s_served: 'பரிமாறப்பட்டது',
      h_pending: 'ஆர்டர் பெறப்பட்டது', d_pending: 'சமையலறைக்கு உங்கள் ஆர்டர் கிடைத்தது.', h_preparing: 'தயாராகிறது', d_preparing: 'உங்கள் உணவு விரைவில் வருகிறது.',
      h_ready: 'தயார்!', d_ready: 'உங்கள் ஆர்டர் தயார். சுவையுங்கள்.', h_served: 'உணவை ரசியுங்கள்', d_served: 'ஆர்டர் செய்ததற்கு நன்றி.', h_cancelled: 'ஆர்டர் ரத்து செய்யப்பட்டது', d_cancelled: 'பணியாளர்களிடம் உதவி கேளுங்கள்.',
      paid: 'செலுத்தப்பட்டது', payBoth: 'ஆன்லைனில் அல்லது கவுண்டரில் செலுத்துங்கள்', payCash: 'கவுண்டரில் செலுத்துங்கள்', payWith: 'UPI மூலம் ₹{a} செலுத்து', afterPay: 'பணம் செலுத்திய பிறகு பணியாளர் உறுதிசெய்வார்.',
      need: 'ஏதேனும் வேண்டுமா?', water: 'தண்ணீர்', napkins: 'நாப்கின்', waiter: 'பணியாளர்', bill: 'பில்', how: 'எப்படி இருந்தது?', comments: 'கருத்துகள் (விருப்பம்)', sendFb: 'கருத்தை அனுப்பு', thanks: 'நன்றி!',
      tapStar: 'முதலில் நட்சத்திர மதிப்பீடு தேர்ந்தெடுங்கள்.', orderMore: 'மேலும் ஆர்டர் செய்', noTable: 'மேசை கண்டறியப்படவில்லை. பணியாளரிடம் கேளுங்கள்.', notified: 'பணியாளர்களுக்குத் தெரிவிக்கப்பட்டது', lang: 'மொழி' },
    ur: { all: 'سب', veg: 'صرف سبزی خور', other: 'دیگر', table: 'ٹیبل {l}', empty: 'ابھی کوئی ڈش دستیاب نہیں۔', items: '{n} آئٹمز', item1: '{n} آئٹم', cart: 'کارٹ دیکھیں', contains: 'اس میں شامل ہے', add: 'شامل کریں',
      yourOrder: 'آپ کا آرڈر', note: 'خصوصی ہدایات (اختیاری)', coupon: 'کوپن کوڈ', apply: 'لاگو کریں', discount: 'رعایت', total: 'کل',
      payUpi: 'آرڈر کے بعد آپ UPI سے یا کاؤنٹر پر ادائیگی کر سکتے ہیں۔', payCounter: 'کھانے کے بعد کاؤنٹر پر یا ویٹر کو ادائیگی کریں۔', place: 'آرڈر دیں', back: 'مینو پر واپس',
      cpNA: 'کوپن ابھی دستیاب نہیں ہیں۔', cpOk: 'کوپن لاگو ہو گیا ✓', badQr: 'یہ QR کوڈ درست نہیں ہے۔ براہِ کرم عملے سے مدد لیں۔', closed: 'یہ ریسٹورنٹ ابھی آرڈر نہیں لے رہا۔',
      s_pending: 'موصول', s_preparing: 'تیار ہو رہا ہے', s_ready: 'تیار', s_served: 'پیش کیا گیا',
      h_pending: 'آرڈر موصول ہو گیا', d_pending: 'کچن کو آپ کا آرڈر مل گیا ہے۔', h_preparing: 'تیار ہو رہا ہے', d_preparing: 'آپ کا کھانا جلد آ رہا ہے۔',
      h_ready: 'تیار ہے!', d_ready: 'آپ کا آرڈر تیار ہے۔ نوش فرمائیں۔', h_served: 'کھانے سے لطف اٹھائیں', d_served: 'آرڈر کرنے کا شکریہ۔', h_cancelled: 'آرڈر منسوخ ہو گیا', d_cancelled: 'براہِ کرم عملے سے مدد لیں۔',
      paid: 'ادائیگی ہو گئی', payBoth: 'آن لائن یا کاؤنٹر پر ادائیگی کریں', payCash: 'کاؤنٹر پر ادائیگی کریں', payWith: 'UPI سے ₹{a} ادا کریں', afterPay: 'ادائیگی کے بعد عملہ تصدیق کرے گا۔',
      need: 'کچھ چاہیے؟', water: 'پانی', napkins: 'نیپکن', waiter: 'ویٹر', bill: 'بل', how: 'کیسا رہا؟', comments: 'تبصرہ (اختیاری)', sendFb: 'رائے بھیجیں', thanks: 'شکریہ!',
      tapStar: 'پہلے اسٹار ریٹنگ چنیں۔', orderMore: 'مزید آرڈر کریں', noTable: 'ٹیبل کی شناخت نہیں ہوئی۔ براہِ کرم عملے سے کہیں۔', notified: 'عملے کو اطلاع دے دی گئی ہے', lang: 'زبان' },
    gu: { all: 'બધું', veg: 'ફક્ત શાકાહારી', other: 'અન્ય', table: 'ટેબલ {l}', empty: 'હજી કોઈ વાનગી ઉપલબ્ધ નથી.', items: '{n} આઇટમ', cart: 'કાર્ટ જુઓ', contains: 'તેમાં છે', add: 'ઉમેરો',
      yourOrder: 'તમારો ઓર્ડર', note: 'ખાસ સૂચનાઓ (વૈકલ્પિક)', coupon: 'કૂપન કોડ', apply: 'લાગુ કરો', discount: 'છૂટ', total: 'કુલ',
      payUpi: 'ઓર્ડર પછી તમે UPI થી અથવા કાઉન્ટર પર ચુકવણી કરી શકો છો.', payCounter: 'જમ્યા પછી કાઉન્ટર પર અથવા વેઇટરને ચુકવણી કરો.', place: 'ઓર્ડર આપો', back: 'મેનૂ પર પાછા',
      cpNA: 'કૂપન હાલમાં ઉપલબ્ધ નથી.', cpOk: 'કૂપન લાગુ થયું ✓', badQr: 'આ QR કોડ માન્ય નથી. કૃપા કરીને સ્ટાફની મદદ લો.', closed: 'આ રેસ્ટોરન્ટ હાલ ઓર્ડર લઈ રહી નથી.',
      s_pending: 'મળ્યો', s_preparing: 'તૈયાર થાય છે', s_ready: 'તૈયાર', s_served: 'પીરસ્યું',
      h_pending: 'ઓર્ડર મળી ગયો', d_pending: 'કિચનને તમારો ઓર્ડર મળી ગયો છે.', h_preparing: 'તૈયાર થઈ રહ્યું છે', d_preparing: 'તમારું ભોજન જલ્દી આવે છે.',
      h_ready: 'તૈયાર છે!', d_ready: 'તમારો ઓર્ડર તૈયાર છે. આનંદ માણો.', h_served: 'ભોજનનો આનંદ માણો', d_served: 'ઓર્ડર કરવા બદલ આભાર.', h_cancelled: 'ઓર્ડર રદ થયો', d_cancelled: 'કૃપા કરીને સ્ટાફની મદદ લો.',
      paid: 'ચુકવણી થઈ ગઈ', payBoth: 'ઓનલાઇન અથવા કાઉન્ટર પર ચુકવણી કરો', payCash: 'કાઉન્ટર પર ચુકવણી કરો', payWith: 'UPI થી ₹{a} ચૂકવો', afterPay: 'ચુકવણી પછી સ્ટાફ પુષ્ટિ કરશે.',
      need: 'કંઈ જોઈએ છે?', water: 'પાણી', napkins: 'નેપકિન', waiter: 'વેઇટર', bill: 'બિલ', how: 'કેવું રહ્યું?', comments: 'ટિપ્પણી (વૈકલ્પિક)', sendFb: 'પ્રતિભાવ મોકલો', thanks: 'આભાર!',
      tapStar: 'પહેલા સ્ટાર રેટિંગ પસંદ કરો.', orderMore: 'વધુ ઓર્ડર કરો', noTable: 'ટેબલ ઓળખાયું નથી. કૃપા કરીને સ્ટાફને કહો.', notified: 'સ્ટાફને જાણ કરવામાં આવી છે', lang: 'ભાષા' },
    kn: { all: 'ಎಲ್ಲಾ', veg: 'ಸಸ್ಯಾಹಾರ ಮಾತ್ರ', other: 'ಇತರೆ', table: 'ಟೇಬಲ್ {l}', empty: 'ಇನ್ನೂ ಯಾವುದೇ ಖಾದ್ಯಗಳಿಲ್ಲ.', items: '{n} ಐಟಂಗಳು', item1: '{n} ಐಟಂ', cart: 'ಕಾರ್ಟ್ ನೋಡಿ', contains: 'ಇದರಲ್ಲಿದೆ', add: 'ಸೇರಿಸಿ',
      yourOrder: 'ನಿಮ್ಮ ಆರ್ಡರ್', note: 'ವಿಶೇಷ ಸೂಚನೆಗಳು (ಐಚ್ಛಿಕ)', coupon: 'ಕೂಪನ್ ಕೋಡ್', apply: 'ಅನ್ವಯಿಸಿ', discount: 'ರಿಯಾಯಿತಿ', total: 'ಒಟ್ಟು',
      payUpi: 'ಆರ್ಡರ್ ನಂತರ UPI ಮೂಲಕ ಅಥವಾ ಕೌಂಟರ್‌ನಲ್ಲಿ ಪಾವತಿಸಬಹುದು.', payCounter: 'ಊಟದ ನಂತರ ಕೌಂಟರ್‌ನಲ್ಲಿ ಅಥವಾ ವೇಟರ್‌ಗೆ ಪಾವತಿಸಿ.', place: 'ಆರ್ಡರ್ ಮಾಡಿ', back: 'ಮೆನುಗೆ ಹಿಂತಿರುಗಿ',
      cpNA: 'ಕೂಪನ್‌ಗಳು ಈಗ ಲಭ್ಯವಿಲ್ಲ.', cpOk: 'ಕೂಪನ್ ಅನ್ವಯವಾಯಿತು ✓', badQr: 'ಈ QR ಕೋಡ್ ಮಾನ್ಯವಾಗಿಲ್ಲ. ದಯವಿಟ್ಟು ಸಿಬ್ಬಂದಿಯ ಸಹಾಯ ಪಡೆಯಿರಿ.', closed: 'ಈ ರೆಸ್ಟೋರೆಂಟ್ ಈಗ ಆರ್ಡರ್ ತೆಗೆದುಕೊಳ್ಳುತ್ತಿಲ್ಲ.',
      s_pending: 'ಸ್ವೀಕರಿಸಲಾಗಿದೆ', s_preparing: 'ತಯಾರಾಗುತ್ತಿದೆ', s_ready: 'ಸಿದ್ಧ', s_served: 'ಬಡಿಸಲಾಗಿದೆ',
      h_pending: 'ಆರ್ಡರ್ ಸ್ವೀಕರಿಸಲಾಗಿದೆ', d_pending: 'ಅಡುಗೆಮನೆಗೆ ನಿಮ್ಮ ಆರ್ಡರ್ ತಲುಪಿದೆ.', h_preparing: 'ತಯಾರಾಗುತ್ತಿದೆ', d_preparing: 'ನಿಮ್ಮ ಊಟ ಬೇಗ ಬರಲಿದೆ.',
      h_ready: 'ಸಿದ್ಧ!', d_ready: 'ನಿಮ್ಮ ಆರ್ಡರ್ ಸಿದ್ಧವಾಗಿದೆ. ಆನಂದಿಸಿ.', h_served: 'ಊಟವನ್ನು ಆನಂದಿಸಿ', d_served: 'ಆರ್ಡರ್ ಮಾಡಿದ್ದಕ್ಕೆ ಧನ್ಯವಾದಗಳು.', h_cancelled: 'ಆರ್ಡರ್ ರದ್ದಾಗಿದೆ', d_cancelled: 'ದಯವಿಟ್ಟು ಸಿಬ್ಬಂದಿಯ ಸಹಾಯ ಪಡೆಯಿರಿ.',
      paid: 'ಪಾವತಿಸಲಾಗಿದೆ', payBoth: 'ಆನ್‌ಲೈನ್ ಅಥವಾ ಕೌಂಟರ್‌ನಲ್ಲಿ ಪಾವತಿಸಿ', payCash: 'ಕೌಂಟರ್‌ನಲ್ಲಿ ಪಾವತಿಸಿ', payWith: 'UPI ಮೂಲಕ ₹{a} ಪಾವತಿಸಿ', afterPay: 'ಪಾವತಿಯ ನಂತರ ಸಿಬ್ಬಂದಿ ದೃಢೀಕರಿಸುತ್ತಾರೆ.',
      need: 'ಏನಾದರೂ ಬೇಕೇ?', water: 'ನೀರು', napkins: 'ನ್ಯಾಪ್ಕಿನ್', waiter: 'ವೇಟರ್', bill: 'ಬಿಲ್', how: 'ಹೇಗಿತ್ತು?', comments: 'ಕಾಮೆಂಟ್‌ಗಳು (ಐಚ್ಛಿಕ)', sendFb: 'ಪ್ರತಿಕ್ರಿಯೆ ಕಳುಹಿಸಿ', thanks: 'ಧನ್ಯವಾದಗಳು!',
      tapStar: 'ಮೊದಲು ಸ್ಟಾರ್ ರೇಟಿಂಗ್ ಆರಿಸಿ.', orderMore: 'ಇನ್ನಷ್ಟು ಆರ್ಡರ್ ಮಾಡಿ', noTable: 'ಟೇಬಲ್ ಪತ್ತೆಯಾಗಿಲ್ಲ. ದಯವಿಟ್ಟು ಸಿಬ್ಬಂದಿಯನ್ನು ಕೇಳಿ.', notified: 'ಸಿಬ್ಬಂದಿಗೆ ತಿಳಿಸಲಾಗಿದೆ', lang: 'ಭಾಷೆ' },
    ml: { all: 'എല്ലാം', veg: 'വെജ് മാത്രം', other: 'മറ്റുള്ളവ', table: 'ടേബിൾ {l}', empty: 'ഇതുവരെ വിഭവങ്ങളൊന്നും ലഭ്യമല്ല.', items: '{n} ഇനങ്ങൾ', item1: '{n} ഇനം', cart: 'കാർട്ട് കാണുക', contains: 'ഇതിൽ അടങ്ങിയിരിക്കുന്നു', add: 'ചേർക്കുക',
      yourOrder: 'നിങ്ങളുടെ ഓർഡർ', note: 'പ്രത്യേക നിർദ്ദേശങ്ങൾ (ഓപ്ഷണൽ)', coupon: 'കൂപ്പൺ കോഡ്', apply: 'പ്രയോഗിക്കുക', discount: 'കിഴിവ്', total: 'ആകെ',
      payUpi: 'ഓർഡറിന് ശേഷം UPI വഴിയോ കൗണ്ടറിലോ പണം നൽകാം.', payCounter: 'ഭക്ഷണത്തിന് ശേഷം കൗണ്ടറിലോ വെയിറ്റർക്കോ പണം നൽകുക.', place: 'ഓർഡർ ചെയ്യുക', back: 'മെനുവിലേക്ക് മടങ്ങുക',
      cpNA: 'കൂപ്പണുകൾ ഇപ്പോൾ ലഭ്യമല്ല.', cpOk: 'കൂപ്പൺ പ്രയോഗിച്ചു ✓', badQr: 'ഈ QR കോഡ് സാധുവല്ല. ദയവായി ജീവനക്കാരുടെ സഹായം തേടുക.', closed: 'ഈ റെസ്റ്റോറന്റ് ഇപ്പോൾ ഓർഡറുകൾ സ്വീകരിക്കുന്നില്ല.',
      s_pending: 'ലഭിച്ചു', s_preparing: 'തയ്യാറാക്കുന്നു', s_ready: 'തയ്യാർ', s_served: 'വിളമ്പി',
      h_pending: 'ഓർഡർ ലഭിച്ചു', d_pending: 'അടുക്കളയ്ക്ക് നിങ്ങളുടെ ഓർഡർ ലഭിച്ചു.', h_preparing: 'തയ്യാറാക്കുന്നു', d_preparing: 'നിങ്ങളുടെ ഭക്ഷണം ഉടൻ എത്തും.',
      h_ready: 'തയ്യാർ!', d_ready: 'നിങ്ങളുടെ ഓർഡർ തയ്യാറാണ്. ആസ്വദിക്കൂ.', h_served: 'ഭക്ഷണം ആസ്വദിക്കൂ', d_served: 'ഓർഡർ ചെയ്തതിന് നന്ദി.', h_cancelled: 'ഓർഡർ റദ്ദാക്കി', d_cancelled: 'ദയവായി ജീവനക്കാരുടെ സഹായം തേടുക.',
      paid: 'പണമടച്ചു', payBoth: 'ഓൺലൈനായോ കൗണ്ടറിലോ പണമടയ്ക്കാം', payCash: 'കൗണ്ടറിൽ പണമടയ്ക്കുക', payWith: 'UPI വഴി ₹{a} അടയ്ക്കുക', afterPay: 'പണമടച്ച ശേഷം ജീവനക്കാർ സ്ഥിരീകരിക്കും.',
      need: 'എന്തെങ്കിലും വേണോ?', water: 'വെള്ളം', napkins: 'നാപ്കിൻ', waiter: 'വെയിറ്റർ', bill: 'ബിൽ', how: 'എങ്ങനെയുണ്ടായിരുന്നു?', comments: 'അഭിപ്രായങ്ങൾ (ഓപ്ഷണൽ)', sendFb: 'ഫീഡ്ബാക്ക് അയയ്ക്കുക', thanks: 'നന്ദി!',
      tapStar: 'ആദ്യം സ്റ്റാർ റേറ്റിംഗ് തിരഞ്ഞെടുക്കുക.', orderMore: 'കൂടുതൽ ഓർഡർ ചെയ്യുക', noTable: 'ടേബിൾ തിരിച്ചറിഞ്ഞില്ല. ദയവായി ജീവനക്കാരോട് ചോദിക്കുക.', notified: 'ജീവനക്കാരെ അറിയിച്ചു', lang: 'ഭാഷ' },
    or: { all: 'ସବୁ', veg: 'କେବଳ ନିରାମିଷ', other: 'ଅନ୍ୟାନ୍ୟ', table: 'ଟେବୁଲ {l}', empty: 'ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି ଖାଦ୍ୟ ଉପଲବ୍ଧ ନାହିଁ।', items: '{n}ଟି ଆଇଟମ', cart: 'କାର୍ଟ ଦେଖନ୍ତୁ', contains: 'ଏଥିରେ ଅଛି', add: 'ଯୋଗ କରନ୍ତୁ',
      yourOrder: 'ଆପଣଙ୍କ ଅର୍ଡର', note: 'ବିଶେଷ ନିର୍ଦ୍ଦେଶ (ଇଚ୍ଛାଧୀନ)', coupon: 'କୁପନ କୋଡ୍', apply: 'ଲାଗୁ କରନ୍ତୁ', discount: 'ରିହାତି', total: 'ମୋଟ',
      payUpi: 'ଅର୍ଡର ପରେ ଆପଣ UPI ଦ୍ୱାରା କିମ୍ବା କାଉଣ୍ଟରରେ ଦେୟ ଦେଇପାରିବେ।', payCounter: 'ଖାଇବା ପରେ କାଉଣ୍ଟରରେ କିମ୍ବା ୱେଟରଙ୍କୁ ଦେୟ ଦିଅନ୍ତୁ।', place: 'ଅର୍ଡର କରନ୍ତୁ', back: 'ମେନୁକୁ ଫେରନ୍ତୁ',
      cpNA: 'କୁପନ ବର୍ତ୍ତମାନ ଉପଲବ୍ଧ ନାହିଁ।', cpOk: 'କୁପନ ଲାଗୁ ହେଲା ✓', badQr: 'ଏହି QR କୋଡ୍ ବୈଧ ନୁହେଁ। ଦୟାକରି କର୍ମଚାରୀଙ୍କ ସାହାଯ୍ୟ ନିଅନ୍ତୁ।', closed: 'ଏହି ରେଷ୍ଟୁରାଣ୍ଟ ବର୍ତ୍ତମାନ ଅର୍ଡର ନେଉନାହିଁ।',
      s_pending: 'ମିଳିଲା', s_preparing: 'ପ୍ରସ୍ତୁତ ହେଉଛି', s_ready: 'ପ୍ରସ୍ତୁତ', s_served: 'ପରିବେଷଣ',
      h_pending: 'ଅର୍ଡର ମିଳିଗଲା', d_pending: 'ରୋଷେଇଘରକୁ ଆପଣଙ୍କ ଅର୍ଡର ମିଳିଛି।', h_preparing: 'ପ୍ରସ୍ତୁତ ହେଉଛି', d_preparing: 'ଆପଣଙ୍କ ଖାଦ୍ୟ ଶୀଘ୍ର ଆସୁଛି।',
      h_ready: 'ପ୍ରସ୍ତୁତ!', d_ready: 'ଆପଣଙ୍କ ଅର୍ଡର ପ୍ରସ୍ତୁତ। ଉପଭୋଗ କରନ୍ତୁ।', h_served: 'ଭୋଜନ ଉପଭୋଗ କରନ୍ତୁ', d_served: 'ଅର୍ଡର କରିଥିବାରୁ ଧନ୍ୟବାଦ।', h_cancelled: 'ଅର୍ଡର ବାତିଲ ହେଲା', d_cancelled: 'ଦୟାକରି କର୍ମଚାରୀଙ୍କ ସାହାଯ୍ୟ ନିଅନ୍ତୁ।',
      paid: 'ଦେୟ ହୋଇଗଲା', payBoth: 'ଅନଲାଇନ୍ କିମ୍ବା କାଉଣ୍ଟରରେ ଦେୟ ଦିଅନ୍ତୁ', payCash: 'କାଉଣ୍ଟରରେ ଦେୟ ଦିଅନ୍ତୁ', payWith: 'UPI ଦ୍ୱାରା ₹{a} ଦିଅନ୍ତୁ', afterPay: 'ଦେୟ ପରେ କର୍ମଚାରୀ ନିଶ୍ଚିତ କରିବେ।',
      need: 'କିଛି ଦରକାର?', water: 'ପାଣି', napkins: 'ନାପକିନ୍', waiter: 'ୱେଟର', bill: 'ବିଲ୍', how: 'କେମିତି ଲାଗିଲା?', comments: 'ମନ୍ତବ୍ୟ (ଇଚ୍ଛାଧୀନ)', sendFb: 'ମତାମତ ପଠାନ୍ତୁ', thanks: 'ଧନ୍ୟବାଦ!',
      tapStar: 'ପ୍ରଥମେ ଷ୍ଟାର ରେଟିଂ ବାଛନ୍ତୁ।', orderMore: 'ଆହୁରି ଅର୍ଡର କରନ୍ତୁ', noTable: 'ଟେବୁଲ୍ ଚିହ୍ନଟ ହୋଇନାହିଁ। ଦୟାକରି କର୍ମଚାରୀଙ୍କୁ କୁହନ୍ତୁ।', notified: 'କର୍ମଚାରୀଙ୍କୁ ଜଣାଯାଇଛି', lang: 'ଭାଷା' },
    pa: { all: 'ਸਭ', veg: 'ਸਿਰਫ਼ ਸ਼ਾਕਾਹਾਰੀ', other: 'ਹੋਰ', table: 'ਟੇਬਲ {l}', empty: 'ਹਾਲੇ ਕੋਈ ਪਕਵਾਨ ਉਪਲਬਧ ਨਹੀਂ।', items: '{n} ਆਈਟਮ', cart: 'ਕਾਰਟ ਵੇਖੋ', contains: 'ਇਸ ਵਿੱਚ ਹੈ', add: 'ਜੋੜੋ',
      yourOrder: 'ਤੁਹਾਡਾ ਆਰਡਰ', note: 'ਖ਼ਾਸ ਹਦਾਇਤਾਂ (ਵਿਕਲਪਿਕ)', coupon: 'ਕੂਪਨ ਕੋਡ', apply: 'ਲਾਗੂ ਕਰੋ', discount: 'ਛੋਟ', total: 'ਕੁੱਲ',
      payUpi: 'ਆਰਡਰ ਤੋਂ ਬਾਅਦ ਤੁਸੀਂ UPI ਰਾਹੀਂ ਜਾਂ ਕਾਊਂਟਰ ਤੇ ਭੁਗਤਾਨ ਕਰ ਸਕਦੇ ਹੋ।', payCounter: 'ਖਾਣੇ ਤੋਂ ਬਾਅਦ ਕਾਊਂਟਰ ਤੇ ਜਾਂ ਵੇਟਰ ਨੂੰ ਭੁਗਤਾਨ ਕਰੋ।', place: 'ਆਰਡਰ ਦਿਓ', back: 'ਮੀਨੂ ਤੇ ਵਾਪਸ',
      cpNA: 'ਕੂਪਨ ਇਸ ਵੇਲੇ ਉਪਲਬਧ ਨਹੀਂ ਹਨ।', cpOk: 'ਕੂਪਨ ਲਾਗੂ ਹੋ ਗਿਆ ✓', badQr: 'ਇਹ QR ਕੋਡ ਵੈਧ ਨਹੀਂ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਸਟਾਫ਼ ਤੋਂ ਮਦਦ ਲਓ।', closed: 'ਇਹ ਰੈਸਟੋਰੈਂਟ ਇਸ ਵੇਲੇ ਆਰਡਰ ਨਹੀਂ ਲੈ ਰਿਹਾ।',
      s_pending: 'ਮਿਲਿਆ', s_preparing: 'ਤਿਆਰ ਹੋ ਰਿਹਾ', s_ready: 'ਤਿਆਰ', s_served: 'ਪਰੋਸਿਆ',
      h_pending: 'ਆਰਡਰ ਮਿਲ ਗਿਆ', d_pending: 'ਰਸੋਈ ਨੂੰ ਤੁਹਾਡਾ ਆਰਡਰ ਮਿਲ ਗਿਆ ਹੈ।', h_preparing: 'ਤਿਆਰ ਹੋ ਰਿਹਾ ਹੈ', d_preparing: 'ਤੁਹਾਡਾ ਖਾਣਾ ਜਲਦੀ ਆ ਰਿਹਾ ਹੈ।',
      h_ready: 'ਤਿਆਰ ਹੈ!', d_ready: 'ਤੁਹਾਡਾ ਆਰਡਰ ਤਿਆਰ ਹੈ। ਆਨੰਦ ਮਾਣੋ।', h_served: 'ਖਾਣੇ ਦਾ ਆਨੰਦ ਮਾਣੋ', d_served: 'ਆਰਡਰ ਕਰਨ ਲਈ ਧੰਨਵਾਦ।', h_cancelled: 'ਆਰਡਰ ਰੱਦ ਹੋ ਗਿਆ', d_cancelled: 'ਕਿਰਪਾ ਕਰਕੇ ਸਟਾਫ਼ ਤੋਂ ਮਦਦ ਲਓ।',
      paid: 'ਭੁਗਤਾਨ ਹੋ ਗਿਆ', payBoth: 'ਔਨਲਾਈਨ ਜਾਂ ਕਾਊਂਟਰ ਤੇ ਭੁਗਤਾਨ ਕਰੋ', payCash: 'ਕਾਊਂਟਰ ਤੇ ਭੁਗਤਾਨ ਕਰੋ', payWith: 'UPI ਨਾਲ ₹{a} ਭਰੋ', afterPay: 'ਭੁਗਤਾਨ ਤੋਂ ਬਾਅਦ ਸਟਾਫ਼ ਪੁਸ਼ਟੀ ਕਰੇਗਾ।',
      need: 'ਕੁਝ ਚਾਹੀਦਾ ਹੈ?', water: 'ਪਾਣੀ', napkins: 'ਨੈਪਕਿਨ', waiter: 'ਵੇਟਰ', bill: 'ਬਿੱਲ', how: 'ਕਿਵੇਂ ਲੱਗਿਆ?', comments: 'ਟਿੱਪਣੀ (ਵਿਕਲਪਿਕ)', sendFb: 'ਫੀਡਬੈਕ ਭੇਜੋ', thanks: 'ਧੰਨਵਾਦ!',
      tapStar: 'ਪਹਿਲਾਂ ਸਟਾਰ ਰੇਟਿੰਗ ਚੁਣੋ।', orderMore: 'ਹੋਰ ਆਰਡਰ ਕਰੋ', noTable: 'ਟੇਬਲ ਦੀ ਪਛਾਣ ਨਹੀਂ ਹੋਈ। ਕਿਰਪਾ ਕਰਕੇ ਸਟਾਫ਼ ਨੂੰ ਦੱਸੋ।', notified: 'ਸਟਾਫ਼ ਨੂੰ ਸੂਚਿਤ ਕਰ ਦਿੱਤਾ ਗਿਆ ਹੈ', lang: 'ਭਾਸ਼ਾ' },
    as: { all: 'সকলো', veg: 'কেৱল নিৰামিষ', other: 'অন্যান্য', table: 'টেবুল {l}', empty: 'এতিয়ালৈকে কোনো খাদ্য উপলব্ধ নাই।', items: '{n}টা আইটেম', cart: 'কাৰ্ট চাওক', contains: 'ইয়াত আছে', add: 'যোগ কৰক',
      yourOrder: 'আপোনাৰ অৰ্ডাৰ', note: 'বিশেষ নিৰ্দেশ (ঐচ্ছিক)', coupon: 'কুপন কোড', apply: 'প্ৰয়োগ কৰক', discount: 'ৰেহাই', total: 'মুঠ',
      payUpi: 'অৰ্ডাৰৰ পিছত আপুনি UPI ৰে বা কাউণ্টাৰত পইচা দিব পাৰে।', payCounter: 'খোৱাৰ পিছত কাউণ্টাৰত বা ৱেইটাৰক পইচা দিয়ক।', place: 'অৰ্ডাৰ কৰক', back: 'মেনুলৈ উভতি যাওক',
      cpNA: 'কুপন এতিয়া উপলব্ধ নাই।', cpOk: 'কুপন প্ৰয়োগ কৰা হৈছে ✓', badQr: 'এই QR কোড বৈধ নহয়। অনুগ্ৰহ কৰি কৰ্মীৰ সহায় লওক।', closed: 'এই ৰেস্টুৰেণ্টে এতিয়া অৰ্ডাৰ লোৱা নাই।',
      s_pending: 'গ্ৰহণ কৰা হৈছে', s_preparing: 'প্ৰস্তুত হৈছে', s_ready: 'সাজু', s_served: 'পৰিৱেশন কৰা হৈছে',
      h_pending: 'অৰ্ডাৰ পোৱা গৈছে', d_pending: 'ৰান্ধনিশালে আপোনাৰ অৰ্ডাৰ পাইছে।', h_preparing: 'প্ৰস্তুত হৈছে', d_preparing: 'আপোনাৰ খাদ্য সোনকালে আহিব।',
      h_ready: 'সাজু!', d_ready: 'আপোনাৰ অৰ্ডাৰ সাজু। উপভোগ কৰক।', h_served: 'খাদ্য উপভোগ কৰক', d_served: 'অৰ্ডাৰ কৰাৰ বাবে ধন্যবাদ।', h_cancelled: 'অৰ্ডাৰ বাতিল হৈছে', d_cancelled: 'অনুগ্ৰহ কৰি কৰ্মীৰ সহায় লওক।',
      paid: 'পইচা দিয়া হৈছে', payBoth: 'অনলাইনেৰে বা কাউণ্টাৰত পইচা দিয়ক', payCash: 'কাউণ্টাৰত পইচা দিয়ক', payWith: 'UPI ৰে ₹{a} দিয়ক', afterPay: 'পইচা দিয়াৰ পিছত কৰ্মীয়ে নিশ্চিত কৰিব।',
      need: 'কিবা লাগে নেকি?', water: 'পানী', napkins: 'নেপকিন', waiter: 'ৱেইটাৰ', bill: 'বিল', how: 'কেনেকুৱা লাগিল?', comments: 'মন্তব্য (ঐচ্ছিক)', sendFb: 'মতামত পঠাওক', thanks: 'ধন্যবাদ!',
      tapStar: 'প্ৰথমে ষ্টাৰ ৰেটিং বাছক।', orderMore: 'অধিক অৰ্ডাৰ কৰক', noTable: 'টেবুল চিনাক্ত হোৱা নাই। অনুগ্ৰহ কৰি কৰ্মীক কওক।', notified: 'কৰ্মীক জনোৱা হৈছে', lang: 'ভাষা' },
    fr: { all: 'Tout', veg: 'Végétarien', other: 'Autres', table: 'Table {l}', empty: 'Aucun plat disponible pour le moment.', items: '{n} articles', item1: '{n} article', cart: 'Voir le panier', contains: 'Contient', add: 'AJOUTER',
      yourOrder: 'Votre commande', note: 'Instructions spéciales (facultatif)', coupon: 'Code promo', apply: 'Appliquer', discount: 'Remise', total: 'Total',
      payUpi: 'Vous pouvez payer par UPI après la commande, ou à la caisse.', payCounter: 'Payez à la caisse ou auprès du serveur après votre repas.', place: 'Commander', back: 'Retour au menu',
      cpNA: 'Les codes promo ne sont pas disponibles pour le moment.', cpOk: 'Code promo appliqué ✓', badQr: 'Ce QR code n’est pas valide. Demandez de l’aide au personnel.', closed: 'Ce restaurant ne prend pas de commandes pour le moment.',
      s_pending: 'Reçue', s_preparing: 'En préparation', s_ready: 'Prête', s_served: 'Servie',
      h_pending: 'Commande reçue', d_pending: 'La cuisine a bien reçu votre commande.', h_preparing: 'En préparation', d_preparing: 'Votre repas arrive bientôt.',
      h_ready: 'Prête !', d_ready: 'Votre commande est prête. Bon appétit.', h_served: 'Bon appétit', d_served: 'Merci pour votre commande.', h_cancelled: 'Commande annulée', d_cancelled: 'Demandez de l’aide au personnel.',
      paid: 'Payée', payBoth: 'Payez en ligne ou à la caisse', payCash: 'Payez à la caisse', payWith: 'Payer ₹{a} par UPI', afterPay: 'Après le paiement, le personnel le confirmera.',
      need: 'Besoin de quelque chose ?', water: 'Eau', napkins: 'Serviettes', waiter: 'Serveur', bill: 'Addition', how: 'Comment était-ce ?', comments: 'Commentaires (facultatif)', sendFb: 'Envoyer l’avis', thanks: 'Merci !',
      tapStar: 'Choisissez d’abord une note en étoiles.', orderMore: 'Commander encore', noTable: 'Table non détectée. Demandez au personnel.', notified: 'Le personnel a été prévenu', lang: 'Langue' },
    it: { all: 'Tutto', veg: 'Solo vegetariano', other: 'Altro', table: 'Tavolo {l}', empty: 'Nessun piatto disponibile al momento.', items: '{n} articoli', item1: '{n} articolo', cart: 'Vedi carrello', contains: 'Contiene', add: 'AGGIUNGI',
      yourOrder: 'Il tuo ordine', note: 'Istruzioni speciali (facoltativo)', coupon: 'Codice sconto', apply: 'Applica', discount: 'Sconto', total: 'Totale',
      payUpi: 'Puoi pagare con UPI dopo l’ordine, oppure alla cassa.', payCounter: 'Paga alla cassa o al cameriere dopo il pasto.', place: 'Invia ordine', back: 'Torna al menu',
      cpNA: 'I codici sconto non sono disponibili al momento.', cpOk: 'Codice applicato ✓', badQr: 'Questo codice QR non è valido. Chiedi aiuto al personale.', closed: 'Questo ristorante al momento non accetta ordini.',
      s_pending: 'Ricevuto', s_preparing: 'In preparazione', s_ready: 'Pronto', s_served: 'Servito',
      h_pending: 'Ordine ricevuto', d_pending: 'La cucina ha ricevuto il tuo ordine.', h_preparing: 'In preparazione', d_preparing: 'Il tuo cibo sta arrivando.',
      h_ready: 'Pronto!', d_ready: 'Il tuo ordine è pronto. Buon appetito.', h_served: 'Buon appetito', d_served: 'Grazie per aver ordinato.', h_cancelled: 'Ordine annullato', d_cancelled: 'Chiedi aiuto al personale.',
      paid: 'Pagato', payBoth: 'Paga online o alla cassa', payCash: 'Paga alla cassa', payWith: 'Paga ₹{a} con UPI', afterPay: 'Dopo il pagamento, il personale lo confermerà.',
      need: 'Ti serve qualcosa?', water: 'Acqua', napkins: 'Tovaglioli', waiter: 'Cameriere', bill: 'Conto', how: 'Com’è andata?', comments: 'Commenti (facoltativo)', sendFb: 'Invia feedback', thanks: 'Grazie!',
      tapStar: 'Scegli prima una valutazione a stelle.', orderMore: 'Ordina ancora', noTable: 'Tavolo non rilevato. Chiedi al personale.', notified: 'Il personale è stato avvisato', lang: 'Lingua' },
    ru: { all: 'Все', veg: 'Только вегетарианское', other: 'Другое', table: 'Стол {l}', empty: 'Пока нет доступных блюд.', items: 'Позиций: {n}', cart: 'Открыть корзину', contains: 'Содержит', add: 'ДОБАВИТЬ',
      yourOrder: 'Ваш заказ', note: 'Особые пожелания (необязательно)', coupon: 'Промокод', apply: 'Применить', discount: 'Скидка', total: 'Итого',
      payUpi: 'Оплатить можно через UPI после заказа или на кассе.', payCounter: 'Оплатите на кассе или официанту после еды.', place: 'Оформить заказ', back: 'Назад к меню',
      cpNA: 'Промокоды сейчас недоступны.', cpOk: 'Промокод применён ✓', badQr: 'Этот QR-код недействителен. Обратитесь за помощью к персоналу.', closed: 'Этот ресторан сейчас не принимает заказы.',
      s_pending: 'Принят', s_preparing: 'Готовится', s_ready: 'Готов', s_served: 'Подан',
      h_pending: 'Заказ принят', d_pending: 'Кухня получила ваш заказ.', h_preparing: 'Готовится', d_preparing: 'Ваша еда скоро будет.',
      h_ready: 'Готово!', d_ready: 'Ваш заказ готов. Приятного аппетита.', h_served: 'Приятного аппетита', d_served: 'Спасибо за заказ.', h_cancelled: 'Заказ отменён', d_cancelled: 'Обратитесь за помощью к персоналу.',
      paid: 'Оплачено', payBoth: 'Оплатите онлайн или на кассе', payCash: 'Оплатите на кассе', payWith: 'Оплатить ₹{a} через UPI', afterPay: 'После оплаты персонал подтвердит платёж.',
      need: 'Что-нибудь нужно?', water: 'Вода', napkins: 'Салфетки', waiter: 'Официант', bill: 'Счёт', how: 'Как вам?', comments: 'Комментарий (необязательно)', sendFb: 'Отправить отзыв', thanks: 'Спасибо!',
      tapStar: 'Сначала выберите оценку звёздами.', orderMore: 'Заказать ещё', noTable: 'Стол не определён. Обратитесь к персоналу.', notified: 'Персонал уведомлён', lang: 'Язык' }
  };

  var codes = LANGS.map(function (l) { return l[0]; });
  function detect() {
    try { var s = localStorage.getItem('df_lang'); if (s && TR[s]) return s; } catch (e) {}
    var nav = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en']);
    for (var i = 0; i < nav.length; i++) { var c = String(nav[i]).slice(0, 2).toLowerCase(); if (codes.indexOf(c) > -1) return c; }
    return 'en';
  }
  var cur = detect();
  var loaded = {};
  function apply() {
    var el = document.documentElement, st = el.style;
    el.lang = cur; el.dir = cur === 'ur' ? 'rtl' : 'ltr';
    var f = FONT[cur];
    if (f) {
      if (!loaded[f]) { loaded[f] = 1; var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = 'https://fonts.googleapis.com/css2?family=' + f.replace(/ /g, '+') + ':wght@400;600;700&display=swap'; document.head.appendChild(l); }
      var stack = '"' + f + '","Instrument Sans",ui-sans-serif,system-ui,sans-serif';
      st.setProperty('--body', stack); st.setProperty('--display', stack);
    } else { st.removeProperty('--body'); st.removeProperty('--display'); }
  }
  window.DF_LANGS = LANGS;
  window.DF_TR = TR;
  window.dfLang = function () { return cur; };
  window.t = function (k, v) {
    var s = (TR[cur] && TR[cur][k]) || TR.en[k] || k;
    if (v) for (var x in v) s = s.split('{' + x + '}').join(v[x]);
    return s;
  };
  window.setLang = function (c) { if (!TR[c]) return; cur = c; try { localStorage.setItem('df_lang', c); } catch (e) {} apply(); };
  window.langBtn = function () {
    var n = (LANGS.filter(function (l) { return l[0] === cur; })[0] || LANGS[0])[1];
    return '<button type="button" class="tb lgb" data-openlang="1" aria-label="Language">🌐 ' + n + '</button>';
  };
  var css = document.createElement('style');
  css.textContent = '.lgb{background:transparent;cursor:pointer;font-family:inherit;margin-left:6px}.lgl{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:14px 0}.lgo{background:transparent;color:var(--text);border:1px solid var(--line);border-radius:12px;padding:13px 8px;font:inherit;font-size:16px;cursor:pointer}.lgo.on{background:var(--accent);border-color:var(--accent);color:#1a1006;font-weight:700}';
  document.head.appendChild(css);
  apply();
})();
