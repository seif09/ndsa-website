# NDSA · Website-Entwurf

`index.html` per Doppelklick öffnen. Die HTML-Seiten funktionieren ohne Installation. Die Illustration und die Links zur Schulwebsite benötigen Internetzugang.

| Inhalt | Datei |
| --- | --- |
| Startseite und Elternlinks | index.html |
| Schulprofil und Schulbereiche | ueber-uns.html |
| Anmeldung, Bewerbungsfragen und FAQ | anmeldung.html |
| Schulleben und Archivfilter | schulleben.html, schulleben.js |
| Beispielbeiträge und Galerien | schulleben-*.html |
| Kontakt und Demoformular | kontakt.html |
| Farben und Layout | styles.css |
| Formularverhalten | kontakt.js |

Die Seiteninhalte stehen in den jeweiligen HTML-Dateien. Kopfzeile und Navigation werden zentral in `header.js` gepflegt, die Fußzeile in `footer.js`. Die Gestaltung beider Bereiche liegt in `site-layout.css`. Beide Bereiche benötigen JavaScript und funktionieren auch in der lokalen Vorschau per Doppelklick.

Vor Veröffentlichung Logo, Farben, Bildmaterial, Anmeldeangaben, Kontaktdaten und rechtliche Seiten mit der Schule abstimmen. Das Formular öffnet eine E-Mail im lokalen E-Mail-Programm. Die Website selbst speichert und versendet keine Daten. Änderungen an der Empfängeradresse in kontakt.html beim Attribut data-recipient und in den sichtbaren Kontaktdaten vornehmen. Vor einer Veröffentlichung die Anmeldeunterlagen und Termine für das aktuelle Schuljahr bestätigen. Bildquelle: PASCH-Initiative, Schulporträt-Platzhalter. Offizielle Inhalte: https://neue-deutsche-schule-alex.de/.


Für neue Beiträge eine Artikelseite nach dem vorhandenen Muster anlegen und eine Karte in schulleben.html ergänzen. Kategorie und Schuljahr in den Datenattributen der Karte und den Filteroptionen abgleichen. Die Startseite zeigt drei Beispielbeiträge, deren Vorschau direkt in index.html gepflegt wird. Fotoplatzhalter durch freigegebene Bilder mit Alternativtext ersetzen.

Der Navigationsbutton „Jetzt anmelden“ öffnet das NDSA-Onlineformular in einem neuen Tab.
