# 🚀 WSAbsurd Portfolio

Portfolio website pribadi yang modern dan responsif, dibangun dengan React dan Tailwind CSS. Website ini menampilkan proyek-proyek, skill, dan informasi kontak dengan desain yang clean dan user-friendly.

## ✨ Fitur

- 🎨 **Modern UI/UX** - Desain yang clean dan profesional dengan dark theme
- 📱 **Fully Responsive** - Tampilan optimal di semua perangkat (desktop, tablet, mobile)
- ⚡ **Fast Performance** - Dibangun dengan Vite untuk loading yang cepat
- 🧭 **Smooth Navigation** - Navigasi yang smooth dengan scroll spy
- 💬 **WhatsApp Integration** - Floating WhatsApp button untuk kontak cepat
- 🎯 **Section Highlights** - Hero, About, Projects, Contact sections
- 🎭 **Icon Libraries** - Menggunakan Lucide React, React Icons, dan Boxicons

## 🛠️ Teknologi yang Digunakan

### Core
- **React** (v18.2.0) - Library JavaScript untuk membangun UI
- **Vite** (v5.2.0) - Build tool yang cepat dan modern
- **Tailwind CSS** (v3.4.3) - Utility-first CSS framework

### Libraries & Tools
- **Lucide React** - Icon library yang modern dan customizable
- **React Icons** - Koleksi icon populer untuk React
- **Boxicons** - Icon library dengan berbagai pilihan icon
- **ESLint** - Linting untuk menjaga kualitas kode
- **PostCSS** - CSS processing tool
- **Autoprefixer** - Menambahkan vendor prefixes otomatis

## 🚀 Quick Start

### Prerequisites

Pastikan Anda sudah menginstall:
- Node.js (v16 atau lebih tinggi)
- npm atau yarn

### Installation

1. Clone repository ini
```bash
git clone https://github.com/username/wsabsurd-portfolio.git
cd wsabsurd-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Jalankan development server
```bash
npm run dev
```

4. Buka browser dan akses `http://localhost:5173`

## 📝 Available Scripts

```bash
# Development server
npm run dev

# Build untuk production
npm run build

# Preview production build
npm run preview

# Linting
npm run lint
```

## 🎨 Customization

### Mengubah Konten

1. **Hero Section** - Edit `src/components/Hero.jsx`
2. **About Section** - Edit `src/components/About.jsx`
3. **Projects** - Edit `src/components/Projects.jsx`
4. **Contact** - Edit `src/components/Contact.jsx`

### Mengubah Style

- **Colors** - Ubah di `tailwind.config.js`
- **Global Styles** - Edit `src/index.css`
- **Component Styles** - Gunakan Tailwind utility classes

### WhatsApp Integration

Edit nomor WhatsApp di `src/components/WhatsAppFloat.jsx`:
```jsx
const whatsappNumber = "6281234567890"; // Ganti dengan nomor Anda
```

## 📦 Build & Deployment

### Build untuk Production

```bash
npm run build
```

File production akan tersimpan di folder `dist/`.

### Deployment

Portfolio ini dapat di-deploy ke berbagai platform:

- **Vercel** (Recommended)
  ```bash
  npm install -g vercel
  vercel
  ```

- **Netlify**
  - Drag & drop folder `dist/` ke Netlify
  - Atau gunakan Netlify CLI

- **GitHub Pages**
  - Push folder `dist/` ke branch `gh-pages`
  - Enable GitHub Pages di settings repository

## 🌟 Features Highlights

### Navigation
- Sticky navigation bar
- Active section highlighting
- Smooth scroll behavior
- Mobile-responsive hamburger menu

### Sections
- **Hero** - Introduction dengan CTA buttons
- **About** - Skills dan background
- **Projects** - Portfolio showcase dengan detail
- **Contact** - Form kontak dan social links

### UI/UX
- Dark theme yang eye-friendly
- Smooth animations dan transitions
- Responsive design untuk semua ukuran layar
- Loading states dan hover effects

⭐ Jangan lupa untuk memberikan star jika project ini membantu Anda!
