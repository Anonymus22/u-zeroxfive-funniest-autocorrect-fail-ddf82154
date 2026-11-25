// Funniest Autocorrect Fail — make.fun entry
// Writes exactly one line (a hilarious autocorrect fail) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Honey, I booked our anniversary divorce for Friday at 7pm at that little Italian place, can't wait!";

// Deterministic guard: the bounty requires a single line of 1–199 chars.
// Fail loudly instead of writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 199 || ENTRY.includes("\n")) {
  throw new Error(`Invalid entry: must be one line of 1–199 chars, got ${ENTRY.length} chars.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
