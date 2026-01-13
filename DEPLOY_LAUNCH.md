# Deploy Step Forward to Contentstack Launch

Complete guide to deploying your Step Forward app on Contentstack Launch.

## Prerequisites

- ✅ Contentstack account with Launch access
- ✅ Content types imported (daily_quote and daily_steps)
- ✅ At least one active entry for each content type
- ✅ Entries published to dev2 environment
- ✅ Git repository (GitHub, GitLab, or Bitbucket)

## Quick Deploy

### Method 1: Via Launch UI (Recommended)

#### Step 1: Push to Git Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Step Forward app"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/step-forward.git

# Push to main branch
git push -u origin main
```

#### Step 2: Deploy on Launch

1. **Login to Contentstack**: https://app.contentstack.com
2. **Navigate to Launch**: Click "Launch" in the left sidebar
3. **Create New Project**:
   - Click "New Project"
   - Select "Import from Git"
   
4. **Connect Repository**:
   - Choose your Git provider (GitHub/GitLab/Bitbucket)
   - Authorize Contentstack to access your repository
   - Select your `step-forward` repository
   - Choose the `main` branch

5. **Configure Build Settings**:
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
   - **Node Version**: 18.x

6. **Add Environment Variables**:
   Click "Environment Variables" and add:
   
   | Key | Value |
   |-----|-------|
   | `VITE_CONTENTSTACK_API_KEY` | Your API key from Settings → Stack |
   | `VITE_CONTENTSTACK_DELIVERY_TOKEN` | Your delivery token |
   | `VITE_CONTENTSTACK_ENVIRONMENT` | `dev2` |

7. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete (2-3 minutes)
   - Launch will provide a URL like: `https://your-app.launch.contentstack.com`

#### Step 3: Verify Deployment

1. Visit your Launch URL
2. Check that the quote displays correctly
3. Check that steps load properly
4. Open browser console to verify no errors
5. Test checking/unchecking steps

### Method 2: Via Launch CLI

#### Install Launch CLI

```bash
npm install -g @contentstack/cli-launch
```

#### Deploy

```bash
# Login to Contentstack
csdx auth:login

# Initialize Launch project
csdx launch:init

# Follow the prompts:
# - Project name: step-forward
# - Framework: Vite
# - Build command: npm run build
# - Output directory: dist

# Set environment variables
csdx launch:env:set VITE_CONTENTSTACK_API_KEY "your_api_key"
csdx launch:env:set VITE_CONTENTSTACK_DELIVERY_TOKEN "your_token"
csdx launch:env:set VITE_CONTENTSTACK_ENVIRONMENT "dev2"

# Deploy
csdx launch:deploy
```

## Configuration Details

### Build Configuration

The app uses these build settings:

```json
{
  "build_command": "npm run build",
  "output_directory": "dist",
  "install_command": "npm install",
  "node_version": "18.x"
}
```

### Environment Variables

Required environment variables:

```
VITE_CONTENTSTACK_API_KEY       # Stack API Key
VITE_CONTENTSTACK_DELIVERY_TOKEN # Delivery Token  
VITE_CONTENTSTACK_ENVIRONMENT    # Environment (dev2)
```

**Where to find these:**

1. **API Key**:
   - Settings → Stack → API Key

2. **Delivery Token**:
   - Settings → Tokens → Create or use existing Delivery Token
   - Ensure `dev2` environment is enabled for the token

3. **Environment**:
   - Use `dev2` (or your configured environment name)

## Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to Launch → Your Project → Settings
2. Click "Domains"
3. Add your custom domain (e.g., `stepforward.yoursite.com`)
4. Update DNS records as instructed
5. Enable SSL (automatic with Launch)

## Continuous Deployment

Launch automatically redeploys when you push to your connected branch:

```bash
# Make changes
git add .
git commit -m "Update quote card styling"
git push

# Launch automatically rebuilds and deploys
```

### Configure Deploy Triggers

1. Go to Launch → Your Project → Settings
2. Click "Deploy Hooks"
3. Enable/disable automatic deployments
4. Set branch to watch (default: main)

## Environment-Specific Deployments

