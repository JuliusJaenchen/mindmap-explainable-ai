## Description

The Zotero Integration Plugin creates a seamless connection between Obsidian and Zotero. This interface enables the smooth import of Zotero entries into Obsidian Notes. Furthermore, the plugin allows the extraction of PDF annotations from Zotero, but this feature is currently partially buggy and therefore not very reliable.
## Prerequisite

In order to use the Zotero Integration Plugin, the Zotero Addon "Better BibTex" must be installed.
1. download the latest version of Better Bibtex: https://github.com/retorquere/zotero-better-bibtex
2. open Zotero and go to ``Tools > Addons`` and open the addon management window
3. click on the gear wheel, select `Install Add-On From File` and navigate to the file downloaded in step 2.
## Importing Notes
![[zotero-import-notes.gif]]
1. **Prerequisite:** Make sure that Zotero is open and check the [Zotero Import Template File](prototype-unidirectory-tagging-structure/Template) if necessary.
2. press `CTRL + P` to open the console.
3. search for the command `Zotero Integration: Import Notes` and select it.
4. a window will open in Zotero where you can browse and select entries.
	1. **Note**: Check that the window has not opened in the background.
5. select the desired entry and confirm the entry.
6. a new note with the imported entry is automatically created.

## Zotero template file
For the import of entries from Zotero, a [[prototype-unidirectory-tagging-structure/Template|Template]] file is used. This template file uses the [Nunjucks Templating Language](https://mozilla.github.io/nunjucks/templating.html#variables). 

A simple template file could look like this:
```markdown
## {{title}}

### Formatted Bibliography

{{bibliography}}
{% if abstractNote %}

### Abstract

{{abstractNote}}
{% endif %}
```

The annotations can also be imported by adding the following lines:
```markdown
{% for annotation in annotations %}
{% if annotation.annotatedText %}

> {{annotation.annotatedText}}
> {% endif %}
> {% if annotation.comment %}
> {{annotation.comment}}
{% endif %}
{% endfor %}
```
## Importing annotations

### Zotero integration plugin
**Partially bugged: [Issue #107](https://github.com/mgmeyers/obsidian-zotero-integration/issues/107)**
![[zotero-import-annotations.gif]]
1. **Prerequisite:** Make sure that Zotero is open
2. press `CTRL + P` to open the console.
3. search for the command `Zotero Integration: Insert Notes into current document` and select it.
4. a window will open in Zotero where you can browse and select entries.
	1. **Note**: Check that the window has not opened in the background.
5. select the desired entry and confirm the entry.
6. the annotations should now have been imported into the note that is currently open

### MDNotes Plugin
**Currently not working**

 @Denis Maslov