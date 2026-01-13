# Sample Entries for Step Forward

This folder contains sample entries that can be used to populate your Contentstack content types.

## Structure

```
sample-entries/
├── quotes/          # Daily Quote entries
│   ├── quote_1.json
│   ├── quote_2.json
│   └── ...
└── steps/           # Daily Steps entries
    ├── steps_1.json
    ├── steps_2.json
    └── ...
```

## Available Quotes (7 entries)

1. **Robert Collier** - Success is the sum of small efforts repeated daily
2. **James Clear** - Every action is a vote for who you wish to become
3. **Lao Tzu** - A journey of a thousand miles begins with a single step
4. **Tony Robbins** - What we do consistently shapes our lives
5. **Maya Angelou** - The beauty of transformation
6. **Ralph Waldo Emerson** - Every day is the best day
7. **Aristotle** - Excellence is a habit

## Available Step Collections (5 entries)

1. **Planning & Reflection** - Daily priorities, learning, reflection
2. **Wellness Focus** - Morning routine, movement, connection, gratitude
3. **Productivity Focus** - Workspace, deep work, breaks, goal review
4. **Intentional Living** - Focus, feedback, boundaries, wind-down
5. **Action & Creativity** - Hydration, challenging tasks, creative breaks

## How to Use These Entries

### Option 1: Manual Entry via Contentstack UI

1. Log in to Contentstack
2. Navigate to **Entries** → Content Type (Daily Quote or Daily Steps)
3. Click **+ New Entry**
4. Copy the data from the JSON files and paste into the form
5. Save and publish

### Option 2: Import via Contentstack CLI

```bash
# Import all entries
csdx cm:entries:import --content-type daily_quote --data-dir ./sample-entries/quotes
csdx cm:entries:import --content-type daily_steps --data-dir ./sample-entries/steps
```

### Option 3: Use as Reference

These files serve as examples of:
- Proper field formatting
- Content structure
- Variety in content length and style
- How to use the `order` field for steps
- Setting `active` status for display

## Active Entry Configuration

By default:
- **quote_1.json** is marked as `active: true`
- **steps_1.json** is marked as `active: true`

All other entries are `active: false`.

To change which entry displays in your app:
1. Set the desired entry to `active: true`
2. Set all other entries in that content type to `active: false`
3. Publish the changes

## Creating Your Own Entries

Use these as templates:

### Quote Entry Template
```json
{
  "entry": {
    "title": "Author Name - Short Description",
    "quote_text": "The actual quote text here",
    "author": "Full Author Name",
    "date": "YYYY-MM-DD",
    "active": false,
    "tags": [],
    "locale": "en-us"
  }
}
```

### Steps Entry Template
```json
{
  "entry": {
    "title": "Daily Steps - Description or Date",
    "steps": [
      {
        "step_title": "Short action-oriented title",
        "description": "Brief, clear description",
        "order": 1
      }
    ],
    "date": "YYYY-MM-DD",
    "active": false,
    "tags": [],
    "locale": "en-us"
  }
}
```

## Tips for Content Creation

### For Quotes:
- Keep quotes concise (under 200 characters works best)
- Choose motivational, growth-oriented content
- Verify author attribution
- Use proper punctuation and grammar

### For Steps:
- Create 3-5 steps per entry
- Keep titles under 30 characters
- Descriptions should be 3-7 words
- Steps should be actionable and achievable
- Use `order` field to control display sequence
- Mix different focus areas (productivity, wellness, creativity, relationships)

## Content Rotation Strategy

### Daily Rotation
- Create 7 quotes (one per day of the week)
- Create 7 step collections (one per day)
- Use Contentstack's scheduling to rotate automatically

### Weekly Themes
- **Monday**: Motivation & planning
- **Tuesday**: Learning & growth
- **Wednesday**: Progress & persistence
- **Thursday**: Connection & collaboration
- **Friday**: Reflection & gratitude
- **Weekend**: Rest & exploration

### Seasonal Updates
- Create themed collections for seasons
- Special entries for holidays
- Adjust content based on user feedback

## Next Steps

1. Review sample entries
2. Import or manually create entries in Contentstack
3. Customize and add your own variations
4. Set up a content rotation schedule
5. Monitor which content resonates with users
6. Continuously expand your content library

---

**Note**: Remember to publish entries in Contentstack after creation for them to be accessible via the Delivery API.
