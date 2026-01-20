
import React from 'react';
import { BookOpen, Star, Shield, Users, Heart, Book, CloudMoon, Waves } from 'lucide-react';
import { Course, Objective, WhyChooseItem } from './types';

export const CONTACT_PHONE = "+923022044512";
export const CONTACT_EMAIL = "abdullahfarooqi562@gmail.com";
export const WHATSAPP_BASE_URL = "https://wa.me/";

export const COURSES: Course[] = [
  {
    id: 'noorani-qaida',
    titleEn: 'Noorani Qaida',
    titleUr: 'نورانی قاعدہ',
    descriptionEn: 'The foundational step to learning Quran with correct pronunciation.',
    descriptionUr: 'درست مخارج اور تجوید کے ساتھ قرآن سیکھنے کا پہلا قدم۔',
    icon: 'Book'
  },
  {
    id: 'nazira-quran',
    titleEn: 'Nazira Quran Karim',
    titleUr: 'ناظرہ قرآن کریم',
    descriptionEn: 'Fluent recitation of the Holy Quran with Tajweed rules.',
    descriptionUr: 'تجوید کے قواعد کے ساتھ قرآن کریم کی رواں تلاوت۔',
    icon: 'BookOpen'
  },
  {
    id: 'islamic-beliefs',
    titleEn: 'Basic Islamic Beliefs',
    titleUr: 'بنیادی اسلامی عقائد',
    descriptionEn: 'Covers Tawheed, Prophethood, and the Hereafter.',
    descriptionUr: 'توحید، رسالت اور آخرت کے بنیادی اسلامی عقائد کی تعلیم۔',
    icon: 'Star'
  },
  {
    id: 'purity-prayer',
    titleEn: 'Purity and Prayer',
    titleUr: 'مسائل طہارت و نماز',
    descriptionEn: 'Detailed guidance on Wudu, Ghusl, and various types of prayers.',
    descriptionUr: 'وضو، غسل اور نماز کے مختلف مسائل کی تفصیلی معلومات۔',
    icon: 'Waves'
  },
  {
    id: 'masnoon-duas',
    titleEn: 'Masnoon Duas',
    titleUr: 'مسنون دعائیں',
    descriptionEn: 'Learning daily supplications and Islamic ethics.',
    descriptionUr: 'روزمرہ کی مسنون دعائیں اور اسلامی اخلاقیات کی تعلیم۔',
    icon: 'CloudMoon'
  }
];

export const OBJECTIVES: Objective[] = [
  { id: '1', textEn: 'Correct Quranic Recitation with Tajweed', textUr: 'تجوید کے ساتھ درست قرآن خوانی' },
  { id: '2', textEn: 'Strong Foundation in Islamic Beliefs', textUr: 'اسلامی عقائد کی پختگی' },
  { id: '3', textEn: 'Practical Guidance on Daily Worship', textUr: 'روزمرہ کی عبادات کی عملی رہنمائی' },
  { id: '4', textEn: 'Memorization of Daily Supplications', textUr: 'روزمرہ کی مسنون دعاؤں کا حفظ' },
  { id: '5', textEn: 'Character Building according to Sunnah', textUr: 'سنت کے مطابق کردار سازی' }
];

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    id: '1',
    titleEn: 'Certified Teachers',
    titleUr: 'مستند اساتذہ',
    descriptionEn: 'Experienced and certified instructors for both males and females.',
    descriptionUr: 'مردوں اور خواتین کے لیے تجربہ کار اور مستند اساتذہ۔'
  },
  {
    id: '2',
    titleEn: 'Flexible Timings',
    titleUr: 'لچکدار اوقات',
    descriptionEn: 'Classes scheduled according to your convenience.',
    descriptionUr: 'آپ کی سہولت کے مطابق کلاسوں کے اوقات۔'
  },
  {
    id: '3',
    titleEn: 'One-on-One Sessions',
    titleUr: 'انفرادی توجہ',
    descriptionEn: 'Personalized focus on every student for better learning.',
    descriptionUr: 'بہتر سیکھنے کے لیے ہر طالب علم پر انفرادی توجہ۔'
  },
  {
    id: '4',
    titleEn: 'Affordable & Accessible',
    titleUr: 'کم قیمت اور آسان رسائی',
    descriptionEn: 'Quality religious education for everyone, everywhere.',
    descriptionUr: 'سب کے لیے، ہر جگہ معیاری دینی تعلیم۔'
  }
];
