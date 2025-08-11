# 🚀 7 MINUTE CABS - GITHUB REPOSITORY SETUP INSTRUCTIONS

## ✅ Local Repository Ready

The local Git repository has been initialized and committed:
- **Location**: `C:\Users\freds\peppermodern-website\7minutecabs-website`
- **Status**: All files committed to local Git repository
- **Commit**: v4.1.1 - Initial 7MinuteCabs microsite ready for deployment

## 📋 MANUAL GITHUB REPOSITORY CREATION

### Step 1: Create Repository on GitHub

1. **Go to GitHub.com** and sign in to your account
2. **Click the "+" icon** in the top right corner
3. **Select "New repository"**
4. **Fill in repository details**:
   - **Repository name**: `7minutecabs-website`
   - **Description**: `High-energy retro infomercial microsite for A/B testing CNC cabinet marketing approaches`
   - **Visibility**: Public (recommended) or Private
   - **Initialize repository**: ⚠️ **LEAVE UNCHECKED** (we already have files)
   - Don't add README, .gitignore, or license (we have them)
5. **Click "Create repository"**

### Step 2: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these exact commands:

```bash
# Navigate to the 7minutecabs-website directory
cd C:\Users\freds\peppermodern-website\7minutecabs-website

# Add the GitHub remote (replace 'yourusername' with your actual GitHub username)
git remote add origin https://github.com/yourusername/7minutecabs-website.git

# Rename branch to main (if using older Git version)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 3: Verify Upload

1. **Refresh your GitHub repository page**
2. **Verify all files are present**:
   - index.html
   - README.md
   - css/styles.css
   - js/main.js
   - images/ folder with 4 photos
   - All documentation files

### Step 4: Enable GitHub Pages (Optional)

1. **Go to repository Settings**
2. **Scroll to "Pages" section** (left sidebar)
3. **Under Source**: Select "Deploy from a branch"
4. **Branch**: Select "main"
5. **Folder**: Select "/ (root)"
6. **Click Save**
7. **Your site will be available at**: `https://yourusername.github.io/7minutecabs-website/`

## 🌐 NETLIFY DEPLOYMENT PREPARATION

### Option A: Deploy from GitHub (Recommended)

1. **Go to Netlify.com** and sign in
2. **Click "New site from Git"**
3. **Connect to GitHub** and select your `7minutecabs-website` repository
4. **Build settings**:
   - **Build command**: (leave empty)
   - **Publish directory**: (leave empty or use `.`)
5. **Click "Deploy site"**
6. **Custom domain setup**:
   - Go to Site settings → Domain management
   - Add custom domain: `7minutecabs.com`
   - Configure DNS with your domain provider

### Option B: Manual Upload to Netlify

1. **Create a ZIP file** of the 7minutecabs-website folder contents
2. **Go to Netlify.com** → "Deploy manually"
3. **Drag and drop the ZIP file**
4. **Site deployed instantly**

### DNS Configuration for 7minutecabs.com

**With your domain provider**, add these DNS records:
```
Type: CNAME
Name: www
Value: yoursitename.netlify.app

Type: A (if using apex domain)
Name: @
Value: 75.2.60.5
```

## 📊 ANALYTICS VERIFICATION

After deployment, verify tracking works:

1. **Visit the live site**
2. **Open browser developer tools** → Console
3. **Submit the contact form** (use test data)
4. **Click phone number link**
5. **Check Google Analytics** for events with "_7minutecabs" labels

## 🎯 A/B TESTING SETUP

### Two Sites Ready for Comparison:
1. **peppermodern.com** - Professional approach
2. **7minutecabs.com** - High-energy approach

### Tracking Comparison:
- **Google Analytics 4**: Same ID (G-NN3QPC3F8Q) with different labels
- **Form submissions**: `project_inquiry` vs `cabinet_blast`
- **Phone calls**: Standard vs "7MinuteCabs" labels
- **Section tracking**: Both sites tracked separately

## 🚀 EXPECTED GITHUB REPOSITORY URL

After you complete the GitHub repository creation:
**Repository URL**: `https://github.com/yourusername/7minutecabs-website`

## 📝 QUICK REFERENCE COMMANDS

```bash
# Navigate to directory
cd C:\Users\freds\peppermodern-website\7minutecabs-website

# Add remote (replace 'yourusername')
git remote add origin https://github.com/yourusername/7minutecabs-website.git

# Push to GitHub
git push -u origin main

# For future updates
git add .
git commit -m "Update message"
git push
```

## ⚡ READY TO BLAST OFF!

Your 7 Minute CABS microsite is:
- ✅ Locally committed and ready
- ✅ Structured for GitHub deployment
- ✅ Prepared for Netlify hosting
- ✅ Configured for A/B testing
- ✅ Analytics-ready with tracking

**Just create that GitHub repository and push!** 🚀

---

**Need Help?**
- GitHub repository creation: https://docs.github.com/en/get-started/quickstart/create-a-repo
- Netlify deployment: https://docs.netlify.com/get-started/
- Custom domain setup: https://docs.netlify.com/domains-https/custom-domains/