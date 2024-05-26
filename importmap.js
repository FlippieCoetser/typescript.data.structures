const importmap = {
  imports: {
    utilities: "./src/utilities/Utilities.js",
    types: "./src/Generic.types.js",
    object: "./src/Object.js",
    tuple: "./src/Tuple.js",
    graph: "./src/Graph.js",
  },
};

const injectImportmap = (importmap) => {
  const element = document.createElement("script");
  element.type = "importmap";
  element.textContent = JSON.stringify(importmap);
  document.currentScript.after(element);
};

injectImportmap(importmap);
