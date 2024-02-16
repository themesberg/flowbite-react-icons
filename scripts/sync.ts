import fs from "node:fs/promises";
import path from "path";
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
  console.log(`Repo: cloning [${REPO_URL}] into [${REPO_NAME}] folder...`);
  await $`git clone ${REPO_URL} ${REPO_NAME}`.quiet();
}

async function generateIcons() {
  console.log(`Icons: generating into [${SVGR_OUTPUT_DIR}] folder...`);
  await $`bun run svgr --out-dir ${SVGR_OUTPUT_DIR} -- ${REPO_NAME}/${REPO_SVG_DIR}`.quiet();
  await replaceSvgWithBaseIcon();
  // TODO: Creating index files
  await $`bun run format`.quiet();
}

async function replaceSvgWithBaseIcon() {
  readFiles(SVGR_OUTPUT_DIR, (filePath) =>
    renameFileElement(filePath, "svg", "BaseIcon"),
  );
}

async function renameFileElement(
  filePath: string,
  target: string,
  name: string,
) {
  const data = await Bun.file(filePath).text();
  const newData = data.replace(new RegExp(target, "g"), name);
  await Bun.write(filePath, newData);
}

async function readFiles(
  directoryPath: string,
  onReadFile: (filePath: string) => Promise<void>,
) {
  const files = await fs.readdir(directoryPath);

  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const stat = await fs.stat(filePath);

    if (stat.isDirectory()) {
      await readFiles(filePath, onReadFile);
    } else {
      await onReadFile(filePath);
    }
  }
}

async function cleanup() {
  console.log(`Cleanup: remove [${REPO_NAME}] folder`);
  await rimraf([REPO_NAME]);
}

await prepare();
await cloneRepo();
await generateIcons();
await cleanup();
