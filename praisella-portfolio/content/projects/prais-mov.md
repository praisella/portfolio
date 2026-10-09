---
slug: prais-mov
order: 1
company: Prais.MOV
title: Find your Seoul dance class
tag: Personal
category: personal
year: "2026"
role: Owner, solo build
cover: /images/prais-mov/cover.jpg
alt: The Prais.MOV quiz flow shown on three phones
line: A five-question quiz that recommends your first Seoul dance class — one opinionated pick, written in my own voice.
metric: ~120 users in the first 3 weeks, built in a day
rot: 2deg
hasCase: true
headline: A dance-class quiz that gives one honest answer instead of a directory.
summary: A mobile-first quiz that recommends which Seoul dance class to take first, written as if a dancer friend who knows the scene were telling you. Behind it is a hand-curated database of 25 teachers and 12 studios — I've taken class with every one of them.
meta:
  - [Role, Owner]
  - [Timeline, Live since Sep 2026]
  - [Team, "Solo build, Claude as dev partner"]
  - [Tools, "Claude, Supabase, Vercel"]
links:
  - [Try it live, "https://praismov.vercel.app/"]
  - ["@prais.mov on Instagram", "https://instagram.com/prais.mov"]
stats:
  - ["~120", users in the first three weeks, nearly all finish the quiz]
  - ["2,016", answer combinations covered by a regression suite]
  - ["5", real bugs caught before users found them]
  - ["1 day", from idea to a live product]
---

## Problem

### Seoul has hundreds of dance classes, and almost none are easy to navigate as an international beginner.

I started dancing at 26, and my first Seoul classes were intimidating. I kept notes after every class, and over time those notes became a database. The product question was how to make that knowledge useful to someone standing where I once stood.

- **Levels don't mean what they say** Almost no class posts a real level. "Open level" usually lands at intermediate; even "basic" is beginner-to-intermediate.
- **Discovery happens on Instagram** Schedules live in teacher and studio stories, mostly in Korean.
- **The emotional barrier is real** Can I go alone? Do I need Korean? What if I'm the worst in the room?
- **Language** Of the 24 teachers in the database at launch, only four could be approached in English — and none teach in English.

> The job to be done: "I want to dance in Seoul, but I have no idea where to start."

## Solution

### One opinionated recommendation, explained — not a directory.

A list of 25 teachers just recreates the original problem. So the product makes a single pick and explains it.

- **A five-question quiz** How much choreography you can catch, heels or sneakers, the feel you want, what matters in the room, how nervous you are. Every question that didn't change the answer was cut.
- **One answer, in my voice** The result leads with one teacher and why I'd send you there, then answers what a first-timer asks next: the class, getting there, a class I remember, a nerves Q&A, and two alternates.
- **Honest levelling** I re-rated every teacher on how hard their open class actually lands. True first-timers get a "start here" route before any teacher.
- **An engine that encodes judgement** A small, explainable weighted score — no ML, no scraping. Style leads; level, nerves, priority, my rating and English comfort follow.
- **Retention without a sign-up wall** Re-roll the result, tap alternates, share a link that reproduces your answers. Email comes last, as a waitlist.

![Anatomy of a result](/images/prais-mov/anatomy.jpg)

![The recommendation engine](/images/prais-mov/engine.jpg)

**Deliberately not built:** native app, accounts, live class schedules, a full directory, location filtering, paywall, community features. Live schedules were the hardest call — the product stores durable knowledge (how a teacher teaches) and links out to dynamic information (when they teach).

## Results

### Small, live, and tested harder than most production apps.

- **Usage** Around 120 people in the first three weeks, mostly from my Instagram — and nearly everyone who starts the quiz finishes it.
- **Quality** A regression suite covers all 2,016 answer combinations: zero crashes, zero dead ends, zero off-shoe picks, zero above-level picks without a warning.
- **Bugs caught early** Five real bugs found before users did, including one where 526 of 672 sneaker answers were told to bring heels.
- **Speed** Idea to live in a day, solo, on a free stack, with analytics and feedback capture from the start.

## Learned

### Curation is the moat, so the product has to protect it.

- **Protect the judgement** The most valuable data was my per-teacher read on difficulty. Every design choice after that was about getting it across faithfully — explanations over star ratings.
- **Honesty can be a feature** Recalibrating the levels felt like making the product less appealing. It made it more trustworthy, and led to the "start here" route.
- **A bug report is an insight** "Why am I told to bring heels?" exposed that an exclusion was being scored like a preference. Fixing the rule, not the symptom, made the whole engine more correct.
- **Stay the PM** I wrote almost no code by hand. My job was to make requirements precise, decide what not to build, and define "correct" clearly enough to test every combination.

> Shoe is a near-hard constraint, style is a preference. Wrong style in the right shoe beats right style in the wrong shoe.
