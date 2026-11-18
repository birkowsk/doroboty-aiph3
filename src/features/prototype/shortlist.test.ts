import { describe, expect, it } from "vitest";
import fixture from "./data/shortlist-applicants.json" with { type: "json" };
import { initialState } from "./model";
import {
  preparedHighlights,
  resolveShortlistVariant,
  splitShortlist,
  syntheticApplicantIds,
} from "./shortlist";

const queue = () => {
  const s = initialState();
  return s.applications.filter((a) => a.jobId === fixture.jobId);
};
const highlightedIds = new Set(preparedHighlights.map((h) => h.applicationId));

// Literal facts each reason relies on; they must appear in the applicant's own answer or CV.
const facts: Record<string, string[]> = {
  "application-pawel-grabowski": ["14 wywiadów z księgowymi", "uzgadniania sald"],
  "application-agnieszka-mazur": [
    "wyłączeniu automatycznej klasyfikacji dokumentów",
    "poprawek przybyło o 30%",
  ],
  "application-ewa-pawlak": ["pilotaż obiegu faktur u dwóch klientów", "z 6 do 4 dni"],
  "application-magdalena-wrobel": [
    "próg jakości odczytu danych z umów",
    "ograniczyłam pierwszą wersję",
  ],
};

describe("shortlist test fixture", () => {
  it("seeds 18 applications for one job in the agreed order", () => {
    const apps = queue();
    expect(apps).toHaveLength(18);
    expect(apps[0].id).toBe("application-example");
    const positions = apps
      .map((a, index) => (highlightedIds.has(a.id) ? index + 1 : 0))
      .filter(Boolean);
    expect(positions).toEqual([3, 6, 10, 14]);
    const times = apps.map((a) => a.events[0].at);
    expect([...times].sort()).toEqual(times);
  });

  it("does not highlight the top Match Scores", () => {
    const apps = queue();
    const top = Math.max(...apps.map((a) => a.score));
    const highlighted = apps.filter((a) => highlightedIds.has(a.id));
    const others = apps.filter((a) => !highlightedIds.has(a.id));
    expect(highlighted).toHaveLength(4);
    expect(highlighted.every((a) => a.score < top)).toBe(true);
    const lowestHighlighted = Math.min(...highlighted.map((a) => a.score));
    expect(others.some((a) => a.score > lowestHighlighted)).toBe(true);
  });

  it("uses one concrete sentence per reason, without AI framing, backed by literal facts", () => {
    const apps = new Map(queue().map((a) => [a.id, a]));
    for (const { applicationId, reason } of preparedHighlights) {
      expect(reason.trim().match(/[.!?]/g)).toHaveLength(1);
      expect(reason).not.toMatch(/\bAI\b|rekomendac|model/i);
      const app = apps.get(applicationId);
      expect(app).toBeDefined();
      for (const fact of facts[applicationId]) expect(`${app!.answer}\n${app!.cv}`).toContain(fact);
    }
  });

  it("keeps synthetic applicants as candidate personas only", () => {
    const s = initialState();
    const synthetic = s.people.filter((p) => syntheticApplicantIds.has(p.id));
    expect(synthetic).toHaveLength(17);
    expect(synthetic.every((p) => p.role === "candidate")).toBe(true);
  });
});

describe("splitShortlist", () => {
  const apps = [{ id: "a" }, { id: "b" }, { id: "c" }, { id: "d" }];
  const highlights = [
    { applicationId: "c", reason: "Powód C." },
    { applicationId: "missing", reason: "Nieistniejące." },
  ];

  it("moves highlighted applications up once and keeps the rest in order", () => {
    const result = splitShortlist(apps, "highlighted", highlights);
    expect(result.highlighted).toEqual([{ application: { id: "c" }, reason: "Powód C." }]);
    expect(result.rest.map((a) => a.id)).toEqual(["a", "b", "d"]);
  });

  it("shows the unchanged list in the control variant", () => {
    const result = splitShortlist(apps, "control", highlights);
    expect(result.highlighted).toEqual([]);
    expect(result.rest.map((a) => a.id)).toEqual(["a", "b", "c", "d"]);
  });
});

describe("resolveShortlistVariant", () => {
  const memory = () => {
    const data = new Map<string, string>();
    return {
      getItem: (k: string) => data.get(k) ?? null,
      setItem: (k: string, v: string) => void data.set(k, v),
    };
  };

  it("defaults to highlights and remembers the facilitator's choice for the tab", () => {
    const store = memory();
    expect(resolveShortlistVariant(null, store)).toBe("highlighted");
    expect(resolveShortlistVariant("kontrolny", store)).toBe("control");
    expect(resolveShortlistVariant(null, store)).toBe("control");
    expect(resolveShortlistVariant("wyroznione", store)).toBe("highlighted");
    expect(resolveShortlistVariant(null, store)).toBe("highlighted");
  });

  it("falls back to the URL or default when storage is unavailable", () => {
    const broken = {
      getItem: () => {
        throw new Error("blocked");
      },
      setItem: () => {
        throw new Error("blocked");
      },
    };
    expect(resolveShortlistVariant("kontrolny", broken)).toBe("control");
    expect(resolveShortlistVariant(null, broken)).toBe("highlighted");
    expect(resolveShortlistVariant(null, null)).toBe("highlighted");
  });
});