Deploy different environments:

### Production Environment

```bash
# Create production branch
git checkout -b production

# Push to production
git push origin production

# In Launch, create new deployment:
# - Branch: production
# - Environment variables:
#   - VITE_CONTENTSTACK_ENVIRONMENT=production
```

### Staging Environment

```bash
# Similar setup for staging
git checkout -b staging
git push origin staging

# In Launch:
# - Branch: staging
# - Environment: staging
```

## Monitoring & Logs

### View Build Logs

1. Go to Launch → Your Project
2. Click on a deployment
3. View "Build Logs" tab
4. Check for errors or warnings

### View Runtime Logs

1. Launch → Your Project → Logs
2. Filter by time period
3. Monitor errors and performance

## Troubleshooting

### Build Fails

**Check Node Version:**
```bash
# Ensure Node 18+ is specified in Launch settings
```

**Check Build Command:**
```bash
# Test locally first
npm install
npm run build

# Should create dist/ folder
```

**Check Dependencies:**
```bash
# Ensure package.json has all dependencies
# No missing peer dependencies
```

### Content Not Loading

**Verify Environment Variables:**
1. Launch → Project → Settings → Environment Variables
2. Check all three variables are set correctly
3. No extra spaces or quotes

**Check Token Permissions:**
1. Contentstack → Settings → Tokens
2. Verify delivery token has `dev2` environment enabled
3. Token must have read access

**Check Content Publication:**
1. Ensure at least one quote is active and published
2. Ensure at least one steps collection is active and published
3. Published to correct environment (dev2)

### App Shows Mock Data Instead of Contentstack Data

**This means the API connection failed. Check:**

1. **Environment variables** are set in Launch
2. **API Key is correct** (no typos)
3. **Delivery Token is correct** (no typos)
4. **Environment name matches** (dev2)
5. **Content is published** to dev2 environment
6. **At least one entry is marked as active** (active: true)

Open browser console to see specific error messages.

## Performance Optimization

### Enable Caching

Launch automatically handles caching, but you can optimize:

1. **Static Assets**: Cached by default
2. **API Responses**: Consider adding cache headers
3. **CDN**: Launch uses CDN automatically

### Optimize Build

```json
// vite.config.js - already optimized
{
  "build": {
    "minify": true,
    "sourcemap": false
  }
}
```

## Rollback

If a deployment has issues:

1. Launch → Project → Deployments
2. Find a previous successful deployment
3. Click "..." menu → "Rollback to this deployment"
4. Confirm rollback

## Cost & Limits

Contentstack Launch pricing:
- Check current Launch pricing on Contentstack website
- Free tier available for testing
- Monitor usage in Launch dashboard

## Security

### Environment Variables

- ✅ Never commit `.env` to git (already in .gitignore)
- ✅ Use Launch's environment variable management
- ✅ Rotate tokens periodically

### HTTPS

- ✅ Automatic SSL/TLS with Launch
- ✅ Force HTTPS enabled by default

## Next Steps After Deployment

1. **Test thoroughly** on the live URL
2. **Set up custom domain** (optional)
3. **Configure webhooks** to trigger rebuilds when content changes
4. **Monitor analytics** and performance
5. **Set up staging environment** for testing
6. **Create content workflow** with your team

## Webhook Integration (Advanced)

Automatically redeploy when content changes:

1. **In Launch**:
   - Get your Deploy Hook URL
   - Launch → Project → Settings → Deploy Hooks → Create Hook

2. **In Contentstack**:
   - Settings → Webhooks → Create Webhook
   - URL: Your Launch Deploy Hook URL
   - Triggers: Entry Published, Entry Unpublished
   - Content Types: daily_quote, daily_steps

3. **Result**:
   - When editors publish content, app automatically rebuilds
   - Changes go live in 2-3 minutes

## Support

- **Launch Docs**: https://www.contentstack.com/docs/developers/launch
- **CLI Docs**: https://www.contentstack.com/docs/developers/cli
- **Support**: https://www.contentstack.com/support

---

**Your Step Forward app is now live on Contentstack Launch! 🚀**
