import { createWriteStream } from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "node:path";
import readline from "node:readline";

const input = process.stdin;
const output = process.stdout;

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const filePath = path.join(_dirname, "files", "fileToWrite.txt");
const prompt = "Type something to see the output:\n";
const message = '\nGoodbye! Data is saved ("fileToWrite.txt").\n';

const write = async () => {
  const writableStream = createWriteStream(filePath);
  const rl = readline.createInterface({ input, output, prompt });

  rl.prompt();
  rl.on("line", (input) => writableStream.write(`${input}\n`));
  rl.on("close", () => output._write(message));
};

await write();