// SPDX-License-Identifier: MIT
// Alien Field Notes: The Two Day Earth Review — make.fun entry.
// Writes exactly one line (the review plus a trailing newline) to the output file.
// The review: an alien tourist rates Earth three stars — the oceans earn the
// praise, but the local custom baffles: every human trails a small wolf and
// reverently bags its droppings, which the visitor misreads as souvenir
// collecting and joins in, shipping twelve home before anyone explains.
// One joke, landed at the end; the rating up front frames it as a review.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "Three stars — gorgeous oceans, baffling customs: each human trails a small wolf, reverently bagging its droppings as souvenirs; I shipped home twelve before anyone explained.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW + "\n", "utf8");
