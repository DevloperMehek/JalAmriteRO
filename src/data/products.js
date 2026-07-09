// Product catalog for Jal Amrit RO website
// Images use design_guidelines media + uploaded reference posters + curated stock.
import RentalRo from '../MyImg/RentalRO.jpg'
import ServiceAt99 from '../MyImg/ServiceAt99.jpg'
import ROStart from '../MyImg/ROStart.jpg'
import JalAmritAssebled4999 from '../MyImg/JalAmritAssembled4999.png'
import CopperRO from '../MyImg/CopperRO.png'
import ZinkRO from '../MyImg/ZinkRO.png'
import MineralRO from '../MyImg/MineralRO.png'
import Commercial25LPh from '../MyImg/Commercial25LPh.jpeg'
import Commercial50LPh from '../MyImg/Commercial50LPh.jpeg'


export const PRODUCTS = {
  domestic_branded: [
  {
    id: "kent-grand",
    name: "KENT Sapphire IoT RO Water Purifier",
    brand: "Kent",
    price: 21999,
    mrp: 28000,
    capacity: "8 L Storage · 20 L/hr",
    tech: "RO + UF + UV + Alkaline + Copper + TDS ",
    image:
      "https://www.kent.co.in/cdn/shop/files/kent-sapphire-iot-1.webp?v=1779364584&width=1100",
    tags: ["Best Seller"],
  },
  {
    id: "aquaguard-marvel",
    name: "Aquaguard Sure Delight",
    brand: "Aquaguard",
    price: 15999,
    mrp: 25000,
    capacity: "8 L · 15 L/hr",
    tech: "RO + UV + UF + MC",
    image:
      "https://www.eurekaforbes.com/cms/assets/prod/PDP_Edit_db167b98ad.jpg",
    tags: ["Premium"],
  },
  // {
  //   id: "livpure-glo",
  //   name: "Livpure Glo Star",
  //   brand: "Livpure",
  //   price: 12999,
  //   mrp: 15990,
  //   capacity: "7 L · 12 L/hr",
  //   tech: "RO + UV + Mineraliser",
  //   image:
  //     "https://images.unsplash.com/photo-1774716925788-5c4fc543d688?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzB8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3IlMjBicmlnaHR8ZW58MHx8fHwxNzc4MzI4OTMxfDA&ixlib=rb-4.1.0&q=85",
  //   tags: [],
  // },
  // {
  //   id: "pureit-eco",
  //   name: "Pureit Eco Mineral RO",
  //   brand: "HUL Pureit",
  //   price: 11499,
  //   mrp: 13990,
  //   capacity: "7 L · 12 L/hr",
  //   tech: "RO + MF + Copper",
  //   image:
  //     "https://customer-assets.emergentagent.com/job_a35ffeab-4442-4d72-9740-0162a565569a/artifacts/6k8z5orv_image.png",
  //   tags: ["Value"],
  // },
  {
    id: "innovica-blue",
    name: "Aqua Innovica Blue",
    brand: "Aqua Innovica",
    price: 16999,
    mrp: 16999,
    capacity: "8 L · 15 L/hr",
    tech: "RO + UV + Copper + Alkaline",
    image:
      "https://aquaplusro.in/assets/product/Aqua_Innovica_Metalic.jpg",
    tags: ["New"],
  },
],

domestic_assembled: [
  {
    id: "ja-classic",
    name: "Jal Amrit Classic 7-Stage",
    brand: "Jal Amrit",
    price: 4999,
    mrp: 7500,
    capacity: "9 L · 15 L/hr",
    tech:
      "Sediment + Carbon + RO + UV + UF + TDS + Post-Carbon",
    image:
      JalAmritAssebled4999,
    tags: ["Starts at ₹4,999"],
  },
  {
    id: "ja-copper",
    name: "Jal Amrit Copper Alkaline",
    brand: "Jal Amrit",
    price: 6499,
    mrp: 9000,
    capacity: "10 L · 15 L/hr",
    tech: "RO + UV + Copper + Alkaline + TDS",
    image:
      CopperRO,
    tags: ["Health+"],
  },
  {
    id: "ja-mineral",
    name: "Jal Amrit Mineral Pro",
    brand: "Jal Amrit",
    price: 5499,
    mrp: 8000,
    capacity: "9 L · 15 L/hr",
    tech: "RO + UV + UF + Mineral",
    image: MineralRO,
    tags: [],
  },
  {
  id: "ja-zinc",
  name: "Jal Amrit Zinc Active",
  brand: "Jal Amrit",
  price: 7499,
  mrp: 10500,
  capacity: "12 L · 18 L/hr",
  tech: "RO + UV + Zinc + Copper + Alkaline",
  image: ZinkRO,
  tags: ["Premium DIY"],
  },
],


commercial_branded: [
  {
    id: "kent-elegant-25",
    name: "KENT Elite Star Commercial RO Water Purifier     ",
    brand: "Kent",
    price: 45600,
    mrp: 460500,
    capacity: "50 L/hr · Purified Water",
    tech: "RO + UV + UF + TDS Control",
    image: "https://www.kent.co.in/cdn/shop/files/kent-elite-star-1_a8359c20-1444-464d-bd40-4ee389cba4df.webp?v=1782812710&width=1100",
    tags: ["Office"],
  },
  // {
  //   id: "aquaguard-gold",
  //   name: "Aquaguard Reviva 50 LPH",
  //   brand: "Aquaguard",
  //   price: 52000,
  //   mrp: 60000,
  //   capacity: "50 L/hr",
  //   tech: "RO + UV + UF — Restaurants",
  //   image: "https://customer-assets.emergentagent.com/job_a35ffeab-4442-4d72-9740-0162a565569a/artifacts/bepa0nnq_image.png",
  //   tags: ["Hotel/Café"],
  // },
  // {
  //   id: "ionix-100",
  //   name: "Ionix Aqua 100 LPH",
  //   brand: "Ionix",
  //   price: 78000,
  //   mrp: 90000,
  //   capacity: "100 L/hr",
  //   tech: "Industrial RO Plant",
  //   image: "https://static.prod-images.emergentagent.com/jobs/a35ffeab-4442-4d72-9740-0162a565569a/images/2c4877291f35020a180553fdbfa0f3383fe19e5b3bacd7e7abcec72b7aec0808.png",
  //   tags: [],
  // },
],

commercial_assembled: [
  {
    id: "ja-com-50",
    name: "Jal Amrit Commercial 25 LPH",
    brand: "Jal Amrit",
    price: 12999,
    mrp: 16999,
    capacity: "20 L/hr ",
    tech: "Multi-stage Assembled — Shops, Offices",
    image: Commercial25LPh,
    tags: ["Best Value"],
  },
  {
    id: "ja-com-100",
    name: "Jal Amrit Commercial 50 LPH",
    brand: "Jal Amrit",
    price: 24999,
    mrp: 32999,
    capacity: "50 L/hr · Industrial Frame",
    tech: "Heavy duty — Hotels, Hostels, Factories",
    image: Commercial50LPh,
    tags: ["High Capacity"],
  },
  // {
  //   id: "ja-com-250",
  //   name: "Jal Amrit Industrial 250 LPH",
  //   brand: "Jal Amrit",
  //   price: 78000,
  //   mrp: 95000,
  //   capacity: "250 L/hr · Plant",
  //   tech: "Industrial RO with TDS + Dosing",
  //   image: "https://customer-assets.emergentagent.com/job_a35ffeab-4442-4d72-9740-0162a565569a/artifacts/cnvfuet0_image.png",
  //   tags: ["Industrial"],
  // },
],
};

