# GitHub Setup Instructions for Peppermodern Website

## Step 1: Create GitHub Repository

1. Go to https://github.com and sign in
2. Click "+" → "New repository"
3. Repository name: `peppermodern-website`
4. Description: `Professional CNC cabinet milling website for Peppermodern - Mooresville, NC`
5. Set to **Public** (required for free Netlify)
6. **DO NOT** check "Initialize with README" - we have our files already
7. Click "Create repository"

## Step 2: Connect Local Repository to GitHub

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
# Add GitHub as remote origin
git remote add origin https://github.com/YOUR_USERNAME/peppermodern-website.git

# Verify remote was added
git remote -v

# Push all commits to GitHub
git push -u origin master
```

## Step 3: Verify Upload

Go to your GitHub repository URL and verify you see:
- ✅ All project files (index.html, css/, js/, images/, etc.)
- ✅ Both commits in the history
- ✅ All 4 shop photos in the images folder

## Step 4: Netlify Deployment

Once on GitHub:
1. Go to https://netlify.com
2. Sign up/in with GitHub
3. "New site from Git" → Choose GitHub → Select `peppermodern-website`
4. Build settings: Leave blank (static site)
5. Deploy!

## Repository Structure
```
peppermodern-website/
├── index.html              # Main website file
├── css/
│   └── styles.css          # All styling
├── js/
│   └── main.js            # Interactive functionality  
├── images/                # Shop photos
│   ├── PXL_20250801_113853122.jpg  # CNC router (Hero)
│   ├── PXL_20250803_133132027.jpg  # Shop exterior (About)
│   ├── PXL_20250803_133438672.jpg  # Workshop interior
│   └── PXL_20250803_134632969.jpg  # Finished cabinet
├── CLAUDE.md              # Development documentation
└── PROGRESS.md            # Project status
```

## Netlify Configuration

Your site will be ready for deployment with:
- ✅ Static HTML/CSS/JS (no build process needed)
- ✅ All images included
- ✅ Mobile-responsive design
- ✅ SEO optimization
- ✅ Contact forms (need to configure)

## Custom Domain Setup (Optional)

After deployment, you can configure:
- Custom domain: `peppermodern.com`
- SSL certificate (automatic)
- Contact form handling