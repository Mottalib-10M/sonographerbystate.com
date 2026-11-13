/**
 * Writing kit: every figure written in a page comes from here, never typed by hand.
 *   K.S(code), K.STATES, K.C        state rules (src/data/states.json: ASRT table + agency pages read on 2026-11-13)
 *   K.programsOf, K.awardsOf, K.medianTuition, K.NATIONAL   programs (src/data/programs.json, IPEDS)
 *   K.ARRT, K.ARDMS, K.ardmsCost, K.arrtCost                national exam fees (params-2026.json)
 *   K.EX                            the one example case of the whole site
 *   formats                         K.num, K.money, K.day("2026-11-13")
 */
import P from '../data/params-2026.json';
import { EX, longDate } from './tool-specs';
import { formatNumber } from './format';
import * as E from './engine/imaging';

export const KIT = {
  P, EX, READ: E.READ, STATES: E.STATES, S: E.byCode, C: E.counts(), E,
  programsOf: E.programsOf, awardsOf: E.awardsOf, medianTuition: E.medianTuition, NATIONAL: E.NATIONAL,
  ARRT: E.ARRT, ARDMS: E.ARDMS, ardmsCost: E.ardmsCost, arrtCost: E.arrtCost,
  num: (x: number) => formatNumber(x, 0), money: E.money, day: longDate,
};
export type Kit = typeof KIT;
