"""Rebuild src/data/programs.json from IPEDS files (NCES, public domain).
Usage: python3 -I build-programs.py <ipeds_dir> <out.json>
Files: C2024_a.csv (awards 2023-24 by CIP), HD2024.csv (directory), ic2023_ay.csv (tuition 2023-24), ic2023_py.csv (program tuition 2023-24).
CIP 51.0910 Diagnostic Medical Sonography/Sonographer and Ultrasound Technician; 51.0911 Radiologic Technology/Science - Radiographer."""
import csv, json, sys, os, statistics
D, OUT = sys.argv[1], sys.argv[2]
rd = lambda f: csv.DictReader(open(os.path.join(D, f), encoding='utf-8-sig', errors='replace'))
CIPS = {'51.0910': 'sono', '51.0911': 'rad'}
AW = {'20': 'cert', '21': 'cert', '2': 'cert', '4': 'cert', '3': 'assoc', '5': 'bach', '6': 'post', '7': 'master', '8': 'post', '17': 'doct'}
prog = {}
for x in rd('C2024_a.csv'):
    c = CIPS.get(x['CIPCODE'])
    if not c or x['MAJORNUM'] != '1': continue
    n = int(x['CTOTALT'] or 0)
    k = (x['UNITID'], c)
    p = prog.setdefault(k, {'u': x['UNITID'], 'cip': c, 'aw': {}, 'n': 0})
    lv = AW.get(x['AWLEVEL'], 'other')
    p['aw'][lv] = p['aw'].get(lv, 0) + n
    p['n'] += n
units = {u for u, _ in prog}
hd = {}
for x in rd('HD2024.csv'):
    if x['UNITID'] in units:
        hd[x['UNITID']] = {'name': x['INSTNM'].strip(), 'city': x['CITY'].strip(), 'st': x['STABBR'], 'control': {'1': 'public', '2': 'private nonprofit', '3': 'private for-profit'}.get(x['CONTROL'], ''), 'web': x['WEBADDR'].strip()}
def num(v):
    try: return int(float(v))
    except: return None
ay = {}
for x in rd('ic2023_ay.csv'):
    if x['UNITID'] in units:
        tf = lambda t, f: (num(x[t]) or 0) + (num(x[f]) or 0) if num(x[t]) else None
        ay[x['UNITID']] = {'instate': tf('TUITION2', 'FEE2'), 'outstate': tf('TUITION3', 'FEE3')}
py = {}
for x in rd('ic2023_py.csv'):
    if x['UNITID'] not in units: continue
    for i in range(1, 7):
        cip = (x.get(f'CIPCODE{i}') or '').strip()
        if cip in CIPS:
            t = num(x.get(f'CIPTUIT{i}')); s = num(x.get(f'CIPSUPP{i}')); L = num(x.get(f'CIPLGTH{i}')); u = (x.get(f'PRGMSR{i}') or '').strip()
            py[(x['UNITID'], CIPS[cip])] = {'tuition': t if t and t > 0 else None, 'supplies': s if s and s > 0 else None, 'length': L if L and L > 0 else None, 'unit': u}
rows = []
for (u, c), p in prog.items():
    h = hd.get(u)
    if not h or p['n'] == 0: continue
    r = {**p, **h}
    a = ay.get(u, {})
    r['instate'] = a.get('instate'); r['outstate'] = a.get('outstate')
    del r['web'], r['u']
    q = py.get((p['u'], c))
    if q: r['progTuition'] = q['tuition']; r['progLength'] = q['length']; r['progUnit'] = q['unit']
    rows.append(r)
# instate / outstate = tuition + required fees, 2023-24, undergraduate (IC2023_AY TUITION2+FEE2, TUITION3+FEE3).
rows.sort(key=lambda r: (r['st'], r['cip'], -r['n'], r['name']))
json.dump({'source': 'IPEDS: C2024_A (awards July 2023 - June 2024), HD2024, IC2023_AY, IC2023_PY; NCES, U.S. Department of Education', 'retrieved_at': '2026-11-13', 'programs': rows}, open(OUT, 'w'), ensure_ascii=False, separators=(',', ':'))
from collections import Counter
print(len(rows), Counter(r['cip'] for r in rows), len({r['st'] for r in rows}), 'states')
print('with program tuition', sum(1 for r in rows if r.get('progTuition')), 'with instate', sum(1 for r in rows if r.get('instate')))
