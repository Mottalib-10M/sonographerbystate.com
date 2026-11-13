/** Moteur sonographerbystate.com : comptes du tableau ASRT et frais ARRT/ARDMS lus le 2026-11-13. */
import { describe, expect, it } from 'vitest';
import * as E from '../src/lib/engine/imaging';

describe('états', () => {
  it('51 juridictions, comptes cohérents', () => {
    const c = E.counts();
    expect(c.total).toBe(51);
    expect(c.radL + c.radA + c.radS + c.radN).toBe(51);
    expect(c.read + c.blocked).toBe(51);
    expect(c.sono).toBe(5);
  });
  it('échographie licenciée dans DC, NH, NM, ND, OR', () => {
    expect(E.STATES.filter(E.sonoLicensed).map((s) => s.code).sort()).toEqual(['DC', 'ND', 'NH', 'NM', 'OR']);
  });
  it('Alabama : aucune règle, Illinois : accréditation', () => {
    expect(E.radKind(E.byCode('AL'))).toBe('N');
    expect(E.radKind(E.byCode('IL'))).toBe('A');
  });
});
describe('frais', () => {
  it('ARDMS : SPI 275 + spécialité 300', () => {
    expect(E.ardmsCost(1)).toBe(575);
    expect(E.ardmsCost(2, 2, 1)).toBe(275 * 2 + 300 * 3);
  });
  it('ARRT : primaire 225', () => {
    expect(E.arrtCost(1, 0, 0)).toBe(225);
    expect(E.arrtCost(1, 1, 1)).toBe(225 + 225 + 450);
  });
});
describe('écoles', () => {
  it('programmes filtrés aux 51 juridictions, triés', () => {
    expect(E.PROGRAMS.every((p) => E.STATES.some((s) => s.code === p.st))).toBe(true);
    const tx = E.programsOf('TX', 'sono');
    for (let i = 1; i < tx.length; i++) expect(tx[i - 1].n).toBeGreaterThanOrEqual(tx[i].n);
  });
});
