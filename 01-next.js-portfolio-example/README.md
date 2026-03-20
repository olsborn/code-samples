# Landing Page - Next.js Project

A modern, responsive landing page built with Next.js 15, featuring smooth animations, image galleries, testimonials, and multiple service pages.

## ⚠️ Template Attribution

**This project is based on a free BootstrapMade template. Original assets were removed due to licensing.**

## 🚀 Features

- **Next.js 15** with App Router
- **React 19** for modern UI components
- **Bootstrap 5** for responsive design
- **AOS** (Animate On Scroll) for smooth animations
- **GLightbox** for image galleriesco
- **Swiper** for carousels and sliders
- Fully responsive design
- Multiple pages: Home, About, Services, Gallery, Contact

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18.0 or higher)
- **npm**, **yarn**, **pnpm**, or **bun** package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/olsborn/code-samples.git
cd code-samples/01-next.js-portfolio-example
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

## 🏃 Running the Project

### Development Mode

Start the development server with hot-reload:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

The page will automatically reload when you make changes to the source files.

### Production Build

1. Create an optimized production build:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

### Export Static Site

To export the project as a static site:
```bash
npm run export
```

## 📁 Project Structure

```
page_01_landing/
├── app/                    # Next.js App Router pages
│   ├── page.js            # Home page
│   ├── layout.js          # Root layout
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── gallery/           # Gallery page
│   ├── gallery-single/    # Single gallery item
│   └── services/          # Services page
├── content/               # Reusable components
│   ├── header.js          # Navigation header
│   ├── footer.js          # Footer component
│   ├── hero.js            # Hero section
│   ├── gallery.js         # Gallery component
│   └── testimonials.js    # Testimonials section
├── public/                # Static assets
│   └── assets/
│       ├── img/           # Images
│       └── fonts/         # Custom fonts
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

- **Styles**: Edit CSS files in the `app/` directory
- **Content**: Modify component files in the `content/` directory
- **Images**: Replace images in `public/assets/img/`
- **Pages**: Add or edit pages in the `app/` directory

## 📦 Technologies Used

- [Next.js 15](https://nextjs.org/) - React Framework
- [React 19](https://react.dev/) - UI Library
- [Bootstrap 5](https://getbootstrap.com/) - CSS Framework
- [AOS](https://michalsnik.github.io/aos/) - Animation Library
- [GLightbox](https://biati-digital.github.io/glightbox/) - Lightbox Gallery
- [Swiper](https://swiperjs.com/) - Carousel/Slider

## 🐛 Troubleshooting

If you encounter any issues:

1. Clear the cache and node_modules:
```bash
rm -rf node_modules .next
npm install
```

2. Ensure you're using a compatible Node.js version (18+)

3. Check that all dependencies are properly installed

## 📄 License

This project is private and not licensed for distribution.

**Note**: This project uses a BootstrapMade template as its base. Original template assets have been removed due to licensing requirements. Please refer to [BootstrapMade](https://bootstrapmade.com/) for template licensing information.

## 🤝 Contributing

This is a private project. If you have suggestions or improvements, please open an issue or submit a pull request.

---

Built with ❤️ using Next.js
