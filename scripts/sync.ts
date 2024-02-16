import { $ } from "bun";
import { rimraf } from "rimraf";

const REPO_NAME = "flowbite-icons";
const REPO_URL = "https://github.com/themesberg/flowbite-icons.git";
const REPO_SVG_DIR = "src";
const SVGR_OUTPUT_DIR = "src/icons";

async function prepare() {
  console.log(`Prepare: Remove [${REPO_NAME}, ${SVGR_OUTPUT_DIR}] folders`);
  await rimraf([REPO_NAME, SVGR_OUTPUT_DIR]);
}

async function cloneRepo() {
  console.log("Cloning repo:", REPO_URL);
  await $`git clone ${REPO_URL} ${REPO_NAME}`;
}

async function generateIcons() {
  console.log("Generating icons");
  await $`bun run svgr --out-dir ${SVGR_OUTPUT_DIR} -- ${REPO_NAME}/${REPO_SVG_DIR}`;

  console.log("TODO: Creating index files");
}

async function cleanup() {
  console.log(`Cleanup: remove [${REPO_NAME}] folder`);
  await rimraf([REPO_NAME]);
}

await prepare();
await cloneRepo();
await generateIcons();
await cleanup();
