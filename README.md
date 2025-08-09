<h1 align="center">
  🌌 React Infinite Feed Gallery
</h1>

<p align="center">
  <img src="https://badge.fury.io/js/react-infinite-feed-gallery.svg" />
  <img src="https://img.shields.io/npm/dm/react-infinite-feed-gallery.svg" />
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white" />
</p>

<p align="center">
<img src="https://github.com/Dev-axay18/FeedStreamer/blob/main/Assets/react.js.png?raw=true" width="100%" alt="scroll icon" />

</p>

---

<p align="center">
🚀 <b>Responsive, Animated, Aesthetic Infinite Image Feed for React</b><br/>
✨ Smooth scroll · 🎨 Multiple Themes · 💡 Customizable · ⚡ Production Ready
</p>

---


## ✨ Features

<div align="center">

<table>
  <tr>
    <td align="center" width="200"><img src="https://upload.wikimedia.org/wikipedia/commons/5/55/RocketChat_Logo_1024x1024.png" width="30"/><br><b>Infinite Scroll</b><br><sub>🚀 Auto-load images on scroll</sub></td>
    <td align="center" width="200"><img src="https://img.icons8.com/color/48/color-palette.png" width="30"/><br><b>Multiple Themes</b><br><sub>🎨 Light, Dark, Vintage, Glass</sub></td>
    <td align="center" width="200"><img src="https://img.uxcel.com/briefs/responsive-landing-page-for-animal-care-service-1743689050422.svg" width="30"/><br><b>Responsive Layouts</b><br><sub>📱 Grid, Masonry, Full-width</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://img.icons8.com/fluency/48/flash-on.png" width="30"/><br><b>Lazy Loading</b><br><sub>⚡ Load only when needed</sub></td>
    <td align="center"><img src="https://cdn-icons-png.flaticon.com/512/3322/3322068.png" width="30"/><br><b>Smooth Animations</b><br><sub>🎭 Powered by Framer Motion</sub></td>
    <td align="center"><img src="https://img.icons8.com/color/48/combo-chart.png" width="30"/><br><b>Stats Overlay</b><br><sub>📊 Likes, views & shares on hover</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://cdn-icons-png.flaticon.com/512/3722/3722653.png" width="30"/><br><b>Pin to Board</b><br><sub>📌 Local save to storage</sub></td>
    <td align="center"><img src="https://cdn.vectorstock.com/i/500p/38/64/flat-design-photo-frame-icon-vector-20283864.jpg" width="30"/><br><b>GIF Support</b><br><sub>🎬 Cool effects on GIFs</sub></td>
    <td align="center"><img src="https://cdn-icons-png.flaticon.com/512/10552/10552295.png" width="30"/><br><b>Accessibility</b><br><sub>♿ Keyboard & screen reader</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://img.icons8.com/color/48/bright-moon.png" width="30"/><br><b>Dark Mode</b><br><sub>🌙 Auto or prop-driven</sub></td>
    <td align="center"><img src="https://img.icons8.com/color/48/typescript.png" width="30"/><br><b>TypeScript</b><br><sub>🎯 Full TS support</sub></td>
    <td align="center"><img src="https://cdn-icons-png.flaticon.com/512/1025/1025639.png" width="30"/><br><b>And More!</b><br><sub>💥 Futuristic experiences</sub></td>
  </tr>
</table>

</div>

### 🙌 Special Thanks

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/darshitachaurasia">
        <img src="https://i.pinimg.com/736x/68/de/16/68de16c5f54dd9b4ff354af4acf39a42.jpg" width="200" style="border-radius: 50%;" alt="johndoe" />
        <br />
        <br/>
        <strong>@darshitachaurasia</strong>
      </a>
       <p>✨💡🌸</p>
      <br />
      🛠️ Helped fix build errors and improved test workflow.
    </td>
  </tr>
</table>

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
----

<h2 align="center">
  📚 <span style="font-weight:bold; font-size:1.6rem;">FeedScroll API Reference</span>
</h2>

<table align="center">
  <thead>
    <tr>
      <th>🧩 Prop</th>
      <th>🔠 Type</th>
      <th>🧷 Default</th>
      <th>📖 Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>images</code></td>
      <td><code>ImageItem[]</code></td>
      <td><b>Required</b></td>
      <td>Array of image objects</td>
    </tr>
    <tr>
      <td><code>layout</code></td>
      <td><code>'grid' | 'masonry' | 'fullwidth'</code></td>
      <td><code>'grid'</code></td>
      <td>Layout type for gallery</td>
    </tr>
    <tr>
      <td><code>theme</code></td>
      <td><code>'light' | 'dark' | 'vintage' | 'glass'</code></td>
      <td><code>'light'</code></td>
      <td>Visual theme of the feed</td>
    </tr>
    <tr>
      <td><code>loading</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td>Show loading state</td>
    </tr>
    <tr>
      <td><code>className</code></td>
      <td><code>string</code></td>
      <td><code>''</code></td>
      <td>Custom CSS classes</td>
    </tr>
    <tr>
      <td><code>threshold</code></td>
      <td><code>number</code></td>
      <td><code>0.1</code></td>
      <td>Intersection observer threshold</td>
    </tr>
    <tr>
      <td><code>pageSize</code></td>
      <td><code>number</code></td>
      <td><code>12</code></td>
      <td>Images per page</td>
    </tr>
    <tr>
      <td><code>autoLoad</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>Auto-load images on scroll</td>
    </tr>
    <tr>
      <td><code>showStats</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>Show image stats overlay</td>
    </tr>
    <tr>
      <td><code>enablePin</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>Enable pin/save feature</td>
    </tr>
    <tr>
      <td><code>enableComments</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td>Enable comments below images</td>
    </tr>
    <tr>
      <td><code>onReachEnd</code></td>
      <td><code>() => void</code></td>
      <td>–</td>
      <td>Callback when feed ends</td>
    </tr>
    <tr>
      <td><code>onImageClick</code></td>
      <td><code>(image, index) => void</code></td>
      <td>–</td>
      <td>Callback on image click</td>
    </tr>
    <tr>
      <td><code>onPinImage</code></td>
      <td><code>(image) => void</code></td>
      <td>–</td>
      <td>Handler when pin is clicked</td>
    </tr>
    <tr>
      <td><code>onLikeImage</code></td>
      <td><code>(image, index) => void</code></td>
      <td>–</td>
      <td>Handler when like is clicked</td>
    </tr>
  </tbody>
