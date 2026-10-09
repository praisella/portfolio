---
slug: planning-tool
order: 3
company: NucleusBI
title: AI-powered planning tool
tag: Internal tool
category: internal
year: "2026"
role: Product Manager, solo build
cover: /images/planning-tool/cover.jpg
alt: Sprint planner dashboard with capacity bars, health checks and a change digest
line: Replaced a manual, Excel-based sprint workflow across two SaaS product lines with a planner, quarter plan and prep tab.
metric: Sprint prep 1–2 hrs to under 10 min, adopted by 3 POs
rot: 1.5deg
hasCase: true
headline: An AI-powered planning tool that made the Scrum Master optional.
summary: Built from scratch to replace a manual, Excel-based sprint workflow across two SaaS product lines. Built solo, with AI as my development partner — live, adopted team-wide, and designed to run without me.
meta:
  - [Role, Product Manager]
  - [Timeline, Mar – May 2026]
  - [Team, "Solo build, Claude as dev partner"]
  - [Tools, "Claude, Jira, Supabase, Vercel"]
stats:
  - ["<10 min", "sprint setup, down from 1–2 hours of manual aggregation"]
  - ["15–30 min", cut from every planning meeting]
  - ["3 POs", adopted it in the same sprint it launched]
  - ["4 weeks", "build window, shipped on schedule"]
---

## Problem

### The Scrum Master was the single point of failure.

Sprint planning relied on spreadsheets, Jira filters and informal communication — with one person holding all the context.

- **Manual prep** 1–2 hours of aggregation before every planning meeting.
- **No audit trail** Scope additions, reassignments and blockers mid-sprint were updated by hand.
- **Roadmap disconnect** No link between the quarterly roadmap and sprint planning — every sprint started from scratch.
- **Chasing loop** Refinement status meant chasing each PO individually, every cycle.
- **Late violations** Missing PRDs, over-allocation and carry issues surfaced only after developer days were committed.

> The underlying risk: the moment the SM stepped back, everything either landed on someone else or disappeared.

## Solution

### Three tools, each built to remove one manual task.

I designed, scoped and built the full stack with Claude as my sole development partner. Each tool eliminates a task — it doesn't just digitise it.

- **Sprint Planner** Setup wizard pre-filled from the quarter plan, a locked planning baseline, automated health checks, and a one-click AI change digest that separates scope additions from delivery issues.
- **Quarter Plan** Baseline vs. actual allocation with heatmaps, timeline drift detection, and baseline locking so drift is always measured against an agreed start.
- **Prep Tab** One sprint ahead for Product Owners: each PO sees only their projects, with business and tech refinement readiness in one place.

**Deliberately not built:** drift tab, live sprint-to-quarter sync, mismatch flagging, a lock escape hatch, mobile. Six features cut against one bar: does it solve a known, validated problem?

## Results

### Adopted in its first sprint, handed over cleanly.

- **Adoption** Team-wide across 3 Product Owners within the launch sprint.
- **Time back** Sprint prep under 10 minutes; planning meetings 15–30 minutes shorter.
- **No more compiling** Automated health checks replaced pre-meeting SM compilation entirely.
- **Clearer accountability** The AI change digest made the cause of mid-sprint scope changes visible, settling a live stakeholder disagreement.
- **Handover-ready** All planning knowledge lives in the system — no dependency on the original owner.

## Learned

### If AI can't build it, the requirement isn't clear yet.

- **Precision** If I couldn't describe a requirement clearly enough for AI to build it correctly, it wasn't clear enough to build at all.
- **Scope is product** Every deferred feature was a documented trade-off, not a cut for time. That discipline let it ship, get adopted and be handed over.
- **Both hats** As a solo PM-engineer the usual product–engineering loop collapsed. Holding both perspectives at once sharpened both.
