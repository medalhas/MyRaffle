# 🎲 MyRaffle

A raffle application built with React, TypeScript, and Tailwind CSS. Features an animated slot machine interface that makes raffles engaging and fun!

## ✨ Features

- 🎰 **Animated Slot Machine**: Realistic spinning slot machine animation with synchronized number display
- ⚡ **Real-time Animation**: Smooth 3-second spinning animation that ends with the winning number
- 💡 **Blinking Lights**: Animated casino-style lights around the slot machine
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices
- 🔄 **Easy Reset**: Quick reset functionality to run multiple raffles
- 📅 **Timestamp**: ISO formatted timestamps for each raffle result

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd MyRaffle
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
   Navigate to `http://localhost:5173` to see the application

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## 🎮 How to Use

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
   - Click "🔄 New Raffle" to start over

## 🏗️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 3.4.18
- **Build Tool**: Vite 7.1.7
- **CSS Processing**: PostCSS with Autoprefixer
- **Code Quality**: ESLint with TypeScript support

## 🎨 Design Features

### Slot Machine Animation
- Custom CSS keyframe animations for realistic spinning effect
- Synchronized number sequence that ensures the winning number appears at the right time
- Metallic gradient styling for authentic casino appearance

### Visual Effects
- Blinking yellow lights with staggered animation delays
- Gradient backgrounds and shadows for depth
- Smooth transitions and hover effects
- Focus states for accessibility

### Responsive Layout
- Mobile-first design approach
- Flexible layouts that work on all screen sizes
- Touch-friendly interface elements

## 📁 Project Structure

```
MyRaffle/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.tsx          # Main application component
│   ├── App.css          # Application styles
│   ├── index.css        # Global styles and Tailwind imports
│   ├── main.tsx         # React application entry point
│   └── slot-machine.css # Slot machine specific animations
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite build tool configuration
└── README.md           # Project documentation
```

## ⚙️ Configuration

### Tailwind CSS
The project uses a custom Tailwind configuration with:
- Custom spacing values for slot machine dimensions
- Custom animations for spinning and blinking effects
- Custom color palette for metallic appearance
- Custom box shadows for 3D effects

### TypeScript
Strict TypeScript configuration for better code quality and developer experience.

### Vite
Modern build tool configuration with:
- React plugin for JSX support
- Fast hot module replacement (HMR)
- Optimized production builds

## 🔧 Customization

### Changing Animation Duration
Edit the slot machine animation timing in `tailwind.config.js`:
```javascript
animation: {
  'slot-spin': 'slotSpin 3s cubic-bezier(0.23, 1, 0.32, 1) forwards',
}
```

### Modifying Colors
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

### Adjusting Maximum Number Limit
Change the validation limit in `App.tsx`:
```typescript
if (num > 10000) {
  setError('Maximum number cannot exceed 10,000')
  return false
}
```

## 🐛 Troubleshooting

### Development Server Issues
If the development server doesn't start:
1. Make sure all dependencies are installed: `npm install`
2. Clear the node_modules and reinstall: `rm -rf node_modules && npm install`
3. Check that port 5173 is available

### Styling Issues
If Tailwind CSS styles aren't working:
1. Restart the development server: `npm run dev`
2. Clear browser cache with a hard refresh (Ctrl+F5 or Cmd+Shift+R)
3. Verify PostCSS configuration is correct

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you encounter any issues or have questions, please open an issue in the GitHub repository.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
