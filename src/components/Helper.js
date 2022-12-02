import { useState } from "react";
let today = new Date(),
  date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
useState.state = {
  currentTime: date,
};
export const websiteData = [
  {
    websiteName: " جامعة 8 ماي 1945 قالمة",
  },
];

const Posts = [
  {
    title:
      "إعلان الى الطلبة المسجلين بجامعة قالمة القاطنين بالجنوب الكبير و منطقتي الوسط و الغرب",
    image: "https://univ-guelma.ga/ressources/images/students.jpg",
    content:
      "   في إطار المجهودات المبذولة من قبل وزارة التعليم العالي والبحث العلمي لإتمام الموسمالجامعي 2020/2019 ومن أجل التكفل الأمثل بنقل طلبة الجنوب الكبير ومنطقتي الوسط والغرب»؛نرجو من طلبة هاته المناطق المسجلين على مستوى جامعة 8 ماي 1945 قالمة ملء المعلومات علىمنصة جمع البيانات لتنظيم نقل الطلاب إلى مؤسسات التسجيل الخاصة بهم وهذا قبل يوم الثلاثاء.",
    tag: "إعلا ن",
    time: `${useState.state.currentTime}`,
  },
  {
    title: "منصة إيداع أطروحة نهاية الدراسة 2020",
    image: "https://univ-guelma.ga/ressources/images/info.jpg",
    content: "XXXXXX",
    tag: "إعلا ن",
    time: `${useState.state.currentTime}`,
  },
  {
    title:
      "إعلان للطلبة خاص بالعطلة الأكاديمية الاستثنائية للسنة الجامعية 2019 - 2020",
    image: "https://univ-guelma.ga/ressources/images/info.jpg",
    content: "BBBBBBBBBB",
    tag: "إعلا ن",
    time: `${useState.state.currentTime}`,
  },
  {
    title: "برنامج المنح الدراسية لمنطقة الشرق الأوسط وشمال إفريقيا",
    image: "https://univ-guelma.ga/ressources/images/bourse-def.jpg",
    content: " برنامج المنح الدراسية لمنطقة الشرق الأوسط وشمال إفريقيا",
    tag: "المنح والتعاون",
    time: `${useState.state.currentTime}`,
  },
  {
    title: 'منحة Erasmus + "MOBILE UP" للتنقل لصالح: الأكاديميين والإداريين',
    image: "https://univ-guelma.ga/ressources/images/erasmus+mobileup.jpg",
    content: 'منحة Erasmus + "MOBILE UP" للتنقل لصالح: الأكاديميين والإداريين',
    tag: "المنح والتعاون",
    time: `${useState.state.currentTime}`,
  },
  {
    title:
      'دورة PPMEEP عبر الإنترنت تنظيم الدورة عبر الإنترنت بعنوان: "إعداد المقترحات وإدارة المشاريع التعليمية الأوروبية في إطار إيراسموس"',
    image: "https://univ-guelma.ga/ressources/images/erasmus+mobileup.jpg",
    content:
      'دورة PPMEEP عبر الإنترنت تنظيم الدورة عبر الإنترنت بعنوان: "إعداد المقترحات وإدارة المشاريع التعليمية الأوروبية في إطار إيراسموس"',
    tag: "المنح والتعاون",
    time: `${useState.state.currentTime}`,
  },
  {
    title: "المؤتمر الثالث لعلوم الحاسب والرياضيات التطبيقية IAM'20",
    image: "https://univ-guelma.ga/ressources/images/bourse-def.jpg",
    content: "المؤتمر الثالث لعلوم الحاسب والرياضيات التطبيقية IAM'20",
    tag: "الندوات والأحداث",
    time: `${useState.state.currentTime}`,
  },
  {
    title: 'المنتدى الدولي "المدن المستدامة والتنمية المحلية"',
    image: "https://univ-guelma.ga/ressources/images/Attention-please.jpg",
    content: 'المنتدى الدولي "المدن المستدامة والتنمية المحلية"',
    tag: "الندوات والأحداث",
    time: `${useState.state.currentTime}`,
  },
  {
    title:
      "مؤتمر الاتجاهات المبتكرة في علوم الكمبيوتر (CITY 2019) 21-20 نوفمبر",
    image: "https://univ-guelma.ga/ressources/images/20108912.jpg",
    content:
      "مؤتمر الاتجاهات المبتكرة في علوم الكمبيوتر (CITY 2019) 21-20 نوفمبر",
    tag: "الندوات والأحداث",
    time: `${useState.state.currentTime}`,
  },
];
export default Posts;
