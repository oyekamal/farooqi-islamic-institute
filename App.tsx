
import React, { useState } from 'react';
// Added BookOpen and Star to the imports from lucide-react
import { MessageCircle, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Menu, X, ChevronRight, BookOpen, Star } from 'lucide-react';
import { COURSES, OBJECTIVES, WHY_CHOOSE_US, CONTACT_PHONE, CONTACT_EMAIL, WHATSAPP_BASE_URL } from './constants';
import { IconWrapper } from './components/IconWrapper';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getWhatsAppLink = (courseName: string = "") => {
    const text = encodeURIComponent(`Assalam-o-Alaikum, I am interested in registering for ${courseName ? courseName : 'a course'} at Farooqi Online Islamic Institute. Please guide me further.`);
    return `${WHATSAPP_BASE_URL}${CONTACT_PHONE.replace('+', '')}?text=${text}`;
  };

  const navItems = [
    { nameEn: 'Home', nameUr: 'ہوم', href: '#' },
    { nameEn: 'Introduction', nameUr: 'تعارف', href: '#intro' },
    { nameEn: 'Objectives', nameUr: 'مقاصد', href: '#objectives' },
    { nameEn: 'Courses', nameUr: 'کورسز', href: '#courses' },
    { nameEn: 'Why Us', nameUr: 'ہمارا انتخاب', href: '#why-us' },
    { nameEn: 'Contact', nameUr: 'رابطہ', href: '#contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Header Bar */}
      <div className="bg-emerald-900 text-white py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <span className="flex items-center"><Phone size={14} className="mr-2" /> {CONTACT_PHONE}</span>
            <span className="flex items-center hidden sm:flex"><Mail size={14} className="mr-2" /> {CONTACT_EMAIL}</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-emerald-300 transition-colors"><Facebook size={16} /></a>
            <a href="#" className="hover:text-emerald-300 transition-colors"><Twitter size={16} /></a>
            <a href="#" className="hover:text-emerald-300 transition-colors"><Instagram size={16} /></a>
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md border-b border-emerald-100" role="banner">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center" role="navigation" aria-label="Main navigation">
          <div className="flex items-center">
            <div className="bg-emerald-700 p-2 rounded-lg mr-3" aria-hidden="true">
              <BookOpen className="text-white" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-emerald-800 leading-tight">Farooqi Institute</h1>
              <p className="text-xs text-emerald-600 urdu-font leading-none mt-1" lang="ur">فاروقی آن لائن اسلامک انسٹی ٹیوٹ</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className="text-slate-600 hover:text-emerald-700 font-medium transition-colors flex flex-col items-center"
              >
                <span>{item.nameEn}</span>
                <span className="urdu-font text-xs">{item.nameUr}</span>
              </a>
            ))}
            <a 
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white px-5 py-2 rounded-full hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl flex items-center"
            >
              <MessageCircle size={18} className="mr-2" />
              <span>Register Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-emerald-800 p-1" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-emerald-100 py-4 absolute w-full left-0 animate-fade-in-down">
            <div className="flex flex-col space-y-2 px-4">
              {navItems.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  className="p-3 text-slate-700 hover:bg-emerald-50 rounded-lg flex justify-between items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.nameEn}</span>
                  <span className="urdu-font">{item.nameUr}</span>
                </a>
              ))}
              <a 
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-emerald-600 text-white p-4 rounded-xl text-center font-bold flex justify-center items-center shadow-md"
              >
                <MessageCircle size={20} className="mr-2" />
                <span>Register via WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow" role="main">
        {/* Hero Section */}
        <section id="hero" className="relative bg-emerald-800 py-20 lg:py-32 overflow-hidden text-white" aria-labelledby="hero-heading">
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden" aria-hidden="true">
             <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-3xl"></div>
             <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <div className="mb-8 border-b border-emerald-400 pb-4">
                <p className="urdu-font text-3xl md:text-5xl font-bold mb-4 tracking-wide" lang="ar">
                  خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهٗ
                </p>
                <p className="text-emerald-200 text-lg md:text-xl italic">
                  "The best among you is the one who learns the Quran and teaches it."
                </p>
              </div>
              <h2 id="hero-heading" className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Empowering Your Spiritual Journey <br className="hidden md:block" /> with Online Islamic Education
              </h2>
              <p className="text-emerald-100 text-lg md:text-xl mb-10 max-w-2xl">
                Experience high-quality religious education from the comfort of your home. We offer courses tailored for all ages and backgrounds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#courses" 
                  className="bg-white text-emerald-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-xl"
                >
                  Explore Courses
                </a>
                <a 
                  href="#contact" 
                  className="bg-emerald-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-600 border border-emerald-500 transition-all"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section id="intro" className="py-20 bg-white" aria-labelledby="intro-heading">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/islamic-edu/800/600" 
                  alt="Students learning Islamic studies online with Quran and books" 
                  className="rounded-2xl shadow-2xl relative z-10"
                  loading="lazy"
                  width="800"
                  height="600"
                />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-100 rounded-full -z-0" aria-hidden="true"></div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-50 rounded-2xl -z-0" aria-hidden="true"></div>
              </div>
              <div>
                <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-bold mb-4">
                  ABOUT US / تعارف
                </div>
                <h2 id="intro-heading" className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Welcome to Farooqi Online Islamic Institute</h2>
                <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                  <p>
                    Farooqi Online Islamic Institute is dedicated to providing accessible, high-quality religious education to Muslims worldwide. Our mission is to bridge the gap between traditional Islamic teachings and modern accessibility.
                  </p>
                  <p className="urdu-font text-right border-r-4 border-emerald-600 pr-6 bg-emerald-50 py-4 rounded-l-lg">
                    فاروقی آن لائن اسلامک انسٹی ٹیوٹ دنیا بھر کے مسلمانوں کو قابل رسائی اور معیاری دینی تعلیم فراہم کرنے کے لیے وقف ہے۔ ہمارا مقصد روایتی اسلامی تعلیمات اور جدید دور کی سہولت کے درمیان فرق کو ختم کرنا ہے۔
                  </p>
                  <p>
                    Whether you are a beginner looking to start with Noorani Qaida or an adult seeking deeper understanding of Islamic beliefs and practices, we have a structured curriculum to meet your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section id="objectives" className="py-20 bg-slate-50" aria-labelledby="objectives-heading">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 id="objectives-heading" className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Our Objectives</h2>
              <p className="urdu-font text-2xl text-emerald-700" lang="ur">اہداف ومقاصد</p>
              <p className="text-slate-600 mt-4">We are committed to achieving excellence in spiritual and educational development.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {OBJECTIVES.map((obj) => (
                <div key={obj.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <ChevronRight size={24} />
                    </div>
                    <p className="text-xl font-bold text-slate-800 mb-4">{obj.textEn}</p>
                    <p className="urdu-font text-xl text-emerald-800 text-right">{obj.textUr}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-20 bg-white" aria-labelledby="courses-heading">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 id="courses-heading" className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Our Popular Courses</h2>
              <p className="urdu-font text-2xl text-emerald-700" lang="ur">ہمارے مشہور کورسز</p>
              <p className="text-slate-600 mt-4">Carefully designed programs to enhance your religious knowledge.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {COURSES.map((course) => (
                <article key={course.id} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:border-emerald-200 transition-all transform hover:-translate-y-1">
                  <div className="h-48 bg-emerald-700 relative flex items-center justify-center overflow-hidden" aria-hidden="true">
                    <IconWrapper name={course.icon} size={80} className="text-white/20 absolute -right-4 -bottom-4 transform rotate-12" />
                    <IconWrapper name={course.icon} size={64} className="text-white relative z-10" />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-slate-800">{course.titleEn}</h3>
                      <span className="urdu-font text-xl text-emerald-700 font-bold" lang="ur">{course.titleUr}</span>
                    </div>
                    <p className="text-slate-600 mb-4 h-12 overflow-hidden">{course.descriptionEn}</p>
                    <p className="urdu-font text-slate-600 mb-8 border-t border-slate-50 pt-4 text-right">{course.descriptionUr}</p>
                    <a 
                      href={getWhatsAppLink(course.titleEn)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold flex items-center justify-center transition-colors shadow-lg shadow-emerald-200 group"
                    >
                      <MessageCircle className="mr-2 group-hover:scale-110 transition-transform" />
                      Register for Course / رجسٹر ہوں
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="py-20 bg-emerald-900 text-white overflow-hidden relative" aria-labelledby="why-us-heading">
          <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
            <div className="grid grid-cols-12 gap-4 h-full">
              {[...Array(100)].map((_, i) => (
                <div key={i} className="flex justify-center items-center">
                  <Star size={8} />
                </div>
              ))}
            </div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 id="why-us-heading" className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Institute</h2>
              <p className="urdu-font text-2xl text-emerald-300" lang="ur">ہمارا انتخاب کیوں</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {WHY_CHOOSE_US.map((item) => (
                <div key={item.id} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/15 transition-all text-center">
                  <h4 className="text-xl font-bold mb-2">{item.titleEn}</h4>
                  <p className="urdu-font text-lg mb-4 text-emerald-300">{item.titleUr}</p>
                  <p className="text-sm text-emerald-100 opacity-80 mb-2">{item.descriptionEn}</p>
                  <p className="urdu-font text-xs text-white opacity-80">{item.descriptionUr}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white" aria-labelledby="contact-heading">
          <div className="container mx-auto px-4">
            <div className="bg-emerald-50 rounded-[3rem] p-8 md:p-16 shadow-inner overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-50 -mr-32 -mt-32" aria-hidden="true"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative z-10">
                  <h2 id="contact-heading" className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">Let's start your journey today</h2>
                  <p className="text-slate-600 text-lg mb-10">
                    Questions? Or ready to register? Simply send us a message on WhatsApp and our team will guide you through the process personally.
                  </p>
                  <div className="space-y-6 mb-10">
                    <div className="flex items-center group">
                      <div className="w-12 h-12 bg-white text-emerald-600 rounded-full flex items-center justify-center shadow-md mr-4 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 font-medium">Call/WhatsApp</p>
                        <p className="text-lg font-bold text-slate-800">{CONTACT_PHONE}</p>
                      </div>
                    </div>
                    <div className="flex items-center group">
                      <div className="w-12 h-12 bg-white text-emerald-600 rounded-full flex items-center justify-center shadow-md mr-4 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 font-medium">Email Address</p>
                        <p className="text-lg font-bold text-slate-800">{CONTACT_EMAIL}</p>
                      </div>
                    </div>
                    <div className="flex items-center group">
                      <div className="w-12 h-12 bg-white text-emerald-600 rounded-full flex items-center justify-center shadow-md mr-4 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 font-medium">Location</p>
                        <p className="text-lg font-bold text-slate-800">Online Classes Worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Direct Registration</h3>
                    <p className="text-slate-500">Fast and personalized support via WhatsApp</p>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 flex items-start space-x-4">
                      <div className="bg-white p-3 rounded-full text-emerald-600 shadow-sm">
                        <MessageCircle size={24} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 mb-1">Click to Chat</p>
                        <p className="text-sm text-slate-600">The button below will open WhatsApp on your device with a pre-filled registration message.</p>
                      </div>
                    </div>
                    <a 
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-5 rounded-2xl font-extrabold text-xl flex items-center justify-center shadow-xl shadow-emerald-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <MessageCircle className="mr-3" size={28} />
                      Message Us Now
                    </a>
                    <div className="text-center">
                      <p className="text-xs text-slate-400">Response time: Usually within a few minutes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-emerald-600 p-2 rounded-lg mr-3">
                  <BookOpen className="text-white" />
                </div>
                <h1 className="text-2xl font-bold">Farooqi Institute</h1>
              </div>
              <p className="text-slate-400 mb-6">
                Bringing the light of the Quran to every home through modern technology and expert guidance.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"><Twitter size={18} /></a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"><Instagram size={18} /></a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="hover:text-emerald-500 transition-colors flex justify-between items-center">
                      <span>{item.nameEn}</span>
                      <span className="urdu-font text-xs">{item.nameUr}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Our Courses</h4>
              <ul className="space-y-4 text-slate-400">
                {COURSES.map((course) => (
                  <li key={course.id}>
                    <a href="#courses" className="hover:text-emerald-500 transition-colors">{course.titleEn}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-center">
                  <Phone size={18} className="mr-3 text-emerald-500" />
                  <span>{CONTACT_PHONE}</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-3 text-emerald-500" />
                  <span>{CONTACT_EMAIL}</span>
                </li>
                <li className="flex items-start">
                  <MapPin size={18} className="mr-3 text-emerald-500 mt-1" />
                  <span>Serving Students Worldwide via Online Platforms</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-10 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Farooqi Online Islamic Institute. All rights reserved.</p>
            <p className="mt-2 urdu-font">تمام جملہ حقوق محفوظ ہیں - فاروقی آن لائن اسلامک انسٹی ٹیوٹ</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
