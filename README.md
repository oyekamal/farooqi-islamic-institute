<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Farooqi Online Islamic Institute

> **Empowering Your Spiritual Journey with Online Islamic Education**

A modern, SEO-optimized website for an online Islamic education platform offering comprehensive courses in Quran recitation, Islamic studies, and Arabic language.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🌟 Features

- **📚 Comprehensive Course Catalog** - Quran Nazra, Hifz, Islamic studies, and more
- **🌐 Bilingual Support** - English and Urdu content
- **📱 Fully Responsive** - Mobile-first design
- **⚡ Fast & Optimized** - Built with Vite and React
- **🔍 SEO Optimized** - Complete meta tags, structured data, and semantic HTML
- **♿ Accessible** - ARIA labels and semantic markup
- **💬 WhatsApp Integration** - Direct registration via WhatsApp

## 🚀 Quick Start

**Prerequisites:** Node.js 16+

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set environment variables:**
   Create a `.env.local` file and set your Gemini API key (if needed):
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
farooqi-online-islamic-institute/
├── components/          # React components
│   └── IconWrapper.tsx
├── public/             # Static assets
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── App.tsx             # Main application component
├── constants.tsx       # Course data and constants
├── index.html          # HTML entry point with SEO meta tags
├── index.tsx           # React entry point
├── types.ts            # TypeScript type definitions
├── vite.config.ts      # Vite configuration
└── SEO_GUIDE.md        # SEO implementation guide
```

## 🔍 SEO Features

This website is fully optimized for search engines with:

### ✅ Meta Tags & Social Sharing
- Comprehensive meta descriptions
- Open Graph tags for Facebook
- Twitter Card support
- Canonical URLs

### ✅ Structured Data
- Schema.org EducationalOrganization markup
- JSON-LD format for rich snippets

### ✅ Technical SEO
- XML sitemap (`/sitemap.xml`)
- robots.txt file
- PWA manifest
- Semantic HTML5

### ✅ Performance
- Code splitting
- Lazy loading images
- DNS prefetch
- Optimized builds

For detailed SEO information, see [SEO_GUIDE.md](./SEO_GUIDE.md)

## 🎨 Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (CDN)
- **Icons:** Lucide React
- **Fonts:** Inter & Noto Nastaliq Urdu (Google Fonts)
- **Language:** TypeScript

## 📝 Customization

### Update Course Content
Edit `constants.tsx` to modify courses, objectives, and contact information.

### Change Styling
The project uses Tailwind CSS classes. Modify the classes in components for styling changes.

### Update Meta Tags
Edit `index.html` to update:
- Site title and description
- Social media preview images
- Contact information
- Domain URLs

## 🌐 Deployment

### Build for Production
```bash
npm run build:production
```

The optimized files will be in the `dist/` directory.

### Deploy to Vercel/Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Important: Before Deployment
- [ ] Update domain in `index.html` meta tags
- [ ] Add real social media URLs
- [ ] Upload favicon and social preview images
- [ ] Update phone number in structured data
- [ ] Set up Google Analytics (optional)
- [ ] Enable HTTPS/SSL

## 📞 Contact Integration

The website uses WhatsApp for direct student registration. Update the contact phone number in `constants.tsx`:

```typescript
export const CONTACT_PHONE = '+92-XXX-XXXXXXX';
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- **AI Studio App:** https://ai.studio/apps/drive/1gmbrOr1CH_r_aYrfDVaeJXPTozuCYsIQ
- **SEO Guide:** [SEO_GUIDE.md](./SEO_GUIDE.md)

---

**Made with ❤️ for the Muslim Ummah**
