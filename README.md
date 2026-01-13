# Step Forward

A personalized daily growth dashboard that displays motivational quotes and actionable daily steps.

![Step Forward](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-5-purple) ![Tailwind](https://img.shields.io/badge/Tailwind-3-cyan)

## Overview

**Step Forward** helps users build consistent daily habits through:
- 📖 Personalized Quote of the Day
- ✅ Small, actionable daily growth steps
- 🎨 Beautiful, calming interface
- ☁️ Optional Contentstack CMS integration

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:5173` to see the app in action.

## Features

- ✨ **Clean, Modern UI** - Soft gradients, smooth animations, minimal design
- 📱 **Fully Responsive** - Works beautifully on all devices
- 🎯 **Interactive Steps** - Check off completed tasks with smooth animations
- ☁️ **Headless CMS Ready** - Integrate with Contentstack or use local data
- ⚡ **Fast & Lightweight** - Built with Vite and React 18
- 🎨 **Customizable** - Easy to theme and modify
- 📦 **Zero Backend** - Works standalone with mock data

## Tech Stack

- **React 18** - Modern functional components with hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Contentstack** - Optional headless CMS integration

## Project Structure

```
step-forward/
├── src/
│   ├── components/           # React components
│   │   ├── Header.jsx       # App header with title
│   │   ├── QuoteCard.jsx    # Daily quote display
│   │   ├── StepForwardList.jsx  # Steps container
│   │   └── StepItem.jsx     # Individual step with checkbox
│   ├── data/                # Local mock data (fallback)
│   │   ├── quote.js         # Default quote
│   │   └── steps.js         # Default steps
│   ├── services/            # External services
│   │   └── contentstack.js  # Contentstack API integration
│   ├── styles/              # Styling
│   │   └── theme.css        # Theme variables and custom styles
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles
├── contentstack-schemas/    # Contentstack setup
│   ├── daily_quote.json     # Quote content type
│   ├── daily_steps.json     # Steps content type
│   ├── sample-entries/      # Sample data for import
│   └── README.md            # Schema documentation
├── index.html               # HTML entry point
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
└── README.md                # This file
```

## Documentation

- **[SETUP.md](./SETUP.md)** - Detailed setup and configuration guide
- **[CONTENTSTACK_INTEGRATION.md](./CONTENTSTACK_INTEGRATION.md)** - 5-minute Contentstack setup
- **[contentstack-schemas/README.md](./contentstack-schemas/README.md)** - Content type schemas

## Using With Contentstack

### 1. Setup (5 minutes)

See **[CONTENTSTACK_INTEGRATION.md](./CONTENTSTACK_INTEGRATION.md)** for step-by-step guide.

### 2. Import Content Types

Located in `contentstack-schemas/`:
- `daily_quote.json` - Quote content type
- `daily_steps.json` - Steps content type

### 3. Add Sample Content

Use provided samples in `contentstack-schemas/sample-entries/`:
- 7 motivational quotes
- 5 step collections
- Ready to import

### 4. Configure

```bash
cp env.example .env
# Add your Contentstack credentials
```

## Using Without Contentstack

The app works perfectly standalone:
- Uses mock data from `src/data/`
- No configuration needed
- Great for development and demos

## Development

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

### Customization

#### Update Colors

Edit `src/styles/theme.css`:

```css
:root {
  --color-accent: #6366f1;  /* Change accent color */
  --shadow-md: ...;          /* Adjust shadows */
}

body {
  background: linear-gradient(...);  /* Modify gradient */
}
```

#### Update Content

Edit mock data:
- `src/data/quote.js` - Default quote
- `src/data/steps.js` - Default steps

## Deployment

### Contentstack Launch (Recommended)

Deploy directly to Contentstack Launch for seamless integration:

```bash
# Push to Git
git init
git add .
git commit -m "Initial commit"
git push origin main

# Deploy via Launch UI or CLI
# See DEPLOY_LAUNCH.md for complete guide
```

**Quick Steps:**
1. Connect your Git repository to Launch
2. Configure build settings (Framework: Vite, Output: dist)
3. Add environment variables
4. Deploy!

See **[DEPLOY_LAUNCH.md](./DEPLOY_LAUNCH.md)** for detailed instructions.

### Vercel

```bash
vercel
```

### Netlify

```bash
netlify deploy --prod
```

### Environment Variables

For production with Contentstack, set:
- `VITE_CONTENTSTACK_API_KEY`
- `VITE_CONTENTSTACK_DELIVERY_TOKEN`
- `VITE_CONTENTSTACK_ENVIRONMENT` (e.g., dev2, production, staging)

## Design Philosophy

**Calm & Motivational**
- Soft color palette
- Subtle animations
- Generous whitespace
- Clear typography

**Minimal Yet Functional**
- No unnecessary features
- Every element serves a purpose
- Clean, uncluttered interface

**Production-Ready**
- Clean, maintainable code
- Semantic HTML
- Accessible components
- Error handling
- Responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] User accounts and personalization
- [ ] Progress tracking and history
- [ ] Achievement system
- [ ] Social sharing
- [ ] Daily reminders/notifications
- [ ] Mobile app (React Native)
- [ ] Multiple themes
- [ ] Analytics dashboard

## Contributing

This is a production-ready starting point. Feel free to:
- Customize the design
- Add new features
- Integrate additional services
- Extend the data model

## License

MIT

## Support

- 📖 [Contentstack Documentation](https://www.contentstack.com/docs)
- ⚡ [Vite Documentation](https://vitejs.dev)
- ⚛️ [React Documentation](https://react.dev)
- 🎨 [Tailwind Documentation](https://tailwindcss.com)

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
