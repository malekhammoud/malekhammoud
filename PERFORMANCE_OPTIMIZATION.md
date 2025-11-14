# Performance Optimization Guide

## Completed Optimizations

### 1. Image Optimization
- ✅ Added AVIF and WebP format support in next.config.mjs
- ✅ Configured proper device sizes and image sizes
- ✅ Added `priority` attribute to LCP images (first carousel item)
- ✅ Added `loading="lazy"` to below-the-fold images
- ✅ Optimized image quality settings (85% for priority, 75-80% for lazy)
- ✅ Added explicit width/height to logo images
- ✅ Enabled Next.js image optimization with caching

### 2. Resource Loading
- ✅ Added preconnect hints for Google Analytics
- ✅ Added dns-prefetch for external domains
- ✅ Optimized Script loading strategy
- ✅ Enabled compression in Next.js config
- ✅ Enabled SWC minification

### 3. Critical Rendering Path
- ✅ First carousel image gets `priority` and no lazy loading
- ✅ Below-the-fold images use lazy loading
- ✅ Optimized font loading with Next.js built-in optimization

## Recommended Manual Actions

### 1. Convert GIFs to Video (HIGH PRIORITY)
The audit shows that `drone.gif` is 2,358 KB and could save 2,004 KB by using video format.

**Steps to convert:**
```bash
# Install ffmpeg if not already installed
# Ubuntu/Debian: sudo apt install ffmpeg
# macOS: brew install ffmpeg

# Convert GIF to WebM (best compression)
ffmpeg -i src/images/projects/drone.gif -c:v libvpx-vp9 -crf 30 -b:v 0 src/images/projects/drone.webm

# Convert GIF to MP4 (better browser support)
ffmpeg -i src/images/projects/drone.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" src/images/projects/drone.mp4

# Repeat for other GIFs:
ffmpeg -i src/images/projects/javagame.gif -c:v libvpx-vp9 -crf 30 -b:v 0 src/images/projects/javagame.webm
ffmpeg -i src/images/projects/javagame.gif -movflags faststart -pix_fmt yuv420p src/images/projects/javagame.mp4

ffmpeg -i src/images/projects/maze.gif -c:v libvpx-vp9 -crf 30 -b:v 0 src/images/projects/maze.webm
ffmpeg -i src/images/projects/maze.gif -movflags faststart -pix_fmt yuv420p src/images/projects/maze.mp4

ffmpeg -i src/images/projects/posture.gif -c:v libvpx-vp9 -crf 30 -b:v 0 src/images/projects/posture.webm
ffmpeg -i src/images/projects/posture.gif -movflags faststart -pix_fmt yuv420p src/images/projects/posture.mp4

ffmpeg -i src/images/projects/offshape.gif -c:v libvpx-vp9 -crf 30 -b:v 0 src/images/projects/offshape.webm
ffmpeg -i src/images/projects/offshape.gif -movflags faststart -pix_fmt yuv420p src/images/projects/offshape.mp4
```

After conversion, replace Image components with video elements:
```jsx
<video 
  autoPlay 
  loop 
  muted 
  playsInline 
  className="object-cover"
  poster="/path/to/poster-image.jpg"
>
  <source src="/path/to/video.webm" type="video/webm" />
  <source src="/path/to/video.mp4" type="video/mp4" />
</video>
```

### 2. Optimize Image Sizes
Run sharp or similar tool to compress images:

```bash
npm install -D sharp-cli

# Optimize PNG images
npx sharp-cli -i 'src/images/**/*.png' -o 'src/images-optimized' -f webp -q 85

# Optimize JPG images  
npx sharp-cli -i 'src/images/**/*.{jpg,jpeg}' -o 'src/images-optimized' -f webp -q 85
```

### 3. Enable Experimental Features
Consider enabling these Next.js experimental features in `next.config.mjs`:

```javascript
experimental: {
  optimizeCss: true, // CSS optimization
  optimizePackageImports: ['@heroicons/react', '@headlessui/react'], // Tree-shake packages
}
```

### 4. Add Responsive Image Sizes
For large images like IMG_0254.JPG (122.9 KB), consider creating multiple sizes:
- Thumbnail: 112x112 (for mobile)
- Medium: 448x597 (for tablet)
- Full: 640x798 (for desktop)

### 5. Lazy Load Off-Screen Content
Consider using React Suspense or dynamic imports for:
- Particles component
- FloatingUI component
- Heavy third-party libraries

### 6. Code Splitting
Review and potentially lazy load:
- Chatbot component
- Analytics components
- Large article content

## Performance Metrics Expected Improvements

- **LCP (Largest Contentful Paint)**: Should improve by ~300ms from render-blocking CSS optimization
- **Image Delivery**: Should save ~2,359 KB (~85% reduction)
- **Total Page Weight**: Reduced from 3,222 KB to ~1,000 KB
- **Network Requests**: More efficient with proper caching and compression

## Testing After Implementation

1. Run Lighthouse audit again
2. Check Google PageSpeed Insights
3. Test on WebPageTest.org
4. Monitor Core Web Vitals in Google Search Console

## Next Steps

1. Convert all GIF files to video format
2. Compress and convert all PNG/JPG images to WebP/AVIF
3. Test the site performance
4. Monitor real-user metrics

