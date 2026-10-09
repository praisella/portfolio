---
slug: isms-automation
order: 2
company: NucleusBI
title: ISMS automation assistant
tag: Internal tool
category: internal
year: "2026"
role: Product Manager, NucleusBI
cover: /images/isms-automation/cover.jpg
alt: Diagram of how the automation layer connects source systems, the compliance platform and human approval
line: Re-scoped a full custom build into a thin adopt-plus-AI layer that drafts security-compliance evidence — a person approves every change.
metric: First automated checks live and through user acceptance testing
rot: -2deg
hasCase: true
headline: Cutting compliance admin by not building most of the system.
summary: An internal tool at NucleusBI that cuts the manual admin of maintaining a security certification. It pairs one compliance platform, used as the system of record, with a Claude-powered layer that drafts evidence and runs checks — and a person approves every change before it's written.
meta:
  - [Role, Product Manager]
  - [Timeline, "2026, in build"]
  - [Team, 2 developers]
  - [Tools, "Claude, Figma"]
stats:
  - ["1", system of record, replacing several Jira boards and a wiki]
  - ["0", changes written without a person approving them]
  - ["0", compliance risk during the switch, thanks to a parallel run]
  - ["UAT", passed for the first automated checks]
---

## Problem

### Staying compliant was mostly repetitive admin, done by hand.

- **Manual checks** Hundreds of control checks tracked and verified by a person, across several Jira boards and a wiki, every cycle.
- **Manual evidence** Pulling evidence from source systems — contracts, suppliers, certificates — over and over.
- **No visibility** Risk scores couldn't be seen moving over time, policies sat static, and monitoring had no reliable trail.
- **Growing load** Work grew with every new control and audit, yet most of it only needed a human to confirm, not to do.

> The job to be done: cut the manual admin of staying compliant, without weakening the evidence an auditor will accept.

## Solution

### The smallest additive piece that removed the manual work.

- **Adopt, don't build** The brief leaned toward a full custom build. I re-scoped it: adopt a mature compliance platform unmodified, and build only the layer that didn't exist. That removed most of the build and the long-term maintenance.
- **AI drafts, never decides** Claude reads the live system and proposes each check and piece of evidence. A person approves every one, and the write runs under their own credential — so the platform's existing audit log becomes the approval record.
- **Three tiers of automation** Plain API checks where no judgement is needed, AI-assisted drafting where wording helps, and agentic workflows for heavy periodic work like audit prep. The least powerful tool that does each job.
- **Audit-defensible by design** Append-only evidence, and a strict parallel run: the old setup stays the source of truth until the new one passes an external audit.

![From manual admin to a system that drafts](/images/isms-automation/before-after.jpg)

![AI drafts, a human approves, the system writes](/images/isms-automation/ai-loop.jpg)

![Three tiers of automation](/images/isms-automation/three-tier.jpg)

**Deliberately not built:** a custom frontend, anything multi-tenant, customer-facing features, reporting automation, other frameworks. One bar: does it reduce admin for this internal use, before the first audit?

## Results

### Same outcome, a fraction of the effort.

- **Re-scoped the brief** Turned a full custom build into a thin adopt-plus-AI layer, for a fraction of the effort and maintenance.
- **Working checks** A first version of automated checks running against the live system and passing user acceptance testing.
- **Wrong assumptions caught early** Verified behaviour against the platform's source code, not its docs — before any assumption became build work.
- **No auto-commits** Audit-defensible by design, not by a bolt-on.
- **Zero transition risk** The existing setup keeps running in parallel.

## Learned

### Challenge the brief before you build it.

- **Scope is a product decision** The biggest decision wasn't how to build, but whether to build at all.
- **Verify against the source** Reading the platform's actual code repeatedly overturned what its docs implied — and saved weeks of duplicated work.
- **The audit trail is the product** Designing for the person who signs off at the end changed the architecture at the start.
- **Discovery first** Drawing out intent through questions meant that when direction shifted, it read as a planned rethink, not a failure.
