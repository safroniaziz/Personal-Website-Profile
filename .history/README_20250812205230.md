# Personal CV Website (Single Page, Tailwind CSS)

This is a single-page personal website intended as an online CV. It is built with Tailwind CSS (via CDN) and is fully compatible with regular shared hosting (upload as static files).

## Features
- Modern, responsive, single-page layout
- Sections: About, Experience, Applications (Projects), Certificates, IPR, Achievements, Contact
- Dark mode with persistent preference
- Sticky navigation with mobile menu
- SEO meta tags and JSON-LD schema for `Person`
- No build step required; simple static hosting

## Customize
1. Replace placeholders in `index.html`:
   - Name, title, location, summary
   - Contact info: email, phone, LinkedIn, GitHub
   - Education, work experience items
   - Projects (replace titles, descriptions, tech badges, links)
   - Certificates and IPR entries
   - Achievements
   - Update SEO meta tags and JSON-LD (`your-domain.com`, social links, etc.)
2. Add your assets:
   - Upload your photo to `assets/img/profile.jpg`
   - Optional: project thumbnails like `assets/img/project-1.jpg`, etc.
   - Optional: social preview image `assets/img/og-image.jpg`
   - Optional: your CV PDF at `assets/YourName-CV.pdf`
3. Favicon (optional): add `favicon.ico` at project root.

## Tailwind
This template uses Tailwind via the Play CDN for zero-build static hosting. For production at scale, consider a proper Tailwind build step, but for a personal CV page the CDN is acceptable and simple.

## Deploy on Shared Hosting (cPanel / Plesk / FTP)
- Upload all files and folders to your hosting `public_html` (or web root) directory.
- Ensure images and PDF are in place (`assets/img`, `assets/YourName-CV.pdf`).
- Visit your domain to verify.

## Contact Form
The contact form is configured with `mailto:` which opens the user's email client. If you want a hosted form endpoint without a backend, consider services like Formspree or Basin and replace the `form` `action` attribute accordingly.

## License
You own all the content you add. The template itself is MIT-licensed.
