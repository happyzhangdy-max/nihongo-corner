[中文](README.zh-CN.md) · [日本語](README.ja.md) · **English**

# Nihongo Corner · 日语角

A static web app for learning Japanese through vocabulary, grammar, spaced review and spoken dialogue practice. Learners can look up a word, listen to examples, save it and return to it in a review session, all in the browser.

The interface and explanations are primarily in Chinese; the learning material is in Japanese. These three README translations describe the same application, rather than three application UI languages.

## Features

- **Vocabulary and grammar:** browse and search entries, filter by level, read examples and use speech playback.
- **Review and study plans:** saved words, a mistake collection, SM-2 spaced repetition and configurable study plans.
- **Vocabulary autoplay:** choose a level, topic or saved-word scope, then set the count and playback options. The catalog includes 12 topics and 5 special decks, with search, multiple selection and previews.
- **Scenario dialogues:** 24 scenarios with 12 communication tasks each, totaling 288 original two-person dialogues / 576 sentences. Lessons include speaker roles, kana, Chinese translations, keywords, individual playback, continuous playback and practice pauses.
- **Quizzes, two vocabulary games and four themes:** night, paper, sakura and ocean. Theme preferences persist independently of learning progress.
- **Optional AI features:** translation, explanations and Japanese text recognition from an uploaded, pasted or camera-selected image.

The current dataset contains **10,654 vocabulary records and 379 grammar records**. Vocabulary records include repeated written forms and different contexts; this is not a count of unique words. The curated topics include 430 reviewed legacy entries; 240 earlier scene-related entries and their IDs remain compatible with saved words and plans.

## Technology and structure

| Area | Implementation |
| --- | --- |
| UI and application logic | HTML, CSS and vanilla JavaScript; no frontend build step |
| Learning content | JavaScript datasets shipped with the site |
| Browser state | `localStorage` for saved words, review state, plans and preferences |
| Speech and images | Web Speech API; FileReader, Image and Canvas |
| AI requests | Shared JavaScript client and an external Cloudflare Worker proxy |
| Verification | Node.js built-in test runner, script checks, content audit and GitHub Actions |

Start at [index.html](index.html). Existing page logic lives partly in [inline.js](inline.js), with separate modules for [AI transport](ai-client.js), [image recognition](scan.js), [autoplay setup](autoplay-setup.js), [catalog selection](catalog-picker.js), [scene lessons](scene-study.js) and [scene audio](scene-audio.js).

## Implementation examples to review

### Preventing stale results and recovering from failures

Replacing or removing a scan image cancels the active request. A generation check also prevents an older response from overwriting the current image's result. Failed recognition keeps the image available for retry; failure to save history is handled separately from recognition success.

Read [scan.js](scan.js) and [ai-client.js](ai-client.js). The [scan tests](tests/scan.test.js), [AI client tests](tests/ai-client.test.js) and [search tests](tests/search.test.js) cover cancellation, malformed responses, storage failures and stale responses.

### Advancing playback after speech finishes

Scene playback waits for the current utterance to finish, applies the practice pause, then advances. Pause, manual navigation and stop invalidate obsolete callbacks so they cannot unexpectedly advance the queue. Scene queues are independent of vocabulary filters and saved-word selections.

Read [scene-audio.js](scene-audio.js), [scene-study.js](scene-study.js) and the [scene tests](tests/scenes.test.js).

### Keeping saved study state compatible

Stable vocabulary IDs preserve saved-word and plan references. Multiple catalog selections are deduplicated by ID, saved plans retain their order, and review scheduling supports legacy records.

Read [vocabulary-catalog.js](vocabulary-catalog.js) and [autoplay-setup.js](autoplay-setup.js), alongside the [catalog](tests/catalog.test.js), [autoplay](tests/autoplay.test.js) and [study tests](tests/study.test.js).

## Run locally

No production dependency installation or build is required. Serve the repository with any static HTTP server. For example, with Python 3, run from the repository root:

```sh
python -m http.server 8080 --bind 127.0.0.1
```

Open [http://127.0.0.1:8080](http://127.0.0.1:8080). Opening the HTML file directly is not equivalent to serving it over HTTP.

AI features require the configured external proxy and model service to be available. The proxy's server implementation is not included in this repository; local static hosting alone does not provide an AI backend.

## Verification

Use Node.js 22 or newer; `npm install` is not required:

```sh
node check.js
node --test
node scripts/audit-content.cjs
```

Local verification on **2026-09-06** passed: **28 script checks, 60 automated tests and the content structural audit**. The audit checks fields, IDs and known import defects; it also reports repeated word forms for review. It does not establish the linguistic accuracy of every entry.

[GitHub Actions](.github/workflows/check.yml) runs script checks and automated tests on pushes to `main` and on pull requests. Earlier browser checks and their scope are recorded in [the validation notes](docs/VALIDATION.md). This README update did not repeat mobile hardware or native application testing.

## Limitations and data handling

- **Browser storage:** learning state stays in the current browser. There is no account-based cloud synchronization in this codebase.
- **External AI services:** submitted queries and images are sent through the configured proxy to the model service. [ai-client.js](ai-client.js) centralizes configuration; provider secret keys are not embedded in the frontend.
- **Image processing:** the input limit is 20 MiB. Images are converted to JPEG with a maximum long edge of 1600 pixels before upload. HEIC/HEIF files that the browser cannot decode must first be converted to JPG or PNG. History stores recognition text, translations and explanations, not the image itself.
- **Speech and devices:** voices depend on the browser and device. Local browser checks do not replace physical Android/iOS camera or native app acceptance testing.
- **Learning content:** levels and recommendation order are study references, not an official JLPT syllabus or measured exam frequencies. Further linguistic review of legacy material remains necessary.
- **Scene sources:** scene dialogues are project-authored. Public teaching resources inform task contexts; their dialogues, audio and exam questions are not presented as imported materials. See [source and authorship boundaries](docs/SCENE_SENTENCES.md).
- **License:** the repository currently has no LICENSE file. These README translations do not grant a new license to reuse the code or learning material.

## Further documentation

The following detailed records are currently in Chinese:

- [Fixes and validation scope](docs/VALIDATION.md)
- [Content review and remaining limitations](docs/CONTENT_REVIEW_2026-09-05.md)
- [Catalog organization and compatibility](docs/SCENE_CATALOG.md)
- [Scenario dialogues and reference sources](docs/SCENE_SENTENCES.md)
