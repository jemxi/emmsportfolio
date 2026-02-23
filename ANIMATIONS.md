# Animation & Interaction Documentation

This document explains all animations and micro-interactions implemented in the portfolio.

## 🎭 Animation Philosophy

- **Duration**: 300-500ms for most transitions
- **Easing**: ease-out for natural deceleration
- **Purpose**: Every animation serves to guide attention or provide feedback
- **Performance**: CSS transforms (translate, scale) over position changes

## 📊 Intersection Observer Implementation

### How It Works

The Intersection Observer API detects when elements enter the viewport:

```javascript
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    { threshold: 0.2 } // Trigger when 20% visible
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => {
    if (sectionRef.current) {
      observer.unobserve(sectionRef.current);
    }
  };
}, []);
```

### Applied To:
- About section stats
- Skills cards
- Project cards
- Timeline items
- Leadership achievements

## 🎯 Timeline Scroll Animation

### Scroll Progress Calculation

```javascript
const handleScroll = () => {
  if (!sectionRef.current || !lineRef.current) return;

  const section = sectionRef.current;
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const scrollPosition = window.scrollY + window.innerHeight / 2;

  const relativeScroll = scrollPosition - sectionTop;
  const progress = Math.min(Math.max(relativeScroll / sectionHeight, 0), 1);
  setScrollProgress(progress);
};
```

### Visual Elements:

1. **Timeline Line**
   - Background: Static gray line
   - Foreground: Green gradient that grows with scroll
   - Height: `${scrollProgress * 100}%`

2. **Glowing Indicator**
   - Follows scroll progress
   - Pulsing animation
   - Shadow effect for glow
   - Position: `top: ${scrollProgress * 100}%`

3. **Timeline Cards**
   - Alternate left/right (odd/even index)
   - Fade in when visible (Intersection Observer)
   - Staggered delay based on index
   - Hover: Lift up 4px, border color change

## 🎨 Micro-Interactions Breakdown

### 1. Navigation Bar

**Scroll State Change**
```css
/* Transparent initially */
bg-transparent

/* After scroll (50px) */
bg-neutral-950/80 backdrop-blur-xl border-b shadow-lg
```

**Active Link Indicator**
```css
/* Underline animation */
w-0 group-hover:w-6 /* Expands on hover */
w-6 /* Active state - always visible */
transition-all duration-300
```

### 2. Buttons

**Primary Button (CTA)**
```css
hover:scale-[1.02]      /* Slight scale up */
active:scale-[0.97]     /* Press down effect */
shadow-lg shadow-emerald-500/30
hover:shadow-emerald-500/50  /* Glow intensifies */
transition-all duration-200
```

**Secondary Button**
```css
border border-neutral-700
hover:bg-neutral-800
hover:border-neutral-600
```

### 3. Cards (Projects, Skills, etc.)

**Elevation on Hover**
```css
hover:-translate-y-1     /* Lift 4px */
hover:shadow-2xl
hover:shadow-emerald-500/10
hover:border-emerald-500/50
transition-all duration-300
```

**Title Color Change**
```css
group-hover:text-emerald-400
transition-colors duration-200
```

### 4. Hero Section Sequential Animation

Elements fade in sequentially on page load:

```javascript
useEffect(() => {
  const elements = heroRef.current.querySelectorAll('.animate-in');
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('active');
    }, index * 100);  // 100ms delay between each
  });
}, []);
```

CSS:
```css
.animate-in {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 500ms ease-out, transform 500ms ease-out;
}

.animate-in.active {
  opacity: 1;
  transform: translateY(0);
}
```

### 5. Icon Animations

**Skill Category Icons**
```css
group-hover:bg-emerald-500/20  /* Background intensifies */
group-hover:scale-110           /* Icon scales up */
transition-all duration-300
```

**Social Media Icons**
```css
hover:text-emerald-400
hover:scale-110
transition-all duration-200
```

### 6. Form Interactions

**Input Focus State**
```css
focus:border-emerald-500
focus:ring-1
focus:ring-emerald-500
outline-none
transition-all duration-200
```

### 7. Scroll to Top Button

**Visibility Toggle**
```css
/* Hidden when scrollY < 500 */
opacity-0 translate-y-4 pointer-events-none

/* Visible when scrollY > 500 */
opacity-100 translate-y-0

/* Hover */
hover:scale-110
```

### 8. Project Cards

**Gradient Overlay Effect**
```css
/* Invisible by default */
opacity-0

/* Visible on hover */
group-hover:opacity-5
transition-opacity duration-300
```

**Arrow Icon Animation**
```css
/* "View Project" arrow */
hover:gap-3  /* Increases gap, arrow moves right */
transition-all duration-200
```

## 🌊 Stagger Delays

Elements appear with sequential delays for a polished effect:

```javascript
style={{ transitionDelay: `${index * 100}ms` }}
```

Applied to:
- Skills cards: 100ms interval
- Project cards: 100ms interval
- Timeline items: 150ms interval
- Leadership achievements: 100ms interval

## 💡 Performance Optimizations

### 1. CSS Transforms over Position
```css
/* ✅ Good - GPU accelerated */
transform: translateY(-4px);

/* ❌ Avoid - causes reflow */
top: -4px;
```

### 2. Will-Change for Animations
```css
.timeline-line {
  will-change: height;
}

.card:hover {
  will-change: transform;
}
```

### 3. Throttled Scroll Events

Scroll handlers use native browser optimization through `requestAnimationFrame`:

```javascript
window.addEventListener('scroll', handleScroll);
// Browser automatically throttles this
```

### 4. Cleanup on Unmount

```javascript
return () => {
  window.removeEventListener('scroll', handleScroll);
  observer.unobserve(element);
};
```

## 🎬 Animation Timeline

### Page Load Sequence (0-2000ms)

1. **0ms**: Navbar appears
2. **0-500ms**: Hero badge fades in
3. **100-600ms**: Hero title fades in
4. **200-700ms**: Hero subtitle fades in
5. **300-800ms**: Hero description fades in
6. **400-900ms**: Hero buttons fade in
7. **500-1000ms**: Social icons fade in

### Scroll-Triggered Animations

- **About Section**: Fades in at 20% visibility
- **Skills Cards**: Sequential stagger (100ms each)
- **Projects**: Sequential stagger (100ms each)
- **Timeline**: Continuous scroll tracking + item reveals
- **Leadership**: Sequential stagger (100ms each)
- **Contact**: Form and info boxes (200ms delay between)

## 🎪 Custom CSS Animations

### 1. Pulse Glow
```css
@keyframes pulse-glow {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}
```

Applied to: Floating accent elements, timeline indicator

### 2. Float
```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
```

Applied to: Background decorative elements

## 🔍 Testing Animations

### Browser DevTools

1. **Chrome DevTools**
   - Animation panel: View all running animations
   - Performance tab: Check for jank (>16ms frames)

2. **Firefox DevTools**
   - Animation inspector: Slow down/pause animations

### Accessibility Considerations

Respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 🎯 Key Takeaways

1. **Subtle is better**: 300-500ms feels natural
2. **Purpose-driven**: Every animation has a reason
3. **Performance first**: Use transforms, avoid layout changes
4. **Accessibility**: Respect motion preferences
5. **Progressive enhancement**: Site works without animations

---

This animation system creates a polished, professional feel while maintaining excellent performance and accessibility.
