# Interactive React Portfolio

Website portofolio pribadi modern berbasis **React + Vite** dengan desain dark premium, animasi ringan, dan struktur konten yang mudah diubah.

## Fitur utama

- Navbar sticky dengan navigasi anchor dan indikator section aktif
- Hero interaktif + CTA + status availability
- Section About, Skills, Selected Projects, Experience timeline, Contact CTA, dan Footer
- Reveal on scroll dengan `IntersectionObserver`
- Micro-interactions pada hover/focus + smooth scrolling
- Dukungan `prefers-reduced-motion`
- Responsive untuk mobile, tablet, dan desktop
- Konten dipisahkan ke file data agar mudah diedit

## Menjalankan proyek

Pastikan Node.js sudah terpasang, lalu jalankan:

```bash
npm install
npm run dev
```

Aplikasi dev berjalan di URL lokal yang ditampilkan Vite (default: `http://localhost:5173`).

## Build production

```bash
npm run build
```

## Menjalankan lint

```bash
npm run lint
```

## Lokasi edit konten portofolio

Semua data utama ada di:

- `/home/runner/work/interactive-react-portfolio/interactive-react-portfolio/src/data/portfolioData.js`

Anda dapat mengganti:
- informasi personal (nama, role, email, CTA)
- daftar skills
- daftar project (title, deskripsi, tags, link demo/source)
- timeline pengalaman
