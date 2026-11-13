/**
 * State rules for radiologic technologists and sonographers (src/data/states.json, built by data-src/states.py from
 * the ASRT state table and the official agency pages read on 2026-11-13), programs (src/data/programs.json, built by
 * data-src/build-programs.py from the IPEDS files of NCES) and national exam fees (params-2026.json).
 * Pure functions: no figure is typed here, every one comes from the data.
 */
import D from '../../data/states.json';
import PR from '../../data/programs.json';
import P from '../../data/params-2026.json';

export interface Mod { lic: string; std: string; eq: string }
export interface State {
  code: string; name: string; slug: string; agency: string; page: string;
  agencies: Array<{ agency: string; url: string }>;
  read: 'read' | 'blocked'; mods: Record<string, Mod>; say: string[]; fees: Record<string, number>;
}
export type Cip = 'rad' | 'sono';
export interface Program {
  cip: Cip; aw: Record<string, number>; n: number; name: string; city: string; st: string; control: string;
  /** 2023-24 undergraduate tuition plus required fees, in-state and out-of-state (IPEDS IC2023_AY). */
  instate: number | null; outstate: number | null; progTuition?: number | null; progLength?: number | null; progUnit?: string;
}
export const STATES = (D as unknown as { states: State[] }).states;
export const READ: string = (D as unknown as { read: string }).read;
export const ASRT_URL: string = (D as unknown as { asrt: string }).asrt;
export const PROGRAMS = (PR as unknown as { programs: Program[] }).programs.filter((p) => STATES.some((s) => s.code === p.st));
export const ARRT = P.arrt;
export const ARDMS = P.ardms;
export const byCode = (code: string): State => {
  const s = STATES.find((x) => x.code === code);
  if (!s) throw new Error(`Unknown state ${code}`);
  return s;
};
export const STATE_OPTIONS = STATES.map((s) => ({ value: s.code, label: s.name }));
export const money = (x: number) => `$${Math.round(x).toLocaleString('en-US')}`;

/** Radiography in a state: L = a state credential (license, certificate, permit), A = state accreditation or
 *  registration, S = no state credential but an education or national-credential standard, N = nothing at state level. */
export type RadKind = 'L' | 'A' | 'S' | 'N';
export function radKind(s: State): RadKind {
  const m = s.mods.rad;
  if (m?.lic) return 'L';
  if (/accredit|register/i.test(m?.std ?? '')) return 'A';
  if (m?.std) return 'S';
  return 'N';
}
/** The word the state uses (ASRT table), lower case: "license", "certification", "permit"... */
export const radWord = (s: State) => (s.mods.rad?.lic || s.mods.rad?.std || '').toLowerCase();
export function radAnswer(s: State): string {
  switch (radKind(s)) {
    case 'L': return `Yes, a state ${radWord(s).replace(/^certified$/, 'certification')}`;
    case 'A': return /register/i.test(s.mods.rad.std) ? 'Yes, a state registration' : 'Yes, a state accreditation';
    case 'S': return 'No state license; a training standard applies';
    default: return 'No state license';
  }
}
export const radShort = (s: State) => ({ L: 'Yes', A: 'Yes', S: 'No', N: 'No' })[radKind(s)];
export const sonoLicensed = (s: State) => Boolean(s.mods.sono?.lic);
export const sonoAnswer = (s: State) => (sonoLicensed(s) ? `Yes, a state ${s.mods.sono.lic.toLowerCase().replace(/^certified$/, 'certification')}` : 'No state license');
export const limitedWord = (s: State) => (s.mods.limited?.lic ? s.mods.limited.lic.toLowerCase().replace(/^certified$/, 'certification') : '');
export const limitedAnswer = (s: State) => (limitedWord(s) ? `Yes: a limited ${limitedWord(s)}` : 'No limited credential in the ASRT table');
/** Modalities with a state credential, as names. */
const MOD_NAMES: Record<string, string> = { rad: 'radiography', limited: 'limited x-ray', sono: 'sonography', ct: 'CT', mr: 'MRI', nm: 'nuclear medicine', rt: 'radiation therapy', fluoro: 'fluoroscopy', mammo: 'mammography', bd: 'bone densitometry', ra: 'radiologist assistant', civi: 'cardiac and vascular interventional', fusion: 'fusion imaging' };
export const modName = (k: string) => MOD_NAMES[k] ?? k;
export const licensedMods = (s: State) => Object.entries(s.mods).filter(([, m]) => m.lic).map(([k]) => k);

