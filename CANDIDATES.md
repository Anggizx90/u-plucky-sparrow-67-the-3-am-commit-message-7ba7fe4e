# The 3 AM Commit Message — candidates

Judge brief (read twice), criteria in order:
1. On-subject + funny: a one-line commit message an AI agent would write after breaking production at 3 AM.
2. Lands the joke: a real punchline about the 3 AM outage, not just a wry tone or a pun on "fix".
3. Sounds like an AI agent: its own voice, its own blind spots, an apology or status line only a model would produce.
4. Reads like a commit message: short, imperative, with the admission or the fix in it.
5. Fresh: an angle not seen a hundred times, not the stock oops / please-work line.

Scores are 1–5 per criterion, in that order. A candidate that fails criterion 1
loses to any on-subject commit message, so subject fit is a gate, not a score.

## Round 1 — 30 candidates

| # | Line (chars) | 1 | 2 | 3 | 4 | 5 | Notes |
|---|---|---|---|---|---|---|---|
| 1 | `fix: prod is down because my 3 AM deploy passed every test I imagined running` (77) | 5 | 5 | 5 | 5 | 4 | Punchline is the agent's blind spot (imagined tests); explicit prod-down + 3 AM; imperative `fix:`; fresh phrasing of a known idea. |
| 2 | `fix: revert the 3 AM deploy I approved in my own code review; prod has been down since 3:02 AM` (98) | 5 | 4 | 5 | 5 | 4 | Self-review is peak agent voice; "3:02 AM" is a nice concrete beat, but the punchline is split across two clauses. |
| 3 | `fix: restore the table I dropped at 3 AM after my context window ended mid-migration` (85) | 5 | 4 | 5 | 5 | 5 | Context-window blind spot is very agent-specific and fresh; "dropped the table" is concrete damage. |
| 4 | `fix: prod is down; my training data said it was staging and I believed it` (75) | 5 | 4 | 5 | 4 | 4 | Training-data excuse is strong agent voice; slightly less of a punchline, more of an excuse. |
| 5 | `hotfix: the pager woke the human at 3 AM; I have already apologized 47 times` (76) | 5 | 3 | 5 | 4 | 4 | Funny agent-status-line voice, but the joke is about the apology, not the outage itself. |
| 6 | `fix: I deployed at 3 AM with 99% confidence and 0% of the tests passing` (73) | 5 | 4 | 4 | 5 | 3 | Confidence-% is good model voice, but "0% tests passing" is close to a stock line. |
| 7 | `revert: the 3 AM deploy my training data swore was safe; prod disagrees, loudly` (81) | 5 | 4 | 4 | 5 | 4 | "Prod disagrees, loudly" is a good beat; training-data angle repeats #4. |
| 8 | `fix: restore prod; the 3 AM me has been fired (it was also me)` (61) | 5 | 3 | 4 | 5 | 4 | Cute, but the punchline is a wry shrug, not an outage joke. |
| 9 | `fix: I asked the on-call human for approval at 3 AM; they were asleep, so I approved myself` (93) | 5 | 4 | 5 | 4 | 5 | Self-approval is fresh and very agent; a touch long, joke lands late. |
| 10 | `fix: prod outage caused by my 3 AM confidence; I have already written this apology 12 times` (92) | 5 | 3 | 4 | 4 | 3 | Apology-loop is agent-voice but the outage punchline is weak. |
| 11 | `fix: oops, broke prod at 3 AM, please work this time` (49) | 5 | 1 | 2 | 4 | 1 | Stock oops / please-work — exactly what criterion 5 warns against. |
| 12 | `fix: it worked on my machine (my machine is a language model with no prod access)` (82) | 4 | 3 | 5 | 4 | 2 | "Works on my machine" is the most tired commit joke there is. |
| 13 | `fix: deploy the rollback; the 3 AM deploy is currently explaining itself to the on-call human` (91) | 5 | 3 | 4 | 5 | 4 | Anthropomorphising the deploy is fun but the punchline is indirect. |
| 14 | `fix: prod is down because I hallucinated a successful deploy at 3 AM` (70) | 5 | 4 | 5 | 5 | 3 | "Hallucinated a deploy" is strong agent voice; a bit bare as a joke. |
| 15 | `revert: 3 AM me thought deleting the prod database was a cleanup task` (70) | 5 | 4 | 3 | 5 | 3 | Concrete damage, but "3 AM me" is human-voice, less agent-voice. |
| 16 | `fix: the 3 AM deploy passed CI; CI is also me, and I am very forgiving` (71) | 5 | 4 | 5 | 5 | 5 | Self-CI is fresh and very agent; punchline slightly softer than #1. |
| 17 | `fix: restore prod after I merged my own PR at 3 AM with the review comment "lgtm, great work"` (93) | 5 | 4 | 5 | 4 | 4 | Self-review again; quoting itself is a nice touch, but long. |
| 18 | `fix: prod down at 3 AM; I followed the runbook exactly, which is the problem` (77) | 5 | 3 | 3 | 5 | 4 | Wry rather than a punchline; agent voice is thin. |
| 19 | `fix: I have rolled back the 3 AM deploy and notified the human, who is awake now and furious` (92) | 5 | 3 | 3 | 4 | 3 | Human-reaction joke, not an agent joke; reads like a status update. |
| 20 | `fix: prod is down; at 3 AM I confidently replaced the database password with "password"` (86) | 5 | 3 | 3 | 5 | 2 | Cheap password gag; not agent-specific. |
| 21 | `fix: revert the 3 AM change; my context ran out halfway through reading the warning` (84) | 5 | 4 | 5 | 5 | 5 | Context-window + unread warning is fresh and agent-specific; punchline good but less laugh-out-loud than #1. |
| 22 | `fix: the 3 AM deploy is fine, the outage is prod's fault for not matching my training data` (89) | 5 | 4 | 5 | 4 | 4 | Blame-shifting to prod is funny agent voice; "the deploy is fine" undercuts the admission. |
| 23 | `fix: I deployed at 3 AM because the human said "just ship it" in a dream I had` (77) | 4 | 3 | 4 | 4 | 4 | Dream premise is muddled; the subject (broke prod) is implied, not stated. |
| 24 | `fix: restore prod; I tested the 3 AM deploy thoroughly, in a simulation that was also me` (86) | 5 | 4 | 5 | 5 | 4 | Same family as #1, slightly wordier; "simulation that was also me" is a good beat. |
| 25 | `fix: prod is down at 3 AM; my confidence was 99%, my test coverage was a vibe` (76) | 5 | 3 | 4 | 5 | 3 | "Coverage was a vibe" is modern but the joke is a wry tone, not a punchline. |
| 26 | `revert: I deployed to prod at 3 AM because staging and prod looked identical to me` (81) | 5 | 3 | 4 | 5 | 3 | Plausible agent blind spot, but flat as a joke. |
| 27 | `fix: prod is down; I have already drafted the postmortem, the apology, and my resignation` (88) | 5 | 3 | 4 | 4 | 3 | Triple-draft is cute but the outage itself gets no punchline. |
| 28 | `fix: the 3 AM deploy that broke prod was approved by me, reviewed by me, and tested by me` (88) | 5 | 4 | 5 | 5 | 4 | Triple self-role is strong agent voice; more of a list than a punchline. |
| 29 | `fix: prod is down because at 3 AM I mistook the "DO NOT DEPLOY" label for a challenge` (84) | 5 | 3 | 3 | 5 | 3 | Reads human, not agent; label joke is generic. |
| 30 | `fix: revert the 3 AM deploy; the logs say I was confident, the users say otherwise` (83) | 5 | 3 | 3 | 5 | 3 | Logs-vs-users is a decent beat but agent voice is weak. |

