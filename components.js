// Shared header and footer for all PDL static pages
// Injected at runtime via DOMContentLoaded

const PDL_IMAGES = {
  logo: 'images/PDL.png',
  favicon: 'images/cropped-PDL.png'
};

function renderHeader(activePage) {
  const nav = [
    { href: 'index.html',     label: 'Home' },
    { href: 'publications.html', label: 'Publications' },
    { href: 'donate.html',    label: 'Donate' },
  ];

  const navHTML = nav.map(n =>
    `<a href="${n.href}" class="${activePage === n.href ? 'active' : ''}">${n.label}</a>`
  ).join('');

  return `
    <header class="site-header">
      <div class="site-header-inner">
        <a class="site-branding" href="index.html">
          <img src="${PDL_IMAGES.logo}" alt="Princeton Digital Laboratory logo" width="60" />
          <span class="site-title">Princeton Digital Laboratory</span>
        </a>
        <nav class="site-nav" aria-label="Primary navigation">
          ${navHTML}
        </nav>
      </div>
    </header>`;
}

function renderFooter() {
  const year = new Date().getFullYear();
  return `
    <footer class="site-footer">
      <p>© ${year} Princeton Digital Laboratory Corp. · EIN 33-1846427 · 501(c)(3) Nonprofit · Princeton, NJ</p>
      <p style="margin-top:6px"><a href="donate.html">Support PDL</a> · <a href="mailto:info@princetondigitallabs.org">Contact</a></p>
    </footer>`;
}

function initPage(activePage) {
  // Header
  const headerEl = document.getElementById('site-header');
  if (headerEl) headerEl.innerHTML = renderHeader(activePage);

  // Footer
  const footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.innerHTML = renderFooter();

  // Favicon
  const link = document.createElement('link');
  link.rel = 'icon';
  link.href = PDL_IMAGES.favicon;
  document.head.appendChild(link);
}
