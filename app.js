const {
  useState,
  useEffect
} = React;

/* BANNERS moved outside babel */
const BANNERS = window.__BANNERS || [];
const LanguageContext = React.createContext('en');
const HI = {
  "Call Now": "कॉल करें",
  "Call": "कॉल",
  "Map": "नक्शा",
  "Enquiry": "पूछताछ",
  "View details →": "जानकारी देखें →",
  "Back to Home": "होम पर लौटें",
  "← Back to Home": "← होम पर लौटें",
  "Service information": "सेवा की जानकारी",
  "Enquire about this service": "इस सेवा की जानकारी लें",
  "Tell us which service you need. Confirm the required documents and available assistance with Jan Seva Point before visiting.": "अपनी सेवा बताएं। आने से पहले Jan Seva Point से जरूरी दस्तावेज और उपलब्ध सहायता की पुष्टि करें।",
  "Enquire on WhatsApp": "WhatsApp पर पूछें",
  "Aadhaar / PAN services": "Aadhaar / PAN सेवाएं",
  "Aadhaar updates, step by step": "Aadhaar अपडेट की प्रक्रिया",
  "Choose what you want to update. Check the process before visiting, then ask Jan Seva Point for guidance.": "जो जानकारी बदलनी है, उसे चुनें। आने से पहले प्रक्रिया पढ़ें और Jan Seva Point से मार्गदर्शन लें।",
  "What would you like to update?": "क्या बदलना चाहते हैं?",
  "Select one option to see the details.": "जानकारी के लिए एक विकल्प चुनें।",
  "Mobile number": "मोबाइल नंबर",
  "Name correction": "नाम में सुधार",
  "Address": "पता",
  "Date of birth": "जन्मतिथि",
  "Gender": "लिंग",
  "Photo / biometrics": "फोटो / बायोमेट्रिक",
  "PAN card assistance": "PAN कार्ड सहायता",
  "Need a new PAN or a correction? Enquire about the applicable process and documents.": "नया PAN या सुधार चाहिए? प्रक्रिया और दस्तावेजों की जानकारी लें।",
  "Ask about PAN": "PAN के बारे में पूछें",
  "Aadhaar changes are processed by UIDAI through authorised channels. Confirm whether this shop provides guidance or authorised update services before visiting.": "Aadhaar में बदलाव UIDAI के अधिकृत माध्यमों से होते हैं। आने से पहले पुष्टि करें कि दुकान मार्गदर्शन देती है या अधिकृत अपडेट सेवाएं।",
  "Source:": "स्रोत:",
  "UIDAI update guidance ↗": "UIDAI अपडेट जानकारी ↗",
  "Selected:": "चुना गया:",
  "Change your Aadhaar mobile number": "Aadhaar का मोबाइल नंबर बदलें",
  "What you need": "क्या चाहिए",
  "The process": "प्रक्रिया",
  "Your enquiry:": "आपकी पूछताछ:",
  "Ask for guidance and confirm the next step.": "मार्गदर्शन लें और अगला कदम पूछें।",
  "WhatsApp opens with your selected service. Review the message before sending. Do not send your Aadhaar number, OTP or document photos.": "WhatsApp में चुनी गई सेवा का संदेश खुलेगा। भेजने से पहले पढ़ें। Aadhaar नंबर, OTP या दस्तावेजों की फोटो न भेजें।",
  "Register a new number or replace a number that is no longer working.": "नया नंबर दर्ज कराएं या बंद हो चुका नंबर बदलें।",
  "No supporting document or old mobile number is required for a mobile-number update.": "मोबाइल नंबर अपडेट के लिए पुराना नंबर या सहायक दस्तावेज जरूरी नहीं है।",
  "Visit an authorised Aadhaar Enrolment / Update Centre in person.": "अधिकृत Aadhaar नामांकन / अपडेट केंद्र पर स्वयं जाएं।",
  "Ask for a mobile-number update and complete the verification required by the centre.": "मोबाइल नंबर अपडेट के लिए कहें और केंद्र का जरूरी सत्यापन पूरा करें।",
  "Check the new number carefully and keep the acknowledgement slip.": "नया नंबर ध्यान से जांचें और पावती पर्ची रखें।",
  "A mobile-number update cannot be completed online. Sending this enquiry does not change your Aadhaar.": "मोबाइल नंबर ऑनलाइन अपडेट नहीं होता। यह पूछताछ भेजने से Aadhaar में बदलाव नहीं होगा।",
  "Correct your name through an authorised Aadhaar centre.": "अधिकृत Aadhaar केंद्र पर नाम में सुधार कराएं।",
  "Original proof of identity accepted by UIDAI, showing the required name and photo.": "UIDAI द्वारा मान्य मूल पहचान पत्र, जिसमें सही नाम और फोटो हों।",
  "Check the current UIDAI document list for your case.": "अपने मामले के लिए UIDAI की मौजूदा दस्तावेज सूची देखें।",
  "Check eligible supporting documents.": "मान्य सहायक दस्तावेज जांचें।",
  "Visit an authorised Aadhaar Enrolment / Update Centre.": "अधिकृत Aadhaar नामांकन / अपडेट केंद्र जाएं।",
  "Review the entered details and retain your acknowledgement.": "दर्ज जानकारी जांचें और पावती रखें।",
  "Name updates have limits. Special cases need UIDAI exception processing.": "नाम अपडेट की सीमा है। विशेष मामलों में UIDAI की अपवाद प्रक्रिया जरूरी है।",
  "Update your address online where eligible or at an authorised centre.": "पात्र होने पर पता ऑनलाइन बदलें या अधिकृत केंद्र जाएं।",
  "Valid proof of address from the UIDAI list, or eligible Head of Family documentation.": "UIDAI सूची का मान्य पता प्रमाण या पात्र परिवार मुखिया के दस्तावेज।",
  "Choose the online or centre route based on your eligibility.": "पात्रता के अनुसार ऑनलाइन या केंद्र वाला तरीका चुनें।",
  "Provide the applicable address documents.": "जरूरी पता दस्तावेज दें।",
  "Review and submit; retain the request reference.": "जांचकर जमा करें और अनुरोध संख्या रखें।",
  "Online services require access to your Aadhaar-registered mobile number.": "ऑनलाइन सेवाओं के लिए Aadhaar से जुड़े मोबाइल नंबर का उपयोग जरूरी है।",
  "Request a date-of-birth correction at an authorised centre.": "अधिकृत केंद्र पर जन्मतिथि में सुधार का अनुरोध करें।",
  "Applicable proof of date of birth from the current UIDAI list.": "UIDAI की मौजूदा सूची के अनुसार जन्मतिथि प्रमाण।",
  "Check documents and eligibility for your correction.": "सुधार के लिए दस्तावेज और पात्रता जांचें।",
  "Keep your acknowledgement for tracking.": "स्थिति देखने के लिए पावती रखें।",
  "Date-of-birth corrections have strict limits and special-case rules. Confirm your case with UIDAI.": "जन्मतिथि सुधार की सख्त सीमा और विशेष नियम हैं। अपना मामला UIDAI से जांचें।",
  "Request a gender update at an authorised Aadhaar centre.": "अधिकृत Aadhaar केंद्र पर लिंग अपडेट का अनुरोध करें।",
  "Check UIDAI rules for your case, especially if already updated before.": "अपने मामले के UIDAI नियम जांचें, खासकर अगर पहले अपडेट हुआ है।",
  "Check the applicable update rules.": "लागू अपडेट नियम जांचें।",
  "Review the request and keep the acknowledgement.": "अनुरोध जांचें और पावती रखें।",
  "Gender updates have limits; further changes need exception processing.": "लिंग अपडेट की सीमा है। आगे के बदलाव के लिए अपवाद प्रक्रिया जरूरी है।",
  "Update your photograph, fingerprints or iris at an authorised centre.": "अधिकृत केंद्र पर फोटो, उंगलियों के निशान या आंखों की पुतली अपडेट कराएं।",
  "Confirm any case-specific requirements with the centre before visiting.": "आने से पहले केंद्र से अपने मामले की जरूरतें पूछें।",
  "The operator captures your required biometric update.": "केंद्र का कर्मचारी जरूरी बायोमेट्रिक दर्ज करता है।",
  "Review and retain your acknowledgement.": "जांचें और पावती रखें।",
  "Photo and biometric updates require an in-person centre visit.": "फोटो और बायोमेट्रिक अपडेट के लिए स्वयं केंद्र जाना जरूरी है।",
  "What services are available?": "कौन सी सेवाएं उपलब्ध हैं?",
  "What are your opening hours?": "दुकान का समय क्या है?",
  "How do I reach the shop?": "दुकान कैसे पहुंचें?",
  "Can I change my Aadhaar mobile number?": "क्या Aadhaar का मोबाइल नंबर बदल सकता हूं?",
  "Which documents should I bring?": "कौन से दस्तावेज लाऊं?",
  "The site lists e-District applications, certificates, HPSEB bill-payment assistance, land-record copies, scanning and printing, Aadhaar/PAN guidance, form filling and digital services. Ask the shop to confirm assistance for your request.": "यहां ई-डिस्ट्रिक्ट आवेदन, प्रमाण पत्र, HPSEB बिल सहायता, भूमि रिकॉर्ड की प्रति, स्कैन और प्रिंट, आधार/पैन मार्गदर्शन, फॉर्म और डिजिटल सेवाएं दी गई हैं। अपनी जरूरत के लिए दुकान से पुष्टि करें।",
  "The listed hours are Monday to Saturday, 9:30 AM to 7:30 PM. Call +91 82190 37234 to confirm before visiting on a holiday.": "समय सोमवार से शनिवार, सुबह 9:30 से शाम 7:30 है। छुट्टी के दिन आने से पहले +91 82190 37234 पर पुष्टि करें।",
  "Garden Colony, Nehria Road, opposite HPPWD Rest House, Tehsil Amb, Himachal Pradesh 177203. Use the Map / Directions link below. Google Maps uses your location when permitted, or asks for a starting point.": "गार्डन कॉलोनी, नेहरिया रोड, HPPWD विश्राम गृह के सामने, तहसील अंब, हिमाचल प्रदेश 177203। नीचे नक्शे का लिंक खोलें। अनुमति देने पर Google Maps आपकी जगह से रास्ता दिखाता है, या शुरुआती जगह पूछता है।",
  "A mobile-number update requires a visit to an authorised Aadhaar Enrolment / Update Centre. UIDAI says no old mobile number or supporting document is required. It cannot be done online. Ask Jan Seva Point for guidance and confirm available assistance.": "मोबाइल नंबर अपडेट के लिए अधिकृत Aadhaar नामांकन / अपडेट केंद्र जाना जरूरी है। UIDAI के अनुसार पुराना नंबर या सहायक दस्तावेज जरूरी नहीं है। यह ऑनलाइन नहीं होता। Jan Seva Point से मार्गदर्शन और उपलब्ध सहायता पूछें।",
  "Requirements depend on the service and your case. For Aadhaar corrections, check the current UIDAI supporting-document list. Ask the shop about your selected service before visiting. Do not send Aadhaar numbers, OTPs or document photos in this chat.": "दस्तावेज सेवा और आपके मामले पर निर्भर हैं। Aadhaar सुधार के लिए UIDAI की मौजूदा सूची देखें। आने से पहले दुकान से पूछें। इस चैट में Aadhaar नंबर, OTP या दस्तावेजों की फोटो न भेजें।",
  "Ask Jan Seva Point": "Jan Seva Point से पूछें",
  "Choose a common question for a quick written answer.": "लिखित जवाब के लिए सवाल चुनें।",
  "Continue on WhatsApp": "WhatsApp पर आगे पूछें",
  "Opens a chat with the shop. Review your enquiry before sending.": "दुकान की चैट खुलेगी। भेजने से पहले संदेश पढ़ें।",
  "Citizen services · Amb & Una": "नागरिक सेवाएं · अंब और ऊना",
  "Help with government applications, certificates, bill payments and everyday digital work.": "सरकारी आवेदन, प्रमाण पत्र, बिल भुगतान और रोजमर्रा के डिजिटल काम में मदद।",
  "Social & directions": "सोशल मीडिया और रास्ता",
  "Quick links": "जरूरी लिंक",
  "Visit or contact us": "आएं या संपर्क करें",
  "Garden Colony, Nehria Road": "गार्डन कॉलोनी, नेहरिया रोड",
  "Opp. HPPWD Rest House, Tehsil Amb": "HPPWD विश्राम गृह के सामने, तहसील अंब",
  "Himachal Pradesh 177203": "हिमाचल प्रदेश 177203",
  "Monday to Saturday": "सोमवार से शनिवार",
  "9:30 AM - 7:30 PM": "सुबह 9:30 - शाम 7:30",
  "WhatsApp enquiry ↗": "WhatsApp पर पूछताछ ↗",
  "All rights reserved.": "सर्वाधिकार सुरक्षित।",
  "Powered by": "द्वारा संचालित",
  "Areas we serve": "हमारे सेवा क्षेत्र",
  "Una, Amb, Bangana, Haroli, Ghanari, Bharwain, Ispur, Jol, Dulehar, Bihrukalan, Kaloh and Mehatpur Basdehra.": "ऊना, अंब, बंगाणा, हरोली, घनारी, भरवाईं, ईसपुर, जोल, दुलैहड़, बिहरूकलां, कलोह और मैहतपुर बसदेहड़ा।",
  "Kangra, Mandi, Shimla, Solan, Kullu, Chamba, Hamirpur, Bilaspur, Sirmaur, Kinnaur, and Lahaul and Spiti.": "कांगड़ा, मंडी, शिमला, सोलन, कुल्लू, चंबा, हमीरपुर, बिलासपुर, सिरमौर, किन्नौर और लाहौल व स्पीति।",
  "e-District": "ई-डिस्ट्रिक्ट",
  "Certificates": "प्रमाण पत्र",
  "HPSEB Bill": "HPSEB बिल",
  "Nakal Jamabandi": "नकल जमाबंदी",
  "Scan & Print": "स्कैन और प्रिंट",
  "Aadhaar/PAN": "आधार/पैन",
  "Form Filling": "फॉर्म भरना",
  "Digital": "डिजिटल सेवाएं",
  "Amb": "अंब",
  "Una": "ऊना",
  "All Una District": "पूरा ऊना जिला",
  "Mubarakpur": "मुबारकपुर",
  "Daulatpur": "दौलतपुर",
  "Dhautpur": "धौतपुर",
  "Kalruhi": "कलरुही",
  "Nehria Road": "नेहरिया रोड",
  "All Himachal Pradesh": "पूरा हिमाचल प्रदेश",
  "Lok Mitra Kendra · Amb & Una": "लोक मित्र केंद्र · अंब और ऊना",
  "1. Services": "1. सेवाएं",
  "2. Contact": "2. संपर्क",
  "We facilitate Himachal Online Seva, G2C applications, certificates, bill payment, form filling and digital citizen services at our Lok Mitra Kendra.": "हम अपने लोक मित्र केंद्र पर हिमाचल ऑनलाइन सेवा, सरकारी आवेदन, प्रमाण पत्र, बिल भुगतान, फॉर्म और डिजिटल नागरिक सेवाओं में सहायता करते हैं।",
  "+91 82190 37234 | Garden Colony, Nehria Road, Amb, HP 177203": "+91 82190 37234 | गार्डन कॉलोनी, नेहरिया रोड, अंब, हिमाचल प्रदेश 177203",
  "Loading banners...": "बैनर खुल रहे हैं...",
  "Open WhatsApp Web": "WhatsApp Web खोलें",
  "India": "भारत",
  "Nepal": "नेपाल",
  "USA/Canada": "अमेरिका/कनाडा",
  "UK": "ब्रिटेन",
  "UAE": "संयुक्त अरब अमीरात",
  "Australia": "ऑस्ट्रेलिया",
  "Singapore": "सिंगापुर",
  "Country code": "देश का कोड",
  "Service": "सेवा",
  "Name": "नाम",
  "Phone": "फोन",
  "Remark": "टिप्पणी",
  "Selected": "चुना गया",
  "Source": "स्रोत"
};
function tr(text, lang) {
  return lang === 'hi' ? HI[text] || text : text;
}
function LocalText({
  text
}) {
  return tr(text, React.useContext(LanguageContext));
}
const T = {
  nav_home: {
    en: 'Home',
    hi: 'होम'
  },
  nav_services: {
    en: 'Services',
    hi: 'सेवाएं'
  },
  nav_about: {
    en: 'About',
    hi: 'हमारे बारे में'
  },
  nav_gallery: {
    en: 'Gallery',
    hi: 'गैलरी'
  },
  nav_faq: {
    en: 'FAQ',
    hi: 'सवाल'
  },
  nav_terms: {
    en: 'Terms',
    hi: 'नियम'
  },
  nav_contact: {
    en: 'Contact',
    hi: 'संपर्क'
  },
  hero_badge: {
    en: 'Authorised Lok Mitra Kendra (LMK) – Amb & Una',
    hi: "अधिकृत लोक मित्र केंद्र (LMK) - अंब और ऊना"
  },
  hero_title: {
    en: 'Lok Mitra Kendra Amb - serving Una district and Himachal Pradesh',
    hi: "लोक मित्र केंद्र अंब - पूरे ऊना जिले और हिमाचल प्रदेश के लिए"
  },
  hero_desc: {
    en: 'Based in Amb, Jan Seva Point helps people across Una district and Himachal Pradesh with government online services, certificates, form filling and bill payments. Ask us for Aadhaar and PAN guidance.',
    hi: "अंब स्थित Jan Seva Point पूरे ऊना जिले और हिमाचल प्रदेश में सरकारी ऑनलाइन सेवाओं, प्रमाण पत्र, फॉर्म और बिल भुगतान में सहायता करता है। Aadhaar और PAN के लिए मार्गदर्शन लें।"
  },
  btn_view_services: {
    en: 'View Services',
    hi: 'सेवाएं देखें'
  },
  panel_phone: {
    en: 'Phone',
    hi: 'फोन'
  },
  panel_hours: {
    en: 'Hours',
    hi: 'समय'
  },
  hours_val: {
    en: 'Mon–Sat, 9:30 AM – 7:30 PM',
    hi: "सोमवार से शनिवार, सुबह 9:30 - शाम 7:30"
  },
  panel_address: {
    en: 'Address',
    hi: 'पता'
  },
  address_val: {
    en: 'Garden Colony, Nehria Road, Opp. HPPWD Rest House, Tehsil Amb, HP 177203',
    hi: "गार्डन कॉलोनी, नेहरिया रोड, HPPWD विश्राम गृह के सामने, तहसील अंब, हिमाचल प्रदेश 177203"
  },
  home_extra_title: {
    en: 'Lok Mitra Kendra Amb & Una – Jan Seva Point',
    hi: "लोक मित्र केंद्र अंब और ऊना - Jan Seva Point"
  },
  home_extra_p1: {
    en: 'Lok Mitra Kendra serving Amb, Una (all district), Mubarakpur, Daulatpur, Dhautpur, Kalruhi and all Himachal Pradesh – LMK, G2C, government online services, certificates, form filling, bill payment, license apply & renew. Jan Seva Point is your trusted LMK Centre.',
    hi: "अंब, पूरे ऊना जिले, मुबारकपुर, दौलतपुर, धौतपुर, कलरुही और पूरे हिमाचल प्रदेश के लिए लोक मित्र केंद्र। सरकारी ऑनलाइन सेवाएं, प्रमाण पत्र, फॉर्म, बिल भुगतान और लाइसेंस आवेदन व नवीनीकरण में सहायता। Jan Seva Point आपका भरोसेमंद LMK केंद्र है।"
  },
  home_extra_p2: {
    en: 'Best Lok Mitra Kendra for Amb, Una district, Mubarakpur, Daulatpur and all Himachal. Visit Jan Seva Point for easy citizen services. Searching online for a Lok Mitra Kendra, CSC centre, Jan Seva Kendra or Jan Seva Point near you? If you are in Amb, Una or a nearby area, contact Jan Seva Point to check the service and documents you need.',
    hi: "अंब, ऊना जिले, मुबारकपुर, दौलतपुर और पूरे हिमाचल के लिए बेहतरीन लोक मित्र केंद्र। आसान नागरिक सेवाओं के लिए Jan Seva Point आएं। अपने पास लोक मित्र केंद्र, CSC सेंटर, जन सेवा केंद्र या जन सेवा पॉइंट ऑनलाइन खोज रहे हैं? अंब, ऊना या आस-पास के इलाके में हैं तो Jan Seva Point से संपर्क करें और अपनी सेवा व ज़रूरी दस्तावेज़ की पुष्टि करें।"
  },
  home_rate_note: {
    en: 'Authorised Lok Mitra Kendra for G2C Himachal Online Seva, certificates, form filling, bill payment and digital citizen services in Amb & Una.',
    hi: "अंब और ऊना में हिमाचल ऑनलाइन सेवा, सरकारी आवेदन, प्रमाण पत्र, फॉर्म, बिल भुगतान और डिजिटल नागरिक सेवाओं के लिए अधिकृत लोक मित्र केंद्र।"
  },
  services_title: {
    en: 'Our Services',
    hi: 'हमारी सेवाएं'
  },
  services_sub: {
    en: 'Lok Mitra Kendra services at Jan Seva Point Amb & Una.',
    hi: "Jan Seva Point अंब और ऊना में लोक मित्र केंद्र सेवाएं।"
  },
  about_title: {
    en: 'About Us',
    hi: 'हमारे बारे में'
  },
  about_p1: {
    en: 'Jan Seva Point is an authorised Lok Mitra Kendra (LMK Centre) in Amb and Una, HP.',
    hi: "Jan Seva Point अंब और ऊना, हिमाचल प्रदेश में अधिकृत लोक मित्र केंद्र (LMK) है।"
  },
  about_p2: {
    en: 'We serve Amb, Una (all district), Mubarakpur, Daulatpur, Dhautpur, Kalruhi, Nehria Road and all Himachal Pradesh.',
    hi: 'हम अंब, ऊना (पूरा जिला), मुबारकपुर, दौलतपुर, धौतपुर, कलरुही, नेहरिया रोड और पूरे हिमाचल प्रदेश की सेवा करते हैं।'
  },
  gallery_title: {
    en: 'Gallery',
    hi: 'गैलरी'
  },
  gallery_sub: {
    en: 'Our Lok Mitra Kendra centre and banners.',
    hi: "हमारे लोक मित्र केंद्र और बैनर।"
  },
  faq_title: {
    en: 'FAQ',
    hi: 'सवाल'
  },
  faq_sub: {
    en: 'Quick answers.',
    hi: 'त्वरित जवाब।'
  },
  terms_title: {
    en: 'Terms & Conditions',
    hi: 'नियम एवं शर्तें'
  },
  terms_sub: {
    en: 'Please read carefully.',
    hi: 'कृपया पढ़ें।'
  },
  contact_title: {
    en: 'Contact',
    hi: 'संपर्क'
  },
  contact_sub: {
    en: 'We reply on WhatsApp.',
    hi: 'WhatsApp पर जवाब देंगे।'
  },
  label_name: {
    en: 'Name',
    hi: 'नाम'
  },
  label_phone: {
    en: 'Phone',
    hi: 'फोन'
  },
  label_service: {
    en: 'Service',
    hi: 'सेवा'
  },
  label_remark: {
    en: 'Remark',
    hi: "टिप्पणी"
  },
  btn_send: {
    en: 'Send on WhatsApp',
    hi: 'WhatsApp पर भेजें'
  }
};
const SERVICES = [{
  en: ['Aadhaar Card', 'New enrolment, correction & update', 'Mobile, address, biometric & e-KYC assistance at Lok Mitra Kendra'],
  hi: ["Aadhaar कार्ड", "नया नामांकन, सुधार और अपडेट", "मोबाइल, पता, बायोमेट्रिक और ई-केवाईसी सहायता"]
}, {
  en: ['PAN Card', 'New apply and correction', 'e-PAN and physical PAN card application support'],
  hi: ["PAN कार्ड", "नया आवेदन और सुधार", "ई-PAN और भौतिक PAN कार्ड आवेदन सहायता"]
}, {
  en: ['Himachal Online Seva', 'e-District G2C applications', 'Government online services and application submission'],
  hi: ["हिमाचल ऑनलाइन सेवा", "ई-डिस्ट्रिक्ट सरकारी आवेदन", "सरकारी ऑनलाइन सेवाएं और आवेदन जमा करना"]
}, {
  en: ['HPSEB Bill Payment', 'Electricity bill collection', 'Domestic and commercial bill payment assistance'],
  hi: ["HPSEB बिल भुगतान", "बिजली बिल जमा करना", "घरेलू और व्यावसायिक बिल भुगतान सहायता"]
}, {
  en: ['Certificates', 'Income, caste and other certificates', 'Help for scholarships, loans, schemes and official use'],
  hi: ["प्रमाण पत्र", "आय, जाति और अन्य प्रमाण पत्र", "छात्रवृत्ति, ऋण, योजनाओं और सरकारी काम के लिए मदद"]
}, {
  en: ['Nakal Jamabandi', 'Land record / jamabandi copy', 'Land document assistance at LMK centre'],
  hi: ["नकल जमाबंदी", "भूमि रिकॉर्ड / जमाबंदी प्रति", "LMK केंद्र पर भूमि दस्तावेज सहायता"]
}, {
  en: ['Scanning & Printing', 'Document scan, B/W and colour print', 'Clear scans and quality prints for official work'],
  hi: ["स्कैन और प्रिंट", "दस्तावेज स्कैन, काले-सफेद और रंगीन प्रिंट", "सरकारी काम के लिए साफ स्कैन और प्रिंट"]
}, {
  en: ['Form Filling', 'Online form filling and submission', 'Guided help to fill and submit government forms'],
  hi: ["फॉर्म भरना", "ऑनलाइन फॉर्म भरना और जमा करना", "सरकारी फॉर्म भरने और जमा करने में मदद"]
}, {
  en: ['Voter ID', 'New registration and correction', 'Name, address correction and EPIC related help'],
  hi: ["मतदाता पहचान पत्र", "नया पंजीकरण और सुधार", "नाम, पता और EPIC से जुड़ी मदद"]
}, {
  en: ['Digital Citizen Services', 'Photocopy and online support', 'One-stop help for government and digital work'],
  hi: ["डिजिटल नागरिक सेवाएं", "फोटोकॉपी और ऑनलाइन सहायता", "सरकारी और डिजिटल काम में एक जगह मदद"]
}, {
  en: ['Insurance Services', 'Insurance form and policy assistance', 'Help with insurance applications and related online work'],
  hi: ["बीमा सेवाएं", "बीमा फॉर्म और पॉलिसी सहायता", "बीमा आवेदन और संबंधित ऑनलाइन काम में मदद"]
}, {
  en: ['Vehicle / Car Services', 'Vehicle related forms and applications', 'Car and vehicle document / form support at LMK'],
  hi: ["वाहन / कार सेवाएं", "वाहन के फॉर्म और आवेदन", "कार और वाहन दस्तावेज / फॉर्म सहायता"]
}, {
  en: ['Personal Services', 'Person-related forms and applications', 'Assistance for individual citizen applications'],
  hi: ["व्यक्तिगत सेवाएं", "व्यक्तिगत फॉर्म और आवेदन", "नागरिकों के व्यक्तिगत आवेदनों में सहायता"]
}, {
  en: ['Old Age Pension', 'Old age pension form apply', 'Help to fill and submit old age pension application'],
  hi: ["वृद्धावस्था पेंशन", "वृद्धावस्था पेंशन आवेदन", "पेंशन फॉर्म भरने और जमा करने में मदद"]
}, {
  en: ['License Apply & Renew', 'Driving and other license help', 'New license apply and license renewal assistance'],
  hi: ["लाइसेंस आवेदन और नवीनीकरण", "ड्राइविंग और अन्य लाइसेंस सहायता", "नए लाइसेंस और नवीनीकरण में मदद"]
}];
const FAQ = [{
  q: {
    en: 'What services do you offer?',
    hi: 'कौन सी सेवाएं देते हैं?'
  },
  a: {
    en: 'Lok Mitra Kendra Amb/Una: e-District G2C, certificates, form filling, bill payment, Aadhaar, PAN, scanning, printing.',
    hi: 'ई-डिस्ट्रिक्ट सरकारी आवेदन, प्रमाण पत्र, फॉर्म, बिल भुगतान, Aadhaar, PAN, स्कैन और प्रिंट।'
  }
}, {
  q: {
    en: 'Is this an authorised centre?',
    hi: 'क्या यह अधिकृत केंद्र है?'
  },
  a: {
    en: 'Yes. Jan Seva Point operates as an authorised Lok Mitra Kendra (LMK) for government online and citizen services.',
    hi: 'हाँ। Jan Seva Point अधिकृत लोक मित्र केंद्र (LMK) के रूप में काम करता है।'
  }
}, {
  q: {
    en: 'Areas served?',
    hi: 'क्षेत्र?'
  },
  a: {
    en: 'Amb, Una (all district), Mubarakpur, Daulatpur, Dhautpur, Kalruhi, Nehria Road and all Himachal Pradesh.',
    hi: 'अंब, ऊना (पूरा जिला), मुबारकपुर, दौलतपुर, धौतपुर, कलरुही, नेहरिया रोड और पूरा हिमाचल प्रदेश।'
  }
}, {
  q: {
    en: 'Contact?',
    hi: 'संपर्क?'
  },
  a: {
    en: 'Call +91 82190 37234 or WhatsApp.',
    hi: '+91 82190 37234 कॉल या WhatsApp।'
  }
}];
function BannerSlider() {
  const lang = React.useContext(LanguageContext);
  const imgs = window.__BANNERS || BANNERS || [];
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!imgs.length) return;
    const t = setInterval(() => setI(x => (x + 1) % imgs.length), 3000);
    return () => clearInterval(t);
  }, [imgs.length]);
  if (!imgs.length) return /*#__PURE__*/React.createElement("div", {
    className: "banner-slider",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(LocalText, {
    text: "Loading banners..."
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "banner-slider"
  }, imgs.map((src, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: 'banner-slide' + (idx === i ? ' active' : '')
  }, /*#__PURE__*/React.createElement("img", {
    className: "banner-backdrop",
    src: src,
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("img", {
    className: "banner-artwork",
    src: src,
    alt: 'Banner ' + (idx + 1),
    loading: idx === 0 ? 'eager' : 'lazy'
  }))), /*#__PURE__*/React.createElement("div", {
    className: "banner-dots"
  }, imgs.map((_, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    className: 'dot' + (idx === i ? ' active' : ''),
    onClick: () => setI(idx)
  }))), /*#__PURE__*/React.createElement("button", {
    className: "banner-nav prev",
    onClick: () => setI((i - 1 + imgs.length) % imgs.length)
  }, "\u2039"), /*#__PURE__*/React.createElement("button", {
    className: "banner-nav next",
    onClick: () => setI((i + 1) % imgs.length)
  }, "\u203A"));
}

// Keep the mobile click-to-chat route; on desktop offer the installed app and a web fallback.
function openWhatsApp(event, message) {
  if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) return false;
  event.preventDefault();
  const source = event.currentTarget;
  const anchor = source.tagName === 'FORM' ? source.querySelector('button[type="submit"]') : source;
  const encoded = encodeURIComponent(message);
  let fallback = anchor.parentElement.querySelector('[data-whatsapp-web]');
  if (!fallback) {
    fallback = document.createElement('a');
    fallback.setAttribute('data-whatsapp-web', '');
    fallback.textContent = document.documentElement.lang === 'hi' ? 'WhatsApp Web खोलें' : 'Open WhatsApp Web';
    fallback.target = '_blank';
    fallback.rel = 'noopener noreferrer';
    fallback.style.cssText = 'display:inline-block;margin:8px 0 8px 12px;font-size:.85rem;color:#153a8a;text-decoration:underline;';
    anchor.insertAdjacentElement('afterend', fallback);
  }
  fallback.href = 'https://web.whatsapp.com/send?phone=918219037234&text=' + encoded;
  window.location.href = 'whatsapp://send?phone=918219037234&text=' + encoded;
  return true;
}

