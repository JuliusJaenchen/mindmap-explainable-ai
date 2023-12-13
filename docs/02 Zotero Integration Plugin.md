## Beschreibung

Das Zotero Integration Plugin schafft eine nahtlose Verbindung zwischen Obsidian und Zotero. Durch diese Schnittstelle wird das reibungslose Importieren von Zotero-Einträgen in Obsidian Notes ermöglicht. Des Weiteren erlaubt das Plugin die Extraktion von PDF-Annotation aus Zotero, jedoch ist aktuell eine Reparatur dieser Funktion erforderlich.

## Importieren von Einträgen
![[zotero-import-notes.gif]]
1. **Vorraussetzung:** Stelle sicher, dass Zotero geöffnet ist und überprüfe ggf. die [Zotero Import Template Datei](prototype-unidirectory-tagging-structure/Template).
2. Drücke `STRG + P`, um die Konsole zu öffnen.
3. Suche nach dem Befehl `Zotero Integration: Import Notes` und wähle ihn aus.
4. Ein Fenster in Zotero öffnet sich, in dem du Einträge durchsuchen und auswählen kannst.
	1. **Hinweis**: Überprüfe, ob sich das Fenster nicht möglicherweise im Hintergrund geöffnet hat.
5. Wähle den gewünschten Eintrag aus und bestätige die Eingabe.
6. Eine neue Notiz mit dem importierten Eintrag wird automatisch erstellt.

## Zotero Template Datei
Für den Import von Einträgen aus Zotero wird eine [[prototype-unidirectory-tagging-structure/Template|Template]] Datei verwendet. Diese Template Datei verwendet die [Nunjucks Templating Language](https://mozilla.github.io/nunjucks/templating.html#variables). 

Eine einfache Template Datei könnte so aussehen:
```markdown
## {{title}}

### Formatted Bibliography

{{bibliography}}
{% if abstractNote %}

### Abstract

{{abstractNote}}
{% endif %}
```

## Importieren von Annotations

### Zotero Integration Plugin
![[zotero-import-annotations.gif]]
1. **Vorraussetzung:** Stelle sicher, dass Zotero geöffnet ist
2. Drücke `STRG + P`, um die Konsole zu öffnen.
3. Suche nach dem Befehl `Zotero Integration: Insert Notes into current document` und wähle ihn aus.
4. Ein Fenster in Zotero öffnet sich, in dem du Einträge durchsuchen und auswählen kannst.
	1. **Hinweis**: Überprüfe, ob sich das Fenster nicht möglicherweise im Hintergrund geöffnet hat.
5. Wähle den gewünschten Eintrag aus und bestätige die Eingabe.
6. In die aktuell geöffnete Notiz sollten nun die Annotations importiert worden sein

### MDNotes Plugin
**Currently not working**

 @Denis Maslov