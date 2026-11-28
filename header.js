{
  const header = document.querySelector("[data-site-header]");
  header.outerHTML = `
    <header class="site-header">
      <div class="site-wrap site-header-inner">
        <a class="site-brand" href="index.html">
          <img src="assets/ndsa-logo.JPG" width="56" height="56" alt="">
          <span>Neue Deutsche Schule<br>Alexandria</span>
        </a>
        <nav class="site-nav" aria-label="Hauptnavigation">
          <a href="index.html">Startseite</a>
          <a href="ueber-uns.html">Über uns</a>
          <a href="anmeldung.html">Anmeldung</a>
          <a href="schulleben.html">Schulleben</a>
          <a href="kontakt.html">Kontakt</a>
          <a class="site-admissions" href="https://schooleverywhere-ndsa.com/schooleverywhere/management/onlineadmission/applyonline/onlineadmission1.php"
             target="_blank" rel="noopener noreferrer"
             aria-label="Jetzt anmelden – NDSA-Onlineformular (öffnet in einem neuen Tab)">Jetzt anmelden</a>
        </nav>
      </div>
    </header>`;

  const page = location.pathname.split("/").pop() || "index.html";
  const activePage = page.startsWith("schulleben-") ? "schulleben.html" : page;
  const activeLink = [...document.querySelectorAll(".site-nav a")]
    .find(link => link.getAttribute("href") === activePage);
  activeLink?.setAttribute("aria-current", page === activePage ? "page" : "location");
}
