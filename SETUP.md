# Step Forward - Setup Guide

## Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn
- Contentstack account (optional - app works with mock data)

## Installation

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration (Optional)

If you want to fetch data from Contentstack:

```bash
# Copy the example env file
cp env.example .env

# Edit .env and add your Contentstack credentials
```

Your `.env` file should look like this:

```env
VITE_CONTENTSTACK_API_KEY=your_api_key_here
VITE_CONTENTSTACK_DELIVERY_TOKEN=your_delivery_token_here
VITE_CONTENTSTACK_ENVIRONMENT=dev2
```

**Where to find these values:**
1. Log in to Contentstack
2. Go to Settings → Tokens
3. Create a new Delivery Token or use an existing one
4. Copy the API Key, Delivery Token, and Environment name

### 3. Import Content Types to Contentstack (Optional)

If using Contentstack, import the content type schemas:

```bash
# Via Contentstack CLI
npm install -g @contentstack/cli
csdx config:set:region NA  # Set your region: NA, EU, AZURE-NA, AZURE-EU, or GCP-NA
csdx auth:login
csdx cm:stacks:import --data-dir ./contentstack-schemas
```

Or manually via UI:
1. Go to Content Models → Content Types
2. Click Import
3. Upload `contentstack-schemas/daily_quote.json`
4. Upload `contentstack-schemas/daily_steps.json`

### 4. Add Sample Content (Optional)

Import or manually create entries using the samples in `contentstack-schemas/sample-entries/`

**Important:** Make sure to mark at least one quote and one steps collection as `active: true`

## Running the Application

### Development Mode

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Production Build

```bash
npm run build
npm run preview
```

## How It Works

### Data Flow

1. **With Contentstack**: 
   - App attempts to fetch data from Contentstack API
   - Uses environment variables for authentication
   - Falls back to local mock data if API fails

2. **Without Contentstack**:
   - App uses local mock data from `src/data/`
   - Works perfectly without any configuration

### File Structure

```
step-forward/
├── src/
│   ├── components/          # React components
│   ├── data/                # Local mock data (fallback)
│   ├── services/            # Contentstack API service
│   └── styles/              # CSS and theme
├── contentstack-schemas/    # Contentstack setup files
│   ├── daily_quote.json     # Quote content type schema
│   ├── daily_steps.json     # Steps content type schema
│   └── sample-entries/      # Sample data for import
└── env.example              # Environment variables template
```

## Features

### Current Features
- ✅ Daily motivational quotes
- ✅ Personalized daily growth steps
- ✅ Interactive step completion with checkboxes
- ✅ Smooth animations and transitions
- ✅ Responsive design
- ✅ Beautiful gradient background
- ✅ Contentstack integration ready

### Data Management
- ✅ Fetches active quote from Contentstack
- ✅ Fetches active steps collection from Contentstack
- ✅ Falls back to local data if API unavailable
- ✅ Handles errors gracefully

## Customization

### Updating Local Mock Data

Edit these files for fallback data:
- `src/data/quote.js` - Default quote
- `src/data/steps.js` - Default steps

### Styling

- `src/styles/theme.css` - Colors, shadows, variables
- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - Global styles

### Colors

Current theme uses:
- Background: Soft gradient (blue/lavender/pink)
- Accent: Indigo (#6366f1)
- Text: Neutral grays

To change, edit `src/styles/theme.css` CSS variables.

## Troubleshooting

### App not fetching from Contentstack

1. Check `.env` file exists and has correct values
2. Verify environment variables start with `VITE_`
3. Restart dev server after changing `.env`
4. Check browser console for errors
5. Verify content types are published in Contentstack
6. Ensure at least one entry is marked as `active: true`

### Build errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Port already in use

```bash
# Use a different port
npm run dev -- --port 3000
```

## Contentstack Content Type Fields

### Daily Quote
- `title` (text) - Internal title
- `quote_text` (text) - The quote
- `author` (text) - Author name
- `date` (date) - Optional display date
- `active` (boolean) - Is this the active quote?

### Daily Steps
- `title` (text) - Internal title
- `steps` (group, multiple) - Collection of steps
  - `step_title` (text) - Step title
  - `description` (text) - Step description
  - `order` (number) - Display order
- `date` (date) - Optional display date
- `active` (boolean) - Is this the active steps collection?

## Deployment

### Build for Production

```bash
npm run build
```

The `dist/` folder contains the production build.

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Add environment variables in Vercel dashboard:
- `VITE_CONTENTSTACK_API_KEY`
- `VITE_CONTENTSTACK_DELIVERY_TOKEN`
- `VITE_CONTENTSTACK_ENVIRONMENT`

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

Add environment variables in Netlify dashboard.

## Next Steps

1. **Content Strategy**: Plan daily/weekly content rotation
2. **Personalization**: Add user preferences
3. **Analytics**: Track which quotes/steps resonate
4. **Sharing**: Add social sharing features
5. **Progress Tracking**: Save completion history
6. **Notifications**: Daily reminders

## Support

- [Contentstack Documentation](https://www.contentstack.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)

## License

MIT
