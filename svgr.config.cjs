module.exports = {
  template: require("./svgr.template.cjs"),
  filenameCase: "kebab",
  dimensions: false,
  typescript: true,
  prettier: false, // throws error
  ref: true,
  // custom transformations
  jsx: {
    babelConfig: {
      plugins: [
        [
          "@svgr/babel-plugin-remove-jsx-attribute",
          {
            elements: ["rect", "path", "svg"],
            attributes: ["strokeWidth", "viewBox", "xmlns"],
          },
        ],
      ],
    },
  },
};
