/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => MarcoPolo
});
module.exports = __toCommonJS(main_exports);

// code/index.ts
var import_obsidian2 = require("obsidian");

// code/search/search_modal.ts
var import_obsidian = require("obsidian");

// node_modules/escape-string-regexp/index.js
function escapeStringRegexp(string) {
  if (typeof string !== "string") {
    throw new TypeError("Expected a string");
  }
  return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}

// code/util.ts
function nthIndexOfInString(text, n, searchString) {
  let index = -1;
  for (let i = 0; i < n; i++) {
    index = text.indexOf(searchString, index + 1);
    if (index < 0)
      return text.length;
  }
  return index;
}

// code/search/search_modal.ts
var SearchModal = class extends import_obsidian.SuggestModal {
  // joins the files basename, the filepath and the content together and
  // then filters and sorts based on the number of occurrences
  async getSuggestions(query) {
    const keywords = query.trim().split(/\s+/g);
    const pattern = RegExp(keywords.map(escapeStringRegexp).join("|"), "gi");
    const files = this.app.vault.getMarkdownFiles();
    const results = await Promise.all(files.map(async (file) => {
      const content = `${file.basename}
${file.path}
${await this.app.vault.cachedRead(file)}`;
      let score = [...content.matchAll(pattern)].length;
      return { file, score };
    }));
    return results.filter((result) => !!result.score).sort((a, b) => b.score - a.score).map((result) => result.file);
  }
  // very simple rendering. could be improved
  async renderSuggestion(file, el) {
    el.createEl("div", { text: file.path });
    const content = await this.app.vault.cachedRead(file);
    const nth = nthIndexOfInString(content, 3, "\n");
    const text = content.slice(0, nth);
    el.createEl("small", { text }).setCssStyles({ opacity: "0.5" });
  }
  async onChooseSuggestion(file) {
    let leaf = this.app.workspace.getMostRecentLeaf();
    if (leaf === null)
      leaf = this.app.workspace.getLeaf();
    await leaf.openFile(file);
  }
};

// code/search/index.ts
function onload(plugin) {
  plugin.addRibbonIcon("search", "Search", () => {
    new SearchModal(this.app).open();
  });
  plugin.addCommand({
    id: "open-search-modal",
    name: "Open Search",
    callback: () => {
      new SearchModal(this.app).open();
    },
    hotkeys: [
      // warning: overlaps with the core-plugin "search"
      { modifiers: ["Ctrl", "Shift"], key: "f" }
    ]
  });
}

// code/index.ts
var MarcoPolo = class extends import_obsidian2.Plugin {
  onload() {
    onload(this);
  }
};