function ServiceSearch({lang}) {
 const e=React.createElement, hi=lang==='hi';
 const [query,setQuery]=useState(''),[active,setActive]=useState(-1),[dismissed,setDismissed]=useState(false);
 const normal=s=>s.normalize('NFKC').toLocaleLowerCase().replace(/[\u200c\u200d]/g,'').replace(/[-/]/g,' ').replace(/\s+/g,' ').trim();
 const raw=normal(query), words=raw.split(' ').filter(Boolean);
 const extra=s=>{const t=(s.en+' '+s.aliases).toLowerCase();return [ /aadhaar/.test(t)?'aadhar adhar आधार aadhaar update biometric fingerprint':'' , /pan\b/.test(t)?'पैन pan card पैन कार्ड':'' ,/pension/.test(t)?'penshan penson पेंशन':'' ,/certificate/.test(t)?'praman patra प्रमाण पत्र':'' ,/electricity|hpseb/.test(t)?'bijli बिजली bill':'' ,/water/.test(t)?'pani पानी':'' ,/nakal|jamabandi/.test(t)?'जमाबंदी नकल land record':'' ,/voter/.test(t)?'votar वोटर मतदाता':'' ,/licence/.test(t)?'license driving dl लाइसेंस':'' ,/ayushman/.test(t)?'आयुष्मान':'' ,/pm-kisan/.test(t)?'pm kisan किसान':'' ,/resume/.test(t)?'cv biodata बायोडाटा':'' ].join(' ')};
 const matches=raw?(window.JSP_SEARCH_SERVICES||[]).filter(s=>{let text=normal(s.en+' '+s.hi+' '+s.aliases+' '+extra(s));return words.every(w=>(w==='pan'||w==='पैन')?text.split(' ').includes(w):text.includes(w))}).sort((a,b)=>{let score=s=>normal(s[lang]).startsWith(raw)||normal(s.en).startsWith(raw)?0:1;return score(a)-score(b)||a.en.localeCompare(b.en)}):[];
 const href=s=>s.url+(hi?'?lang=hi':'');
 const text=hi?{k:'अपनी सेवा खोजें',h:'आपको किस सेवा में मदद चाहिए?',p:'सेवा खोजें और उसकी पूरी जानकारी देखें।',placeholder:'जैसे: पैन, आधार, पेंशन',popular:'अक्सर खोजी जाने वाली सेवाएं:',open:'सेवा की पूरी जानकारी देखें',tip:'सेवा की जानकारी के लिए नतीजे पर टैप करें। उपलब्धता और शुल्क की पुष्टि केंद्र से करें।',clear:'खोज साफ करें',none:'कोई सेवा नहीं मिली। दूसरा नाम आजमाएं या सभी सेवाएं देखें।',all:'सभी सेवाएं देखें',count:n=>`${n} मिलती-जुलती सेवाएं`}:{k:'FIND YOUR SERVICE',h:'What do you need help with?',p:'Search for a service and open its details.',placeholder:'Try PAN, Aadhaar or pension',popular:'Popular:',open:'View service details and requirements',tip:'Select a result to see the service page. Availability and fees are confirmed by the centre.',clear:'Clear search',none:'No matching services. Try another name or view all services.',all:'View all services',count:n=>`${n} matching services`};
 const update=v=>{setQuery(v);setActive(-1);setDismissed(false)};
 const icon=e('svg',{viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.8,'aria-hidden':true},e('rect',{x:3,y:5,width:18,height:14,rx:2}),e('path',{d:'M7 10h4m-4 4h7m2-5h2v3h-2z'}));
 const open=raw&&!dismissed;
 const keys=ev=>{if(ev.key==='Escape'){setDismissed(true);setActive(-1)}if(ev.key==='ArrowDown'||ev.key==='ArrowUp'){ev.preventDefault();setDismissed(false);setActive(a=>{let n=matches.length;if(!n)return -1;let next=ev.key==='ArrowDown'?(a+1)%n:(a<=0?n-1:a-1);setTimeout(()=>document.getElementById('service-suggestion-'+next)?.scrollIntoView({block:'nearest'}),0);return next})}if(ev.key==='Enter'){ev.preventDefault();if(open&&matches.length)location.href=href(matches[active>=0?active:0])}};
 return e('section',{className:'search-concept','aria-labelledby':'service-search-title'},
 e('div',{className:'sc-top'},e('div',null,e('div',{className:'sc-kicker'},text.k),e('h2',{id:'service-search-title'},text.h),e('p',null,text.p)),e('span',{className:'sc-proof'},hi?'Jan Seva Point · अंब':'Jan Seva Point · Amb')),
 e('div',{className:'sc-field'},e('svg',{viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2,'aria-hidden':true},e('circle',{cx:10.5,cy:10.5,r:6.5}),e('path',{d:'m16 16 5 5'})),e('input',{id:'service-search',className:'sc-value',type:'search',value:query,onChange:ev=>update(ev.target.value),onKeyDown:keys,onFocus:()=>setDismissed(false),placeholder:text.placeholder,'aria-label':hi?'सेवाएं खोजें':'Search services',role:'combobox','aria-autocomplete':'list','aria-expanded':!!open,'aria-controls':'service-suggestions','aria-activedescendant':active>=0?'service-suggestion-'+active:undefined,autoComplete:'off',spellCheck:false}),query&&e('button',{type:'button',className:'sc-clear','aria-label':text.clear,onClick:()=>{update('');document.getElementById('service-search').focus()}},'×')),
 e('div',{className:'sc-chips'},e('span',null,text.popular),[['Aadhaar','आधार'],['PAN','पैन'],['Pension','पेंशन'],['Certificates','प्रमाण पत्र']].map(([en,h])=>e('button',{type:'button',className:'sc-chip',key:en,onClick:()=>{update(hi?h:en==='Certificates'?'certificate':en);document.getElementById('service-search').focus()}},hi?h:en))),
 e('div',{className:'sc-sr',role:'status','aria-live':'polite'},raw?text.count(matches.length):''),
 open&&e('div',{className:'sc-results'},e('div',{className:'sc-result-label'},text.count(matches.length)),matches.length?e('div',{id:'service-suggestions',role:'listbox','aria-label':hi?'मिलती-जुलती सेवाएं':'Matching services'},matches.map((s,i)=>e('a',{className:'sc-row',id:'service-suggestion-'+i,key:s.url,href:href(s),role:'option','aria-selected':i===active,onMouseEnter:()=>setActive(i)},e('span',{className:'sc-symbol'},icon),e('span',{className:'sc-row-text'},e('strong',null,s[lang]),e('small',null,text.open)),e('span',{className:'sc-arrow','aria-hidden':true},'›')))):e('div',{className:'sc-status'},text.none,' ',e('a',{href:'/services.html'+(hi?'?lang=hi':'')},text.all))),
 e('p',{className:'sc-tip'},text.tip));
}

