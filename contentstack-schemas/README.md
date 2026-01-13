# Contentstack Schema Import Guide

## Content Types for Step Forward Application

This folder contains Contentstack content type schemas that can be imported directly into your Contentstack stack.

### Content Types Included

1. **Daily Quote** (`daily_quote.json`)
   - Quote text
   - Author
   - Date (optional)
   - Active status

2. **Daily Steps** (`daily_steps.json`)
   - Collection of daily growth steps
   - Each step includes: title, description, order
   - Date (optional)
   - Active status

## How to Import

### Method 1: Using Contentstack CLI

```bash
# Install Contentstack CLI
npm install -g @contentstack/cli

# Login to your stack
csdx auth:login

# Import content type
csdx cm:stacks:import --data-dir ./contentstack-schemas
```

### Method 2: Manual Import via UI

1. Log in to your Contentstack account
2. Navigate to your Stack
3. Go to **Content Models** → **Content Types**
4. Click **+ New Content Type** or **Import**
5. Select **Import from JSON**
6. Upload `daily_quote.json` first
7. Repeat for `daily_steps.json`

## Content Type Structure

### Daily Quote
```json
{
  "title": "Monday Motivation",
  "quote_text": "Success is the sum of small efforts repeated daily.",
  "author": "Robert Collier",
  "date": "2026-01-13",
  "active": true
}
```

### Daily Steps
```json
{
  "title": "Steps for January 13, 2026",
  "steps": [
    {
      "step_title": "Plan your day",
      "description": "Set 3 priorities",
      "order": 1
    },
    {
      "step_title": "Learn one new thing",
      "description": "Read or watch something useful",
      "order": 2
    },
    {
      "step_title": "Reflect on progress",
      "description": "Note one win today",
      "order": 3
    }
  ],
  "date": "2026-01-13",
  "active": true
}
```

## Integration with React App

### Install Contentstack SDK

```bash
npm install contentstack
```

### Update Code

Create a new file `src/services/contentstack.js`:

```javascript
import Contentstack from 'contentstack'

const Stack = Contentstack.Stack({
  api_key: 'YOUR_API_KEY',
  delivery_token: 'YOUR_DELIVERY_TOKEN',
  environment: 'YOUR_ENVIRONMENT'
})

export const getActiveQuote = async () => {
  try {
    const query = Stack.ContentType('daily_quote').Query()
    query.where('active', true)
    query.limit(1)
    const result = await query.find()
    
    if (result[0] && result[0].length > 0) {
      const entry = result[0][0]
      return {
        text: entry.quote_text,
        author: entry.author
      }
    }
  } catch (error) {
    console.error('Error fetching quote:', error)
    return null
  }
}

export const getActiveSteps = async () => {
  try {
    const query = Stack.ContentType('daily_steps').Query()
    query.where('active', true)
    query.limit(1)
    const result = await query.find()
    
    if (result[0] && result[0].length > 0) {
      const entry = result[0][0]
      return entry.steps.map((step, index) => ({
        id: index + 1,
        title: step.step_title,
        description: step.description,
        completed: false
      }))
    }
  } catch (error) {
    console.error('Error fetching steps:', error)
    return null
  }
}
```

### Update App.jsx

```javascript
import { useState, useEffect } from 'react'
import { getActiveQuote, getActiveSteps } from './services/contentstack'
import { quote as fallbackQuote } from './data/quote'
import { steps as fallbackSteps } from './data/steps'

// Use Contentstack data with fallback to local data
useEffect(() => {
  const fetchContent = async () => {
    const quoteData = await getActiveQuote()
    const stepsData = await getActiveSteps()
    
    if (quoteData) setQuote(quoteData)
    if (stepsData) setSteps(stepsData)
  }
  
  fetchContent()
}, [])
```

## Environment Variables

Create `.env` file in your project root:

```
VITE_CONTENTSTACK_API_KEY=your_api_key
VITE_CONTENTSTACK_DELIVERY_TOKEN=your_delivery_token
VITE_CONTENTSTACK_ENVIRONMENT=your_environment
```

## Next Steps

1. Import both content type schemas into Contentstack
2. Create sample entries for each content type
3. Mark entries as "Active" to display them in the app
4. Install Contentstack SDK and update the React app
5. Configure environment variables
6. Test the integration

## Support

For more information:
- [Contentstack Documentation](https://www.contentstack.com/docs)
- [Contentstack JS SDK](https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/javascript-browser/)
