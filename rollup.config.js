import alias from "@rollup/plugin-alias";
import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import { rollupPluginUseClient } from "rollup-plugin-use-client";

const input = [
  "src/index.ts",
  "src/icons/solid/index.ts",
  "src/icons/outline/index.ts",
];
const external = ["react", "react/jsx-runtime"];

/**
 * @type {import('rollup').RollupOptions}
 */
export default [
  {
    input,
    output: [
      {
        format: "es",
        entryFileNames: "[name].mjs",
        dir: "dist/esm",
        preserveModules: true,
        sourcemap: true,
      },
      {
        format: "cjs",
        entryFileNames: "[name].cjs",
        dir: "dist/cjs",
        preserveModules: true,
        sourcemap: true,
      },
    ],
    external,
    plugins: [
      absoluteImports(),
      esbuild({
        sourceMap: false,
      }),
      rollupPluginUseClient(),
    ],
  },
  {
    input: {
      index: "src/index.ts",
      "icons/solid/index": "src/icons/solid/index.ts",
      "icons/outline/index": "src/icons/outline/index.ts",
      types: "src/types.ts",
    },
    output: [
      {
        format: "es",
        dir: "dist/types",
      },
    ],
    external,
    plugins: [absoluteImports(), dts()],
  },
];

function absoluteImports() {
  return alias({
    entries: [
      {
        find: "~/components/base-icon",
        replacement: "../../../components/base-icon",
      },
      {
        find: "~/types",
        replacement: "../../../types",
      },
    ],
  });
}