/** Programs of a state for one discipline, biggest first. */
export const programsOf = (code: string, cip: Cip) => PROGRAMS.filter((p) => p.st === code && p.cip === cip).sort((a, b) => b.n - a.n || a.name.localeCompare(b.name));
export const awardsOf = (code: string, cip: Cip) => programsOf(code, cip).reduce((t, p) => t + p.n, 0);
export function median(xs: number[]): number | null {
  const a = xs.filter((x) => Number.isFinite(x) && x > 0).sort((p, q) => p - q);
  if (!a.length) return null;
  const m = Math.floor(a.length / 2);
  return a.length % 2 ? a[m] : Math.round((a[m - 1] + a[m]) / 2);
}
/** Median 2023-24 in-state yearly tuition and required fees of the institutions offering the discipline in a state (null if none). */
export const medianTuition = (code: string, cip: Cip, control?: 'public') => median(programsOf(code, cip).filter((p) => !control || p.control === 'public').map((p) => p.instate ?? 0));
/** Award levels in words. */
const AW: Record<string, string> = { cert: 'certificate', assoc: 'associate', bach: 'bachelor’s', post: 'post-degree certificate', master: 'master’s', doct: 'doctorate', other: 'other' };
export const levels = (p: Program) => Object.keys(p.aw).map((k) => AW[k] ?? k).join(', ');
export const NATIONAL = {
  rad: { programs: PROGRAMS.filter((p) => p.cip === 'rad').length, awards: PROGRAMS.filter((p) => p.cip === 'rad').reduce((t, p) => t + p.n, 0) },
  sono: { programs: PROGRAMS.filter((p) => p.cip === 'sono').length, awards: PROGRAMS.filter((p) => p.cip === 'sono').reduce((t, p) => t + p.n, 0) },
};
export const nationalMedianTuition = (cip: Cip) => median(PROGRAMS.filter((p) => p.cip === cip && p.control === 'public').map((p) => p.instate ?? 0));
export const awardsByLevel = (cip: Cip) => {
  const t: Record<string, number> = {};
  for (const p of PROGRAMS.filter((x) => x.cip === cip)) for (const [k, n] of Object.entries(p.aw)) t[k] = (t[k] ?? 0) + n;
  return t;
};

/** ARDMS: SPI once, plus one or more specialty exams, each taken any number of times. */
export function ardmsCost(specialties: number, spiTries = 1, specialtyRetakes = 0): number {
  return ARDMS.spi * Math.max(1, spiTries) + ARDMS.specialty * (Math.max(1, specialties) + Math.max(0, specialtyRetakes));
}
/** ARRT: one primary discipline, plus postprimary disciplines; supported = through an NMTCB or ARDMS credential. */
export function arrtCost(primary: number, postprimary: number, supported: number): number {
  return ARRT.primary * primary + ARRT.postprimary * postprimary + ARRT.postprimarySupportArdms * supported;
}

/** Program length in years by award, for the route estimate (the usual length of each award, stated as such). */
export const ROUTE_YEARS: Record<string, number> = { cert: 1, assoc: 2, bach: 4 };

export function counts() {
  const k = STATES.map(radKind);
  return {
    total: STATES.length,
    radL: k.filter((x) => x === 'L').length, radA: k.filter((x) => x === 'A').length, radS: k.filter((x) => x === 'S').length, radN: k.filter((x) => x === 'N').length,
    sono: STATES.filter(sonoLicensed).length, limited: STATES.filter((s) => limitedWord(s)).length,
    read: STATES.filter((s) => s.read === 'read').length, blocked: STATES.filter((s) => s.read === 'blocked').length,
  };
}
