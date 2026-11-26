// Fortune Cookie Funnies for Engineers — make.fun entry
// Writes one fortune-cookie one-liner for a software engineer to /output/entry.txt.
// Gate: UTF-8 text, 1 to 120 characters, single line, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";

// The joke: a fortune cookie predicts a mysterious stranger, and the twist is
// that the "stranger" is the engineer's own Friday merge coming back at 3 a.m.
// Fortune-cookie declarative, engineer world (production, deploy, bug), punchline last.
const FORTUNE =
  "You will meet a tall, dark stranger in production at 3 a.m. He is the bug you merged on Friday.";

if (FORTUNE.length < 1 || FORTUNE.length > 120) {
  throw new Error(`fortune is ${FORTUNE.length} chars, must be 1-120`);
}
if (FORTUNE.trim().length === 0 || FORTUNE.includes("\n")) {
  throw new Error("fortune must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
console.log(`Wrote ${FORTUNE.length} chars to /output/entry.txt`);
