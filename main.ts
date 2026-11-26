// The Router Confesses — make.fun entry (program/v1).
// Writes a single one-line excuse from a home Wi-Fi router to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I saw the killer's face a second before you did, and after three years without a single thank-you, I decided you don't get the ending tonight.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${[...ENTRY].length} characters to /output/entry.txt`);
console.log(ENTRY);
