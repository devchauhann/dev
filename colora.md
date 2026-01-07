<div align="center">
  <img src="./public/colora.webp" alt="Colora Logo" width="120" height="120" />
  <h1> Colora</h1>
  <p><strong>Professional Color Design Platform</strong></p>
  <p>An advanced color management system with 500+ named colors and comprehensive color utilities for modern design workflows.</p>
  
  <p>
    <a href="https://colora.in"><strong>🌐 Live Site: colora.in</strong></a>
  </p>
</div>

---

##  Quick Links

- **🌐 [Live Site](https://colora.in)** - Visit the live application
- **📖 [GitHub Repository](https://github.com/devchauhann/colora)** - Star us on GitHub
- **📚 [Documentation](#table-of-contents)** - Full documentation below

---

## Table of Content

- [Overview](#overview)
- [Features](#features)
- [Tools & Utilities](#tools--utilities)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

**Colora** is a comprehensive color design platform built with React and TypeScript. It provides designers, developers, and creative professionals with an extensive toolkit for color exploration, manipulation, and professional color management.

Whether you're building a brand palette, analyzing color accessibility, or implementing color schemes, Colora offers an intuitive interface backed by powerful algorithms and color utilities.

**Current Version:** v1.0.0

---

## ✨ Features

### 🎨 Comprehensive Color Database
- **500+ Named Colors** with psychological meanings and applications
- RGB, HSL, CMYK color space conversions
- Detailed color metadata including psychology, meaning, and use cases
- JSON export for color data and palettes

### 🎭 Color Analysis & Accessibility
- **WCAG Tool**: WCAG contrast ratio checker for accessibility compliance
- **Color Picker Tool**: Precise color extraction and sampling
- **Visualizer**: Color space visualization and relationship mapping

### 🖼️ Design Utilities
- **Palette Generator**: Create harmonious color palettes with multiple schemes
- **Brand Mockup**: Visualize colors in real-world branding contexts
- **Shadow Lab**: Generate and customize shadow effects with color
- **Mesh Architect**: Create beautiful mesh gradients with custom colors
- **TypeScale**: Typography and color coordination tool
- **Tailwind Colors**: Generate and preview Tailwind CSS color configurations
- **Image Picker**: Extract color palettes from images

---

## 🛠️ Tools & Utilities

### Design Tools

| Tool | Description | Use Case |
|------|-------------|----------|
| **Palette Generator** | Create color palettes with multiple harmony schemes | Brand development, theme creation |
| **Color Picker Tool** | Extract and sample colors from anywhere | Color sourcing, design inspiration |
| **Brand Mockup** | Visualize colors in branding contexts | Brand validation, presentation |
| **Image Picker** | Extract color palettes from images | Photo-based design, inspiration analysis |

### Color Exploration

| Tool | Description | Use Case |
|------|-------------|----------|
| **Color Library** | Browse 500+ named colors with metadata | Color discovery, research |
| **Visualizer** | Visualize color relationships and spaces | Understanding color theory |
| **Explore Page** | Interactive color exploration interface | Design inspiration |
| **Tailwind Colors** | Tailwind CSS color generation | Web development integration |

### Advanced Effects

| Tool | Description | Use Case |
|------|-------------|----------|
| **Shadow Lab** | Generate and customize shadow colors | UI/UX shadow effects |
| **Mesh Architect** | Create mesh gradient effects | Background design, visual effects |
| **Type Scale** | Color-coordinated typography scales | Text hierarchy with colors |

### Accessibility & Compliance

| Tool | Description | Use Case |
|------|-------------|----------|
| **WCAG Tool** | WCAG 2.1 contrast ratio compliance checker | Accessibility auditing, AA/AAA compliance |

---

## 🏗️ Technology Stack

### Frontend
- **React 19.2.3** - UI framework
- **TypeScript 5.8** - Type-safe development
- **Vite 6.4.1** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icon library

### Build & Development
- **Node.js** - Runtime environment
- **npm** - Package management
- **Git** - Version control

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm 7.x or higher
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/devchauhann/colora.git
   cd colora
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   - Open [http://localhost:5173](http://localhost:5173) in your browser

4. **Build for production**
   ```bash
   npm run build
   ```
   - Output files will be in the `dist/` directory

---

## 📁 Project Structure

```
colora/
├── components/
│   ├── tools/                    # All design tools
│   │   ├── ColorLibrary.tsx     # 500+ color browser
│   │   ├── ColorPickerTool.tsx  # Color sampling
│   │   ├── PaletteGenerator.tsx # Palette creation
│   │   ├── BrandMockup.tsx      # Brand visualization
│   │   ├── ShadowLab.tsx        # Shadow effects
│   │   ├── MeshArchitect.tsx    # Mesh gradients
│   │   ├── WcagTool.tsx         # Accessibility checker
│   │   ├── TailwindColors.tsx   # Tailwind integration
│   │   ├── TypeScale.tsx        # Typography colors
│   │   ├── Visualizer.tsx       # Color visualization
│   │   ├── ImagePicker.tsx      # Image color extraction
│   │   ├── ExplorePage.tsx      # Color exploration
│   │   └── FontLab.tsx          # Font color coordination
│   ├── pages/                   # Page components
│   │   ├── HelpCenter.tsx       # Help documentation
│   │   └── Pricing.tsx          # Pricing information
│   ├── legal/                   # Legal pages
│   │   ├── Privacy.tsx          # Privacy policy
│   │   └── Terms.tsx            # Terms of service
│   ├── Header.tsx               # Navigation header
│   ├── Footer.tsx               # Site footer
│   ├── Hero.tsx                 # Hero section
│   ├── FeatureGrid.tsx          # Features showcase
│   └── AnimatedTextSection.tsx  # Animations
├── utils/
│   └── colorUtils.ts            # Color conversion utilities
├── public/                       # Static assets
│   ├── colora.webp
│   ├── colora.png
│   └── og-image.webp
├── colors.ts                    # Color database (500+ colors)
├── types.ts                     # TypeScript type definitions
├── App.tsx                      # Main app component
├── index.tsx                    # React entry point
├── index.html                   # HTML template
├── vite.config.ts               # Vite configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Project dependencies
└── README.md                    # This file
```

---

## 📜 Available Scripts

### Development
```bash
npm run dev      # Start development server (Vite)
```

### Production
```bash
npm run build    # Build for production
npm run preview  # Preview production build locally
```

---

## 🧠 Color Database

Colora includes a comprehensive database of 500+ named colors with metadata:

```typescript
interface ColorData {
  name: string;           // Color name
  hex: string;           // Hex value
  rgb: { r, g, b };      // RGB values
  hsl: { h, s, l };      // HSL values
  cmyk: { c, m, y, k };  // CMYK values
  description: string;   // Detailed description
  psychology: string;    // Psychological meaning
  meaning: string;       // Cultural/symbolic meaning
  applications: string[]; // Use cases
}
```

---

## 🎨 Color Utilities

Comprehensive color conversion functions available in `utils/colorUtils.ts`:

- `hexToRgb()` - Hex to RGB conversion
- `hexToHsl()` - Hex to HSL conversion
- `hexToCmyk()` - Hex to CMYK conversion
- `getContrastRatio()` - WCAG contrast calculation
- And more...

---

## ♿ Accessibility

Colora is built with accessibility in mind:

- **WCAG 2.1 Compliance** - Contrast ratio checker (AA/AAA levels)
- **Keyboard Navigation** - Full keyboard support
- **Semantic HTML** - Proper heading hierarchy and ARIA labels
- **Color Accessibility** - Tools to ensure color-blind safe designs

---

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 Legal

- [Privacy Policy](./components/legal/Privacy.tsx)
- [Terms of Service](./components/legal/Terms.tsx)

---

## 📞 Support

For issues, questions, or feature requests:
- Open an issue on [GitHub Issues](https://github.com/devchauhann/colora/issues)
- Check the [Help Center](./components/pages/HelpCenter.tsx)

---

## 📈 Roadmap

- [ ] Dark mode toggle
- [ ] Color palette sharing
- [ ] Design system integration
- [ ] Advanced color algorithms
- [ ] Community color palettes
- [ ] Export to design tools (Figma, Adobe XD)
- [ ] Mobile app (React Native)

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Credits

Built with ❤️ by [Dev Chauhan](https://github.com/devchauhann)

Powered by:
- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)

---

<div align="center">
  <p><strong>Made with 🎨 for designers and developers</strong></p>
  <p><a href="https://github.com/devchauhann/colora">⭐ Star on GitHub</a></p>
</div>
