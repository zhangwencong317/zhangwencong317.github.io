# Personal Research Website

This is my personal research website showcasing my research interests, publications, and academic updates.

## 🌐 Live Website

Visit the website at: **https://zhangwencong317.github.io**

## 🚀 Features

- **Research Profile**: Personal introduction and research interests
- **Publications**: List of academic papers with links to PDFs, code, and project pages
- **News**: Latest updates and achievements
- **Analytics**: Website visit statistics including page views, downloads, link clicks, and paper views
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

## 📁 File Structure

```
zhangwencong/
├── index.html          # Main page
├── assets/
│   ├── css/
│   │   └── style.css   # Stylesheet
│   └── js/
│       ├── script.js   # Interactive scripts
│       └── analytics.js # Analytics tracking
├── documents/
│   └── resume.pdf      # Resume file
├── README.md           # English README
└── README_CN.md        # Chinese README
```

## 🛠️ Local Development

1. Clone the repository
```bash
git clone https://github.com/zhangwencong317/zhangwencong317.github.io.git
cd zhangwencong317.github.io
```

2. Start a local server
```bash
python3 -m http.server 8000
```

3. Open `http://localhost:8000` in your browser

## 📝 Updating the Website

1. Modify files
2. Commit changes
```bash
git add .
git commit -m "Update website content"
git push origin main
```

GitHub Pages will automatically update (usually takes a few minutes).

## 📊 Analytics

The website includes built-in analytics tracking that displays real-time statistics at the bottom of the page.

### Viewing Statistics

**On the Website:**
- Scroll to the bottom of the page to see the "访问统计" (Analytics) section
- The statistics module displays:
  - 👁️ **Page Views**: Daily unique visits (counts once per day per visitor)
  - 📥 **Resume Downloads**: Number of times the resume PDF was downloaded
  - 🔗 **Link Clicks**: Number of external link clicks
  - 📄 **Paper Views**: Number of paper-related link clicks (PDF, webpage, arXiv, abstract, bibtex)
- Statistics update automatically and show the last update time

**In Browser Console (Advanced):**
1. Open your website
2. Press `F12` (or right-click → Inspect) to open Developer Tools
3. Go to the Console tab
4. Type: `websiteAnalytics.getStats()` and press Enter
5. You'll see detailed statistics in JSON format

**Note:** Statistics are stored in the browser's localStorage, so:
- Each visitor sees their own statistics
- Data persists across sessions but resets if browser cache is cleared
- Different devices/browsers will show different counts

### Advanced Analytics

For server-side analytics with comprehensive reports (visitor locations, traffic sources, device types, etc.), you can integrate **Google Analytics**:

1. Get your Measurement ID from [Google Analytics](https://analytics.google.com/)
2. Open `index.html` and find the Google Analytics section (around line 10-19)
3. Uncomment the GA code and replace `G-XXXXXXXXXX` with your Measurement ID
4. Save and push to GitHub

After setup, view detailed reports at [Google Analytics Dashboard](https://analytics.google.com/)

## 📄 License

This project is open source and available under the MIT License.
