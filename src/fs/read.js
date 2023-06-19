import * as fs from "node:fs/promises";
import { fileURLToPath } from "url";
import path, { dirname } from "node:path";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const filePath = path.join(_dirname, "files", "fileToRead.txt");

const read = async () => {
  try {
    const text = await fs.readFile(filePath, "utf-8");
    console.log(text);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();