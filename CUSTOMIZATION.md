# Quick Customization Guide

This guide helps you personalize the portfolio with your own information.

## 🎯 Quick Start Checklist

- [ ] Update personal information in Hero
- [ ] Add your projects
- [ ] Update experience timeline
- [ ] Update education timeline
- [ ] Customize skills
- [ ] Add leadership achievements
- [ ] Update contact information
- [ ] Change colors (optional)
- [ ] Add your social media links

## 📝 Step-by-Step Customization

### 1. Personal Information (Hero.jsx)

**Location**: `src/components/Hero.jsx`

```jsx
// Update your name
<h1>Your Name Here</h1>

// Update your title
<p>Your Title · Your Role · Your Expertise</p>

// Update location
<p>Based in Your City, Your Country</p>
```

### 2. About Section (About.jsx)

**Location**: `src/components/About.jsx`

```jsx
// Update bio paragraphs
<p>Your personal introduction...</p>

// Update capstone project
<span className="text-emerald-400">Your Project Name</span>

// Update stats
<div className="text-2xl font-bold">2+</div>  // Years
<div className="text-2xl font-bold">10+</div> // Projects
```

### 3. Skills (Skills.jsx)

**Location**: `src/components/Skills.jsx`

```jsx
const skillCategories = [
  {
    title: 'Your Category',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
    icon: (...), // Keep existing icons or add new ones
  },
  // Add more categories
];
```

### 4. Projects (Projects.jsx)

**Location**: `src/components/Projects.jsx`

```jsx
const projects = [
  {
    title: 'Your Project Name',
    category: 'Project Type',
    description: 'Detailed project description...',
    tech: ['Tech 1', 'Tech 2', 'Tech 3'],
    gradient: 'from-emerald-500 to-teal-600', // Choose your gradient
  },
  // Add more projects
];
```

**Available Gradients**:
- `from-emerald-500 to-teal-600` (Green)
- `from-blue-500 to-cyan-600` (Blue)
- `from-purple-500 to-pink-600` (Purple)
- `from-orange-500 to-red-600` (Orange)
- `from-yellow-500 to-amber-600` (Yellow)

### 5. Experience Timeline (TimelineSection.jsx)

**Location**: `src/components/TimelineSection.jsx`

```jsx
experience: {
  title: 'Experience',
  subtitle: 'Professional Journey',
  items: [
    {
      title: 'Your Job Title',
      organization: 'Company Name',
      date: 'Start - End',
      description: [
        'Achievement or responsibility 1',
        'Achievement or responsibility 2',
        'Achievement or responsibility 3',
      ],
    },
    // Add more experience items
  ],
}
```

### 6. Education Timeline (TimelineSection.jsx)

**Location**: `src/components/TimelineSection.jsx`

```jsx
education: {
  title: 'Education',
  subtitle: 'Academic Background',
  items: [
    {
      title: 'Your Degree',
      organization: 'University/School Name',
      date: 'Start - End',
      description: [
        'Major/Specialization',
        'Awards or honors',
        'Relevant coursework',
      ],
    },
    // Add more education items
  ],
}
```

### 7. Leadership (Leadership.jsx)

**Location**: `src/components/Leadership.jsx`

```jsx
const achievements = [
  {
    title: 'Leadership Role',
    organization: 'Organization Name',
    description: 'What you accomplished...',
    icon: (...), // Keep existing or choose from options below
  },
  // Add more achievements
];

// Update stats at bottom
<div className="text-3xl font-bold">5+</div>
<div className="text-sm">Leadership Roles</div>
```

**Icon Options** (already in the file):
- Team icon (users)
- Building icon (organization)
- Star icon (achievement)
- Heart icon (community service)

### 8. Contact Information (Contact.jsx)

**Location**: `src/components/Contact.jsx`

```jsx
const contactInfo = [
  {
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  {
    label: 'Location',
    value: 'Your City, Your Country',
  },
  {
    label: 'Phone',
    value: '+XX XXX XXX XXXX',
    href: 'tel:+XXXXXXXXXXXX',
  },
];
```

