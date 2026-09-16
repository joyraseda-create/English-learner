# English Learner

A keyboard-driven English learning workspace that pairs typing-based vocabulary practice with structured grammar study, reading comprehension, sentence patterns, and a shared error notebook — built for learners who want to actually retain what they study.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![Deploy](https://github.com/joyraseda-create/English-learner/actions/workflows/deploy.yml/badge.svg)

## Live demo

https://english-learner-7pd.pages.dev/

A desktop browser gives the smoothest typing experience.

## Why this project

Most vocabulary apps let you swipe through cards. English Learner anchors new words to keystrokes — every word enters muscle memory through typing, then gets reinforced through grammar study, sentence patterns, and reading comprehension that draws from the same word bank. The error notebook closes the loop by routing mistakes from any module into a single place for review.

## Learning modules

### Typing — the core loop
Type the word, see the meaning, hear the pronunciation, track your WPM and accuracy per chapter. Dictation mode at the end of each chapter switches from recognition to recall. Supports 100+ dictionaries spanning CET-4/6, 高考, 考研, GRE, IELTS, TOEFL, and curated vocabulary sets such as *4000 Essential English Words* and *Oxford 3000/5000*.

### Gallery and dictionaries
Pick from built-in word banks or import your own JSON. Dictionaries are split into chapters with progress stats and review queues. Two gallery layouts (`Gallery` and `Gallery-N`) for different browsing styles.

### Grammar
A two-pane reference with explanations, examples, rules, and common-mistake callouts. Lessons are graded across three levels — **beginner** (小学), **intermediate** (初中), **advanced** (高中/大学) — drawn from *English Grammar in Use* and *Advanced Grammar in Use*. Each lesson has a paired exercise set covering recognition (choice), production (fill), and correction (rewrite).

The grammar curriculum includes word-form transformation work (verb forms, noun number, adjective degree, affixes, conversion, compounds, related pairs, and tense-aspect choices) as a first-class skill, with its own exercises.

### Sentence patterns
60+ core English patterns organized by level. Each pattern has a transformation drill, a wrong-sentence correction drill, a stage test, and per-pattern error tracking.

### Chinese-to-English
300 production drills (100 per level) with sentence-component annotation — subjects, verbs, objects, modifiers, complements — so learners see the structure behind the translation, not just the answer.

### Conversation
Scenario-based dialogue practice with native pronunciation (Web Speech API). Scenarios span travel, dining, work, social, and study contexts.

### Reading comprehension — newly added
150 graded articles, 50 per level, with auto-generated multiple-choice questions. Learners can browse articles by topic category and pick the ones they want. Each question carries a **strategy hint** keyed to its question type:

| Question type | Strategy |
|---------------|----------|
| Detail | Locate the answer in the passage; watch for synonyms |
| Main idea | Read topic sentences first; reject any option that's only part of the topic |
| Inference | No exact wording in the passage; reject absolute phrasing |
| Vocabulary | Use context clues (contrast, cause, example); reject literal meanings |
| Author's attitude | Track evaluative adjectives/adverbs; reject neutral options |

Strategy hints stay hidden until learners choose to view them — no spoiler before the first attempt, no shame after a wrong answer. The first wrong attempt on a given question auto-expands the hint once so the strategy is visible at the moment it matters most.

### Error book
A unified notebook that collects wrong answers from Typing, Grammar, Sentence Patterns, and Chinese-to-English. Filters by source and date; exportable to Excel. A dedicated **grammar error** tab tracks wrong questions from the grammar exercise sets.

### Analysis
Heatmap, keyboard-frequency bar charts, and progress line charts that visualize your typing consistency and per-dictionary accuracy over time.

## Other features

- Dark / light mode
- First-visit guided tour
- Local-only persistence (IndexedDB via Dexie); no account required
- Excel export for word banks and error logs
- Keyboard-first design — every action has a shortcut

## Tech stack

- **Framework:** React 18 + TypeScript
- **Build:** Vite
- **Styling:** Tailwind CSS + Headless UI + Radix UI
- **State:** Jotai atoms + React Context
- **Local storage:** Dexie.js (IndexedDB)
- **Routing:** React Router 6 (lazy-loaded routes)
- **Icons:** Iconify
- **Charts:** ECharts
- **Deployment:** Cloudflare Pages via GitHub Actions

## Local development

### Requirements
- Node.js ≥ 18
- npm

### Setup

```bash
cd englishlearner
npm install
npm run dev      # start the dev server (default: http://localhost:5173)
npm run build    # production build
npm run preview  # preview the production build
```

### Repository layout

```
English-learner/
├── englishlearner/                 # main application
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Typing/             # typing-based vocabulary practice (core)
│   │   │   ├── Gallery/            # dictionary browser (legacy)
│   │   │   ├── Gallery-N/          # dictionary browser (new)
│   │   │   ├── Grammar/            # grammar reference + exercises
│   │   │   ├── SentencePatterns/   # pattern drills
│   │   │   ├── ChineseToEnglish/   # production drills
│   │   │   ├── Conversation/       # dialogue scenarios
│   │   │   ├── Reading/            # reading comprehension + strategy hints
│   │   │   ├── ErrorBook/          # unified error notebook
│   │   │   ├── Analysis/           # progress visualizations
│   │   │   └── Mobile/             # mobile layout
│   │   ├── components/             # shared UI (Tooltip, Layout, ...)
│   │   ├── db/                     # Dexie schema
│   │   └── utils/                  # helpers
│   ├── public/                     # static assets
│   └── package.json
├── .github/workflows/              # CI/CD configuration
└── README.md
```

## Deployment

Pushing to `main` triggers a GitHub Actions workflow that builds the Vite bundle and deploys to Cloudflare Pages. Deployment status:

![Deploy](https://github.com/joyraseda-create/English-learner/actions/workflows/deploy.yml/badge.svg)

## Contributing

Issues and pull requests are welcome. For substantial changes, open an issue first to discuss the approach.

## License

MIT — see `LICENSE` for details.

---

If this project helps you learn, a star helps the project reach more learners.