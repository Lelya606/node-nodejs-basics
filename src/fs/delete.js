import * as fs from "node:fs/promises";
import { fileURLToPath } from "url";
import path, { dirname } from "node:path";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const filePath = path.join(_dirname, "files", "fileToRemove.txt");

const remove = async () => {
  try {
    await fs.rm(filePath);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await remove();