export const SERVICES = [
  {
    id: "water-testing",
    icon: "TestTube",
    title_en: "Water Testing",
    title_hi: "वॉटर टेस्टिंग",
    desc_en: "Free TDS, hardness & purity check at your doorstep.",
    desc_hi: "TDS, hardness और शुद्धता की निःशुल्क जाँच।",
    price: "Free",
    badge: "Free",
  },
  {
    id: "installation",
    icon: "Hammer",
    title_en: "New Installation",
    title_hi: "नई इंस्टॉलेशन",
    desc_en: "Same-week installation by certified plumbers.",
    desc_hi: "सर्टिफाइड टीम द्वारा उसी हफ़्ते इंस्टॉलेशन।",
    price: "Free with purchase",
    badge: null,
  },
  {
    id: "ro-service",
    icon: "Wrench",
    title_en: "RO Service & Cleaning",
    title_hi: "RO सर्विस और क्लीनिंग",
    desc_en: "Complete checkup, deep cleaning, performance tuning. All brands.",
    desc_hi: "पूरा चेकअप, डीप क्लीनिंग, परफॉर्मेंस ट्यूनिंग। सभी ब्रांड्स।",
    price: "₹99",
    badge: "Limited Offer",
  },
  {
    id: "installation-only",
    icon: "Wrench",
    title_en: "RO Installation Only",
    title_hi: "केवल RO इंस्टॉलेशन",
    desc_en: "Professional RO installation for purifiers purchased from any brand or seller. Fast, safe, and expert installation at your doorstep.",
    desc_hi: "किसी भी ब्रांड या विक्रेता से खरीदे गए RO के लिए प्रोफेशनल इंस्टॉलेशन। सुरक्षित और विशेषज्ञ इंस्टॉलेशन आपके घर पर।",
    price: "₹299",
    badge: "Popular",
  },
  {
    id: "amc",
    icon: "ShieldCheck",
    title_en: "Annual AMC Plan",
    title_hi: "सालाना AMC प्लान",
    desc_en: "1-year coverage: 4 services + free filter changes (terms apply).",
    desc_hi: "1 साल कवरेज: 4 सर्विस + फ्री फ़िल्टर चेंज (शर्तें लागू)।",
    price: "₹2,999/yr",
    badge: "Best Value",
  },
  // {
  //   id: "filter-change",
  //   icon: "Filter",
  //   title_en: "Filter Change",
  //   title_hi: "फ़िल्टर बदलना",
  //   desc_en: "Genuine filters & membranes for every RO. Free home installation.",
  //   desc_hi: "हर RO के लिए ओरिजिनल फ़िल्टर और मेम्ब्रेन। फ्री होम इंस्टॉलेशन।",
  //   price: "From ₹350",
  //   badge: null,
  // },
  {
    id: "ro-repair",
    icon: "Settings",
    title_en: "RO Repair",
    title_hi: "RO रिपेयर",
    desc_en: "Same-day repair across Bhopal. 90-day service warranty.",
    desc_hi: "भोपाल भर में सेम-डे रिपेयर। 90 दिन की वारंटी।",
    price: "Starts From ₹299",
    badge: "Fast",
  },
  
  
  
];

