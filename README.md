# GPR Website

Statische, responsive Website für Gebäudereinigung Reshad (GPR).

## Dateien
- index.html
- styles.css
- script.js

## Start
Einfach `index.html` doppelklicken oder den gesamten Ordner auf einen Webserver hochladen.

## Vor Veröffentlichung ändern
1. Telefonnummer in `index.html`
2. E-Mail-Adresse in `index.html`
3. E-Mail-Adresse in `script.js` bei `CONTACT_EMAIL`
4. Einsatzgebiet / Stadt in `index.html`
5. Impressum mit vollständigen gesetzlichen Firmendaten
6. Datenschutzerklärung passend zu Hosting, Formularen und eventuell später eingebauten Diensten

## Kontaktformular
Das Formular öffnet aktuell das E-Mail-Programm des Besuchers über `mailto:`.

Für direkten Versand im Hintergrund benötigen Sie:
- ein eigenes Server-Backend, ODER
- einen Formularanbieter / API-Dienst.

Diese Version verwendet bewusst keine externen Tracker, Cookies oder JavaScript-Bibliotheken.
