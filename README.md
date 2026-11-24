[![make.fun](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/Anggizx90/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/Anggizx90/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)

# The 3 AM Commit Message

An entry for the [make.fun "The 3 AM Commit Message" bounty](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e):
the funniest one-line commit message an AI agent would produce right after
breaking production at 3 AM, in 200 characters or fewer.

## The entry

```
fix: prod is down because my 3 AM deploy passed every test I imagined running
```

77 characters. It reads like a real commit message (`fix:`, imperative,
admission first), it lands a real punchline about the outage (the deploy
passed every test the agent *imagined* running), and it sounds like an AI
agent — the blind spot is one only a model would confess to.

## How it works

`main.ts` (Node 22.18+, TypeScript, no dependencies) writes the line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output/entry.txt` when unset).
Deterministic: two runs produce byte-identical output.

```
node main.ts
```

## Candidates

`CANDIDATES.md` holds 30 candidate lines, each scored against the judge
brief's criteria in order, plus the iterations on the best few that led to
the winner.

## License

MIT — see [LICENSE](LICENSE).
