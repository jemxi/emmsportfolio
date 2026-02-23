# John Emmanuel S. Menor - Portfolio Website

A modern, sophisticated portfolio website built with React and Tailwind CSS, featuring scroll-animated timelines and polished micro-interactions.

## 🎨 Features

- **Smooth Scroll Animations**: Intersection Observer API for element visibility detection
- **Animated Vertical Timeline**: Dynamic scroll progress with glowing indicator
- **Micro-interactions**: Hover effects, scale transformations, and smooth transitions
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Performance Optimized**: Lazy loading and efficient rendering
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Intersection Observer API** - Scroll animations
- **JavaScript ES6+** - Modern JavaScript features

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky navigation with active section tracking
│   │   ├── Hero.jsx             # Animated hero section
│   │   ├── About.jsx            # About section with stats
│   │   ├── Skills.jsx           # Skills grid with categories
│   │   ├── Projects.jsx         # Featured projects showcase
│   │   ├── TimelineSection.jsx  # Animated vertical timeline
│   │   ├── Leadership.jsx       # Achievements and impact
│   │   ├── Contact.jsx          # Contact form and information
│   │   ├── Footer.jsx           # Footer with links
│   │   └── ScrollToTop.jsx      # Scroll to top button
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles and animations
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn installed

### Installation

1. **Clone or download the project**

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

The production build will be in the `dist/` directory.

## 🎯 Key Components

### TimelineSection Component

The timeline features:
- **Scroll Progress Tracking**: Line grows as you scroll
- **Glowing Indicator**: Animated dot follows scroll position
- **Alternating Layout**: Cards alternate left/right
- **Fade-in Animation**: Cards appear smoothly when visible

```jsx
<TimelineSection type="experience" />
<TimelineSection type="education" />
```

### Micro-interactions

All interactive elements include:
- **Hover States**: `translateY(-4px)` elevation effect
- **Button Interactions**: Scale `1.02` on hover, `0.97` on press
- **Smooth Transitions**: 200-300ms ease-out timing
- **Focus States**: Accessible keyboard navigation

## 🎨 Design System

### Colors
- **Background**: Neutral 950 (#0a0a0a)
- **Accent**: Emerald 500 (#10b981)
- **Text**: Neutral 100 (white) / 400 (gray)

### Spacing
- Section padding: 96-128px (24-32 in Tailwind units)
- Component gaps: 16-24px
- Card padding: 24-32px

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: 36-80px, bold (700-900)
- **Body**: 14-18px, regular (400)

### Animations
- **Duration**: 300-500ms
- **Easing**: ease-out
- **Delay**: Staggered 100-150ms for sequential items

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column)
- **Tablet**: 768px - 1024px (2 columns)
- **Desktop**: > 1024px (full layout)

## ✨ Animation Features

1. **Hero Section**: Sequential fade-in with staggered delays
2. **Scroll Reveal**: Elements fade/slide up when visible
3. **Timeline Progress**: Dynamic line height based on scroll
4. **Card Hover**: Elevation and border color change
5. **Button Ripple**: Scale transform on interaction

## 🔧 Customization

### Update Personal Information

Edit the data in components:
- `Hero.jsx` - Name, title, location
- `About.jsx` - Bio, stats, description
- `TimelineSection.jsx` - Experience and education data
- `Contact.jsx` - Email, phone, location

### Change Colors

Update `tailwind.config.js`:
```js
colors: {
  // Change emerald to your preferred accent color
  accent: colors.blue, // or any Tailwind color
}
```

### Modify Animations

Edit `index.css`:
```css
.transition-base {
  @apply transition-all duration-300 ease-out;
  /* Adjust duration and easing */
}
```

## 🌐 Deployment

### Vercel
```bash
npm run build
# Deploy dist/ folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy dist/ folder to Netlify
```

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy `dist/` folder to `gh-pages` branch

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**John Emmanuel S. Menor**
- IT Student | Junior Web Developer | UI/UX Designer
- Location: Guimba, Nueva Ecija
- Capstone: WasteWise - Electronic Platform for Recycled Products

---

Built with ❤️ using React and Tailwind CSS
