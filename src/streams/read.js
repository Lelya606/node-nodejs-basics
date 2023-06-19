import { createReadStream } from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "node:path";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const filePath = path.join(_dirname, "files", "fileToRead.txt");
const stdout = process.stdout;

const read = async () => {
  const stream = createReadStream(filePath, "utf-8");
  let text = "";

  stream.on("data", (chunk) => (text += chunk));
  stream.on("end", () => stdout._write(text));
};

await read();