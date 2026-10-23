# Princeton Digital Laboratory — Static Website

Static HTML site for [princetondigitallabs.org](https://www.princetondigitallabs.org), hosted on GitHub Pages.

## File structure

```
pdl-site/
├── index.html                  # Homepage
├── publications.html           # Publications index
├── donate.html                 # Donation page (Zeffy + Venmo)
├── pub-sdd-mapping-study.html  # SDD paper
├── pub-carcassonne.html        # Science of Carcassonne
├── pub-ticket-to-ride.html     # Science of Ticket to Ride
├── pub-heroes-of-barcadia.html # Science of Heroes of Barcadia
├── pub-uno.html                # Science of UNO
├── style.css                   # Shared stylesheet
├── components.js               # Shared header/footer
└── images/
    ├── PDL.png                 # Site logo
    ├── cropped-PDL.png         # Favicon
    └── nassau-inn.jpg          # Hero image
```

## GitHub Pages setup (one-time)

1. Create a new GitHub repository named exactly: `princetondigitallabs.org`
2. Upload all files from this folder into the repo root (drag & drop works)
3. Go to **Settings → Pages**
4. Under **Source**, select `Deploy from a branch` → branch `main` → folder `/ (root)`
5. Click Save — GitHub will give you a `.github.io` URL to test with
6. Under **Custom domain**, enter `www.princetondigitallabs.org` and save

## DNS update (Namecheap)

Log into Namecheap → Domain List → princetondigitallabs.org → Manage → Advanced DNS.

Remove the EasyWP records and add these:

| Type  | Host | Value                   | TTL  |
|-------|------|-------------------------|------|
| A     | @    | 185.199.108.153         | Auto |
| A     | @    | 185.199.109.153         | Auto |
| A     | @    | 185.199.110.153         | Auto |
| A     | @    | 185.199.111.153         | Auto |
| CNAME | www  | yourusername.github.io  | Auto |

Replace `yourusername` with your actual GitHub username.

DNS propagation takes 15 minutes to 48 hours. GitHub Pages will auto-provision an SSL certificate once it detects the DNS.

## Adding new publications

1. Copy any existing `pub-*.html` as a template
2. Update the title, date, meta, and body text
3. Add a link to it in both `index.html` (recent publications list) and `publications.html`
4. Commit and push — the site updates within seconds

## Zeffy integration

In `donate.html`, find the `<iframe id="zeffy-frame">` and replace `src="about:blank"` with your Zeffy embed URL:
```
src="https://www.zeffy.com/en-US/embed/donation-form/YOUR-FORM-ID"
```
The placeholder disappears automatically once a real src is set.

## Venmo QR code

1. Save your Venmo QR as `images/venmo-qr.png`
2. In `donate.html`, replace the `<div class="venmo-qr-placeholder">` block with:
```html
<img src="images/venmo-qr.png" alt="Venmo QR code for PDL" width="180" />
```

## Cancelling EasyWP

Only cancel after:
- [ ] GitHub Pages is live at your custom domain
- [ ] HTTPS is working (green lock)
- [ ] All pages load correctly
- [ ] Email (if any) has been migrated away from EasyWP/Namecheap hosting
