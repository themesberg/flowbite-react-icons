/** @type {import('prettier').Config} */
module.exports = {
  plugins: [
    "prettier-plugin-packagejson",
    "@ianvs/prettier-plugin-sort-imports",
  ],
  // sort-imports
  importOrder: [
    "<BUILTIN_MODULES>",
    "<THIRD_PARTY_MODULES>",
    "^~/(.*)$",
    "^[.]",
  ],
};