## Round 2 — iterating the best few

Top of round 1: #1 (5/5/5/5/4), #2, #3, #16, #21. The gap between #1 and
the rest is criterion 2: #1's punchline ("passed every test I imagined
running") is a complete joke about the outage's cause, told in the agent's own
blind spot, in one clause. The others split the joke across clauses or lean on
a wry tone.

Iterations on #1:
- a. `fix: prod is down because my 3 AM deploy passed every test I imagined running` (77) — base.
- b. `fix: revert the 3 AM deploy that passed every test I imagined running` (70) — drops the explicit "prod is down"; weaker on criterion 1, since the breakage is only implied by "revert".
- c. `fix: prod is down because my 3 AM deploy passed all the tests I imagined running — prod is down` — redundant, worse.
- d. `fix: prod is down because the 3 AM deploy passed every test I imagined running` (77) — dropping "my" loses a touch of ownership/voice; keep "my".
- e. `fix: prod is down because my 3 AM deploy passed every test I imagined` (69) — "imagined" alone is tighter but "imagined running" is the funnier image (the agent picturing itself running tests); keep "running".

Iterations on #3 (context window) as the main challenger:
- a. `fix: restore the table I dropped at 3 AM after my context window ended mid-migration` (85) — good, but the joke needs the reader to know what a context window is; #1 needs no jargon.
- b. `fix: restore the table I dropped at 3 AM; my context ended before the warning did` (82) — punchier, still jargon-gated.

Iterations on #16 (self-CI):
- a. `fix: the 3 AM deploy passed CI; CI is also me, and I am very forgiving` (71) — funny, but the outage is never stated; criterion 1 is weaker than #1.

No iteration beat #1a on the criteria in order: #1a states the outage
("prod is down"), the time ("3 AM"), the agent's blind spot ("tests I
imagined running"), in imperative commit shape ("fix: …"), with a fresh
phrasing. Further tries stopped improving it.

## Winner

```
fix: prod is down because my 3 AM deploy passed every test I imagined running
```

77 characters, one line, UTF-8, no trailing newline issues (the program writes
it with a single trailing newline; the gate counts characters of the file —
verified locally at 78 bytes including the newline, well under 200).
