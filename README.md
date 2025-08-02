# React Infinite Feed Gallery

[![npm version](https://badge.fury.io/js/react-infinite-feed-gallery.svg)](https://badge.fury.io/js/react-infinite-feed-gallery)
[![npm downloads](https://img.shields.io/npm/dm/react-infinite-feed-gallery.svg)](https://www.npmjs.com/package/react-infinite-feed-gallery)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

A production-ready, fully responsive, animated infinite scroll image feed component for React with beautiful animations, multiple themes, and advanced features.

## ✨ Features

<div align="center">

<table>
  <tr>
    <td align="center" width="200"><img src="https://img.icons8.com/emoji/48/rocket.png" width="30"/><br><b>Infinite Scroll</b><br><sub>🚀 Auto-load images on scroll</sub></td>
    <td align="center" width="200"><img src="https://img.icons8.com/color/48/color-palette.png" width="30"/><br><b>Multiple Themes</b><br><sub>🎨 Light, Dark, Vintage, Glass</sub></td>
    <td align="center" width="200"><img src="https://img.icons8.com/fluency/48/responsive.png" width="30"/><br><b>Responsive Layouts</b><br><sub>📱 Grid, Masonry, Full-width</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://img.icons8.com/fluency/48/flash-on.png" width="30"/><br><b>Lazy Loading</b><br><sub>⚡ Load only when needed</sub></td>
    <td align="center"><img src="https://img.icons8.com/fluency/48/transition.png" width="30"/><br><b>Smooth Animations</b><br><sub>🎭 Powered by Framer Motion</sub></td>
    <td align="center"><img src="https://img.icons8.com/color/48/combo-chart.png" width="30"/><br><b>Stats Overlay</b><br><sub>📊 Likes, views & shares on hover</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-pin-ui-essential-elements-flatart-icons-outline-flatarticons.png" width="30"/><br><b>Pin to Board</b><br><sub>📌 Local save to storage</sub></td>
    <td align="center"><img src="https://img.icons8.com/emoji/48/frame-with-picture.png" width="30"/><br><b>GIF Support</b><br><sub>🎬 Cool effects on GIFs</sub></td>
    <td align="center"><img src="https://img.icons8.com/color/48/accessible.png" width="30"/><br><b>Accessibility</b><br><sub>♿ Keyboard & screen reader</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://img.icons8.com/color/48/bright-moon.png" width="30"/><br><b>Dark Mode</b><br><sub>🌙 Auto or prop-driven</sub></td>
    <td align="center"><img src="https://img.icons8.com/color/48/typescript.png" width="30"/><br><b>TypeScript</b><br><sub>🎯 Full TS support</sub></td>
    <td align="center"><img src="https://img.icons8.com/color/48/fireworks.png" width="30"/><br><b>And More!</b><br><sub>💥 Futuristic experiences</sub></td>
  </tr>
</table>

</div>


## 📦 Installation

```bash
npm install react-infinite-feed-gallery
# or
yarn add react-infinite-feed-gallery
```

## 🚀 Quick Start

```jsx
import { FeedScroll } from 'react-infinite-feed-gallery';
import 'react-infinite-feed-gallery/styles';

const images = [
  {
    url: 'https://example.com/image1.jpg',
    alt: 'Beautiful landscape',
    likes: 1234,
    views: 5678,
    shares: 90
  },
  // ... more images
];

function App() {
  return (
    <FeedScroll 
      images={images}
      layout="masonry"
      theme="glass"
      onReachEnd={() => console.log('Reached end!')}
    />
  );
}
```

## 🎨 Examples

### Basic Usage

```jsx
import { FeedScroll } from 'react-infinite-feed-gallery';

const MyGallery = () => {
  const images = [
    {
      url: 'https://picsum.photos/400/300?random=1',
      alt: 'Random image 1',
      likes: 123,
      views: 456,
      shares: 7
    },
    // ... more images
  ];

  return (
    <FeedScroll 
      images={images}
      layout="grid"
      theme="light"
    />
  );
};
```

### Advanced Usage with Callbacks

```jsx
import { FeedScroll } from 'react-infinite-feed-gallery';

const AdvancedGallery = () => {
  const handleImageClick = (image, index) => {
    console.log('Clicked image:', image, 'at index:', index);
  };

  const handlePinImage = (image) => {
    console.log('Pinned image:', image);
  };

  const handleReachEnd = () => {
    // Load more images from API
    console.log('Reached end, loading more...');
  };

  return (
    <FeedScroll 
      images={images}
      layout="masonry"
      theme="vintage"
      showStats={true}
      enablePin={true}
      enableComments={true}
      onImageClick={handleImageClick}
      onPinImage={handlePinImage}
      onReachEnd={handleReachEnd}
      pageSize={12}
      autoLoad={true}
    />
  );
};
```

### Dark Mode with Custom Styling

```jsx
import { FeedScroll } from 'react-infinite-feed-gallery';

const DarkGallery = () => {
  return (
    <FeedScroll 
      images={images}
      layout="fullwidth"
      theme="dark"
      className="custom-gallery"
      threshold={0.2}
      showStats={false}
    />
  );
};
```

## 📚 API Reference

### FeedScroll Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `images` | `ImageItem[]` | **Required** | Array of image objects |
| `layout` | `'grid' \| 'masonry' \| 'fullwidth'` | `'grid'` | Layout type |
| `theme` | `'light' \| 'dark' \| 'vintage' \| 'glass'` | `'light'` | Theme style |
| `loading` | `boolean` | `false` | Show loading state |
| `className` | `string` | `''` | Additional CSS classes |
| `threshold` | `number` | `0.1` | Intersection observer threshold |
| `pageSize` | `number` | `12` | Images per page |
| `autoLoad` | `boolean` | `true` | Auto-load on scroll |
| `showStats` | `boolean` | `true` | Show stats overlay |
| `enablePin` | `boolean` | `true` | Enable pin functionality |
| `enableComments` | `boolean` | `false` | Enable comments feature |
| `onReachEnd` | `() => void` | - | Callback when end reached |
| `onImageClick` | `(image, index) => void` | - | Image click handler |
| `onPinImage` | `(image) => void` | - | Pin image handler |
| `onLikeImage` | `(image, index) => void` | - | Like image handler |

### ImageItem Interface

```typescript
interface ImageItem {
  url: string;           // Image URL (required)
  alt?: string;          // Alt text for accessibility
  likes?: number;        // Number of likes
  views?: number;        // Number of views
  shares?: number;       // Number of shares
  id?: string;           // Unique identifier
  title?: string;        // Image title
  description?: string;  // Image description
}
```

## 🎨 Themes

### Light Theme
Clean, modern design with subtle shadows and borders.

### Dark Theme
Dark background with light text and glowing effects.

### Vintage Theme
Warm, nostalgic colors with vintage-inspired styling.

### Glass Theme
Frosted glass effect with backdrop blur and transparency.

## 📱 Layouts

### Grid Layout
Responsive grid with 1-4 columns based on screen size.

### Masonry Layout
Pinterest-style masonry layout with varying heights.

### Full-width Layout
Single column layout for maximum image impact.

## 🔧 Customization

### Custom CSS Classes

```css
/* Override default styles */
.feed-scroll-container {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
}

.image-card {
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}
```

### Custom Animations

```jsx
import { motion } from 'framer-motion';

// Custom animation variants
const customVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 }
};
```

## 🚀 Performance Tips

1. **Optimize Images**: Use WebP format and appropriate sizes
2. **Lazy Loading**: Images load automatically when in viewport
3. **Virtual Scrolling**: Only render visible images
4. **Debounced Scroll**: Prevents excessive API calls

## 🌟 Advanced Features

### Pin to Board
Users can pin images to a local "board" stored in localStorage:

```jsx
const handlePinImage = (image) => {
  // Image is automatically saved to localStorage
  console.log('Image pinned:', image);
};
```

### GIF Detection
GIF images automatically get special effects:

- Pulsing glow animation
- GIF indicator badge
- Enhanced hover effects

### Comments System
Enable trending comments on hover:

```jsx
<FeedScroll 
  enableComments={true}
  // Comments will appear on hover
/>
```

## 🧪 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type checking
npm run type-check

# Linting
npm run lint
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

- 📧 Email: kaleakshay8856@gmail.com

## 📈 Roadmap

- [ ] Virtual scrolling for large datasets
- [ ] Image zoom on click
- [ ] Social sharing integration
- [ ] Advanced filtering options
- [ ] Custom animation presets
- [ ] Server-side rendering support
- [ ] Progressive Web App features

---

Made with ❤️ by Dev-axay18
