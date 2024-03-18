import alias from "@rollup/plugin-alias";
import esbuild from "rollup-plugin-esbuild";
import { rollupPluginUseClient } from "rollup-plugin-use-client";

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: [
    "src/icons/outline/index.ts",
    "src/icons/solid/index.ts",
    "src/index.ts",
  ],
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
      interop: "auto",
    },
  ],
  external: ["react", "react/jsx-runtime"],
  plugins: [
    alias({
      entries: [
        {
          find: "~/components/base-icon",
          replacement: "../../../components/base-icon",
        },
      ],
    }),
    esbuild({
      sourceMap: false,
    }),
    rollupPluginUseClient(),
  ],
};
