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
            elements: ["svg"],
            attributes: ["xmlns", "viewBox"],
          },
        ],
      ],
    },
  },
};
