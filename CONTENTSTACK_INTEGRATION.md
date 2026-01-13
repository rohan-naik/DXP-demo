# Quick Contentstack Integration Guide

## Setup in 5 Minutes

### Step 1: Install Dependencies

```bash
npm install
```

This installs the `contentstack` package that's already configured in `package.json`.

### Step 2: Get Your Contentstack Credentials

1. Log in to [Contentstack](https://app.contentstack.com/)
2. Select your Stack
3. Go to **Settings** → **Tokens**
4. Create a **Delivery Token** (or use existing one)
5. Note down:
   - **API Key** (from Stack settings)
   - **Delivery Token**
   - **Environment** (e.g., "dev2", "production", "staging")

### Step 3: Configure Environment Variables

```bash
# Copy the example file
cp env.example .env
```

Edit `.env` and add your credentials:

```env
VITE_CONTENTSTACK_API_KEY=blt1234567890abcdef
VITE_CONTENTSTACK_DELIVERY_TOKEN=cs1234567890abcdef
VITE_CONTENTSTACK_ENVIRONMENT=dev2
```

### Step 4: Import Content Types

#### Option A: Via UI (Recommended)

1. Go to **Content Models** → **Content Types**
2. Click **Import**
3. Upload `contentstack-schemas/daily_quote.json`
4. Upload `contentstack-schemas/daily_steps.json`

#### Option B: Via CLI

```bash
# Install Contentstack CLI
npm install -g @contentstack/cli

# Set region (NA, EU, AZURE-NA, AZURE-EU, or GCP-NA)
csdx config:set:region NA

# Login to Contentstack
csdx auth:login

# Import content types
csdx cm:stacks:import --data-dir ./contentstack-schemas
```

### Step 5: Add Content

#### Create a Quote Entry

1. Go to **Entries** → **Daily Quote**
2. Click **+ New Entry**
3. Fill in:
   - **Title**: "Monday Motivation"
   - **Quote Text**: "Success is the sum of small efforts repeated daily."
   - **Author**: "Robert Collier"
   - **Active**: ✅ Check this box
4. **Save & Publish**

#### Create a Steps Entry

1. Go to **Entries** → **Daily Steps**
2. Click **+ New Entry**
3. Fill in:
   - **Title**: "Daily Steps - Today"
   - **Steps**: Click "Add Step" for each:
     - Step 1: "Plan your day" / "Set 3 priorities" / Order: 1
     - Step 2: "Learn one new thing" / "Read or watch something useful" / Order: 2
     - Step 3: "Reflect on progress" / "Note one win today" / Order: 3
   - **Active**: ✅ Check this box
4. **Save & Publish**

Or use the sample entries from `contentstack-schemas/sample-entries/`

### Step 6: Run the App

```bash
npm run dev
```

Visit `http://localhost:5173` - your app should now display content from Contentstack!

## How It Works

The app automatically:
1. ✅ Attempts to fetch content from Contentstack
2. ✅ Uses credentials from `.env` file
3. ✅ Falls back to local mock data if Contentstack is unavailable
4. ✅ Handles errors gracefully

## Verification

Open browser console (`F12`) and check for:
- ✅ No error messages
- ✅ Content from Contentstack displays correctly
- ❌ If you see "Error fetching...", check your credentials

## Testing Without Contentstack

The app works perfectly without Contentstack setup:
- Uses local mock data from `src/data/`
- No configuration needed
- Great for development and testing

## API Service Details

The integration is in `src/services/contentstack.js`:

```javascript
// Fetches the quote marked as "active: true"
getActiveQuote()

// Fetches the steps collection marked as "active: true"  
getActiveSteps()
```

Both functions:
- Query Contentstack for entries where `active = true`
- Return formatted data matching the app's structure
- Return `null` if no data found or error occurs

## Content Management Tips

### Making Content Live

1. Create your entry
2. Set **Active** to `true`
3. **Publish** the entry
4. Only ONE entry per content type should be active at a time

### Content Rotation

To change displayed content:
1. Set current entry's **Active** to `false`
2. Set new entry's **Active** to `true`
3. Publish both entries
4. App will automatically show new content on next load

### Scheduling (Pro Tip)

Use Contentstack's scheduling feature:
1. Create entries for the week
2. Schedule when each becomes active
3. Automate daily content rotation

## Common Issues

### Content Not Updating?

```bash
# Hard refresh browser
Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

# Or clear cache
# DevTools → Network → Disable cache
```

### "Active" Content Not Showing?

- Verify entry is **published** (not just saved)
- Check only ONE entry is marked as active per content type
- Ensure `active` field is set to `true`

### Environment Variables Not Working?

- Restart dev server after changing `.env`
- Verify variables start with `VITE_`
- Check `.env` is in project root (not in `src/`)

## What Gets Deployed?

When deploying to production:
- Add environment variables to your hosting platform
- Same three variables: API_KEY, DELIVERY_TOKEN, ENVIRONMENT
- Most platforms (Vercel, Netlify) have UI for this

## Next Steps

- ✅ App is now connected to Contentstack
- 📝 Create more quotes and steps collections
- 🔄 Set up content rotation schedule
- 📊 Track which content performs best
- 🎨 Customize the UI
- 🚀 Deploy to production

---

**Need Help?**
- Check `SETUP.md` for detailed documentation
- See `contentstack-schemas/README.md` for schema details
- Visit [Contentstack Docs](https://www.contentstack.com/docs)
