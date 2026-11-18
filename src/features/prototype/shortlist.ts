import fixture from "./data/shortlist-applicants.json" with { type: "json" };
import highlightFixture from "./data/shortlist-highlights.json" with { type: "json" };
import type { Application, Person, State } from "./model";

// Synthetic applicants exist only to give one employer job a realistic queue for the
// shortlist readability test. Every person, answer and score here is fictional.
export const syntheticApplicantIds: ReadonlySet<string> = new Set(
  fixture.applicants.map((applicant) => applicant.id),
);

export function applicationIdFor(applicantId: string) {
  return applicantId.replace(/^applicant-/, "application-");
}

export function syntheticSeed(state: Pick<State, "jobs">): {
  people: Person[];
  applications: Application[];
} {
  const job = state.jobs.find((x) => x.id === fixture.jobId);
  if (!job) return { people: [], applications: [] };
  const people: Person[] = fixture.applicants.map((a) => ({
    id: a.id,
    role: "candidate",
    name: a.name,
    headline: a.headline,
    bio: "",
    location: a.location,
    cv: a.cv,
    exampleScore: a.score,
    exampleSummary: a.summary,
  }));
  const applications: Application[] = fixture.applicants.map((a) => ({
    id: applicationIdFor(a.id),
    candidateId: a.id,
    jobId: job.id,
    companyId: job.companyId,
    jobTitle: job.title,
    candidateName: a.name,
    cv: a.cv,
    answer: a.answer,
    sourceNotes: "",
    generatedAnswer: "",
    score: a.score,
    summary: a.summary,
    stage: "submitted",
    events: [{ stage: "submitted", at: a.submittedAt, note: "" }],
  }));
  return { people, applications };
}

// Manually prepared highlights (application id → one-sentence reason). Read-only and not part
// of the persisted scenario, so import/export and the state schema are unaffected.
export type Highlight = { applicationId: string; reason: string };
export const preparedHighlights: readonly Highlight[] = highlightFixture;

export type ShortlistVariant = "highlighted" | "control";

// The facilitator chooses the variant with `?wariant=kontrolny` or `?wariant=wyroznione`.
// It is remembered for the browser tab so that sidebar and back links (which drop the query)
// keep the participant in the same variant. Storage failures fall back to the URL/default.
export const SHORTLIST_VARIANT_KEY = "doroboty.shortlist-variant";
export function resolveShortlistVariant(
  param: string | null,
  storage: Pick<Storage, "getItem" | "setItem"> | null,
): ShortlistVariant {
  const fromParam =
    param === "kontrolny" ? "control" : param === "wyroznione" ? "highlighted" : null;
  try {
    if (fromParam) {
      storage?.setItem(SHORTLIST_VARIANT_KEY, fromParam);
      return fromParam;
    }
    return storage?.getItem(SHORTLIST_VARIANT_KEY) === "control" ? "control" : "highlighted";
  } catch {
    return fromParam ?? "highlighted";
  }
}

export function splitShortlist<T extends Pick<Application, "id">>(
  applications: readonly T[],
  variant: ShortlistVariant,
  highlights: readonly Highlight[] = preparedHighlights,
): { highlighted: { application: T; reason: string }[]; rest: T[] } {
  if (variant === "control") return { highlighted: [], rest: [...applications] };
  const reasons = new Map(highlights.map((h) => [h.applicationId, h.reason]));
  const highlighted: { application: T; reason: string }[] = [];
  const rest: T[] = [];
  for (const application of applications) {
    const reason = reasons.get(application.id);
    if (reason) highlighted.push({ application, reason });
    else rest.push(application);
  }
  return { highlighted, rest };
}
