# 7 Minute CABS - GitHub Repository Setup Instructions

## Step 1: Create New GitHub Repository

1. Go to GitHub.com and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Repository details:
   - **Repository name**: `7minutecabs-website`
   - **Description**: "High-energy retro infomercial microsite for A/B testing CNC cabinet marketing approaches"
   - **Public/Private**: Choose based on preference
   - **Initialize**: Leave unchecked (we have files ready)

## Step 2: Push Files to GitHub

### Option A: Command Line (Recommended)
```bash
# Navigate to the 7minutecabs-website directory
cd 7minutecabs-website

# Initialize Git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "v4.1.1 - Initial 7MinuteCabs microsite ready for deployment

🚀 HIGH-ENERGY MICROSITE LAUNCH:
- Retro infomercial design with blast effects
- 'Get RIPPED CABINETS FAST!' messaging 
- A/B testing framework vs professional Peppermodern site
- Same services/pricing with energetic presentation
- GA4 tracking with 7minutecabs labels
- Mobile-responsive design with animations
- Ready for GitHub Pages deployment"

# Add GitHub remote (replace 'username' with your GitHub username)
git remote add origin https://github.com/username/7minutecabs-website.git

# Push to GitHub
git push -u origin main
```

### Option B: GitHub Desktop
1. Open GitHub Desktop
2. Click "Add an existing repository from your hard drive"
3. Select the `7minutecabs-website` folder
4. Click "Publish repository"
5. Set repository name as `7minutecabs-website`
6. Add description and publish

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub.com
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under "Source", select "Deploy from a branch"
5. Choose branch: **main**
6. Choose folder: **/ (root)**
7. Click **Save**
8. GitHub will provide your site URL: `https://username.github.io/7minutecabs-website/`

## Step 4: Test the Deployment

1. Wait 5-10 minutes for deployment
2. Visit your GitHub Pages URL
3. Verify all sections load properly:
   - Hero section with animations
   - Comparison section
   - Services with blast styling
   - Contact form functionality
   - Mobile responsiveness

## Step 5: Custom Domain Setup (Optional)

### If you have 7minutecabs.com domain:

1. **In GitHub Repository**:
   - Go to Settings → Pages
   - Under "Custom domain", enter: `7minutecabs.com`
   - Save changes

2. **In Domain Settings** (with your domain provider):
   - Add CNAME record: `www` → `username.github.io`
   - Add A records for apex domain:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

3. **Enable HTTPS**:
   - In GitHub Pages settings
   - Check "Enforce HTTPS" (after DNS propagation)

## Step 6: Analytics Verification

1. **Google Analytics 4**: Already configured with ID `G-NN3QPC3F8Q`
2. **Test tracking**:
   - Visit the live site
   - Submit contact form (use test data)
   - Click phone number link
   - Check Google Analytics for events labeled with "_7minutecabs"

## Step 7: A/B Testing Setup

### Set up tracking comparison:
1. **Peppermodern (Professional)**: Main site tracking
2. **7 Minute CABS (High-Energy)**: Microsite tracking
3. **Compare metrics**:
   - Form submission rates
   - Phone call click-through rates
   - Time on page
   - Bounce rates
   - Lead quality

### Recommended tools:
- **Google Analytics 4**: Event comparison
- **Google Search Console**: SEO performance
- **Facebook Pixel** (optional): Social media tracking

## Troubleshooting

### Common Issues:

**Site not loading**:
- Check GitHub Pages deployment status
- Verify all file paths are correct
- Wait 10-15 minutes after initial setup

**Images not displaying**:
- Ensure images folder was copied correctly
- Check file paths in index.html are relative
- Verify image files are in repository

**Analytics not working**:
- Verify GA4 code is present in index.html
- Check browser console for JavaScript errors
- Test with GA debugger extension

**Mobile layout issues**:
- Test on multiple devices
- Check CSS media queries are working
- Verify viewport meta tag is present

## Next Steps

1. **Monitor Performance**: Track visitor behavior and conversions
2. **A/B Compare**: Analyze professional vs high-energy approaches
3. **Optimize**: Based on data, refine the higher-performing approach
4. **Scale**: Apply learnings to main Peppermodern marketing

## Support

- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Custom Domain Setup**: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- **Analytics Setup**: https://support.google.com/analytics/

---

**Ready to BLAST OFF!** 🚀

Your high-energy 7 Minute CABS microsite is ready for deployment and A/B testing against the professional Peppermodern approach!