function App() {
  const [lang, setLang] = useState(new URLSearchParams(location.search).get('lang') === 'hi' ? 'hi' : 'en');
  useEffect(() => {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-whatsapp-web]').forEach(e => e.textContent = tr('Open WhatsApp Web', lang));
const onLangLink=e=>{const a=e.target.closest('a[href]');if(!a||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;const u=new URL(a.href,location.href);if(u.origin===location.origin&&/\.html$|\/$/.test(u.pathname)){if(lang==='hi')u.searchParams.set('lang','hi');else u.searchParams.delete('lang');if(u.href!==a.href){e.preventDefault();location.href=u.href}}};document.addEventListener('click',onLangLink);const onToggle=e=>{if(e.target.matches('details.service-expand')&&e.target.open)document.querySelectorAll('details.service-expand').forEach(d=>{if(d!==e.target)d.open=false})};document.addEventListener('toggle',onToggle,true);const onWA=e=>{const a=e.target.closest('[data-approved-whatsapp]');if(a)openWhatsApp(e,'Welcome to Jan Seva Point, how may I assist you?')};document.addEventListener('click',onWA);return()=>{document.removeEventListener('click',onLangLink);document.removeEventListener('toggle',onToggle,true);document.removeEventListener('click',onWA)};
  }, [lang]);
  const [page] = useState(window.__PAGE); const setPage = id => {location.href = pageURL(id);}; const pageURL = id => (id === 'blog' ? '/blog.html' : window.__PATHS[id]) + (lang === 'hi' ? '?lang=hi' : '');
  const [detail] = useState(window.__DETAIL || 'Aadhaar/PAN');
  const t = k => T[k] ? T[k][lang] : (k === 'Blog' && lang === 'hi' ? 'ब्लॉग' : k);
  const NAV = [['home', 'nav_home'], ['services', 'nav_services'], ['about', 'nav_about'], ['gallery', 'nav_gallery'], ['faq', 'nav_faq'], ['terms', 'nav_terms'], ['contact', 'nav_contact'],['blog','Blog']];
  return /*#__PURE__*/React.createElement(LanguageContext.Provider, {
    value: lang
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
    className: "bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand",
    onClick: () => setPage('home')
  }, /*#__PURE__*/React.createElement("img", {
    className: "mark",
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAA6bUlEQVR42u2dd3gc1b3+P+fMzFb1akuWbMuWe8Gd3qsJoRMSQhIIaaRc7iW5IYHc5Kb/0kNJIJTQEnoxEHo1xcamuXdbclHvu6stM3PO74+ZXVu2gQAyGK4Oz/JYWu3szDnvt7/newSgGRr/Z4ccmoIhAAyNIQAMjSEADI0hAAyNIQAMjSEADI0hAAyNIQAMjSEADI0hAAyNIQAMjSEADI0hAAyNT+gw/+89sgAh3v5trfm/VCEX/2eeVsi9Lu5eJ0BI77daDwHgEyHtWuXsnQwVIKI1iEglWPkgBFopRLoHks248e0oO7lzUt4GOEMA2N+lHXILbxgmRskUKJ+Lyh+HsvLRwtxpCrT3P6lspN2N6FkFbYtwejeh9CdbK3yyACBkbtEFYIRLkeWz0eXzcMMjUAhwM6BdQCOyf5g1/QiQFsIIIlUGGd+MaF+E6nwTNx33J0r4s6aHALA/LrwBGMX1iMrDcIun4ppFaGWDm/IXXCJ80yDkzkfXSqPR/mwoEBItQ0ghMTLtyM7XUC0v48abUXsxL0MA+IjtuyENzPID0MOOwM0fh5YBhEojtQYBSmtcV4JSoLIL7e4SEPuSbUikFEgpECi01rjaBBnEcOIYPcvRLQtxutd/IoDw8QTALhJvmiFk5RyoPAKdX4cWGmUnURkXMhpcBUKDaSDDBvlhi7yISShoELQMBGC7LqmMSzLlEuu3SfXbkPbtvSHAlGAJDNMCI4hwbGTPamh5DrdrBa7e876GALCvF94KYVQejKg6Cjc6AjttQ6IfXAfCJhVlUSaMKmbqmCKm1JVQV13EsLIIJQUh8iMBApaBZRgIAa6rSDsuybRDbyxNS2eCxpYY6xq6Wb6pkzVbutm4I4aOZbwZC1kY4TwMAaJvNWx/GqdjmQ+Ej5eP8PEAwC6hmGkEMIYfhKg+HidUjZNIQCqBVRhh7qRyTjiohsMOqGJyXQnlhfmD8vX96TTrt3bz6spmnlyynYVvNtHRFPfuK7+AgCmRfWvQ2x/HaV/hG5aPBxD2bwAIkQvRDAFG5VyM2vmkQyNRfQnQaaZPLuec4+s55fA6po4uY/fsdiKdYXuig4ZEO42xVpoTnbRneulOx0m4KbRSBE2LwkA+pcE8KkPF1OaVMypvGLXRcsqje4KouauPZ17dxl1PrufJJdvI9LqQn08gJJDdy1BbH8fp3uD5CPt5HmE/BcBOx0oCZukkZO2nsPPH4/YlwMzwqcPq+MoZUzjhwJEEzUDuk7F0irc6NvFC8wpebFnBG52b6Ui0gJvynD8kyABYQTAN3yHU4Lrg9HthoiFABgiESphSVMu88okcVX0AB1ZMoKagdMCdrtzSxu2PruOWR1bTsj0O+YUEAwral6C2PooTb/YmeD/1D/Y/APgTJQArrwpR+yl0+TwycQd0gjOOGc1/njeLQ6fX7JTyTJqFzSt4sPEVFjQuorWnAVyFGS1nWkkdM8vHMqmoljGFwxkeLqEwECViBgkYFgLIKBfbdejJxGhL9tIYb2NN91aWdW7mrY4NdPU1g84gIuUcXT2Ds0cewok1cxhZWL6LVohx44MruerOt2hrTiKKi7GII5qeQ21/Eied8DIP+5lZ2I8AsFPqTSuEMeI4GHECaTcCvd0cPLeS//3GIRw7Z1TuEw29bfxz03Ncv+YRGtrXQiDMpIpJfLrmQI6tPoDppXWUhQs+mP3PpFnXu50Xm1fy8NZXebblLVRfC0Z+JeeOOZqvjDuJI6qm5CzPtvZefnPza1x770ocR2AVFSES25FbH8ZuWew5ivuRNtg/AOBPiASsihkw8nRUXi12ZzclJSY//sZBfOOs6VjSK15u6m3lz8vv49pVD2OnOxhWXMeXxp3AZ8YeyQFldQMurdG4WoEGIQSu0gQMgx09Cb556yo6YjbXfGky06uLyLguhhBo4eUJpJDI3SqHTfFOHm5czG0bn+HlHa+BneHwUYdx2YxzOWnErBwQFq9q4nt/epGXFjVCYSFWwEJ2volueAA7tmO/MQsfMQBEbpkC4RLkqDNwKg7EdRW6u5uTjx3DH797FPUjSgDoTMb504r7+M3yu8n0tTKzdh7fnX42p4ycR14gnLuqo10EAolA7LKArtIYUvD0mla+fMNqtralQZrkRyV//OwYvnzYSJTSCCF2KRNotNYorfcAxJLWdVy9cgG3bXwK7DjHjz6an8w6n4OGTQDAdh1+e9vr/PRvS0hnFGZ+PmTimM1P4Wx9Ase1P3IQfHQA8B/cAMyqQ1A1p6HCZbjxPqR2+MV3Dub7X5jnpW013LXpRb736nVsa1/DtBFz+dGM8zij7pDcgjjaRSKQQu6mAbyh/MW/4cVGvv73VbgigBkUoCWOK6A/xWWn1/KrMyflTPTeaANeZlBhSD+lDKzt3s6v3ryTW9csAMPkO1M/wxUzzqM84kUQr6xs4oIfP8n69Z2YxVGUCGHGNyC23EWme5OvDcRH4ht8BADYaesD4WJE3bnYJXORwsbpizOsIsLNPz2eE+aNBqA10culi67lHyvvI79wBL+ccwFfmzQfSxqeVGuFFCK3GHsumLdoUgp++sgGfnx3AzJsIaRGKY1GIQQYwsCJOXzp2Epu+MIUDCl9qX978ojSCg0YPugWtazhstduZuGGpxlVNpFrDruE+aNmA9De189Xf/4MDz6xHrMghEsIQ9sYzY/iND6K67ofiTYwgJ98qFKPRqIJVs5Gj7+YTHQshkjh9PYzeUIJT/zlDOZOHA7A802rOOXxy3lxy/OcMelUFpzwU46vmYEhZG7h33nxNRovr/+fd67g1/c1YOQFICdsOid4SmuscIA3VveyoqWL02ZWYhkGSusBZmRgmsL7fqU1Ck1tfgUX1B9HcXQY92x+ntvXPIQyghw+bBp5IYvPHFdPdzLDole3YYbB1eAWTcMqHo+Z2IKb7vNlUnwCAeCj2zSDWGPPxR55Ng4mlpHG6c1w4KxhPH716dSWe177X1c/yjlP/IiY0881R13Obw/6MkXBCI5yEXtxzvaUTu35AULzlVuW85dHt2MVhHC1QqMRQmdzTDn6gNIKK2yyalOCVxu7OG1WJSHTwFXvrAmyQHD98PXAYRM4ZdQhvN7dwJ2r72N5rJVjq2YStUKcdNBoREDw7AtbMMMW2k3hBCsQFXMJqAQ61rjTQfwQlPOHAwBfzAIFNYiJ3yRTPBvlxLEsjd2b4ZC5VTx25WmU5kdAww+W3sIPXvh/jC2t59H5v+a00fN2qlsp31U+sqrb0S7nXfcWtz3XhlkUxFE+M0gKtAOGAWFTYKfBsGTO2bPCQTZsTfLC+jZOnVVBXtB6VxAAnjYSAke5VEdL+Xz9MbTZNv9ccTdPNK/ihJo5FAfzOHJmDcGowVPPbsEMB0FlcLFQZbMJRMoRfetQbuZDAcGHAADhqfzqw3DHXYQdKEe4MUzTwollmDmtnMeuPJ3ivDBKwddfvpo/L72Ow0cfyb/m/5IJRdU4ysWQxtuq4l1H1tPvS2c48+o3WPBqN1ZhEMd1c4uvbE1Au9z7zalcclwND73eRiyuMYMGWguUBitk0tic4qnV7cyfXkpxJIDzb4DAA4JnooKGxadHziMcLOYf6x7moW1LObZ6DhXhQg6bPgIszXMvbMGMBNHaBTeDmzcWo3QqZv82VKprn4NgHwNAYAhNoP4c7NqzvRBLpZGGhdvvMqomwtN/PZOKoihaw1df/DM3vHYTp046nftP+DElwTxcrTB9h2+vdj7H0xE4SmNKQXNvklP+9AbPL49jFQRxXOXVE6RApRWFQc39lxzAyVOHMbwwzMkHlPDkqg46ul2soERlfYKQQVN7hoeWNXP05BKGF4RwXM+hfKdIIasNNBqlFYcNn8LIwpHcsnoBDzcs5oSaeVSECzlyZg1d6TSLXtmGFQ16mWqVwrUKoXweAbsLN75tn4Jg3wFASAw0Vv3ZpId/CmXHEGiEMBEORILw+DWnMa7Gy63/x0vXce3S6zl18hncffzlhA3LC7eEfBeIef+5SmFKyYodPZz429dZ3pjGzDdxHQcQmKbETTpUFEge++4sjqgvx1EapaGyIMTpsyt4fl0HO1pSWCHDBwGYQYPOPs3di3cwY1SU+so8bNcD07spA4FACImrXGaVjaGucCS3rnqAR7cv5bRRh1MUjHLiQaN4fXM7a1e3ez6BFqBtNBLKZxNM78CJN+0zEOwbAAiJ0IrgiEOxR34WnenzKFgIDGngJpLc/MtjOX6uF+r96s17+NWLf+SY8Sdy3wn/Q8gwUVq/4+Jr//9p16Y3kyJqBXnorWbOuGoFO3pszKiB4/jcAUPgJBzqKk0e/95sZtQU57SF9LODRWGLs+ZUsLihiy3bUgTC3j1oDaYlSaThzlebqSo2mT2qiETaIWk7hCwD/Q5+u/BNgqNcZpSNYXj+CG5feT8vtq3n3LFHETIDnHTQSO59YT2dnSkMy/ChozyNUDIFo3sZKhMDIT4GAPBLuIFoOe74b+C6CiEVQggM08Tp7ucbX5zGZefPA+CBLa/y1ad+wtSqA/jX/F9SEAijtNojobNniOf9zXdeupZvPfsrxpSM5Df397N+ewIranpqX4BpSs/XGBPi8e/OZWx5Pq6/+Luqa1dpokGTc+YOY3VbL6s2xrDCFkq73v2Y4GqDh5a2sD3Wzw/v28SCZS186ZBqX9Lf3S+wlcvcinqklccdy+9ifbKPc+oOIxy0mDd1OLf+a83OcrYQCO2gjChmtALal+yTPNE+AIBEoDHHnIGdNwGhkiAkUkrcfocJE4q591cnYxkGm/taOeWR/yZkRXj807+lJq/s31L7XmwuWdezna+/eCW9qW7SlsP84Ufy5LIWRMCTSlMKnL40J84uYcElc6jMD+ecxL3ZbKU1QdPgnLnDaEkkWbqqCyNoInxOoZAaaZq8sb6XrpRgW0uamXVRxg3Lx9X/TpTgmYOjqqexqT/GXavuJhAu47BhkxhRno8wNc88txkjEsjlMFAZdGQEVmYbbrx50E2BHHzpV1jRctzSOeAmc0G2UAIpXK774ZFEQwFcrbjohT/QFWvhxmN+yISiEZ63/26SD7jKi7evXPkQKSeOCEQJyQARS6CV9iIGJE5fmouOq+bh/5hDcTiQCw+V1jkbv/PlKXJXaYSWXPeFqfz03NG4SQflSgxD5rKKZsQiYHmP+/untvp8UvGuEpo1B0orrj3820yrmssVL1/JS82rQcNln5/D3HnVOPE0cheQKqVQFUd4ABtkNTDIm0O9mxZlM3CNQoR2vUjAMHF6k3z57EkcPr0WgD+uWMDzG5/kW3Mv4PTRB+Io9x29/Z3JHY1lGLT193DnpueQ4QjaSTOnYhybW9MYhiTjgEpl+NV5Y7n+S9MxhOfZZ1W1l0Fkt5f3O8NnB7tK86NTxnPntyaTbyncfhfTEGj/PdtViJDklXUx/vr8ZgzpAcJV+l1zBRqIWiFuPuq/MaXBV1/8IwknjWkY/Pk/D8UwIbcjRUhQaVR0FEZepZ+5EvuvCZCAGHkybqACgY0QAm27lJaHuPeXJxEJBdjc18pnnvgRI0vrufe4KzClZyLEO6R4HF91p5TDsyu6eLXvNe7Z+ARGIIxCc9m0z/H35zNs3RGjslhy58XTuPDQkZ5ES29xhYAdPf20x9L0pW26+206Exm6kxm6Exm6kzYdfSlKIhaGlDhKM21EASdNL2Hxhi6aW1LIkImUoPDCPCHhkSXtbOvt58gJxYQDJk62ovgOIHCUS3VeKaYZ5a5ld2OEijiqahojKgrY1hXj9deaMMIWWmuPIGPlY/RvxY1tHVQzYA6u9GuEaUGoArQXfkkpceIJvvutOVSWeNWx7y25if5UL1ee9Euilpeefbv8XlY1m1KwqT3O+dcu57ipVawrWoxQAmU7jC2txomXsWjlck4+uIwrz5tIXVleztPP2v3Hljcx//dvgja8+QtYWEGJRCNQpHpTXPrpkfz2nCko/7OO0hwwoogXrziQS+9Yw/XPNYM0McMmWrlelTEvwE3PNrNoQzd/+eIkjhxfPiAptVfJk16y6NJpp/PPDc/ym6U3c/6YoxhTNJwrvjSHux7fQDypkIZA++ZFh4ftx06gr5aMcAlUHY9CYAhQaZfaUQXcePmxBC2ThU0ruez533HqhPn8aOa57+j0ZaVeCLhx4RbO+etKNjQp/vv0Iq7eeBdJLXD7u5k7fAoHRw5lRl2Iq86bRnEkMMDTz6r+eNLm8weP4KKjqjlicimJjMOmdhsnrbl0fjXXfXEKnz+41ss4+hKc9RlCpsEpB1RyYH0+G1rjbGtKoJXA8PcWGCFJa4/DbS834bgZDh1XjGUYb6sNhK9BLGkwpqCKW1Y8QKfWnFV3MEV5IVq74yx+dTtGxNMCWpgYbi+0vTao2YBBBICnloz8EejKw0E5GIbE7Uty+dfncvSsUWgt+OLzv2dHopV7TvgJ5eEivyIn9ir1hhRs7ohzwQ3L+O0jO0gqk7njyhg3fiv/XH4fSgjqC0fyw+nnMX/CeA4aW+ZJCgMlL3v54UVhtvamSGSgND/AxOFhXtrQTTyhkZZg7qgCNrfHGVkWGeDRCyFyFcNxlXlceFgV46vCtMbTNDYnUCkHJSRWyESakueXdfHk6nam1EQZWRJB+Npg9yghW0CqL6zipc4GHt7wJKeMOozKSDETRxVz4+PrSGeUXyCUGDjQ+jJ6EEvGg6wBNGbxRFTJLIROoxxNSXmY635wNNFQgBebVvLTRVdx3tQz+NrEk1BvI/1ZRs51LzRw3rUreGNjCqIh6ElyyOQyiqo2EiaPq464hB/MPo8JxTVY0sveSSn2AFR28u9eupWTf7+M25d2cPPLTdz3eisKgWsYNHSkuOWZBqaNzuOQsaV7LFjWefTUumTyiCifml7C2fMqMUxo6k7T2+ug0gqCAXZ0ONy2uImMbXPQ2CICpvG2qWwpBHX5w7hp1f3ENJxVdyhF+SHWb+vkrTdbMCOW92zCQLQvRjnpQSsZDyoABBqjYhZu/kQMkUHF0nzpjEl85pgJCCG45JXrWN/dyO3H/pCKSHHu4Xet3yuteXp1O2de8xY3PrydfiXIL7YYVx7g5FmlfP3oYZw5bgZzq6bySvMqvvH876krHMHEkpo9rrerpAGU5wf5zxNH8f0TR/K9E0fy01NHs6YtwfJl3VxwbCVPfHc2x02qGPCZt3vWlTv6OOJXSwmaJhcdMYJLTxzJ4RMKKS0wsJVDUrn0JxULX+vk+sXbKc03mDA8H3M3gGZNzMj8Cp5r28hTDS/xubHHUxzMo7jA5NZ/rQXTRGuFMCxEx5JBzQoOohPob7cOlQPKC1cDks8eX4/WsKGnmUc2Pc/Row9naunoPVK92fD2xbUt3LGohcPGlfDNY2uoKwszpjxMTWkYQxiA5ozHfs6DDQvRKg1aUByM7pYk2rsHXlEQyv077bjc9moTdyxso2xEkMvnj6aiIPSOjpvKEkyAsrwgHUnBr+5v5Ff/amTm6AgLvz+PUw4YhkbR1J1iY3s/WzpSrN6R4JnVneQFNGfOrvW5igOZRVIY/OeUUzl9w1P8fe0T/PzAL3Lo9BpmHjCc199qRYYMlLAwg0UQ28FgkbkGDwDaZ9dYxQhc3KTDlInlzJtUhRBwx4ZncFPdXDxpPnqXhx6YQRYcNmEYR06qettSb1c6zpPNb6JNCJlFZNL9pF1nD2nfGz9gfWuMC29ei4uksTNJc3uKE6YW8Ztz6xlTnveOi6/1wGunHBchNWZhAAW8sTHByqYYs0YWI4WgujhCdXGEI8btpvD9edo9ItDA8TUzGVY6nts2Ps0Vsz5HyLI48/BRvL5kOzJi4GIigmX7YyLIfyIjiLbyMISGjMvJh4wkYHp5+Tu2LKS4pI7jRsz0d2HLvV7FkBJXaRz/5SrtZ+68xXG1Q8AMIISBqxRKuXSlY7lF2tTT5JNH9F5CL8HL63tZvKyHE6YUseOPh/D4pbOZVl2I0rzD4nsMos3tMfozGQA64zaptJdRRIMMeFwCU4pcZnH358CvDu6taugql4gZ5Lz6o9nauZ4l7es9UBxYi4xYuK63zZ1gwf4IAP9BrAiY+bjKBVNw3JxqAFZ0NbKubTWnjT6U/EDYp069vQ0zpDeRpvQiAbmLSve8cYXWHvEbrWlMdABwwfO/Z9Jtn+VLz/7Rq6dlewP5ztuY8jxuvHAcGJrnVnQRS9sA2K7mbdbeSyQJwc8eWc/E/1rIcX94jbTj0h6zIaOQIuu77HTLsuHj7s/xzi6UlyE8a8zhIE0e2PISApg6toKpEyrQKcfTHIGiQWUMysFUAJhRhBlApVyqa4uY7ZM7H9+6BDJJTht1cI6H936/w5IS079tLQChWdvTiNbwYMNiMuEwt637Fwu2vJpj5mRB5SrNhYfU8p1TqmlsSHPmX1bS1Z/GlHvP42dNwsodPfx8wVYy4XxeWROnPZZkc3vC24ouXI9ZLCFkyXckibxboUgAM8vrGF5cx4MNi8jYLgHD5JjZVWA7SDTaLPCmYpBqAoNqAoQZRkgL0jbzJlVQGPU2azy5/XUCeRUcVDkxJx3vd0StMPmBCOCiUGBavNC0AiHghJpZSNfBCAS55JVr6c30I3J5BS9EdJXmD2eP54RDSli1Ks4Ff18JaN/BG1h0yjKH/+POdWQciQTG1kQYURzl4WUdHqnQ/8NQQFIUtXaTiPc2g65WBKTJsVXTaOhuYHNfCwAHTq4EP1rAjPqX1/upCZAGuA6zJ3jOSk+yn6Ud65leXk95uMBn5L6fCfJUZNgMUBbKB+U5ftIM0tDXwOvtG/nW5E+hlIMRCNMQa+A/XvlbTgtkSRtCCCSSWy+cSP24CA+92M3/PLIRQ3qVxFwW0tWYhuC3T27i2bf6COaHUP1pLjpkGD3JDC+s7UGEDO8zLhSGDYoj1vtc/p2+BsAx1TMQmThvdG4EYFp9KYGCAMpxwQoj3qVo9tFVA60oCglBmDbOo3ptjrWQ6G/j8OHTfLX6/rNYyv/smLzhXq8fnw6GVvxi2d0cWTWN8WXjsO04wUgBt6x9iD8sX4AlDRzlovEqf0prKgoi3PWNKeSXSH5+yyaufq4hpyFsV2EZgsdWtvDDu7Zg5YWw0y7hfIOLjx7Jn5/ZSjquMUwjK7pUF5nkh0wPaO8TAVnNOLu8Hm1FWNy+BoCRwwsZVV0IGRshgyDfv6bZtwAwwjiOIhANUF9TBMCq7kaEbTOvYuIHvueskp5VVu818vJTqTKYx4ObnuOtzgZ+MuPz6EzKq0WEoly66BquXvEwljTQfnSQ9Qdm1BTxj69P4vNHD2dNc4ze/pSHY0Py5OoWzr5qGa60kAaoeJqvHTUMrTV/eHQrImKhXBBSIBzFtBH5nuOp9AcwpN7kjM4fRn60jLc6NgEQMgOMGVEAtgtG0HsN0hjcXsFGEBxFRVmIypKoD4CtaBlgTH6lj7j3j4Cs6TiiehoiEEIJ7U+a9/svPvdblpxxJZPKJrK6ZxNmMIoRCPLtl/9IW7KHn84939vsmWUIazhl2jBOmTZsgNN38yuNfP3va0lrA9MCO+2QVyC4/OTRfOWWFfTFHIy8gEdM0R5H4KjxRXxQy+zVHDQRK0h9QTXre3eQth2ClklddSEohZAWQpr7pwmQZhRsTWVJhIKIl3Xb0LcdEYwyLFI8AOXvT0VKNJoZZXVMKqlD2ymE8MI9IxhmefsKrlhyG38+6BvgOGit/Pei/Gzp3/j8U/8PV2mfbuWFfsqP0zOOwpCCnz+yjguuWUFGmEhTgNCoeJr/PXMMj63s4O4X2jHzgiilEEKjHE1RkcXxk70SsPEBU7TKh1BdwXDakl10pvoAGDWsAPyqIEZosCzA4AFAABgBUIqKopCfMIUd8XaKQoWUhAre9qb1vxnSCN+HsKTB18fPR2fSOa3guA5mqIDfvXELTf29nDP+JNxEL9JPsliRIv6x7iEufukaD0i7RAYCCJiSa57bwo/u2IyZF0EIEFrj9NtMn1DAxOFhvnrjel/yXU+LCInutzlrdhmVBWE/Z7A30/XeHcHa/HJ0Jkm7D4BhZRGfbSM9R3u/1ADSBKUpLYr6Tht0pPsoDeUTMq0PrAFyaVOt+dL4Y6krGYtrJ3MMYldpRCDIxS/9idpIBQV5JSjtgNDY2sHKK+H6Ffdwz4YXc9GB8ncOr2nu5dI71mNEA7h+CKgRWIbkiAn5fPP2jaRsgZbaj2Q8zkskT/D9+XXod2BqvZ8nHhYqAjdDt5/lLM4Pe2EnJjKrAfYbJzDXKDEIribfj4czrkPcTpJvRd9R0t9LWOj37yTPCnH1Id8ER/mMHo9ggTRIuAn+uv4RkNaAlLDSHmPpl8vvwlGux8/zM3g//9dm0kmJMEWub7DSGjNicPviLra0ppEh73dCgykM3HiKn51Zx9jyvHfdSv5eR14gAlqRcNJe/iNiQran1SDmAgeZFexdLhzwVJStXNJuhrDfxWuwmCzZ7eEn1c7ip3Mvwunvw/RrC1prhGGRyCTpS8dgl4KTqxRYId7q3MAb7Rv9jSqClt4UDy/rQYRNlOvRwzzWHyRTLl0xBxmQ3tZ9LTBNgd2T4jNHVPBfx499xyLS+x1BIwBakXFtPxKQ3rZ29mdWsNQgdt6i137hg3n+7waCH83+HN884HPYqd5cDyGd3dOfa/Eu/Lyx38zBSfLkjrdy13plczexPgdpCJ+MK/ypkV5peZdUsWlK7JjDkTOKuPnLB/hEjX2xY8ejpeX2Pu6jtgGDCwDtUarTGSfntZvSxNlHXS+ylKqrD/0Gnxt3MnZ/d45a7k1cllqtcy+tvYYAr3dsyF1n6ZZeRE7yvYyjFtkriBygDUPgJFym14W471szCVnme8r96/eQv/fmTGD6Gsxx9S6mdn8tBilvT3us31NbQWmSZwTpsxMDMl2DF3l4jaCU1tx81Hc5cdQROMkYhjTe1uBooUFKtsfbc1K9uSOdVRC+5iCnMXLpYylwUi6jKg0evmQWJZHge7b778XX6bP7AUHY9JI+ybQLbpZ5t7/6ACoDBnTHPMfFMiWFgTx6MolcCniwt7dlJ9WSBncfdznTyifhZpIe2UTvTW96AOixE6R8Ikl3vwNS5jqC7TrBXmpXox1FYQgW/McMaorz/q2GER9kdKT6wDAoCHgOdDxpg/K1lErvnwBQyoNoV28qt9TV0TI6+nuJZfrfR1T83kxBfiDM7cdcRtTM87Jm76ArM8rxeAtAxsXnNMq9q3MtUBmbGy6ayLTqohxdfV+M7FWb+rvACnuFL6CvP+2xrtDeARiDNJeDBgANaDcJhkF3LJ3zXkfmV5LJ9NGa7PXt4L6RGMPfgj21pJb/mnY2KpNASvm2X+i1lPO1R659q/D255NlJntRgkrYnDGvlLNmVnlVQrnvJD/LGGqINZMfKqQ8VAhAbyzj7QrTDrj7qQbQThoMQU88Q9z3A8YVVIGdojHeNqCgMyjft9viGn6G7ztTT6E0bziusnMZyd0+SNgI5qKGSHDXjt4DWQFKewnOy94l2TNYQuSxlxQbYs3UFQwjP+hxKjp6+n0A2JDVAHo/AwBuCqSgO56mJ+6hdErJKECwumf7e/aE348/oNCUhQo4rmYWOBmfeygGOI5oTXEwD8vPHRRHTX8yRc7n19pLt+i0w8TaKLNGFvmZSPG+Fva9ALo50cWOvhamlYzOAa69J+nlNFQK7ab2UyfQ6UcamlTSobMnCcCEohpEsIBXW1a/Z0/4/XjV2ULP+PzhSA1SSqSWSKS/A1gitaI2WpbDxajSENIvDu36MiVIpRhXEfa3db8/8Ip/Gyje9Vf3bEUme5hVNjb3Xnt32qsBOGlwB88HGNRysHaSGEKj0ormzn7fCSxhZGENzzQvw1auV5dn37ZCzNbllZsio8Ne0t6PQpRUYKeoLxqR+/sJw6IoR5HJuDmiCUBGAmkX2/1wmqlqPy/99I63UEoxr3xC7r22rn6QJtpNopU7aN85uHwAJ4HABUexozXmJ08k5445jFvXPMa2vnbqiobtzNTtQy/awKA6Wk0gmIcK7dxGIQHbLOTgLEEFmFGTx+jaEAojVyLWAqTWuFFBxPR8g30Z9uWylHjU9knVs3zz6VU6W7sSnkrKJHLmajA0wCBdxbOrVn4VxswrSHUk+MHFc/nlxYfjuAopIelkCEgLyzA+FGlKORlc/xxAIXZWIbNuXsQMsGu0n3Jcn2qOd9TLLvRlKQRBS37gSua/O/qdNKYwsKTXnqazr58J59xKR8wi2P0CmTW3oQepr/DgaAAfQtru9xwUw2JrW3xntk4IopZXwnRdlUOc9DNsXg4hu/ljZyye3QyRdbyy3Td2dcS0zraMEbm9gVIKQmYgd9Jr7iRZf/V3/qxzCZ2gYXqEi2z2bzdnz3WzlQ1y95DVYlmSSU77GHKP+3VcNeB5sz/rvTjGET/7l21d39GTojfugBFCp/sGNZMySCbA95ydBGTiYJbS0OQRGbIPrP2SbXZy9vBGpdijaGQYYqdHLva+uUIIMHPXFAMcqt37/mfTvNnrCSEwDTHgYmJgtJj7Du9e9u50eve153u73m/2HrPfbQ6YB7FXhzC70Ftb+rATNkYhYPcMqrYZXB/AtSHTB8FKtrbGSaZtwkEr99AZx+FHf32Zjr4MEUNw4AHDOO/EKQA8+3ojDz2zgR9cdCCVJXkA/PLmV6gojXLRKdM9MuadrxEwDb599syc5Mb6U/zu9tdYsqqN6rIwXztzGnMmVSOE4OnXGnn4mQ1c8bWDKS8K87ObXkaaBpd/4UBPwrTi8mtfZnxNAR19GTY29uEKsBMZjjm4lvNPmozWHmXs17cuYUdrAkcp6qvyufC0qZQVRhFC8Mzrjdzy0Gr60y5nHlPHZ4+biNaCP935Gq5y+e55c7n0z89z9JxaTj54DBnb5vJrX+aQaVVsaepj+dp2Coq8LqTx3iTnf2oix86rw3W9Frmbm3rAdjGEgnT3fgoAv/uVznRDnkVrV4yWzgSjq4q8ZIrfQGnJmjZaOhKsfauVHWdM4rwTp+AqxQ//sohX71/L8OF5fP/8AwHN7Y9vYs2yJiaNLuXgKSO45t5VFOcH+fbZM9FKI0zBl376BAue2cKJh4/iiRc3U1UZZe7kapTW/OCaRbz2wFqGV+Vz2fnz2N7Wz99uWMo5x4xjbFUJS9a08Ovfvcit13yaP925ks6OOFPGlZHoTlI3usCXWIHWit//cxmxvgzjRxdywx3LufWxtbz1j/O559kNfO5bD1JRV0JhXpD77lnBa5e08/tvH8HfFqxBaMV3z5vDlfes5vp7VrLq/i9QXZbP725+k9g5NgLNwqU72LwjTqQ4zIg8ydEH1voAzWqAhN98M4NKdQ9qSl0OugeTbEcaBpmETWNL34C3QgGT5/5yNmvu/hLV48sJWB5zaMnqZpZtaOfA0ydyw4K12K7XXayiNApYnH/FkyTTGYaVRCnMD+bsrFIujy/ezinHjOVffziN7U99k59cdAhae9dctaWD2aeN4/oHVnnSfsFcZDTI3x9ejRDwl3uXMWJSJeedMIlk2uEb505l6c2fZfWCC/mfC73rSJndqyj5+tlTWHXHF1jwl1NZ9VY7Ty5t5LJrFnHwoaPZ/siFrL/ni3znmwfxh7+9Rmt3nJrKfAr8+62pzCPWmubCnz2F1pqisiihQIC/fv941v/rQgrLI3z99Amse+QrfOFkTytavploaOnzcwD9aDs2qCWVwU0FA6Q6MIRXYdm8vXtAhktrzxlyXH/nrOPFs9fct4IpY8p4+I+fYuOWLp58tQGtoacvRe3EYhqbYlz8m2e9jmn+Z7zowuAbZ01mwUMriR55DZ+7/GE2NfV4i3vfcqaOLeOxK09l89ZeHl/cSG1lIXPn1XDbo+uIJVPc//QmPnvCWKSQRMIWV925ipLj/0be4VezaNUOP7jZSW/p7EvR2hVnTUM3BAVt3f1sbYnxlbOmYkoTV2kuOnUy0nZZtqEd05BebgGI92eYPK+Kp1/aweXXvUwkaGK7Xh+FZNLBcTUZR/tHGOoB/tOWHb1gmJDpRWdig6oBzMFWADrdjsQGJGsau3er2oH0US1NQcAysB2HBc9vprwkwq9vXgpIrntwJScfPIZE0uaQqcM47suzufD7TxEoCHH8wSNyk6PR/P7bR/LZ48Zx99ObuPK219nUGuepP5/Owy82UlIQ4je3vA5C8Nf7lzH/oNFcfPoUvvDDx7n0yoWkMjZf/rQnbam0w1Fzqvni/ImkbYeJI0tyHqDruBTlhbjzsY3c98xG7I4EF35hBicdNArSNm09/f6xM4LmrgTKdSnM8zpJepGCpC9hc8lnx5I8fBQ/v3IxRjRAKOidXSzEzgA157T64WtPPMXG7b0QDKCTXWhfO+5/JiAr5akuLxqwLBYua86FewCvr23m8mue5a2NbbQ291FblcfjixuIt8UZURHllRXNTB5XyjMvb6Ozr5+8aIDO3jQXnDyV0z41lkxTbGCvHQ2/vOVlYkmHKy6Yw6FzaunoSfPAwg30dPRTXRHhxeVNTK4v5ZlXttHcGeeMI8dSVV3A9X9fwVFzaxlfW4rtKBSC4WVhDp0+nEOmVNITS+cIo1IKEimXY+dVc++v57Po3vO58YfHU1mUxxEH1/LTqxbx+OItLFq5g4t/8Szlo0uYNX4YiZSTk2IhBLG4zc++ehAzZgzDbU/sFoEMDAayjarfXN9Ge2sCI2hBsn3nAVP7Xy3AB0C6G1KdiGiUN1a2sWxjW+5cnuaOOL+84TVmnHozhWHBecfX84ubFjNnbhUL/3o2r9zwWZ646lT640luXLCcSFCQyXgLcf1lxzKsvoBEMpWbL9txefSVRo4+7x8UHn4Nz7+8mR9dMIPr71/OvBmVLPzr2Sy6/lyevOo0UqkMf7n3TaLhAGceXQepJF/+9CS0f52CqMmt969m1Ck3MeHY6/nW754ecJBXX6KfiaMK+fShYzhwSjVKeebh75cfS/2oIk76yt0cfO5tJJNp7vrNSZiGSX8y5R0EAWjlkM7YgODmnxxDqMTEtnemdB3XHpji9TuJ3P3MBr8PgUbHtw0+oYbBZGj4beID9efgVn8Kp72NC8+byo0/OB7HVZiGZGtbL6vXtzFlfAUjygtZsmoHI4cXUl7sHRphSMHyze0ETQlKYxiCMTUlCARb23pI9NtMGFmWS9hoFG+ua6OlM0H9yGLGjShlyertjKgooKIkz+vta0hWbG7DlILxtWX0xFNs3t7F1PoKAqaJqxSrGzqxHS+Zo5SmpCDA6KrinA/z1vpWigtC1FQUgBC5DiceGcXl1RVNJFMOc6cNJz8UQmvF+m2eCRxfW8KyDe2UF0cYXuqFjmu3dxE2DUYOK8RVLis2tlNaGKamstAPcaGlM86kc26nt19hmja89XPsROegHjE3yADwzwYqrEVN/SHKdbFwWHLrZ5g2tjIHgl2TKLvXBPZ1zX1/GO/GJczO09d/8zTX3fYWZlkpsmMxzsq/+WR1vZ9qAP+SEo01+avYZQeieruZPb2SV2481yds5JSF1yLN3061KxCU32/Fdhwc5fXrd5SL47reXn+hsV0XV7s4SpFxvWYRyn/PS81m/628HUAq62QJXO2dGShltkagd6GD61xnUVMauRKy8NveSiEwhVdeNoTElAaG/74hJJZhYErvJZFYhknQMkGLAc+5+3Nnf3ZcjWVKHn91M/MvfhAZ9raDm6t+Q7pr06CfLbhPDozQgJFsQpfNRYbD7NjSyY7eOKcdXp9TFLs6R3tUBn1irtdoyfUWX7nY2sFWLrZysJVNxnVIuw4ZbWNrl5SySbs2aTdDWtmk3AxJO03S2flzv5sm5Xr/Tjlpkm6GpJMmrWwyyiatbNIqg60cMsrB1g4Z18HRHgBt7X2/qxWOdr3+QFkSulA5AGmfi2BIiSGNPRpY7v7cQojc4q9t7ODTlywgmVEQKsBqX4i97Xn0PmgXP+hhYLb6YsebCWy7F7vuy5iFDjf9cyVBQ/CX75+QK5S8HbtG+AgImCYB0+STPrRfJLNMybKNrXz6kgdp70oj8wsx4w24m+7zVP/H4sSQ7CMJie5rJGgKnMLpGCHNkqU7WLquiaNmj6AwGvKTOWKPyehM9oLf5ct2PakXQtDe30vatXMdP0xp0JtO0J2KkRcI05boJmhYZFw7t/GzJx0naFhIIWhJdNHvpEk5GQRgGSauVnQke0k7GeJ2koxr05boIWQGSLs23ekYEkHGtbGkidKKxr5WwmaQpJOmJxXHkibxTJLW/h6//a1BLJMg7Xqaoi8TJ+mk/Y0yA8vhSuncFrU7nlzF2d9/lNaOFDK/CDPVhlhzDXayO9eKd1/wJ/Yh3UUiUQRHz8cecap32EJXLyNHFXH7L07k0Gk1uK5ni/Fr9q3JHq546SZKgnkcVTuDzT0tbOtr46Lp83mm4Q16Mwkcrdgab6UiXEJASOYNm0BlXgl3rHmGo0bO5PHGpcyrmEBrvJuWdA8x1U+ZVUC+FaEqWsorTSv5r5lnYRkmvZkEd6x7jqBhgdJURIuIGiHyAhG2JzpZ3rWFmkgJKdcmZvdTESomagb53ISjuWntk/T0xziiZho7Et2s7txCbV45E0pqeWTLYopD+cTcJPX5w2noa+Erk0+mvmREzvnNOnuuVvz3n5/jD39/E0JBjEg+Rt96xLobSSfa9umZwvv43ECvCOz2bCCQ2AJ59ciiSrq74vzjkVUU5BkcNG2E55j55/HFMv083fgGw/JK2R5r9+JpJ01bsoe4ncQyTNJOhqgVoi3VQ54RBAETSmp5uXk1m3p3UBwqIJ5JkdY21fllJNL9tCf7KAnlo7SiPdlNVV4ZnYleSsOFLG1eS3Oqm9JwIQFpUlNYzust60grxwsjhUGeGabP6UcjCFpByiOF9KX6mVExhoVNK6iMFjO7vB6F5o32DUTNEK6GpONQm1dOTzpBYTDC2KJqFJ4TahqShpYezv7vh/jnA2swivIxAhECrc/jrrkBO923z08V/3BOD/cRHAgVI+vPxy6diUon0LEE550+kSu/ezQlBZGcSWhNdFMaLqA7FfNbwmk6Un0IDdFAmHwrjEBgGgZdqRgpJ0NltJiWRBeloQJCZoCEnSJkBkjZ3u5kKSWt/V5cLrSgOJyHJU1s16Ez2Uc4ECTj2JjSJOWmsaSJKQwKglFSTgatFdFAGK01jbE2KqPFWBiYhkFzoouCQISgtHC0Q1cqTmWkGFe7xDJJMsoBrSmNFGJi5HgKDy3cwNd+8TQtzQnM0hKEHcdouAd7x0u4u4TV+3Rp+LCOj/dBYAgwa0/ErTkVjCBORwfjxhVzw49P4LDpNfuUL/he4/F/7xo7j7jL9SP0d/XuTiFzXS+xZbsul1+9kN/+/TUIhDCjBcietYjN/yDTt807NHKPPQofdwDswnwRaALF9agxn0Pn1+H09WAaLv/7tXn88MKDAM8+GlLswdLJJUuUO6DfsBd66dzf690eTrDLphQ9MO/wTptVdtkpsJNXuBtIXe361De5hwHM5TXwupus2NTK137+FIuWNCFLi72Dqpqexm14AMex96m93w8AMFAbmFYIY9Rp6OFHY7sa3d3DcUeM4qrLjmZ8bVmO69fQ18q1Kx4hrtKMKRjGRZNOojAYyU1+NlHzYY/scfHZhX9i6xs8sW0piUw/J9XM5dQxB+O4CssvYF1992v88KqXifW5mCUlyPhWRMPdZDpW7Twy/kNc/A/BCXznMFG5NrprJTK2GSO/Flkygg3r27jtsVUUFASYN7kKIQQhGSTpZvjrygXcvfI+/tG4mDwzxOSSUQQM0+u27RddEPsWCkprrzehkLnj4pe0rOVbL17DFS/9icVtazmieibnjD2SaCCIaRis39rJ5694hKtufp1MoIBANIhsehq97iYyA84F/ghk8SP51gEpP+FrgzCy5iSoPo6Ma0Ksm5OOGs1vLzmCyaO9FmwZx+X6tY/x46W30Nm+nrFVM/ju9LM5p/4IikN5O81DViUjPrA/obN9hH1/YVc1v7BpBX9e8QD3r3kcBHx+ymn8z6zPU19UldMQV93xGj/52xJ6e1zMkiKM2Cb0lvtxOld5HOOPQOr3IwAMNAkCsArrEHVnoYomY3f1Ec1z+d4XZvFf588mP+xRy1vi3Vy78hH+vOoBerobKC4axRfGH8tn649hbsV4djXF3uEUrl9k2nmK2E6PZEAxewBNOyvlu45tsXYe3rKYm9Y+xutNb4AZ5PS6o7l0+lkcUj0593cvvNHID658kUVLm6C4lKDsR2x7Amf7UzhOxq/E6498+vcPAOymDQwpMYcfiRh5MilZCj0dTJ5UwuVfnsdZx9Zj+b1yWxO93LPpBa5b+wgrm5aBltRXTuJTI+dyXPVMZpbXUxkt+kB3lcikWNO9jYUtK3i44VWeb3oDkt3k5Vfx+XHHctHE+cyq2LmHb9XmVn57y1JueWw9uCEC+UFk12uohoewY00fma3/GABgoDYAsEKFGLXz0cOOIJ2WkOxl3gEVfO+Lc/n0kWNz27sdV/Ny8yoe3PISDzS8TGPXJnAyiGgZU0vqmFk2lkkltdQXVlEdKaM0XEjEDGAKw+sXiCLlZOhN99Oa7GJzrJXVXQ283r6eZZ2b6Yu1grYJFwzj+OrZnDXqcI6vmUlFtDB326u3tHHVHW9wyyNrSMYEsqSIYGoLassCnPZlfly//yz8/guAvZgFs2AkxsiTcUtmYMdscBLMmV7JV86cymlHjaW8YKf9T9suK7q28ELTcl5oXs7rHRtp6msCJ+FNvjDBDIJhgTD9kzqUt+feSYOTARTIIHnRMqaV1HFI5WSOrj6A2eXjKYvm72I2FC++uY0bF6zknqc3kuxxoaiIoNsOO55CNS/Eduyd5U29/031/guA3c0CYJZORdSciFMwHieRgXScESMLOOWwOs48ZiwHTh1ONBgacIWM7bI90cnWeBtbE+1sT7TT0t9FVzpB2m/CaBkWeVaI8lAhwyOljMyroDZazsj8CorCkT3uam1jO/96eTP3PrWRxctbwDagsICQ7oGmF3CansPxO3zuj1L/MQIAudAuu1lTCjArZiKrT0LljyGTzECiD4KS+tElHDOnhiNnVzN7YgWjhxcixQcvJ7f3xlixoYNXljfz9JKtvLqqnVRXPwRCyPwCAqoXWl/G3fEMTrJ7v7PzH38A7MU/MKTELJ8FVUehC+qxlUD3JyCdAUsQLQ4ztqqQiaMKmTS6hDEjChhRWUBJfpCCvCChgIllGn4hSpGxbWL9Nr3xNM0d/Wze0cO6xm5WbelhXWMPbe0JSDlgSIhEMENhjEwXonURqvk57P7OXRZef2ym9eMFgL0BQYBROg2GHYkunoQ2gmg7iWtnwNFgK6/pgwQCBjJoEAlZhAISyzQRUuA6irTt0p+0yaQdSLuQbQphGhCQCMtAmkGEMBH9zcj2xajWl3GSXR/Lhf94A2AvQJCAVTQGhh2OW3wArpmP0DZCZ/yimswldPyOy74nt8sWYJ+2ZQjhtb3VCoWBlkGkVhiJLYi2V3DbX8PJJHa5B/2xncaPNwAGAMHv4gEY0QpkxUGosjmo0HBcrb0GVtrNHQ2/97Sf3wpegTYCCCOAdBKYfauh7RWcrpW4rvpELPwnCwADnEWvx4cADDOILJ0G5fNQ+eNwjKjfL8gB3IFPLoQXIkoLqTVGqgnR9Qa6fSluvGlna4hPyMJ/MgGwl/Axax6MvCpE+Rx00UR0sBxlRNDCAOH1/0elkU4MmWiE9tdxu1fi2um9Xu8TNlOfRADsDoSdEisFyFAxIlgCVsSrHioHne5Bp7pw7dTOCcm1m9ef5Bn6JANgNxXPvyPFe4LmEz0t/2cAsLdFHugB8v4PNh4CwND4mA45NAVDABgaQwAYGkMAGBpDABgaQwAYGkMAGBpDABgaQwAYGkMAGBpDABgaQwAYGp/o8f8BEuqGt4RH+N0AAAAASUVORK5CYII=",
    alt: "Jan Seva Point Logo"
  }), /*#__PURE__*/React.createElement("div", {
    className: "brand-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand-name"
  }, "Jan Seva Point"), /*#__PURE__*/React.createElement("span", {
    className: "brand-tag"
  }, /*#__PURE__*/React.createElement(LocalText, {
    text: "Lok Mitra Kendra \xB7 Amb & Una"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "navwrap"
  }, /*#__PURE__*/React.createElement("nav", null, NAV.map(([id, key]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    className: page === id ? 'active' : '',
    href: pageURL(id)
  }, t(key)))), /*#__PURE__*/React.createElement("button", {
    id: "langToggle",
    onClick: () => setLang(lang === 'en' ? 'hi' : 'en')
  }, lang === 'en' ? 'हिंदी' : 'English')))), /*#__PURE__*/React.createElement("main", null, page === 'home' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BannerSlider, null),React.createElement(ServiceSearch,{lang:lang}),React.createElement("div",{dangerouslySetInnerHTML:{__html:(lang === "hi" ? "<section class=\"visit-prep\"><div class=\"vp-heading\"><div><span class=\"vp-kicker\">\u0906\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0924\u0948\u092f\u093e\u0930\u0940 \u0915\u0930\u0947\u0902</span><h2>\u0925\u094b\u0921\u093c\u0940 \u0924\u0948\u092f\u093e\u0930\u0940 \u0915\u0930\u0947\u0902\u0964<br/>\u0915\u093e\u092e \u0906\u0938\u093e\u0928 \u092c\u0928\u093e\u090f\u0902\u0964</h2><p>\u091c\u0928 \u0938\u0947\u0935\u093e \u092a\u0949\u0907\u0902\u091f \u0906\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u091c\u093e\u0928 \u0932\u0947\u0902 \u0915\u093f \u0906\u092a\u0915\u094b \u0915\u094d\u092f\u093e \u091a\u093e\u0939\u093f\u090f\u0964</p></div><span class=\"vp-tag\">\u0905\u0902\u092c \u00b7 \u090a\u0928\u093e \u00b7 \u0939\u093f\u092e\u093e\u091a\u0932 \u092a\u094d\u0930\u0926\u0947\u0936</span></div><div class=\"vp-grid\"><article class=\"vp-step\"><div class=\"vp-num\">01 <span>\u092f\u0939\u093e\u0902 \u0938\u0947 \u0936\u0941\u0930\u0942 \u0915\u0930\u0947\u0902</span></div><h3>\u0905\u092a\u0928\u0940 \u091c\u093c\u0930\u0942\u0930\u0924 \u092c\u0924\u093e\u090f\u0902</h3><p>\u0915\u0949\u0932 \u0915\u0930\u0915\u0947 \u092f\u093e \u092a\u0942\u091b\u0924\u093e\u091b \u092e\u0947\u0902 \u092c\u0924\u093e\u090f\u0902 \u0915\u093f \u0906\u092a\u0915\u094b \u0915\u093f\u0938 \u0938\u0947\u0935\u093e \u0914\u0930 \u0915\u093f\u0938 \u0924\u0930\u0939 \u0915\u0940 \u092e\u0926\u0926 \u0915\u0940 \u091c\u093c\u0930\u0942\u0930\u0924 \u0939\u0948\u0964</p><div class=\"vp-example\">\u091c\u0948\u0938\u0947: \u092a\u094d\u0930\u092e\u093e\u0923\u092a\u0924\u094d\u0930 \u092c\u0928\u0935\u093e\u0928\u093e, \u092c\u093f\u0932 \u092d\u0930\u0928\u093e \u092f\u093e \u0911\u0928\u0932\u093e\u0907\u0928 \u0906\u0935\u0947\u0926\u0928 \u0915\u0930\u0928\u093e\u0964</div></article><article class=\"vp-step\"><div class=\"vp-num\">02 <span>\u092a\u0939\u0932\u0947 \u092a\u0941\u0937\u094d\u091f\u093f \u0915\u0930\u0947\u0902</span></div><h3>\u091c\u093c\u0930\u0942\u0930\u0940 \u091c\u093e\u0928\u0915\u093e\u0930\u0940 \u092a\u0942\u091b \u0932\u0947\u0902</h3><p>\u0938\u0947\u0935\u093e \u0915\u0940 \u0909\u092a\u0932\u092c\u094d\u0927\u0924\u093e, \u091c\u093c\u0930\u0942\u0930\u0940 \u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c\u093c \u0914\u0930 \u0936\u0941\u0932\u094d\u0915 \u092a\u0942\u091b\u0947\u0902\u0964 \u092f\u0939 \u092d\u0940 \u091c\u093e\u0928 \u0932\u0947\u0902 \u0915\u093f \u0915\u0947\u0902\u0926\u094d\u0930 \u0906\u0928\u093e \u091c\u093c\u0930\u0942\u0930\u0940 \u0939\u0948 \u092f\u093e \u0928\u0939\u0940\u0902\u0964</p><div class=\"vp-example\">\u091c\u093c\u0930\u0942\u0930\u0940 \u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c\u093c \u0914\u0930 \u092a\u094d\u0930\u0915\u094d\u0930\u093f\u092f\u093e \u0938\u0947\u0935\u093e \u0935 \u0906\u0935\u0947\u0926\u0928 \u0915\u0947 \u0905\u0928\u0941\u0938\u093e\u0930 \u0905\u0932\u0917 \u0939\u094b \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964</div></article><article class=\"vp-step\"><div class=\"vp-num\">03 <span>\u0924\u0948\u092f\u093e\u0930 \u0930\u0916\u0947\u0902</span></div><h3>\u0905\u092a\u0928\u0947 \u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c\u093c \u0924\u0948\u092f\u093e\u0930 \u0930\u0916\u0947\u0902</h3><p>\u0905\u092a\u0928\u0940 \u0938\u0947\u0935\u093e \u0915\u0947 \u0932\u093f\u090f \u092c\u0924\u093e\u090f \u0917\u090f \u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c\u093c \u0914\u0930 \u0906\u0935\u0947\u0926\u0928 \u092f\u093e \u0938\u0902\u0926\u0930\u094d\u092d \u0938\u0902\u0916\u094d\u092f\u093e, \u092f\u0926\u093f \u0939\u094b, \u0924\u0948\u092f\u093e\u0930 \u0930\u0916\u0947\u0902\u0964</p><div class=\"vp-example\">\u092e\u0942\u0932 \u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c\u093c \u092f\u093e \u092a\u094d\u0930\u0924\u093f\u092f\u093e\u0902 \u0915\u0947\u0935\u0932 \u0905\u092a\u0928\u0940 \u0938\u0947\u0935\u093e \u0915\u0947 \u0932\u093f\u090f \u0926\u0940 \u0917\u0908 \u0938\u0932\u093e\u0939 \u0915\u0947 \u0905\u0928\u0941\u0938\u093e\u0930 \u0932\u093e\u090f\u0902\u0964</div></article></div><div class=\"vp-enquiry\"><div class=\"vp-enquiry-copy\"><h3>\u0938\u092e\u091d \u0928\u0939\u0940\u0902 \u0906 \u0930\u0939\u093e \u0915\u093f \u0915\u0939\u093e\u0902 \u0938\u0947 \u0936\u0941\u0930\u0942 \u0915\u0930\u0947\u0902?</h3><p>\u0905\u092a\u0928\u0940 \u091c\u093c\u0930\u0942\u0930\u0924 \u092c\u0924\u093e\u090f\u0902\u0964 \u0936\u0941\u0930\u0941\u0906\u0924 \u0915\u0949\u0932 \u092f\u093e \u092a\u0942\u091b\u0924\u093e\u091b \u0938\u0947 \u0915\u0930\u0947\u0902\u0964</p></div><div class=\"vp-actions\"><a class=\"vp-call\" href=\"tel:+918219037234\">+91 82190 37234 \u092a\u0930 \u0915\u0949\u0932 \u0915\u0930\u0947\u0902</a><a class=\"vp-button\" href=\"/contact.html?lang=hi\">\u092a\u0942\u091b\u0924\u093e\u091b \u0915\u0930\u0947\u0902 <b>\u2197</b></a></div></div><div class=\"vp-privacy\"><span class=\"vp-lock\">\u2713</span><p><strong>\u0905\u092a\u0928\u0940 \u091c\u093e\u0928\u0915\u093e\u0930\u0940 \u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924 \u0930\u0916\u0947\u0902\u0964</strong> \u092a\u0942\u091b\u0924\u093e\u091b \u092e\u0947\u0902 \u0915\u092d\u0940 \u092d\u0940 OTP, \u092a\u093e\u0938\u0935\u0930\u094d\u0921 \u092f\u093e \u092c\u0948\u0902\u0915\u093f\u0902\u0917 PIN \u0938\u093e\u091d\u093e \u0928 \u0915\u0930\u0947\u0902\u0964</p></div></section>":"<section class=\"visit-prep\"><div class=\"vp-heading\"><div><span class=\"vp-kicker\">PLAN YOUR VISIT</span><h2>A little preparation.<br/>A smoother visit.</h2><p>Know what you need before you come to Jan Seva Point.</p></div><span class=\"vp-tag\">Amb \u00b7 Una \u00b7 Himachal Pradesh</span></div><div class=\"vp-grid\"><article class=\"vp-step\"><div class=\"vp-num\">01 <span>START HERE</span></div><h3>Tell us the service</h3><p>Call or enquire with the name of the service and the help you need.</p><div class=\"vp-example\">For example: a certificate, a bill payment or an online application.</div></article><article class=\"vp-step\"><div class=\"vp-num\">02 <span>CHECK FIRST</span></div><h3>Confirm the details</h3><p>Ask about availability, required documents, fees and whether an office visit is needed.</p><div class=\"vp-example\">Requirements can differ by service and application.</div></article><article class=\"vp-step\"><div class=\"vp-num\">03 <span>BE READY</span></div><h3>Keep your papers ready</h3><p>Keep the documents confirmed for your service and any application or reference number ready.</p><div class=\"vp-example\">Bring originals or copies only as advised for your request.</div></article></div><div class=\"vp-enquiry\"><div class=\"vp-enquiry-copy\"><h3>Not sure where to start?</h3><p>Tell us what you need. Start with a call or an enquiry.</p></div><div class=\"vp-actions\"><a class=\"vp-call\" href=\"tel:+918219037234\">Call +91 82190 37234</a><a class=\"vp-button\" href=\"/contact.html\">Make an enquiry <b>\u2197</b></a></div></div><div class=\"vp-privacy\"><span class=\"vp-lock\">\u2713</span><p><strong>Keep your details safe.</strong> Never share an OTP, password or banking PIN in an enquiry.</p></div></section>")}}), /*#__PURE__*/React.createElement("div", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, t('hero_badge')), /*#__PURE__*/React.createElement("h1", null, t('hero_title')), /*#__PURE__*/React.createElement("p", null, t('hero_desc')), /*#__PURE__*/React.createElement("div", {
    className: "cta-row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => setPage('services')
  }, t('btn_view_services')), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost",
    href: "tel:+918219037234"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "inline-contact-icon",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 3H4a1 1 0 00-1 1c0 9.4 7.6 17 17 17a1 1 0 001-1v-3l-5-2-2 2a15 15 0 01-7-7l2-2z"
  })), /*#__PURE__*/React.createElement(LocalText, {
    text: "Call Now"
  })), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-whatsapp",
    href: lang === 'hi' ? HI_ENQUIRY_LINKS.welcome.href : "https://wa.me/918219037234?text=Welcome%20to%20Jan%20Seva%20Point%2C%20how%20may%20I%20assist%20you%3F",
    target: "_blank",
    rel: "noopener",
    onClick: e => openWhatsApp(e, lang === 'hi' ? HI_ENQUIRY_LINKS.welcome.message : 'Welcome to Jan Seva Point, how may I assist you?')
  }, /*#__PURE__*/React.createElement("svg", {
    className: "inline-contact-icon",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 11.5a9 9 0 01-13.4 7.8L3 21l1.7-4.6A9 9 0 1121 11.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 7c0 5 4 9 9 9l1-3-3-1-1 2c-2-1-3-2-4-4l2-1-1-3z"
  })), " WhatsApp"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-art"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-panel"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, t('panel_phone')), /*#__PURE__*/React.createElement("b", null, /*#__PURE__*/React.createElement("a", {
    href: "tel:+918219037234"
  }, "+91 82190 37234"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, t('panel_hours')), /*#__PURE__*/React.createElement("b", null, t('hours_val'))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, t('panel_address')), /*#__PURE__*/React.createElement("b", null, t('address_val')))))), /*#__PURE__*/React.createElement("div", {
    className: "home-extra"
  }, /*#__PURE__*/React.createElement("h2", null, t('home_extra_title')), /*#__PURE__*/React.createElement("p", null, t('home_extra_p1')), /*#__PURE__*/React.createElement("p", null, t('home_extra_p2')), /*#__PURE__*/React.createElement("div", {
    className: "rate-note"
  }, t('home_rate_note')), /*#__PURE__*/React.createElement("div", {
    className: "areas"
  }, ['Amb', 'Una', 'All Una District', 'Mubarakpur', 'Daulatpur', 'Dhautpur', 'Kalruhi', 'Nehria Road', 'All Himachal Pradesh'].map(a => /*#__PURE__*/React.createElement("span", {
    key: tr(a, lang),
    className: "area-tag"
  }, tr(a, lang))))), /*#__PURE__*/React.createElement("div", {
    className: "svc-gallery"
  }, [['e-District', '📋', ''], ['Certificates', '📜', 'alt1'], ['HPSEB Bill', '⚡', 'alt2'], ['Nakal Jamabandi', '📄', 'alt3'], ['Scan & Print', '🖨️', 'alt4'], ['Aadhaar/PAN', '🪪', ''], ['Form Filling', '✏️', 'alt1'], ['Digital', '💻', 'alt2']].map(([n, ic, c], i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    className: 'svc-tile ' + c,
    href: pageURL('detail:'+n)
  }, /*#__PURE__*/React.createElement(ServiceIcon, {
    index: i
  }), /*#__PURE__*/React.createElement("span", null, tr(n, lang)), /*#__PURE__*/React.createElement("small", null, /*#__PURE__*/React.createElement(LocalText, {
    text: "View details \u2192"
  })))))), page === 'home' && React.createElement('div', {dangerouslySetInnerHTML:{__html:(lang === "hi" ? "<div class=\"jsp-about\" id=\"remote-assistance\"><h2>\u0911\u0928\u0932\u093e\u0907\u0928 \u0938\u0939\u093e\u092f\u0924\u093e \u0938\u0947\u0935\u093e\u090f\u0902</h2><p>\u0907\u0928 \u0911\u0928\u0932\u093e\u0907\u0928 \u0915\u093e\u092e\u094b\u0902 \u092e\u0947\u0902 \u0918\u0930 \u0938\u0947 \u092e\u0926\u0926 \u0932\u0947\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u091c\u0928 \u0938\u0947\u0935\u093e \u092a\u0949\u0907\u0902\u091f \u0938\u0947 \u0938\u0902\u092a\u0930\u094d\u0915 \u0915\u0930\u0947\u0902\u0964 \u0936\u0941\u0930\u0942 \u0915\u0930\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0905\u092a\u0928\u0940 \u091c\u093c\u0930\u0942\u0930\u0924 \u0915\u0947 \u0932\u093f\u090f \u0909\u092a\u0932\u092c\u094d\u0927\u0924\u093e, \u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c\u093c \u0914\u0930 \u0936\u0941\u0932\u094d\u0915 \u0915\u0940 \u092a\u0941\u0937\u094d\u091f\u093f \u0915\u0930\u0947\u0902\u0964</p><div class=\"jsp-svc\"><div class=\"jsp-card\"><h3>\u0911\u0928\u0932\u093e\u0907\u0928 \u092b\u0949\u0930\u094d\u092e \u092d\u0930\u0928\u093e</h3><p>\u0938\u0930\u0915\u093e\u0930\u0940 \u0928\u094c\u0915\u0930\u0940 \u0915\u0947 \u0906\u0935\u0947\u0926\u0928, \u0915\u0949\u0932\u0947\u091c \u092a\u094d\u0930\u0935\u0947\u0936 \u092b\u0949\u0930\u094d\u092e, \u091b\u093e\u0924\u094d\u0930\u0935\u0943\u0924\u094d\u0924\u093f \u0906\u0935\u0947\u0926\u0928 \u0914\u0930 \u092a\u094d\u0930\u0935\u0947\u0936 \u092a\u0930\u0940\u0915\u094d\u0937\u093e \u092a\u0902\u091c\u0940\u0915\u0930\u0923\u0964</p><p><strong>\u0915\u0947\u0902\u0926\u094d\u0930 \u0906\u0928\u093e: \u0906\u092e \u0924\u094c\u0930 \u092a\u0930 \u091c\u093c\u0930\u0942\u0930\u0940 \u0928\u0939\u0940\u0902\u0964</strong></p></div><div class=\"jsp-card\"><h3>\u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c\u093c \u0914\u0930 PDF \u092e\u0947\u0902 \u0938\u0939\u093e\u092f\u0924\u093e</h3><p>\u0911\u0928\u0932\u093e\u0907\u0928 \u0906\u0935\u0947\u0926\u0928 \u0915\u0940 PDF, \u092a\u094d\u0930\u0935\u0947\u0936 \u092a\u0924\u094d\u0930 \u0914\u0930 \u092a\u0930\u093f\u0923\u093e\u092e; \u092b\u0949\u0930\u094d\u092e \u092e\u0947\u0902 \u0938\u0941\u0927\u093e\u0930 \u0915\u093e \u092e\u093e\u0930\u094d\u0917\u0926\u0930\u094d\u0936\u0928; \u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c\u093c \u0938\u094d\u0915\u0948\u0928 \u0915\u0930\u0928\u093e, \u0906\u0915\u093e\u0930 \u092c\u0926\u0932\u0928\u093e \u0914\u0930 PDF \u091c\u094b\u0921\u093c\u0928\u093e\u0964</p></div><div class=\"jsp-card\"><h3>\u092c\u093f\u0932 \u092d\u0941\u0917\u0924\u093e\u0928 \u092e\u0947\u0902 \u0938\u0939\u093e\u092f\u0924\u093e</h3><p>\u092c\u093f\u091c\u0932\u0940 \u092c\u093f\u0932, \u092e\u094b\u092c\u093e\u0907\u0932/DTH \u0930\u093f\u091a\u093e\u0930\u094d\u091c \u0914\u0930 \u092d\u0941\u0917\u0924\u093e\u0928 \u0915\u0940 \u0930\u0938\u0940\u0926 \u0921\u093e\u0909\u0928\u0932\u094b\u0921 \u0915\u0930\u0928\u093e\u0964 \u0911\u0928\u0932\u093e\u0907\u0928 \u0938\u0941\u0935\u093f\u0927\u093e \u0939\u094b\u0928\u0947 \u092a\u0930 \u092a\u093e\u0928\u0940 \u0915\u0947 \u092c\u093f\u0932 \u092e\u0947\u0902 \u0938\u0939\u093e\u092f\u0924\u093e \u0909\u092a\u0932\u092c\u094d\u0927 \u0939\u0948\u0964</p></div><div class=\"jsp-card\"><h3>\u0938\u094d\u0925\u093f\u0924\u093f \u091c\u093e\u0902\u091a \u0914\u0930 \u0911\u0928\u0932\u093e\u0907\u0928 \u092e\u093e\u0930\u094d\u0917\u0926\u0930\u094d\u0936\u0928</h3><p>\u0906\u0935\u0947\u0926\u0928 \u0915\u0940 \u0938\u094d\u0925\u093f\u0924\u093f \u091c\u093e\u0902\u091a\u0928\u093e, \u0905\u092a\u0949\u0907\u0902\u091f\u092e\u0947\u0902\u091f \u092c\u0941\u0915\u093f\u0902\u0917 \u092e\u0947\u0902 \u0938\u0939\u093e\u092f\u0924\u093e, \u092f\u094b\u091c\u0928\u093e \u0915\u0940 \u092a\u093e\u0924\u094d\u0930\u0924\u093e \u0915\u0940 \u091c\u093e\u0928\u0915\u093e\u0930\u0940, \u0911\u0928\u0932\u093e\u0907\u0928 \u092a\u0902\u091c\u0940\u0915\u0930\u0923 \u0915\u093e \u092e\u093e\u0930\u094d\u0917\u0926\u0930\u094d\u0936\u0928 \u0914\u0930 \u0906\u0935\u0947\u0926\u0928 \u0915\u0940 \u0930\u0938\u0940\u0926 \u0921\u093e\u0909\u0928\u0932\u094b\u0921 \u0915\u0930\u0928\u093e\u0964</p></div></div><p class=\"jsp-note\">\u0915\u093f\u0938\u0940 \u0905\u0928\u094d\u092f \u0938\u0947\u0935\u093e \u0915\u0947 \u0932\u093f\u090f \u0915\u0947\u0902\u0926\u094d\u0930 \u0906\u0928\u093e \u091c\u093c\u0930\u0942\u0930\u0940 \u0939\u0948 \u092f\u093e \u0928\u0939\u0940\u0902, \u092f\u0939 \u091c\u0928 \u0938\u0947\u0935\u093e \u092a\u0949\u0907\u0902\u091f \u0938\u0947 \u092a\u0915\u094d\u0915\u093e \u0915\u0930\u0947\u0902\u0964 \u0911\u0928\u0932\u093e\u0907\u0928 \u0938\u0939\u093e\u092f\u0924\u093e \u0938\u0947 \u092e\u0902\u091c\u0942\u0930\u0940, \u092a\u093e\u0924\u094d\u0930\u0924\u093e \u092f\u093e \u0932\u093e\u092d \u0915\u0947 \u092d\u0941\u0917\u0924\u093e\u0928 \u0915\u0940 \u0917\u093e\u0930\u0902\u091f\u0940 \u0928\u0939\u0940\u0902 \u0939\u094b\u0924\u0940\u0964</p></div>":"<div class=\"jsp-about\" id=\"remote-assistance\"><h2>Online Assistance Services</h2><p>Contact Jan Seva Point from home for help with these online tasks. Confirm availability, documents and any fee for your request before starting.</p><div class=\"jsp-svc\"><div class=\"jsp-card\"><h3>Online form filling</h3><p>Government job applications, college admission forms, scholarship applications and entrance exam registration.</p><p><strong>Office visit: usually not required.</strong></p></div><div class=\"jsp-card\"><h3>Document &amp; PDF help</h3><p>Online application PDFs, admit cards and results; form-correction guidance; document scanning, resizing and PDF merging.</p></div><div class=\"jsp-card\"><h3>Bill-payment assistance</h3><p>Electricity bills, mobile/DTH recharge and payment-receipt downloads. Water-bill assistance is available where an online facility exists.</p></div><div class=\"jsp-card\"><h3>Status &amp; online guidance</h3><p>Application status checks, appointment-booking assistance, scheme-eligibility information, online-registration guidance and application-receipt downloads.</p></div></div><p class=\"jsp-note\">Whether another service needs a centre visit must be confirmed with Jan Seva Point. Online assistance does not guarantee approval, eligibility or a benefit payment.</p></div>")}}), (page === 'services' || page === 'approved') && React.createElement('div',{className:'approved-content',dangerouslySetInnerHTML:{__html:(lang === 'hi' ? window.JSP_APPROVED_HI : window.JSP_APPROVED)[window.__APPROVED_KEY || 'services.html']}}), page === 'services' && React.createElement('div', {dangerouslySetInnerHTML:{__html:(lang === "hi" ? "<div class=\"jsp-about\" id=\"remote-assistance\"><h2>\u0911\u0928\u0932\u093e\u0907\u0928 \u0938\u0939\u093e\u092f\u0924\u093e \u0938\u0947\u0935\u093e\u090f\u0902</h2><p>\u0907\u0928 \u0911\u0928\u0932\u093e\u0907\u0928 \u0915\u093e\u092e\u094b\u0902 \u092e\u0947\u0902 \u0918\u0930 \u0938\u0947 \u092e\u0926\u0926 \u0932\u0947\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u091c\u0928 \u0938\u0947\u0935\u093e \u092a\u0949\u0907\u0902\u091f \u0938\u0947 \u0938\u0902\u092a\u0930\u094d\u0915 \u0915\u0930\u0947\u0902\u0964 \u0936\u0941\u0930\u0942 \u0915\u0930\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0905\u092a\u0928\u0940 \u091c\u093c\u0930\u0942\u0930\u0924 \u0915\u0947 \u0932\u093f\u090f \u0909\u092a\u0932\u092c\u094d\u0927\u0924\u093e, \u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c\u093c \u0914\u0930 \u0936\u0941\u0932\u094d\u0915 \u0915\u0940 \u092a\u0941\u0937\u094d\u091f\u093f \u0915\u0930\u0947\u0902\u0964</p><div class=\"jsp-svc\"><div class=\"jsp-card\"><h3>\u0911\u0928\u0932\u093e\u0907\u0928 \u092b\u0949\u0930\u094d\u092e \u092d\u0930\u0928\u093e</h3><p>\u0938\u0930\u0915\u093e\u0930\u0940 \u0928\u094c\u0915\u0930\u0940 \u0915\u0947 \u0906\u0935\u0947\u0926\u0928, \u0915\u0949\u0932\u0947\u091c \u092a\u094d\u0930\u0935\u0947\u0936 \u092b\u0949\u0930\u094d\u092e, \u091b\u093e\u0924\u094d\u0930\u0935\u0943\u0924\u094d\u0924\u093f \u0906\u0935\u0947\u0926\u0928 \u0914\u0930 \u092a\u094d\u0930\u0935\u0947\u0936 \u092a\u0930\u0940\u0915\u094d\u0937\u093e \u092a\u0902\u091c\u0940\u0915\u0930\u0923\u0964</p><p><strong>\u0915\u0947\u0902\u0926\u094d\u0930 \u0906\u0928\u093e: \u0906\u092e \u0924\u094c\u0930 \u092a\u0930 \u091c\u093c\u0930\u0942\u0930\u0940 \u0928\u0939\u0940\u0902\u0964</strong></p></div><div class=\"jsp-card\"><h3>\u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c\u093c \u0914\u0930 PDF \u092e\u0947\u0902 \u0938\u0939\u093e\u092f\u0924\u093e</h3><p>\u0911\u0928\u0932\u093e\u0907\u0928 \u0906\u0935\u0947\u0926\u0928 \u0915\u0940 PDF, \u092a\u094d\u0930\u0935\u0947\u0936 \u092a\u0924\u094d\u0930 \u0914\u0930 \u092a\u0930\u093f\u0923\u093e\u092e; \u092b\u0949\u0930\u094d\u092e \u092e\u0947\u0902 \u0938\u0941\u0927\u093e\u0930 \u0915\u093e \u092e\u093e\u0930\u094d\u0917\u0926\u0930\u094d\u0936\u0928; \u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c\u093c \u0938\u094d\u0915\u0948\u0928 \u0915\u0930\u0928\u093e, \u0906\u0915\u093e\u0930 \u092c\u0926\u0932\u0928\u093e \u0914\u0930 PDF \u091c\u094b\u0921\u093c\u0928\u093e\u0964</p></div><div class=\"jsp-card\"><h3>\u092c\u093f\u0932 \u092d\u0941\u0917\u0924\u093e\u0928 \u092e\u0947\u0902 \u0938\u0939\u093e\u092f\u0924\u093e</h3><p>\u092c\u093f\u091c\u0932\u0940 \u092c\u093f\u0932, \u092e\u094b\u092c\u093e\u0907\u0932/DTH \u0930\u093f\u091a\u093e\u0930\u094d\u091c \u0914\u0930 \u092d\u0941\u0917\u0924\u093e\u0928 \u0915\u0940 \u0930\u0938\u0940\u0926 \u0921\u093e\u0909\u0928\u0932\u094b\u0921 \u0915\u0930\u0928\u093e\u0964 \u0911\u0928\u0932\u093e\u0907\u0928 \u0938\u0941\u0935\u093f\u0927\u093e \u0939\u094b\u0928\u0947 \u092a\u0930 \u092a\u093e\u0928\u0940 \u0915\u0947 \u092c\u093f\u0932 \u092e\u0947\u0902 \u0938\u0939\u093e\u092f\u0924\u093e \u0909\u092a\u0932\u092c\u094d\u0927 \u0939\u0948\u0964</p></div><div class=\"jsp-card\"><h3>\u0938\u094d\u0925\u093f\u0924\u093f \u091c\u093e\u0902\u091a \u0914\u0930 \u0911\u0928\u0932\u093e\u0907\u0928 \u092e\u093e\u0930\u094d\u0917\u0926\u0930\u094d\u0936\u0928</h3><p>\u0906\u0935\u0947\u0926\u0928 \u0915\u0940 \u0938\u094d\u0925\u093f\u0924\u093f \u091c\u093e\u0902\u091a\u0928\u093e, \u0905\u092a\u0949\u0907\u0902\u091f\u092e\u0947\u0902\u091f \u092c\u0941\u0915\u093f\u0902\u0917 \u092e\u0947\u0902 \u0938\u0939\u093e\u092f\u0924\u093e, \u092f\u094b\u091c\u0928\u093e \u0915\u0940 \u092a\u093e\u0924\u094d\u0930\u0924\u093e \u0915\u0940 \u091c\u093e\u0928\u0915\u093e\u0930\u0940, \u0911\u0928\u0932\u093e\u0907\u0928 \u092a\u0902\u091c\u0940\u0915\u0930\u0923 \u0915\u093e \u092e\u093e\u0930\u094d\u0917\u0926\u0930\u094d\u0936\u0928 \u0914\u0930 \u0906\u0935\u0947\u0926\u0928 \u0915\u0940 \u0930\u0938\u0940\u0926 \u0921\u093e\u0909\u0928\u0932\u094b\u0921 \u0915\u0930\u0928\u093e\u0964</p></div></div><p class=\"jsp-note\">\u0915\u093f\u0938\u0940 \u0905\u0928\u094d\u092f \u0938\u0947\u0935\u093e \u0915\u0947 \u0932\u093f\u090f \u0915\u0947\u0902\u0926\u094d\u0930 \u0906\u0928\u093e \u091c\u093c\u0930\u0942\u0930\u0940 \u0939\u0948 \u092f\u093e \u0928\u0939\u0940\u0902, \u092f\u0939 \u091c\u0928 \u0938\u0947\u0935\u093e \u092a\u0949\u0907\u0902\u091f \u0938\u0947 \u092a\u0915\u094d\u0915\u093e \u0915\u0930\u0947\u0902\u0964 \u0911\u0928\u0932\u093e\u0907\u0928 \u0938\u0939\u093e\u092f\u0924\u093e \u0938\u0947 \u092e\u0902\u091c\u0942\u0930\u0940, \u092a\u093e\u0924\u094d\u0930\u0924\u093e \u092f\u093e \u0932\u093e\u092d \u0915\u0947 \u092d\u0941\u0917\u0924\u093e\u0928 \u0915\u0940 \u0917\u093e\u0930\u0902\u091f\u0940 \u0928\u0939\u0940\u0902 \u0939\u094b\u0924\u0940\u0964</p></div>":"<div class=\"jsp-about\" id=\"remote-assistance\"><h2>Online Assistance Services</h2><p>Contact Jan Seva Point from home for help with these online tasks. Confirm availability, documents and any fee for your request before starting.</p><div class=\"jsp-svc\"><div class=\"jsp-card\"><h3>Online form filling</h3><p>Government job applications, college admission forms, scholarship applications and entrance exam registration.</p><p><strong>Office visit: usually not required.</strong></p></div><div class=\"jsp-card\"><h3>Document &amp; PDF help</h3><p>Online application PDFs, admit cards and results; form-correction guidance; document scanning, resizing and PDF merging.</p></div><div class=\"jsp-card\"><h3>Bill-payment assistance</h3><p>Electricity bills, mobile/DTH recharge and payment-receipt downloads. Water-bill assistance is available where an online facility exists.</p></div><div class=\"jsp-card\"><h3>Status &amp; online guidance</h3><p>Application status checks, appointment-booking assistance, scheme-eligibility information, online-registration guidance and application-receipt downloads.</p></div></div><p class=\"jsp-note\">Whether another service needs a centre visit must be confirmed with Jan Seva Point. Online assistance does not guarantee approval, eligibility or a benefit payment.</p></div>")}}), page === 'about' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "section-title"
  }, t('about_title')), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, t('about_p1')), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, t('about_p2')), /*#__PURE__*/React.createElement("div", {dangerouslySetInnerHTML: {__html: (lang === 'hi' ? "<div class=\"jsp-about\"><h3>जन सेवा पॉइंट में आपका स्वागत है - हिमाचल प्रदेश का #1 भरोसेमंद लोक मित्र केंद्र, ऑनलाइन CSC पोर्टल और डिजिटल नागरिक सेवा केंद्र</h3><p>डिजिटल दस्तावेज़ों, ई-गवर्नेंस और नागरिक सेवाओं में 8 वर्षों से अधिक के पेशेवर अनुभव के साथ, जन सेवा पॉइंट (jansevapoint.shop) हिमाचल प्रदेश में सबसे भरोसेमंद लोक मित्र केंद्र, कॉमन सर्विस सेंटर (CSC) और ऑनलाइन बैंकिंग केंद्र के रूप में जाना जाता है। पिछले 8 वर्षों में हमने अधिकतम सटीकता, पूरी पारदर्शिता और बिना त्रुटि के हजारों आवेदनों पर सफलतापूर्वक काम किया है।</p><p>हम हिमाचल प्रदेश के सभी 12 जिलों में शहरों और दूरदराज़ के ग्रामीण क्षेत्रों के लोगों को ऑनलाइन फॉर्म भरने, सरकारी योजनाओं में पंजीकरण, बैंकिंग और प्रमाणपत्र सेवाओं में तेज़, सुरक्षित और विशेषज्ञ सहायता देते हैं।</p><h4>हिमाचल प्रदेश में जिला और क्षेत्रीय सेवा कवरेज</h4><p>हम हिमाचल प्रदेश के सभी 12 जिलों के नागरिकों को सेवाएं देते हैं:</p><ol class=\"jsp-dist\"><li>बिलासपुर</li><li>चंबा</li><li>हमीरपुर</li><li>कांगड़ा</li><li>किन्नौर</li><li>कुल्लू</li><li>लाहौल और स्पीति</li><li>मंडी</li><li>शिमला</li><li>सिरमौर</li><li>सोलन</li><li>ऊना</li></ol><p class=\"jsp-note\">इन उप-मंडलों पर विशेष ध्यान: अंब, बंगाणा, हरोली, घनारी। उप-तहसीलें: भरवाईं, ईसपुर, जोल, दुलैहड़, बिहरू कलां, गगरेट (कलोह), मैहतपुर बसदेहड़ा (ऊना)।</p><h4>हमारी डिजिटल और सरकारी सेवाएं</h4><div class=\"jsp-svc\"><div class=\"jsp-card\"><h5>प्रधानमंत्री और राज्य कल्याण योजनाएं</h5><p>प्रमुख केंद्रीय और राज्य योजनाओं के लिए विशेषज्ञ मार्गदर्शन और सटीक ऑनलाइन पंजीकरण, जिनमें पीएम किसान सम्मान निधि योजना (ई-KYC और स्थिति जांच) तथा पीएम आवास योजना (प्रधानमंत्री आवास योजना का फॉर्म भरना और धन हस्तांतरण की स्थिति देखना) शामिल हैं।</p></div><div class=\"jsp-card\"><h5>विद्यार्थियों और सरकारी नौकरी की भर्ती के फॉर्म</h5><p>प्रतियोगी परीक्षाओं और करियर पोर्टलों के लिए बिना त्रुटि के आवेदन जमा करना, जिनमें JEE ऑनलाइन पंजीकरण, रेलवे भर्ती, पुलिस भर्ती, भारतीय सेना भर्ती और अग्निवीर के फॉर्म शामिल हैं।</p></div><div class=\"jsp-card\"><h5>बैंकिंग, वित्तीय और KYC सेवाएं</h5><p>सुरक्षित डिजिटल धन हस्तांतरण, तुरंत बैंक खाता खोलने में सहायता, तथा आवश्यक आधार कार्ड अपडेट, पैन कार्ड लिंकिंग और KYC सुविधाएं।</p></div><div class=\"jsp-card\"><h5>प्रमाणपत्र और नागरिक दस्तावेज़</h5><p>जन्म प्रमाणपत्र, विवाह प्रमाणपत्र, आय प्रमाणपत्र, जाति प्रमाणपत्र, हिमाचली मूल निवास प्रमाणपत्र और राज्य सरकार की योजनाओं के नवीनीकरण की तेज़ प्रक्रिया।</p></div><div class=\"jsp-card\"><h5>परिवहन और ड्राइविंग लाइसेंस सेवाएं</h5><p>नए ड्राइविंग लाइसेंस (DL) के आवेदन, लर्निंग लाइसेंस, DL नवीनीकरण और वाहन पंजीकरण सेवाओं के लिए पूरी ऑनलाइन सहायता।</p></div><div class=\"jsp-card\"><h5>सामान्य डिजिटल और बिल भुगतान सेवाएं</h5><p>बिजली और पानी के बिल भुगतान, प्रिंटआउट, दस्तावेज़ स्कैनिंग, पासपोर्ट फोटो प्रिंटिंग और लोक मित्र केंद्र की डिजिटल सेवाएं।</p></div></div></div><section class=\"jsp-why\" id=\"why-choose\"><h3>जन सेवा पॉइंट क्यों चुनें?</h3><div class=\"jsp-why-grid\"><div class=\"jsp-why-item\"><h5>8+ वर्षों का अनुभव</h5><p>सरकारी पोर्टलों, ई-डिस्ट्रिक्ट सेवाओं और आधिकारिक दस्तावेज़ों के काम के लिए हिमाचल प्रदेश में एक भरोसेमंद नाम।</p></div><div class=\"jsp-why-item\"><h5>फॉर्म भरने में 100% सटीकता</h5><p>सरकारी योजनाओं, छात्रवृत्ति आवेदनों और नौकरी के फॉर्म में कोई अस्वीकृति न हो, इसके लिए बारीकी से जांच।</p></div><div class=\"jsp-why-item\"><h5>सबसे भरोसेमंद लोक मित्र और CSC केंद्र</h5><p>किफायती शुल्क, डेटा की गोपनीयता और समय पर ग्राहक सहायता के लिए जाना जाता है।</p></div><div class=\"jsp-why-item\"><h5>डिजिटल सुविधा</h5><p>लंबी कतारों में खड़े हुए बिना सरकारी कागज़ी काम और बैंकिंग का काम जल्दी करवाएं।</p></div></div></section>" : `<div class="jsp-about"><h3>Welcome to Jan Seva Point – Himachal Pradesh’s #1 Trusted Lok Mitra Kendra, Online CSC Portal &amp; Digital Citizen Service Hub</h3><p>With over 8 years of trusted professional experience in digital documentation, e-governance, and citizen services, Jan Seva Point (jansevapoint.shop) is recognized as the most reliable Lok Mitra Kendra, Common Service Center (CSC), and online banking point in Himachal Pradesh. Over the past 8 years, we have successfully processed thousands of applications with maximum accuracy, total transparency, and zero errors.</p><p>We proudly deliver fast, secure, and expert online form filling, government scheme registrations, banking, and certificate services across all 12 districts of Himachal Pradesh, covering urban centers and remote rural areas alike.</p><h4>Complete District &amp; Regional Coverage in Himachal Pradesh</h4><p>We cater to citizens across all 12 HP Districts:</p><ol class="jsp-dist"><li>Bilaspur</li><li>Chamba</li><li>Hamirpur</li><li>Kangra</li><li>Kinnaur</li><li>Kullu</li><li>Lahaul and Spiti</li><li>Mandi</li><li>Shimla</li><li>Sirmaur</li><li>Solan</li><li>Una</li></ol><p class="jsp-note">Special focus across Sub-divisions: Amb, Bangana, Haroli, Ghanari, and Sub-tehsils: Bharwain, Ispur, Jol, Dulehar, Bihru Kalan, Gagret at Kaloh, Mehatpur Basdehra (Una).</p><h4>Our Comprehensive Range of Digital &amp; Government Services</h4><div class="jsp-svc"><div class="jsp-card"><h5>Pradhan Mantri &amp; State Welfare Schemes</h5><p>Expert guidance and accurate online registration for top central and state schemes, including PM Kisan Samman Nidhi Yojana (e-KYC &amp; status check) and PM Awas Yojana (Pradhan Mantri Awas Yojana form filling &amp; fund transfer tracking).</p></div><div class="jsp-card"><h5>Student &amp; Government Job Recruitment Forms</h5><p>Zero-error application submissions for competitive exams and career portals, featuring JEE online registration, Railway recruitment form filling, Police recruitment forms, and Indian Army recruitment &amp; Agniveer forms.</p></div><div class="jsp-card"><h5>Banking, Financial &amp; KYC Services</h5><p>Secure digital money transfer / fund transfer services, instant bank account opening assistance, and mandatory Aadhaar card update, PAN card linking &amp; KYC facilities.</p></div><div class="jsp-card"><h5>Legal Certificates &amp; Civil Documents</h5><p>Fast processing for Janam Praman Patra (Birth Certificate), Marriage Certificate, Income Certificate, Caste Certificate, Himachali Bonafide Certificate, and renewal of state government schemes.</p></div><div class="jsp-card"><h5>Transport &amp; Driving Licence Services</h5><p>Complete online assistance for New Driving Licence (DL) applications, Learning Licence, DL renewal, and vehicle registration services.</p></div><div class="jsp-card"><h5>General Digital &amp; Utility Services</h5><p>Utility bill payments, electricity/water bill payment, printouts, document scanning, passport photo printing, and comprehensive Lok Mitra Kendra digital services.</p></div></div></div><section class="jsp-why" id="why-choose"><h3>Why Choose Jan Seva Point?</h3><div class="jsp-why-grid"><div class="jsp-why-item"><h5>8+ Years of Proven Expertise</h5><p>A trusted name in HP for handling complex government portals, e-district services, and official documentation seamlessly.</p></div><div class="jsp-why-item"><h5>100% Form Accuracy</h5><p>Meticulous verification to ensure zero rejections in government schemes, scholarship applications, and job forms.</p></div><div class="jsp-why-item"><h5>Most Trusted Lok Mitra &amp; CSC Center</h5><p>Known for affordable pricing, data privacy, and prompt client assistance.</p></div><div class="jsp-why-item"><h5>Digital Convenience</h5><p>Get your government paperwork and banking done quickly without standing in long queues.</p></div></div></section>`)}}), /*#__PURE__*/React.createElement("section", {
    className: "about-areas",
    "aria-labelledby": "areas-heading"
  }, /*#__PURE__*/React.createElement("h3", {
    id: "areas-heading"
  }, /*#__PURE__*/React.createElement(LocalText, {
    text: "Areas we serve"
  })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(LocalText, {
    text: "Una, Amb, Bangana, Haroli, Ghanari, Bharwain, Ispur, Jol, Dulehar, Bihrukalan, Kaloh and Mehatpur Basdehra."
  })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(LocalText, {
    text: "Kangra, Mandi, Shimla, Solan, Kullu, Chamba, Hamirpur, Bilaspur, Sirmaur, Kinnaur, and Lahaul and Spiti."
  })))), page === 'gallery' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "section-title"
  }, t('gallery_title')), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, t('gallery_sub')), /*#__PURE__*/React.createElement("div", {
    className: "gallery"
  }, (window.__BANNERS || []).map((src, i) => /*#__PURE__*/React.createElement("div", {
    className: "tile",
    key: i
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: 'Gallery ' + (i + 1)
  }))))), page === 'faq' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "section-title"
  }, t('faq_title')), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, t('faq_sub')), /*#__PURE__*/React.createElement("div", {
    className: "faq-list"
  }, FAQ.map((item, i) => /*#__PURE__*/React.createElement(FaqItem, {
    key: i,
    item: item,
    lang: lang
  })))), page === 'terms' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "section-title"
  }, t('terms_title')), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, t('terms_sub')), /*#__PURE__*/React.createElement("div", {
    className: "terms-content"
  }, /*#__PURE__*/React.createElement(ServiceTerms, null), /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(LocalText, {
    text: "1. Services"
  })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(LocalText, {
    text: "We facilitate Himachal Online Seva, G2C applications, certificates, bill payment, form filling and digital citizen services at our Lok Mitra Kendra."
  })), /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(LocalText, {
    text: "2. Contact"
  })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(LocalText, {
    text: "+91 82190 37234 | Garden Colony, Nehria Road, Amb, HP 177203"
  })))), page === 'detail' && /*#__PURE__*/React.createElement(ServiceDetail, {
    name: detail,
    onBack: () => {
      setPage('home');
      window.scrollTo(0, 0);
    }
  }), page === 'contact' && /*#__PURE__*/React.createElement(ContactForm, {
    t: t,
    lang: lang,
    services: SERVICES
  })), /*#__PURE__*/React.createElement(FaqChat, null), /*#__PURE__*/React.createElement(ActionDock, {
    onEnquiry: () => {
      setPage("contact");
      window.scrollTo(0, 0);
    }
  }), /*#__PURE__*/React.createElement("footer", {
    className: "jsp-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jsp-footer-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jsp-footer-grid"
  }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", null, "Jan Seva Point"), /*#__PURE__*/React.createElement("p", {
    className: "foot-tag"
  }, /*#__PURE__*/React.createElement(LocalText, {
    text: "Citizen services \xB7 Amb & Una"
  })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(LocalText, {
    text: "Help with government applications, certificates, bill payments and everyday digital work."
  })), /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(LocalText, {
    text: "Social & directions"
  })), /*#__PURE__*/React.createElement("div", {
    className: "footer-social"
  }, /*#__PURE__*/React.createElement("a", {
    "aria-label": "Call Jan Seva Point",
    href: "tel:+918219037234",
    "aria-label": "Call Jan Seva Point"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 3H4a1 1 0 00-1 1c0 9.4 7.6 17 17 17a1 1 0 001-1v-3l-5-2-2 2a15 15 0 01-7-7l2-2z"
  })), /*#__PURE__*/React.createElement(LocalText, {
    text: "Call"
  })), /*#__PURE__*/React.createElement("a", {
    "aria-label": "WhatsApp enquiry",
    href: lang === 'hi' ? HI_ENQUIRY_LINKS.welcome.href : "https://wa.me/918219037234?text=Welcome%20to%20Jan%20Seva%20Point%2C%20how%20may%20I%20assist%20you%3F",
    target: "_blank",
    rel: "noopener",
    onClick: e => openWhatsApp(e, lang === 'hi' ? HI_ENQUIRY_LINKS.welcome.message : 'Welcome to Jan Seva Point, how may I assist you?')
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 11.5a9 9 0 01-13.4 7.8L3 21l1.7-4.6A9 9 0 1121 11.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 7c0 5 4 9 9 9l1-3-3-1-1 2c-2-1-3-2-4-4l2-1-1-3z"
  })), "WhatsApp"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.facebook.com/kanavsood1983",
    target: "_blank",
    rel: "noopener",
    "aria-label": "Facebook"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 22v-9h3l.5-4H14V7c0-1 .3-1.5 1.6-1.5H18V2.2c-.5-.1-1.9-.2-3.4-.2-3.3 0-5.1 2-5.1 5.3V9H6v4h3.5v9z"
  })), "Facebook"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/jansevapoint?dlrf=NjFvcWFnNWNhazBw&utm_source=qr",
    target: "_blank",
    rel: "noopener",
    "aria-label": "Instagram"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "6.5",
    r: ".8",
    fill: "currentColor"
  })), "Instagram"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.google.com/maps/dir/?api=1&destination=CSC+LOK+MITRA+KENDAR+AMB&destination_place_id=ChIJq4u5T9YjGzkRj682LBpUqFY&travelmode=driving&dir_action=navigate",
    target: "_blank",
    rel: "noopener",
    "aria-label": "Google Maps directions"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1116 0z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2.7"
  })), /*#__PURE__*/React.createElement(LocalText, {
    text: "Map"
  })))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(LocalText, {
    text: "Quick links"
  })), /*#__PURE__*/React.createElement("div", {
    className: "footer-links"
  }, NAV.map(([id, key]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: pageURL(id)
  }, (T[key] ? T[key][lang] : (key === "Blog" && lang === "hi" ? "ब्लॉग" : key)))), /*#__PURE__*/React.createElement("button", {
    key: "why",
    onClick: () => { location.href=pageURL('about')+'#why-choose'; }
  }, lang === "hi" ? "हमें क्यों चुनें" : "Why Choose Us"))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(LocalText, {
    text: "Visit or contact us"
  })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(LocalText, {
    text: "Garden Colony, Nehria Road"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(LocalText, {
    text: "Opp. HPPWD Rest House, Tehsil Amb"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(LocalText, {
    text: "Himachal Pradesh 177203"
  })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "tel:+918219037234"
  }, "+91 82190 37234")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(LocalText, {
    text: "Monday to Saturday"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(LocalText, {
    text: "9:30 AM - 7:30 PM"
  })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: lang === 'hi' ? HI_ENQUIRY_LINKS.welcome.href : "https://wa.me/918219037234?text=Welcome%20to%20Jan%20Seva%20Point%2C%20how%20may%20I%20assist%20you%3F",
    target: "_blank",
    rel: "noopener",
    onClick: e => openWhatsApp(e, lang === 'hi' ? HI_ENQUIRY_LINKS.welcome.message : 'Welcome to Jan Seva Point, how may I assist you?')
  }, /*#__PURE__*/React.createElement(LocalText, {
    text: "WhatsApp enquiry \u2197"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "jsp-footer-bottom"
  }, /*#__PURE__*/React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Jan Seva Point. ", /*#__PURE__*/React.createElement(LocalText, {
    text: "All rights reserved."
  })), /*#__PURE__*/React.createElement("p", {
    className: "footer-credit"
  }, /*#__PURE__*/React.createElement(LocalText, {
    text: "Powered by"
  }), " ", /*#__PURE__*/React.createElement("a", {
    href: "https://vaynaify.buzz/",
    target: "_blank",
    rel: "noopener"
  }, "vaynaify.buzz \u2197")))))));
}
function ServiceTerms() {
  const lang = React.useContext(LanguageContext);
  const [open, setOpen] = useState(null);
  const en = [['Bring the documents required by UIDAI. Updates follow UIDAI rules and may need an in-person visit to an authorised centre. Enquiry here does not update Aadhaar. Never share Aadhaar numbers, OTPs or document photos over chat.'], ['Provide accurate identity and application details. Requirements and approval follow the relevant PAN service rules. Check the entered details before submission.'], ['Eligibility, documents and decisions follow the department rules for the selected application. Review your information before submission.'], ['Provide the correct consumer number and bill. Verify account details and payable amount before payment, and keep the receipt.'], ['Required evidence depends on the certificate. The department decides eligibility, approval and processing time.'], ['Provide correct land and applicant details. Record availability and certified copies depend on the relevant department.'], ['Check pages, print settings and copies before work begins. Bring only documents you are entitled to copy; collect your originals.'], ['Provide correct details and required documents. Review all entries before submission. Acceptance and processing depend on the relevant authority.'], ['Registration and corrections follow election authority rules. Provide accurate details and required evidence; approval is not guaranteed.'], ['Available help depends on the requested work. Confirm the scope, documents and charges before work starts.'], ['Check policy terms, eligibility and charges with the insurer. Application assistance does not guarantee cover or claim approval.'], ['Bring correct vehicle details and required documents. Approval and processing follow transport department rules.'], ['Requirements depend on your application. Provide accurate information and confirm the process before submission.'], ['Eligibility and documents follow the pension scheme rules. The department decides approval and processing.'], ['Eligibility, documents, tests and renewal rules depend on the licence and department. Assistance does not guarantee issue or renewal.']];
  const hi = ['UIDAI के अनुसार जरूरी दस्तावेज लाएं। अपडेट UIDAI नियमों से होगा और अधिकृत केंद्र पर स्वयं जाना पड़ सकता है। यहां पूछताछ से Aadhaar अपडेट नहीं होता। चैट में Aadhaar नंबर, OTP या दस्तावेजों की फोटो न भेजें।', 'सही पहचान और आवेदन जानकारी दें। दस्तावेज और मंजूरी संबंधित PAN सेवा के नियमों पर निर्भर हैं। जमा करने से पहले जानकारी जांचें।', 'पात्रता, दस्तावेज और निर्णय चुने गए आवेदन के विभागीय नियमों के अनुसार होंगे। जमा करने से पहले जानकारी जांचें।', 'सही उपभोक्ता नंबर और बिल दें। भुगतान से पहले खाते की जानकारी और राशि जांचें। रसीद रखें।', 'दस्तावेज प्रमाण पत्र पर निर्भर हैं। पात्रता, मंजूरी और समय संबंधित विभाग तय करता है।', 'सही भूमि और आवेदक जानकारी दें। रिकॉर्ड और प्रमाणित प्रति की उपलब्धता संबंधित विभाग पर निर्भर है।', 'काम शुरू होने से पहले पन्ने, प्रिंट सेटिंग और प्रतियां जांचें। केवल वे दस्तावेज लाएं जिनकी प्रति लेने का अधिकार है। मूल दस्तावेज वापस लें।', 'सही जानकारी और जरूरी दस्तावेज दें। जमा करने से पहले सभी विवरण जांचें। स्वीकृति और प्रक्रिया संबंधित विभाग पर निर्भर हैं।', 'पंजीकरण और सुधार निर्वाचन विभाग के नियमों से होंगे। सही जानकारी और प्रमाण दें। मंजूरी की गारंटी नहीं है।', 'सहायता मांगे गए काम पर निर्भर है। शुरू होने से पहले काम, दस्तावेज और शुल्क की पुष्टि करें।', 'पॉलिसी नियम, पात्रता और शुल्क बीमा कंपनी से जांचें। आवेदन सहायता से बीमा या दावा मंजूर होने की गारंटी नहीं है।', 'सही वाहन जानकारी और जरूरी दस्तावेज लाएं। मंजूरी और प्रक्रिया परिवहन विभाग के नियमों से होगी।', 'जरूरतें आपके आवेदन पर निर्भर हैं। सही जानकारी दें और जमा करने से पहले प्रक्रिया पूछें।', 'पात्रता और दस्तावेज पेंशन योजना के नियमों के अनुसार होंगे। विभाग मंजूरी और प्रक्रिया तय करता है।', 'पात्रता, दस्तावेज, परीक्षा और नवीनीकरण के नियम लाइसेंस और विभाग पर निर्भर हैं। सहायता से लाइसेंस मिलने या नवीनीकरण की गारंटी नहीं है।'];
  return /*#__PURE__*/React.createElement("section", {
    className: "service-terms"
  }, /*#__PURE__*/React.createElement("h3", null, lang === 'hi' ? 'सेवा के अनुसार शर्तें' : 'Service-specific terms'), /*#__PURE__*/React.createElement("p", null, lang === 'hi' ? 'काम शुरू होने से पहले सेवा शुल्क और लागू सरकारी शुल्क अलग-अलग पूछें। विभाग या सेवा प्रदाता की प्रक्रिया और समय लागू होंगे। मंजूरी की गारंटी नहीं है।' : 'Before work begins, confirm service charges and any applicable government fees separately. Department or provider rules and processing times apply. Approval is not guaranteed.'), SERVICES.map((svc, j) => /*#__PURE__*/React.createElement("div", {
    className: "terms-item",
    key: j
  }, /*#__PURE__*/React.createElement("button", {
    className: "terms-toggle",
    "aria-expanded": open === j,
    "aria-controls": 'terms-' + j,
    onClick: () => setOpen(open === j ? null : j)
  }, /*#__PURE__*/React.createElement("span", null, svc[lang][0]), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, open === j ? '−' : '+')), open === j && /*#__PURE__*/React.createElement("div", {
    id: 'terms-' + j,
    className: "terms-answer"
  }, /*#__PURE__*/React.createElement("p", null, lang === 'hi' ? hi[j] : en[j][0])))), /*#__PURE__*/React.createElement("p", null, lang === 'hi' ? 'अपनी जानकारी केवल जरूरी सेवा के लिए दें। पासवर्ड और OTP खुद दर्ज करें; चैट में न भेजें। शुल्क, रसीद, रद्द करने और वापसी की लागू शर्तें दुकान से पूछें।' : 'Share only information needed for the service. Enter passwords and OTPs yourself; do not send them over chat. Ask the shop about applicable charges, receipts, cancellation and refund terms.'));
}
function ServiceIcon({
  index
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, [/*#__PURE__*/React.createElement("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "6",
    width: "18",
    height: "23",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 6V3h6v3M11 13h8M11 19h8M11 25h5"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "4",
    width: "22",
    height: "26",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 10h12M10 15h12M10 20h7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "23",
    cy: "26",
    r: "5"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 2L7 19h10l-3 13 13-19H17z"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 3h13l7 7v20H7zM20 3v8h7M12 16h10M12 21h10M12 26h7"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 10V3h16v7M8 24H4V12h24v12h-4M8 19h16v12H8zM23 15h1"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "6",
    width: "26",
    height: "20",
    rx: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "13",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 22v-2c0-4 8-4 8 0v2M19 12h6M19 17h6M19 22h4"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 5h14M5 5v24h22V17M14 21l3-7L28 3l4 4-11 11z"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "4",
    width: "24",
    height: "19",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 23v5M20 23v5M8 29h16"
  }))][index]);
}
const ENQUIRY_LINKS = {
  "aadhaar:Mobile number": {
    "message": "Hello Jan Seva Point, I need guidance on an Aadhaar mobile number update. Please confirm the next step and available assistance.",
    "href": "https://wa.me/918219037234?text=Hello+Jan+Seva+Point%2C+I+need+guidance+on+an+Aadhaar+mobile+number+update.+Please+confirm+the+next+step+and+available+assistance."
  },
  "aadhaar:Name correction": {
    "message": "Hello Jan Seva Point, I need guidance on an Aadhaar name correction update. Please confirm the next step and available assistance.",
    "href": "https://wa.me/918219037234?text=Hello+Jan+Seva+Point%2C+I+need+guidance+on+an+Aadhaar+name+correction+update.+Please+confirm+the+next+step+and+available+assistance."
  },
  "aadhaar:Address": {
    "message": "Hello Jan Seva Point, I need guidance on an Aadhaar address update. Please confirm the next step and available assistance.",
    "href": "https://wa.me/918219037234?text=Hello+Jan+Seva+Point%2C+I+need+guidance+on+an+Aadhaar+address+update.+Please+confirm+the+next+step+and+available+assistance."
  },
  "aadhaar:Date of birth": {
    "message": "Hello Jan Seva Point, I need guidance on an Aadhaar date of birth update. Please confirm the next step and available assistance.",
    "href": "https://wa.me/918219037234?text=Hello+Jan+Seva+Point%2C+I+need+guidance+on+an+Aadhaar+date+of+birth+update.+Please+confirm+the+next+step+and+available+assistance."
  },
  "aadhaar:Gender": {
    "message": "Hello Jan Seva Point, I need guidance on an Aadhaar gender update. Please confirm the next step and available assistance.",
    "href": "https://wa.me/918219037234?text=Hello+Jan+Seva+Point%2C+I+need+guidance+on+an+Aadhaar+gender+update.+Please+confirm+the+next+step+and+available+assistance."
  },
  "aadhaar:Photo / biometrics": {
    "message": "Hello Jan Seva Point, I need guidance on an Aadhaar photo / biometrics update. Please confirm the next step and available assistance.",
    "href": "https://wa.me/918219037234?text=Hello+Jan+Seva+Point%2C+I+need+guidance+on+an+Aadhaar+photo+%2F+biometrics+update.+Please+confirm+the+next+step+and+available+assistance."
  },
  "service:e-District": {
    "message": "Hello Jan Seva Point, I would like to enquire about e-District. Please confirm the process and required documents.",
    "href": "https://wa.me/918219037234?text=Hello+Jan+Seva+Point%2C+I+would+like+to+enquire+about+e-District.+Please+confirm+the+process+and+required+documents."
  },
  "service:Certificates": {
    "message": "Hello Jan Seva Point, I would like to enquire about Certificates. Please confirm the process and required documents.",
    "href": "https://wa.me/918219037234?text=Hello+Jan+Seva+Point%2C+I+would+like+to+enquire+about+Certificates.+Please+confirm+the+process+and+required+documents."
  },
  "service:HPSEB Bill": {
    "message": "Hello Jan Seva Point, I would like to enquire about HPSEB Bill. Please confirm the process and required documents.",
    "href": "https://wa.me/918219037234?text=Hello+Jan+Seva+Point%2C+I+would+like+to+enquire+about+HPSEB+Bill.+Please+confirm+the+process+and+required+documents."
  },
  "service:Nakal Jamabandi": {
    "message": "Hello Jan Seva Point, I would like to enquire about Nakal Jamabandi. Please confirm the process and required documents.",
    "href": "https://wa.me/918219037234?text=Hello+Jan+Seva+Point%2C+I+would+like+to+enquire+about+Nakal+Jamabandi.+Please+confirm+the+process+and+required+documents."
  },
  "service:Scan & Print": {
    "message": "Hello Jan Seva Point, I would like to enquire about Scan & Print. Please confirm the process and required documents.",
    "href": "https://wa.me/918219037234?text=Hello+Jan+Seva+Point%2C+I+would+like+to+enquire+about+Scan+%26+Print.+Please+confirm+the+process+and+required+documents."
  },
  "service:Form Filling": {
    "message": "Hello Jan Seva Point, I would like to enquire about Form Filling. Please confirm the process and required documents.",
    "href": "https://wa.me/918219037234?text=Hello+Jan+Seva+Point%2C+I+would+like+to+enquire+about+Form+Filling.+Please+confirm+the+process+and+required+documents."
  },
  "service:Digital": {
    "message": "Hello Jan Seva Point, I would like to enquire about Digital. Please confirm the process and required documents.",
    "href": "https://wa.me/918219037234?text=Hello+Jan+Seva+Point%2C+I+would+like+to+enquire+about+Digital.+Please+confirm+the+process+and+required+documents."
  },
  "faq:What services are available?": {
    "message": "Hello Jan Seva Point, I have a question: What services are available?",
    "href": "https://wa.me/918219037234?text=Hello+Jan+Seva+Point%2C+I+have+a+question%3A+What+services+are+available%3F"
  },
  "faq:What are your opening hours?": {
    "message": "Hello Jan Seva Point, I have a question: What are your opening hours?",
    "href": "https://wa.me/918219037234?text=Hello+Jan+Seva+Point%2C+I+have+a+question%3A+What+are+your+opening+hours%3F"
  },
  "faq:How do I reach the shop?": {
    "message": "Hello Jan Seva Point, I have a question: How do I reach the shop?",
    "href": "https://wa.me/918219037234?text=Hello+Jan+Seva+Point%2C+I+have+a+question%3A+How+do+I+reach+the+shop%3F"
  },
  "faq:Can I change my Aadhaar mobile number?": {
    "message": "Hello Jan Seva Point, I have a question: Can I change my Aadhaar mobile number?",
    "href": "https://wa.me/918219037234?text=Hello+Jan+Seva+Point%2C+I+have+a+question%3A+Can+I+change+my+Aadhaar+mobile+number%3F"
  },
  "faq:Which documents should I bring?": {
    "message": "Hello Jan Seva Point, I have a question: Which documents should I bring?",
    "href": "https://wa.me/918219037234?text=Hello+Jan+Seva+Point%2C+I+have+a+question%3A+Which+documents+should+I+bring%3F"
  },
  "pan": {
    "message": "Hello Jan Seva Point, I need PAN card assistance. Please confirm the process and required documents.",
    "href": "https://wa.me/918219037234?text=Hello+Jan+Seva+Point%2C+I+need+PAN+card+assistance.+Please+confirm+the+process+and+required+documents."
  }
};
const HI_ENQUIRY_LINKS = {
  "aadhaar:Mobile number": {
    "message": "नमस्ते Jan Seva Point, Aadhaar में मोबाइल नंबर अपडेट के लिए मार्गदर्शन चाहिए। अगला कदम और उपलब्ध सहायता बताएं।",
    "href": "https://wa.me/918219037234?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87+Jan+Seva+Point%2C+Aadhaar+%E0%A4%AE%E0%A5%87%E0%A4%82+%E0%A4%AE%E0%A5%8B%E0%A4%AC%E0%A4%BE%E0%A4%87%E0%A4%B2+%E0%A4%A8%E0%A4%82%E0%A4%AC%E0%A4%B0+%E0%A4%85%E0%A4%AA%E0%A4%A1%E0%A5%87%E0%A4%9F+%E0%A4%95%E0%A5%87+%E0%A4%B2%E0%A4%BF%E0%A4%8F+%E0%A4%AE%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%97%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%B6%E0%A4%A8+%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A5%A4+%E0%A4%85%E0%A4%97%E0%A4%B2%E0%A4%BE+%E0%A4%95%E0%A4%A6%E0%A4%AE+%E0%A4%94%E0%A4%B0+%E0%A4%89%E0%A4%AA%E0%A4%B2%E0%A4%AC%E0%A5%8D%E0%A4%A7+%E0%A4%B8%E0%A4%B9%E0%A4%BE%E0%A4%AF%E0%A4%A4%E0%A4%BE+%E0%A4%AC%E0%A4%A4%E0%A4%BE%E0%A4%8F%E0%A4%82%E0%A5%A4"
  },
  "aadhaar:Name correction": {
    "message": "नमस्ते Jan Seva Point, Aadhaar में नाम में सुधार अपडेट के लिए मार्गदर्शन चाहिए। अगला कदम और उपलब्ध सहायता बताएं।",
    "href": "https://wa.me/918219037234?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87+Jan+Seva+Point%2C+Aadhaar+%E0%A4%AE%E0%A5%87%E0%A4%82+%E0%A4%A8%E0%A4%BE%E0%A4%AE+%E0%A4%AE%E0%A5%87%E0%A4%82+%E0%A4%B8%E0%A5%81%E0%A4%A7%E0%A4%BE%E0%A4%B0+%E0%A4%85%E0%A4%AA%E0%A4%A1%E0%A5%87%E0%A4%9F+%E0%A4%95%E0%A5%87+%E0%A4%B2%E0%A4%BF%E0%A4%8F+%E0%A4%AE%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%97%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%B6%E0%A4%A8+%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A5%A4+%E0%A4%85%E0%A4%97%E0%A4%B2%E0%A4%BE+%E0%A4%95%E0%A4%A6%E0%A4%AE+%E0%A4%94%E0%A4%B0+%E0%A4%89%E0%A4%AA%E0%A4%B2%E0%A4%AC%E0%A5%8D%E0%A4%A7+%E0%A4%B8%E0%A4%B9%E0%A4%BE%E0%A4%AF%E0%A4%A4%E0%A4%BE+%E0%A4%AC%E0%A4%A4%E0%A4%BE%E0%A4%8F%E0%A4%82%E0%A5%A4"
  },
  "aadhaar:Address": {
    "message": "नमस्ते Jan Seva Point, Aadhaar में पता अपडेट के लिए मार्गदर्शन चाहिए। अगला कदम और उपलब्ध सहायता बताएं।",
    "href": "https://wa.me/918219037234?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87+Jan+Seva+Point%2C+Aadhaar+%E0%A4%AE%E0%A5%87%E0%A4%82+%E0%A4%AA%E0%A4%A4%E0%A4%BE+%E0%A4%85%E0%A4%AA%E0%A4%A1%E0%A5%87%E0%A4%9F+%E0%A4%95%E0%A5%87+%E0%A4%B2%E0%A4%BF%E0%A4%8F+%E0%A4%AE%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%97%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%B6%E0%A4%A8+%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A5%A4+%E0%A4%85%E0%A4%97%E0%A4%B2%E0%A4%BE+%E0%A4%95%E0%A4%A6%E0%A4%AE+%E0%A4%94%E0%A4%B0+%E0%A4%89%E0%A4%AA%E0%A4%B2%E0%A4%AC%E0%A5%8D%E0%A4%A7+%E0%A4%B8%E0%A4%B9%E0%A4%BE%E0%A4%AF%E0%A4%A4%E0%A4%BE+%E0%A4%AC%E0%A4%A4%E0%A4%BE%E0%A4%8F%E0%A4%82%E0%A5%A4"
  },
  "aadhaar:Date of birth": {
    "message": "नमस्ते Jan Seva Point, Aadhaar में जन्मतिथि अपडेट के लिए मार्गदर्शन चाहिए। अगला कदम और उपलब्ध सहायता बताएं।",
    "href": "https://wa.me/918219037234?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87+Jan+Seva+Point%2C+Aadhaar+%E0%A4%AE%E0%A5%87%E0%A4%82+%E0%A4%9C%E0%A4%A8%E0%A5%8D%E0%A4%AE%E0%A4%A4%E0%A4%BF%E0%A4%A5%E0%A4%BF+%E0%A4%85%E0%A4%AA%E0%A4%A1%E0%A5%87%E0%A4%9F+%E0%A4%95%E0%A5%87+%E0%A4%B2%E0%A4%BF%E0%A4%8F+%E0%A4%AE%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%97%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%B6%E0%A4%A8+%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A5%A4+%E0%A4%85%E0%A4%97%E0%A4%B2%E0%A4%BE+%E0%A4%95%E0%A4%A6%E0%A4%AE+%E0%A4%94%E0%A4%B0+%E0%A4%89%E0%A4%AA%E0%A4%B2%E0%A4%AC%E0%A5%8D%E0%A4%A7+%E0%A4%B8%E0%A4%B9%E0%A4%BE%E0%A4%AF%E0%A4%A4%E0%A4%BE+%E0%A4%AC%E0%A4%A4%E0%A4%BE%E0%A4%8F%E0%A4%82%E0%A5%A4"
  },
  "aadhaar:Gender": {
    "message": "नमस्ते Jan Seva Point, Aadhaar में लिंग अपडेट के लिए मार्गदर्शन चाहिए। अगला कदम और उपलब्ध सहायता बताएं।",
    "href": "https://wa.me/918219037234?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87+Jan+Seva+Point%2C+Aadhaar+%E0%A4%AE%E0%A5%87%E0%A4%82+%E0%A4%B2%E0%A4%BF%E0%A4%82%E0%A4%97+%E0%A4%85%E0%A4%AA%E0%A4%A1%E0%A5%87%E0%A4%9F+%E0%A4%95%E0%A5%87+%E0%A4%B2%E0%A4%BF%E0%A4%8F+%E0%A4%AE%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%97%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%B6%E0%A4%A8+%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A5%A4+%E0%A4%85%E0%A4%97%E0%A4%B2%E0%A4%BE+%E0%A4%95%E0%A4%A6%E0%A4%AE+%E0%A4%94%E0%A4%B0+%E0%A4%89%E0%A4%AA%E0%A4%B2%E0%A4%AC%E0%A5%8D%E0%A4%A7+%E0%A4%B8%E0%A4%B9%E0%A4%BE%E0%A4%AF%E0%A4%A4%E0%A4%BE+%E0%A4%AC%E0%A4%A4%E0%A4%BE%E0%A4%8F%E0%A4%82%E0%A5%A4"
  },
  "aadhaar:Photo / biometrics": {
    "message": "नमस्ते Jan Seva Point, Aadhaar में फोटो / बायोमेट्रिक अपडेट के लिए मार्गदर्शन चाहिए। अगला कदम और उपलब्ध सहायता बताएं।",
    "href": "https://wa.me/918219037234?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87+Jan+Seva+Point%2C+Aadhaar+%E0%A4%AE%E0%A5%87%E0%A4%82+%E0%A4%AB%E0%A5%8B%E0%A4%9F%E0%A5%8B+%2F+%E0%A4%AC%E0%A4%BE%E0%A4%AF%E0%A5%8B%E0%A4%AE%E0%A5%87%E0%A4%9F%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%95+%E0%A4%85%E0%A4%AA%E0%A4%A1%E0%A5%87%E0%A4%9F+%E0%A4%95%E0%A5%87+%E0%A4%B2%E0%A4%BF%E0%A4%8F+%E0%A4%AE%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%97%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%B6%E0%A4%A8+%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A5%A4+%E0%A4%85%E0%A4%97%E0%A4%B2%E0%A4%BE+%E0%A4%95%E0%A4%A6%E0%A4%AE+%E0%A4%94%E0%A4%B0+%E0%A4%89%E0%A4%AA%E0%A4%B2%E0%A4%AC%E0%A5%8D%E0%A4%A7+%E0%A4%B8%E0%A4%B9%E0%A4%BE%E0%A4%AF%E0%A4%A4%E0%A4%BE+%E0%A4%AC%E0%A4%A4%E0%A4%BE%E0%A4%8F%E0%A4%82%E0%A5%A4"
  },
  "service:e-District": {
    "message": "नमस्ते Jan Seva Point, ई-डिस्ट्रिक्ट की जानकारी चाहिए। प्रक्रिया और जरूरी दस्तावेज बताएं।",
    "href": "https://wa.me/918219037234?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87+Jan+Seva+Point%2C+%E0%A4%88-%E0%A4%A1%E0%A4%BF%E0%A4%B8%E0%A5%8D%E0%A4%9F%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%95%E0%A5%8D%E0%A4%9F+%E0%A4%95%E0%A5%80+%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80+%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A5%A4+%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE+%E0%A4%94%E0%A4%B0+%E0%A4%9C%E0%A4%B0%E0%A5%82%E0%A4%B0%E0%A5%80+%E0%A4%A6%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%B5%E0%A5%87%E0%A4%9C+%E0%A4%AC%E0%A4%A4%E0%A4%BE%E0%A4%8F%E0%A4%82%E0%A5%A4"
  },
  "service:Certificates": {
    "message": "नमस्ते Jan Seva Point, प्रमाण पत्र की जानकारी चाहिए। प्रक्रिया और जरूरी दस्तावेज बताएं।",
    "href": "https://wa.me/918219037234?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87+Jan+Seva+Point%2C+%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%AE%E0%A4%BE%E0%A4%A3+%E0%A4%AA%E0%A4%A4%E0%A5%8D%E0%A4%B0+%E0%A4%95%E0%A5%80+%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80+%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A5%A4+%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE+%E0%A4%94%E0%A4%B0+%E0%A4%9C%E0%A4%B0%E0%A5%82%E0%A4%B0%E0%A5%80+%E0%A4%A6%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%B5%E0%A5%87%E0%A4%9C+%E0%A4%AC%E0%A4%A4%E0%A4%BE%E0%A4%8F%E0%A4%82%E0%A5%A4"
  },
  "service:HPSEB Bill": {
    "message": "नमस्ते Jan Seva Point, HPSEB बिल की जानकारी चाहिए। प्रक्रिया और जरूरी दस्तावेज बताएं।",
    "href": "https://wa.me/918219037234?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87+Jan+Seva+Point%2C+HPSEB+%E0%A4%AC%E0%A4%BF%E0%A4%B2+%E0%A4%95%E0%A5%80+%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80+%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A5%A4+%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE+%E0%A4%94%E0%A4%B0+%E0%A4%9C%E0%A4%B0%E0%A5%82%E0%A4%B0%E0%A5%80+%E0%A4%A6%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%B5%E0%A5%87%E0%A4%9C+%E0%A4%AC%E0%A4%A4%E0%A4%BE%E0%A4%8F%E0%A4%82%E0%A5%A4"
  },
  "service:Nakal Jamabandi": {
    "message": "नमस्ते Jan Seva Point, नकल जमाबंदी की जानकारी चाहिए। प्रक्रिया और जरूरी दस्तावेज बताएं।",
    "href": "https://wa.me/918219037234?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87+Jan+Seva+Point%2C+%E0%A4%A8%E0%A4%95%E0%A4%B2+%E0%A4%9C%E0%A4%AE%E0%A4%BE%E0%A4%AC%E0%A4%82%E0%A4%A6%E0%A5%80+%E0%A4%95%E0%A5%80+%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80+%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A5%A4+%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE+%E0%A4%94%E0%A4%B0+%E0%A4%9C%E0%A4%B0%E0%A5%82%E0%A4%B0%E0%A5%80+%E0%A4%A6%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%B5%E0%A5%87%E0%A4%9C+%E0%A4%AC%E0%A4%A4%E0%A4%BE%E0%A4%8F%E0%A4%82%E0%A5%A4"
  },
  "service:Scan & Print": {
    "message": "नमस्ते Jan Seva Point, स्कैन और प्रिंट की जानकारी चाहिए। प्रक्रिया और जरूरी दस्तावेज बताएं।",
    "href": "https://wa.me/918219037234?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87+Jan+Seva+Point%2C+%E0%A4%B8%E0%A5%8D%E0%A4%95%E0%A5%88%E0%A4%A8+%E0%A4%94%E0%A4%B0+%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%82%E0%A4%9F+%E0%A4%95%E0%A5%80+%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80+%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A5%A4+%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE+%E0%A4%94%E0%A4%B0+%E0%A4%9C%E0%A4%B0%E0%A5%82%E0%A4%B0%E0%A5%80+%E0%A4%A6%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%B5%E0%A5%87%E0%A4%9C+%E0%A4%AC%E0%A4%A4%E0%A4%BE%E0%A4%8F%E0%A4%82%E0%A5%A4"
  },
  "service:Form Filling": {
    "message": "नमस्ते Jan Seva Point, फॉर्म भरना की जानकारी चाहिए। प्रक्रिया और जरूरी दस्तावेज बताएं।",
    "href": "https://wa.me/918219037234?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87+Jan+Seva+Point%2C+%E0%A4%AB%E0%A5%89%E0%A4%B0%E0%A5%8D%E0%A4%AE+%E0%A4%AD%E0%A4%B0%E0%A4%A8%E0%A4%BE+%E0%A4%95%E0%A5%80+%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80+%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A5%A4+%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE+%E0%A4%94%E0%A4%B0+%E0%A4%9C%E0%A4%B0%E0%A5%82%E0%A4%B0%E0%A5%80+%E0%A4%A6%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%B5%E0%A5%87%E0%A4%9C+%E0%A4%AC%E0%A4%A4%E0%A4%BE%E0%A4%8F%E0%A4%82%E0%A5%A4"
  },
  "service:Digital": {
    "message": "नमस्ते Jan Seva Point, डिजिटल सेवाएं की जानकारी चाहिए। प्रक्रिया और जरूरी दस्तावेज बताएं।",
    "href": "https://wa.me/918219037234?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87+Jan+Seva+Point%2C+%E0%A4%A1%E0%A4%BF%E0%A4%9C%E0%A4%BF%E0%A4%9F%E0%A4%B2+%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE%E0%A4%8F%E0%A4%82+%E0%A4%95%E0%A5%80+%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80+%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A5%A4+%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE+%E0%A4%94%E0%A4%B0+%E0%A4%9C%E0%A4%B0%E0%A5%82%E0%A4%B0%E0%A5%80+%E0%A4%A6%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%B5%E0%A5%87%E0%A4%9C+%E0%A4%AC%E0%A4%A4%E0%A4%BE%E0%A4%8F%E0%A4%82%E0%A5%A4"
  },
  "faq:What services are available?": {
    "message": "नमस्ते Jan Seva Point, मेरा सवाल है: कौन सी सेवाएं उपलब्ध हैं?",
    "href": "https://wa.me/918219037234?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87+Jan+Seva+Point%2C+%E0%A4%AE%E0%A5%87%E0%A4%B0%E0%A4%BE+%E0%A4%B8%E0%A4%B5%E0%A4%BE%E0%A4%B2+%E0%A4%B9%E0%A5%88%3A+%E0%A4%95%E0%A5%8C%E0%A4%A8+%E0%A4%B8%E0%A5%80+%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE%E0%A4%8F%E0%A4%82+%E0%A4%89%E0%A4%AA%E0%A4%B2%E0%A4%AC%E0%A5%8D%E0%A4%A7+%E0%A4%B9%E0%A5%88%E0%A4%82%3F"
  },
  "faq:What are your opening hours?": {
    "message": "नमस्ते Jan Seva Point, मेरा सवाल है: दुकान का समय क्या है?",
    "href": "https://wa.me/918219037234?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87+Jan+Seva+Point%2C+%E0%A4%AE%E0%A5%87%E0%A4%B0%E0%A4%BE+%E0%A4%B8%E0%A4%B5%E0%A4%BE%E0%A4%B2+%E0%A4%B9%E0%A5%88%3A+%E0%A4%A6%E0%A5%81%E0%A4%95%E0%A4%BE%E0%A4%A8+%E0%A4%95%E0%A4%BE+%E0%A4%B8%E0%A4%AE%E0%A4%AF+%E0%A4%95%E0%A5%8D%E0%A4%AF%E0%A4%BE+%E0%A4%B9%E0%A5%88%3F"
  },
  "faq:How do I reach the shop?": {
    "message": "नमस्ते Jan Seva Point, मेरा सवाल है: दुकान कैसे पहुंचें?",
    "href": "https://wa.me/918219037234?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87+Jan+Seva+Point%2C+%E0%A4%AE%E0%A5%87%E0%A4%B0%E0%A4%BE+%E0%A4%B8%E0%A4%B5%E0%A4%BE%E0%A4%B2+%E0%A4%B9%E0%A5%88%3A+%E0%A4%A6%E0%A5%81%E0%A4%95%E0%A4%BE%E0%A4%A8+%E0%A4%95%E0%A5%88%E0%A4%B8%E0%A5%87+%E0%A4%AA%E0%A4%B9%E0%A5%81%E0%A4%82%E0%A4%9A%E0%A5%87%E0%A4%82%3F"
  },
  "faq:Can I change my Aadhaar mobile number?": {
    "message": "नमस्ते Jan Seva Point, मेरा सवाल है: क्या Aadhaar का मोबाइल नंबर बदल सकता हूं?",
    "href": "https://wa.me/918219037234?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87+Jan+Seva+Point%2C+%E0%A4%AE%E0%A5%87%E0%A4%B0%E0%A4%BE+%E0%A4%B8%E0%A4%B5%E0%A4%BE%E0%A4%B2+%E0%A4%B9%E0%A5%88%3A+%E0%A4%95%E0%A5%8D%E0%A4%AF%E0%A4%BE+Aadhaar+%E0%A4%95%E0%A4%BE+%E0%A4%AE%E0%A5%8B%E0%A4%AC%E0%A4%BE%E0%A4%87%E0%A4%B2+%E0%A4%A8%E0%A4%82%E0%A4%AC%E0%A4%B0+%E0%A4%AC%E0%A4%A6%E0%A4%B2+%E0%A4%B8%E0%A4%95%E0%A4%A4%E0%A4%BE+%E0%A4%B9%E0%A5%82%E0%A4%82%3F"
  },
  "faq:Which documents should I bring?": {
    "message": "नमस्ते Jan Seva Point, मेरा सवाल है: कौन से दस्तावेज लाऊं?",
    "href": "https://wa.me/918219037234?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87+Jan+Seva+Point%2C+%E0%A4%AE%E0%A5%87%E0%A4%B0%E0%A4%BE+%E0%A4%B8%E0%A4%B5%E0%A4%BE%E0%A4%B2+%E0%A4%B9%E0%A5%88%3A+%E0%A4%95%E0%A5%8C%E0%A4%A8+%E0%A4%B8%E0%A5%87+%E0%A4%A6%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%B5%E0%A5%87%E0%A4%9C+%E0%A4%B2%E0%A4%BE%E0%A4%8A%E0%A4%82%3F"
  },
  "pan": {
    "message": "नमस्ते Jan Seva Point, PAN कार्ड के लिए सहायता चाहिए। प्रक्रिया और जरूरी दस्तावेज बताएं।",
    "href": "https://wa.me/918219037234?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87+Jan+Seva+Point%2C+PAN+%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%A1+%E0%A4%95%E0%A5%87+%E0%A4%B2%E0%A4%BF%E0%A4%8F+%E0%A4%B8%E0%A4%B9%E0%A4%BE%E0%A4%AF%E0%A4%A4%E0%A4%BE+%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A5%A4+%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE+%E0%A4%94%E0%A4%B0+%E0%A4%9C%E0%A4%B0%E0%A5%82%E0%A4%B0%E0%A5%80+%E0%A4%A6%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%B5%E0%A5%87%E0%A4%9C+%E0%A4%AC%E0%A4%A4%E0%A4%BE%E0%A4%8F%E0%A4%82%E0%A5%A4"
  },
  "welcome": {
    "message": "Jan Seva Point में आपका स्वागत है। मैं आपकी कैसे सहायता करूं?",
    "href": "https://wa.me/918219037234?text=Jan+Seva+Point+%E0%A4%AE%E0%A5%87%E0%A4%82+%E0%A4%86%E0%A4%AA%E0%A4%95%E0%A4%BE+%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%97%E0%A4%A4+%E0%A4%B9%E0%A5%88%E0%A5%A4+%E0%A4%AE%E0%A5%88%E0%A4%82+%E0%A4%86%E0%A4%AA%E0%A4%95%E0%A5%80+%E0%A4%95%E0%A5%88%E0%A4%B8%E0%A5%87+%E0%A4%B8%E0%A4%B9%E0%A4%BE%E0%A4%AF%E0%A4%A4%E0%A4%BE+%E0%A4%95%E0%A4%B0%E0%A5%82%E0%A4%82%3F"
  }
};
function EnquiryLink({
  linkKey,
  className,
  children
}) {
  const lang = React.useContext(LanguageContext);
  const item = lang === 'hi' ? HI_ENQUIRY_LINKS[linkKey] : ENQUIRY_LINKS[linkKey];
  return /*#__PURE__*/React.createElement("a", {
    className: className,
    href: item.href,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: e => openWhatsApp(e, item.message)
  }, children);
}
function ServiceDetail({
  name,
  onBack
}) {
  const lang = React.useContext(LanguageContext);
  const [choice, setChoice] = useState('Mobile number');
  const opts = ['Mobile number', 'Name correction', 'Address', 'Date of birth', 'Gender', 'Photo / biometrics'];
  const info = {
    'Mobile number': {
      intro: 'Register a new number or replace a number that is no longer working.',
      docs: ['No supporting document or old mobile number is required for a mobile-number update.'],
      steps: ['Visit an authorised Aadhaar Enrolment / Update Centre in person.', 'Ask for a mobile-number update and complete the verification required by the centre.', 'Check the new number carefully and keep the acknowledgement slip.'],
      note: 'A mobile-number update cannot be completed online. Sending this enquiry does not change your Aadhaar.'
    },
    'Name correction': {
      intro: 'Correct your name through an authorised Aadhaar centre.',
      docs: ['Original proof of identity accepted by UIDAI, showing the required name and photo.', 'Check the current UIDAI document list for your case.'],
      steps: ['Check eligible supporting documents.', 'Visit an authorised Aadhaar Enrolment / Update Centre.', 'Review the entered details and retain your acknowledgement.'],
      note: 'Name updates have limits. Special cases need UIDAI exception processing.'
    },
    'Address': {
      intro: 'Update your address online where eligible or at an authorised centre.',
      docs: ['Valid proof of address from the UIDAI list, or eligible Head of Family documentation.'],
      steps: ['Choose the online or centre route based on your eligibility.', 'Provide the applicable address documents.', 'Review and submit; retain the request reference.'],
      note: 'Online services require access to your Aadhaar-registered mobile number.'
    },
    'Date of birth': {
      intro: 'Request a date-of-birth correction at an authorised centre.',
      docs: ['Applicable proof of date of birth from the current UIDAI list.'],
      steps: ['Check documents and eligibility for your correction.', 'Visit an authorised Aadhaar Enrolment / Update Centre.', 'Keep your acknowledgement for tracking.'],
      note: 'Date-of-birth corrections have strict limits and special-case rules. Confirm your case with UIDAI.'
    },
    'Gender': {
      intro: 'Request a gender update at an authorised Aadhaar centre.',
      docs: ['Check UIDAI rules for your case, especially if already updated before.'],
      steps: ['Check the applicable update rules.', 'Visit an authorised Aadhaar Enrolment / Update Centre.', 'Review the request and keep the acknowledgement.'],
      note: 'Gender updates have limits; further changes need exception processing.'
    },
    'Photo / biometrics': {
      intro: 'Update your photograph, fingerprints or iris at an authorised centre.',
      docs: ['Confirm any case-specific requirements with the centre before visiting.'],
      steps: ['Visit an authorised Aadhaar Enrolment / Update Centre.', 'The operator captures your required biometric update.', 'Review and retain your acknowledgement.'],
      note: 'Photo and biometric updates require an in-person centre visit.'
    }
  };
  const i = info[choice];
  if (name !== 'Aadhaar/PAN') return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "service-back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(LocalText, {
    text: "\u2190 Back to Home"
  })), /*#__PURE__*/React.createElement("div", {
    className: "service-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, /*#__PURE__*/React.createElement(LocalText, {
    text: "Service information"
  })), /*#__PURE__*/React.createElement("h1", null, tr(name, lang))), /*#__PURE__*/React.createElement("div", {
    className: "service-card"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement(LocalText, {
    text: "Enquire about this service"
  })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(LocalText, {
    text: "Tell us which service you need. Confirm the required documents and available assistance with Jan Seva Point before visiting."
  })), /*#__PURE__*/React.createElement(EnquiryLink, {
    className: "btn btn-whatsapp",
    linkKey: "service:" + name
  }, /*#__PURE__*/React.createElement(LocalText, {
    text: "Enquire on WhatsApp"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "service-bottom-nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(LocalText, {
    text: "\u2190 Back to Home"
  }))));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "service-back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(LocalText, {
    text: "\u2190 Back to Home"
  })), /*#__PURE__*/React.createElement("div", {
    className: "service-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, /*#__PURE__*/React.createElement(LocalText, {
    text: "Aadhaar / PAN services"
  })), /*#__PURE__*/React.createElement("h1", null, /*#__PURE__*/React.createElement(LocalText, {
    text: "Aadhaar updates, step by step"
  })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(LocalText, {
    text: "Choose what you want to update. Check the process before visiting, then ask Jan Seva Point for guidance."
  }))), /*#__PURE__*/React.createElement("div", {
    className: "service-layout"
  }, /*#__PURE__*/React.createElement("section", {
    className: "service-card"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement(LocalText, {
    text: "What would you like to update?"
  })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(LocalText, {
    text: "Select one option to see the details."
  })), /*#__PURE__*/React.createElement("div", {
    className: "update-grid"
  }, opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: tr(o, lang),
    className: 'update-choice ' + (choice === o ? 'selected' : ''),
    onClick: () => setChoice(o),
    "aria-pressed": choice === o
  }, /*#__PURE__*/React.createElement("span", {
    className: "choice-dot"
  }), tr(o, lang)))), /*#__PURE__*/React.createElement("div", {
    className: "enquiry-box"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(LocalText, {
    text: "PAN card assistance"
  })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(LocalText, {
    text: "Need a new PAN or a correction? Enquire about the applicable process and documents."
  })), /*#__PURE__*/React.createElement(EnquiryLink, {
    className: "btn btn-ghost btn-small",
    linkKey: "pan"
  }, /*#__PURE__*/React.createElement(LocalText, {
    text: "Ask about PAN"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "service-note"
  }, /*#__PURE__*/React.createElement(LocalText, {
    text: "Aadhaar changes are processed by UIDAI through authorised channels. Confirm whether this shop provides guidance or authorised update services before visiting."
  })), /*#__PURE__*/React.createElement("p", {
    className: "service-source"
  }, /*#__PURE__*/React.createElement(LocalText, {
    text: "Source:"
  }), " ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.uidai.gov.in/en/297-faqs/enrolment-update",
    target: "_blank",
    rel: "noopener"
  }, /*#__PURE__*/React.createElement(LocalText, {
    text: "UIDAI update guidance \u2197"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "service-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, /*#__PURE__*/React.createElement(LocalText, {
    text: "Selected:"
  }), " ", tr(choice, lang)), /*#__PURE__*/React.createElement("h2", null, tr(choice === 'Mobile number' ? 'Change your Aadhaar mobile number' : choice, lang)), /*#__PURE__*/React.createElement("p", null, tr(i.intro, lang)), /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(LocalText, {
    text: "What you need"
  })), /*#__PURE__*/React.createElement("ul", null, i.docs.map(d => /*#__PURE__*/React.createElement("li", {
    key: tr(d, lang)
  }, tr(d, lang)))), /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(LocalText, {
    text: "The process"
  })), i.steps.map((st, j) => /*#__PURE__*/React.createElement("div", {
    className: "service-step",
    key: tr(st, lang)
  }, /*#__PURE__*/React.createElement("span", {
    className: "step-num"
  }, j + 1), /*#__PURE__*/React.createElement("p", null, tr(st, lang)))), /*#__PURE__*/React.createElement("div", {
    className: "service-note"
  }, tr(i.note, lang)), /*#__PURE__*/React.createElement("div", {
    className: "enquiry-box"
  }, /*#__PURE__*/React.createElement("p", {
    className: "enquiry-summary"
  }, /*#__PURE__*/React.createElement("b", null, /*#__PURE__*/React.createElement(LocalText, {
    text: "Your enquiry:"
  })), lang === "hi" ? " आधार - " : " Aadhaar - ", tr(choice, lang)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(LocalText, {
    text: "Ask for guidance and confirm the next step."
  })), /*#__PURE__*/React.createElement(EnquiryLink, {
    className: "btn btn-whatsapp",
    linkKey: "aadhaar:" + choice
  }, /*#__PURE__*/React.createElement(LocalText, {
    text: "Enquire on WhatsApp"
  })), /*#__PURE__*/React.createElement("p", {
    className: "service-privacy"
  }, /*#__PURE__*/React.createElement(LocalText, {
    text: "WhatsApp opens with your selected service. Review the message before sending. Do not send your Aadhaar number, OTP or document photos."
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "service-bottom-nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(LocalText, {
    text: "\u2190 Back to Home"
  }))));
}
function FaqChat() {
  const lang = React.useContext(LanguageContext);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(3);
  const questions = [['What services are available?', 'The site lists e-District applications, certificates, HPSEB bill-payment assistance, land-record copies, scanning and printing, Aadhaar/PAN guidance, form filling and digital services. Ask the shop to confirm assistance for your request.'], ['What are your opening hours?', 'The listed hours are Monday to Saturday, 9:30 AM to 7:30 PM. Call +91 82190 37234 to confirm before visiting on a holiday.'], ['How do I reach the shop?', 'Garden Colony, Nehria Road, opposite HPPWD Rest House, Tehsil Amb, Himachal Pradesh 177203. Use the Map / Directions link below. Google Maps uses your location when permitted, or asks for a starting point.'], ['Can I change my Aadhaar mobile number?', 'A mobile-number update requires a visit to an authorised Aadhaar Enrolment / Update Centre. UIDAI says no old mobile number or supporting document is required. It cannot be done online. Ask Jan Seva Point for guidance and confirm available assistance.'], ['Which documents should I bring?', 'Requirements depend on the service and your case. For Aadhaar corrections, check the current UIDAI supporting-document list. Ask the shop about your selected service before visiting. Do not send Aadhaar numbers, OTPs or document photos in this chat.']];
  return /*#__PURE__*/React.createElement("div", {
    className: "ask-area"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "ask-widget",
    "aria-label": "Jan Seva Point common questions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ask-launch",
    onClick: () => setOpen(!open),
    "aria-expanded": open
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(LocalText, {
    text: "Ask Jan Seva Point"
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, open ? '−' : '+')), open && /*#__PURE__*/React.createElement("div", {
    className: "ask-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(LocalText, {
    text: "Choose a common question for a quick written answer."
  })), /*#__PURE__*/React.createElement("div", {
    className: "ask-questions"
  }, questions.map(([q], j) => /*#__PURE__*/React.createElement("button", {
    key: tr(q, lang),
    onClick: () => setSelected(j),
    className: 'ask-question ' + (selected === j ? 'chosen' : ''),
    "aria-pressed": selected === j
  }, tr(q, lang)))), /*#__PURE__*/React.createElement("div", {
    className: "ask-answer",
    "aria-live": "polite"
  }, /*#__PURE__*/React.createElement("p", null, tr(questions[selected][1], lang))), /*#__PURE__*/React.createElement(EnquiryLink, {
    className: "btn btn-whatsapp",
    linkKey: "faq:" + questions[selected][0]
  }, /*#__PURE__*/React.createElement(LocalText, {
    text: "Continue on WhatsApp"
  })), /*#__PURE__*/React.createElement("p", {
    className: "service-privacy"
  }, /*#__PURE__*/React.createElement(LocalText, {
    text: "Opens a chat with the shop. Review your enquiry before sending."
  })))));
}
function ActionDock({
  onEnquiry
}) {
  const lang = React.useContext(LanguageContext);
  const [inFlow, setInFlow] = useState(false);
  useEffect(() => {
    const visible = new Map();
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => visible.set(e.target, e.isIntersecting));
      setInFlow(Array.from(visible.values()).some(Boolean));
    }, {
      rootMargin: '100px 0px 0px 0px'
    });
    document.querySelectorAll('.ask-area,footer').forEach(e => obs.observe(e));
    return () => obs.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: 'action-dock ' + (inFlow ? 'in-flow' : ''),
    role: "navigation",
    "aria-label": "Quick contact actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "dock-call",
    href: "tel:+918219037234",
    "aria-label": "Call Jan Seva Point"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 3H4a1 1 0 00-1 1c0 9.4 7.6 17 17 17a1 1 0 001-1v-3l-5-2-2 2a15 15 0 01-7-7l2-2z"
  })), /*#__PURE__*/React.createElement(LocalText, {
    text: "Call"
  })), /*#__PURE__*/React.createElement("a", {
    className: "dock-whatsapp",
    href: lang === 'hi' ? HI_ENQUIRY_LINKS.welcome.href : "https://wa.me/918219037234?text=Welcome%20to%20Jan%20Seva%20Point%2C%20how%20may%20I%20assist%20you%3F",
    target: "_blank",
    rel: "noopener",
    onClick: e => openWhatsApp(e, lang === 'hi' ? HI_ENQUIRY_LINKS.welcome.message : 'Welcome to Jan Seva Point, how may I assist you?')
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 11.5a9 9 0 01-13.4 7.8L3 21l1.7-4.6A9 9 0 1121 11.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 7c0 5 4 9 9 9l1-3-3-1-1 2c-2-1-3-2-4-4l2-1-1-3z"
  })), "WhatsApp"), /*#__PURE__*/React.createElement("a", {
    className: "dock-map",
    href: "https://www.google.com/maps/dir/?api=1&destination=CSC+LOK+MITRA+KENDAR+AMB&destination_place_id=ChIJq4u5T9YjGzkRj682LBpUqFY&travelmode=driving&dir_action=navigate",
    target: "_blank",
    rel: "noopener"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1116 0z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2.7"
  })), /*#__PURE__*/React.createElement(LocalText, {
    text: "Map"
  })), /*#__PURE__*/React.createElement("button", {
    className: "dock-enquiry",
    onClick: onEnquiry
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4h16v13H9l-5 4zM8 8h8M8 12h6"
  })), /*#__PURE__*/React.createElement(LocalText, {
    text: "Enquiry"
  })));
}
function FaqItem({
  item,
  lang
}) {
  const [open, setOpen] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: 'faq-item' + (open ? ' open' : '')
  }, /*#__PURE__*/React.createElement("button", {
    className: "faq-q",
    type: "button",
    onClick: () => setOpen(!open)
  }, item.q[lang]), open && /*#__PURE__*/React.createElement("div", {
    className: "faq-a"
  }, item.a[lang]));
}
function ContactForm({
  t,
  lang,
  services
}) {
  const countries = [{
    code: '+91',
    iso: 'IN',
    name: 'India',
    len: 10
  }, {
    code: '+977',
    iso: 'NP',
    name: 'Nepal',
    len: 10
  }, {
    code: '+1',
    iso: 'US',
    name: 'USA/Canada',
    len: 10
  }, {
    code: '+44',
    iso: 'GB',
    name: 'UK',
    len: 10
  }, {
    code: '+971',
    iso: 'AE',
    name: 'UAE',
    len: 9
  }, {
    code: '+61',
    iso: 'AU',
    name: 'Australia',
    len: 9
  }, {
    code: '+65',
    iso: 'SG',
    name: 'Singapore',
    len: 8
  }];
  const [name, setName] = useState('');
  const [cc, setCc] = useState('+91');
  const [phone, setPhone] = useState('');
  const [svc, setSvc] = useState('');
  const [remark, setRemark] = useState('');
  const [err, setErr] = useState('');
  const selected = countries.find(c => c.code === cc) || countries[0];
  const maxLen = selected.len;
  const onPhone = v => {
    const digits = v.replace(/\D/g, '').slice(0, maxLen);
    setPhone(digits);
    if (digits.length === 0) setErr('');else if (digits.length < maxLen) setErr(lang === 'en' ? 'Please enter a valid number' : 'कृपया वैध नंबर दर्ज करें');else setErr('');
  };
  const onCc = code => {
    setCc(code);
    const c = countries.find(x => x.code === code) || countries[0];
    setPhone(p => p.slice(0, c.len));
    setErr('');
  };
  const submit = e => {
    e.preventDefault();
    if (phone.length !== maxLen) {
      setErr(lang === 'en' ? 'Please enter a valid number' : 'कृपया वैध नंबर दर्ज करें');
      return;
    }
    const welcome = lang === 'hi' ? 'Jan Seva Point में आपका स्वागत है। मैं आपकी कैसे सहायता करूं?' : 'Welcome to Jan Seva Point, how may I assist you?';
    const fullPhone = cc + phone;
    const label = lang === 'en' ? {
      n: 'Name',
      p: 'Phone',
      s: 'Service',
      r: 'Remark'
    } : {
      n: 'नाम',
      p: 'फोन',
      s: 'सेवा',
      r: 'टिप्पणी'
    };
    const message = `${welcome}\n\n${label.n}: ${name}\n${label.p}: ${fullPhone}\n${label.s}: ${svc}\n${label.r}: ${remark || '-'}`;
    if (!openWhatsApp(e, message)) {
      window.location.href = `https://wa.me/918219037234?text=${encodeURIComponent(message)}`;
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "section-title"
  }, t('contact_title')), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, t('contact_sub')), /*#__PURE__*/React.createElement("div", {
    className: "contact-wrap"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, t('label_name')), /*#__PURE__*/React.createElement("input", {
    value: name,
    onChange: e => setName(e.target.value),
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, t('label_phone')), /*#__PURE__*/React.createElement("div", {
    className: "phone-row"
  }, /*#__PURE__*/React.createElement("select", {
    className: "cc-select",
    value: cc,
    onChange: e => onCc(e.target.value),
    "aria-label": lang === 'hi' ? 'देश कोड' : 'Country code'
  }, countries.map(c => /*#__PURE__*/React.createElement("option", {
    key: c.code,
    value: c.code
  }, c.code, " (", c.iso, ")"))), /*#__PURE__*/React.createElement("input", {
    value: phone,
    onChange: e => onPhone(e.target.value),
    required: true,
    type: "tel",
    inputMode: "numeric",
    pattern: '\\d{' + maxLen + '}',
    maxLength: maxLen,
    placeholder: lang === 'en' ? `${maxLen} digit number` : `${maxLen} अंकों का नंबर`
  })), err ? /*#__PURE__*/React.createElement("div", {
    className: "field-err"
  }, err) : /*#__PURE__*/React.createElement("div", {
    className: "field-hint"
  }, lang === 'en' ? `${selected.name}: ${maxLen} digits` : `${tr(selected.name, lang)}: ${maxLen} अंक`)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, t('label_service')), /*#__PURE__*/React.createElement("select", {
    value: svc,
    onChange: e => setSvc(e.target.value),
    required: true
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, lang === 'en' ? 'Select service' : 'सेवा चुनें'), services.map((s, i) => /*#__PURE__*/React.createElement("option", {
    key: i,
    value: s[lang][0]
  }, s[lang][0])))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, t('label_remark')), /*#__PURE__*/React.createElement("textarea", {
    value: remark,
    onChange: e => setRemark(e.target.value)
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, t('btn_send'))), /*#__PURE__*/React.createElement("div", {
    className: "info-card"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    className: "inline-contact-icon",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 3H4a1 1 0 00-1 1c0 9.4 7.6 17 17 17a1 1 0 001-1v-3l-5-2-2 2a15 15 0 01-7-7l2-2z"
  })), " ", /*#__PURE__*/React.createElement("a", {
    href: "tel:+918219037234"
  }, "+91 82190 37234")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    className: "inline-contact-icon",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 11.5a9 9 0 01-13.4 7.8L3 21l1.7-4.6A9 9 0 1121 11.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 7c0 5 4 9 9 9l1-3-3-1-1 2c-2-1-3-2-4-4l2-1-1-3z"
  })), " ", /*#__PURE__*/React.createElement("a", {
    href: lang === 'hi' ? HI_ENQUIRY_LINKS.welcome.href : "https://wa.me/918219037234?text=" + encodeURIComponent('Welcome to Jan Seva Point, how may I assist you?'),
    target: "_blank",
    rel: "noopener",
    onClick: e => openWhatsApp(e, lang === 'hi' ? HI_ENQUIRY_LINKS.welcome.message : 'Welcome to Jan Seva Point, how may I assist you?'),
    style: {
      color: '#25D366'
    }
  }, "WhatsApp")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    className: "inline-contact-icon",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1116 0z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2.7"
  })), " ", t('address_val')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    className: "inline-contact-icon",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 6v6l4 2"
  })), " ", t('hours_val')))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));