### 9. Social Media Links

**Update in multiple files**:

**Hero.jsx** - Social icons at bottom
```jsx
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://linkedin.com/in/yourusername">LinkedIn</a>
<a href="https://twitter.com/yourusername">Twitter</a>
```

**Footer.jsx** - Social links
```jsx
const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/yourusername',
  },
  // Update others
];
```

### 10. Meta Information (index.html)

**Location**: `index.html`

```html
<meta name="description" content="Your description" />
<meta name="keywords" content="your, keywords, here" />
<meta name="author" content="Your Name" />
<title>Your Name | Your Title</title>
```

## 🎨 Color Customization

### Change Accent Color

**Location**: `tailwind.config.js`

Replace `emerald` throughout the codebase with your chosen color:

**Tailwind Color Options**:
- `blue` - Professional blue
- `purple` - Creative purple  
- `pink` - Vibrant pink
- `red` - Bold red
- `orange` - Energetic orange
- `yellow` - Bright yellow
- `green` - Fresh green
- `teal` - Modern teal
- `cyan` - Tech cyan
- `indigo` - Deep indigo

**Find and Replace**:
```
Find: emerald
Replace: blue (or your color)
```

### Custom Color

Add to `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        50: '#...',
        100: '#...',
        // ... up to 900
      }
    }
  }
}
```

## 📸 Adding Images

### Profile Image

Replace the placeholder in `About.jsx`:

```jsx
// Current: Text placeholder
<div className="text-9xl font-bold">JEM</div>

// Replace with:
<img 
  src="/path/to/your/image.jpg" 
  alt="Your Name"
  className="w-full h-full object-cover rounded-2xl"
/>
```

### Project Images

Add images to projects in `Projects.jsx`:

```jsx
<div className="aspect-video bg-neutral-800 rounded-lg overflow-hidden mb-4">
  <img 
    src="/path/to/project-image.jpg"
    alt="Project Name"
    className="w-full h-full object-cover"
  />
</div>
```

## 🔗 Adding Project Links

Update in `Projects.jsx`:

```jsx
// View Project button
<a 
  href="https://your-project-url.com"
  target="_blank"
  rel="noopener noreferrer"
>
  View Project
</a>

// GitHub button
<a 
  href="https://github.com/yourusername/project"
  target="_blank"
  rel="noopener noreferrer"
>
  GitHub
</a>
```

## ⚡ Quick Tips

### Add New Section

1. Create component in `src/components/YourSection.jsx`
2. Import in `App.jsx`
3. Add to JSX: `<YourSection />`
4. Add ID for navigation: `<section id="newsection">`
5. Update navbar items in `Navbar.jsx`

### Reorder Sections

Simply reorder components in `App.jsx`:

```jsx
<Hero />
<About />
<Projects />      // Move this...
<Skills />        // ...before this
<TimelineSection type="experience" />
```

### Remove Sections

Comment out or delete from `App.jsx`:

```jsx
{/* <Leadership /> */}  // Hidden
```

Don't forget to remove from navbar too!

## 🚀 Testing Your Changes

1. Save files
2. Check browser (auto-refreshes with Vite)
3. Test on mobile (Chrome DevTools responsive mode)
4. Check all animations work
5. Verify links open correctly

## 📱 Mobile Responsiveness

All components are already mobile-responsive. Test at these breakpoints:

- **320px** - Small mobile
- **375px** - iPhone
- **768px** - Tablet
- **1024px** - Small desktop
- **1920px** - Large desktop

## ✅ Pre-Launch Checklist

- [ ] All text updated
- [ ] All links working
- [ ] Images optimized
- [ ] Colors match brand
- [ ] Mobile tested
- [ ] Forms tested
- [ ] SEO meta tags updated
- [ ] Social media links verified
- [ ] Resume/CV linked (if applicable)
- [ ] Analytics added (optional)

## 🎉 You're Done!

Your portfolio is now personalized and ready to deploy!

For deployment instructions, see `README.md`.

---

Need help? Check the full documentation or create an issue on GitHub.
