# 🎲 MyRaffle - Progressive Web App

A modern raffle application built with React, TypeScript, and Tailwind CSS. Features an animated slot machine interface and Progressive Web App (PWA) capabilities for offline use and native app-like experience!

## 🌐 Live Demo

**Try it now:** [https://myraffle-149da.web.app](https://myraffle-149da.web.app)

Experience the full MyRaffle application with all its features - install it as an app on your device!

## ✨ Features

### 🎰 **Core Features**
- **Animated Slot Machine**: Realistic spinning slot machine animation with synchronized number display
- **Re-run Functionality**: Run multiple raffles with the same settings but new random results
- **Real-time Animation**: Smooth 3-second spinning animation that ends with the winning number
- **Blinking Lights**: Animated casino-style lights around the slot machine
- **Timestamp Tracking**: ISO formatted timestamps for each raffle result

### 📱 **Progressive Web App (PWA)**
- **Installable**: Install as a native app on any device (mobile, tablet, desktop)
- **Offline Support**: Works completely offline with service worker caching
- **App-like Experience**: Standalone display mode without browser UI
- **Background Sync**: Handles offline data when connection is restored
- **Smart Install Prompt**: Subtle, non-intrusive installation suggestions

### 🔧 **Technical Features**
- **Responsive Design**: Perfect experience on desktop and mobile devices
- **Type Safety**: Full TypeScript support with proper interfaces and type definitions
- **Clean Architecture**: Modular component structure with separation of concerns
- **Reusable Components**: Well-structured components that can be easily extended
- **Online/Offline Detection**: Visual indicators for connection status

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:medalhas/MyRaffle.git
   cd MyRaffle
   ```

2. **Install dependencies**
   ```bash
   yarn
   ```

3. **Start the development server**
   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

## 🛠️ Available Scripts

- `yarn dev` - Start the development server
- `yarn build` - Build the project for production
- `yarn preview` - Preview the production build locally
- `yarn lint` - Run ESLint to check for code issues

## 🎮 How to Use

### 📱 **Install as PWA (Recommended)**
1. **Visit the app** in your browser
2. **Look for install prompt** - A subtle banner will appear above the title
3. **Click "📱 Install MyRaffle as an app"** to install on your device
4. **Use offline** - Works completely without internet connection

### 🎯 **Running Raffles**
1. **Enter Raffle Details**
   - Add a descriptive title for your raffle (e.g., "Weekly Prize Draw")
   - Set the maximum number for the raffle range (1 to 10,000)

2. **Run the Raffle**
   - Click the "🎲 Run Raffle" button
   - Watch the slot machine animation for 3 seconds
   - The winning number will be displayed in the slot machine window

3. **View Results**
   - See the winning number prominently displayed
   - View the raffle title and timestamp
   - **🎲 Re-run Raffle**: Keep same settings, generate new winner
   - **🔄 New Raffle**: Start fresh with new settings

## 🏗️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 3.4.18
- **Build Tool**: Vite 7.1.7
- **Progressive Web App**: Service Worker with offline caching
- **CSS Processing**: PostCSS with Autoprefixer
- **Code Quality**: ESLint with TypeScript support

## 🎨 Design Features

### 🎰 Slot Machine Animation
- Custom CSS keyframe animations for realistic spinning effect
- Dynamic number sequence generation that ensures fresh results on re-runs
- Synchronized animation that ensures the winning number appears at the right time
- Metallic gradient styling for authentic casino appearance

### 📱 PWA Features
- **Web App Manifest**: Proper app metadata for installation
- **Service Worker**: Offline functionality and smart caching strategy
- **Responsive Icons**: SVG-based icons that scale perfectly on all devices
- **Standalone Mode**: Full-screen app experience without browser chrome

### 🎨 Visual Effects
- Blinking orange lights with staggered animation delays
- Gradient backgrounds and shadows for depth
- Smooth transitions and hover effects
- Focus states for accessibility
- Offline/online status indicators

### 📱 Responsive Layout
- Mobile-first design approach
- Flexible layouts that work on all screen sizes
- Touch-friendly interface elements
- Progressive improvement for PWA features

## 📁 Project Structure

```
MyRaffle/
├── public/
│   ├── favicon.svg           # App icon (scalable SVG)
│   ├── manifest.json         # PWA manifest for installation
│   ├── sw.js                 # Service worker for offline functionality
│   └── browserconfig.xml     # Microsoft Tiles configuration
├── src/
│   ├── assets/
│   │   └── logo.svg          # Application logo
│   ├── components/           # Reusable React components
│   │   └── SlotMachine.tsx   # Slot machine component with animation logic
│   ├── model/                # TypeScript interfaces and types
│   │   └── RaffleResult.ts   # RaffleResult interface definition
│   ├── App.tsx               # Main app with PWA install logic and state management
│   ├── index.css             # Global styles and Tailwind imports
│   ├── main.tsx              # React entry point with service worker registration
│   └── slot-machine.css      # Slot machine specific animations
├── index.html                # HTML template with PWA meta tags
├── package.json              # Project dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration with custom animations
├── postcss.config.js         # PostCSS configuration
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite build tool configuration
└── README.md                 # Project documentation
```

## 🏛️ Architecture

The application follows a clean, modular architecture with PWA features:

### 📱 PWA Layer (`/public/`)
- **manifest.json**: Web app manifest defining installation behavior, icons, and display modes
- **sw.js**: Service worker providing offline functionality, caching strategies, and background sync
- **browserconfig.xml**: Microsoft Tiles configuration for Windows devices

### 🧩 Components Layer (`/src/components/`)
- **SlotMachine.tsx**: All slot machine functionality including animation logic, number sequence generation, and visual rendering
- Dynamic key-based regeneration system for fresh animations on re-runs
- Reusable and self-contained components with clear props interfaces

### 📊 Model Layer (`/src/model/`)
- **RaffleResult.ts**: Type definitions and interfaces for data structures
- Type definitions ensure type safety across the application
- Easy to extend and maintain

### 🎯 Application Layer (`/src/`)
- **App.tsx**: Main application state management, PWA install prompts, online/offline detection, and orchestration
- **main.tsx**: React entry point with service worker registration
- Clean separation between UI components and application logic
- State management using React hooks with PWA integration

### 🎨 Styling
- **index.css**: Global styles, Tailwind CSS imports, and custom CSS properties
- **slot-machine.css**: Component-specific animations and styles that can't be handled by Tailwind
- Modular CSS approach with PWA-specific responsive design

## ⚙️ Configuration

### 🔧 PWA Configuration
The project includes complete PWA setup:
- **Service Worker**: Caching strategy for offline functionality
- **Web App Manifest**: Installation behavior and app metadata
- **Icons**: Scalable SVG icons for all device sizes
- **Offline Detection**: Visual indicators for connection status

### 🎨 Tailwind CSS
The project uses a custom Tailwind configuration with:
- Custom spacing values for slot machine dimensions
- Custom animations for spinning and blinking effects
- Custom color palette for metallic appearance and orange theme
- Custom box shadows for 3D effects

### 📘 TypeScript
Strict TypeScript configuration for better code quality and developer experience with ESLint.

### ⚡ Vite
Modern build tool configuration with:
- React plugin for JSX support
- Fast hot module replacement (HMR)
- Optimized production builds with PWA assets

## 🔧 Customization

### 🎰 Changing Animation Duration
Edit the slot machine animation timing in `tailwind.config.js`:
```javascript
animation: {
  'slot-spin': 'slotSpin 3s cubic-bezier(0.23, 1, 0.32, 1) forwards',
}
```

### 🎨 Modifying Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  'slot-gray': {
    100: '#f0f0f0',
    200: '#e8e8e8',
    // ... more colors
  }
}
```

### 📊 Adjusting Maximum Number Limit
Change the validation limit in `App.tsx`:
```typescript
if (num > 10000) {
  setError('Maximum number cannot exceed 10,000')
  return false
}
```

### 📱 PWA Customization
Modify PWA settings in `public/manifest.json`:
```json
{
  "name": "MyRaffle - Random Number Generator",
  "theme_color": "#f97316",
  "background_color": "#ffffff"
}
```

## 🐛 Troubleshooting

### 🚀 Development Server Issues
If the development server doesn't start:
1. Make sure all dependencies are installed: `npm install`
2. Clear the node_modules and reinstall: `rm -rf node_modules && npm install`
3. Check that port 5173 is available

### 🎨 Styling Issues
If Tailwind CSS styles aren't working:
1. Restart the development server: `npm run dev`
2. Clear browser cache with a hard refresh (Ctrl+F5 or Cmd+Shift+R)
3. Verify PostCSS configuration is correct

### 📱 PWA Issues
If PWA features aren't working:
1. **Install prompt not showing**: PWA criteria must be met (HTTPS, valid manifest, service worker)
2. **Offline functionality**: Clear browser cache and re-register service worker
3. **Installation issues**: Check browser console for manifest or service worker errors
4. **Development**: PWA features work best in production builds (`npm run build && npm run preview`)

### 🔄 Re-run Animation Issues
If slot machine shows same results on re-run:
1. The `raffleKey` state should increment on each run
2. Check that SlotMachine component has the `key` prop
3. Verify `generateNumberSequence` is called fresh each time

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you encounter any issues or have questions, please open an issue in the GitHub repository.

---

**Built with ❤️ using React, TypeScript, Tailwind CSS, and PWA technologies**

*Install it on your device for the best offline raffle experience! 🎰📱*
