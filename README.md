
# Rohan Saini - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my skills, projects, and experience as a DevOps Engineer with a focus on cloud-native solutions and scalable systems.

## 🚀 Live Demo

Visit the live portfolio: [Your Portfolio URL]

## ✨ Features

- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Interactive Sections**:
  - Hero section with animated background
  - About section with personal introduction
  - Projects showcase with detailed descriptions
  - Skills section with technical expertise categorized by domain
  - Activity section highlighting contributions and achievements
  - Contact form for direct communication
- **Dark Theme**: Professional dark theme throughout
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **SEO Optimized**: Proper meta tags and structure for search engines

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: NPM

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components (Shadcn/UI)
│   ├── Header.tsx       # Navigation header
│   ├── HeroSection.tsx  # Landing section
│   ├── AboutSection.tsx # About me section
│   ├── ProjectsSection.tsx # Projects showcase
│   ├── SkillsSection.tsx   # Technical skills
│   ├── ActivitySection.tsx # GitHub/LeetCode activity
│   ├── ContactSection.tsx  # Contact form
│   └── Footer.tsx       # Footer with links
├── pages/
│   ├── Index.tsx        # Main page
│   └── NotFound.tsx     # 404 page
├── lib/
│   └── utils.ts         # Utility functions
└── hooks/               # Custom React hooks
```

## 🚦 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rohansaini1512/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the portfolio

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🎨 Customization

### Personal Information
Update the following files with your personal information:
- `src/components/HeroSection.tsx` - Name, title, and introduction
- `src/components/AboutSection.tsx` - About me content
- `src/components/ProjectsSection.tsx` - Your projects
- `src/components/SkillsSection.tsx` - Your technical skills
- `src/components/ContactSection.tsx` - Contact information
- `src/components/Footer.tsx` - Social links and resume

### Styling
- Modify `tailwind.config.ts` for custom colors and themes
- Update component styles in individual `.tsx` files
- Global styles are in `src/index.css`

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `src/pages/Index.tsx`
3. Update navigation in `src/components/Header.tsx` if needed

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Rohansaini1512/portfolio/issues).

## 📞 Contact

- **Email**: sainirohan830@gmail.com
- **LinkedIn**: [Rohan Saini](https://www.linkedin.com/in/rohan-saini-9b3060257/)
- **GitHub**: [Rohansaini1512](https://github.com/Rohansaini1512)
- **Blog**: [Hashnode](https://hashnode.com/@Rohansaini1512)

## 🙏 Acknowledgments

- Thanks to the React and TypeScript communities
- Shadcn/UI for the beautiful component library
- Tailwind CSS for the utility-first styling approach
- Lucide React for the icon library

---

⭐ Star this repository if you found it helpful!
