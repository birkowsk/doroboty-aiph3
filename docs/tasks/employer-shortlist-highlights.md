# Employer shortlist highlights ("Najlepsi na górze, reszta bez zmian")

Slug: `employer-shortlist-highlights`
Created: 2026\-11\-18
Quest: AIPH3 Q3.3 "Case Forge"

## Goal

Test whether a recruiter under time pressure starts from a short, explained shortlist when the same
application list shows 3–5 manually highlighted applications on top, each with a one-sentence
concrete reason, while every other application stays below in unchanged order and nothing is
hidden. The recruiter performs no new action.

The prototype tests **readability and starting behaviour only**. It does not test whether the
highlighting criterion identifies good candidates.

## Context (participant discovery)

- Need O05: "Chcę dostać kilka osób, z którymi warto rozmawiać, a nie tylko dużo zgłoszeń."
- Signals (3 CSV files, 8 interviews including 4 employers): applications per job +60%
  (37.5 → 60) while candidates continued after conversation fell (2.25 → 1.8); revenue per job flat;
  34% of purchases have 0–1 continuations; repurchase 46% with ≥2 continuations vs 27% with 0–1
  (correlation only, confounded by packages/No Limit); employers report time per application and ask
  for a short list instead of a full queue. Data appear generated.
- Chosen idea: I1 "Najlepsi na górze, reszta bez zmian".
- Match Score predicts invitations weakly (AUC 0.53), so highlights are chosen manually and are
  **not** derived from the score. Experiment E1 (validating a highlighting criterion) has not been
  run.

## Decisions

1. Highlights live in a separate read-only fixture (application id → reason). No change to
   `stateSchema`, storage key, import or export.
2. Control variant through the hash URL: `/#/app/kandydaci?wariant=kontrolny` shows the same list
   without highlights, in the original order.
3. Match Score display is unchanged on all cards.
4. Each application appears exactly once: highlighted ones in the top section, the rest below in
   their original relative order.
5. Synthetic applicants are additional candidate personas used only as application authors. They are
   hidden from the person picker by a fixture-based exclusion, not by a schema field.

## Plan

- [x] Read Poster People guidance (README, IMPLEMENTATION, VERIFICATION, design.md, API.md,
      reference) for the section/badge anatomy
- [x] Add ~15–20 synthetic applications to one job (BrightLabs "AI Product Manager", employer persona
      Karolina); keep `application-example`
- [x] Add highlight fixture (3–5 entries) and a pure selection function with unit tests
- [x] Render highlighted section + remaining list in the employer view only; control variant via URL
- [x] Hide synthetic applicants from the person picker
- [x] E2E coverage for both variants and the unchanged detail/decision path
- [x] Desktop 1440 / mobile 390, keyboard, empty-search state
- [x] Update FEATURES.md (EMP-07 changed, new simulated entry)
- [x] Run `./scripts/verify`; separate review pass
- [ ] Write the test protocol and Circle post draft

## Acceptance criteria

- [ ] As Karolina, `/#/app/kandydaci` shows a top section with 3–5 highlighted applications for the
      chosen job, followed by all other applications in unchanged order. No application is hidden
      or duplicated.
- [ ] Each highlight shows exactly one short Polish sentence with a concrete, verifiable reason
      taken from that candidate's answer or CV (e.g. "Opisał własny wkład w projekt X"). No generic
      praise, no words "AI", "rekomendacja AI", "model".
- [ ] The page states plainly that highlights are prepared manually for the prototype.
- [ ] Highlights are not simply the top Match Scores: no highlighted application has the highest
      score in the list, and at least one non-highlighted application scores higher than at least
      one highlighted application. The highlighted set is not trivially the "best-looking" cards.
- [ ] `?wariant=kontrolny` shows the same applications with the same data and no highlight section
      or reasons.
- [ ] Opening a card and recording stage decisions works identically for highlighted and other
      applications and in both variants.
- [ ] Search filters both sections; an empty result shows the existing empty state.
- [ ] Candidate "Moje aplikacje" and employer Tomasz's list are unchanged. A new application
      submitted during a session is never highlighted.
- [ ] Synthetic applicants do not appear in the person picker.
- [ ] Existing saved browser state keeps working; the test protocol tells the facilitator to reset
      the scenario to load new fixtures.
- [ ] FEATURES.md updated; `./scripts/verify` passes or the actual blocker is reported.

## Test protocol requirements (for the facilitator, not product code)

- Task: "Masz 2 minuty. Wybierz osoby, z którymi chcesz porozmawiać." Observe where the participant
  starts and count clicks until the first decision.
