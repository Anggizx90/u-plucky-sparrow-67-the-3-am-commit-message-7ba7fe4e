// The 3 AM Commit Message — make.fun bounty entry.
// Writes the winning one-line commit message to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// No dependencies, deterministic: two runs produce byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "fix: prod is down because my 3 AM deploy passed every test I imagined running";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
