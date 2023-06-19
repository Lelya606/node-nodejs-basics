import * as fs from "node:fs/promises";
import { fileURLToPath } from "url";
import path, { dirname } from "node:path";

const filename = fileURLToPath(import.meta.url);
const _dirname = dirname(filename);
const filePath = path.join(_dirname, "files", "fresh.txt");

const create = async () => {
  try {
    await fs.appendFile(filePath, "I am fresh and young");
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await create();