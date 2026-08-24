# Personal Life API - Frontend

A retro-brutalist, Windows 95-inspired frontend for the Personal Life API. Built with React, Vite, and Tailwind CSS.

## Design System

**OBSOLESCENCE PROTOCOL** - A digital archaeology aesthetic that combines:
- PC-98 / MS-DOS interface styling
- Win95 3D beveling and UI patterns
- Glitch art and CRT scanlines
- Dark surrealist horror undertones
- Retro-futuristic terminal aesthetics

## Features

- 🖥️ **Win95-style Windows**: All content in draggable-style boxes with 3D beveling
- 🎨 **Glitch Effects**: Chromatic aberration text and corrupted aesthetics
- 📺 **CRT Overlay**: Scanlines and vintage monitor effects
- 🎭 **WebGL Background**: Animated shader for atmospheric depth
- 📱 **Responsive**: Desktop windows collapse to mobile stack
- 🔄 **Real-time Updates**: Fetches from API every 5 minutes

## Setup

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Make sure the backend API is running on `http://localhost:3000`

3. Start the dev server:
```bash
npm run dev
```

4. Open http://localhost:5173

## Build for Production

```bash
npm run build
npm run preview
```

## Design Tokens

The complete design system from Stitch is implemented including:
- Custom color palette (toxic magenta, terminal green, midnight blue)
- Typography (Newsreader, JetBrains Mono, Space Mono)
- 4px baseline grid
- Win95 beveling styles
- Dithering patterns
- Glitch animations

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── ShaderBackground.jsx
│   │   ├── Header.jsx
│   │   ├── StatusWindow.jsx
│   │   ├── FeedWindow.jsx
│   │   ├── LifeEventCard.jsx
│   │   └── BottomNav.jsx
│   ├── api/
│   │   └── lifeFeed.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
└── package.json
```
