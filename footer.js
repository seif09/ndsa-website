document.querySelector("[data-site-footer]").outerHTML = `
  <footer class="site-footer">
    <div class="site-wrap">
      <div class="site-footer-inner">
        <div>
          <a class="site-footer-brand" href="index.html">
            <img src="assets/ndsa-logo.JPG" width="56" height="56" alt="">
            <span>Neue Deutsche Schule<br>Alexandria</span>
          </a>
        </div>

        <section aria-labelledby="footer-contact">
          <h2 id="footer-contact" class="site-footer-heading">Kontakt</h2>
          <address class="site-footer-address">
            El Madares Road<br>
            Mandara Kebly, Alexandria, Ägypten
          </address>
          <ul class="site-footer-links">
            <li><a href="tel:+2035168802" aria-label="Empfang anrufen: +20 3 516 8802">+20 3 516 8802</a></li>
            <li><a href="mailto:omneya.gaber@ndsalex.de">omneya.gaber@ndsalex.de</a></li>
            <li><a href="kontakt.html#anfahrt">Anfahrt planen <span aria-hidden="true">→</span></a></li>
          </ul>
        </section>

        <nav aria-labelledby="footer-links">
          <h2 id="footer-links" class="site-footer-heading">Nützliche Links</h2>
          <ul class="site-footer-links">
            <li><a href="ueber-uns.html">Über unsere Schule</a></li>
            <li><a href="anmeldung.html">Anmeldung &amp; Fristen</a></li>
            <li><a href="schulleben.html">Schulleben</a></li>
            <li><a href="index.html#eltern">Informationen für Eltern</a></li>
            <li><a href="kontakt.html#krankmeldung">Krankmeldung</a></li>
          </ul>
        </nav>
      </div>

      <div class="site-footer-bottom">
        <span>Website-Entwurf</span>
        <a href="kontakt.html">Alle Kontaktmöglichkeiten <span aria-hidden="true">→</span></a>
      </div>
    </div>
  </footer>`;