- Design (decided 2026-11-18): every participant sees both variants on the same data; order is
  counterbalanced (4 start with highlights, 4 with control). **Only the first exposure counts**
  toward the threshold; the second variant is used for the debrief conversation.
- Success threshold (revised from "≥6 of 8"): **at least 3 of the 4 participants who see the
  highlighted list first start from the highlighted section and do not click more than the control
  group (first exposure).** This is a readability signal from a small sample, not a statistical
  result.
- Highlights and recruiter participants are simulated; results speak only to readability.

## Files / Areas

- `src/features/prototype/workspace.tsx` (`ApplicationsPage`, `PersonPicker`)
- `src/features/prototype/model.ts` (`initialState` seeding only)
- `src/features/prototype/data/` (new applicant and highlight fixtures)
- Host CSS in `src/app/` only if an existing recipe does not cover the section
- `tests/e2e/prototype.spec.ts`, new unit test for highlight selection
- `FEATURES.md`

## Risks

- **Learning effect in within-subject tests:** with identical data in both variants, the second
  variant is seen by someone who already read the candidates. Counterbalancing spreads the bias but
  does not remove it. Resolved by counting first exposures only (4 vs 4); second exposure is
  qualitative.
- Too-easy test: highlighted cards on top are clicked because they are first. Mitigated by the
  score/reason criteria above; still a limit to state in results.
- Fixture growth makes the person picker and exports larger; exclusion keeps the picker usable.
- Playwright Chromium is installed locally with `npx playwright install chromium` (approved
  2026-11-18) into the user cache only; no package.json/lockfile change, no browser files committed.

## Fixture data (fictional)

**All applicants, CVs, answers, Match Scores and highlight reasons below are fictional, written for
this prototype test. They do not describe real people, companies or historical case evidence.**

- `src/features/prototype/data/shortlist-applicants.json`: 17 fictional applicants for BrightLabs
  "AI Product Manager". Together with the existing `application-example` (Marek Nowak) the queue has
  18 applications, all at stage "Aplikacja wysłana".
- `src/features/prototype/data/shortlist-highlights.json`: 4 manual highlights accepted by the
  participant on 2026-11-18 (Paweł Grabowski 58, Agnieszka Mazur 74, Ewa Pawlak 70, Magdalena Wróbel
  76). Every fact in a reason appears literally in that applicant's answer or CV.
- Existing ordering (verified 2026-11-18): the employer list does not sort applications; it shows
  `state.applications` in array order (oldest first; new submissions are appended). The control
  variant therefore keeps highlighted applications at positions 3, 6, 10 and 14; submission times
  increase with that order.
- Seeded through `initialState()` via `src/features/prototype/shortlist.ts`; synthetic applicants are
  excluded from the person picker. Existing browser saves must be reset to load the fixture.
- `shortlist.test.ts` guards the order, the score rule, one-sentence reasons without AI framing and
  the literal facts.

## Handoff Notes

- 2026-11-18, data step done (no screen changes yet): fixtures, seeding, picker exclusion,
  `splitShortlist` helper. Unit tests 33/33, typecheck, lint, Prettier and Playwright 34/34 pass
  locally. Next: employer list UI (highlight section + `?wariant=kontrolny`), e2e, FEATURES.md.
- 2026-11-18, UI step done. Employer list renders "Warto porozmawiać (4)" with a visible
  manual-highlight note and one reason per card, then "Pozostałe zgłoszenia (14)" in unchanged order.
  `?wariant=kontrolny` / `?wariant=wyroznione` set the variant, remembered per tab in sessionStorage
  so sidebar/back links keep it. Candidate list and Tomasz's list unchanged.
- Evidence (local, 2026-11-18): Playwright screenshots at 1280/390/320 px reviewed (no horizontal
  overflow, reasons wrap); control positions 3/6/10/14 confirmed; back link keeps control; search
  filters both sections; empty search shows existing empty state. `./scripts/verify` stops at
  `prettier --check .` only because of the untracked user file
  `.claude/skills/doroboty-landing-ui/SKILL.md` (not part of this change, left untouched). All other
  gate steps were run individually and pass: Prettier excluding `.claude/`, design-system:check,
  lint, typecheck, unit 35/35, verify:packet, build, e2e 35/35.
- Known limit: a highlighted application stays in the top section after rejection/withdrawal. Not
  relevant to the test (all seeded applications start as submitted).
- Not done yet: manual keyboard walk-through in a real browser, test protocol, Circle post draft.
