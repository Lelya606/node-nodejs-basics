import { createHash } from "node:crypto";
import * as fs from "node:fs/promises";
import { fileURLToPath } from "url";
import path, { dirname } from "node:path";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const filePath = path.join(
  _dirname,
  "files",
  "fileToCalculateHashFor.txt"
);

const calculateHash = async () => {
  const text = await fs.readFile(filePath, "utf-8");
  const hash = createHash("sha256").update(text).digest("hex");

  console.log(hash);
};

await calculateHash();