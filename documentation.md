# Dokumentation

# 1. Links
<details>
  <summary>1. Links</summary>

  ## 1.1 Link auf die Internetseite
  [https://bea98c33-514c-4c1b-a8c8-f73f23341f9d-00-1dpzve96z23f4.riker.replit.dev/](https://bea98c33-514c-4c1b-a8c8-f73f23341f9d-00-1dpzve96z23f4.riker.replit.dev/)

  ## 1.2 Datenschutz an Schulen - IT.KULTUS-BW
  [https://it.kultus-bw.de/,Lde/Startseite/IT-Sicherheit/Datenschutz%20an%20Schulen](https://it.kultus-bw.de/,Lde/Startseite/IT-Sicherheit/Datenschutz%20an%20Schulen)

  ## 1.3 Formulare
  Hier ist der Link zur Einwilligungserklärung nach der neuen EU-DSGVO für Schüler ab 2023:
  
  [Einwilligung EU-DSGVO Schüler ab 2023](https://it.kultus-bw.de/site/pbs-bw-km-root/get/documents_E-2001020543/KULTUS.Dachmandant/KULTUS/Dienststellen/it.kultus-bw/Datenschutz%20an%20Schulen%20nach%20neuer%20EU%20DSGVO/dl-formulare/Einwilligung%20EU-DSGVO%20Sch%C3%BCler%20ab%202023.docx)

</details>

# 2. Vorteile einer HTML-basierten Lösung 
<details>
<summary>2. Vorteile einer HTML-basierten Lösung</summary>
Eine HTML-basierte Lösung für die Einholung von Einwilligungen zur Verarbeitung von Schülerdaten ist eine mögliche Idee, da sie geräteunabhängig ist und sowohl auf mobilen Geräten als auch auf Schul-PCs funktioniert.

Eine HTML-basierte Lösung für die Einholung von Einwilligungen zur Verarbeitung von Schülerdaten ist geräteunabhängig und funktioniert sowohl auf mobilen Geräten als auch auf Schul-PCs.
- Ein HTML-Formular wird erstellt, das die erforderlichen Felder für die Einwilligung zur Verarbeitung von Schülerdaten enthält, einschließlich Name des Schülers, Klasse, Name der Eltern und Kontaktdaten.

Das Formular wird benutzerfreundlich gestaltet, um sicherzustellen, dass Schülerinnen und Schüler sowie deren Eltern leicht verstehen, was von ihnen erwartet wird.

Eine klare Datenschutzerklärung wird integriert, um die Zwecke der Datenerhebung und -verarbeitung sowie die Rechte der Schülerinnen und Schüler zu erklären.

Validierungsregeln werden implementiert, um sicherzustellen, dass alle erforderlichen Felder ausgefüllt sind und die eingegebenen Daten korrekt sind.

Das Formular wird über eine sichere Verbindung (HTTPS) bereitgestellt, um die Sicherheit der übertragenen Daten zu gewährleisten.

Umfangreiche Tests werden durchgeführt, um sicherzustellen, dass das Formular auf verschiedenen Geräten und Browsern ordnungsgemäß funktioniert.
- Das Formular wird rechtzeitig zum Schuljahresbeginn bereitgestellt, und Schülerinnen und Schüler sowie deren Eltern werden angemessen darüber informiert, wie sie darauf zugreifen und die Einwilligung geben können.

Ein System wird eingerichtet, um die eingehenden Einwilligungen zu verwalten und zu verfolgen, um sicherzustellen, dass alle erforderlichen Einwilligungen vorliegen und ordnungsgemäß dokumentiert sind.
</details>

# 3. Ideen zur Automatisierung
<details>
<summary>3. Ideen zur Automatisierung</summary>
Um die Verarbeitung von Schülerdaten zu automatisieren und die Einwilligung der Schülerinnen und Schüler zur Veröffentlichung ihrer personenbezogenen Daten, Fotos und Aufnahmen zu erhalten, könnte man verschiedene Technologien und Ansätze nutzen. Hier sind einige Ideen:

Einrichtung einer Online-Plattform für Einwilligungserklärungen: Durch die Erstellung einer sicheren Online-Plattform können Schülerinnen und Schüler sowie deren Eltern die Einwilligung zur Datenverarbeitung elektronisch geben.

Nutzung von E-Mail-Kampagnen: Durch personalisierte E-Mails zu Schuljahresbeginn mit einem Link zur Einwilligungsplattform können Schülerinnen und Schüler und Eltern informiert werden und die Einwilligung geben.

Integration mit dem Schulmanagementsystem: Eine Integration der Einwilligungsplattform mit dem bestehenden Schulmanagementsystem erleichtert die Verwaltung der Schülerdaten und stellt sicher, dass alle Einwilligungen vorliegen.

Einsatz von E-Signatur-Technologien: Durch die Nutzung elektronischer Unterschriftstechnologien können Einwilligungsformulare digital unterzeichnet werden, was den Prozess beschleunigt und die rechtliche Verbindlichkeit sicherstellt.

Implementierung von Chatbots oder virtuellen Assistenten: Die Einbindung von Chatbots oder virtuellen Assistenten auf der Website oder Plattform kann Schülerinnen und Schülern bei Fragen zur Einwilligung helfen und sie durch den Prozess führen.

Automatisierte Erinnerungen und Follow-ups: Durch den Versand automatisierter Erinnerungen und Follow-up-Nachrichten kann sichergestellt werden, dass alle Schülerinnen und Schüler ihre Einwilligung geben.

Verwendung von Authentifizierungstechnologien: Durch den Einsatz von starken Authentifizierungstechnologien wird sichergestellt, dass nur berechtigte Personen die Einwilligung geben können und die Daten sicher bleiben.

Regelmäßige Überprüfung und Aktualisierung: Eine regelmäßige Überprüfung und Aktualisierung der Einwilligungen stellt sicher, dass diese den aktuellen Datenschutzbestimmungen entsprechen.

Durch die Kombination verschiedener Technologien und Prozesse kann die Verarbeitung von Schülerdaten automatisiert und die Einholung erforderlicher Einwilligungen vereinfacht werden, während Datenschutz und Sicherheit gewährleistet bleiben.
</details>

# 4. Versionen
<details>
<summary>Versionen</summary>

## V0.5 2024-06-24
- Einbettung und Testung des Microsoft Forms auf der Homepage (mit Hilfe von iframe) 

## V0.4 2024-06-24
- Nutzung von Microsoft Forms zur Datenabfrage
- Implementierung / Einbettung der Microsoft Forms Abfrage
  - Vorteil: Automatisierte und datenschutzrechtlich Konforme Abfrage und Speicherung von Schülerdaten
  - Unter Microsoft Forms erfolgt die Speicherung in einer Excel Datei. Dies ist datenschutzkonform gespeichert. Die Daten können zum Zwecke der Datenverarbeitung der Schule ausgewertet und verarbeitet werden.

## V0.3  2024-06-17 ... 2024-06-19
- Erweiterung der Formularabfragen
- Integration der Automatisierung

## V0.2  2024-06-13
- Erweiterung der Formularabfragen

## V0.1  2024-06-03
- Implementierung und Überführung der vollständigen Projektentwicklung auf replit.com
- Übernahme von weiteren Formularabfragen in index.html
</details>
