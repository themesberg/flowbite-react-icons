import fs from "node:fs/promises";
import path from "path";
import { $ } from "bun";
import ora from "ora";
import { rimraf } from "rimraf";

const REPO = {
  URL: "https://github.com/themesberg/flowbite-icons.git",
  BRANCH: "main",
  DIR: "flowbite-icons",
  ICONS_DIR: "src",
};
const ICONS_OUTPUT_DIR = "src/icons";

async function cloneRepo() {
  const cleanup = ora(`Repo: remove [${REPO.DIR}] folder...`).start();
  await rimraf(REPO.DIR);
  cleanup.succeed();

  const clone = ora(
    `Repo: clone [${REPO.URL}] into [${REPO.DIR}] folder...`,
  ).start();
  await $`git clone --depth 1 -b ${REPO.BRANCH} ${REPO.URL} ${REPO.DIR}`.quiet();
  clone.succeed();
}

async function generateIcons() {
  const cleanup = ora(`Icons: remove [${ICONS_OUTPUT_DIR}] folder...`).start();
  await rimraf(ICONS_OUTPUT_DIR);
  cleanup.succeed();

  const generate = ora(
    `Icons: generate from [${REPO.DIR}/${REPO.ICONS_DIR}] folder into [${ICONS_OUTPUT_DIR}] folder...`,
  ).start();
  await $`bun run svgr --out-dir ${ICONS_OUTPUT_DIR} -- ${REPO.DIR}/${REPO.ICONS_DIR}`.quiet();
  await replaceSvgWithBaseIcon();
  await createIndexFiles();
  generate.succeed();
}

async function replaceSvgWithBaseIcon() {
  readFiles(ICONS_OUTPUT_DIR, (filePath) =>
    renameFileElement(filePath, "svg", "BaseIcon"),
  );
}

async function createIndexFiles() {
  const paths = await fs.readdir(ICONS_OUTPUT_DIR);

  for (const path of paths) {
    createIndexFile(`${ICONS_OUTPUT_DIR}/${path}`);
  }
}

async function createIndexFile(directoryPath: string) {
  const files = await fs.readdir(directoryPath);

  let data = "";

  for (const file of files.sort()) {
    data += `export * from "./${file}";`;
    data += "\n";
  }

  await Bun.write(`${directoryPath}/index.ts`, data);
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

async function formatIcons() {
  const format = ora(`Format: format [${ICONS_OUTPUT_DIR}] folder...`).start();
  await $`bun run prettier ${ICONS_OUTPUT_DIR} --write`.quiet();
  format.succeed();
}

async function cleanup() {
  const cleanup = ora(`Cleanup: remove [${REPO.DIR}] folder...`).start();
  await rimraf(REPO.DIR);
  cleanup.succeed();
}

await cloneRepo();
await generateIcons();
await formatIcons();
await cleanup();