export const OFFERS = [
  {
    id: "service-99",
    title_en: "RO Service @ ₹99 only",
    title_hi: "RO सर्विस सिर्फ ₹99 में",
    sub_en: "All brands • Limited time summer special",
    sub_hi: "सभी ब्रांड्स • गर्मी का स्पेशल ऑफर",
    cta: "Book Now",
    poster:
      ServiceAt99,
    color: "from-orange-500 via-orange-600 to-red-600",
  },
  {
    id: "rental-299",
    title_en: "Rental RO from ₹299/month",
    title_hi: "रेंटल RO ₹299/महीना से",
    sub_en: "Free installation • Regular service included",
    sub_hi: "फ्री इंस्टॉलेशन • रेगुलर सर्विस शामिल",
    cta: "Rent Now",
    poster:
      RentalRo,
    color: "from-sky-500 via-blue-600 to-indigo-700",
  },
  {
    id: "ro-4999",
    title_en: "RO Purifiers starting ₹4,999",
    title_hi: "RO प्योरीफायर सिर्फ ₹4,999 से",
    sub_en: "Jal Amrit Assembled • 1-year warranty",
    sub_hi: "जल अमृत असेंबल्ड • 1 साल वारंटी",
    cta: "Shop Now",
    poster:
      ROStart,
    color: "from-cyan-500 via-teal-600 to-emerald-700",
  },
  // {
  //   id: "festive",
  //   title_en: "Festive Bonanza — Up to 30% Off",
  //   title_hi: "त्योहारी ऑफर — 30% तक छूट",
  //   sub_en: "On Kent, Aquaguard & Jal Amrit ROs",
  //   sub_hi: "Kent, Aquaguard और जल अमृत ROs पर",
  //   cta: "Grab Deal",
  //   poster:
  //     "https://customer-assets.emergentagent.com/job_a35ffeab-4442-4d72-9740-0162a565569a/artifacts/6k8z5orv_image.png",
  //   color: "from-violet-600 via-fuchsia-600 to-pink-600",
  // },
];