</table>

----

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

## 🌈 Themes & Layouts

<p align="center">
  <img src="https://github.com/Dev-axay18/FeedStreamer/blob/main/Assets/folder.gif?raw=true" width="100" style="border-radius: 8px;" />
  <img src="https://github.com/Dev-axay18/FeedStreamer/blob/main/Assets/music.gif?raw=true" width="100" style="border-radius: 8px;" />
  <img src="https://github.com/Dev-axay18/FeedStreamer/blob/main/Assets/pallete.gif?raw=true" width="100" style="border-radius: 8px;" />
  <img src="https://github.com/Dev-axay18/FeedStreamer/blob/main/Assets/party.gif?raw=true" width="100" style="border-radius: 8px;" />
</p>



---

### 🎨 Theme Showcase

| Theme         | Preview                                                                                           | Description                                                    |
|---------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| **Light**     | ![Light Theme](https://img.icons8.com/color/96/sun--v1.png)                                       | Clean, modern look with subtle shadows and smooth edges.       |
| **Dark**      | ![Dark Theme](https://img.icons8.com/color/96/moon-symbol.png)                                    | Elegant and bold with glowing text on a dark canvas.           |
| **Vintage**   | ![Vintage Theme](https://img.icons8.com/color/96/old-time-camera.png)                             | Warm, nostalgic tones with retro-styled elements.              |
| **Glass**     | ![Glass Theme](https://img.icons8.com/color/96/wine-glass.png)                                    | Frosted glass UI with backdrop blur and layered transparency.  |

---

### 📐 Layout Options

| Layout Type     | Preview                                                                                      | Description                                                  |
|------------------|----------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| **Grid**         | <img src="https://github.com/Dev-axay18/FeedStreamer/blob/main/Assets/grid.png?raw=true" width="60" />        | Responsive columns (1–4) adapting to device width.           |
| **Masonry**      | <img src="https://github.com/Dev-axay18/FeedStreamer/blob/main/Assets/grid%20(1).png?raw=true" width="60" />  | Pinterest-style freeform layout with dynamic heights.        |
| **Fullwidth**    | <img src="https://github.com/Dev-axay18/FeedStreamer/blob/main/Assets/width.png?raw=true" width="60" />       | Focused, single-column layout for full visual impact.        |


---

<div align="center" style="margin-top: 2rem;">
  <img src="https://media.tenor.com/cTuOMXdthtIAAAAM/agoney-scroll-down.gif" width="190" alt="Scroll down" />
  <p><em>Explore and switch themes live in your app effortlessly.</em></p>
</div>


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
### Install dependencies
```bash
npm install
```

### Start development server
```bash
npm run dev
```
### Build for production
```bash
npm run build
```
### Type checking
```bash
npm run type-check
```
### Linting
```bash
npm run lint
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.
---

## 🤝 Contributing

### We welcome contributions from the community! If you have ideas, improvements, or bug fixes, follow the steps below to make your contribution count 🚀

### 🛠️ Steps to Contribute

1. 🍴 **Fork** the repository  
2. 🌿 **Create a branch** for your feature or fix  
   ```bash
   git checkout -b feature/your-amazing-feature
   ```
3. 💾 **Commit your changes** with a clear message

   ```bash
   git commit -m "✨ Add your amazing feature"
   ```
4. 🚀 **Push to your forked repo**

   ```bash
   git push origin feature/your-amazing-feature
   ```
5. 📬 **Open a Pull Request** and describe what you’ve done

---

### 💡 Tips for a Great PR

* Write clear, concise commit messages
* Keep your changes focused on one feature/fix
* Follow existing code style and naming conventions
* If applicable, update documentation and tests

🙌 Thank you for making this project better!
---

## 📞 Support

- 📧 Email: kaleakshay8856@gmail.com

## 📈 Roadmap

- [x] Virtual scrolling for large datasets
- [x] Image zoom on click
- [x] Social sharing integration
- [x] Advanced filtering options
- [x] Custom animation presets
- [x] Server-side rendering support
- [x] Progressive Web App features

---

Made with ❤️ by Dev-axay18

